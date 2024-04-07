import React from "react";
import { FaEdit } from "react-icons/fa";
import { StoreContext } from "../../../../../../store/StoreContext";
import ModalUpdateBankDetails from "./ModalUpdateBankDetails";
import ModalUpdateProfile from "./ModalUpdateProfile";
// import ModalUpdateProfile from "./ModalUpdateProfile";

const ClientProfileList = ({ client }) => {
  const { store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [updateProfile, setUpdateProfile] = React.useState(false);
  const [updateBankDetails, setUpdateBankDetails] = React.useState(false);

  const handleEdit = (item) => {
    setUpdateProfile(true);
    setItemEdit(item);
  };

  const handleEditBankDetails = (item) => {
    setUpdateBankDetails(true);
    setItemEdit(item);
  };

  return (
    <>
      {client?.data.map((item, key) => {
        return (
          <div key={key}>
            <div className="border-b py-2 flex justify-between items-center mb-3">
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
                  <span className="w-[10rem] font-bold mr-3">First Name:</span>
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

            <div className="border-b py-2 flex justify-between items-center mb-3 mt-4">
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
          </div>
        );
      })}

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