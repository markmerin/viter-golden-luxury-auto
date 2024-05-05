import Header from "@/component/partials/Header";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import Navigation from "../../../Navigation";
import { isDemoMode } from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";

const CarDirectDelivery = () => {
  const { store } = React.useContext(StoreContext);

  return (
    <>
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
          <p className="leading-none">We'll be right back.</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CarDirectDelivery;
