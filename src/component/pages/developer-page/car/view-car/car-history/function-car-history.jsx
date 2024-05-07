export const getCarHistoryAmountByYearMonth = (
  item,
  carHistorySettings,
  monthVal
) => {
  let amount = 0;
  let data = {};

  carHistorySettings?.count > 0 &&
    carHistorySettings?.data.map((carHistory) => {
      const monthAndYear = new Date(carHistory.car_history_date);
      const month = monthAndYear.getMonth();
      if (
        Number(item.history_aid) === Number(carHistory.car_history_id) &&
        Number(month) === Number(monthVal)
      ) {
        amount += Number(carHistory.car_history_amount);
        data = { ...carHistory };
      }
    });

  return { amount: amount.toFixed(2), ...data };
};
