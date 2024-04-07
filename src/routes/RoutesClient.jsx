import Account from "@/component/pages/client-page/account/Account";
import ClientCar from "@/component/pages/client-page/cars/ClientCar";
import Earning from "@/component/pages/client-page/earning/Earning";
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
    path: `${devNavUrl}/${clientPath}/earnings`,
    element: (
      <ProtectedRouteOther>
        <Earning />
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
