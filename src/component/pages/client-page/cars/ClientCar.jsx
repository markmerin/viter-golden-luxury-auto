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
import ClientCarList from "./ClientCarList";
// import ModalAddCar from "./ModalAddCar";

const ClientCar = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Header />
      <Navigation menu="cars" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
          </div>
          {/* <div className="flex items-center gap-1 print:invisible">
            <button type="button" className="btn-primary" onClick={handleAdd}>
              <FaPlus />
              <span>Add</span>
            </button>
          </div> */}
        </div>

        <div className="w-full pt-3 pb-4">
          <ClientCarList setItemEdit={setItemEdit} itemEdit={itemEdit} />
        </div>
        <Footer />
      </div>

      {/* {store.isAdd && <ModalAddCar clientId={clientId} itemEdit={itemEdit} />} */}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ClientCar;
