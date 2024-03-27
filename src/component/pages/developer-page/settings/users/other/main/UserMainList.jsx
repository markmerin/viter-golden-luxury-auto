import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import {
  FaEdit,
  FaHistory,
  FaKey,
  FaTrash,
  FaUserAltSlash,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import {
  setError,
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
  setMessage,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { apiVersion } from "../../../../../../helpers/functions-general";
import { queryDataInfinite } from "../../../../../../helpers/queryDataInfinite";
import Loadmore from "../../../../../../partials/Loadmore";
import NoData from "../../../../../../partials/NoData";
import SearchBar from "../../../../../../partials/SearchBar";
import ServerError from "../../../../../../partials/ServerError";
import Status from "../../../../../../partials/Status";
import TableLoading from "../../../../../../partials/TableLoading";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";
import ModalRestore from "../../../../../../partials/modals/ModalRestore";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";
import ModalReset from "../../ModalReset";
import ModalSuspend from "./ModalSuspend";

const UserMainList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isReset, setReset] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const search = React.useRef(null);
  const { ref, inView } = useInView();
  const [isTableScroll, setIsTableScroll] = React.useState(false);
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
    queryKey: ["main", onSearch, store.isSearch],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        `${apiVersion}/user-main/search`, // search endpoint
        `${apiVersion}/user-main/page/${pageParam}`, // list endpoint
        store.isSearch, // search boolean
        { searchValue: search.current.value, id: "" } // search value
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  const handleEdit = (item) => {
    item.role_is_active === 0 && dispatch(setError(true));
    dispatch(
      setMessage(
        `${item.role_name} role is inactive. Please choose another role.`
      )
    );
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleSuspend = (item) => {
    dispatch(setIsArchive(true));
    setId(item.user_other_aid);
    setData(item);
    setReset(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.user_other_aid);
    setData(item);
    setReset(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.user_other_aid);
    setData(item);

    setReset(null);
  };

  const handleReset = (item) => {
    setId(item.user_other_aid);
    setReset(true);
    setData(item);
  };

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

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
      <SearchBar
        search={search}
        dispatch={dispatch}
        store={store}
        result={result?.pages}
        isFetching={isFetching}
        setOnSearch={setOnSearch}
        onSearch={onSearch}
      />
      <div className="relative rounded-md text-center overflow-auto z-0">
        {isFetching && !isFetchingNextPage && status !== "pending" && (
          <FetchingSpinner />
        )}
        <div
          className="overflow-auto max-h-[70vh] "
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
        >
          <table className="overflow-auto">
            <thead className={`${isTableScroll && "relative "} z-50 `}>
              <tr className="sticky top-0 !border-0">
                <th className="w-[3rem] text-center">#</th>
                <th className="w-[12rem]">Name</th>
                <th className="w-[22rem]">Email</th>
                <th className="w-[10rem]">Role</th>
                <th>Status</th>
                <th colSpan={"100%"}></th>
              </tr>
            </thead>
            <tbody>
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr className="text-center hover:bg-transparent ">
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? (
                      <TableLoading count={20} cols={3} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr className="text-center hover:bg-transparent ">
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.pages.map((page, key) => (
                <React.Fragment key={key}>
                  {page.data.map((item, key) => (
                    <tr
                      key={key}
                      className={
                        item.user_other_email ===
                        store.credentials.data.user_other_email
                          ? "group relative bg-primary/10"
                          : "group relative"
                      }
                    >
                      <td className="text-center">{counter++}.</td>
                      <td>
                        {item.user_other_fname} {item.user_other_lname}
                      </td>
                      <td>{item.user_other_email}</td>
                      <td>{item.role_name}</td>
                      <td>
                        {item.user_other_is_active === 1 ? (
                          <Status text="Active" />
                        ) : (
                          <Status text="Inactive" />
                        )}
                      </td>
                      <td
                        colSpan={"100%"}
                        className="opacity-100 group-hover:opacity-100 sticky -right-3 "
                      >
                        <div className="flex items-center gap-3">
                          {item.user_other_is_active === 1 ? (
                            <div className="!absolute right-3 flex items-center bg-gray-50 h-full">
                              <button
                                type="button"
                                className="btn-action-table tooltip-action-table"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                type="button"
                                className="btn-action-table tooltip-action-table"
                                data-tooltip="Suspend"
                                onClick={() => handleSuspend(item)}
                              >
                                <FaUserAltSlash />
                              </button>
                              <button
                                type="button"
                                className="btn-action-table tooltip-action-table"
                                data-tooltip="Reset"
                                onClick={() => handleReset(item)}
                              >
                                <FaKey />
                              </button>
                            </div>
                          ) : (
                            <div className="!absolute right-3 flex items-center bg-gray-50 h-full">
                              <button
                                type="button"
                                className="btn-action-table tooltip-action-table"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <FaHistory />
                              </button>
                              <button
                                type="button"
                                className="btn-action-table tooltip-action-table"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <FaTrash />
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <Loadmore
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          result={result?.pages[0]}
          setPage={setPage}
          page={page}
          refView={ref}
        />
      </div>

      {store.isArchive && (
        <ModalSuspend
          mysqlApiArchive={`${apiVersion}/user-main/active/${id}`}
          msg={"Are you sure you want to suspend this user?"}
          item={dataItem.user_other_email}
          queryKey={"main"}
        />
      )}

      {isReset && (
        <ModalReset
          setReset={setReset}
          mysqlApiReset={`${apiVersion}/user-other/reset`}
          msg={"Are you sure you want to reset the password of this user?"}
          item={dataItem.user_other_email}
          queryKey={"main"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/user-main/active/${id}`}
          msg={"Are you sure you want to restore this user?"}
          item={dataItem.user_other_email}
          queryKey={"main"}
          successMsg={"Successfully restored"}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/user-main/${id}`}
          msg={"Are you sure you want to delete this user?"}
          item={dataItem.user_other_email}
          queryKey={"main"}
          successMsg={"Successfully deleted"}
        />
      )}
    </>
  );
};

export default UserMainList;
