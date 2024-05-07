import React from "react";
import { getCarDirectDeliveryAmountByYearMonth } from "./function-car-direct";
import { numberWithCommas } from "@/component/helpers/functions-general";

const CarDirecttReadAndUpdateAction = ({
  item,
  carDirectDelivery,
  handleEdit,
}) => {
  let totalRow = 0;
  const perMonthData = {
    january: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 0),
    february: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 1),
    march: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 2),
    april: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 3),
    may: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 4),
    june: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 5),
    july: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 6),
    august: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 7),
    september: getCarDirectDeliveryAmountByYearMonth(
      item,
      carDirectDelivery,
      8
    ),
    october: getCarDirectDeliveryAmountByYearMonth(item, carDirectDelivery, 9),
    november: getCarDirectDeliveryAmountByYearMonth(
      item,
      carDirectDelivery,
      10
    ),
    december: getCarDirectDeliveryAmountByYearMonth(
      item,
      carDirectDelivery,
      11
    ),
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
          Number(perMonthData.january.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.january.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.january)
        }
      >
        {numberWithCommas(perMonthData.january.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.february.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.february.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.february)
        }
      >
        {numberWithCommas(perMonthData.february.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.march.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.march.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.march)
        }
      >
        {numberWithCommas(perMonthData.march.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.april.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.april.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.april)
        }
      >
        {numberWithCommas(perMonthData.april.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.may.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.may.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.may)
        }
      >
        {numberWithCommas(perMonthData.may.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.june.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.june.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.june)
        }
      >
        {numberWithCommas(perMonthData.june.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.july.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.july.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.july)
        }
      >
        {numberWithCommas(perMonthData.july.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.august.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.august.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.august)
        }
      >
        {numberWithCommas(perMonthData.august.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.september.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.september.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.september)
        }
      >
        {numberWithCommas(perMonthData.september.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.october.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.october.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.october)
        }
      >
        {numberWithCommas(perMonthData.october.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.november.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.november.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.november)
        }
      >
        {numberWithCommas(perMonthData.november.amount, 2)}
      </td>
      <td
        className={`text-right ${
          Number(perMonthData.december.car_direct_delivery_aid) > 0 &&
          "cursor-pointer hover:underline text-accent"
        }`}
        onClick={() =>
          Number(perMonthData.december.car_direct_delivery_aid) > 0 &&
          handleEdit(perMonthData.december)
        }
      >
        {numberWithCommas(perMonthData.december.amount, 2)}
      </td>
      <td className="text-right">{numberWithCommas(totalRow.toFixed(2), 2)}</td>
    </>
  );
};

export default CarDirecttReadAndUpdateAction;
