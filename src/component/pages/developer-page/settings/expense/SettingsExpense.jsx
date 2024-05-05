import {
  getPageLink,
  getUserType,
  isDemoMode,
} from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import Header from "@/component/partials/Header";
import { setIsSettingsOpen } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import Navigation from "../../Navigation";

const SettingsExpense = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const link = getUserType();

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <Navigation menu="settings" submenu="expense" />
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
          <div className="flex items-center gap-1 print:invisible"></div>
        </div>

        <ul className="relative w-full pb-40">
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                "settings/expense/direct-delivery",
                "Direct Delivery"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "settings/expense/cogs", "COGS")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                "settings/expense/office-support",
                "Office Support"
              )}
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default SettingsExpense;
