import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../redux/auth/reducer";
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
      className="flex flex-col space-y-4 bg-slate-400 border-2 p-4  mx-auto md:w-3/4 lg:w-1/3 mt-8"
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
        className="flex justify-center w-20 bg-blue-300 text-center p-2 rounded-md font-bold"
      >
        Submit
      </button>
    </form>
  );
};
