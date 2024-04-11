import {
  InputCheckbox,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/component/helpers/FormInputs";
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

const ModalAddQuicklink = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [isSocial, setIsSocial] = React.useState(false);

  const initVal = {
    quicklink_aid: itemEdit ? itemEdit.quicklink_aid : "",
    quicklink_name: itemEdit ? itemEdit.quicklink_name : "",
    quicklink_link: itemEdit ? itemEdit.quicklink_link : "",
    quicklink_is_social: itemEdit ? itemEdit.quicklink_is_social : "",
    quicklink_social_media: itemEdit
      ? itemEdit.quicklink_social_media
      : "other",
    quicklink_name_old: itemEdit ? itemEdit.quicklink_name : "",
  };

  const yupSchema = Yup.object({
    quicklink_name: Yup.string().required("Required"),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/quick-link/${itemEdit.quicklink_aid}`
          : `${apiVersion}/quick-link`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["quicklink"] });

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
            {itemEdit ? "Update" : "Add"} Quick Link
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
              console.log({
                ...values,
                quicklink_is_social:
                  values.quicklink_social_media === "other" ? 0 : 1,
              });
              mutation.mutate({
                ...values,
                quicklink_is_social:
                  values.quicklink_social_media === "other" ? 0 : 1,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mt-5 mb-6">
                      <InputSelect
                        label="Social Media Type"
                        name="quicklink_social_media"
                        disabled={mutation.isPending}
                      >
                        <option value="other">Other</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="yelp">Yelp</option>
                        <option value="pinterest">Pinterest</option>
                        <option value="linkedin">Linkedin</option>
                      </InputSelect>
                    </div>

                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Name"
                        type="text"
                        name="quicklink_name"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mt-5 mb-6">
                      <InputTextArea
                        label="Link"
                        type="text"
                        name="quicklink_link"
                        disabled={mutation.isPending}
                        className="resize-y"
                      />
                    </div>
                    {/* 
                    <div className="relative mt-5 mb-6">
                      <InputCheckbox
                        label="Mark check to set as social media link"
                        type="checkbox"
                        name="quicklink_is_social"
                        onChange={() => setIsSocial(!isSocial)}
                        disabled={mutation.isPending}
                        checked={isSocial}
                      />
                    </div> */}

                    {/* {isSocial === true ? ( */}

                    {/* // ) : (
                    //   ""
                    // )} */}

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

export default ModalAddQuicklink;
