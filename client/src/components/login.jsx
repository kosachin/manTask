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
      className="flex flex-col space-y-4 bg-slate-400 border-2 p-4  mx-auto md:w-1/2 lg:w-1/3 mt-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-xl text-center text-yellow-400 font-bold">
        Welcome to MERN form 😎!
      </h2>
      <label>Email :</label>
      <input
        name="email"
        type={"email"}
        placeholder="enter your first name"
        className="p-2 rounded-sm"
        onChange={(e) => handleFieldData(e)}
        required
      />
      <label>Password :</label>
      <input
        name="password"
        type={"password"}
        placeholder="enter your last name"
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
      <Link to="/register">
        <h3 className="hover:text-blue-600">
          👉 haven't registered yet? register here 👈
        </h3>
      </Link>
    </form>
  );
};
