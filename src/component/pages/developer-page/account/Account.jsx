import { Form, Formik } from "formik";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import * as Yup from "yup";
import { setError, setMessage } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputText } from "../../../helpers/FormInputs";
import { isDemoMode } from "../../../helpers/functions-general";
import BreadCrumbs from "../../../partials/BreadCrumbs";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import Navigation from "../Navigation";
import ModalConfirmPasswordChange from "./ModalConfirmPasswordChange";

const Account = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [initialValues, setInitialValues] = React.useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [changePassword, setChangePassword] = React.useState(false);
  const [showInformation, setIsShowInformation] = React.useState(false);
  const [showPassword, setIsShowPassword] = React.useState(false);

  const showInformationTab = () => {
    setIsShowInformation(!showInformation);
  };

  const showPasswordTab = () => {
    setIsShowPassword(!showPassword);
  };

  const userName =
    store.credentials.data.role_is_developer === 1
      ? `${store.credentials.data.user_system_fname} ${store.credentials.data.user_system_lname}`
      : `${store.credentials.data.user_other_fname} ${store.credentials.data.user_other_lname}`;

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
        className={`wrapper ${store.isShow ? "ml-48" : "ml-0"} 
        ${isDemoMode === 1 && "min-h-[calc(100vh-36px)]"} 
        transition-all ease-in duration-200 `}
      >
        <div className="flex items-start justify-between mt-1 ml-0">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base mt-3 mb-2">Account</h4>
          </div>
        </div>

        <div className="relative pt-2 pb-40 max-w-[650px]">
          <div
            className="group flex items-center justify-between border-b border-solid border-gray-300 cursor-pointer relative"
            onClick={showInformationTab}
          >
            <span className="font-bold py-2">Information</span>
            <div
              className="print:hidden tooltip-action-table"
              data-tooltip={!showInformation ? "Close" : `Open`}
            >
              <SlArrowDown
                className={`${
                  !showInformation ? "rotate-180" : "rotate-0"
                } duration-300`}
              />
            </div>
            {/* </div> */}
          </div>
          <div
            className={`print:block ${
              showInformation ? "max-h-0" : "max-h-[100rem]"
            } overflow-hidden transition-all duration-300 relative`}
          >
            <div className="flex sm:gap-3 flex-col md:flex-row mt-5">
              <p className="font-bold w-[20rem] my-1">Name:</p>
              <p className="my-1 w-full">{userName}</p>
            </div>
            <div className="flex sm:gap-3 flex-col md:flex-row mb-5">
              <p className="font-bold w-[20rem] my-1">Email:</p>
              <p className="my-1 w-full">{userEmail}</p>
            </div>
          </div>

          <div
            className="group flex items-center justify-between border-b border-solid border-gray-300 cursor-pointer relative"
            onClick={showPasswordTab}
          >
            <span className="font-bold py-2">Password</span>

            <div
              className="print:hidden tooltip-action-table"
              data-tooltip={!showPassword ? "Close" : `Open`}
            >
              <SlArrowDown
                className={`${
                  !showPassword ? "rotate-180" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div
            className={`print:block ${
              showPassword ? "max-h-0" : "max-h-[100rem]"
            } overflow-hidden transition-all duration-300 relative`}
          >
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {}}
            >
              {(props) => {
                return (
                  <Form>
                    <div className="flex items-center sm:gap-3 flex-col md:flex-row mt-5">
                      <p className="font-bold w-[20rem] my-3">
                        Current Password:
                      </p>
                      <p className="my-3 w-full relative">
                        <InputText
                          type={showCurrentPassword ? "text" : "password"}
                          name="current_password"
                          className="account__password"
                          placeholder="Current password"
                          required={false}
                        />
                        {props.values.current_password && (
                          <button
                            type="button"
                            className="absolute top-1/2 -translate-y-1/2 text-sm text-gray-400 right-3"
                            onClick={handleShowCurrentPassword}
                          >
                            {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center sm:gap-3 flex-col md:flex-row">
                      <p className="font-bold w-[20rem] my-3">New Password:</p>
                      <p className="my-3 w-full relative">
                        <InputText
                          type={showNewPassword ? "text" : "password"}
                          name="new_password"
                          className="account__password"
                          placeholder="New password"
                          required={false}
                        />

                        {props.values.new_password && (
                          <button
                            type="button"
                            className="absolute top-1/2 -translate-y-1/2 text-sm text-gray-400 right-3"
                            onClick={handleShowNewPassword}
                          >
                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center sm:gap-3 flex-col md:flex-row">
                      <p className="font-bold w-[20rem] my-3">
                        Confirm New Password:
                      </p>
                      <p className="my-3 w-full relative">
                        <InputText
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirm_password"
                          className="account__password"
                          placeholder="Confirm New password"
                          required={false}
                        />
                        {props.values.confirm_password && (
                          <button
                            type="button"
                            className="absolute top-1/2 -translate-y-1/2 text-sm text-gray-400 right-3"
                            onClick={handleShowConfirmPassword}
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="flex sm:gap-3 flex-col md:flex-row">
                      <p className="font-bold w-[20rem]"></p>
                      <p className="m-0 w-full">
                        <button
                          className="btn-modal-submit w-fit"
                          type="submit"
                          onClick={() => handleChangePassword(props)}
                          disabled={
                            props.values.current_password === "" ||
                            props.values.new_password === "" ||
                            props.values.confirm_password === "" ||
                            props.values.new_password !==
                              props.values.confirm_password
                          }
                        >
                          Save
                        </button>
                      </p>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <Footer />
      </div>

      {changePassword && (
        <ModalConfirmPasswordChange
          initVal={initialValues}
          setChangePassword={setChangePassword}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Account;
