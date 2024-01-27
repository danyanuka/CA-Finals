import { utilService } from "../util.service.js";
import Axios from "axios";

const axios = Axios.create({
  withCredentials: true,
});

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/board/"
    : "//localhost:3030/api/board/";

export const boardService = {
  query,
  getById,
  getUserBoards,
  save,
  remove,

  // getDefaultFilter,
  // getFilterFromParams,
};
// Get List
async function query() {
  try {
    const { data: boards } = await axios.get(BASE_URL);
    return boards;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// GetByID
async function getById(boardId) {
  const url = BASE_URL + boardId;
  try {
    const { data: board } = await axios.get(url);
    return board;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// GetUserBoards
async function getUserBoards(userId) {
  const url = BASE_URL + "home/" + userId;
  try {
    const { data: boards } = await axios.get(url);
    return boards;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// DELETE
async function remove(boardId) {
  const url = BASE_URL + boardId;
  try {
    const { data: res } = await axios.delete(url);
    return res;
  } catch (err) {
    console.log(err);
  }
}

// PUT/POST
async function save(board) {
  const dynMethod = board._id ? "put" : "post";
  const dynPath = board._id ? BASE_URL + board._id : BASE_URL;
  try {
    if (!board.style)
      board.style = {
        backgroundImage: "url(public/grad-bg-images/light-blue.svg)",
      };
    const { data: savedBoard } = await axios[dynMethod](dynPath, board);
    return savedBoard;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// function getDefaultFilter() {
//   return {
//     text: "",
//     severity: "",
//     pageIdx: undefined,
//     sortBy: { type: "", dir: 1 },
//   };
// }

// function getFilterFromParams(searchParams) {
//   const defaultFilter = getDefaultFilter();
//   const filterBy = {};

//   for (const field in defaultFilter) {
//     filterBy[field] =
//       field === "severity"
//         ? +searchParams.get(field) || ""
//         : searchParams.get(field) || "";
//   }
//   return filterBy;
// }
