import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaInfo, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  setError,
  setIsAccountUpdated,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { InputSelect } from "../../../../../../helpers/FormInputs";
import {
  closeModal,
  devNavUrl,
  getUserType,
  handleEscape,
} from "../../../../../../helpers/functions-general";
import { queryData } from "../../../../../../helpers/queryData";
import NoData from "../../../../../../partials/NoData";
import ModalWrapperSide from "../../../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";

const ModalAddUserMain = ({ itemEdit, roles, trainer }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [id, setId] = React.useState("");
  const queryClient = useQueryClient();
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [onFocusTrainer, setOnFocusTrainer] = React.useState(false);
  const [dataTrainer, setDataTrainer] = React.useState([]);
  const [searchTrainer, setSearchTrainer] = React.useState("");
  const refTrainer = React.useRef();

  const getNonDeveloperAndNonTraineeRole = roles?.data.filter(
    (item) =>
      item.role_is_developer !== 1 &&
      item.role_is_trainee !== 1 &&
      item.role_is_active === 1
  );

  const getActiveTrainer = trainer?.data.filter(
    (item) => item.trainer_is_active === 1
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/user-main/${itemEdit.user_other_aid}` : "/v1/user-main",
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user-main"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Successfuly ${
              itemEdit
                ? `updated${
                    store.credentials.data.user_other_email ===
                    itemEdit.user_other_email
                      ? ", you will be automatically logged out"
                      : ""
                  }.`
                : "added, please check your email for verification."
            }`
          )
        );
        if (
          itemEdit &&
          store.credentials.data.user_other_email === itemEdit.user_other_email
        ) {
          dispatch(setIsAccountUpdated(true));
        }
        dispatch(setIsAdd(false));
      }
    },
  });

  const initVal = {
    user_other_id: itemEdit ? itemEdit.user_other_id : "",
    user_other_role_id: itemEdit ? itemEdit.user_other_role_id : "",
  };

  const yupSchema = Yup.object({
    user_other_role_id: Yup.string().required("Required"),
  });

  const handleSearchTrainer = (e) => {
    setOnFocusTrainer(true);
    setSearchTrainer(e.target.value);
    const filteredData = getActiveTrainer?.filter((entry) =>
      Object.values(entry).some(
        (stringValue) =>
          typeof stringValue === "string" &&
          (stringValue.toUpperCase().includes(e.target.value) ||
            stringValue.toLowerCase().includes(e.target.value))
      )
    );

    setDataTrainer(filteredData);
  };

  const handleClickOutsideTrainer = (e) => {
    if (
      refTrainer.current !== undefined &&
      refTrainer.current !== null &&
      !refTrainer.current.contains(e.target)
    ) {
      setOnFocusTrainer(false);
    }
  };

  const handleClickTrainer = (item) => {
    setId(item.trainer_aid);
    setName(`${item.trainer_fname} ${item.trainer_lname}`);
    setSearchTrainer(`${item.trainer_fname} ${item.trainer_lname}`);
    setEmail(item.trainer_email);
  };

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
    document.addEventListener("click", handleClickOutsideTrainer);
    return () =>
      document.removeEventListener("click", handleClickOutsideTrainer);
  }, []);

  return (
    <>
      <ModalWrapperSide
        handleClose={handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
      >
        {/* {itemEdit && (
          <>
            <span className="text-2xl text-white absolute z-50 top-[-8rem] rounded-full bg-primary p-3 animate-shake">
              <FaInfo />
            </span>
            <div className="absolute z-40 top-[-6rem] w-[350px] bg-[#EFF8FF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md p-2 overflow-hidden animate-fadeIn">
              <p className="text-center m-0 pt-6">
                You can change the name and email of this user in{" "}
                <Link
                  to={`${devNavUrl}/developer/settings/trainer`}
                  className="text-primary underline"
                  title="Go to this page."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  trainer
                </Link>{" "}
                page.
              </p>
            </div>
          </>
        )} */}

        <div className="modal_header relative mb-4">
          <h3 className="text-black text-sm">
            {itemEdit ? "Update" : "Add"} Main User
          </h3>
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleClose}
          >
            <FaTimesCircle className="text-gray-400 text-lg " />
          </button>
        </div>

        <div className="modal_body max-h-[80vh]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // mutate data
              mutation.mutate({
                ...values,
                user_other_id: id,
                user_other_name: name,
                user_other_email: email,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mt-5 mb-6">
                      {itemEdit ? (
                        <>
                          <p className="flex gap-1 ">
                            <span className="w-12 text-primary">Name:</span>
                            <span>{itemEdit.user_other_name}</span>
                          </p>
                          <p className="flex gap-1 ">
                            <span className="w-12 text-primary">Email:</span>
                            <span>{itemEdit.user_other_email}</span>
                          </p>
                        </>
                      ) : (
                        // <InputSelect
                        //   label="Trainer"
                        //   name="user_other_id"
                        //   disabled={mutation.isPending}
                        //   onChange={(e) => handleClickTrainer(e)}
                        // >
                        //   <optgroup label="Select trainer">
                        //     <option value="" hidden></option>
                        //     {getActiveTrainer?.length > 0 ? (
                        //       getActiveTrainer?.map((item, key) => {
                        //         return (
                        //           <option
                        //             key={key}
                        //             value={item.trainer_aid}
                        //             dataemail={item.trainer_email}
                        //             dataname={`${item.trainer_fname} ${item.trainer_lname}`}
                        //           >
                        //             {item.trainer_fname} {item.trainer_lname}
                        //           </option>
                        //         );
                        //       })
                        //     ) : (
                        //       <option value="" disabled>
                        //         No data
                        //       </option>
                        //     )}
                        //   </optgroup>
                        // </InputSelect>
                        <>
                          <input
                            type="search"
                            className="mt-1 "
                            placeholder="Search trainer here"
                            onChange={(e) => handleSearchTrainer(e)}
                            onFocus={() => {
                              setOnFocusTrainer(true);
                              setDataTrainer(getActiveTrainer);
                            }}
                            ref={refTrainer}
                            value={searchTrainer}
                            disabled={mutation.isPending}
                          />

                          {onFocusTrainer && (
                            <ul className="absolute z-50 h-60 overflow-y-auto w-full bg-white border border-gray-200 rounded-md">
                              {dataTrainer?.length > 0 ? (
                                dataTrainer?.map((item, key) => (
                                  <button
                                    type="button"
                                    className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                                    key={key}
                                    onClick={() => handleClickTrainer(item)}
                                  >
                                    {item.trainer_fname} {item.trainer_lname} (
                                    {item.trainer_email === ""
                                      ? "No email provided."
                                      : item.trainer_email}
                                    )
                                  </button>
                                ))
                              ) : (
                                <li className=" p-2 w-full text-center bg-white focus:bg-gray-200 border-b border-white">
                                  <NoData />
                                </li>
                              )}
                            </ul>
                          )}
                        </>
                      )}
                    </div>

                    <div className="relative mb-6">
                      <InputSelect
                        label="Role"
                        name="user_other_role_id"
                        disabled={
                          mutation.isPending ||
                          (searchTrainer === "" && !itemEdit)
                        }
                        onChange={(e) => e}
                      >
                        <optgroup label="Select role">
                          <option value="" hidden></option>
                          {getNonDeveloperAndNonTraineeRole?.length > 0 ? (
                            getNonDeveloperAndNonTraineeRole?.map(
                              (item, key) => {
                                return (
                                  <option key={key} value={item.role_aid}>
                                    {item.role_name}
                                  </option>
                                );
                              }
                            )
                          ) : (
                            <option value="" disabled>
                              No data
                            </option>
                          )}
                        </optgroup>
                      </InputSelect>
                    </div>

                    {itemEdit && (
                      <p className="m-0">
                        <span className="font-bold">Note:</span> You can change
                        the name and email of this user in{" "}
                        <Link
                          to={`${devNavUrl}/developer/settings/trainer`}
                          className="text-primary underline"
                          title="Go to this page."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          trainer
                        </Link>{" "}
                        page.
                      </p>
                    )}
                    <div className="modal__action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit relative"
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

export default ModalAddUserMain;
