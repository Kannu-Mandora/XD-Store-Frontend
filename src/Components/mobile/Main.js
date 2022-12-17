import React from "react";
import Productbars from "../jsx/Productbars";
import Categorybar from "../desktop/Categorybar";
import Sale from "../jsx/Sale";

const Main = () => {
  return (
    <>
      <div className="lg:hidden flex justify-start items-center h-20 bg-leaf-light-color overflow-scroll scrollbar">
        <Productbars />
      </div>
      <Categorybar />
      <Sale/>
    </>
  );
};

export default Main;
