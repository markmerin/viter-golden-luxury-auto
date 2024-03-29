import useQueryData from "@/component/custom-hooks/useQueryData";
import { InputSelect, InputText } from "@/component/helpers/FormInputs";
import {
  apiVersion,
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

const ModalAddIncomeItem = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [animate, setAnimate] = React.useState("translate-x-full");

  const {
    isLoading,
    error,
    data: category,
  } = useQueryData(
    "/v1/income-category", // endpoint
    "get", // method
    "category" // key
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/income-item/${itemEdit.income_item_aid}`
          : `${apiVersion}/income-item`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["incomeitem"] });

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

  const initVal = {
    income_item_aid: itemEdit ? itemEdit.income_item_aid : "",
    income_item_name: itemEdit ? itemEdit.income_item_name : "",
    income_item_category_id: itemEdit ? itemEdit.income_item_category_id : "",
    income_item_name_old: itemEdit ? itemEdit.income_item_name : "",
  };

  const yupSchema = Yup.object({
    income_item_name: Yup.string().required("Required"),
    income_item_category_id: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapperSide
        handleClose={handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
      >
        <div className="relative mb-4 modal_header">
          <h3 className="text-sm text-black">
            {itemEdit ? "Update" : "Add"} Income Item
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
        <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[80vh]">
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
                        label="Name"
                        type="text"
                        name="income_item_name"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputSelect
                        label="Category"
                        name="income_item_category_id"
                        disabled={mutation.isLoading}
                      >
                        {isLoading ? (
                          <option value="" disabled>
                            Loading...
                          </option>
                        ) : error ? (
                          <option value="" disabled>
                            Error
                          </option>
                        ) : (
                          <React.Fragment>
                            <option value="" disabled hidden></option>
                            <optgroup label="Select Category">
                              {category?.data.length > 0 ? (
                                category?.data.map((item, key) => {
                                  return (
                                    <option
                                      key={key}
                                      value={item.income_category_aid}
                                    >
                                      {item.income_category_name}
                                    </option>
                                  );
                                })
                              ) : (
                                <option value="" disabled>
                                  No data
                                </option>
                              )}
                            </optgroup>
                          </React.Fragment>
                        )}
                      </InputSelect>
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

export default ModalAddIncomeItem;
