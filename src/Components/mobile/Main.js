import React from "react";
import Productbars from "../jsx/Productbars";
import Categorybar from "../desktop/Categorybar";
import Sale from "../jsx/Sale";
import { Link } from "react-router-dom";
import categories from "../../assests/json/categories.json"

const Main = () => {
  return (
    <>
      <div className="lg:hidden flex justify-start items-center h-20 bg-leaf-light-color overflow-scroll scrollbar">
        <Productbars />
      </div>
      <Categorybar />
      <Sale />
      <div className="flex justify-start items-center cards overflow-x-scroll my-4">
        {
          categories.map((item) => {
            return <Link to={item.category} key={item.id}>
              <div className="flex flex-col justify-center items-center flex-wrap border w-40 px-2 py-3 rounded bg-leaf-dr-color">
                <img src={item.source} alt="Laptop" className="w-32 h-32" />
                <span className="text-white text-sm my-4">{item.category}</span>
              </div>
            </Link>
          })
        }
      </div>
    </>
  );
};

export default Main;
