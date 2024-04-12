import useQueryData from "@/component/custom-hooks/useQueryData";
import { apiVersion } from "@/component/helpers/functions-general";
import NoData from "@/component/partials/NoData";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
import React from "react";

const DetailsList = () => {
  const [clientName, setClientName] = React.useState("");
  const [clientId, setClientId] = React.useState(0);
  const [client, setClient] = React.useState("");
  const [onSearch, setOnSearch] = React.useState(false);
  const [onFocus, setOnFocus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const refClient = React.useRef();

  const {
    isLoading: clientLoading,
    isFetching: clientFetching,
    data: clientData,
  } = useQueryData(
    `${apiVersion}/client/search`, // endpoint
    "post", // method
    "client-search", // key
    { searchValue: client, isFilter: false },
    { searchValue: client, isFilter: false }
  );

  const handleChangeBranch = (e) => {
    setLoading(true);
    setClientName(e.target.value);
    setClientId(0);
    setOnFocus(true);

    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setClient(val);
        return;
      }

      setClient(val);
      setOnSearch(true);
      setLoading(false);
    }, 400);
  };

  const handleClickBranch = async (item) => {
    setClientName(item.branch_code_name);
    setClientId(item.branch_code_aid);
  };

  const handleClickOutside = (e) => {
    if (
      refClient.current !== undefined &&
      refClient.current !== null &&
      !refClient.current.contains(e.target)
    ) {
      setOnFocus(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative rounded-md text-center z-0 overflow-visible">
        <div className="relative max-w-[250px]">
          <label htmlFor="to">Client</label>
          <input
            type="text"
            disabled={!onSearch && (clientLoading || clientFetching)}
            onChange={(e) => handleChangeBranch(e)}
            onFocus={() => setOnFocus(true)}
            ref={refClient}
            value={
              !onSearch && (clientLoading || clientFetching)
                ? "Loading..."
                : clientName
            }
            placeholder="Select Branch"
            className="text-xs"
          />

          {onFocus && (
            <ul className="absolute z-50 h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
              {loading || clientFetching ? (
                <FetchingSpinner />
              ) : clientData?.count > 0 ? (
                clientData?.data.map((item, key) => (
                  <button
                    type="button"
                    className="leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                    key={key}
                    onClick={() => handleClickBranch(item)}
                  >
                    {item.client_fname} {item.client_lname}
                  </button>
                ))
              ) : (
                <li className=" p-2 w-full text-center bg-white focus:bg-gray-200 border-b border-white">
                  <NoData />
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsList;
