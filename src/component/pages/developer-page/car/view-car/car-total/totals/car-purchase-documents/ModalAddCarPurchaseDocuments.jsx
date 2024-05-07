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
import { setError, setIsAdd, setMessage } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
const ModalAddCarPurchaseDocuments = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const carId = getUrlParam().get("carId");
  const [loading, setLoading] = React.useState(false);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();

  const [purchaseDocumentId, setPurchaseDocumentId] = React.useState(
    itemEdit ? itemEdit.car_purchase_document_id : ""
  );
  const [onFocusSubscriber, setOnFocusPurchaseDocument] = React.useState(false);
  const [purchaseDocumentValue, setPurchaseDocumentValue] = React.useState("");
  const [purchaseDocument, setPurchaseDocument] = React.useState("");
  const refPurchaseDocument = React.useRef({ value: "" });

  const {
    isFetching: purchaseDocumentSettingsIsFetching,
    data: purchaseDocumentSettings,
  } = useQueryData(
    `${apiVersion}/purchase-documents/search-by-purchase-document`, // api
    "post", // method
    "purchasedoc", // key
    { searchValue: purchaseDocument },
    { purchaseDocument }
  );
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/car-purchase-documents/${
              itemEdit.car_purchase - document_aid
            }`
          : `${apiVersion}/car-purchase-documents`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["carpurchasedocument"] });
      queryClient.invalidateQueries({
        queryKey: ["car-purchase-document/read-by-date-and-year"],
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
    car_purchase_document_car_id: carId,
    car_purchase_document_id: itemEdit ? itemEdit.car_purchase_document_id : "",
    car_purchase_document_amount: itemEdit
      ? itemEdit.car_purchase_document_amount
      : "",
  };
  const yupSchema = Yup.object({});

  const handleClose = () => {
    // set animation
    setAnimate("translate-x-full");
    // clear the modal
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  handleEscape(() => handleClose());

  const handleSearchPurchaseDocument = (e) => {
    setLoading(true);
    setPurchaseDocumentValue(e.target.value);
    setPurchaseDocumentId(null);

    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setPurchaseDocument(val);
        return;
      }

      setPurchaseDocument(val);
      setLoading(false);
    }, 500);
  };

  const handleClickPurchaseDocument = (item) => {
    refPurchaseDocument.current.value = item.purchase_document_name;
    setPurchaseDocumentValue(item.purchase_document_name);
    setPurchaseDocument(item.purchase_document_name);
    setPurchaseDocumentId(item.purchase_document_aid);
    setOnFocusPurchaseDocument(false);
  };

  const handleClickOutsideSearch = (e) => {
    if (
      !itemEdit &&
      refPurchaseDocument.current !== undefined &&
      refPurchaseDocument.current !== null &&
      !refPurchaseDocument.current.contains(e.target)
    ) {
      setOnFocusPurchaseDocument(false);
    }
  };

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      {" "}
      <ModalWrapperSide
        handleClose={mutation.isLoading ? function () {} : handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
      >
        <div className="relative mb-4 modal_header">
          <h3 className="text-sm text-black">
            {itemEdit ? "Update" : "Add"} Car Purchase Documents
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
              if (purchaseDocumentId === "") {
                dispatch(setError(true));
                dispatch(setMessage(`Purchase Document is required.`));
                return;
              }
              const data = {
                ...values,
                car_purchase_document_id: purchaseDocumentId,
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
                            label="Purchase Document"
                            type="text"
                            name="car_purchase_document_id"
                            onChange={handleSearchPurchaseDocument}
                            value={purchaseDocumentValue}
                            onFocus={() => {
                              setOnFocusPurchaseDocument(true);
                            }}
                            disabled={mutation.isLoading}
                            refVal={refPurchaseDocument}
                          />
                          {onFocusSubscriber && (
                            <ul className="absolute z-[51] h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
                              {loading || purchaseDocumentSettingsIsFetching ? (
                                <FetchingSpinner />
                              ) : purchaseDocumentSettings?.count > 0 ? (
                                purchaseDocumentSettings?.data.map(
                                  (item, key) => (
                                    <button
                                      type="button"
                                      className={`leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5 focus:bg-dark/5  duration-200`}
                                      key={key}
                                      onClick={() =>
                                        handleClickPurchaseDocument(item)
                                      }
                                    >
                                      {item.purchase_document_name}
                                    </button>
                                  )
                                )
                              ) : (
                                <li className="w-full p-2 text-center bg-white border-b border-white focus:bg-gray-200">
                                  <NoData />
                                </li>
                              )}
                            </ul>
                          )}
                        </div>
                      </>
                    )}
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Amount"
                        type="text"
                        name="car_purchase_document_amount"
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

export default ModalAddCarPurchaseDocuments;
