import useQueryData from "@/component/custom-hooks/useQueryData";
import {
  apiVersion,
  getPageLink,
  getUrlParam,
  getUserType,
  isDemoMode,
} from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import Header from "@/component/partials/Header";
import PageNotFound from "@/component/partials/PageNotFound";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
import { setIsSettingsOpen } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import Navigation from "../../Navigation";

const ViewCar = () => {
  const carId = getUrlParam().get("carId");
  const { dispatch, store } = React.useContext(StoreContext);
  const link = getUserType();
  const carId = getUrlParam().get("carId");

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  const {
    isLoading,
    isFetching,
    error,
    data: carById,
  } = useQueryData(
    `${apiVersion}/car/read-by-id`, // endpoint
    "post", // method
    "car/read-by-id", // key
    { car_aid: carId },
    { car_aid: carId }
  );

  if (
    (!isLoading && !isFetching && carById?.count === 0) ||
    isNaN(carId) ||
    carId === undefined ||
    error
  ) {
    return <PageNotFound />;
  }

  const car =
    isLoading || isFetching
      ? "Loading..."
      : `${carById?.data[0].car_make_name} ${carById?.data[0].car_specs} ${carById?.data[0].car_year}`;

  return (
    <>
      <Header />
      <Navigation menu="car" />
      <div
        className={`wrapper ${store.isShow && " sm:ml-[256px]"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="my-3 text-base capitalize">{car}</h4>
          </div>
        </div>

        <ul className="relative w-full pb-40">
          {(isLoading || isFetching) && <FetchingSpinner />}

          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                `car/view-car/profit-and-loss?carId=${carId}`,
                "Profit and loss"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                `car/view-car/direct-delivery?carId=${carId}`,
                "Direct Delivery"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, `car/view-car/cogs?carId=${carId}`, "Cogs")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                `car/view-car/office-support?carId=${carId}`,
                "Office Support"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "car/view-car/history", "History")}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(
                link,
                `car/view-car/nada-depreciation-with-add?carId=${carId}`,
                "NADA Depereciation with Add"
              )}
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between border-b border-gray-300 border-solid group">
              {getPageLink(link, "car/view-car/totals", "Total")}
            </div>
          </li>
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default ViewCar;
