import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from "./actionTypes";

export const signUpRequest = () => ({
  type: SIGNUP_USER_REQUEST,
});
export const signUpSuccess = (payload) => ({
  type: SIGNUP_USER_SUCCESS,
  payload,
});
export const signUpFailure = (payload) => ({
  type: SIGNUP_USER_FAILURE,
  payload,
});
