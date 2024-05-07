import useQueryData from "@/component/custom-hooks/useQueryData";
import {
  apiVersion,
  getUrlParam,
  getUserType,
  getYear,
} from "@/component/helpers/functions-general";
import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import TableLoading from "@/component/partials/TableLoading";
import ModalArchive from "@/component/partials/modals/ModalArchive";
import ModalDelete from "@/component/partials/modals/ModalDelete";
import ModalRestore from "@/component/partials/modals/ModalRestore";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import { setIsAdd } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { useInView } from "react-intersection-observer";
import CarHistoryReadAndUpdateAction from "./CarHistoryReadAndUpdateAction";
// import CarProfitReadAndUpdateAction from "./CarProfitReadAndUpdateAction";

const CarHistoryList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const carId = getUrlParam().get("carId");
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [isViewImage, setIsViewImage] = React.useState(false);
  const [clientStatus, setClientStatus] = React.useState("all");
  const [isTableScroll, setIsTableScroll] = React.useState(false);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const scrollRef = React.useRef(null);
  // const [itemEdit, setItemEdit] = React.useState(null);
  const link = getUserType();

  let counter = 1;

  const {
    isLoading: historySettingsIsLoading,
    isFetching: historySettingsIsFetching,
    error: historySettingsError,
    data: historySettings,
  } = useQueryData(
    `${apiVersion}/history`, // api
    "get", // method
    "history" // key
  );

  const { isFetching: carHistoryFetching, data: carHistory } = useQueryData(
    `${apiVersion}/car-history/read-by-date-and-year`, // api
    "post", // method
    "car-history/read-by-date-and-year", // key
    {
      car_history_car_id: carId,
      car_history_date: year,
    }, // fetch data
    { year }
  );

  const handleEdit = (item) => {
    setItemEdit(item);
    dispatch(setIsAdd(true));
    setId(item.car_profit_and_loss_aid);
  };

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop === 0) {
      setIsTableScroll(false);
    }
    if (e.target.scrollTop > 0) {
      setIsTableScroll(true);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-3 pb-2 md:flex-row">
        <div className="md:flex grid grid-cols-[1fr_3.1rem] items-center gap-2 w-full xl:w-1/2">
          <div className="flex items-center gap-2">
            <div className="relative w-28 ">
              <label>Year</label>
              <select
                name="Year"
                value={year}
                onChange={(e) => handleChangeYear(e)}
                className="h-[35px] py-0"
              >
                <optgroup label="Select a year">
                  {getYear(10).map((item, key) => {
                    return (
                      <option key={key} value={item.year}>
                        {item.year}
                      </option>
                    );
                  })}
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-80"></div>
      </div>
      <div className="relative z-0 overflow-auto text-center rounded-md">
        {(historySettingsIsFetching || carHistoryFetching) && (
          <FetchingSpinner />
        )}
        <div
          className="overflow-auto max-h-[70vh]"
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
        >
          <table className="overflow-auto">
            <thead className={`${isTableScroll && "relative "} z-50 `}>
              <tr className="sticky top-0 !border-0">
                <th className="text-center sticky left-0 min-w-[2rem] max-w-[2rem]">
                  #
                </th>
                <th className="sticky left-[2rem] min-w-[11rem]">History</th>
                <th className="text-right min-w-[5rem]">Jan</th>
                <th className="text-right min-w-[5rem]">Feb</th>
                <th className="text-right min-w-[5rem]">Mar</th>
                <th className="text-right min-w-[5rem]">Apr</th>
                <th className="text-right min-w-[5rem]">May</th>
                <th className="text-right min-w-[5rem]">Jun</th>
                <th className="text-right min-w-[5rem]">Jul</th>
                <th className="text-right min-w-[5rem]">Aug</th>
                <th className="text-right min-w-[5rem]">Sep</th>
                <th className="text-right min-w-[5rem]">Oct</th>
                <th className="text-right min-w-[5rem]">Nov</th>
                <th className="text-right min-w-[5rem]">Dec</th>
                <th className="text-right min-w-[5rem]">Total</th>
                <th colSpan={"100%"}></th>
              </tr>
            </thead>
            <tbody>
              {(historySettingsIsLoading || historySettings?.count === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {historySettingsIsLoading ? (
                      <TableLoading count={20} cols={3} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}
              {historySettingsError && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>
              )}

              {historySettings?.count > 0 &&
                historySettings?.data.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td className="sticky left-0 text-center ">
                        {counter++}.
                      </td>
                      <td className="sticky left-[2rem] !pl-0">
                        {item.history_name}
                      </td>
                      <CarHistoryReadAndUpdateAction
                        item={item}
                        carHistory={carHistory}
                        handleEdit={handleEdit}
                      />
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div className="flex flex-col items-center justify-center pb-10 loadmore"></div>
        </div>
      </div>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/car-history/active/${id}`}
          msg={"Are you sure you want to archive this record?"}
          successMsg={"Archived successfully."}
          queryKey={"carProfitAndLoss"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/car-history/active/${id}`}
          msg={"Are you sure you want to restore this record?"}
          successMsg={"Restored successfully."}
          queryKey={"carProfitAndLoss"}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/car-history/${id}`}
          msg={"Are you sure you want to delete this record?"}
          successMsg={"Deleted successfully."}
          item={dataItem.car_name}
          queryKey={"carProfitAndLoss"}
        />
      )}
    </>
  );
};

export default CarHistoryList;
