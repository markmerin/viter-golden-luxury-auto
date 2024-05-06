import React from "react";
import { getCarProfitAndLostAmountByYearMonth } from "./function-car-profit-and-loss";

const CarProfitReadAndUpdateAction = ({
  item,
  carProfitAndLoss,
  handleEdit,
}) => {
  let totalRow = 0;
  const perMonthData = {
    january: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 0),
    february: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 1),
    march: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 2),
    april: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 3),
    may: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 4),
    june: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 5),
    july: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 6),
    august: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 7),
    september: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 8),
    october: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 9),
    november: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 10),
    december: getCarProfitAndLostAmountByYearMonth(item, carProfitAndLoss, 11),
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

export default CarProfitReadAndUpdateAction;
