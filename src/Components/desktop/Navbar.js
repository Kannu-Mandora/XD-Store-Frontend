import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../jsx/Logo'
import Loginbtn from '../jsx/Loginbtn'
const Navbar = () => {
  return (
   <>
   <div className="max-lg:hidden flex flex-shrink justify-center items-center h-20 bg-leaf-dark-color ">
        <Logo className="mx-3" />
        <Link to="/">
          <span className="text-white text-lg font-semibold mx-3 ">
            XD STORE
          </span>
        </Link>
        <div className="navlist" >
            <NavLink to="/" className="navlink">
              <span>Home</span>
            </NavLink>
          </div>
          <div className="navlist">
            <input type="text" name="search" id="search" className=" p-2 rounded focus:outline-none" placeholder="Search..." />
          </div>
          <div className="navlist" >
            <NavLink to="Seller" className="navlink">
              <span>Become a Seller</span>
            </NavLink>
          </div>
          <div className="navlist" >
            <NavLink to="Cart" className="navlink">
              <span>Cart Items: 0</span>
            </NavLink>
          </div>
          <Loginbtn/>
      </div>
   </>
  )
}

export default Navbar
