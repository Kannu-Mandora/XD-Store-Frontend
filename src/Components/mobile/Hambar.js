import React from "react";
import { Link, Outlet } from "react-router-dom";
const Hambar = () => {
  return (
    <>
      <div className="lg:hidden flex justify-evenly items-center bg-quaternary-color h-16">
        <Link to="/">
          <img
            src={require("../../assests/images/Animated Icons/logo.png")}
            alt="XD"
            className="w-10"
          />
        </Link>
        <Link to="/" className="text-white text-lg font-semibold">
          XD STORE
        </Link>
        <Link to="Login" className="max-sm:hidden">
          <span className="bg-leaf-darker-color leaf-light-color rounded px-3 py-2 shadow ">
            Login/Signup
          </span>
        </Link>
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className="pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
            >
              <g id="surface102917647">
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(100%,100%,100%)",
                    fillOpacity: 1,
                  }}
                  d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z M 21 5 "
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Hambar;
