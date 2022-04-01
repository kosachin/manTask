import axios from "axios";
import {
  fetchUserTodosFailure,
  fetchUserTodosRequest,
  fetchUserTodosSuccess,
  addUserTodosRequest,
  addUserTodosSuccess,
  addUserTodosFailure,
} from "./actions";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_FAILURE,
} from "./actionTypes";
const init = {
  todos: [],
  loading: false,
  error: "",
  page: 1,
};

const reducer = (store = init, { payload, type }) => {
  switch (type) {
    case GET_TODOS_REQUEST:
      return { ...store, loading: true };
    case GET_TODOS_SUCCESS:
      return { ...store, todos: payload, loading: false };
    case GET_TODOS_FAILURE:
      return { ...store, loading: false, error: payload };
    case ADD_TODOS_REQUEST:
      return { ...store, loading: true };
    case ADD_TODOS_SUCCESS:
      return { ...store, loading: false };
    case ADD_TODOS_FAILURE:
      return { ...store, loading: false, error: payload };
    default:
      return store;
  }
};

export const fetchTodos = (token, id, pnum) => (dispatch) => {
  dispatch(fetchUserTodosRequest());
  axios
    .get(`http://localhost:313/${id}?page=${pnum}`, {
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

export const createTodo = (token, id, data) => (dispatch) => {
  dispatch(addUserTodosRequest());
  axios
    .post(`http://localhost:313/${id}`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(() => {
      dispatch(addUserTodosSuccess());
      dispatch(fetchTodos(token, id));
    })
    .catch((err) => {
      console.log(token, id);
      dispatch(addUserTodosFailure(err.message));
    });
};

export const deleteTodo = (token, id, user_id) => (dispatch) => {
  dispatch(addUserTodosRequest());
  axios
    .delete(`http://localhost:313/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(() => {
      dispatch(addUserTodosSuccess());
      dispatch(fetchTodos(token, user_id));
      console.log("deleted succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editTodo = (token, data, id, user_id) => (dispatch) => {
  dispatch(addUserTodosRequest());
  axios
    .patch(`http://localhost:313/edit/${id}`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(() => {
      dispatch(addUserTodosSuccess());
      dispatch(fetchTodos(token, user_id));
      console.log("deleted succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default reducer;
