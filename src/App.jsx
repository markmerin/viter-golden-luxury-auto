import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  devNavUrl,
  developerPath,
} from "./component/helpers/functions-general";
import CreatePasswordSystem from "./component/pages/access/create-password/CreatePasswordSystem";
import ForgotPasswordSystem from "./component/pages/access/forgot-password/ForgotPasswordSystem";
import SystemLogin from "./component/pages/access/login/SystemLogin";
import VerifyEmailSystemUser from "./component/pages/access/verify-email/VerifyEmailSystemUser";
import PageNotFound from "./component/partials/PageNotFound";
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

            {/* SYSTEM USER ROUTE */}
            {routesDeveloper.map(({ ...routeProps }, key) => {
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
