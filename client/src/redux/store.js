import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import todoReducer from "./todos/reducer";
import registerReducer from "./register/reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  register: registerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
