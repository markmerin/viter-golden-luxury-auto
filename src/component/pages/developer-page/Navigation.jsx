import React from "react";
import { FaCarSide, FaCog, FaIndent, FaUsers } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { PiCaretRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import {
  setIsEarningsOpen,
  setIsSearch,
  setIsSettingsOpen,
  setIsShow,
  setScrollPosition,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { devNavUrl, getUserType } from "../../helpers/functions-general";
import GlaLogo from "../../svg/GlaLogo";

const Navigation = ({ menu, submenu = null }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const link = getUserType();
  const scrollRef = React.useRef(null);

  const handleDropDownSetting = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  const handleDropDownEarnings = () => {
    dispatch(setIsEarningsOpen(!store.isEarningsOpen));
  };

  const handleShow = () => {
    setTimeout(() => {
      dispatch(setIsShow(!store.isShow));
      dispatch(setIsSearch(false));
    }, 10);
  };

  const handleLinkClick = (e) => {
    if (window.innerWidth > 650) {
      dispatch(setIsShow(true));
    } else {
      dispatch(setIsShow(!store.isShow));
    }
  };

  const handleScroll = (e) => {
    dispatch(setScrollPosition(e.target.scrollTop));
  };

  const handleClickOutside = () => dispatch(setIsShow(!store.isShow));

  React.useEffect(() => {
    scrollRef.current?.scrollTo(0, store.scrollPosition);
  }, []);

  return (
    <>
      <nav
        ref={scrollRef}
        onScroll={(e) => handleScroll(e)}
        className={`${
          store.isShow ? "sm:ml-0" : "expand "
        }  navigation overflow-visible z-50 bg-dark w-[256px] px-2 h-[calc(100vh)]  transition-all shrink-0 -ml-[256px] `}
      >
        <div className="nav-backdrop" onClick={handleClickOutside}></div>
        <button
          onClick={handleShow}
          className={`text-dark absolute top-0 -right-[32px] z-50 focus:outline-0 bg-dark  hover:text-secondary size-8 grid place-content-center `}
        >
          <FaIndent className={`size-4 duration-200 fill-white `} />
        </button>

        <ul className="relative pt-3 overflow-x-hidden overflow-y-auto text-sm">
          <li className="mb-6">
            <div className="flex items-center justify-center h-full">
              <GlaLogo />
            </div>
          </li>

          <li
            onClick={handleLinkClick}
            className={
              menu === "client"
                ? "active uppercase translate-x-[18px]"
                : "duration-200 uppercase text-white hover:text-primary mb-1 rounded-lg translate-x-[18px]"
            }
          >
            <Link
              to={`${devNavUrl}/${link}/client`}
              className="flex items-center w-full px-2 py-1 lg:justify-start"
            >
              <FaUsers className="mr-3 lg:mr-3" />
              <span className="lg:block">Client</span>
            </Link>
          </li>

          <li
            onClick={handleLinkClick}
            className={
              menu === "car"
                ? "active uppercase translate-x-[18px]"
                : "duration-200 uppercase text-white hover:text-primary mb-1 rounded-lg translate-x-[18px]"
            }
          >
            <Link
              to={`${devNavUrl}/${link}/car`}
              className="flex items-center w-full px-2 py-1 lg:justify-start"
            >
              <FaCarSide className="mr-3 lg:mr-3" />
              <span className="lg:block">Car</span>
            </Link>
          </li>

          <li
            onClick={handleDropDownEarnings}
            className={`cursor-pointer ${
              menu === "earnings"
                ? "active uppercase translate-x-[18px]"
                : "duration-200 uppercase text-white hover:text-primary mb-1 rounded-lg translate-x-[18px]"
            }
              
            `}
          >
            <div className="flex items-center w-full px-2 py-1 lg:justify-start">
              <FaHandHoldingDollar className="mr-4 lg:mr-4" />
              <div className="flex items-center justify-between w-full ">
                <span className="lg:block">Earnings</span>
                <PiCaretRight
                  className={
                    !store.isEarningsOpen
                      ? "rotate-90 duration-200 -translate-x-8"
                      : "-rotate-90 duration-200 -translate-x-8"
                  }
                />
              </div>
            </div>
          </li>

          {store.isEarningsOpen && (
            <ul className="mt-1 mb-1 ml-14 lg:block">
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/earnings/details`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "earning-details"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Details
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/earnings-calculator`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "earnings-calculator"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Earnings Calculator
                </Link>
              </li>
            </ul>
          )}

          <li
            onClick={handleDropDownSetting}
            className={`cursor-pointer ${
              menu === "settings"
                ? "active uppercase translate-x-[18px]"
                : "duration-200 uppercase text-white hover:text-primary mb-1 rounded-lg translate-x-[18px]"
            }
              
            `}
          >
            <div className="flex items-center w-full px-2 py-1 lg:justify-start">
              <FaCog className="mr-4 lg:mr-4" />
              <div className="flex items-center justify-between w-full ">
                <span className="lg:block">Settings</span>
                <PiCaretRight
                  className={
                    !store.isSettingsOpen
                      ? "rotate-90 duration-200 -translate-x-8"
                      : "-rotate-90 duration-200 -translate-x-8"
                  }
                />
              </div>
            </div>
          </li>

          {store.isSettingsOpen && (
            <ul className="pb-6 mt-1 ml-14 lg:block">
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/user`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "users"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Users
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/car-make`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "car-make"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Car Make
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/representatives`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "representatives"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Representatives
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/profit-and-loss`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "profit-and-loss"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Profit and Loss
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/expense`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "expense"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Expense
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/current-cost-with-add`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "current-cost-with-add"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Current Cost with Add
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/current-cost`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "current-cost"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Current Cost
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/expenses`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "expenses"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Expenses
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/income-category`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "income-category"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Income Category
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/income-item`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "income-item"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Income Item
                </Link>
              </li> */}
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/quick-link`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "quicklink"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Quick Links
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/history`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "history"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleLinkClick()}
                  to={`${devNavUrl}/${link}/settings/totals`}
                  className={`text-xs mb-1.5 text-dark border-l-2 hover:!border-primary duration-150 hover:!border-l-2 border-transparent pl-2 w-fit inline-block ${
                    submenu === "totals"
                      ? "active__submenu"
                      : "text-white block hover:!border-white duration-150 !border-l-2 border-transparent rounded-r-md pl-2"
                  }`}
                >
                  Totals
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
