import { apiVersion, formatDate } from "@/component/helpers/functions-general";
import { queryDataInfinite } from "@/component/helpers/queryDataInfinite";
import Loadmore from "@/component/partials/Loadmore";
import NoData from "@/component/partials/NoData";
import SearchBarWithFilterStatus from "@/component/partials/SearchBarWithFilterStatus";
import ServerError from "@/component/partials/ServerError";
import Status from "@/component/partials/Status";
import TableLoading from "@/component/partials/TableLoading";
import ModalArchive from "@/component/partials/modals/ModalArchive";
import ModalDelete from "@/component/partials/modals/ModalDelete";
import ModalRestore from "@/component/partials/modals/ModalRestore";
import ButtonSpinner from "@/component/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setIsSearch,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaArchive,
  FaEdit,
  FaHistory,
  FaImage,
  FaListUl,
  FaTrash,
} from "react-icons/fa";
import { MdOutlineFormatListNumbered } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const ClientCarList = ({
  isLoadingClient,
  isFetchingClient,
  clientId,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);
  const [onSearch, setOnSearch] = React.useState(false);
  const [isFilter, setIsFilter] = React.useState(false);
  const [clientStatus, setClientStatus] = React.useState("all");
  const [isTableScroll, setIsTableScroll] = React.useState(false);
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView();
  const scrollRef = React.useRef(null);

  let counter = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["car", search.current.value, store.isSearch, clientStatus],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `/${apiVersion}/car/search`, // search endpoint
        `/${apiVersion}/car/page/${pageParam}/${clientId}`, // list endpoint
        store.isSearch, // search boolean
        {
          searchValue: search?.current?.value,
          isFilter,
          car_is_active: clientStatus,
          car_client_id: clientId,
        }
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.car_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.car_aid);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.car_aid);
    setData(item);
  };

  const handleChangeClientStatus = (e) => {
    setClientStatus(e.target.value);
    setIsFilter(false);
    dispatch(setIsSearch(false));
    search.current.value = "";
    if (e.target.value !== "all") {
      setIsFilter(true);
      dispatch(setIsSearch(true));
    }
    setPage(1);
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
              <label>Filter</label>
              <select
                name="status"
                value={clientStatus}
                onChange={(e) => handleChangeClientStatus(e)}
                disabled={isFetching || status === "pending"}
                className="h-[35px] py-0"
              >
                <option value="all">All</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
          </div>

          <div className="relative flex items-center gap-1 ml-2 text-sm text-gray-600">
            <MdOutlineFormatListNumbered />
            <span>
              {isFetching || status === "pending" ? (
                <ButtonSpinner />
              ) : store.isSearch || isFilter ? (
                result?.pages[0].count
              ) : (
                result?.pages[0].total
              )}
            </span>
          </div>
        </div>

        <div className="w-full md:max-w-80">
          <SearchBarWithFilterStatus
            search={search}
            dispatch={dispatch}
            store={store}
            result={result?.pages}
            isFetching={isFetching}
            setOnSearch={setOnSearch}
            onSearch={onSearch}
            isFilter={isFilter}
          />
        </div>
      </div>
      <div className="relative rounded-md text-center overflow-auto z-0">
        {(isFetching || isFetchingClient) &&
          !isFetchingNextPage &&
          status !== "pending" && <FetchingSpinner />}
        <div
          className="overflow-auto max-h-[70vh] "
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
        >
          <table className="overflow-auto">
            <thead className={`${isTableScroll && "relative "} z-50 `}>
              <tr>
                <th className="w-[2rem] text-center">#</th>
                <th className="w-[4.5rem] md:w-[6rem]">Status</th>
                <th>Vehicle Make</th>
                <th>Vehicle Year</th>
                <th>Model / Specs</th>
                <th>VIN #</th>
                <th>Licence / Plate Number</th>
                <th>Licence / Registration Date</th>
                <th>Gas</th>
                <th>Tire Size</th>
                <th>Oil Type</th>
                <th colSpan={"100%"}></th>
              </tr>
            </thead>
            <tbody>
              {(status === "pending" ||
                isLoadingClient ||
                result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status === "pending" || isLoadingClient ? (
                      <TableLoading count={20} cols={3} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.pages.map((page, key) => (
                <React.Fragment key={key}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="relative group">
                        <td className="text-center">{counter++}.</td>
                        <td className="pl-3 sm:hidden">
                          {item.car_is_active === 1 ? (
                            <span className="block w-3 h-3 bg-green-700 rounded-full"></span>
                          ) : (
                            <span className="block w-3 h-3 bg-gray-400 rounded-full"></span>
                          )}
                        </td>
                        <td className="hidden sm:table-cell">
                          {item.car_is_active === 1 ? (
                            <Status text="Active" />
                          ) : (
                            <Status text="Inactive" />
                          )}
                        </td>
                        <td>{item.car_make_name}</td>
                        <td>{item.car_year}</td>
                        <td>{item.car_specs}</td>
                        <td>{item.car_vin_number}</td>
                        <td>{item.car_plate_number}</td>
                        <td>
                          {item.car_registration_date === ""
                            ? "Unspecified"
                            : formatDate(item.car_registration_date)}
                        </td>
                        <td>{item.car_gas}</td>
                        <td>{item.car_tire_size}</td>
                        <td>{item.car_oil_type}</td>

                        <td
                          colSpan={"100%"}
                          className="opacity-100 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-3 ml-4">
                            {item.car_is_active === 1 ? (
                              <div className="flex items-center ">
                                <button
                                  type="button"
                                  className="btn-action-table tooltip-action-table"
                                  data-tooltip="View Image"
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaImage className="w-3 h-3" />
                                </button>

                                <button
                                  type="button"
                                  className="btn-action-table tooltip-action-table"
                                  data-tooltip="Edit"
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit className="w-3 h-3" />
                                </button>

                                <button
                                  type="button"
                                  className="btn-action-table tooltip-action-table"
                                  data-tooltip="Archive"
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive className="w-3 h-3" />
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center ">
                                <button
                                  type="button"
                                  className="btn-action-table tooltip-action-table"
                                  data-tooltip="Restore"
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaHistory className="w-3 h-3" />
                                </button>
                                <button
                                  type="button"
                                  className="btn-action-table tooltip-action-table"
                                  data-tooltip="Delete"
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-10 loadmore">
        <Loadmore
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          result={result?.pages[0]}
          setPage={setPage}
          page={page}
          refView={ref}
          store={store}
        />
      </div>
      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/car/active/${id}`}
          msg={"Are you sure you want to archive this record?"}
          successMsg={"Archived successfully."}
          queryKey={"car"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/car/active/${id}`}
          msg={"Are you sure you want to restore this record?"}
          successMsg={"Restored successfully."}
          queryKey={"car"}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/car/${id}`}
          msg={"Are you sure you want to delete this record?"}
          successMsg={"Deleted successfully."}
          item={dataItem.car_name}
          queryKey={"car"}
        />
      )}
    </>
  );
};

export default ClientCarList;
