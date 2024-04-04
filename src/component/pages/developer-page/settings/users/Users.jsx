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
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="mt-1 md:ml-0">
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
              {getPageLink(link, "settings/user/system", "System user")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "settings/user/other", "Other user")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
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
