import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { doLogout } from "../redux/auth/reducer";
import { IoIosAddCircle } from "react-icons/io";
export const Navbar = () => {
  const logUserDetails = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {}, [logUserDetails.isLogged]);
  let user;
  JSON.parse(localStorage.getItem("user"))
    ? (user = JSON.parse(localStorage.getItem("user")))
    : (user = logUserDetails);
  const handleLogout = () => {
    dispatch(doLogout());
    localStorage.setItem("user", null);
  };
  return (
    <>
      {user.isLogged ? (
        <>
          <div className="bg-slate-600">
            <div className="flex justify-between  items-center p-4 font-bold  lg:w-1/2 mx-auto">
              <Link to="/" className="p-2  ">
                ManTask
              </Link>
              <Link to={`/${user.id}/add`} className="p-2  ">
                <IoIosAddCircle size={"2em"} />
              </Link>
              <div className="md:space-x-8 flex items-center">
                <Link
                  to={`/${user.id}`}
                  className="flex justify-center items-center  bg-red-400 rounded-full w-10 h-10"
                >
                  {user.username[0]}
                </Link>
                <Link
                  to="/"
                  onClick={() => handleLogout()}
                  className="hidden md-block lg:block font-bold  hover:bg-slate-500 rounded-md p-2"
                >
                  LogOut
                </Link>
              </div>
            </div>
          </div>
          <Outlet></Outlet>
        </>
      ) : (
        <>
          <div className="bg-slate-600">
            <div className="flex justify-between items-center p-4 font-bold md:w-1/2 lg:w-1/2 mx-auto">
              <Link to="/" className="p-2">
                ManTask
              </Link>
              <div className="space-x-4 p-2">
                <Link
                  to="/login"
                  className="font-bold hover:bg-slate-500 rounded-md p-2"
                >
                  SignIn
                </Link>
                <Link
                  to="/register"
                  className="font-bold  hover:bg-slate-500 rounded-md p-2"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
};
