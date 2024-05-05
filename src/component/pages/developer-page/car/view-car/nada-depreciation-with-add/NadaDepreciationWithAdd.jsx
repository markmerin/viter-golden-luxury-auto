import React from "react";
import { FaPlus } from "react-icons/fa";

import useQueryData from "@/component/custom-hooks/useQueryData";
import {
  apiVersion,
  getUrlParam,
  isDemoMode,
} from "@/component/helpers/functions-general";
import BreadCrumbs from "@/component/partials/BreadCrumbs";
import Footer from "@/component/partials/Footer";
import Header from "@/component/partials/Header";
import PageNotFound from "@/component/partials/PageNotFound";
import ModalError from "@/component/partials/modals/ModalError";
import ModalSuccess from "@/component/partials/modals/ModalSuccess";
import { setIsAdd, setIsSettingsOpen } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import Navigation from "../../../Navigation";
import ModalAddNadaDepreciationWithAdd from "./ModalAddNadaDepreciationWithAdd";
import NadaDepreciationWithAddList from "./NadaDepreciationWithAddList";

const NadaDepreciationWithAdd = () => {
  const carId = getUrlParam().get("carId");
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

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
        <div className="flex items-center justify-between mt-1 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="my-3 text-base capitalize">{car}</h4>
          </div>
          <div className="flex items-center gap-1 print:invisible">
            <button
              type="button"
              className="pr-0 btn-primary"
              onClick={handleAdd}
            >
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </div>
        <div className="w-full pt-3 pb-4">
          <NadaDepreciationWithAddList setItemEdit={setItemEdit} />
        </div>
        <Footer />
      </div>

      {store.isAdd && (
        <ModalAddNadaDepreciationWithAdd itemEdit={itemEdit} carId={carId} />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default NadaDepreciationWithAdd;
