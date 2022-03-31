import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
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
