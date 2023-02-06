import { GET_USERS, GET_REPOS, SET_LOADING, SET_SELECTED_USER } from "../types";

const UserReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
