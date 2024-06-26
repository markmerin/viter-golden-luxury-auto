import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useSystemLogin from "../../../custom-hooks/useSystemLogin";
import { InputText } from "../../../helpers/FormInputs";
import {
  apiVersion,
  devNavUrl,
  developerPath,
  setStorageRoute,
} from "../../../helpers/functions-general";
import { checkRoleToRedirect } from "../../../helpers/login-functions";
import { queryData } from "../../../helpers/queryData";
import ModalError from "../../../partials/modals/ModalError";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import GlaLogo from "../../../svg/GlaLogo";

const SystemLogin = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const { loginLoading } = useSystemLogin(navigate);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/${apiVersion}/user-system/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["system"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_system_password;
          delete data.data[0].role_description;
          delete data.data[0].role_created;
          delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          checkRoleToRedirect(navigate, data.data[0]);
        }
      }
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initVal = {
    user_system_email: "",
    password: "",
  };

  const yupSchema = Yup.object({
    user_system_email: Yup.string().required("Required").email("Invalid email"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      {loginLoading ? (
        <TableSpinner />
      ) : (
        <div
          className="flex justify-center items-center "
          style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
        >
          <div className="w-96 p-6">
            <div className="flex justify-center items-center flex-col">
              <GlaLogo />
            </div>

            <p className="mt-8 mb-5 text-lg font-bold">DEVELOPER LOGIN</p>
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
                    <div className="relative mb-6">
                      <InputText
                        label="Email"
                        type="text"
                        name="user_system_email"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mb-6">
                      <InputText
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        disabled={mutation.isPending}
                      />
                      {props.values.password && (
                        <span
                          className="text-base absolute bottom-1/2 right-2 translate-y-1/2 cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordShown ? (
                            <FaEyeSlash className="fill-gray-400" />
                          ) : (
                            <FaEye className="fill-gray-400" />
                          )}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 pt-3">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit relative"
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Login"}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <p className="mt-5">
              Did you forget your password?{" "}
              <a
                href={`${devNavUrl}/${developerPath}/forgot-password`}
                className="w-full text-primary"
              >
                <u> Forgot password</u>
              </a>
            </p>
          </div>
        </div>
      )}

      {store.error && <ModalError />}
    </>
  );
};

export default SystemLogin;
