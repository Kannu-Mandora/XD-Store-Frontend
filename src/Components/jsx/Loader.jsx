import React from "react";
import { Rings } from "react-loader-spinner";
const Loader = ({ loading }) => {
  return (
    <>
      {loading && (
        <Rings
          height="80"
          width="80"
          color="#6B728E"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={loading}
          ariaLabel="rings-loading"
        />
      )}
    </>
  );
};

export default Loader;
