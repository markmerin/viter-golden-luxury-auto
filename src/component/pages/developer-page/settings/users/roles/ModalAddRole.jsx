import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { InputText, InputTextArea } from "../../../../../helpers/FormInputs";
import {
  apiVersion,
  closeModal,
  handleEscape,
} from "../../../../../helpers/functions-general";
import { queryData } from "../../../../../helpers/queryData";
import ModalWrapperSide from "../../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalAddRole = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [animate, setAnimate] = React.useState("translate-x-full");

  const initVal = {
    role_aid: itemEdit ? itemEdit.role_aid : "",
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    role_name: Yup.string().required("Required"),
    role_description: Yup.string().required("Required"),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/roles/${itemEdit.role_aid}`
          : `${apiVersion}/roles`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["roles"] });

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
        <div className="modal_header relative mb-4">
          <h3 className="text-black text-sm">
            {itemEdit ? "Update" : "Add"} Role
          </h3>
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-gray-400 text-lg" />
          </button>
        </div>
        <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[85vh]">
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
                      {itemEdit ? (
                        <p className="flex gap-1">
                          <span className="text-primary">Name:</span>
                          <span>{itemEdit.role_name}</span>
                        </p>
                      ) : (
                        <InputText
                          label="Name"
                          type="text"
                          name="role_name"
                          disabled={mutation.isPending}
                        />
                      )}
                    </div>

                    <div className="relative mb-6">
                      <InputTextArea
                        label="Description"
                        name="role_description"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="modal__action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit relative"
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

export default ModalAddRole;
