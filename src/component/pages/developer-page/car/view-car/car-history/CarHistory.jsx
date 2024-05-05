import Header from "@/component/partials/Header";
import React from "react";
import Navigation from "../../../Navigation";
import { isDemoMode } from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import ModalSuccess from "@/component/partials/modals/ModalSuccess";
import ModalError from "@/component/partials/modals/ModalError";
import { StoreContext } from "@/store/StoreContext";
import HistoryTable from "./CarHistoryTable";

const CarHistory = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <div>
      <Header />
      <Navigation menu="car" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
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
          <HistoryTable />
        </div>
        <Footer />
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </div>
  );
};

export default CarHistory;
