import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import TableLoading from "@/component/partials/TableLoading";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import React from "react";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getUrlParam,
  isDemoMode,
} from "../../../../../helpers/functions-general";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Footer from "../../../../../partials/Footer";
import Header from "../../../../../partials/Header";
import ModalError from "../../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../../partials/modals/ModalSuccess";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";
import Navigation from "../../../Navigation";
import ClientProfileList from "./ClientProfileList";

const ClientProfile = () => {
  const { store } = React.useContext(StoreContext);
  const clientId = getUrlParam().get("clientId");

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
        className={`wrapper ${store.isShow && "ml-48"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base my-3 capitalize flex items-center">
              <span className="inline-flex">{getClientName}</span>
            </h4>
          </div>
        </div>

        {client?.count === 0 && (
          <div className="w-full pt-5 pb-32 ">
            <NoData />
          </div>
        )}

        {error && (
          <div className="w-full pt-5 pb-32 ">
            <ServerError />
          </div>
        )}

        {isLoading && (
          <div className="max-w-[40rem] pt-5 pb-32 ">
            <TableLoading count={15} cols={2} />
          </div>
        )}

        {client?.count > 0 && (
          <div className="max-w-[40rem] pt-3 pb-32 relative">
            {isFetching && <FetchingSpinner />}
            <ClientProfileList client={client} />
          </div>
        )}
        <Footer />
      </div>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ClientProfile;
