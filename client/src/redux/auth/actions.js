import axios from "axios";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "./actionTypes";

export const logInRequest = () => ({
  type: LOGIN_USER_REQUEST,
});
export const logInSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});
export const logInFailure = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});
export const logOutRequest = () => ({
  type: LOGOUT_USER_REQUEST,
});
export const logOutSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});
