import React from "react";
import { FaRegFolder } from "react-icons/fa6";

const NoData = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col p-2">
        <FaRegFolder className="h-14 w-14 text-gray-300" />
        <span className=" text-gray-300 text-xl">No data</span>
      </div>
    </>
  );
};

export default NoData;
