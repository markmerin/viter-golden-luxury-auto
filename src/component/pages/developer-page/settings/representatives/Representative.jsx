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
import RepresentativeList from "./RepresentativeList";
import ModalAddRepresentative from "./ModalAddRepresentative";

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
      <div className="flex items-start">
        <Navigation menu="settings" submenu="representatives" />
        <div
          className={`wrapper  
           ${isDemoMode === 1 && "min-h-[calc(100vh-36px)]"} 
           transition-all ease-in duration-200 w-full ml-0 sm:ml-[256px] `}
        >
          <div className="flex items-start justify-between mt-1 md:ml-0 print:hidden">
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
          <div className="w-full pt-5 pb-4 ">
            <RepresentativeList setItemEdit={setItemEdit} />
          </div>
          <Footer />
        </div>
      </div>
      {store.isAdd && <ModalAddRepresentative itemEdit={itemEdit} />}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Representative;
