import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import {
  setError,
  setIsRestore,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { GetFocus, handleEscape } from "../../helpers/functions-general";
import { queryData } from "../../helpers/queryData";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalRestore = ({ mysqlApiRestore, msg, item, queryKey, successMsg }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [show, setShow] = React.useState("show");
  const queryClient = useQueryClient();
  GetFocus("btnClose");

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiRestore, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsRestore(false));

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage(successMsg));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      isActive: 1,
      item: item,
    });
  };

  const handleClose = () => {
    setShow("");
    setTimeout(() => {
      dispatch(setIsRestore(false));
    }, 200);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div
        className={`modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-dark z-50 animate-fadeIn ${show}`}
      >
        <div className="p-1 w-[350px] animate-slideUp">
          <div className="bg-white p-6 pt-10 text-center rounded-lg">
            <FaQuestion className="my-2 mx-auto animate-bounce h-11 w-11 text-red-700" />
            <p className="text-sm">{msg}</p>
            <span className="text-sm font-bold underline">{item}</span>
            <div className="flex items-center gap-1 pt-8">
              <button
                type="submit"
                className="btn-modal-submit"
                disabled={mutation.isPending}
                onClick={handleYes}
              >
                {mutation.isPending ? <ButtonSpinner /> : "Confirm"}
              </button>
              <button
                type="reset"
                className="btn-modal-cancel"
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

export default ModalRestore;
