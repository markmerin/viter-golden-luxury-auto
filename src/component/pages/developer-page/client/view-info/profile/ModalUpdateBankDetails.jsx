import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { InputText } from "../../../../../helpers/FormInputs";
import {
  apiVersion,
  handleEscape,
} from "../../../../../helpers/functions-general";
import { queryData } from "../../../../../helpers/queryData";
import ModalWrapperSide from "../../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalUpdateBankDetails = ({ itemEdit, setUpdateBankDetails }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [animate, setAnimate] = React.useState("translate-x-full");

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/client/update-bank-details/${itemEdit.client_aid}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["client"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfuly updated.`));
        setUpdateBankDetails(false);
      }
    },
  });

  const initVal = {
    client_bank_name: itemEdit ? itemEdit.client_bank_name : "",
    client_bank_routing_number: itemEdit
      ? itemEdit.client_bank_routing_number
      : "",
    client_bank_account_number: itemEdit
      ? itemEdit.client_bank_account_number
      : "",
  };

  const yupSchema = Yup.object({
    client_bank_name: Yup.string().required("Required"),
    client_bank_routing_number: Yup.string().required("Required"),
    client_bank_account_number: Yup.string().required("Required"),
  });

  const handleClose = () => {
    // set animation
    setAnimate("translate-x-full");
    // clear the modal
    setTimeout(() => {
      setUpdateBankDetails(false);
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
          <h3 className="text-sm text-black">Update Bank Details</h3>
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
                        label="Bank name"
                        type="text"
                        name="client_bank_name"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Bank routing number"
                        type="text"
                        name="client_bank_routing_number"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Bank account number"
                        type="text"
                        name="client_bank_account_number"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 flex justify-end w-full gap-2 px-6 mt-6 mb-4 modal__action">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="relative btn-modal-submit"
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Save"}
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

export default ModalUpdateBankDetails;
