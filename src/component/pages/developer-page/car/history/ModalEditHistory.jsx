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

const ModalEditHistory = () => {
  const { dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`${apiVersion}/client`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["client"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Successfully added."));
      }
    },
  });

  const initVal = {
    client_fname: "",
    client_lname: "",
    client_contact: "",
    client_email: "",
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
          <h3 className="text-sm text-black">Edit Days Rented</h3>
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
                    <div className="relative mb-6">
                      <InputSelect
                        label="Category"
                        name="income_item_category_id"
                        disabled={mutation.isLoading}
                      >
                        <>
                          <option value="" disabled hidden></option>
                          <optgroup label="Select Month">
                            <option value="jan">Jan</option>
                            <option value="feb">Feb</option>
                            <option value="mar">Mar</option>
                            <option value="apr">Apr</option>
                            <option value="may">May</option>
                            <option value="jun">Jun</option>
                            <option value="jul">Jul</option>
                            <option value="aug">Aug</option>
                            <option value="sep">Sep</option>
                            <option value="oct">Oct</option>
                            <option value="nov">Nov</option>
                            <option value="dec">Dec</option>
                          </optgroup>
                        </>
                      </InputSelect>
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Amount"
                        type="text"
                        name="client_contact"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 flex justify-end w-full gap-2 px-6 mt-6 mb-4 modal__action">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="relative btn-modal-submit"
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Add"}
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

export default ModalEditHistory;
