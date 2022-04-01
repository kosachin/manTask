import { useEffect, useState } from "react";
import { Todo } from "./todo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodos } from "../redux/todos/reducer";
import { GrPrevious, GrNext } from "react-icons/gr";
export const Todos = () => {
  const [pnum, setPnum] = useState(0);
  const { id } = useParams();
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todo);
  useEffect(() => {
    dispatch(fetchTodos(token, id, pnum));
  }, [pnum]);
  console.log(todos);
  return (
    <div className="flex mt-8 mx-auto flex-col space-y-4 w-5/6 md:w-4/5 lg:w-1/2 ">
      {todos.map((e) => (
        <Todo todo={e} key={e._id} />
      ))}
      {todos.length > 2 || pnum > 1 ? (
        <div className="mt-4 flex items-center">
          {pnum > 1 ? (
            <GrPrevious
              className="bg-purple-400 mr-auto p-2 hover:bg-purple-600"
              size={"2.3em"}
              onClick={() => (pnum > 1 ? setPnum((n) => n - 1) : null)}
            />
          ) : "😶"}
          {todos.length > 2 ? (
            <GrNext
              className="bg-purple-400 p-2 hover:bg-purple-600 ml-auto"
              size={"2.3em"}
              onClick={() => setPnum((n) => n + 1)}
            />
          ) : "😶"}
        </div>
      ) : null}
    </div>
  );
};
