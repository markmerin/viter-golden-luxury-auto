import React from "react";
import { Navigate } from "react-router-dom";
import { setCredentials } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { apiVersion, devNavUrl } from "../../helpers/functions-general";
import { queryData } from "../../helpers/queryData.jsx";
import PageNotFound from "../../partials/PageNotFound";
import FetchingSpinner from "../../partials/spinners/FetchingSpinner";

const ProtectedRouteOther = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const glatoken = JSON.parse(localStorage.getItem("glatoken"));
  const currentPath =
    location.pathname.split("/")[1] === "dev-app"
      ? location.pathname.split("/")[2]
      : location.pathname.split("/")[1];
  const [pageStatus, setPageStatus] = React.useState(false);

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`${apiVersion}/user-other/token`, "post", {
        token: glatoken.token,
      });

      console.log(login);

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth("123");
        setLoading(false);
        delete login.data.user_other_password;
        delete login.data.role_description;
        delete login.data.role_created;
        delete login.data.role_datetime;
      }

      if (
        !login.success ||
        login.data.role.toLowerCase() !== login.data.role_name.toLowerCase()
      ) {
        setPageStatus(true);
      }
    };

    if (glatoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("glatoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  if (pageStatus) {
    return <PageNotFound />;
  } else {
    return (
      <>
        {loading ? (
          <FetchingSpinner />
        ) : isAuth === "123" ? (
          children
        ) : isAuth === "456" ? (
          <Navigate to={`${devNavUrl}/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteOther;
