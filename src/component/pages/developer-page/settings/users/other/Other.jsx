import React from "react";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { setIsSettingsOpen } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  getPageLink,
  getUserType,
  isDemoMode,
} from "../../../../../helpers/functions-general";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Footer from "../../../../../partials/Footer";
import Header from "../../../../../partials/Header";
import PageNotFound from "../../../../../partials/PageNotFound";
import Navigation from "../../../Navigation";

const Other = () => {
  const link = getUserType();
  const { store, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <Navigation menu="settings" submenu="users" />
      <div
        className={`wrapper ${store.isShow && "ml-48"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base my-3 capitalize">
              {location.pathname.split("/").pop()}
            </h4>
            <div className="flex items-center gap-1 print:invisible"></div>
          </div>
        </div>

        <hr />
        <ul className="pb-40 relative">
          <li>
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(
                link,
                `${
                  store.credentials.data.role_is_developer === 1
                    ? "settings/user/other/staff"
                    : "settings/user/staff"
                }`,
                "GLA Staff"
              )}
            </div>
          </li>
          <li>
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(
                link,
                `${
                  store.credentials.data.role_is_developer === 1
                    ? "settings/user/other/client"
                    : "settings/user/client"
                }`,
                "Client User"
              )}
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Other;
