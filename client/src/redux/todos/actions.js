import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_FAILURE,
} from "./actionTypes";
export const fetchUserTodosRequest = () => ({
  type: GET_TODOS_REQUEST,
});
export const fetchUserTodosSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
export const fetchUserTodosFailure = (payload) => ({
  type: GET_TODOS_FAILURE,
  payload,
});

export const addUserTodosRequest = () => ({
  type: ADD_TODOS_REQUEST,
});
export const addUserTodosSuccess = (payload) => ({
  type: ADD_TODOS_SUCCESS,
  payload,
});
export const addUserTodosFailure = (payload) => ({
  type: ADD_TODOS_FAILURE,
  payload,
});
