import useQueryData from "@/component/custom-hooks/useQueryData";
import { apiVersion } from "@/component/helpers/functions-general";
import NoData from "@/component/partials/NoData";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
import React from "react";
import DetailsGraph from "./DetailsGraph";
import { handleClick, handleSearch } from "./functions-earning-details";

const DetailsList = () => {
  const [clientName, setClientName] = React.useState("");
  const [clientId, setClientId] = React.useState(0);
  const [client, setClient] = React.useState("");
  const [onSearchClient, setOnSearchClient] = React.useState(false);
  const [onFocusClient, setOnFocusClient] = React.useState(false);
  const [loadingClient, setLoadingClient] = React.useState(false);
  const refClient = React.useRef();

  const [clientCarName, setClientCarName] = React.useState("");
  const [clientCarId, setClientCarId] = React.useState(0);
  const [clientCar, setClientCar] = React.useState("");
  const [onSearchClientCar, setOnSearchClientCar] = React.useState(false);
  const [onFocusClientCar, setOnFocusClientCar] = React.useState(false);
  const [loadingClientCar, setLoadingClientCar] = React.useState(false);
  const refClientCar = React.useRef();

  const [dateFrom, setDateFrom] = React.useState("");
  const [dateTo, setDateTo] = React.useState("");

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

  const {
    isLoading: clientCarLoading,
    isFetching: clientCarFetching,
    data: clientCarData,
  } = useQueryData(
    `${apiVersion}/client-car/search`, // endpoint
    "post", // method
    "client-car-search", // key
    { searchValue: clientCar, isFilter: false, car_client_id: clientId },
    { searchValue: clientCar, isFilter: false, car_client_id: clientId }
  );

  const handleClickOutsideClient = (e) => {
    if (
      refClient.current !== undefined &&
      refClient.current !== null &&
      !refClient.current.contains(e.target)
    ) {
      setOnFocusClient(false);
    }
  };

  const handleClickOutsideClientCar = (e) => {
    if (
      refClientCar.current !== undefined &&
      refClientCar.current !== null &&
      !refClientCar.current.contains(e.target)
    ) {
      setOnFocusClientCar(false);
    }
  };

  const handleChangeFrom = (e) => {
    setDateFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    setDateTo(e.target.value);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideClient);
    return () =>
      document.removeEventListener("click", handleClickOutsideClient);
  }, []);

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutsideClientCar);
    return () =>
      document.removeEventListener("click", handleClickOutsideClientCar);
  }, []);

  return (
    <>
      <form className="relative rounded-md text-center z-0 overflow-visible flex items-center gap-4 flex-wrap w-full">
        <div className="relative max-w-[200px] w-full">
          <label htmlFor="to">Client</label>
          <input
            type="text"
            disabled={!onSearchClient && (clientLoading || clientFetching)}
            onChange={(e) =>
              handleSearch(
                e,
                setLoadingClient,
                setClientName,
                setClientId,
                setOnFocusClient,
                setClient,
                setOnSearchClient
              )
            }
            onFocus={() => setOnFocusClient(true)}
            ref={refClient}
            value={
              !onSearchClient && (clientLoading || clientFetching)
                ? "Loading..."
                : clientName
            }
            placeholder="Select Client"
            className="text-xs"
          />

          {onFocusClient && (
            <ul className="absolute z-50 h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
              {loadingClient || clientFetching ? (
                <FetchingSpinner />
              ) : clientData?.count > 0 ? (
                clientData?.data.map((item, key) => (
                  <button
                    type="button"
                    className="leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                    key={key}
                    onClick={() =>
                      handleClick(
                        setClientName,
                        setClientId,
                        `${item.client_fname} ${item.client_lname}`,
                        item.client_aid
                      )
                    }
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

        <div className="relative max-w-[200px] w-full">
          <label htmlFor="to">Car</label>
          <input
            type="text"
            disabled={
              !onSearchClientCar && (clientCarLoading || clientCarFetching)
            }
            onChange={(e) =>
              handleSearch(
                e,
                setLoadingClientCar,
                setClientCarName,
                setClientCarId,
                setOnFocusClientCar,
                setClientCar,
                setOnSearchClientCar
              )
            }
            onFocus={() => setOnFocusClientCar(true)}
            ref={refClientCar}
            value={
              !onSearchClientCar && (clientCarLoading || clientCarFetching)
                ? "Loading..."
                : clientCarName
            }
            placeholder="Select Car"
            className="text-xs"
          />

          {onFocusClientCar && (
            <ul className="absolute z-50 h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
              {loadingClientCar || clientCarFetching ? (
                <FetchingSpinner />
              ) : clientCarData?.count > 0 ? (
                clientCarData?.data.map((item, key) => (
                  <button
                    type="button"
                    className="leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                    key={key}
                    onClick={() =>
                      handleClick(
                        setClientCarName,
                        setClientCarId,
                        `${item.car_make_name} ${item.car_specs} ${item.car_year}`,
                        item.car_aid
                      )
                    }
                  >
                    {item.car_make_name} {item.car_specs} {item.car_year}
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

        <div className="relative max-w-[150px] w-full">
          <label htmlFor="from">From</label>
          <input
            type="date"
            onChange={(e) => handleChangeFrom(e)}
            value={dateFrom}
            className="text-xs"
          />
        </div>

        <div className="relative max-w-[150px] w-full">
          <label htmlFor="to">To</label>
          <input
            type="date"
            onChange={(e) => handleChangeTo(e)}
            value={dateTo}
            className="text-xs"
          />
        </div>

        <div className="relative max-w-[150px] w-full !h-full">
          <button type="submit" className="relative  btn-modal-submit">
            Filter
          </button>
        </div>
      </form>

      <div className="pt-10">
        <NoData />
        <p className="text-center">Please use the filter to see details</p>
      </div>

      <DetailsGraph />
    </>
  );
};

export default DetailsList;
