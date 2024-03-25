import React from "react";
import { FaIndent, FaUserCircle } from "react-icons/fa";
import {
  MdOutlineAccountCircle,
  MdOutlineLogout,
  MdOutlineMailOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { setIsShow } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { checkLocalStorage } from "../helpers/CheckLocalStorage";
import {
  devNavUrl,
  developerPath,
  getUserType,
} from "../helpers/functions-general";
import GlaLogo from "../svg/GlaLogo";
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
      : store.credentials.data.user_other_name.split(" ")[0];

  const userEmail =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_email
      : store.credentials.data.user_other_email;

  const roleName =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.role_name
      : store.credentials.data.role_name;

  const lastname =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_lname
      : store.credentials.data.user_other_name.split(" ")[1];

  const fullname =
    store.credentials.data.role_is_developer === 1
      ? `${store.credentials.data.user_system_fname} ${store.credentials.data.user_system_lname} `
      : store.credentials.data.user_other_name;

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
      {loading && <FetchingSpinner />}
      <header
        className={`pr-5 lg:pr-10 md:pr-10 fixed z-50 bg-white w-full flex justify-end items-center h-16 border-solid border-b-2 border-primary `}
      >
        <button
          onClick={handleShowMenu}
          className={`${
            store.isShow ? "left-48 " : "left-0 "
          } text-dark absolute top-0 z-50 flex items-center rounded-br-sm p-2 focus:outline-0 bg-dark hover:bg-dark hover:text-secondary transition-all ease-in duration-200`}
          title={store.isShow ? "Collapse" : "Expand"}
        >
          <FaIndent
            className={`h-4 w-4 duration-200 fill-white ${
              store.isShow ? "-scale-x-[1]" : ""
            }`}
          />
        </button>

        <div className="header__avatar" ref={ref} onClick={handleShow}>
          <div className="flex items-center py-2 cursor-pointer">
            <div
              className={`duration-200 ease-in-out border-2 border-white hover:border-2 hover:border-primary hover:border-opacity-50 rounded-full ${
                show ? "!border-primary" : "border-opacity-50"
              }`}
            >
              <div className="flex bg-primary rounded-full justify-center items-center h-8 w-8 ">
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
              className="p-3 min-w-[250px] overflow-hidden rounded-md absolute top-[77%] lg:right-14 right-10 drop-shadow-sm border border-gray-200 text-xs bg-white z-[99]"
            >
              <span className="bg-primary/50 absolute w-full h-[3.5rem] left-0 top-0"></span>
              <div className="flex flex-col items-center py-3">
                <FaUserCircle className="w-12 h-12 text-gray-400 mb-2 z-50 bg-white rounded-full" />
                <p className="mb-1  flex items-center gap-2 font-bold">
                  {fullname} - {roleName}
                </p>
                <p className="mb-0 pb-2 flex items-center gap-2 text-xs">
                  <MdOutlineMailOutline />
                  {userEmail}
                </p>
              </div>

              <ul className="border-t border-b border-gray-100 py-2 ">
                <li className="flex items-center gap-2 hover:text-primary">
                  <MdOutlineAccountCircle />
                  <Link to={`${devNavUrl}/${link}/account`} className=" w-full">
                    Account
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleLogout}
                className="hover:text-primary flex items-center gap-2 pt-2 w-full"
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
