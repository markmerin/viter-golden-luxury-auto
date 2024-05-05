export const getCarProfitAndLostAmountByYearMonth = (
  item,
  carProfitAndLossSettings,
  monthVal
) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let amount = 0;
  let data = {};

  carProfitAndLossSettings?.count > 0 &&
    carProfitAndLossSettings?.data.map((carProfit) => {
      const monthAndYear = new Date(carProfit.car_profit_and_loss_date);
      const month = monthAndYear.getMonth();
      if (
        Number(item.profit_and_loss_aid) ===
          Number(carProfit.car_profit_and_loss_id) &&
        months[month] === months[monthVal]
      ) {
        amount += Number(carProfit.car_profit_and_loss_amount);
        data = { ...carProfit };
      }
    });

  return { amount: amount.toFixed(2), ...data };
};
