import React from "react";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className="absolute right-0 bottom-0 left-0 flex justify-center flex-col items-center z-10 py-2 print:hidden">
        <div className="flex items-center justify-center text-xs text-center leading-5 gap-1">
          <small className="">
            &copy; {getCurrentYear()} All Rights Reserved.
          </small>
          <span>|</span>
          <small className="">
            Powered by <span className="text-[#1cbdc5ff]">Quadratic</span>.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
