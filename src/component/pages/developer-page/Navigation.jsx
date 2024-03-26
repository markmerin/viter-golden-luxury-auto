import React from "react";
import { FaCog, FaHome } from "react-icons/fa";
import { PiCaretRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import {
  setIsSearch,
  setIsSettingsOpen,
  setIsShow,
  setScrollPosition,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { devNavUrl, developerPath } from "../../helpers/functions-general";
import GlaLogo from "../../svg/GlaLogo";

const Navigation = ({ menu, submenu = null }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const scrollRef = React.useRef(null);

  const handleDropDownSetting = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  const handleShow = () => {
    dispatch(setIsShow(true));
    dispatch(setIsSearch(false));
  };

  const handleScroll = (e) => {
    dispatch(setScrollPosition(e.target.scrollTop));
  };

  React.useEffect(() => {
    scrollRef.current?.scrollTo(0, store.scrollPosition);
  }, []);

  return (
    <>
      <div className="relative">
        <nav
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
          className={`${
            store.isShow ? "" : "-translate-x-48"
          } duration-200 ease-in z-50 bg-dark w-48 px-2`}
        >
          <ul className="text-sm pt-3 overflow-y-auto overflow-x-hidden relative">
            <li className="mb-6">
              <div className="flex items-center justify-center h-full">
                <GlaLogo />
              </div>
            </li>

            <li
              onClick={handleShow}
              className={
                menu === "home"
                  ? "active uppercase"
                  : "duration-200 uppercase text-white hover:text-primary mb-1 rounded-lg"
              }
            >
              <Link
                to={`${devNavUrl}/${developerPath}/home`}
                className="w-full flex items-center py-1 px-2 lg:justify-start"
              >
                <FaHome className="mr-3 lg:mr-3" />
                <span className="lg:block">Home</span>
              </Link>
            </li>

            <li
              onClick={handleDropDownSetting}
              className={`cursor-pointer ${
                menu === "settings"
                  ? "active uppercase"
                  : "duration-200 uppercase text-white hover:text-primary mb-1 rounded-lg"
              }
              
            `}
            >
              <div className="w-full flex items-center py-1 px-2 lg:justify-start">
                <FaCog className="mr-4 lg:mr-4" />
                <div className=" w-full flex items-center justify-between">
                  <span className="lg:block">Settings</span>
                  <PiCaretRight
                    className={
                      !store.isSettingsOpen
                        ? "rotate-90 duration-200"
                        : "-rotate-90 duration-200"
                    }
                  />
                </div>
              </div>
            </li>

            {store.isSettingsOpen && (
              <ul className=" ml-7 lg:block mt-1 pb-6">
                <li>
                  <Link
                    onClick={() => handleShow()}
                    to={`${devNavUrl}/${developerPath}/settings/user`}
                    className={`text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block py-1 ${
                      submenu === "users"
                        ? "active__submenu"
                        : "text-white py-1 block  hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                    }`}
                  >
                    Users
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
