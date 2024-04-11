import ClientViewInfo from "@/component/pages/developer-page/client/view-info/ClientViewInfo";
import ClientCar from "@/component/pages/developer-page/client/view-info/car/ClientCar";
import ClientEarnings from "@/component/pages/developer-page/client/view-info/earnings/ClientEarnings";
import ClientProfile from "@/component/pages/developer-page/client/view-info/profile/ClientProfile";
import RecordsFiles from "@/component/pages/developer-page/client/view-info/records-files/RecordsFiles";
import Calculator from "@/component/pages/developer-page/earning/calculator/Calculator";
import Details from "@/component/pages/developer-page/earning/details/Details";
import Quicklink from "@/component/pages/developer-page/settings/quick-link/Quicklink";
import {
  devNavUrl,
  developerPath,
} from "../component/helpers/functions-general";
import ProtectedRouteSystem from "../component/pages/access/ProtectedRouteSystem";
import Account from "../component/pages/developer-page/account/Account";
import Car from "../component/pages/developer-page/car/Car";
import Client from "../component/pages/developer-page/client/Client";
import Maintenance from "../component/pages/developer-page/maintenance/Maintenance";
import CarMake from "../component/pages/developer-page/settings/car-make/CarMake";
import Expenses from "../component/pages/developer-page/settings/expenses/Expenses";
import IncomeCategory from "../component/pages/developer-page/settings/income-category/IncomeCategory";
import IncomeItem from "../component/pages/developer-page/settings/income-item/IncomeItem";
import Representative from "../component/pages/developer-page/settings/representatives/Representative";
import Users from "../component/pages/developer-page/settings/users/Users";
import Other from "../component/pages/developer-page/settings/users/other/Other";
import UserClient from "../component/pages/developer-page/settings/users/other/client/UserClient";
import UserMain from "../component/pages/developer-page/settings/users/other/main/UserMain";
import Roles from "../component/pages/developer-page/settings/users/roles/Roles";
import UserSystem from "../component/pages/developer-page/settings/users/system/UserSystem";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${developerPath}/account`,
    element: (
      <ProtectedRouteSystem>
        <Account />
      </ProtectedRouteSystem>
    ),
  },
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
    path: `${devNavUrl}/${developerPath}/settings/user/other/client`,
    element: (
      <ProtectedRouteSystem>
        <UserClient />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/car-make`,
    element: (
      <ProtectedRouteSystem>
        <CarMake />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/representatives`,
    element: (
      <ProtectedRouteSystem>
        <Representative />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/expenses`,
    element: (
      <ProtectedRouteSystem>
        <Expenses />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/income-category`,
    element: (
      <ProtectedRouteSystem>
        <IncomeCategory />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/income-item`,
    element: (
      <ProtectedRouteSystem>
        <IncomeItem />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/${developerPath}/settings/quick-link`,
    element: (
      <ProtectedRouteSystem>
        <Quicklink />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/client`,
    element: (
      <ProtectedRouteSystem>
        <Client />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/client/view-info`,
    element: (
      <ProtectedRouteSystem>
        <ClientViewInfo />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/client/view-info/profile`,
    element: (
      <ProtectedRouteSystem>
        <ClientProfile />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/client/view-info/car`,
    element: (
      <ProtectedRouteSystem>
        <ClientCar />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/client/view-info/earnings`,
    element: (
      <ProtectedRouteSystem>
        <ClientEarnings />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/client/view-info/records-files`,
    element: (
      <ProtectedRouteSystem>
        <RecordsFiles />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car`,
    element: (
      <ProtectedRouteSystem>
        <Car />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/earnings/details`,
    element: (
      <ProtectedRouteSystem>
        <Details />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/earnings/calculator`,
    element: (
      <ProtectedRouteSystem>
        <Calculator />
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
