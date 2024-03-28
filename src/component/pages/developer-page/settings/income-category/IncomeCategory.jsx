import React from "react";
import { FaPlus } from "react-icons/fa";

import ModalAddIncomeCategory from "./ModalAddIncomeCategory";
import { StoreContext } from "@/store/StoreContext";
import { setIsAdd, setIsSettingsOpen } from "@/store/StoreAction";
import Header from "@/component/partials/Header";
import Navigation from "../../Navigation";
import { isDemoMode } from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import ModalSuccess from "@/component/partials/modals/ModalSuccess";
import ModalError from "@/component/partials/modals/ModalError";
import IncomeCategoryList from "./IncomeCategoryList";

const IncomeCategory = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <Navigation menu="settings" submenu="income-category" />
      <div
        className={`wrapper ${store.isShow && "ml-48"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
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
        <hr />
        <div className="w-full pt-5 pb-4 ">
          <IncomeCategoryList setItemEdit={setItemEdit} />
        </div>
        <Footer />
      </div>

      {store.isAdd && <ModalAddIncomeCategory itemEdit={itemEdit} />}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default IncomeCategory;
