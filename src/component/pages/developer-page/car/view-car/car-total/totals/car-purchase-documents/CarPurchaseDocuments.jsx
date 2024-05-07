import useQueryData from "@/component/custom-hooks/useQueryData";
import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import TableLoading from "@/component/partials/TableLoading";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import CarPurchaseDocumentsList from "./CarPurchaseDocumentsList";
import { setIsAdd } from "@/store/StoreAction";
import ModalAddCarPurchaseDocuments from "./ModalAddCarPurchaseDocuments";

const CarPurchaseDocuments = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 mb-3 border-b">
        <h4 className="text-sm text-accent">Purchase Documents</h4>
      </div>

      <button className="flex items-center gap-2 font-bold" onClick={handleAdd}>
        <FaPlus /> Add
      </button>
      <CarPurchaseDocumentsList />

      {store.isAdd && <ModalAddCarPurchaseDocuments itemEdit={itemEdit} />}
    </>
  );
};

export default CarPurchaseDocuments;
