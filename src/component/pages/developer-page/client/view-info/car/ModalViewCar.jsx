import {
  devBaseImgUrl,
  dollarSign,
  formatDate,
  handleEscape,
  numberWithCommas,
} from "@/component/helpers/functions-general";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

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
        <div className="relative h-[80vh] w-[50rem] mx-5">
          <div className="h-full w-full">
            {itemEdit.car_photo !== "" ? (
              <>
                <img
                  src={devBaseImgUrl + "/" + itemEdit.car_photo}
                  alt="car photo"
                  className="rounded-tr-md rounded-tl-md h-[390px] max-h-[390px] w-full object-cover object-center m-auto"
                  onLoadCapture={console.log(123)}
                />
                <div className="bg-white p-5 rounded-br-md rounded-bl-md flex flex-wrap flex-col lg:flex-row w-full">
                  <div className="w-full lg:w-1/2">
                    <div className="py-2 flex justify-between items-center mb-3">
                      <h4 className="border-accent text-sm text-accent">
                        Car Owner Details
                      </h4>
                    </div>

                    <div className="md:flex">
                      <div>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            First Name:
                          </span>
                          <span className="w-fit">{itemEdit.client_fname}</span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            Last Name:
                          </span>
                          <span className="w-fit">{itemEdit.client_lname}</span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            Contact Number:
                          </span>
                          <span className="w-fit">
                            {itemEdit.client_contact}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">Email:</span>
                          <span className="w-fit">{itemEdit.client_email}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="py-2 flex justify-between items-center mb-3">
                      <h4 className="border-accent text-sm text-accent">
                        Bank Details
                      </h4>
                    </div>

                    <div className="md:flex">
                      <div>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            Bank Name:
                          </span>
                          <span className="w-fit">
                            {itemEdit.client_bank_name === ""
                              ? "No Data"
                              : itemEdit.client_bank_name}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            Bank Routing Number:
                          </span>
                          <span className="w-fit">
                            {itemEdit.client_bank_routing_number === 0
                              ? "No Data"
                              : itemEdit.client_bank_routing_number}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            Bank Account Number:
                          </span>
                          <span className="w-fit">
                            {itemEdit.client_bank_account_number === 0
                              ? "No Data"
                              : itemEdit.client_bank_account_number}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="py-2 flex justify-between items-center mb-3">
                      <h4 className="border-accent text-sm text-accent">
                        Current NADA
                      </h4>
                    </div>

                    <div className="md:flex">
                      <div>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            NADA - Retail:
                          </span>
                          <span className="w-fit">
                            {dollarSign}
                            {numberWithCommas(
                              Number(itemEdit.car_nada_retail).toFixed(2)
                            )}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            NADA - Clean:
                          </span>
                          <span className="w-fit">
                            {dollarSign}
                            {numberWithCommas(
                              Number(itemEdit.car_nada_clean).toFixed(2)
                            )}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            NADA - Average:
                          </span>
                          <span className="w-fit">
                            {dollarSign}
                            {numberWithCommas(
                              Number(itemEdit.car_nada_average).toFixed(2)
                            )}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            NADA - Rough:
                          </span>
                          <span className="w-fit">
                            {dollarSign}
                            {numberWithCommas(
                              Number(itemEdit.car_nada_rough).toFixed(2)
                            )}
                          </span>
                        </p>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">MILES:</span>
                          <span className="w-fit">{itemEdit.car_miles}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="py-2 flex justify-between items-center mb-3">
                      <h4 className="border-accent text-sm text-accent">
                        Last Oil Change
                      </h4>
                    </div>

                    <div className="md:flex">
                      <div>
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">Date:</span>
                          <span className="w-fit">
                            {itemEdit.car_last_oil_change === ""
                              ? "Unspecified"
                              : formatDate(itemEdit.car_last_oil_change)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white p-10 text-center rounded-lg">
                <span className="flex items-center justify-center">
                  No photo yet
                </span>
              </div>
            )}
          </div>
          <button
            type="button"
            className="!absolute tooltip-action-table -top-10 right-0 !p-0"
            data-tooltip="Close"
            onClick={handleClose}
          >
            <RxCross2 className="h-6 w-6 text-white border rounded-md" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalViewCar;
