import React from "react";
import { FaFileExcel, FaLongArrowAltLeft } from "react-icons/fa";
import { TbWorldOff } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center pt-40 flex-col gap-2 p-4 h-screen bg-gradient-to-t from-dark to-primary">
        <FaFileExcel className="h-80 w-80 fill-primary/40 absolute z-0 skew-x-12 skew-y-12" />
        <h3 className=" text-8xl text-white z-10">404</h3>
        <h2 className="font-bold text-2xl text-white z-10">Page not found</h2>
        <p className="text-sm m-0 text-white z-10">
          Sorry, the page you are looking for cannot be found.
        </p>
        <p className="text-white z-10">Plase check your URL</p>
        <button
          type="button"
          className="group flex items-center gap-1 bg-dark z-10 py-2 px-6 rounded-md text-primary font-bold"
          onClick={() => handleBack()}
        >
          <FaLongArrowAltLeft className="group-hover:mr-4 duration-100 ease-in-out" />
          <span>Go back</span>
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
