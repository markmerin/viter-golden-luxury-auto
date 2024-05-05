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
          Number(perMonthData.january.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.january.amount) > 0 &&
          handleEdit(perMonthData.january)
        }
      >
        {perMonthData.january.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.february.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.february.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.march.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.march.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.april.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.april.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.may.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.may.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.june.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.june.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.july.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.july.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.august.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.august.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.september.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.september.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.october.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.october.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.november.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.november.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.december.amount) > 0 &&
          "cursor-pointer hover:underline"
        }`}
      >
        {perMonthData.december.amount}
      </td>
      <td className="text-right">{totalRow}</td>
    </>
  );
};

export default CarProfitReadAndUpdateAction;
