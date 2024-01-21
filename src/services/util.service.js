
export const utilService = {
  padTwo,
  makeId,
  getTargetPosition,
  calcModalPosition,
  getLabels,
  getMembers,
  checkDueDate,
  getStatusChecklist,
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


function getUserAvatar(user) {
  const username = user.fullname.split(' ')
  const firstName = username[0]
  const lastName = username[1]

  const firstLetter = firstName.charAt(0)
  const secondLetter = lastName ? lastName.charAt(0) : ''

  const avatar = { firstLetter, secondLetter }
  return avatar;
}


function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}