import React, { useReducer } from "react";
import axios from "axios";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

import { GET_USERS, GET_REPOS, SET_LOADING, SET_SELECTED_USER } from "../types";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async (users) => {
    try {
      if (users === false) {
        dispatch({
          type: GET_USERS,
          payload: false,
        });
        return;
      }
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${users}`
      );
      const info = {
        items: data.items,
        total_count: data.total_count,
      };
      if (info.total_count === 0) {
        setSelectedUser(null);
        dispatch({
          type: GET_USERS,
          payload: "No users found",
        });
        return null;
      }
      dispatch({
        type: GET_USERS,
        payload: info,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Get Repos

  const getRepos = async (users) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${users}/repos`
      );
      const orderedData = data.sort((a, b) => {
        return b.watchers_count - a.watchers_count;
      });

      dispatch({
        type: GET_REPOS,
        payload: orderedData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Set Loading
  const setLoading = (state) => {
    dispatch({
      type: SET_LOADING,
      payload: state,
    });

    setTimeout(() => {
      dispatch({
        type: SET_LOADING,
        payload: !state,
      });
    }, 1000);
  };

  // Set Selected User
  const setSelectedUser = (user) => {
    setLoading(true);
    dispatch({
      type: SET_SELECTED_USER,
      payload: user,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        loading: state.loading,
        selectedUser: state.selectedUser,
        getUsers,
        getRepos,
        setLoading,
        setSelectedUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
