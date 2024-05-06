import { getCarSupplementalInformationByYearMonth } from "./function-car-supplemental-information";

const CarSupplementalInfoReadAndUpdateAction = ({
  item,
  carProfitAndLoss,
  handleEdit,
}) => {
  let totalRow = 0;
  const perMonthData = {
    january: getCarSupplementalInformationByYearMonth(
      item,
      carProfitAndLoss,
      0
    ),
    february: getCarSupplementalInformationByYearMonth(
      item,
      carProfitAndLoss,
      1
    ),
    march: getCarSupplementalInformationByYearMonth(item, carProfitAndLoss, 2),
    april: getCarSupplementalInformationByYearMonth(item, carProfitAndLoss, 3),
    may: getCarSupplementalInformationByYearMonth(item, carProfitAndLoss, 4),
    june: getCarSupplementalInformationByYearMonth(item, carProfitAndLoss, 5),
    july: getCarSupplementalInformationByYearMonth(item, carProfitAndLoss, 6),
    august: getCarSupplementalInformationByYearMonth(item, carProfitAndLoss, 7),
    september: getCarSupplementalInformationByYearMonth(
      item,
      carProfitAndLoss,
      8
    ),
    october: getCarSupplementalInformationByYearMonth(
      item,
      carProfitAndLoss,
      9
    ),
    november: getCarSupplementalInformationByYearMonth(
      item,
      carProfitAndLoss,
      10
    ),
    december: getCarSupplementalInformationByYearMonth(
      item,
      carProfitAndLoss,
      11
    ),
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

export default CarSupplementalInfoReadAndUpdateAction;
