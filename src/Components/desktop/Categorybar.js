import React from "react";
import { NavLink } from "react-router-dom";
const Categorybar = () => {
  return (
    <>
      <div className="max-lg:hidden flex justify-center items-center text-white bg-primary-color h-16 productNavbar">
        <NavLink to="BestSeller" className="productNavlist">
          Best Sellers
        </NavLink>
        <NavLink to="Mobiles" className="productNavlist">
          Mobiles
        </NavLink>
        <NavLink to="Todaydeals" className="productNavlist">
          Today's Deals
        </NavLink>
        <NavLink to="Electronics" className="productNavlist">
          Electronics
        </NavLink>
        <NavLink to="Fashion" className="productNavlist">
          Fashion
        </NavLink>
        <NavLink to="Kitchen" className="productNavlist">
          Home&Kitchen
        </NavLink>
        <NavLink to="Books" className="productNavlist">
          Books
        </NavLink>
      </div>
    </>
  );
};

export default Categorybar;
