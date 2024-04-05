import useQueryData from "@/component/custom-hooks/useQueryData";
import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import { setIsAdd } from "@/store/StoreAction";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  apiVersion,
  getUrlParam,
  isDemoMode,
} from "../../../../../helpers/functions-general";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Footer from "../../../../../partials/Footer";
import Header from "../../../../../partials/Header";
import ModalError from "../../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../../partials/modals/ModalSuccess";
import Navigation from "../../../Navigation";
import ModalAddRecordsFiles from "./ModalAddRecordsFiles";
import RecordsFilesList from "./RecordsFilesList";

const RecordsFiles = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const clientId = getUrlParam().get("clientId");

  const {
    isLoading,
    isFetching,
    error,
    data: recordsfiles,
  } = useQueryData(
    `${apiVersion}/records-files/${clientId}`, // endpoint
    "get", // method
    "recordsfiles", // key
    {},
    clientId
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Header />
      <Navigation menu="client" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="flex items-center my-3 text-base capitalize">
              <span className="inline-flex">{getClientName}</span>
            </h4>
          </div>
          <div className="flex items-center gap-1 print:invisible">
            <button type="button" className="btn-primary" onClick={handleAdd}>
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </div>

        {recordsfiles?.count === 0 && (
          <div className="w-full pt-5 pb-32 ">
            <NoData />
          </div>
        )}

        {error && (
          <div className="w-full pt-5 pb-32 ">
            <ServerError />
          </div>
        )}

        {recordsfiles?.count > 0 && (
          <div className="w-full pt-5 pb-4 ">
            <RecordsFilesList />
          </div>
        )}
        <Footer />
      </div>

      {store.isAdd && <ModalAddRecordsFiles itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default RecordsFiles;
