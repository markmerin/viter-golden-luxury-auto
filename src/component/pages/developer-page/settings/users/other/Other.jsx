import React from "react";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { setIsSettingsOpen } from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  getPageLink,
  getUserType,
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
        className={`relative min-h-screen print:!p-4 pt-[4.2rem] ml-0 px-5 lg:px-10 md:px-10 transition-all ease-in duration-200 ${
          store.isShow && "ml-48"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <h4 className="text-xl flex">Settings</h4>
            <BreadCrumbs param={location.search} />
            <div className="flex items-center gap-1 print:invisible"></div>
          </div>
        </div>

        <hr />
        <ul className="pt-5">
          <li className="py-2">
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(
                link,
                "settings/users/other/main",
                "Main User",
                "Manage what actions and capabilities every account are can perform in the system.",
                <FaUsers className="w-4 h-4" />,
                <SlArrowRight className="inline" />
              )}
            </div>
          </li>
          <li className="py-2">
            <div className="group flex items-center justify-between border-b border-solid border-gray-300">
              {getPageLink(
                link,
                "settings/users/other/trainee",
                "Trainee User",
                "Manage what actions and capabilities every account are can perform in the system.",
                <FaUserGraduate className="w-4 h-4" />,
                <SlArrowRight className="inline" />
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
