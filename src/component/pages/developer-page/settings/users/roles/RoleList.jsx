import React from "react";
import { FaArchive, FaEdit, FaHistory, FaTrash } from "react-icons/fa";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../../helpers/functions-general";
import NoData from "../../../../../partials/NoData";
import ServerError from "../../../../../partials/ServerError";
import Status from "../../../../../partials/Status";
import TableLoading from "../../../../../partials/TableLoading";
import ModalArchive from "../../../../../partials/modals/ModalArchive";
import ModalDelete from "../../../../../partials/modals/ModalDelete";
import ModalRestore from "../../../../../partials/modals/ModalRestore";
import FetchingSpinner from "../../../../../partials/spinners/FetchingSpinner";
import TableSpinner from "../../../../../partials/spinners/TableSpinner";

const RoleList = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [dataItem, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);
  const [isTableScroll, setIsTableScroll] = React.useState(false);
  const scrollRef = React.useRef(null);
  let counter = 1;

  const {
    isLoading,
    isFetching,
    error,
    data: roles,
  } = useQueryData(
    `${apiVersion}/roles`, // endpoint
    "get", // method
    "roles" // key
  );

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.role_aid);
    setData(item);
    setDel(null);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.role_aid);
    setData(item);
    setDel(null);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.role_aid);
    setData(item);
    setDel(true);
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
                <th className="w-[25rem]">Description</th>
                <th>Status</th>
                <th colSpan={"100%"}></th>
              </tr>
            </thead>
            <tbody>
              {(isLoading || roles?.data.length === 0) && (
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

              {roles?.data.map((item, key) => (
                <tr key={key} className="relative group">
                  <td className="text-center">{counter++}.</td>
                  <td>{item.role_name}</td>
                  <td title={item.role_description}>{item.role_description}</td>
                  <td>
                    {item.role_is_active === 1 ? (
                      <Status text="Active" />
                    ) : (
                      <Status text="Inactive" />
                    )}
                  </td>
                  <td
                    colSpan={"100%"}
                    className="sticky opacity-100 group-hover:opacity-100 -right-3"
                  >
                    <div className="flex items-center gap-3">
                      {item.role_is_active === 1 ? (
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
                            data-tooltip="Archive"
                            onClick={() => handleArchive(item)}
                          >
                            <FaArchive />
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
            </tbody>
          </table>
        </div>
      </div>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/roles/active/${id}`}
          msg={"Are you sure you want to archive this role?"}
          item={dataItem.role_name}
          queryKey={"roles"}
          successMsg={"Successfully archived"}
        />
      )}

      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/roles/active/${id}`}
          msg={"Are you sure you want to restore this role?"}
          item={dataItem.role_name}
          queryKey={"roles"}
          successMsg={"Successfully restored"}
        />
      )}

      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/roles/${id}`}
          msg={"Are you sure you want to delete this role?"}
          item={dataItem.role_name}
          queryKey={"roles"}
          successMsg={"Successfully deleted"}
        />
      )}
    </>
  );
};

export default RoleList;
