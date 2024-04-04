import React from "react";

const ModalWrapperSide = ({ children, handleClose, className = "" }) => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-[52] ">
        <div
          className="w-screen h-screen backdrop bg-dark/30"
          onClick={handleClose}
        ></div>
        <div
          className={`absolute mx-1.5 h-screen bg-white border border-gray-200 top-0 right-[-5px] py-4 w-full xl:w-[30rem] lg:w-[25rem] md:w-[25rem] sm:w-[25rem] shadow-xl ${className}`}
        >
          <div className="overflow-y-auto overflow-x-hidden max-h-[85vh] px-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWrapperSide;
