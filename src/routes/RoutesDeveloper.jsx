import {
  devNavUrl,
  developerPath,
} from "../component/helpers/functions-general";
import ProtectedRouteSystem from "../component/pages/access/ProtectedRouteSystem";
import Maintenance from "../component/pages/developer-page/maintenance/Maintenance";
import Users from "../component/pages/developer-page/settings/users/Users";
import Other from "../component/pages/developer-page/settings/users/other/Other";
import UserMain from "../component/pages/developer-page/settings/users/other/main/UserMain";
import Roles from "../component/pages/developer-page/settings/users/roles/Roles";
import UserSystem from "../component/pages/developer-page/settings/users/system/UserSystem";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${developerPath}/settings/user`,
    element: (
      <ProtectedRouteSystem>
        <Users />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/user/role`,
    element: (
      <ProtectedRouteSystem>
        <Roles />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/user/system`,
    element: (
      <ProtectedRouteSystem>
        <UserSystem />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/user/other`,
    element: (
      <ProtectedRouteSystem>
        <Other />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/user/other/staff`,
    element: (
      <ProtectedRouteSystem>
        <UserMain />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/maintenance`,
    element: (
      <ProtectedRouteSystem>
        <Maintenance />
      </ProtectedRouteSystem>
    ),
  },
];
