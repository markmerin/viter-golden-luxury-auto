import React from "react";
import { setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  getPageLink,
  getUserType,
  isDemoMode,
} from "../../../../helpers/functions-general";
import BreadCrumbs from "../../../../partials/BreadCrumbs";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import Navigation from "../../Navigation";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const link = getUserType();

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
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base my-3 capitalize">
              {location.pathname.split("/").pop()}
            </h4>
          </div>
        </div>

        <hr />
        <ul className="pb-40 relative">
          <li>
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(link, "settings/user/system", "System user")}
            </div>
          </li>
          <li>
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(link, "settings/user/other", "Other user")}
            </div>
          </li>
          <li>
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(link, "settings/user/role", "Roles")}
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Users;
