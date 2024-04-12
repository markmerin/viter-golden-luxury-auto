import useQueryData from "@/component/custom-hooks/useQueryData";
import { apiVersion } from "@/component/helpers/functions-general";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
import React from "react";
import {
  FaCaretRight,
  FaEdit,
  FaGoogleDrive,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
  FaYelp,
} from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../../../store/StoreContext";
import ModalUpdateBankDetails from "./ModalUpdateBankDetails";
import ModalUpdateProfile from "./ModalUpdateProfile";
// import ModalUpdateProfile from "./ModalUpdateProfile";

const ClientProfileList = ({ client }) => {
  const { store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [updateProfile, setUpdateProfile] = React.useState(false);
  const [updateBankDetails, setUpdateBankDetails] = React.useState(false);
  const email =
    store.credentials.data.role_is_client === 1
      ? store.credentials.data.user_other_email
      : client?.data[0].client_email;

  const {
    isLoading: qlIsLoading,
    isFetching: qlIsFetching,
    data: quicklink,
  } = useQueryData(
    `${apiVersion}/quick-link`, // endpoint
    "get", // method
    "quicklink" // key
  );

  const {
    isLoading: carIsLoading,
    isFetching: carIsFetching,
    data: car,
  } = useQueryData(
    `${apiVersion}/client/car/read/${email}`, // endpoint
    "get", // method
    "client/car/read" // key
  );

  console.log(car);

  const handleEdit = (item) => {
    setUpdateProfile(true);
    setItemEdit(item);
  };

  const handleEditBankDetails = (item) => {
    setUpdateBankDetails(true);
    setItemEdit(item);
  };

  const getSocialLink =
    !qlIsLoading &&
    quicklink?.data.filter((item) => item.quicklink_is_social === 1);

  const getOtherLink =
    !qlIsLoading &&
    quicklink?.data.filter((item) => item.quicklink_is_social !== 1);

  return (
    <>
      {qlIsFetching || qlIsLoading || carIsLoading || carIsFetching ? (
        <FetchingSpinner />
      ) : (
        client?.data.map((item, key) => {
          return (
            <div key={key}>
              <div className="flex items-center justify-between py-2 mb-3 border-b">
                <h4 className="text-sm text-accent">Profile</h4>
                {store.credentials.data.role_is_client !== 1 && (
                  <button
                    type="button"
                    className="tooltip-action-table hover:text-accent"
                    data-tooltip="Edit"
                    onClick={() => handleEdit(item)}
                  >
                    <FaEdit />
                  </button>
                )}
              </div>
              <div className="md:flex">
                <div>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">
                      First Name:
                    </span>
                    <span className="w-[22rem]">{item.client_fname}</span>
                  </p>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">Last Name:</span>
                    <span className="w-[22rem]">{item.client_lname}</span>
                  </p>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">Contact:</span>
                    <span className="w-[22rem]">{item.client_contact}</span>
                  </p>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">Email:</span>
                    <span className="w-[22rem]">{item.client_email}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 mt-4 mb-3 border-b">
                <h4 className="text-sm text-accent">Bank Details</h4>
                {store.credentials.data.role_is_client !== 1 && (
                  <button
                    type="button"
                    className="tooltip-action-table hover:text-accent"
                    data-tooltip="Edit"
                    onClick={() => handleEditBankDetails(item)}
                  >
                    <FaEdit />
                  </button>
                )}
              </div>
              <div className="md:flex">
                <div>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">Bank Name:</span>
                    <span className="w-[22rem]">
                      {item.client_bank_name === ""
                        ? "No Data"
                        : item.client_bank_name}
                    </span>
                  </p>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">
                      Bank Routing Number:
                    </span>
                    <span className="w-[22rem]">
                      {item.client_bank_routing_number === 0
                        ? "No Data"
                        : item.client_bank_routing_number}
                    </span>
                  </p>
                  <p className="flex">
                    <span className="w-[10rem] font-bold mr-3">
                      Bank Account Number:
                    </span>
                    <span className="w-[22rem]">
                      {item.client_bank_account_number === 0
                        ? "No Data"
                        : item.client_bank_account_number}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 mt-4 mb-3 border-b">
                <h4 className="text-sm text-accent">Quick Links </h4>
              </div>
              <ul className="relative">
                {getOtherLink.length > 0 &&
                  getOtherLink.map((item, key) => (
                    <li
                      key={key}
                      className="flex items-center gap-4 mb-4 w-fit group hover:text-accent"
                    >
                      <FaCaretRight className="group-hover:translate-x-2 duration-200" />
                      <Link
                        to={item.quicklink_link}
                        target="_blank"
                        key={key}
                        className="group-hover:underline"
                      >
                        {item.quicklink_name}
                      </Link>
                    </li>
                  ))}
              </ul>

              <div className="flex items-center justify-between py-2 mt-4 mb-3 border-b">
                <h4 className="text-sm text-accent">View My Car </h4>
              </div>
              <ul className="relative">
                {car?.count > 0 &&
                  car?.data.map((item, key) => (
                    <li
                      key={key}
                      className="flex items-center gap-4 mb-4 w-fit group hover:text-accent"
                    >
                      <FaCaretRight className="group-hover:translate-x-2 duration-200" />
                      <Link
                        to={item.car_turo_link}
                        target="_blank"
                        key={key}
                        className="group-hover:underline"
                      >
                        {item.car_make_name} {item.car_specs} {item.car_year}
                      </Link>
                    </li>
                  ))}
              </ul>

              <div className="flex items-center justify-between py-2 mt-4 mb-3 border-b"></div>
              <ul className="flex gap-4 mb-8">
                {getSocialLink.length > 1 &&
                  getSocialLink.map((item, key) => (
                    <li key={key}>
                      <a
                        href={item.quicklink_link}
                        target="_blank"
                        key={key}
                        className="text-2xl transition-all hover:text-accent"
                      >
                        {item.quicklink_social_media === "facebook" ? (
                          <FaSquareFacebook className="h-5 w-5" />
                        ) : item.quicklink_social_media === "instagram" ? (
                          <FaInstagramSquare className="h-5 w-5" />
                        ) : item.quicklink_social_media === "pinterest" ? (
                          <FaPinterest className="h-5 w-5" />
                        ) : item.quicklink_social_media === "yelp" ? (
                          <FaYelp className="h-5 w-5" />
                        ) : item.quicklink_social_media === "linkedin" ? (
                          <FaLinkedin className="h-5 w-5" />
                        ) : (
                          "No Icon Available"
                        )}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })
      )}

      {updateProfile && (
        <ModalUpdateProfile
          itemEdit={itemEdit}
          setUpdateProfile={setUpdateProfile}
        />
      )}

      {updateBankDetails && (
        <ModalUpdateBankDetails
          itemEdit={itemEdit}
          setUpdateBankDetails={setUpdateBankDetails}
        />
      )}
    </>
  );
};

export default ClientProfileList;
