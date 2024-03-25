import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  setError,
  setForgotPassSuccess,
  setMessage,
  setStartIndex,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalError from "../../../partials/modals/ModalError";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import LcssLogo from "../../../svg/LcssLogo";

const ForgotPasswordOther = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  let navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user-other/reset`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["other"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isForgotPassSuccess) {
          dispatch(setForgotPassSuccess(false));
          window.location.replace(
            `${devNavUrl}/forgot-password-verification?email=${data.data}`
          );
        }
      }
    },
  });

  const initVal = {
    item: "",
  };

  const yupSchema = Yup.object({
    item: Yup.string().required("Required"),
  });

  React.useEffect(() => {
    dispatch(setForgotPassSuccess(true));
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center "
        style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
      >
        <div className="w-96 p-6">
          <div className="flex justify-center items-center flex-col">
            <LcssLogo />
          </div>

          <p className="mt-8 mb-5 text-lg font-bold">FORGOT PASSWORD</p>
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
                  <div className="relative mb-4">
                    <InputText
                      label="Email"
                      type="text"
                      name="item"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="flex items-center gap-1 pt-3">
                    <button
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                      className="btn-modal-submit relative"
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Submit"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
          <p className="mt-2">
            Go back to{" "}
            <a href={`${devNavUrl}/login`} className="w-full text-primary">
              <u> login</u>
            </a>
          </p>
        </div>
      </div>

      {store.error && <ModalError />}
    </>
  );
};

export default ForgotPasswordOther;
