import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import TableLoading from "@/component/partials/TableLoading";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getUrlParam,
  isDemoMode,
} from "../../../helpers/functions-general";
import BreadCrumbs from "../../../partials/BreadCrumbs";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import ClientProfileList from "../../developer-page/client/view-info/profile/ClientProfileList";
import Navigation from "../Navigation";

const ClientProfile = () => {
  const { store } = React.useContext(StoreContext);

  const {
    isLoading,
    isFetching,
    error,
    data: client,
  } = useQueryData(
    `${apiVersion}/client/read-by-email`, // endpoint
    "post", // method
    "client", // key
    { client_email: store.credentials.data.user_other_email },
    { client_email: store.credentials.data.user_other_email }
  );

  return (
    <>
      <Header />
      <Navigation menu="profile" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
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
