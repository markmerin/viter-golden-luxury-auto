import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import {
  setError,
  setIsAccountUpdated,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import { InputText } from "../../../../../helpers/FormInputs";
import {
  apiVersion,
  closeModal,
  handleEscape,
} from "../../../../../helpers/functions-general";
import { queryData } from "../../../../../helpers/queryData";
import ModalWrapperSide from "../../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalAddUserSystem = ({ itemEdit, roles }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [emailMessage, setEmailMessage] = React.useState("");
  const [animate, setAnimate] = React.useState("translate-x-full");

  const getDeveloperRole = roles?.data.filter(
    (item) => item.role_is_developer === 1 && item.role_is_active === 1
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/user-system/${itemEdit.user_system_aid}`
          : `${apiVersion}/user-system`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Successfuly ${
              itemEdit
                ? `updated. ${emailMessage} ${
                    store.credentials.data.user_system_email ===
                    itemEdit.user_system_email
                      ? "You will be automatically logged out."
                      : ""
                  }`
                : "added, please check your email for verification."
            }`
          )
        );
        if (
          itemEdit &&
          store.credentials.data.user_system_email ===
            itemEdit.user_system_email
        ) {
          dispatch(setIsAccountUpdated(true));
        }
        dispatch(setIsAdd(false));
      }
    },
  });

  const initVal = {
    user_system_aid: itemEdit ? itemEdit.user_system_aid : "",
    user_system_fname: itemEdit ? itemEdit.user_system_fname : "",
    user_system_lname: itemEdit ? itemEdit.user_system_lname : "",
    user_system_email: itemEdit ? itemEdit.user_system_email : "",
    user_system_role_id: getDeveloperRole[0].role_aid,
    user_system_email_old: itemEdit ? itemEdit.user_system_email : "",
  };

  const yupSchema = Yup.object({
    user_system_fname: Yup.string().required("Required"),
    user_system_lname: Yup.string().required("Required"),
    user_system_email: Yup.string().required("Required").email("Invalid email"),
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
        <div className="modal_header relative">
          <h3 className="text-black text-sm">
            {itemEdit ? "Update" : "Add"} System user
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

        <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[80vh]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              mutation.mutate(values);
              if (
                itemEdit &&
                itemEdit.user_system_email !== values.user_system_email
              ) {
                setEmailMessage("Please check your email for verification.");
              }
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="First name"
                        type="text"
                        name="user_system_fname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last name"
                        name="user_system_lname"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Email address"
                        type="text"
                        name="user_system_email"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <p className="flex gap-1">
                        <span className="w-8 text-primary">Role:</span>
                        <span>{getDeveloperRole[0].role_name}</span>
                      </p>
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

export default ModalAddUserSystem;
