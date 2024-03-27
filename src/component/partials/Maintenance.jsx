import React from "react";
import { FaTools } from "react-icons/fa";

const Maintenance = () => {
  return (
    <>
      <div className="flex items-center pt-40 flex-col gap-2 p-4 h-screen bg-gradient-to-t from-dark to-primary">
        <FaTools className="h-80 w-80 fill-primary/40 absolute z-0 skew-x-12 skew-y-12" />
        <h3 className=" text-8xl text-white z-10">We'll be back soon!</h3>
        {/* <h2 className="font-bold text-2xl text-white z-10">Page not found</h2> */}
        <p className="text-sm m-0 text-white z-10">
          We are very sorry for the inconvenience but we are performaning
          maintenance at the moment.
        </p>
        <p className="text-sm text-white z-10">
          We will be back online shortly!
        </p>
      </div>
    </>
  );
};

export default Maintenance;
