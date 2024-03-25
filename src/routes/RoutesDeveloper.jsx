import {
  devNavUrl,
  developerPath,
} from "../component/helpers/functions-general";
import Users from "../component/pages/developer-page/settings/users/Users";
import Roles from "../component/pages/developer-page/settings/users/roles/Roles";
import UserSystem from "../component/pages/developer-page/settings/users/system/UserSystem";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${developerPath}/settings/user`,
    element: (
      // <ProtectedRouteSystem>
      <Users />
    ),
    // </ProtectedRouteSystem>
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/user/role`,
    element: (
      // <ProtectedRouteSystem>
      <Roles />
    ),
    // </ProtectedRouteSystem>
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/user/system`,
    element: (
      // <ProtectedRouteSystem>
      <UserSystem />
    ),
    // </ProtectedRouteSystem>
  },
];
