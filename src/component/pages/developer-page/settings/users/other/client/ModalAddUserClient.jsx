import useQueryData from "@/component/custom-hooks/useQueryData";
import NoData from "@/component/partials/NoData";
import FetchingSpinner from "@/component/partials/spinners/FetchingSpinner";
import TableSpinner from "@/component/partials/spinners/TableSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import {
  setError,
  setIsAccountUpdated,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import { InputText } from "../../../../../../helpers/FormInputs";
import {
  apiVersion,
  handleEscape,
} from "../../../../../../helpers/functions-general";
import { queryData } from "../../../../../../helpers/queryData";
import ModalWrapperSide from "../../../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";

const ModalAddUserClient = ({ itemEdit, roles }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [emailMessage, setEmailMessage] = React.useState("");
  const [animate, setAnimate] = React.useState("translate-x-full");

  const [searchValue, setSearchValue] = React.useState("");
  const [clientData, setClientData] = React.useState({});
  const [inputVal, setInputVal] = React.useState("");
  const [onSearch, setOnSearch] = React.useState(false);
  const [onFocus, setOnFocus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const refClient = React.useRef();

  const getClientRole = roles?.data.filter((item) => item.role_is_client === 1);

  const queryClient = useQueryClient();

  const {
    isLoading: clientLoading,
    isFetching: clientFetching,
    data: client,
  } = useQueryData(
    "/v1/client/search-active-client", // endpoint
    "post", // method
    "client-search-active-client", // key
    { searchValue: inputVal },
    { searchValue: inputVal }
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${apiVersion}/user-client`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user-client"] });

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
    search: "",
  };

  const yupSchema = Yup.object({
    // search: Yup.string().required("Required"),
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

  const handleChangeClient = (e) => {
    setLoading(true);
    setSearchValue(e.target.value);
    setOnFocus(true);
    setClientData({});

    if (e.target.value === "") {
      setLoading(false);
      setOnFocus(true);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setInputVal(val);
        return;
      }

      setInputVal(val);
      setOnSearch(true);
      setLoading(false);
    }, 400);
  };

  const handleClickClient = (item) => {
    console.log(item);
    setSearchValue(item.clientFullname);
    setClientData(item);
  };

  const handleClickOutside = (e) => {
    if (
      refClient.current !== undefined &&
      refClient.current !== null &&
      !refClient.current.contains(e.target)
    ) {
      setOnFocus(false);
    }
  };

  console.log(Object.keys(clientData));

  React.useEffect(() => {
    setAnimate("");

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <ModalWrapperSide
        handleClose={handleClose}
        className={`transition-all ease-in-out transform duration-200 ${animate}`}
        // onClick={handleClickOutside}
      >
        <div className="modal_header relative">
          <h3 className="text-black text-sm">
            {itemEdit ? "Update" : "Add"} Client User
          </h3>
          <button
            type="button"
            className="absolute top-0 right-0"
            onClick={handleClose}
            disabled={mutation.isPending}
          >
            <FaTimesCircle className="text-gray-400 text-lg" />
          </button>
        </div>

        <div className="modal_body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              if (Object.keys(clientData).length === 0) {
                dispatch(setError(true));
                dispatch(setMessage("Please select a client"));
                return;
              }
              // mutate data
              mutation.mutate({
                ...values,
                user_other_fname: clientData.client_fname,
                user_other_lname: clientData.client_lname,
                user_other_email: clientData.client_email,
                user_other_role_id: getClientRole[0].role_aid,
              });
              // mutate data
              console.log({
                ...values,
                user_other_fname: clientData.client_fname,
                user_other_lname: clientData.client_lname,
                user_other_email: clientData.client_email,
                user_other_role_id: getClientRole[0].role_aid,
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mt-5 mb-6">
                      <InputText
                        label="Select Client"
                        type="text"
                        name="search"
                        disabled={
                          mutation.isLoading ||
                          (!onSearch && (clientLoading || clientFetching))
                        }
                        onChange={(e) => handleChangeClient(e)}
                        onFocus={() => setOnFocus(true)}
                        refVal={refClient}
                        value={
                          !onSearch && (clientLoading || clientFetching)
                            ? "Loading..."
                            : searchValue
                        }
                      />

                      {onFocus && (
                        <ul className="absolute z-50 h-48 overflow-y-auto w-full bg-white border border-gray-200 rounded-md overflow-visible">
                          {loading || clientFetching ? (
                            <FetchingSpinner />
                          ) : client?.count > 0 ? (
                            client?.data.map((item, key) => (
                              <button
                                type="button"
                                className="leading-loose h-fit pl-3 text-xs pr-3 w-full text-left break-all bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                                key={key}
                                onClick={() => handleClickClient(item)}
                              >
                                {item.clientFullname} (
                                {item.client_email === ""
                                  ? "No email yet"
                                  : item.client_email}
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

                    {/* <div className="relative mt-5 mb-6">
                      <InputText
                        label="First name"
                        type="text"
                        name="user_other_fname"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Last name"
                        name="user_other_lname"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="relative mb-6">
                      <InputText
                        label="Email address"
                        type="text"
                        name="user_other_email"
                        disabled={mutation.isPending}
                      />
                    </div> */}

                    {/* <div className="relative mb-6">
                      <p className="flex gap-1">
                        <span className="w-8 text-primary">Role:</span>
                        <span>{getClientRole[0].role_name}</span>
                      </p>
                    </div> */}

                    <div className="modal__action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6">
                      <button
                        type="submit"
                        disabled={
                          (mutation.isPending || !props.dirty) &&
                          Object.keys(clientData).length === 0
                        }
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

export default ModalAddUserClient;
