import Header from "@/component/partials/Header";
import React from "react";
import Navigation from "../../Navigation";
import { StoreContext } from "@/store/StoreContext";
import {
  getPageLink,
  getUserType,
  isDemoMode,
} from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import { FaUser } from "react-icons/fa";

const TotalsLinks = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const link = getUserType();
  return (
    <>
      <Header />
      <Navigation menu="client" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="flex items-center my-3 text-base capitalize">
              <span className="inline-flex">Totals</span>
            </h4>
          </div>
        </div>

        <ul className="relative pb-40">
          <li>
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
              <FaUser />
              {getPageLink(
                link,
                `settings/totals/purchase-documents`,
                "Purchase Documents"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
              <FaUser />
              {getPageLink(
                link,
                `settings/totals/purchase-financed`,
                "Purchase Financed"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
              <FaUser />
              {getPageLink(
                link,
                `settings/totals/total-car-value`,
                "Total Car Value"
              )}
            </div>
          </li>

          <li>
            <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
              <FaUser />
              {getPageLink(
                link,
                `settings/totals/total-car-rental-value`,
                "Total Car Rental Value"
              )}
            </div>
          </li>
        </ul>

        <Footer />
      </div>
    </>
  );
};

export default TotalsLinks;
