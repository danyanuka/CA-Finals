
export const utilService = {
  padTwo,
  makeId,
  getTargetPosition,
  calcModalPosition,
  getLabels,
  checkDueDate,
  getStatusChecklist
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

function checkDueDate(dueDate) {
  const today = new Date()
  const tomorrow = new Date(today)

  let dateStatus = {
    isPass: null,
    isToday: null,
    isTomorrow: null
  }

  if (dueDate < Date.now()) {
    return { ...dateStatus, isPass: true }
  }
  if (dueDate === Date.now()) {
    return { ...dateStatus, isToday: true }
  }
  if (dueDate > tomorrow) {
    return { ...dateStatus, isTomorrow: true }
  }

  return dateStatus
}

function getStatusChecklist(checklist) {
  let todos = [];
  let isDone = []

  checklist?.map((list) => {
    todos.push(list.todos)
  })

  todos?.map((todo) => {
    if (todo.isDone) {
      isDone.push(todo)
    }
  })

  const counts = {
    todos: todos.length + 1,
    isDone: isDone.length + 1
  }

  return counts
}

