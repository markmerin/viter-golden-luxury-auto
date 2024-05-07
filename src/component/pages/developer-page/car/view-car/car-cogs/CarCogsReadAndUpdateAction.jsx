import React from "react";
import { getCarCogsAmountByYearMonth } from "./function-car-cogs";
import { numberWithCommas } from "@/component/helpers/functions-general";

const CarCogsReadAndUpdateAction = ({ item, carCogs, handleEdit }) => {
  let totalRow = 0;
  const perMonthData = {
    january: getCarCogsAmountByYearMonth(item, carCogs, 0),
    february: getCarCogsAmountByYearMonth(item, carCogs, 1),
    march: getCarCogsAmountByYearMonth(item, carCogs, 2),
    april: getCarCogsAmountByYearMonth(item, carCogs, 3),
    may: getCarCogsAmountByYearMonth(item, carCogs, 4),
    june: getCarCogsAmountByYearMonth(item, carCogs, 5),
    july: getCarCogsAmountByYearMonth(item, carCogs, 6),
    august: getCarCogsAmountByYearMonth(item, carCogs, 7),
    september: getCarCogsAmountByYearMonth(item, carCogs, 8),
    october: getCarCogsAmountByYearMonth(item, carCogs, 9),
    november: getCarCogsAmountByYearMonth(item, carCogs, 10),
    december: getCarCogsAmountByYearMonth(item, carCogs, 11),
  };

  totalRow =
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
    Number(perMonthData.december.amount);

  return (
    <>
      <td
        className={`text-right ${
          Number(perMonthData.january.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.january.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.january)
        }
      >
        {numberWithCommas(perMonthData.january.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.february.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.february.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.february)
        }
      >
        {numberWithCommas(perMonthData.february.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.march.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.march.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.march)
        }
      >
        {numberWithCommas(perMonthData.march.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.april.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.april.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.april)
        }
      >
        {numberWithCommas(perMonthData.april.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.may.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.may.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.may)
        }
      >
        {numberWithCommas(perMonthData.may.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.june.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.june.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.june)
        }
      >
        {numberWithCommas(perMonthData.june.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.july.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.july.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.july)
        }
      >
        {numberWithCommas(perMonthData.july.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.august.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.august.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.august)
        }
      >
        {numberWithCommas(perMonthData.august.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.september.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.september.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.september)
        }
      >
        {numberWithCommas(perMonthData.september.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.october.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.october.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.october)
        }
      >
        {numberWithCommas(perMonthData.october.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.november.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.november.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.november)
        }
      >
        {numberWithCommas(perMonthData.november.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.december.car_cogs_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.december.car_cogs_aid) > 0 &&
          handleEdit(perMonthData.december)
        }
      >
        {numberWithCommas(perMonthData.december.amount, 2)}
      </td>
      <td className="text-right">{numberWithCommas(totalRow.toFixed(2), 2)}</td>
    </>
  );
};

export default CarCogsReadAndUpdateAction;
