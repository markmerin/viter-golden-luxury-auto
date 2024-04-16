import {
  devBaseImgUrl,
  dollarSign,
  formatDate,
  handleEscape,
  numberWithCommas,
} from "@/component/helpers/functions-general";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaCarSide, FaPhotoVideo, FaTimes } from "react-icons/fa";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ModalViewCar = ({ itemEdit, setIsViewImage }) => {
  const { store } = React.useContext(StoreContext);
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
        <div className="m-5 absolute w-fit h-fit top-1/2 -translate-y-1/2 rounded-md">
          <div className="max-w-[750px] max-h-[80vh] overflow-y-auto rounded-md">
            {/* {itemEdit.car_photo !== "" ? ( */}
            <>
              {itemEdit.car_photo !== "" ? (
                <img
                  src={devBaseImgUrl + "/" + itemEdit.car_photo}
                  alt="car photo"
                  className="rounded-tr-md rounded-tl-md h-full w-full object-cover object-[center_center] m-auto"
                />
              ) : (
                <div className="bg-white border-b rounded-tr-md rounded-tl-md p-5">
                  <FaPhotoVideo className="h-full max-h-[70px] sm:max-h-[150px] w-full object-cover object-center m-auto fill-gray-200" />
                  <span className="w-full flex justify-center mt-5">
                    No photo yet
                  </span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full p-5 bg-white rounded-bl-md rounded-br-md lg:flex-row h-full overflow-y-auto">
                <div className="w-full ">
                  <div className="flex items-center justify-between py-2">
                    <h4 className="text-xs border-accent text-accent">
                      Car Owner Details
                    </h4>
                  </div>

                  <div className="md:flex">
                    <div>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">First Name:</span>
                        <span className="w-fit break-all">
                          {itemEdit.client_fname}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Last Name:</span>
                        <span className="w-fit break-all">
                          {itemEdit.client_lname}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Contact Number:
                        </span>
                        <span className="w-fit break-all">
                          {itemEdit.client_contact}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Email:</span>
                        <span className="w-fit break-all">
                          {itemEdit.client_email}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full ">
                  <div className="flex items-center justify-between py-2">
                    <h4 className="text-xs border-accent text-accent">
                      Bank Details
                    </h4>
                  </div>

                  <div className="md:flex">
                    <div>
                      <p className="flex w-full mb-1">
                        <span className="w-[10rem] font-bold">Bank Name:</span>
                        <span className="w-fit break-all">
                          {itemEdit.client_bank_name === ""
                            ? "No Data"
                            : itemEdit.client_bank_name}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Bank Routing Number:
                        </span>
                        <span className="w-fit break-all">
                          {itemEdit.client_bank_routing_number === 0
                            ? "No Data"
                            : itemEdit.client_bank_routing_number}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Bank Account Number:
                        </span>
                        <span className="w-fit break-all">
                          {itemEdit.client_bank_account_number === 0
                            ? "No Data"
                            : itemEdit.client_bank_account_number}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex items-center justify-between py-2">
                    <h4 className="text-xs border-accent text-accent">
                      Current NADA
                    </h4>
                  </div>

                  <div className="md:flex">
                    <div>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Current NADA - Retail:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_nada_retail).toFixed(2)
                          )}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Current NADA - Clean:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_nada_clean).toFixed(2)
                          )}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Current NADA - Average:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_nada_average).toFixed(2)
                          )}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Current NADA - Rough:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_nada_rough).toFixed(2)
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex items-center justify-between py-2">
                    <h4 className="text-xs border-accent text-accent">
                      Last Year's NADA
                    </h4>
                  </div>

                  <div className="md:flex">
                    <div>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Last Year's NADA - Retail:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_last_nada_retail).toFixed(2)
                          )}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Last Year's NADA - Clean:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_last_nada_clean).toFixed(2)
                          )}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Last Year's NADA - Average:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_last_nada_average).toFixed(2)
                          )}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Last Year's NADA - Rough:
                        </span>
                        <span className="w-fit break-all">
                          {dollarSign}
                          {numberWithCommas(
                            Number(itemEdit.car_last_nada_rough).toFixed(2)
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full ">
                  <div className="flex items-center justify-between py-2">
                    <h4 className="text-xs border-accent text-accent">
                      Car Details
                    </h4>
                  </div>

                  <div className="md:flex">
                    <div>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Make:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_make_name}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Year:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_year}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Model / Specs:
                        </span>
                        <span className="w-fit break-all">
                          {itemEdit.car_specs}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">VIN #:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_vin_number}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Plate #:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_plate_number}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Lic./Reg. Date:
                        </span>
                        <span className="w-fit break-all">
                          {itemEdit.car_registration_date === ""
                            ? "Unspecified"
                            : formatDate(itemEdit.car_registration_date)}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Gas:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_gas}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Tire Size:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_tire_size}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Oil Type:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_oil_type}
                        </span>
                      </p>

                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">MILES:</span>
                        <span className="w-fit break-all">
                          {itemEdit.car_miles}
                        </span>
                      </p>
                      <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">
                          Last Oil Change:
                        </span>
                        <span className="w-fit break-all">
                          {itemEdit.car_last_oil_change === ""
                            ? "Unspecified"
                            : formatDate(itemEdit.car_last_oil_change)}
                        </span>
                      </p>
                      {/* <p className="flex mb-1">
                        <span className="w-[10rem] font-bold">Turo Link:</span>
                        <span className="w-fit">
                          {itemEdit.car_turo_link === "" ? (
                            <span className="text-[#e41e3f] whitespace-nowrap">
                              No Turo Link
                            </span>
                          ) : (
                            <Link
                              to={itemEdit.car_turo_link}
                              target="_blank"
                              className="whitespace-nowrap  hover:text-accent hover:underline"
                            >
                              View Car
                            </Link>
                          )}
                        </span>
                      </p>
                      {store.credentials.data.role_is_client !== 1 && (
                        <p className="flex mb-1">
                          <span className="w-[10rem] font-bold">
                            Admin Turo Link:
                          </span>
                          <span className="w-fit">
                            {itemEdit.car_admin_turo_link === "" ? (
                              <span className="text-[#e41e3f] whitespace-nowrap">
                                No Admin Turo Link
                              </span>
                            ) : (
                              <Link
                                to={itemEdit.car_admin_turo_link}
                                target="_blank"
                                className="whitespace-nowrap  hover:text-accent hover:underline"
                              >
                                View Car
                              </Link>
                            )}
                          </span>
                        </p>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </>
            {/* // ) : (
            //   <div className="p-10 text-center bg-white rounded-lg">
            //     <span className="flex items-center justify-center">
            //       No photo yet
            //     </span>
            //   </div>
            // )} */}
          </div>
          <button
            type="button"
            className="!absolute tooltip-action-table -top-10 right-0 !p-0"
            data-tooltip="Close"
            onClick={handleClose}
          >
            <RxCross2 className="w-6 h-6 text-white border rounded-md" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalViewCar;
