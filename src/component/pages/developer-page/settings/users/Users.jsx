import React from "react";
import { FaUserCog, FaUsers, FaUsersCog } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  getPageLink,
  getUserType,
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
        className={`relative min-h-screen print:!p-4 pt-[4.2rem] ml-0 px-5 lg:px-10 md:px-10 transition-all ease-in duration-200 ${
          store.isShow && "ml-48"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base my-3">User</h4>
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
