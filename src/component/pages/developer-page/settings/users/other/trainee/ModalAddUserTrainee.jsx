import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useQueryData from "../../../../../../custom-hooks/useQueryData";
import { InputSelect } from "../../../../../../helpers/FormInputs";
import { handleEscape } from "../../../../../../helpers/functions-general";
import { queryData } from "../../../../../../helpers/queryData";
import NoData from "../../../../../../partials/NoData";
import ModalWrapperSide from "../../../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";
import TableSpinner from "../../../../../../partials/spinners/TableSpinner";

const ModalAddUserTrainee = ({ roles, batch }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [addBy, setAddBy] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [dataTrainees, setDataTrainees] = React.useState([]);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [onFocusTrainer, setOnFocusTrainer] = React.useState(false);
  const [dataTrainer, setDataTrainer] = React.useState([]);
  const [searchTrainer, setSearchTrainer] = React.useState("");
  const refTrainer = React.useRef();
  const queryClient = useQueryClient();

  const getActiveTraineeRole = roles?.data.filter(
    (item) => item.role_is_trainee === 1 && item.role_is_active === 1
  );
  const getActiveBatch = batch?.data.filter(
    (item) => item.batch_is_active === 1
  );

  const { isLoading, data: allTrainee } = useQueryData(
    "/v1/user-trainee/search-email", // endpoint
    "get", // method
    "user-trainee-search-email" // key
  );

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v1/user-trainee", "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["other-trainee"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            "Successfuly added, please check your email for verification."
          )
        );
        dispatch(setIsAdd(false));
      }
    },
  });

  const initVal = {
    batch_id: "",
    // search: addBy,
    user_other_role_id: getActiveTraineeRole[0].role_aid,
  };

  const yupSchema = Yup.object({
    batch_id: addBy === "batch" && Yup.string().required("Required"),
    // search: addBy === "email" && Yup.string().required("Required"),
  });

  const handleChangeAddBy = (e, props) => {
    setAddBy(e.target.value);
    if (e.target.value === "email") {
      props.values.batch_id = "";
      props.setTouched({
        search: false,
      });
    }
    if (e.target.value === "batch") {
      setSearchTrainer("");
      setEmail("");
      setName("");
      setId("");
      props.values.search = "";
      props.setTouched({
        batch_id: false,
      });
    }
  };

  const handleSearch = (e) => {
    setOnFocusTrainer(true);
    setSearchTrainer(e.target.value);
    const filteredData = allTrainee?.data.filter((entry) =>
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

  const handleClick = (item) => {
    setSearchTrainer(item.trainee_email);
    setEmail(item.trainee_email);
    setName(item.fullname);
    setId(item.trainee_aid);
  };

  const handleSelectBatch = async (e) => {
    const data = await queryData(
      `/v1/user-trainee/batch-trainees/${e.target.value}`,
      "get",
      {}
    );

    if (typeof data === "undefined") {
      dispatch(setError(true));
      dispatch(setMessage(data.error));
      return;
    }

    if (!data.success) {
      dispatch(setError(true));
      dispatch(setMessage(data.error));
      return;
    }

    // console.log(data);

    setDataTrainees(data.data);
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
        {isLoading && <TableSpinner />}
        <div className="modal_header relative">
          <h3 className="text-black text-sm">Add Trainee User</h3>
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-gray-400 text-lg" />
          </button>
        </div>

        <div className="modal_body max-h-[80vh]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log({
              //   ...values,
              //   user_other_id: id,
              //   user_other_name: name,
              //   user_other_email: email,
              //   batch_trainees: dataTrainees,
              // });
              // mutate data
              mutation.mutate({
                ...values,
                user_other_id: id,
                user_other_name: name,
                user_other_email: email,
                batch_trainees: dataTrainees,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mb-6 mt-5">
                      <InputSelect
                        label="Add by"
                        name="add_by"
                        disabled={mutation.isPending}
                        onChange={(e) => handleChangeAddBy(e, props)}
                      >
                        <option value="" hidden></option>
                        <option value="email">Email</option>
                        <option value="batch">Batch</option>
                      </InputSelect>
                    </div>

                    {addBy === "email" && (
                      <>
                        <div className="relative mb-6">
                          <input
                            type="search"
                            placeholder="Search email here"
                            onChange={(e) => handleSearch(e)}
                            onFocus={() => {
                              setOnFocusTrainer(true);
                              setDataTrainer(allTrainee?.data);
                            }}
                            ref={refTrainer}
                            value={searchTrainer}
                            disabled={mutation.isPending}
                          />

                          {onFocusTrainer && (
                            <ul className="absolute z-50 h-60 overflow-y-auto w-full bg-white border border-gray-200 rounded-md ">
                              {dataTrainer?.length > 0 ? (
                                dataTrainer?.map((item, key) => (
                                  <button
                                    type="button"
                                    className="p-1 pl-3 pr-3 w-full text-left break-all bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                                    key={key}
                                    onClick={() => handleClick(item)}
                                  >
                                    {item.fullname} (
                                    {item.trainee_email === ""
                                      ? "No email provided."
                                      : item.trainee_email}
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
                        </div>
                      </>
                    )}

                    {addBy === "batch" && (
                      <div className="relative mb-6">
                        <InputSelect
                          label="Select Batch"
                          name="batch_id"
                          disabled={mutation.isPending}
                          onChange={(e) => handleSelectBatch(e)}
                        >
                          <option value="" hidden></option>
                          {getActiveBatch?.length > 0 ? (
                            getActiveBatch.map((item, key) => {
                              return (
                                <option value={item.batch_aid} key={key}>
                                  {item.batch_number}
                                </option>
                              );
                            })
                          ) : (
                            <option value="" disabled>
                              No data
                            </option>
                          )}
                        </InputSelect>
                      </div>
                    )}

                    <div className="modal__action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6">
                      <button
                        type="submit"
                        disabled={
                          mutation.isPending ||
                          !props.dirty ||
                          (addBy === "email" && name === "")
                        }
                        className="btn-modal-submit relative"
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

export default ModalAddUserTrainee;
