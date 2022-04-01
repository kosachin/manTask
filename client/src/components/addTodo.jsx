import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todos/reducer";
const init = {
  title: "",
  body: "",
  status: false,
  user_id: "",
};
export const AddTodo = () => {
  const [data, setData] = useState(init);
  const navigate = useNavigate();
  const { token, id } = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleFieldData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(token, id, { ...data, user_id: id }));
    navigate(`/${id}`);
    setData("");
  };
  return (
    <form
      className="flex flex-col space-y-4 w-5/6 bg-slate-400 shadow-3xl p-4 mx-auto md:w-3/4 lg:w-1/3 mt-8 drop-shadow-2xl border-solid rounded-md border-2 border-gray-400 "
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>title :</label>
      <input
        name="title"
        type={"text"}
        placeholder="Scrum at 9AM"
        className="p-2 rounded-sm"
        onChange={(e) => handleFieldData(e)}
        required
      />
      <label>Body :</label>
      <textarea
        name="body"
        type={"text"}
        placeholder="ex: Dont forget to create todos"
        className="p-2 rounded-sm"
        onChange={(e) => handleFieldData(e)}
        required
      />
      <button
        type="submit"
        className="flex justify-center  bg-blue-300 text-center p-2 rounded-md font-bold ring-2 ring-blue-700 hover:bg-blue-500 justify-self-center w-full"
      >
        Submit
      </button>
    </form>
  );
};
