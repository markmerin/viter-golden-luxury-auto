import useQueryData from "@/component/custom-hooks/useQueryData";
import { InputText } from "@/component/helpers/FormInputs";
import {
  apiVersion,
  getUrlParam,
  handleEscape,
} from "@/component/helpers/functions-general";
import { queryData } from "@/component/helpers/queryData";
import NoData from "@/component/partials/NoData";
import ModalWrapperSide from "@/component/partials/modals/ModalWrapperSide";
import ButtonSpinner from "@/component/partials/spinners/ButtonSpinner";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";

const ModalAddCarHistory = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const carId = getUrlParam().get("carId");
  const [loading, setLoading] = React.useState(false);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();

  const [historyId, setHistoryId] = React.useState(
    itemEdit ? itemEdit.car_history_id : ""
  );
  const [onFocusSubscriber, setOnFocusHistory] = React.useState(false);
  const [historyValue, setHistoryValue] = React.useState("");
  const [history, setHistory] = React.useState("");
  const refHistory = React.useRef({ value: "" });

  const { isFetching: historySettingsIsFetching, data: historySettings } =
    useQueryData(
      `${apiVersion}/history/search-by-history`, // api
      "post", // method
      "history/search-by-history", // key
      { searchValue: history },
      { history }
    );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/car-history/${itemEdit.car_history_aid}`
          : `${apiVersion}/car-history`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["carhistory"] });
      queryClient.invalidateQueries({
        queryKey: ["car-history/read-by-date-and-year"],
      });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? `updated` : `added`}.`));
      }
    },
  });

  const initVal = {
    car_history_car_id: carId,
    car_history_date: itemEdit ? itemEdit.car_history_date : "",
    car_history_amount: itemEdit ? itemEdit.car_history_amount : "",
    car_history_date_old: itemEdit ? itemEdit.car_history_date : "",
  };

  const yupSchema = Yup.object({
    car_history_date: Yup.string().required("Required"),
    car_history_amount: Yup.string()
      .required("Required")
      .matches("^[.0-9]*$", "Please enter a valid number."),
  });

  const handleClose = () => {
    // set animation
    setAnimate("translate-x-full");
    // clear the modal
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  handleEscape(() => handleClose());

  const handleSearchHistory = (e) => {
    setLoading(true);
    setHistoryValue(e.target.value);
    setHistoryId(null);

    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setHistory(val);
        return;
      }

      setHistory(val);
      setLoading(false);
    }, 500);
  };

  const handleClickHistory = (item) => {
    refHistory.current.value = item.history_name;
    setHistoryValue(item.history_name);
    setHistory(item.history_name);
    setHistoryId(item.history_aid);
    setOnFocusHistory(false);
  };

  const handleClickOutsideSearch = (e) => {
    if (
      !itemEdit &&
      refHistory.current !== undefined &&
      refHistory.current !== null &&
      !refHistory.current.contains(e.target)
    ) {
      setOnFocusHistory(false);
    }
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapperSide
        handleClose={mutation.isLoading ? function () {} : handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
      >
        <div className="relative mb-4 modal_header">
          <h3 className="text-sm text-black">
            {itemEdit ? "Update" : "Add"} Car History
          </h3>
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-lg text-gray-400" />
          </button>
        </div>
        <div className="modal_body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (historyId === "") {
                dispatch(setError(true));
                dispatch(setMessage(`History is required.`));
                return;
              }
              const data = {
                ...values,
                car_history_id: historyId,
              };
              // console.log(data);
              // mutate data
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div
                    className="modal-overflow"
                    onClick={handleClickOutsideSearch}
                  >
                    {!itemEdit && (
                      <>
                        <div className="relative mt-5 mb-6">
                          <InputText
                            label="History"
                            type="text"
                            name="car_history_id"
                            onChange={handleSearchHistory}
                            value={historyValue}
                            onFocus={() => {
                              setOnFocusHistory(true);
                            }}
                            disabled={mutation.isLoading}
                            refVal={refHistory}
                          />
                          {onFocusSubscriber && (
                            <ul className="absolute z-[51] h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
                              {loading || historySettingsIsFetching ? (
                                <FetchingSpinner />
                              ) : historySettings?.count > 0 ? (
                                historySettings?.data.map((item, key) => (
                                  <button
                                    type="button"
                                    className={`leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5 focus:bg-dark/5  duration-200`}
                                    key={key}
                                    onClick={() => handleClickHistory(item)}
                                  >
                                    {item.history_name}
                                  </button>
                                ))
                              ) : (
                                <li className="w-full p-2 text-center bg-white border-b border-white focus:bg-gray-200">
                                  <NoData />
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                        <div className="relative mt-5 mb-6">
                          <InputText
                            label="Month And Year"
                            type="month"
                            name="car_history_date"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </>
                    )}
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Amount"
                        type="text"
                        name="car_history_amount"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 flex justify-end w-full gap-2 px-6 mt-6 mb-4 modal__action">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="relative btn-modal-submit"
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner />
                        ) : itemEdit ? (
                          "Save"
                        ) : (
                          "Add"
                        )}
                      </button>
                      <button
                        type="reset"
                        className="btn-modal-cancel"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddCarHistory;
