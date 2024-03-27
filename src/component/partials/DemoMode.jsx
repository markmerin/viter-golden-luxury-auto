import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const DemoMode = () => {
  return (
    <>
      <div className="w-full h-9 sticky z-[52] top-0 bg-[#ffffcc] flex justify-center items-center p-2 uppercase">
        <span className="font-bold flex items-center text-sm">
          <FaExclamationCircle className="h-5 w-5 mr-4 fill-dark" />
          System is currently on demo mode
        </span>
      </div>
    </>
  );
};

export default DemoMode;
