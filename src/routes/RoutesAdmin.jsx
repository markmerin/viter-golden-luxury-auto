import { adminPath, devNavUrl } from "../component/helpers/functions-general";
import ProtectedRouteOther from "../component/pages/access/ProtectedRouteOther";
import Other from "../component/pages/developer-page/settings/users/other/Other";
import UserMain from "../component/pages/developer-page/settings/users/other/main/UserMain";

export const routesAdmin = [
  {
    path: `${devNavUrl}/${adminPath}/settings/user`,
    element: (
      <ProtectedRouteOther>
        <Other />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/settings/user/staff`,
    element: (
      <ProtectedRouteOther>
        <UserMain />
      </ProtectedRouteOther>
    ),
  },
];
