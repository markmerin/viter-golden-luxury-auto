import useQueryData from "@/component/custom-hooks/useQueryData";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
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

const ModalUpdateProfile = ({ itemEdit, setUpdateProfile }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [animate, setAnimate] = React.useState("translate-x-full");

  const {
    isLoading,
    isFetching,
    error,
    data: clientEmail,
  } = useQueryData(
    `${apiVersion}/client/user-account-by-email`, // endpoint
    "post", // method
    "client-email", // key
    { client_email: itemEdit.client_email },
    { client_email: itemEdit.client_email }
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${apiVersion}/client/${itemEdit.client_aid}`, "put", values),
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
        setUpdateProfile(false);
      }
    },
  });

  const initVal = {
    client_fname: itemEdit ? itemEdit.client_fname : "",
    client_lname: itemEdit ? itemEdit.client_lname : "",
    client_contact: itemEdit ? itemEdit.client_contact : "",
    client_email: itemEdit ? itemEdit.client_email : "",
    client_email_old: itemEdit ? itemEdit.client_email : "",
  };

  const yupSchema = Yup.object({
    client_fname: Yup.string().required("Required"),
    client_lname: Yup.string().required("Required"),
    client_contact: Yup.string().required("Required"),
    client_email: Yup.string().required("Required").email("Invalid email"),
  });

  const handleClose = () => {
    // set animation
    setAnimate("translate-x-full");
    // clear the modal
    setTimeout(() => {
      setUpdateProfile(false);
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
        {itemEdit && (isLoading || isFetching) && <TableSpinner />}
        <div className="relative mb-4 modal_header">
          <h3 className="text-sm text-black">Update Profile</h3>
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
                        label="First name"
                        type="text"
                        name="client_fname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last name"
                        type="text"
                        name="client_lname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Contact"
                        type="text"
                        name="client_contact"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Email"
                        type="text"
                        name="client_email"
                        disabled={
                          mutation.isLoading ||
                          (clientEmail?.count > 0 && itemEdit)
                        }
                      />
                    </div>

                    {itemEdit && clientEmail?.count > 0 && (
                      <p className="bg-[#fffde7] m-0 w-fit text-left  p-2 px-5">
                        NOTE: Email editing is unavailable if the client has a
                        user account.
                      </p>
                    )}

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

export default ModalUpdateProfile;