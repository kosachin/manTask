import { useEffect } from "react";
import { Todo } from "./todo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodos } from "../redux/todos/reducer";
export const Todos = () => {
  const { id } = useParams();
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todo);
  const { deleted } = useSelector((store) => store.todo);
  useEffect(() => {
    dispatch(fetchTodos(token, id));
    console.log(deleted);
  }, [deleted]);
  return (
    <div className="md:w-1/2 lg:w-1/2 mx-auto">
      {todos.map((e) => (
        <Todo todo={e} key={e._id} />
      ))}
    </div>
  );
};
