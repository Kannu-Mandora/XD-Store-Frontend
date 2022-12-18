import React from "react";
import Productbars from "../jsx/Productbars";
import Categorybar from "../desktop/Categorybar";
import Sale from "../jsx/Sale";
import Cards from "../jsx/Cards";

const Main = () => {
  return (
    <>
      <div className="lg:hidden flex justify-start items-center h-20 bg-leaf-light-color overflow-scroll scrollbar">
        <Productbars />
      </div>
      <Categorybar />
      <Sale/>
      <div className="flex flex-col">
      <img src="https://ik.imagekit.io/egkxyv8la/sale-banner_o54ZFsooY8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671348120697" alt="" className="h-72" />
      <div className="flex justify-start items-center cards overflow-x-scroll my-4">
      <Cards/>
      </div>
      </div>
    </>
  );
};

export default Main;
