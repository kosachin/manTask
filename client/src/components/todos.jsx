import { useEffect, useState } from "react";
import { Todo } from "./todo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodos } from "../redux/todos/reducer";
export const Todos = () => {
  const { id } = useParams();
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todo);
  useEffect(() => {
    dispatch(fetchTodos(token, id));
  }, []);
  return (
    <div className="flex mt-8 mx-auto flex-col space-y-4 w-5/6 md:w-4/5 lg:w-1/2 ">
      {todos.map((e) => (
        <Todo todo={e} key={e._id} />
      ))}
    </div>
  );
};
