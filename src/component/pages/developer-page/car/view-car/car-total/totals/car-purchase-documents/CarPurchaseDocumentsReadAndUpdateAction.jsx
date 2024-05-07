import React from "react";
import { getCarHistoryAmountByYearMonth } from "./function-car-history";

const CarPurchaseDocumentsReadAndUpdateAction = ({
  item,
  carHistory,
  handleEdit,
}) => {
  let totalRow = 0;
  const perMonthData = {
    january: getCarHistoryAmountByYearMonth(item, carHistory, 0),
    february: getCarHistoryAmountByYearMonth(item, carHistory, 1),
    march: getCarHistoryAmountByYearMonth(item, carHistory, 2),
    april: getCarHistoryAmountByYearMonth(item, carHistory, 3),
    may: getCarHistoryAmountByYearMonth(item, carHistory, 4),
    june: getCarHistoryAmountByYearMonth(item, carHistory, 5),
    july: getCarHistoryAmountByYearMonth(item, carHistory, 6),
    august: getCarHistoryAmountByYearMonth(item, carHistory, 7),
    september: getCarHistoryAmountByYearMonth(item, carHistory, 8),
    october: getCarHistoryAmountByYearMonth(item, carHistory, 9),
    november: getCarHistoryAmountByYearMonth(item, carHistory, 10),
    december: getCarHistoryAmountByYearMonth(item, carHistory, 11),
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
          Number(perMonthData.january.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.january.car_history_aid) > 0 &&
          handleEdit(perMonthData.january)
        }
      >
        {perMonthData.january.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.february.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.february.car_history_aid) > 0 &&
          handleEdit(perMonthData.february)
        }
      >
        {perMonthData.february.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.march.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.march.car_history_aid) > 0 &&
          handleEdit(perMonthData.march)
        }
      >
        {perMonthData.march.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.april.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.april.car_history_aid) > 0 &&
          handleEdit(perMonthData.april)
        }
      >
        {perMonthData.april.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.may.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.may.car_history_aid) > 0 &&
          handleEdit(perMonthData.may)
        }
      >
        {perMonthData.may.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.june.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.june.car_history_aid) > 0 &&
          handleEdit(perMonthData.june)
        }
      >
        {perMonthData.june.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.july.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.july.car_history_aid) > 0 &&
          handleEdit(perMonthData.july)
        }
      >
        {perMonthData.july.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.august.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.august.car_history_aid) > 0 &&
          handleEdit(perMonthData.august)
        }
      >
        {perMonthData.august.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.september.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.september.car_history_aid) > 0 &&
          handleEdit(perMonthData.september)
        }
      >
        {perMonthData.september.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.october.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.october.car_history_aid) > 0 &&
          handleEdit(perMonthData.october)
        }
      >
        {perMonthData.october.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.november.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.november.car_history_aid) > 0 &&
          handleEdit(perMonthData.november)
        }
      >
        {perMonthData.november.amount}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.december.car_history_aid) > 0 &&
          "cursor-pointer hover:underline"
        }`}
        onClick={() =>
          Number(perMonthData.december.car_history_aid) > 0 &&
          handleEdit(perMonthData.december)
        }
      >
        {perMonthData.december.amount}
      </td>
      <td className="text-right">{totalRow}</td>
    </>
  );
};

export default CarPurchaseDocumentsReadAndUpdateAction;
