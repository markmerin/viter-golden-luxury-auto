import React from "react";
import { FaInfo, FaInfoCircle } from "react-icons/fa";

const DemoMode = () => {
  return (
    <>
      <div className="absolute w-full flex justify-center items-center top-[32px] z-50 pointer-events-none">
        <div className="bg-[#fffde7] border-2 border-[#f09a02] border-b-0 text-dark rounded-tr-md rounded-tl-md flex justify-center items-center gap-2 py-1 px-3">
          <FaInfoCircle fill="#f09a02" />
          <h1 className="font-normal ">Demo mode</h1>
        </div>
      </div>
    </>
  );
};

export default DemoMode;
