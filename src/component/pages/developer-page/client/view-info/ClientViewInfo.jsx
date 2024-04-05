import useQueryData from "@/component/custom-hooks/useQueryData";
import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import TableLoading from "@/component/partials/TableLoading";
import ButtonSpinner from "@/component/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import React from "react";
import { FaCar, FaCarSide, FaUser } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  apiVersion,
  getPageLink,
  getUrlParam,
  getUserType,
  isDemoMode,
} from "../../../../helpers/functions-general";
import BreadCrumbs from "../../../../partials/BreadCrumbs";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import Navigation from "../../Navigation";

const ClientViewInfo = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");
  const link = getUserType();

  const {
    isLoading,
    isFetching,
    error,
    data: client,
  } = useQueryData(
    `${apiVersion}/client/${clientId}`, // endpoint
    "get", // method
    "client", // key
    {},
    clientId
  );

  const getClientName = isLoading ? (
    <ButtonSpinner />
  ) : client?.count === 0 ? (
    "No data"
  ) : error ? (
    "Server error"
  ) : (
    `${client?.data[0].client_fname} ${client?.data[0].client_lname}`
  );

  return (
    <>
      <Header />
      <Navigation menu="client" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="flex items-center my-3 text-base capitalize">
              <span className="inline-flex">{getClientName}</span>
            </h4>
          </div>
        </div>

        {client?.count === 0 && (
          <ul className="relative pt-5 pb-40">
            <NoData />
          </ul>
        )}

        {error && (
          <ul className="relative pt-5 pb-40">
            <ServerError />
          </ul>
        )}

        {isLoading && (
          <ul className="relative pt-5 pb-40">
            <TableLoading count={7} cols={2} />
          </ul>
        )}

        {client?.count > 0 && (
          <ul className="relative pb-40">
            {isFetching && <FetchingSpinner />}
            <li>
              <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
                <FaUser />
                {getPageLink(
                  link,
                  `client/view-info/profile?clientId=${clientId}`,
                  "Profile"
                )}
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
                <FaCarSide />
                {getPageLink(
                  link,
                  `client/view-info/car?clientId=${clientId}`,
                  "Cars"
                )}
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
                <FaHandHoldingDollar />
                {getPageLink(
                  link,
                  `client/view-info/earnings?clientId=${clientId}`,
                  "Earning"
                )}
              </div>
            </li>

            <li>
              <div className="flex items-center justify-between gap-2 border-b border-gray-300 border-solid group">
                <FaHandHoldingDollar />
                {getPageLink(
                  link,
                  `client/view-info/records-files?clientId=${clientId}`,
                  "Records and Files"
                )}
              </div>
            </li>
          </ul>
        )}
        <Footer />
      </div>
    </>
  );
};

export default ClientViewInfo;
