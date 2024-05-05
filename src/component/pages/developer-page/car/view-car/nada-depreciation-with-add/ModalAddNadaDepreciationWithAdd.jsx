import useQueryData from "@/component/custom-hooks/useQueryData";
import { InputSelect, InputText } from "@/component/helpers/FormInputs";
import {
  apiVersion,
  getMonthAnYearNow,
  handleEscape,
} from "@/component/helpers/functions-general";
import { queryData } from "@/component/helpers/queryData";
import ModalWrapperSide from "@/component/partials/modals/ModalWrapperSide";
import ButtonSpinner from "@/component/partials/spinners/ButtonSpinner";
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

const ModalAddNadaDepreciationWithAdd = ({ itemEdit, carId }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [animate, setAnimate] = React.useState("translate-x-full");

  const {
    isLoading,
    isFetching,
    error,
    data: currentCostWithAdd,
  } = useQueryData(
    `${apiVersion}/current-cost-with-add`, // endpoint
    "get", // method
    "current-cost-with-add" // key
  );

  const initVal = {
    nada_depreciation_with_add_aid: itemEdit
      ? itemEdit.nada_depreciation_with_add_aid
      : "",
    nada_depreciation_with_add_car_id: itemEdit
      ? itemEdit.nada_depreciation_with_add_car_id
      : carId,
    nada_depreciation_with_add_id: itemEdit
      ? itemEdit.nada_depreciation_with_add_id
      : "",
    nada_depreciation_with_add_date: itemEdit
      ? itemEdit.nada_depreciation_with_add_date
      : getMonthAnYearNow(),
    nada_depreciation_with_add_amount: itemEdit
      ? itemEdit.nada_depreciation_with_add_amount
      : "",
    nada_depreciation_with_add_name_old: itemEdit
      ? itemEdit.nada_depreciation_with_add_name
      : "",
  };

  const yupSchema = Yup.object({
    nada_depreciation_with_add_id: Yup.string().required("Required"),
    nada_depreciation_with_add_date: Yup.string().required("Required"),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/nada-depreciation-with-add/${itemEdit.nada_depreciation_with_add_aid}`
          : `${apiVersion}/nada-depreciation-with-add`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["nada-depreciation-with-add"],
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

  const handleClose = () => {
    // set animation
    setAnimate("translate-x-full");
    // clear the modal
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  handleEscape(() => handleClose());

  React.useEffect(() => {
    setAnimate("");
  }, []);

  return (
    <>
      <ModalWrapperSide
        handleClose={handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
      >
        <div className="relative mb-4 modal_header">
          <h3 className="text-sm text-black">
            {itemEdit ? "Update" : "Add"} Current Cost
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
              // mutate data
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Date"
                        type="month"
                        name="nada_depreciation_with_add_date"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mt-5 mb-6">
                      <InputSelect
                        label="Category"
                        type="text"
                        name="nada_depreciation_with_add_id"
                        disabled={mutation.isPending || isFetching || isLoading}
                      >
                        {isFetching || isLoading ? (
                          <option value="">Loading...</option>
                        ) : (
                          <>
                            <option value="" hidden></option>
                            {currentCostWithAdd?.count > 0 ? (
                              currentCostWithAdd?.data.map((item, key) => {
                                return (
                                  <option
                                    value={item.current_cost_with_add_aid}
                                    key={key}
                                  >
                                    {item.current_cost_with_add_name}
                                  </option>
                                );
                              })
                            ) : (
                              <option disabled>No Data</option>
                            )}
                          </>
                        )}
                      </InputSelect>
                    </div>

                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Value"
                        type="number"
                        name="nada_depreciation_with_add_amount"
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

export default ModalAddNadaDepreciationWithAdd;
