import { adminPath, devNavUrl } from "../component/helpers/functions-general";
import ProtectedRouteOther from "../component/pages/access/ProtectedRouteOther";
import Account from "../component/pages/developer-page/account/Account";
import Car from "../component/pages/developer-page/car/Car";
import Client from "../component/pages/developer-page/client/Client";
import Earning from "../component/pages/developer-page/earning/Earning";
import Maintenance from "../component/pages/developer-page/maintenance/Maintenance";
import CarMake from "../component/pages/developer-page/settings/car-make/CarMake";
import Expenses from "../component/pages/developer-page/settings/expenses/Expenses";
import IncomeCategory from "../component/pages/developer-page/settings/income-category/IncomeCategory";
import IncomeItem from "../component/pages/developer-page/settings/income-item/IncomeItem";
import Representative from "../component/pages/developer-page/settings/representatives/Representative";
import Other from "../component/pages/developer-page/settings/users/other/Other";
import UserClient from "../component/pages/developer-page/settings/users/other/client/UserClient";
import UserMain from "../component/pages/developer-page/settings/users/other/main/UserMain";

export const routesAdmin = [
  {
    path: `${devNavUrl}/${adminPath}/account`,
    element: (
      <ProtectedRouteOther>
        <Account />
      </ProtectedRouteOther>
    ),
  },
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
  {
    path: `${devNavUrl}/${adminPath}/settings/user/client`,
    element: (
      <ProtectedRouteOther>
        <UserClient />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/client`,
    element: (
      <ProtectedRouteOther>
        <Client />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/car`,
    element: (
      <ProtectedRouteOther>
        <Car />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/earnings`,
    element: (
      <ProtectedRouteOther>
        <Earning />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/settings/car-make`,
    element: (
      <ProtectedRouteOther>
        <CarMake />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/settings/representatives`,
    element: (
      <ProtectedRouteOther>
        <Representative />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/settings/expenses`,
    element: (
      <ProtectedRouteOther>
        <Expenses />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/settings/income-category`,
    element: (
      <ProtectedRouteOther>
        <IncomeCategory />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/settings/income-item`,
    element: (
      <ProtectedRouteOther>
        <IncomeItem />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/${adminPath}/maintenance`,
    element: (
      <ProtectedRouteOther>
        <Maintenance />
      </ProtectedRouteOther>
    ),
  },
];
