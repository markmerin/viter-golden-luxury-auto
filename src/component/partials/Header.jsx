import React from "react";
import { FaIndent, FaUserCircle } from "react-icons/fa";
import {
  MdOutlineAccountCircle,
  MdOutlineLogout,
  MdOutlineMailOutline,
} from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { setIsShow } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { checkLocalStorage } from "../helpers/CheckLocalStorage";
import {
  devNavUrl,
  developerPath,
  getUserType,
  isDemoMode,
} from "../helpers/functions-general";
import DemoMode from "./DemoMode";
import FetchingSpinner from "./spinners/FetchingSpinner";

const Header = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();
  let menuRef = React.useRef();
  const link = getUserType();

  const name =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_fname
      : store.credentials.data.user_other_fname;

  const lastname =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_lname
      : store.credentials.data.user_other_lname;

  const role =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.role_name
      : store.credentials.data.role_name;

  const email =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_email
      : store.credentials.data.user_other_email;

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("glatoken");
        store.credentials.data.role_is_developer === 1
          ? window.location.replace(`${devNavUrl}/${developerPath}/login`)
          : window.location.replace(`${devNavUrl}/login`);
        return;
      }
      setLoading(false);
    }, 1500);
  };

  const handleShowMenu = () => {
    dispatch(setIsShow(!store.isShow));
  };

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleShow = () => setShow(!show);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  return (
    <>
      {isDemoMode === 1 && <DemoMode />}
      {loading && <FetchingSpinner />}
      <header
        className={`pr-5 lg:pr-5 md:pr-5 fixed z-50 bg-white w-full flex justify-end items-center h-16 border-solid border-b-2 border-dark `}
      >
      

        <div className="header__avatar" ref={ref} onClick={handleShow}>
          <div className="flex items-center py-2 cursor-pointer">
            <div
              className={`duration-200 ease-in-out border-2 border-white hover:border-2 hover:border-primary hover:border-opacity-50 rounded-full ${
                show ? "!border-primary" : "border-opacity-50"
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-dark ">
                <span className="text-[0] first-letter:text-xs first-letter:font-bold text-white">
                  {name}
                </span>
                <span className="ml-[1px] text-[0] first-letter:text-xs first-letter:font-bold text-white">
                  {lastname}
                </span>
              </div>
            </div>
          </div>

          {show && (
            <div
              ref={menuRef}
              className="p-3 min-w-[250px] overflow-hidden rounded-md absolute top-[77%] lg:right-7 right-10 drop-shadow-sm border border-gray-200 text-xs bg-white z-[99]"
            >
              <span className="bg-dark/50 absolute w-full h-[3.5rem] left-0 top-0"></span>
              <div className="flex flex-col items-center py-3">
                <FaUserCircle className="z-50 w-12 h-12 mb-2 text-gray-400 bg-white rounded-full" />
                <p className="flex items-center gap-2 mb-1 font-bold">
                  {name} - {role}
                </p>
                <p className="flex items-center gap-2 pb-2 mb-0 text-xs">
                  <MdOutlineMailOutline />
                  {email}
                </p>
              </div>

              <ul className="py-2 border-t border-b border-gray-100 ">
                <li className="flex items-center gap-2 hover:text-accent">
                  <MdOutlineAccountCircle />
                  <Link to={`${devNavUrl}/${link}/account`} className="w-full ">
                    Account
                  </Link>
                </li>
              </ul>

              {store.credentials.data.role_is_client !== 1 && (
                <ul className="py-2 border-t border-b border-gray-100 ">
                  <li className="flex items-center gap-2 hover:text-accent">
                    <RiToolsLine />
                    <Link
                      to={`${devNavUrl}/${link}/maintenance`}
                      className="w-full "
                    >
                      Maintenance
                    </Link>
                  </li>
                </ul>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center w-full gap-2 pt-2 hover:text-accent"
              >
                <MdOutlineLogout />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
