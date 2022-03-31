import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doSignUp } from "../redux/register/reducer";
const init = { first_name: "", last_name: "", email: "", password: "" };
const Register = () => {
  const [data, setData] = useState(init);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLogged,id} = useSelector((store)=>store.register)
  const handleFieldData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  useEffect(() => {
    if (isLogged) navigate(`/${id}`);
  }, [isLogged]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(doSignUp(data));
  };

  return (
    <form
      className="flex flex-col space-y-4 bg-slate-400 border-2 p-4 mx-auto md:w-1/2 lg:w-1/3 mt-8"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2 className="text-xl text-center text-yellow-400 font-bold">
        Welcome to MERN form 😎!
      </h2>
      <label>First Name :</label>
      <input
        name="first_name"
        type="text"
        onChange={(e) => handleFieldData(e)}
        placeholder="enter your first name"
        className="p-2 rounded-sm"
        required
      />
      <label>Last Name :</label>
      <input
        name="last_name"
        type="text"
        onChange={(e) => handleFieldData(e)}
        placeholder="enter your last name"
        className="p-2 rounded-sm"
        required
      />
      <label>Email :</label>
      <input
        name="email"
        type="email"
        onChange={(e) => handleFieldData(e)}
        placeholder="abc@xyz.com"
        className="p-2 rounded-sm"
        required
      />
      <label>Password :</label>
      <input
        name="password"
        type="password"
        onChange={(e) => handleFieldData(e)}
        placeholder="enter your last name"
        className="p-2 rounded-sm"
        required
      />
      <button
        type="submit"
        className="flex justify-center w-20 bg-blue-300 text-center p-2 rounded-md font-bold"
      >
        Submit
      </button>
      <Link to="/">
        <h3 className="hover:text-blue-600">
          👉 Already have an account? login here 👈
        </h3>
      </Link>
    </form>
  );
};

export default Register;
