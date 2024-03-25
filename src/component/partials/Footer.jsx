import React from "react";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <footer className="absolute right-0 bottom-0 left-0 flex justify-center flex-col items-center z-10 py-2 print:hidden">
        <div className="flex items-center justify-center flex-col text-xs text-center leading-5">
          <small>
            &copy; {getCurrentYear()} All Rights Reserved | Powered by{" "}
            <span className="font-bold text-[#630b3c]">
              Frontline Business Solutions, Inc.
            </span>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
