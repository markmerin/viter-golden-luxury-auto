import { setIsEarningsOpen } from "@/store/StoreAction";
import React from "react";
import { StoreContext } from "../../../../../store/StoreContext";
import { isDemoMode } from "../../../../helpers/functions-general";
import BreadCrumbs from "../../../../partials/BreadCrumbs";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import Navigation from "../../Navigation";
import DetailsList from "./DetailsList";

const Details = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleAdd = () => {
    // dispatch(setIsAdd(true));
    // setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsEarningsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <div className="flex items-start">
        <Navigation menu="earnings" submenu="earning-details" />
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
          </div>
          <div className="w-full pt-3 pb-4">
            <DetailsList />
          </div>
          <Footer />
        </div>
      </div>
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Details;