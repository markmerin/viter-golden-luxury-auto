import useQueryData from "@/component/custom-hooks/useQueryData";
import useUploadPhoto from "@/component/custom-hooks/useUploadPhoto";
import {
  InputFileUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/component/helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
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
import { FaRegImage, FaTimesCircle, FaUpload } from "react-icons/fa";
import * as Yup from "yup";

const ModalAddRecordsFiles = ({ clientId, itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/records-files/${itemEdit.record_files_aid}`
          : `${apiVersion}/records-files`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["records-files"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(itemEdit ? "Successfully updated." : "Successfully added.")
        );
      }
    },
  });

  const initVal = {
    record_files_aid: itemEdit ? itemEdit.record_files_aid : "",
    record_files_doc_name: itemEdit ? itemEdit.record_files_doc_name : "",
    record_files_date: itemEdit ? itemEdit.record_files_date : "",
    record_files_remarks: itemEdit ? itemEdit.record_files_remarks : "",
    record_files_gdrive: itemEdit ? itemEdit.record_files_gdrive : "",
    record_files_client_id: clientId,
    record_files_doc_name_old: itemEdit ? itemEdit.record_files_doc_name : "",
  };

  const yupSchema = Yup.object({
    record_files_doc_name: Yup.string().required("Required"),
    record_files_date: Yup.string().required("Required"),
    record_files_gdrive: Yup.string().required("Required"),
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
            {itemEdit ? "Update" : "Add"} Records and Files
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
        <div className="modal_body ">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              mutation.mutate({
                ...values,
                record_files_client_id: clientId,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mb-6">
                      <InputText
                        label="Document Name"
                        type="text"
                        name="record_files_doc_name"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Date"
                        type="date"
                        name="record_files_date"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputTextArea
                        label="Remarks"
                        name="record_files_remarks"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mb-6">
                      <InputTextArea
                        label="GDrive Link"
                        name="record_files_gdrive"
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

export default ModalAddRecordsFiles;
