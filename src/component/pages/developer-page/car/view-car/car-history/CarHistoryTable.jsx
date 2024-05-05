import NoData from "@/component/partials/NoData";
import ServerError from "@/component/partials/ServerError";
import TableLoading from "@/component/partials/TableLoading";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import React from "react";
import { FaArchive, FaEdit, FaHistory, FaTrash } from "react-icons/fa";
import ModalEditHistory from "./ModalEditCarHistory";
import { StoreContext } from "@/store/StoreContext";
import { setIsAdd } from "@/store/StoreAction";

const CarHistoryTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <div className="flex flex-col justify-between gap-3 pb-2 md:flex-row">
        <div className="md:flex grid grid-cols-[1fr_3.1rem] items-center gap-2 w-full xl:w-1/2">
          <div className="flex items-center gap-2">
            <div className="relative w-28 ">
              <label>Filter Year</label>
              <select
                name="status"
                // value={clientStatus}
                // onChange={(e) => handleChangeClientStatus(e)}
                // disabled={isFetching || status === "pending"}
                className="h-[35px] py-0"
              >
                <option value="all">2023</option>
                <option value="1">2024</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 overflow-auto rounded-md">
        {/* {isFetching && !isFetchingNextPage && status !== "pending" && ( */}
        {/* <FetchingSpinner /> */}
        {/* )} */}
        <div
          className="overflow-auto max-h-[70vh] "
          //   ref={scrollRef}
          //   onScroll={(e) => handleScroll(e)}
        >
          <table className="overflow-auto">
            <thead className={`relative   `}>
              <tr className="">
                <th className="w-[12rem] pl-3">History of the Cars</th>
                <th>Jan - 2023</th>
                <th>Feb - 2023</th>
                <th>Mar - 2023</th>
                <th>Apr - 2023</th>
                <th>May - 2023</th>
                <th>Jun - 2023</th>
                <th>Jul - 2023</th>
                <th>Aug - 2023</th>
                <th>Sep - 2023</th>
                <th>Oct - 2023</th>
                <th>Nov - 2023</th>
                <th>Dec - 2023</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {(status === "pending" || result?.pages[0].data.length === 0) && ( */}
              <tr>
                <td colSpan="100%" className="p-10">
                  {status === "pending" ? (
                    <TableLoading count={20} cols={3} />
                  ) : (
                    <NoData />
                  )}
                </td>
              </tr>
              {/* )}
              {error && ( */}
              <tr>
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
              {/* )}

              {result?.pages.map((page, key) => (
                <React.Fragment key={key}>
                  {page.data.map((item, key) => {
                    return ( */}
              <tr
                // key={key}
                className="relative cursor-pointer group "
              >
                <td className="">Days Rented</td>
                <td className="">100</td>
                <td className="">100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td className="sticky right-0 opacity-100 group-hover:opacity-100 sm:-right-3">
                  <div className="flex items-center gap-3 table-action">
                    <div className="!absolute right-0 flex items-center bg-gray-50 h-full">
                      <button
                        type="button"
                        className="btn-action-table tooltip-action-table after::z-[20]"
                        data-tooltip="Edit"
                        onClick={() => dispatch(setIsAdd(true))}
                      >
                        <FaEdit className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              {/* );
                  })}
                </React.Fragment>
              ))} */}
            </tbody>
          </table>

          <ul className="flex gap-10 mt-8 ">
            <li className="font-bold">Available For Rent - Current</li>
            <li className="font-bold">2023</li>
            <li className="font-bold">2024</li>
          </ul>

          <ul className="flex gap-10">
            <li>Available For Rent - Current</li>
            <li>10.43</li>
            <li>21.17</li>
          </ul>
        </div>
      </div>
      {store.isAdd && <ModalEditHistory />}
    </>
  );
};

export default CarHistoryTable;
