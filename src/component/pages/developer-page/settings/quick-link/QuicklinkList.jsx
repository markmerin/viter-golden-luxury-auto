import useQueryData from "@/component/custom-hooks/useQueryData";
import { apiVersion } from "@/component/helpers/functions-general";
import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import Status from "@/component/partials/Status";
import TableLoading from "@/component/partials/TableLoading";
import ModalArchive from "@/component/partials/modals/ModalArchive";
import ModalDelete from "@/component/partials/modals/ModalDelete";
import ModalRestore from "@/component/partials/modals/ModalRestore";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";
import { FaArchive, FaEdit, FaHistory, FaTrash } from "react-icons/fa";

const QuicklinkList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);
  const [dataItem, setData] = React.useState(null);

  const [isTableScroll, setIsTableScroll] = React.useState(false);

  let counter = 1;
  const scrollRef = React.useRef(null);

  const {
    isLoading,
    isFetching,
    error,
    data: quicklink,
  } = useQueryData(
    `${apiVersion}/quick-link`, // endpoint
    "get", // method
    "quicklink" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.quicklink_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.quicklink_aid);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.quicklink_aid);
    setData(item);
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
      <div className="relative z-0 overflow-auto text-center rounded-md">
        {(isFetching || isLoading) && <FetchingSpinner />}

        <div
          className="overflow-auto max-h-[70vh] "
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
        >
          <table className="overflow-auto">
            <thead className={`${isTableScroll && "relative"} z-50`}>
              <tr className="stick top-0 !border-0">
                <th className="w-[3rem] text-center">#</th>
                <th className="w-[12rem]">Name</th>
                <th className="w-[25rem]">Link</th>
                <th>Status</th>
                <th colSpan={"100%"}></th>
              </tr>
            </thead>
            <tbody>
              {(isLoading || quicklink?.data.length === 0) && (
                <tr className="text-center ">
                  <td colSpan="100%" className="p-10">
                    {isLoading ? (
                      <TableLoading count={20} cols={3} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}

              {error && (
                <tr className="text-center ">
                  <td colSpan="100%" className="p-10">
                    <ServerError />
                  </td>
                </tr>
              )}

              {quicklink?.data.map((item, key) => (
                <tr key={key} className="relative group">
                  <td className="text-center">{counter++}.</td>
                  <td>{item.quicklink_name}</td>
                  <td>
                    <a
                      href={`${item.quicklink_link}`}
                      className="truncate hover:underline w-[360px] block"
                      target="_blank"
                    >
                      {item.quicklink_link}
                    </a>
                  </td>
                  <td>
                    {item.quicklink_is_active === 1 ? (
                      <Status text="Active" />
                    ) : (
                      <Status text="Inactive" />
                    )}
                  </td>
                  <td
                    colSpan={"100%"}
                    className="sticky right-0 opacity-100 group-hover:opacity-100 sm:-right-3"
                  >
                    <div className="flex items-center gap-3 table-action">
                      {item.quicklink_is_active === 1 ? (
                        <div className="!absolute right-0 flex items-center bg-gray-50 h-full">
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
                            data-tooltip="Archive"
                            onClick={() => handleArchive(item)}
                          >
                            <FaArchive />
                          </button>
                        </div>
                      ) : (
                        <div className="!absolute right-0 flex items-center bg-gray-50 h-full">
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
            </tbody>
          </table>
        </div>
      </div>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/quick-link/active/${id}`}
          msg={"Are you sure you want to archive this record?"}
          successMsg={"Archived successfully."}
          queryKey={"quicklink"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/quick-link/active/${id}`}
          msg={"Are you sure you want to restore this record?"}
          successMsg={"Restored successfully."}
          queryKey={"quicklink"}
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/quick-link/${id}`}
          msg={"Are you sure you want to delete this record?"}
          successMsg={"Deleted successfully."}
          item={dataItem.quicklink_name}
          queryKey={"quicklink"}
        />
      )}
    </>
  );
};

export default QuicklinkList;
