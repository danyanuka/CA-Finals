
// async function saveTask(taskToSave, groupId, board) {
//     try {
//       const type = taskToSave.id ? 'UPDATE_TASK' : 'ADD_TASK';
//       const boardToSave = await boardService.save(board);
//       store.dispatch({ type, board: boardToSave });
//     } catch (err) {
//       console.log("Had issues loading boards", err);
//       throw err;
//     }
//   }