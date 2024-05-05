import { InputText } from "@/component/helpers/FormInputs";
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

const ModalAddPurchaseDocument = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [animate, setAnimate] = React.useState("translate-x-full");

  const initVal = {
    purchase_document_aid: itemEdit ? itemEdit.purchase_document_aid : "",
    purchase_document_name: itemEdit ? itemEdit.purchase_document_name : "",
    purchase_document_name_old: itemEdit ? itemEdit.purchase_document_name : "",
  };

  const yupSchema = Yup.object({
    purchase_document_name: Yup.string().required("Required"),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/purchase-documents/${itemEdit.purchase_document_aid}`
          : `${apiVersion}/purchase-documents`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["purchasedoc"] });

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
            {itemEdit ? "Update" : "Add"} Purchase Documents
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
                        label="Name"
                        type="text"
                        name="purchase_document_name"
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

export default ModalAddPurchaseDocument;
