import Account from "@/component/pages/client-page/account/Account";
import ClientCar from "@/component/pages/client-page/cars/ClientCar";
import Calculator from "@/component/pages/client-page/earning/calculator/Calculator";
import Details from "@/component/pages/client-page/earning/details/Details";
import ClientProfile from "@/component/pages/client-page/profile/ClientProfile";
import RecordFiles from "@/component/pages/client-page/record-and-files/RecordFiles";
import { clientPath, devNavUrl } from "../component/helpers/functions-general";
import ProtectedRouteOther from "../component/pages/access/ProtectedRouteOther";

export const routesClient = [
  {
    path: `${devNavUrl}/${clientPath}/account`,
    element: (
      <ProtectedRouteOther>
        <Account />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${clientPath}/profile`,
    element: (
      <ProtectedRouteOther>
        <ClientProfile />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${clientPath}/cars`,
    element: (
      <ProtectedRouteOther>
        <ClientCar />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${clientPath}/earnings/details`,
    element: (
      <ProtectedRouteOther>
        <Details />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${clientPath}/earnings-calculator`,
    element: (
      <ProtectedRouteOther>
        <Calculator />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${clientPath}/record-and-files`,
    element: (
      <ProtectedRouteOther>
        <RecordFiles />
      </ProtectedRouteOther>
    ),
  },
];
