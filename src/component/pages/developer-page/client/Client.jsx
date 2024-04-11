import { setIsAdd } from "@/store/StoreAction";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { StoreContext } from "../../../../store/StoreContext";
import { isDemoMode } from "../../../helpers/functions-general";
import BreadCrumbs from "../../../partials/BreadCrumbs";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import Navigation from "../Navigation";
import ClientList from "./ClientList";
import ModalAddClient from "./ModalAddClient";

const Client = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
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
        <div className="flex items-center justify-between mt-1 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="my-3 text-base capitalize">
              {location.pathname.split("/").pop().replaceAll("-", " ")}
            </h4>
          </div>
          <div className="flex items-center gap-1 print:invisible">
            <button type="button" className="btn-primary" onClick={handleAdd}>
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </div>
        <div className="w-full pt-5 pb-4">
          <ClientList />
        </div>
        <Footer />
      </div>

      {store.isAdd && <ModalAddClient />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Client;
