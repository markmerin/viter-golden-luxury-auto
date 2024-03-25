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
  const { dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const queryClient = useQueryClient();
  GetFocus("btnClose");

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
    setShow("");
    setTimeout(() => {
      setReset(false);
    }, 200);
  };

  handleEscape(() => handleClose());

  return (
    <>
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
            <span className="text-sm font-bold">{msg}</span>
            <br />
            <span className="text-sm font-bold underline">"{item}"</span>
            {/* <p className="mt-2">
              {validateOwnAccount ? "" : "You can't undo this action."}
            </p> */}
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
    </>
  );
};

export default ModalReset;
