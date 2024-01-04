export const utilService = {
  padTwo,
  makeId,
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

// function getEventPositionData(ev) {
//   const elementRect = ev.target.getBoundingClientRect();
//   const { clientY, clientX } = ev;
//   const mousePos = { clientX, clientY };
//   const data = {
//     elementRect: {
//       bottom: elementRect.bottom,
//       height: elementRect.height,
//       left: elementRect.left,
//       right: elementRect.right,
//       top: elementRect.top,
//       width: elementRect.width,
//       x: elementRect.x,
//       y: elementRect.y,
//     },
//     mousePos,
//   };
//   return data;
// }
