import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaQuestion, FaTimesCircle } from "react-icons/fa";
import {
  setError,
  setIsAccountUpdated,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { queryData } from "../../../helpers/queryData";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalConfirmPasswordChange = ({
  initVal,
  setChangePassword,
  setChangePasswordSuccess,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/v1/account/developer/update-password`, "put", values),
    onSuccess: (data, values) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["account-password"] });
      // show success box
      if (data.success) {
        values.current_password = "";
        values.new_password = "";
        values.confirm_password = "";
        setChangePassword(false);
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            "You password has been successfully changed, you will automatically be logged out."
          )
        );
        dispatch(setIsAccountUpdated(true));
        localStorage.removeItem("ushristoken");
        return;
      }
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        return;
      }
    },
  });

  const handleClose = () => {
    setShow("");
    setTimeout(() => {
      setChangePassword(false);
    }, 200);
  };

  const handleYes = () => {
    mutation.mutate({ ...initVal });
  };

  return (
    <div
      className={`modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-dark z-50 animate-fadeIn ${show}`}
    >
      <div className="p-1 w-[350px] rounded-b-2xl animate-slideUp ">
        <div className="flex justify-end items-center bg-white p-3 pb-0 rounded-t-2xl">
          <button
            type="button"
            className="text-primary text-base"
            onClick={handleClose}
          >
            <FaTimesCircle className={"fill-primary"} />
          </button>
        </div>
        <div className="bg-white p-4 rounded-b-2xl text-center ">
          <span className="text-5xl text-red-700">
            <FaQuestion className="my-0 mx-auto animate-shake" />
          </span>
          <span className="text-sm font-bold">
            {" "}
            Are you sure you want to change your password?
          </span>
          <br />
          <div className="flex items-center gap-1 pt-8">
            <button
              type="submit"
              className="btn-modal-cancel"
              disabled={mutation.isPending}
              onClick={handleYes}
            >
              {mutation.isPending ? <ButtonSpinner /> : "Confirm"}
            </button>
            <button
              type="reset"
              className="btn-modal-submit"
              disabled={mutation.isPending}
              onClick={handleClose}
              id="btnClose"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmPasswordChange;
