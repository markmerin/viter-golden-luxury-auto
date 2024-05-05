import useQueryData from "@/component/custom-hooks/useQueryData";
import { apiVersion, isDemoMode } from "@/component/helpers/functions-general";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import React from "react";

import PurchaseDocuments from "./car-purchase-documents/CarPurchaseDocuments";
import { StoreContext } from "@/store/StoreContext";
import Footer from "@/component/partials/Footer";
import ModalSuccess from "@/component/partials/modals/ModalSuccess";
import ModalError from "@/component/partials/modals/ModalError";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Navigation from "@/component/pages/developer-page/Navigation";
import Header from "@/component/partials/Header";
import CarPurchaseDocuments from "./car-purchase-documents/CarPurchaseDocuments";
import CarPurchaseFinanced from "./car-purchase-financed/CarPurchaseFinanced";
import CarTotalCarRentalValue from "./total-car-rental-value/CarTotalCarRentalValue";
import CarTotalCarValue from "./car-total-car-value/CarTotalCarValue";
// import ModalUpdateProfile from "./ModalUpdateProfile";

const CarTotals = ({ client }) => {
  const { store } = React.useContext(StoreContext);

  return (
    <>
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
          <div className="max-w-[40rem] pt-3 pb-4 relative">
            <CarPurchaseDocuments />
            <CarPurchaseFinanced />
            <CarTotalCarRentalValue />
            <CarTotalCarValue />
          </div>
          <Footer />
        </div>

        {store.success && <ModalSuccess />}
        {store.error && <ModalError />}
      </div>
    </>
  );
};

export default CarTotals;
