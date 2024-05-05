import {
  getPageLink,
  getUserType,
  isDemoMode,
} from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import Header from "@/component/partials/Header";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import Navigation from "../../Navigation";

const ViewCar = () => {
  const { store } = React.useContext(StoreContext);
  const link = getUserType();

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

        <ul className="relative w-full pb-40">
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                "car/view-car/profit-and-loss",
                "Profit and loss"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                "car/view-car/direct-delivery",
                "Direct Delivery"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "car/view-car/cogs", "Cogs")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                "car/view-car/office-support",
                "Office Support"
              )}
            </div>
          </li>

          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "car/view-car/history", "History")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "car/view-car/totals", "Total")}
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default ViewCar;
