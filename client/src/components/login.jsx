import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../redux/auth/reducer";
const init = {
  email: "",
  password: "",
};
export const Login = () => {
  const [data, setData] = useState(init);
  const navigate = useNavigate();
  const { isLogged, id } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleFieldData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    if (isLogged) {
      navigate(`/${id}`);
    }
  }, [isLogged]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doLogin(data));

    setData("");
  };
  return (
    <form
      className="flex flex-col bg-slate-400 border-2 p-4  mx-auto w-5/6 md:w-1/2 lg:w-1/3 mt-8 drop-shadow-2xl border-solid rounded-md border-gray-400 md:space-y-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-xl text-center text-yellow-400 font-bold">
        Welcome to MERN form 😎!
      </h2>
      <label className="font-bold mb-2">Email :</label>
      <input
        name="email"
        type={"email"}
        placeholder="enter your first name"
        className="p-2 rounded-sm mb-2"
        onChange={(e) => handleFieldData(e)}
        required
      />
      <label className="font-bold mb-2">Password :</label>
      <input
        name="password"
        type={"password"}
        placeholder="enter your last name"
        className="p-2 rounded-sm mb-4"
        onChange={(e) => handleFieldData(e)}
        required
      />
      <button
        type="submit"
        className="flex justify-center  bg-blue-300 text-center p-2 rounded-md font-bold ring-2 ring-blue-700 hover:bg-blue-500 w-full mb-2"
      >
        Submit
      </button>
      <Link to="/register" className="hover:text-blue-600 break-all">
        👉 haven't registered yet? register here 👈
      </Link>
    </form>
  );
};
