import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaCheck } from "react-icons/fa";
import * as Yup from "yup";
import { setError, setMessage } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import { apiVersion, devNavUrl } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalError from "../../../partials/modals/ModalError";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import GlaLogo from "../../../svg/GlaLogo";

const ForgotPasswordOther = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${apiVersion}/user-other/reset`, "post", values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["other"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setIsSuccess(true);
      }
    },
  });

  const initVal = {
    item: "",
  };

  const yupSchema = Yup.object({
    item: Yup.string().required("Required").email("Invalid email."),
  });

  return (
    <>
      <div
        className="flex justify-center items-center "
        style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
      >
        <div className="w-96 p-6">
          <div className="flex justify-center items-center flex-col bg-dark w-fit mx-auto py-1">
            <GlaLogo />
          </div>
          {isSuccess ? (
            <>
              <FaCheck className="h-16 w-16 fill-green-700 mx-auto mt-8" />
              <h2 className="mb-4 mt-2 text-lg text-center">Success!</h2>
              <p className="text-sm mb-6 text-justify">
                We have sent instructions to reset your password. If you haven't
                received the email, please check your spam or junk folder as
                well.
              </p>

              <p className="mt-2">
                Go back to{" "}
                <a href={`${devNavUrl}/login`} className="w-full text-accent">
                  <u> login</u>
                </a>
              </p>
            </>
          ) : (
            <>
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
                <a href={`${devNavUrl}/login`} className="w-full text-accent">
                  <u> login</u>
                </a>
              </p>
            </>
          )}
        </div>
      </div>

      {store.error && <ModalError />}
    </>
  );
};

export default ForgotPasswordOther;
