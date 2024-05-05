import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaEdit } from "react-icons/fa";

const CarPurchaseFinanced = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <div className="flex items-center justify-between py-2 mb-3 border-b">
        <h4 className="text-sm text-accent">Purchase Financed</h4>
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
            <span className="w-[25em] font-bold mr-3">
              Trade Inn or Cash Down Payment
            </span>
            <span className="w-[22rem]">xxxx</span>
          </p>
          <p className="flex">
            <span className="w-[25em] font-bold mr-3">Purchase Price </span>
            <span className="w-[22rem]">xxxxx</span>
          </p>
          <p className="flex">
            <span className="w-[25em] font-bold mr-3">Contact:</span>
            <span className="w-[22rem]"></span>
          </p>
          <p className="flex">
            <span className="w-[25em] font-bold mr-3">Email:</span>
            <span className="w-[22rem]"></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CarPurchaseFinanced;
