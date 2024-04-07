import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import {
  setError,
  setIsAccountUpdated,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { apiVersion } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalConfirmPasswordChange = ({ initVal, setChangePassword }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const [show, setShow] = React.useState("show");
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        store.credentials.data.role_is_developer === 1
          ? `${apiVersion}/account/system/update-password`
          : `${apiVersion}/account/other/update-password`,
        "put",
        values
      ),
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
            "You password has been successfuly changed, you will be automatically logout."
          )
        );
        dispatch(setIsAccountUpdated(true));
        localStorage.removeItem("fbastoken");

        return;
      }
      // show error box
      if (!data.success) {
        setChangePassword(false);
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
    }, 300);
  };
  const handleYes = () => {
    mutation.mutate({ ...initVal });
  };

  return (
    <div className="bg-dark/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full animate-fadeIn">
      <div className="p-1 w-[350px] animate-slideUp">
        <div className="bg-white p-6 pt-10 text-center rounded-lg">
          <FaQuestion className="my-2 mx-auto animate-bounce h-11 w-11 text-red-700" />
          <p className="text-sm">
            Are you sure you want to change your password?
          </p>
          <div className="flex items-center gap-1 pt-8">
            <button
              type="submit"
              className="btn-modal-submit"
              disabled={mutation.isLoading}
              onClick={handleYes}
              autoFocus
            >
              {mutation.isLoading ? <ButtonSpinner /> : "Yes, Confirm"}
            </button>
            <button
              type="reset"
              className="btn-modal-cancel"
              disabled={mutation.isLoading}
              onClick={handleClose}
            >
              No, Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmPasswordChange;
