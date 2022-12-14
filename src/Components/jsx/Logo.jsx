import React from 'react'
import { Link } from 'react-router-dom'
const Logo = (props) => {
  return (
    <>
    <Link to="/">
          <img
            src={require("../../assests/images/Animated Icons/logo.png")}
            alt="XD"
            className={`w-10 ${props.className}`}
          />
        </Link>
    </>
  )
}

export default Logo
