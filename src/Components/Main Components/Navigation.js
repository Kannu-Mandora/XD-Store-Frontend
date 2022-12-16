import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../desktop/Navbar";
import Hambar from "../mobile/Hambar";
const Navigation = () => {
  return (
    <>
      {/*Mobile  Navigation Bar */}
      <Hambar />
      {/* Navigation Bar */}
      <Navbar/>
      <Outlet />
    </>
  );
};

export default Navigation;
