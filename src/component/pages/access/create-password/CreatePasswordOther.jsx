import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import {
  setCreatePassSuccess,
  setError,
  setMessage,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { InputText } from "../../../helpers/FormInputs";
import { devNavUrl, getUrlParam } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import PageNotFound from "../../../partials/PageNotFound";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import LcssLogo from "../../../svg/LcssLogo";

const CreatePasswordOther = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [newPasswordShown, setNewPasswordShown] = React.useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  const paramKey = getUrlParam().get("key");
  const queryClient = useQueryClient();
  const [lowerValidated, setLowerValidated] = React.useState(false);
  const [upperValidated, setUpperValidated] = React.useState(false);
  const [numberValidated, setNumberValidated] = React.useState(false);
  const [specialValidated, setSpecialValidated] = React.useState(false);
  const [lengthValidated, setLengthValidated] = React.useState(false);

  const { isLoading, data: key } = useQueryData(
    `/v1/user-other/key/${paramKey}`, // endpoint
    "get", // method
    "other-user-password" // key
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData("/v1/user-other/password", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["other-user-password"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isCreatePassSuccess) {
          dispatch(setCreatePassSuccess(false));
          navigate(`${devNavUrl}/create-password-success?redirect=/login`);
        }
      }
    },
  });

  const toggleNewPassword = () => {
    setNewPasswordShown(!newPasswordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const initVal = {
    new_password: "",
    confirm_password: "",
    key: paramKey,
  };

  const yupSchema = Yup.object({
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[@$!%*#?&])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });
  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*`{;:',<.>/?}_-])");
    const length = new RegExp("(?=.{8,})");

    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  React.useEffect(() => {
    dispatch(setCreatePassSuccess(true));
  }, []);

  return (
    <>
      {key?.data.length === 0 || paramKey === null || paramKey === "" ? (
        <>
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <PageNotFound />
        </>
      ) : (
        <div
          className="relative flex justify-center items-center "
          style={{ transform: "translateY(clamp(5rem,12vw,8rem))" }}
        >
          {isLoading && (
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50">
              <FetchingSpinner />
            </div>
          )}
          <div className="w-96 p-6">
            <div className="flex justify-center items-center flex-col">
              <LcssLogo />
            </div>

            <p className="mt-8 mb-5 text-lg font-bold">CREATE PASSWORD</p>
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
                    <div className="relative mb-8">
                      <InputText
                        label="New password"
                        type={newPasswordShown ? "text" : "password"}
                        name="new_password"
                        disabled={mutation.isPending}
                        onChange={(e) => handleChange(e.target.value)}
                      />
                      {props.values.new_password && (
                        <span
                          className="text-base absolute bottom-1/2 right-2 translate-y-1/2 cursor-pointer"
                          onClick={toggleNewPassword}
                        >
                          {newPasswordShown ? (
                            <FaEyeSlash className="fill-gray-400" />
                          ) : (
                            <FaEye className="fill-gray-400" />
                          )}
                        </span>
                      )}
                    </div>
                    <div className="relative mb-6">
                      <InputText
                        label="Confirm password"
                        type={confirmPasswordShown ? "text" : "password"}
                        name="confirm_password"
                        disabled={
                          mutation.isPending || props.values.new_password === ""
                        }
                      />
                      {props.values.confirm_password && (
                        <span
                          className="text-base absolute bottom-1/2 right-2 translate-y-1/2 cursor-pointer
                    "
                          onClick={toggleConfirmPassword}
                        >
                          {confirmPasswordShown ? (
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
                        disabled={
                          mutation.isPending ||
                          props.values.new_password === "" ||
                          props.values.confirm_password === ""
                        }
                        className="btn-modal-submit relative"
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Save"}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            {/* <h3 className="mt-5">Password must contain:</h3>
            <ul className="list-disc ml-5">
              <li className="text-xs italic">At least 8 characters</li>
              <li className="text-xs italic">At least one lowercase letter</li>
              <li className="text-xs italic">At least one uppercase letter</li>
              <li className="text-xs italic">At least one special character</li>
              <li className="text-xs italic">At least one number</li>
            </ul> */}
            <div className="p-3 mt-5 rounded-sm mb-6">
              <h5 className="text-xs text-body mb-2">Password Requirement</h5>
              <ul className="text-sm">
                <li className="text-body italic text-xs flex gap-2 items-center mb-2">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      lengthValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  Must have 8 characters
                </li>
                <li className="text-body italic text-xs flex gap-2 items-center mb-2">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      upperValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 uppercase
                </li>
                <li className="text-body italic text-xs flex gap-2 items-center mb-2">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      lowerValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 lowercase
                </li>
                <li className="text-body italic text-xs flex gap-2 items-center mb-2">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      numberValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 number
                </li>
                <li className="text-body italic text-xs flex gap-2 items-center mb-1">
                  <BsCheckCircleFill
                    className={`duration-200 ${
                      specialValidated ? "fill-green-600" : "opacity-50"
                    }`}
                  />
                  At least 1 symbol
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePasswordOther;
