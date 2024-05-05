import ViewCar from "@/component/pages/developer-page/car/view-car/ViewCar";
import CarCogs from "@/component/pages/developer-page/car/view-car/car-cogs/CarCogs";
import CarDirectDelivery from "@/component/pages/developer-page/car/view-car/car-direct-delivery/CarDirectDelivery";
import CarHistory from "@/component/pages/developer-page/car/view-car/car-history/CarHistory";
import CarOfficeSupport from "@/component/pages/developer-page/car/view-car/car-office-support/CarOfficeSupport";
import CarProfitAndLoss from "@/component/pages/developer-page/car/view-car/car-profit-and-loss/CarProfitAndLoss";
import CarTotals from "@/component/pages/developer-page/car/view-car/car-total/totals/CarTotals";
import NadaDepreciationWithAdd from "@/component/pages/developer-page/car/view-car/nada-depreciation-with-add/NadaDepreciationWithAdd";
import ClientViewInfo from "@/component/pages/developer-page/client/view-info/ClientViewInfo";
import ClientCar from "@/component/pages/developer-page/client/view-info/car/ClientCar";
import ClientEarnings from "@/component/pages/developer-page/client/view-info/earnings/ClientEarnings";
import ClientProfile from "@/component/pages/developer-page/client/view-info/profile/ClientProfile";
import RecordsFiles from "@/component/pages/developer-page/client/view-info/records-files/RecordsFiles";
import Calculator from "@/component/pages/developer-page/earning/calculator/Calculator";
import Details from "@/component/pages/developer-page/earning/details/Details";
import CurrentCostWithAdd from "@/component/pages/developer-page/settings/current-cost-with-add/CurrentCostWithAdd";
import CurrentCost from "@/component/pages/developer-page/settings/current-cost/CurrentCost";
import SettingsExpense from "@/component/pages/developer-page/settings/expense/SettingsExpense";
import Cogs from "@/component/pages/developer-page/settings/expense/cogs/Cogs";
import DirectDelivery from "@/component/pages/developer-page/settings/expense/direct-delivery/DirectDelivery";
import OfficeSupport from "@/component/pages/developer-page/settings/expense/office-support/OfficeSupport";
import History from "@/component/pages/developer-page/settings/history/History";
import ProfitAndLoss from "@/component/pages/developer-page/settings/profit-and-loss/ProfitAndLoss";
import Quicklink from "@/component/pages/developer-page/settings/quick-link/Quicklink";
import TotalsLinks from "@/component/pages/developer-page/settings/totals/TotalsLinks";
import PurchaseDocument from "@/component/pages/developer-page/settings/totals/purchase-document/PurchaseDocument";
import PurchaseFinanced from "@/component/pages/developer-page/settings/totals/purchase-financed/PurchaseFinanced";
import TotalCarRentalValue from "@/component/pages/developer-page/settings/totals/total-car-rental-value/TotalCarRentalValue";
import TotalCarValue from "@/component/pages/developer-page/settings/totals/total-car-value/TotalCarValue";
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
    path: `${devNavUrl}/${developerPath}/settings/expense`,
    element: (
      <ProtectedRouteSystem>
        <SettingsExpense />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/expense/direct-delivery`,
    element: (
      <ProtectedRouteSystem>
        <DirectDelivery />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/expense/cogs`,
    element: (
      <ProtectedRouteSystem>
        <Cogs />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/expense/office-support`,
    element: (
      <ProtectedRouteSystem>
        <OfficeSupport />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/profit-and-loss`,
    element: (
      <ProtectedRouteSystem>
        <ProfitAndLoss />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/current-cost-with-add`,
    element: (
      <ProtectedRouteSystem>
        <CurrentCostWithAdd />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/current-cost`,
    element: (
      <ProtectedRouteSystem>
        <CurrentCost />
      </ProtectedRouteSystem>
    ),
  },
  // {
  //   path: `${devNavUrl}/${developerPath}/settings/expenses`,
  //   element: (
  //     <ProtectedRouteSystem>
  //       <Expenses />
  //     </ProtectedRouteSystem>
  //   ),
  // },
  // {
  //   path: `${devNavUrl}/${developerPath}/settings/income-category`,
  //   element: (
  //     <ProtectedRouteSystem>
  //       <IncomeCategory />
  //     </ProtectedRouteSystem>
  //   ),
  // },
  // {
  //   path: `${devNavUrl}/${developerPath}/settings/income-item`,
  //   element: (
  //     <ProtectedRouteSystem>
  //       <IncomeItem />
  //     </ProtectedRouteSystem>
  //   ),
  // },

  {
    path: `${devNavUrl}/${developerPath}/settings/quick-link`,
    element: (
      <ProtectedRouteSystem>
        <Quicklink />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/${developerPath}/settings/history`,
    element: (
      <ProtectedRouteSystem>
        <History />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/totals`,
    element: (
      <ProtectedRouteSystem>
        <TotalsLinks />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/settings/totals/purchase-documents`,
    element: (
      <ProtectedRouteSystem>
        <PurchaseDocument />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/${developerPath}/settings/totals/purchase-financed`,
    element: (
      <ProtectedRouteSystem>
        <PurchaseFinanced />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/${developerPath}/settings/totals/total-car-value`,
    element: (
      <ProtectedRouteSystem>
        <TotalCarValue />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/${developerPath}/settings/totals/total-car-rental-value`,
    element: (
      <ProtectedRouteSystem>
        <TotalCarRentalValue />
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
    path: `${devNavUrl}/${developerPath}/car/view-car`,
    element: (
      <ProtectedRouteSystem>
        <ViewCar />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car/view-car/profit-and-loss`,
    element: (
      <ProtectedRouteSystem>
        <CarProfitAndLoss />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car/view-car/direct-delivery`,
    element: (
      <ProtectedRouteSystem>
        <CarDirectDelivery />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car/view-car/cogs`,
    element: (
      <ProtectedRouteSystem>
        <CarCogs />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car/view-car/office-support`,
    element: (
      <ProtectedRouteSystem>
        <CarOfficeSupport />
      </ProtectedRouteSystem>
    ),
  },

  {
    path: `${devNavUrl}/${developerPath}/car/view-car/history`,
    element: (
      <ProtectedRouteSystem>
        <CarHistory />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car/view-car/nada-depreciation-with-add`,
    element: (
      <ProtectedRouteSystem>
        <NadaDepreciationWithAdd />
      </ProtectedRouteSystem>
    ),
  },
  {
    path: `${devNavUrl}/${developerPath}/car/view-car/totals`,
    element: (
      <ProtectedRouteSystem>
        <CarTotals />
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
    path: `${devNavUrl}/${developerPath}/earnings-calculator`,
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
