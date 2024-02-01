import { useEffect } from "react";
import { Outlet, useParams } from "react-router";

//redux
import { useSelector } from "react-redux";
import { boardActions } from "../store/actions/board.actions";

//cmps
import { AppDynHeader } from "../cmp/AppDynHeader";
import { BoardHeader } from "../cmp/BoardDetails/BoardHeader";
import { GroupList } from "../cmp/BoardDetails/GroupList";

//services
import { groupService } from "../services/group.service";
import {
  socketService,
  SOCKET_EVENT_BOARD_UPDATE,
  SOCKET_EMIT_WATCH_BOARD,
  SOCKET_EMIT_UNWATCH_BOARD,
} from "/src/services/socket.service";

export function BoardDetails() {
  const params = useParams();
  const board = useSelector((storeState) => storeState.boardModule.curBoard);

  useEffect(() => {
    socketService.on(SOCKET_EVENT_BOARD_UPDATE, loadBoard);
    return () => {
      socketService.off(SOCKET_EVENT_BOARD_UPDATE, loadBoard);
    };
  }, []);

  useEffect(() => {
    loadBoard();
    socketService.emit(SOCKET_EMIT_WATCH_BOARD, params.boardId);
    return () => {
      socketService.emit(SOCKET_EMIT_UNWATCH_BOARD, "");
    };
  }, [params.boardId]);

  async function loadBoard() {
    try {
      await boardActions.loadBoard(params.boardId);
    } catch (err) {
      console.log("Had issues loading board", err);
    }
  }

  async function onAddGroup(newGroup) {
    return groupService.addGroup(newGroup, board);
  }

  async function onAddTask(newTask, groupId, addToStart) {
    return groupService.addTask(newTask, groupId, board, addToStart);
  }

  async function onEditGroup(newGroup) {
    return groupService.updateGroup(newGroup, board);
  }

  async function onUpdateTask(newTask, groupId) {
    console.log(newTask);
    return groupService.updateTask(newTask, groupId, board);
  }

  return (
    <div className="home" style={board?.style}>
      <AppDynHeader />
      <BoardHeader />
      <div className="group-list-container ">
        {board && (
          <GroupList
            board={board}
            onAddGroup={onAddGroup}
            onAddTask={onAddTask}
            onEditGroup={onEditGroup}
            onUpdateTask={onUpdateTask}
          />
        )}
        <Outlet />
      </div>
    </div>
  );
}
