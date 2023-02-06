import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/Animated Icons/logo.png";
const Logo = (props) => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="XD" className={`w-10 ${props.className}`} />
      </Link>
    </>
  );
};

export default Logo;
