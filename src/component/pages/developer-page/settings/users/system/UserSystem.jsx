import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
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
    "/v1/roles", // endpoint
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
        className={`relative min-h-screen print:!p-4 pt-[4.2rem] ml-0 px-5 lg:px-10 md:px-10 transition-all ease-in duration-200 ${
          store.isShow && "ml-48"
        }`}
      >
        <div className="flex items-start justify-between mt-1 ml-4 md:ml-0 print:hidden">
          <div className="flex flex-col justify-center">
            <BreadCrumbs param={location.search} />
            <h4 className="text-base my-3">System</h4>
          </div>
          <div className="flex items-center gap-1 print:invisible">
            <button type="button" className="btn-primary" onClick={handleAdd}>
              <FaPlusCircle />
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
