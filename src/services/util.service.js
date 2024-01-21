
import isDarkColor from 'is-dark-color'
import { FastAverageColor } from 'fast-average-color';


export const utilService = {
  padTwo,
  makeId,
  getTargetPosition,
  calcModalPosition,
  getLabels,
  getMembers,
  checkDueDate,
  getStatusChecklist,
  getUserShortName,
  isDarkImg,
  getUserAvatar,
  toTitleCase
};

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
  let labels = []
  labelIds?.map((labelId) => {
    let label = board.labels?.find(label => labelId === label.id)
    labels.push(label)
  })
  return labels
}

function getMembers(memberIds, board) {
  let members = []
  memberIds?.map((id) => {
    let member = board.members?.find(member => id === member._id)
    members.push(member)
  })
  return members
}

//not working yet
function checkDueDate(dueDate) {
  const today = Date.now()
  // console.log(today);
  const tomorrow = Date.now() + 1
  // console.log(tomorrow);

  let dateStatus = {
    isPass: null,
    isToday: null,
    isTomorrow: null
  }

  if (dueDate < today) {
    return { ...dateStatus, isPass: true }
  }
  if (dueDate === today) {
    return { ...dateStatus, isToday: true }
  }
  if (dueDate > tomorrow) {
    return { ...dateStatus, isTomorrow: true }
  }

  return dateStatus
}

function getStatusChecklist(checklist) {
  let todos;
  let isDone = []

  checklist?.map((list) => (
    todos = list.todos
  ))

  todos?.map((todo) => {
    if (todo.isDone) {
      isDone.push(todo)
    }
  })

  const counts = {
    todos: todos?.length,
    isDone: isDone.length
  }

  return counts
}

function getUserShortName(fullName) {
  const nameParts = fullName?.split(' ')
  if (nameParts?.length >= 2) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase()
  } else if (nameParts?.length == 1 && nameParts[0].length >= 2) {
    return nameParts[0].slice(0, 2).toUpperCase()
  }
  return "N/A"
}

// async function isDarkImg(imgPath) {
//   const fac = new FastAverageColor();
//   const color = await fac.getColorAsync(imgPath);
//   console.log("color.isDark: ", color.isDark)
//   return color.isDark
// }

async function isDarkImg(imgPath) {
  const img = await _loadImage(imgPath)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (img.width == 0) return true
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0)
  const rgbaData = ctx.getImageData(0, 0, img.width, img.height).data;
  console.log(rgbaData)
  canvas.remove()

  let sum_r = 0;
  let sum_g = 0;
  let sum_b = 0;
  let sum_a = 0;
  for (let i = 0; i + 3 < rgbaData.length; i += 4) {
    sum_r += rgbaData[i];
    sum_g += rgbaData[i + 1];
    sum_b += rgbaData[i + 2];
    sum_a += rgbaData[i + 3];
  }
  // get avg and calculate


  console.log("rgbaData: ", rgbaData)
  return true
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


function getUserAvatar(user) {
  const username = user.fullname.split(' ')
  const firstName = username[0]
  const lastName = username[1]
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

