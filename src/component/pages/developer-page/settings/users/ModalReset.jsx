import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaQuestion, FaTimesCircle } from "react-icons/fa";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { GetFocus, handleEscape } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const ModalReset = ({ setReset, mysqlApiReset, msg, item, queryKey }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiReset, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      setReset(false);

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(
          setMessage("Please check your email to continue resetting password.")
        );
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      item: item,
    });
  };

  const handleClose = () => {
    setReset(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full animate-fadeIn">
        <div className="p-1 w-[350px] animate-slideUp">
          <div className="bg-white p-6 pt-10 text-center rounded-lg">
            <FaQuestion className="my-2 mx-auto animate-bounce h-11 w-11 text-red-700" />
            <p className="text-sm">{msg}</p>
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

export default ModalReset;
