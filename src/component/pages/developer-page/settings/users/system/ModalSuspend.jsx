import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import {
  setError,
  setIsArchive,
  setMessage,
  setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  devNavUrl,
  handleEscape,
} from "../../../../../helpers/functions-general";
import { queryData } from "../../../../../helpers/queryData";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalSuspend = ({ mysqlApiArchive, msg, item, queryKey }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiArchive, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        dispatch(setIsArchive(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record successfully suspend.`));

        setTimeout(() => {
          if (
            item === store.credentials.data.user_system_email &&
            store.credentials.data.role_is_developer === 1
          ) {
            localStorage.removeItem("fcatoken");
            window.location.replace(`${devNavUrl}/developer/login`);
            return;
          }
        }, 1000);
        localStorage.removeItem("ftctoken");
      }
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        return;
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      isActive: 0,
    });
  };

  const handleClose = () => {
    dispatch(setIsArchive(false));
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full animate-fadeIn">
        <div className="p-1 w-[350px] animate-slideUp">
          <div className="bg-white p-6 pt-10 text-center rounded-lg">
            <FaQuestion className="my-2 mx-auto animate-bounce h-11 w-11 text-red-700" />
            <p className="text-sm">
              {item === store.credentials.data.user_system_email &&
              store.credentials.data.role_is_developer === 1
                ? "Suspending your own account will make you unable to login and use the system. You will also be automatically logged out. Do you still want to proceed?"
                : msg}
            </p>
            <div className="flex items-center gap-1 pt-8">
              <button
                type="submit"
                className="btn-modal-submit"
                disabled={mutation.isPending}
                onClick={handleYes}
              >
                {mutation.isPending ? <ButtonSpinner /> : "Yes, Confirm"}
              </button>
              <button
                type="reset"
                className="btn-modal-cancel"
                disabled={mutation.isPending}
                onClick={handleClose}
                autoFocus
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuspend;
