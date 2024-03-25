import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import {
  setIsAdd,
  setIsSettingsOpen,
} from "../../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../../store/StoreContext";
import useQueryData from "../../../../../../custom-hooks/useQueryData";
import BreadCrumbs from "../../../../../../partials/BreadCrumbs";
import Footer from "../../../../../../partials/Footer";
import Header from "../../../../../../partials/Header";
import PageNotFound from "../../../../../../partials/PageNotFound";
import ModalError from "../../../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../../../partials/modals/ModalSuccess";
import Navigation from "../../../../Navigation";
import ModalAddUserMain from "./ModalAddUserMain";
import UserMainList from "./UserMainList";

const UserMain = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: roles } = useQueryData(
    "/v1/roles", // endpoint
    "get", // method
    "other-role" // key
  );

  const { data: trainer } = useQueryData(
    "/v1/trainer", // endpoint
    "get", // method
    "other-user-trainer" // key
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
            <h4 className="text-xl flex">Settings</h4>
            <BreadCrumbs param={location.search} />
          </div>
          <div className="flex items-center gap-1 print:invisible">
            <button type="button" className="btn-primary" onClick={handleAdd}>
              <FaPlusCircle />
              <span>Add</span>
            </button>
          </div>
        </div>
        <hr />

        <div className="w-full pt-5 pb-4 relative">
          <UserMainList setItemEdit={setItemEdit} />
        </div>
        <Footer />
      </div>

      {store.isAdd && (
        <ModalAddUserMain itemEdit={itemEdit} roles={roles} trainer={trainer} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default UserMain;
