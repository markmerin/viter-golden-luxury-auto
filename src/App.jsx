import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  devNavUrl,
  developerPath,
} from "./component/helpers/functions-general";
import CreatePasswordOther from "./component/pages/access/create-password/CreatePasswordOther";
import CreatePasswordSystem from "./component/pages/access/create-password/CreatePasswordSystem";
import ForgotPasswordOther from "./component/pages/access/forgot-password/ForgotPasswordOther";
import ForgotPasswordSystem from "./component/pages/access/forgot-password/ForgotPasswordSystem";
import OtherLogin from "./component/pages/access/login/OtherLogin";
import SystemLogin from "./component/pages/access/login/SystemLogin";
import VerifyEmailOtherUser from "./component/pages/access/verify-email/VerifyEmailOtherUser";
import VerifyEmailSystemUser from "./component/pages/access/verify-email/VerifyEmailSystemUser";
import PageNotFound from "./component/partials/PageNotFound";
import { routesAdmin } from "./routes/RoutesAdmin";
import { routesClient } from "./routes/RoutesClient";
import { routesDeveloper } from "./routes/RoutesDeveloper";
import { StoreProvider } from "./store/StoreContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            {/* ACCESS PAGE */}
            <Route
              path={`${devNavUrl}/${developerPath}/login`}
              element={<SystemLogin />}
            />
            <Route
              path={`${devNavUrl}/${developerPath}/forgot-password`}
              element={<ForgotPasswordSystem />}
            />
            <Route
              path={`${devNavUrl}/${developerPath}/create-password`}
              element={<CreatePasswordSystem />}
            />
            <Route
              path={`${devNavUrl}/${developerPath}/verify-email`}
              element={<VerifyEmailSystemUser />}
            />
            <Route path={`${devNavUrl}/login`} element={<OtherLogin />} />
            <Route
              path={`${devNavUrl}/forgot-password`}
              element={<ForgotPasswordOther />}
            />
            <Route
              path={`${devNavUrl}/other/create-password`}
              element={<CreatePasswordOther />}
            />
            <Route
              path={`${devNavUrl}/other/verify-email`}
              element={<VerifyEmailOtherUser />}
            />

            {/* SYSTEM USER ROUTE */}
            {routesDeveloper.map(({ ...routeProps }, key) => {
              return <Route key={key} {...routeProps} />;
            })}

            {/* ADMIN USER ROUTE */}
            {routesAdmin.map(({ ...routeProps }, key) => {
              return <Route key={key} {...routeProps} />;
            })}

            {/* CLIENT USER ROUTE */}
            {routesClient.map(({ ...routeProps }, key) => {
              return <Route key={key} {...routeProps} />;
            })}

            <Route path={`*`} element={<PageNotFound />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
