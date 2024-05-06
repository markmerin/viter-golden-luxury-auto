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

const ModalAddCarDirectDelivery = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const carId = getUrlParam().get("carId");
  const [loading, setLoading] = React.useState(false);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();

  const [directDeliveryId, setDirectDeliveryId] = React.useState(
    itemEdit ? itemEdit.car_direct_delivery_id : ""
  );
  const [onFocusDirect, setOnFocusDirect] = React.useState(false);
  const [directValue, setDirectValue] = React.useState("");
  const [direct, setDirect] = React.useState("");
  const refDirect = React.useRef({ value: "" });

  const {
    isFetching: directDeliverySettingsIsFetching,
    data: directDeliverySettings,
  } = useQueryData(
    `${apiVersion}/direct-delivery/search-by-direct-delivery`, // api
    "post", // method
    "direct-delivery/search-by-direct-delivery", // key
    { searchValue: direct },
    { direct }
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/car-direct-delivery/${itemEdit.car_direct_delivery_aid}`
          : `${apiVersion}/car-direct-delivery`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["car-direct-delivery/read-by-date-and-year"],
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
    car_direct_delivery_car_id: carId,
    car_direct_delivery_date: itemEdit ? itemEdit.car_direct_delivery_date : "",
    car_direct_delivery_amount: itemEdit
      ? itemEdit.car_direct_delivery_amount
      : "",

    car_direct_delivery_date_old: itemEdit
      ? itemEdit.car_direct_delivery_date
      : "",
  };

  const yupSchema = Yup.object({
    car_direct_delivery_date: Yup.string().required("Required"),
    car_direct_delivery_amount: Yup.string()
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

  const handleSearchDirectDelivery = (e) => {
    setLoading(true);
    setDirectValue(e.target.value);
    setDirectDeliveryId(null);

    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setDirect(val);
        return;
      }

      setDirect(val);
      setLoading(false);
    }, 500);
  };

  const handleClickDirectDelivery = (item) => {
    refDirect.current.value = item.direct_delivery_name;
    setDirectValue(item.direct_delivery_name);
    setDirect(item.direct_delivery_name);
    setDirectDeliveryId(item.direct_delivery_aid);
    setOnFocusDirect(false);
  };

  const handleClickOutsideSearch = (e) => {
    if (
      !itemEdit &&
      refDirect.current !== undefined &&
      refDirect.current !== null &&
      !refDirect.current.contains(e.target)
    ) {
      setOnFocusDirect(false);
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
            {itemEdit ? "Update" : "Add"} Car Direct Delivery
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
              if (directDeliveryId === "") {
                dispatch(setError(true));
                dispatch(setMessage(`Direct delivery is required.`));
                return;
              }
              const data = {
                ...values,
                car_direct_delivery_id: directDeliveryId,
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
                        <div className="relative mb-6 mt-5">
                          <InputText
                            label="Direct Delivery"
                            type="text"
                            name="car_direct_delivery_id"
                            onChange={handleSearchDirectDelivery}
                            value={directValue}
                            onFocus={() => {
                              setOnFocusDirect(true);
                            }}
                            disabled={mutation.isLoading}
                            refVal={refDirect}
                          />
                          {onFocusDirect && (
                            <ul className="absolute z-[51] h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
                              {loading || directDeliverySettingsIsFetching ? (
                                <FetchingSpinner />
                              ) : directDeliverySettings?.count > 0 ? (
                                directDeliverySettings?.data.map(
                                  (item, key) => (
                                    <button
                                      type="button"
                                      className={`leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5 focus:bg-dark/5  duration-200`}
                                      key={key}
                                      onClick={() =>
                                        handleClickDirectDelivery(item)
                                      }
                                    >
                                      {item.direct_delivery_name}
                                    </button>
                                  )
                                )
                              ) : (
                                <li className=" p-2 w-full text-center bg-white focus:bg-gray-200 border-b border-white">
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
                            name="car_direct_delivery_date"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </>
                    )}
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Amount"
                        type="text"
                        name="car_direct_delivery_amount"
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

export default ModalAddCarDirectDelivery;
