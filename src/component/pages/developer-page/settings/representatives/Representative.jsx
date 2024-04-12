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
import ModalAddRepresentative from "./ModalAddRepresentative";
import RepresentativeList from "./RepresentativeList";

const Representative = () => {
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
      <Navigation menu="settings" submenu="representatives" />
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
            <button
              type="button"
              className="pr-0 btn-primary"
              onClick={handleAdd}
            >
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </div>
        <div className="w-full pt-3 pb-4">
          <RepresentativeList setItemEdit={setItemEdit} />
        </div>
        <Footer />
      </div>

      {store.isAdd && <ModalAddRepresentative itemEdit={itemEdit} />}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Representative;
