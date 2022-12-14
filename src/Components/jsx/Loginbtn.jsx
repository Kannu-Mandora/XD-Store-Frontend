import React from 'react'
import { Link } from 'react-router-dom'
const Loginbtn = () => {
  return (
    <>
    <Link to="Login">
          <span className=" text-white rounded px-3 py-2 bg-leaf-darkest-color shadow border border-slate-600 mx-4 hover:bg-[color:var(--leaf-dim-color)] hover:text-black effect">
            Login/Signup
          </span>
        </Link>
    </>
  )
}

export default Loginbtn
