import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/todos/reducer";
import { FaExpandAlt } from "react-icons/fa";
import { ImShrink2 } from "react-icons/im";
export const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [data, setData] = useState({ title: "", body: "" });
  const { token, id } = JSON.parse(localStorage.getItem("user"));
  const user_id = id;
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodo(token, id, user_id));
  };
  const handleEdit = (todo) => {
    setData(todo);
    setIsEdit(!isEdit);
  };
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (id, todo, e) => {
    if (e?.target.innerText === "Complete") {
      dispatch(editTodo(token, { ...todo, status: true }, id, user_id));
    } else {
      dispatch(editTodo(token, data, id, user_id));
      setIsEdit(!isEdit);
    }
  };
  return (
    <div
      className="relative cursor-pointer flex flex-col hover:shadow-xl border-rounded hover:-translate-y-0.5 transition ease-in-out delay-100 duration-300  hover:bg-slate-300 bg-slate-200 justify-evenly  p-4 space-y-4 md:flex-row md:h-32 md:justify-between md:items-center"
      style={{ background: props.todo.status ? "rgba(0,0,0,0.2)" : null }}
    >
      <div className="hover:shadow-3xl">
        {isEdit ? (
          <div className="flex flex-col space-y-2">
            <input
              className="overflow-auto w-full md:overflow-y-auto md:w-80 lg:w-96 px-2 py-1"
              value={data.title}
              onChange={(e) => {
                handleData(e);
              }}
              name="title"
            />
            <textarea
              className="overflow-auto w-full md:overflow-y-auto md:w-80 lg:w-96 px-2 py-1"
              value={data.body}
              onChange={(e) => {
                handleData(e);
              }}
              name="body"
            />
          </div>
        ) : (
          <div className="md:flex md:flex-col md:space-y-4">
            <h1 className="overflow-auto w-full md:overflow-y-auto md:w-80 lg:w-96 font-bold text-xl">
              {data.title || props.todo.title}
            </h1>
            {isDrop ? (
              <h1 className="overflow-auto w-full md:overflow-y-auto md:w-80 lg:w-96">
                {data.body || props.todo.body}
              </h1>
            ) : null}
          </div>
        )}
      </div>
      <div className="flex md:w-3/7 space-x-2 justify-between items-center">
        {!isDrop ? (
          <FaExpandAlt
            className="absolute top-4 right-4"
            size={"20px"}
            onClick={() => setIsDrop(!isDrop)}
          />
        ) : (
          <ImShrink2
            className="absolute top-4 right-4"
            size={"20px"}
            onClick={() => setIsDrop(!isDrop)}
          />
        )}
        {isEdit ? (
          <button
            className="bg-blue-700 text-white px-2 py-1 rounded-sm"
            onClick={() => handleSubmit(props.todo._id)}
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-blue-700 text-white px-2 py-1 rounded-sm"
            onClick={() => handleEdit(props.todo)}
          >
            Edit
          </button>
        )}

        <button
          className="bg-red-500 px-2 text-white rounded-sm py-1 "
          onClick={() => handleDelete(props.todo._id)}
        >
          Delete
        </button>
        {props.todo.status ? null : (
          <button
            className="bg-green-500  px-2 text-white rounded-sm py-1"
            onClick={(e) => handleSubmit(props.todo._id, props.todo, e)}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};
