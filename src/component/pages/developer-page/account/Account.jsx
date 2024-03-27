import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash, FaSave } from "react-icons/fa";
import * as Yup from "yup";
import { setError, setMessage } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import Navigation from "../Navigation";
import ModalConfirmPasswordChange from "./ModalConfirmPasswordChange";
import ModalSuccessPasswordChange from "./ModalSuccessPasswordChange";

const Account = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [initialValues, setInitialValues] = React.useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [changePassword, setChangePassword] = React.useState(false);
  const [changePasswordSuccess, setChangePasswordSuccess] =
    React.useState(false);

  const userName =
    store.credentials.data.role_is_developer === 1
      ? `${store.credentials.data.user_system_fname} ${store.credentials.data.user_system_lname}`
      : `${store.credentials.data.user_other_name}`;
  // : `${store.credentials.data.user_other_fname} ${store.credentials.data.user_other_lname}`;

  const userEmail =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_email
      : store.credentials.data.user_other_email;

  const userId =
    store.credentials.data.role_is_developer === 1
      ? store.credentials.data.user_system_aid
      : store.credentials.data.user_other_aid;

  const initVal = {
    user_id: userId,
    current_password: "",
    new_password: "",
    confirm_password: "",
  };

  const yupSchema = Yup.object({
    current_password: Yup.string().required("Required"),
    new_password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "At least one lowercase letter.")
      .matches(/[A-Z]/, "At least one uppercase letter.")
      .matches("(?=.*[!@#$%^&*-])", "Atleast 1 special character.")
      .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords does not match."),
  });

  const handleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleChangePassword = (props) => {
    if (
      props.values.current_password !== "" &&
      props.values.new_password !== "" &&
      props.values.confirm_password !== "" &&
      props.values.new_password === props.values.confirm_password
    ) {
      setChangePassword(true);
      setInitialValues(props.values);
      return;
    } else {
      dispatch(setError(true));
      dispatch(setMessage("All fields required."));
      return;
    }
  };

  return (
    <>
      <Header />
      <Navigation menu={``} />
      <div
        className={`wrapper ${store.isShow && "ml-48"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <h1 className="mb-0 text-lg py-4">Account</h1>

        <div className="relative pt-2 pb-40 max-w-[650px]">
          <div className="page__wrap w-full">
            <div className="flex justify-between items-center border-b border-gray-200">
              <div className="flex w-full items-center justify-between pb-2 pt-5">
                <h4 className="mb-0">Information</h4>
              </div>
            </div>

            <div className="my-6 rounded-md">
              <div className="flex items-center gap-3 px-4 py-3 ">
                <p className="font-bold self-center m-0 w-[20rem]">Name:</p>
                <p className="m-0 w-full">{userName}</p>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 ">
                <p className="font-bold self-center m-0 w-[20rem]">Email:</p>
                <p className="m-0 w-full">{userEmail}</p>
              </div>
            </div>
          </div>
          <div className="page__wrap w-full">
            <div className="flex justify-between items-center border-b border-gray-200">
              <div className="flex w-full items-center justify-between pb-2 pt-5">
                <h4 className="mb-0">Password</h4>
              </div>
            </div>

            <div className="my-6 rounded-md">
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {}}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className="flex items-center gap-3 px-4 py-3">
                        <p className="font-bold self-center m-0 w-[20rem]">
                          Current Password:
                        </p>
                        <div className="relative w-full">
                          <InputText
                            type={showCurrentPassword ? "text" : "password"}
                            name="current_password"
                            className="account_password"
                            placeholder="Current password"
                          />
                          {props.values.current_password && (
                            <button
                              type="button"
                              className="absolute top-3 text-base text-gray-400 right-3"
                              onClick={handleShowCurrentPassword}
                            >
                              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-3">
                        <p className="font-bold self-center m-0 w-[20rem]">
                          New Password:
                        </p>
                        <div className="relative w-full">
                          <InputText
                            type={showNewPassword ? "text" : "password"}
                            name="new_password"
                            className="account_password"
                            placeholder="New password"
                          />

                          {props.values.new_password && (
                            <button
                              type="button"
                              className="absolute top-3 text-base text-gray-400 right-3"
                              onClick={handleShowNewPassword}
                            >
                              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-3">
                        <p className="font-bold self-center m-0 w-[20rem]">
                          Confirm New Password:
                        </p>
                        <div className="relative w-full">
                          <InputText
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirm_password"
                            className="account_password"
                            placeholder="Confirm New password"
                          />
                          {props.values.confirm_password && (
                            <button
                              type="button"
                              className="absolute top-3 text-base text-gray-400 right-3"
                              onClick={handleShowConfirmPassword}
                            >
                              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="modal__action flex justify-end mt-6 gap-2 pr-4">
                        <button
                          className="btn-primary"
                          type="button"
                          onClick={() => handleChangePassword(props)}
                          disabled={
                            props.values.current_password === "" ||
                            props.values.new_password === "" ||
                            props.values.confirm_password === "" ||
                            props.values.new_password !==
                              props.values.confirm_password
                          }
                        >
                          <FaSave />
                          <span>Save</span>
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {changePassword && (
        <ModalConfirmPasswordChange
          initVal={initialValues}
          setChangePassword={setChangePassword}
          setChangePasswordSuccess={setChangePasswordSuccess}
        />
      )}
      {changePasswordSuccess && (
        <ModalSuccessPasswordChange
          setChangePasswordSuccess={setChangePasswordSuccess}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.success && <FetchingSpinner />}
      {store.error && <ModalError />}
    </>
  );
};

export default Account;
