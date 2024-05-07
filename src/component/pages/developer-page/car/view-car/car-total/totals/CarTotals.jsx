import useQueryData from "@/component/custom-hooks/useQueryData";
import {
  apiVersion,
  getUrlParam,
  isDemoMode,
} from "@/component/helpers/functions-general";
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
  const carId = getUrlParam().get("carId");

  const {
    isLoading,
    isFetching,
    error,
    data: carById,
  } = useQueryData(
    `${apiVersion}/car/read-by-id`, // endpoint
    "post", // method
    "car/read-by-id", // key
    { car_aid: carId },
    { car_aid: carId }
  );

  if (
    (!isLoading && !isFetching && carById?.count === 0) ||
    isNaN(carId) ||
    carId === undefined ||
    error
  ) {
    return <PageNotFound />;
  }

  const car =
    isLoading || isFetching
      ? "Loading..."
      : `${carById?.data[0].car_make_name} ${carById?.data[0].car_specs} ${carById?.data[0].car_year}`;

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
            <div className="flex flex-col justify-center max-w-[40rem] w-full">
              <BreadCrumbs param={location.search} />

              <div className="flex items-end justify-between w-full">
                <div>
                  <h4 className="my-3 text-base capitalize">
                    {location.pathname.split("/").pop().replaceAll("-", " ")}
                  </h4>
                  <h5 className="">{car}</h5>
                </div>
                <p>dropdown year</p>
              </div>
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
