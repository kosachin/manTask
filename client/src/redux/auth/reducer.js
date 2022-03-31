import axios from "axios";
import {
  logInRequest,
  logInFailure,
  logInSuccess,
  logOutRequest,
  logOutSuccess,
} from "./actions";
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
} from "./actionTypes";
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
    case LOGIN_USER_REQUEST:
      return { ...store, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...store, ...payload, loading: false };
    case LOGIN_USER_FAILURE:
      return { ...store, loading: false, error: payload };
    case LOGOUT_USER_REQUEST:
      return {
        ...store,
        loading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...store,
        loading: false,
        isLogged: false,
      };
    default:
      return { ...store };
  }
};
export const doLogin = (data) => (dispatch) => {
  dispatch(logInRequest());
  let payload;
  axios
    .post("http://localhost:313/signin", data)
    .then(({ data }) => {
      payload = {
        token: data.token,
        email: data.user.email,
        username: data.user.first_name,
        id: data.user._id,
        isLogged: true,
        todos: [],
      };
      localStorage.setItem("user", JSON.stringify(payload));
      dispatch(logInSuccess(payload));
    })
    .catch((err) => {
      alert("Please provide correct credentials");
      dispatch(logInFailure(err.payload));
    });
};

export const doLogout = () => (dispatch) => {
  dispatch(logOutRequest());
  dispatch(logOutSuccess());
};

// export const doSignUp = (data) => (dispatch) =>{
//   dispatch()
//   axios.post("http://localhost:313/signup", data).then(({data})=>{

//   })
//   const res = await json;
//   const payload = {
//     id: res.data.user._id,
//     username: res.data.user.first_name,
//     email: res.data.user.email,
//     token: res.data.token,
//     isLogged: true,
//     todos: [],
//   };
//   localStorage.setItem("user", JSON.stringify(payload));
//   dispatch(logIn(payload));
//   alert("You have succesfully signed up");
//   navigate(`/${res._id}`);
// }

export default reducer;
