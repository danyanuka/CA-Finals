import { userService } from "../../services/User/user.service"

export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USERS = 'SET_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const ADD_USER = 'ADD_USER'

const initialState = {
  user: userService.getLoggedinUser() || null,
  users: []
}


export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user }
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.userId)
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users?.map((user) =>
          user._id === action.user._id ? action.user : user
        )
      };
    default:
      return state
  }
}