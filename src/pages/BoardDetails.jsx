import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router"

//redux
import { useSelector } from "react-redux";
import { boardActions } from "../store/actions/board.actions";

//cmps
import { AppHeader } from "../cmp/AppHeader";
import { BoardHeader } from "../cmp/BoardDetails/BoardHeader";
import { GroupList } from "../cmp/BoardDetails/GroupList";

//services
import { groupService } from "../services/group.service";

export function BoardDetails() {
  const params = useParams()
  const board = useSelector(storeState => storeState.boardModule.curBoard)

  useEffect(() => {
    loadBoard()
  }, [params.boardId])

  async function loadBoard() {
    try {
      await boardActions.loadBoard(params.boardId)
    } catch (err) {
      console.log('Had issues loading board', err);
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


  return (
    <div className="home" style={board?.style}>
      <AppHeader />
      <div>
        <BoardHeader />
        {board && <GroupList board={board} onAddGroup={onAddGroup} onAddTask={onAddTask} onEditGroup={onEditGroup} />}
        <Outlet />
      </div>
    </div>
  );
}
