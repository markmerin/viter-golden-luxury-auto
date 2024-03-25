import React from "react";
import { StoreReducer } from "./StoreReducer";

const initVal = {
  error: false,
  info: false,
  success: false,
  isSave: false,
  isShow: true,
  isArchive: false,
  isRestore: false,
  isDelete: false,
  isAdd: false,
  isSearch: false,
  isCreatePassSuccess: false,
  isForgotPassSuccess: false,
  isLogin: false,
  isLogout: false,
  isAccountUpdated: false,
  credentials: {},
  isSettingsOpen: false,
  scrollPosition: 0,
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
