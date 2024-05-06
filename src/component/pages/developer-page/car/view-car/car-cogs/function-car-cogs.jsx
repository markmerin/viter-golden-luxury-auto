export const getCarCogsAmountByYearMonth = (item, carCogs, monthVal) => {
  let amount = 0;
  let data = {};

  carCogs?.count > 0 &&
    carCogs?.data.map((cogs) => {
      const monthAndYear = new Date(cogs.car_cogs_date);
      const month = monthAndYear.getMonth();
      if (
        Number(item.cogs_aid) === Number(cogs.car_cogs_id) &&
        Number(month) === Number(monthVal)
      ) {
        amount += Number(cogs.car_cogs_amount);
        data = { ...cogs };
      }
    });

  return { amount: amount.toFixed(2), ...data };
};
