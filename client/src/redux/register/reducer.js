import axios from "axios";
import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from "./actionTypes";

import { signUpRequest, signUpSuccess, signUpFailure } from "./actions";
const init = {
  id: "",
  username: "",
  email: "",
  token: "",
  isLogged: false,
  loading: false,
  error: "",
};
const reducer = (store = init, { payload, type }) => {
  switch (type) {
    case SIGNUP_USER_REQUEST:
      return { ...store, loading: true };
    case SIGNUP_USER_SUCCESS:
      return { ...store, ...payload, loading: false };
    case SIGNUP_USER_FAILURE:
      return { ...store, loading: false, error: payload };
    default:
      return { ...store };
  }
};
export const doSignUp = (data) => (dispatch) => {
  dispatch(signUpRequest());
  let payload;
  axios
    .post("http://localhost:313/signup", data)
    .then(({ data }) => {
      payload = {
        id: data.user._id,
        username: data.user.first_name,
        email: data.user.email,
        token: data.token,
        isLogged: true,
        todos: [],
      };
      alert("You have succesfully signed up");
      localStorage.setItem("user", JSON.stringify(payload));
      dispatch(signUpSuccess(payload));
    })
    .catch((err) => {
      alert("User with that email already exists");
      dispatch(signUpFailure(err.message));
    });
};

export default reducer;
