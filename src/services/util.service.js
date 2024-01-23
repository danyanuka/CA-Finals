
import { FastAverageColor } from "fast-average-color";

export const utilService = {
  padTwo,
  makeId,
  getTargetPosition,
  calcModalPosition,
  getLabels,
  getMembers,
  getStatusChecklist,
  getUserShortName,
  getImgAvgColor,
  isDarkImg,
  getUserAvatar,
  toTitleCase,
  getCleanURL,
  isDarkColor,
  getTimeStatus
};

function getCleanURL(url) {
  const regex = /url\((.*?)\)/;
  const cleanUrl = url.match(regex)[1];
  return cleanUrl;
}

function padTwo(num) {
  return String(num).padStart(2, "0");
}

function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getTargetPosition(targetElement) {
  const elementRect = targetElement.getBoundingClientRect();
  return {
    bottom: elementRect.bottom,
    left: elementRect.left,
    right: elementRect.right,
    top: elementRect.top,
  };
}

function calcModalPosition(buttonPos, modalSize) {
  const windowSize = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  let modalPos = {};

  // Horizontal
  if (buttonPos.left + modalSize.width < windowSize.width) {
    modalPos.left = buttonPos.left;
  } else {
    modalPos.right = 0;
  }

  // Vertical
  if (buttonPos.bottom + 8 + modalSize.height < windowSize.height) {
    modalPos.top = buttonPos.bottom + 8;
  } else if (buttonPos.top - 8 - modalSize.height > 0) {
    modalPos.bottom = windowSize.height - (buttonPos.top - 8);
  } else {
    modalPos.bottom = 4.4;
  }

  return modalPos;
}

function getLabels(labelIds, board) {
  let labels = [];
  labelIds?.map((labelId) => {
    let label = board.labels?.find((label) => labelId === label.id);
    labels.push(label);
  });
  return labels;
}

function getMembers(memberIds, board) {
  let members = [];
  memberIds?.map((id) => {
    let member = board.members?.find((member) => id === member._id);
    members.push(member);
  });
  return members;
}

function getTimeStatus(timestamp) {
  const currentTimestamp = new Date().getTime();
  const timeDifferenceHours = (timestamp - currentTimestamp) / (1000 * 60 * 60);

  if (timeDifferenceHours < 0 && timeDifferenceHours > -24) {
    return 'yesterday'
  } else if (timeDifferenceHours < 0) {
    return 'past';
  } else if (timeDifferenceHours < 24) {
    return 'today';
  } else if (timeDifferenceHours < 48) {
    return 'tomorrow';
  } else {
    return 'future';
  }
}

function getStatusChecklist(checklist) {
  let todos;
  let isDone = [];

  checklist?.map((list) => (todos = list.todos));

  todos?.map((todo) => {
    if (todo.isDone) {
      isDone.push(todo);
    }
  });

  const counts = {
    todos: todos?.length,
    isDone: isDone.length,
  };

  return counts;
}

function getUserShortName(fullName) {
  const nameParts = fullName?.split(" ");
  if (nameParts?.length >= 2) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  } else if (nameParts?.length == 1 && nameParts[0].length >= 2) {
    return nameParts[0].slice(0, 2).toUpperCase();
  }
  return "N/A";
}

async function getImgAvgColor(imgPath) {
  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(imgPath);
  return color.hex;
}

async function isDarkImg(imgPath) {
  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(imgPath);
  return color.isDark;
}

async function isDarkImg2(imgPath) {
  const img = await _loadImage(imgPath);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (img.width == 0) return true;
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  const rgbaData = ctx.getImageData(0, 0, img.width, img.height).data;
  canvas.remove();

  let i;
  let sum_r = 0;
  let sum_g = 0;
  let sum_b = 0;
  let sum_a = 0;
  for (i = 0; i + 3 < rgbaData.length; i += 4) {
    sum_r += rgbaData[i];
    sum_g += rgbaData[i + 1];
    sum_b += rgbaData[i + 2];
    sum_a += rgbaData[i + 3];
  }
  const avg_r = sum_r / (i / 4);
  const avg_g = sum_g / (i / 4);
  const avg_b = sum_b / (i / 4);
  const avg_a = sum_a / (i / 4); // Convertion of RGBA to RGB isn't needed, because (a == 255)

  // https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color
  // Step 1
  let vR = avg_r / 255;
  let vG = avg_g / 255;
  let vB = avg_b / 255;

  // Step 2
  vR = _sRGBtoLin(vR);
  vG = _sRGBtoLin(vG);
  vB = _sRGBtoLin(vB);

  // Step 3
  const Y = 0.2126 * vR + 0.7152 * vG + 0.0722 * vB;

  // Step 4 
  const Lstar = YtoLstar(Y)

  if (Lstar < 50)
    return true
  return false

}

async function _loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function _sRGBtoLin(colorChannel) {
  // Send this function a decimal sRGB gamma encoded color value
  // between 0.0 and 1.0, and it returns a linearized value.
  if (colorChannel <= 0.04045) {
    return colorChannel / 12.92;
  } else {
    return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
  }
}

function _YtoLstar(Y) {
  // Send this function a luminance value between 0.0 and 1.0,
  // and it returns L* which is "perceptual lightness"
  if (Y <= 216 / 24389) {
    // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
    return Y * (24389 / 27); // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
  } else {
    return Math.pow(Y, 1 / 3) * 116 - 16;
  }
}

function hexToRgb(hex) {
  hex = hex.toLowerCase()
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function isDarkColor(hexColor, midVal=50) {
  const rgbColor = hexToRgb(hexColor);

  let vR = rgbColor.r / 255;
  let vG = rgbColor.g / 255;
  let vB = rgbColor.b / 255;

  // Step 2
  vR = _sRGBtoLin(vR);
  vG = _sRGBtoLin(vG);
  vB = _sRGBtoLin(vB);

  // Step 3
  const Y = 0.2126 * vR + 0.7152 * vG + 0.0722 * vB;

  // Step 4
  const Lstar = _YtoLstar(Y);

  if (Lstar < midVal) {
    return true
  };
  return false;
}

function getUserAvatar(user) {
  const username = user.fullname.split(" ");
  const firstName = username[0];
  const lastName = username[1];
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
