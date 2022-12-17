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
      <div className="flex justify-start items-center cards overflow-x-scroll my-4 w-screen">
      <Cards/>
      </div>
    </>
  );
};

export default Main;
