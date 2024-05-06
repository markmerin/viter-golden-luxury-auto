import { getCarExpensesByYearMonth } from "./function-car-management-and-car-owner-split";

const CarManagementAndCarOwnerSplitReadAndUpdateAction = ({
  item,
  carProfitAndLoss,
  handleEdit,
}) => {
  let totalRow = 0;
  const perMonthData = {
    january: getCarExpensesByYearMonth(item, carProfitAndLoss, 0),
    february: getCarExpensesByYearMonth(item, carProfitAndLoss, 1),
    march: getCarExpensesByYearMonth(item, carProfitAndLoss, 2),
    april: getCarExpensesByYearMonth(item, carProfitAndLoss, 3),
    may: getCarExpensesByYearMonth(item, carProfitAndLoss, 4),
    june: getCarExpensesByYearMonth(item, carProfitAndLoss, 5),
    july: getCarExpensesByYearMonth(item, carProfitAndLoss, 6),
    august: getCarExpensesByYearMonth(item, carProfitAndLoss, 7),
    september: getCarExpensesByYearMonth(item, carProfitAndLoss, 8),
    october: getCarExpensesByYearMonth(item, carProfitAndLoss, 9),
    november: getCarExpensesByYearMonth(item, carProfitAndLoss, 10),
    december: getCarExpensesByYearMonth(item, carProfitAndLoss, 11),
  };

  totalRow = (
    Number(perMonthData.january.amount) +
    Number(perMonthData.february.amount) +
    Number(perMonthData.march.amount) +
    Number(perMonthData.april.amount) +
    Number(perMonthData.may.amount) +
    Number(perMonthData.june.amount) +
    Number(perMonthData.july.amount) +
    Number(perMonthData.august.amount) +
    Number(perMonthData.september.amount) +
    Number(perMonthData.october.amount) +
    Number(perMonthData.november.amount) +
    Number(perMonthData.december.amount)
  ).toFixed(2);

  return (
    <>
      <td
        className={`text-right ${
          Number(perMonthData.january.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.january.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.january)
        }
      >
        {perMonthData.january.amount}
      </td>

      <td
        className={`text-right ${
          Number(perMonthData.february.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.february.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.february)
        }
      >
        {perMonthData.february.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.march.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.march.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.march)
        }
      >
        {perMonthData.march.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.april.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.april.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.april)
        }
      >
        {perMonthData.april.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.may.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.may.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.may)
        }
      >
        {perMonthData.may.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.june.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.june.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.june)
        }
      >
        {perMonthData.june.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.july.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.july.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.july)
        }
      >
        {perMonthData.july.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.august.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.august.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.august)
        }
      >
        {perMonthData.august.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.september.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.september.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.september)
        }
      >
        {perMonthData.september.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.october.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.october.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.october)
        }
      >
        {perMonthData.october.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.november.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.november.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.november)
        }
      >
        {perMonthData.november.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.december.car_profit_and_loss_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.december.car_profit_and_loss_aid) > 0 &&
          handleEdit(perMonthData.december)
        }
      >
        {perMonthData.december.amount}
      </td>
      <td className="text-right">{totalRow}</td>
    </>
  );
};

export default CarManagementAndCarOwnerSplitReadAndUpdateAction;
