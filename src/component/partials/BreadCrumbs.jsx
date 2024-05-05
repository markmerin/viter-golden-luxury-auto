import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setIsSearch } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { devNavUrl, getUserType } from "../helpers/functions-general";

const BreadCrumbs = ({ param = "" }) => {
  const { dispatch } = React.useContext(StoreContext);
  const location = useLocation();
  const navigate = useNavigate();
  const link = getUserType();
  let currentLink = "";

  const handleClick = () => {
    dispatch(setIsSearch(false));
  };

  const handleBack = () => {
    dispatch(setIsSearch(false));
    navigate(-1);
  };

  const crumbs = location.pathname
    .replace(`${devNavUrl}/${link}`, "")
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, key) => {
      currentLink += `/${crumb}`;
      return (
        <li
          className={`text-accent after:mr-2 after:content-['>'] last:after:hidden last:text-dark last:pointer-events-none ${
            crumb === "settings" && "pointer-events-none"
          } `}
          key={key}
          onClick={handleClick}
        >
          <Link
            to={
              crumb === "settings"
                ? ""
                : `${devNavUrl}/${link}${currentLink}${param}`
            }
            className="mr-2 font-medium hover:text-accent capitalize text-[10px]"
          >
            {crumb.replaceAll("-", " ")}
          </Link>
        </li>
      );
    });
  return (
    <>
      <div className="flex items-center gap-5 breadcrumbs">
        {crumbs.length === 1 ? (
          ""
        ) : (
          <button
            type="button"
            className="tooltip-action-table !p-0"
            data-tooltip="Back"
            onClick={() => handleBack()}
          >
            <FaArrowLeft className="w-6 h-6 lg:h-4 lg:w-4" />
          </button>
        )}
        <ul className="flex items-center cursor-pointer">
          {crumbs.length === 1 ? "" : crumbs}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumbs;
