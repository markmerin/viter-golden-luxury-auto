import React from "react";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  isDemoMode,
} from "../../../../../helpers/functions-general";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Footer from "../../../../../partials/Footer";
import Header from "../../../../../partials/Header";
import PageNotFound from "../../../../../partials/PageNotFound";
import ModalError from "../../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../../partials/modals/ModalSuccess";
import Navigation from "../../../Navigation";
import ModalAddUserSystem from "./ModalAddUserSystem";
import UserSystemList from "./UserSystemList";

const UserSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: roles } = useQueryData(
    `${apiVersion}/roles`, // endpoint
    "get", // method
    "system-role" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <Navigation menu="settings" submenu="users" />
      <div
        className={`wrapper ${store.isShow && "ml-48"} ${
          isDemoMode === 1 && "min-h-[calc(100vh-36px)]"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base my-3 capitalize">
              {location.pathname.split("/").pop().replaceAll("-", " ")}
            </h4>
          </div>
          <div className="flex items-center gap-1 print:invisible">
            <button type="button" className="btn-primary" onClick={handleAdd}>
              <FaPlus />
              <span>Add</span>
            </button>
          </div>
        </div>
        <hr />

        <div className="w-full pt-5 pb-4 ">
          <UserSystemList setItemEdit={setItemEdit} />
        </div>
        <Footer />
      </div>

      {store.isAdd && <ModalAddUserSystem itemEdit={itemEdit} roles={roles} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default UserSystem;
