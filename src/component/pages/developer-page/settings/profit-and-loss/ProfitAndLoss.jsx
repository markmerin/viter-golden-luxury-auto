import Header from "@/component/partials/Header";
import React from "react";
import Navigation from "../../Navigation";
import { StoreContext } from "@/store/StoreContext";
import { isDemoMode } from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import { setIsSettingsOpen } from "@/store/StoreAction";

const ProfitAndLoss = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <Navigation menu="settings" submenu="profit-and-loss" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-center justify-between mt-1 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            {/* <BreadCrumbs param={location.search} /> */}
            <h4 className="my-3 text-base capitalize">
              {location.pathname.split("/").pop().replaceAll("-", " ")}
            </h4>
          </div>
          <div className="flex items-center gap-1 print:invisible"></div>
        </div>
        <div className="w-full pt-3 pb-4">
          <p>We'll be right back.</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProfitAndLoss;
