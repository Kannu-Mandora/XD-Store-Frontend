import React, { useState } from "react";
import { Link } from "react-router-dom";
// todo We need to use useState/ useEffect for dynamic rendering the data fields and the switch login/signup .
const Popup = () => {
  const [login, setLogin] = useState({
    main: "Login",
    display: "flex",
    nodisplay: "hidden",
  });
  const logIn = () => {
    setLogin({
      main: "Login",
      display: "flex",
      nodisplay: "hidden",
    });
  };
  const signUp = () => {
    setLogin({
      main: "Sign Up",
      display: "hidden",
      nodisplay: "flex",
    });
  };
  return (
    <>
      <section className="flex justify-center items-center my-10  relative">
        <div className="flex flex-col items-start justify-start w-52 h-96 bg-leaf-dim-color quaternary-color">
          <h1 className="text-black font-semibold text-xl m-3 titillium">
            {login.main}
          </h1>
          <span className="m-3 text-left ">
            Get access to your Orders, Wishlist and Recommendations
          </span>
        </div>
        <div className="flex flex-col items-center justify-start w-96 h-96 bg-quaternary-color text-white">
          <div className="flex flex-col mx-3 my-4">
            <label className="my-1 text-sm">
              Enter Mobile Number or Email Address
            </label>
            <input
              type="text"
              name="emailNumber"
              id="email"
              placeholder="Email or number"
              className=" px-2 py-1.5 w-[19rem] text-black  focus:outline-none"
            />
          </div>
          <div className="flex flex-col mx-3">
            <label className="text-sm">Enter Password</label>
            <input
              type="password"
              name="emailNumber"
              id="email"
              placeholder="Password"
              className=" px-2 py-1.5 w-[19rem] text-black  focus:outline-none"
            />
            <div className={`flex flex-col ${login.nodisplay}`}>
              <label className="mt-3 text-sm">Confirm Password</label>
              <input
                type="password"
                name="emailNumber"
                id="email"
                placeholder="Confirm Password"
                className=" px-2 py-1.5 w-[19rem] text-black  focus:outline-none"
              />
            </div>
            <span
              className={`my-0.5 text-sm text-red-100 ${login.display} invisible`}
            >
              Wrong Credentials Entered!
            </span>
            <Link
              to="Resetpassword"
              className={`flex justify-end ${login.display} underline underline-offset-4`}
            >
              Forget Password?
            </Link>
            <div className="flex flex-col justify-center items-center my-4">
              <span
                className={`bg-red-400 hover:bg-red-500 effect py-1  my-2 rounded-sm w-64 ${login.display} justify-center cursor-pointer `}
                onClick={logIn}
              >
                Login
              </span>
              <span className={`${login.display} mx-auto`}>OR</span>
              <span
                className="flex justify-center items-center bg-slate-700 hover:bg-slate-800 py-1 effect my-2 rounded-sm w-64 cursor-pointer "
                onClick={signUp}
              >
                Sign Up
              </span>
            </div>
            <div className="flex items-end justify-center">
              <span
                className={`cursor-pointer underline underline-offset-8 text-sm ${login.nodisplay} hover:text-red-300 effect `}
                onClick={logIn}
              >
                Already a User, Login
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popup;
