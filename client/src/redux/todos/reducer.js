import axios from "axios";
import {
  fetchUserTodosFailure,
  fetchUserTodosRequest,
  fetchUserTodosSuccess,
} from "./actions";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
} from "./actionTypes";
const init = {
  todos: [],
  loading: false,
  error: "",
};

const reducer = (store = init, { payload, type }) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return { ...store, loading: true };
    case GET_TODOS_SUCCESS:
      return { ...store, todos: payload, loading: true };
    case GET_TODOS_FAILURE:
      return { ...store, loading: false, error: payload };
    default:
      return store;
  }
};

export const fetchTodos = (token, id) => (dispatch) => {
  dispatch(fetchUserTodosRequest());
  axios
    .get(`http://localhost:313/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(({ data }) => {
      dispatch(fetchUserTodosSuccess(data.todos));
    })
    .catch((err) => {
      dispatch(fetchUserTodosFailure(err.message));
    });
};

export default reducer;
