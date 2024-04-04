import React from "react";
import { FaPlus } from "react-icons/fa";

import { isDemoMode } from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import Header from "@/component/partials/Header";
import ModalError from "@/component/partials/modals/ModalError";
import ModalSuccess from "@/component/partials/modals/ModalSuccess";
import { setIsAdd, setIsSettingsOpen } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import Navigation from "../../Navigation";
import IncomeItemList from "./IncomeItemList";
import ModalAddIncomeItem from "./ModalAddIncomeItem";

const IncomeItem = () => {
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
      <Navigation menu="settings" submenu="income-item" />
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
          <div className="w-full pt-5 pb-4 ">
            <IncomeItemList setItemEdit={setItemEdit} />
          </div>
          <Footer />
        </div>

        <div className="w-full pt-5 pb-4 ">
          <IncomeItemList setItemEdit={setItemEdit} />
        </div>
        <Footer />
      </div>
      {store.isAdd && <ModalAddIncomeItem itemEdit={itemEdit} />}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default IncomeItem;
