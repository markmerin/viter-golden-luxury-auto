import {
  devBaseImgUrl,
  handleEscape,
} from "@/component/helpers/functions-general";
import React from "react";
import { FaTimes, FaTimesCircle } from "react-icons/fa";

const ModalViewCar = ({ itemEdit, setIsViewImage }) => {
  const [show, setShow] = React.useState("show");

  const handleClose = () => {
    setShow("");
    setTimeout(() => {
      setIsViewImage(false);
    }, 200);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div
        className={`modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-dark z-50 animate-fadeIn ${show}`}
      >
        <button
          type="button"
          className="absolute top-20 right-10"
          onClick={handleClose}
        >
          <FaTimes className="h-6 w-6 text-white" />
        </button>
        <div className="px-10 animate-slideUp ">
          {itemEdit.car_photo !== "" ? (
            <img
              src={devBaseImgUrl + "/" + itemEdit.car_photo}
              alt="car photo"
              className="rounded-md max-h-full w-full object-cover object-center m-auto"
            />
          ) : (
            <div className="bg-white p-10 text-center rounded-lg">
              <span className="flex items-center justify-center">
                No photo yet
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalViewCar;
