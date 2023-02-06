import React from "react";

const Sale = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  if (
    days[day] === "Saturday" ||
    days[day] === "Sunday" ||
    days[day] === "Monday"
  ) {
    return (
      <h1 className="text-center font-semibold py-2 my-auto text-xl text-white bg-quaternary-color px-2">
        Bruh, Sale Opened . Why you don't check it out!
      </h1>
    );
  } else {
    return (
      <h1 className="text-center font-semibold py-2 my-auto text-xl text-white bg-quaternary-color px-2">
        Sorry, Sale Closed . Sale Reopen On Saturday & Sunday Only.
      </h1>
    );
  }
};

export default Sale;
