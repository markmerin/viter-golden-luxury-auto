export const getCarDirectDeliveryAmountByYearMonth = (
  item,
  carDirectDelivery,
  monthVal
) => {
  let amount = 0;
  let data = {};

  carDirectDelivery?.count > 0 &&
    carDirectDelivery?.data.map((directDelivery) => {
      const monthAndYear = new Date(directDelivery.car_direct_delivery_date);
      const month = monthAndYear.getMonth();
      if (
        Number(item.direct_delivery_aid) ===
          Number(directDelivery.car_direct_delivery_id) &&
        Number(month) === Number(monthVal)
      ) {
        amount += Number(directDelivery.car_direct_delivery_amount);
        data = { ...directDelivery };
      }
    });

  return { amount: amount.toFixed(2), ...data };
};
