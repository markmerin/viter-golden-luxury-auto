<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carProfitAndLoss = new CarProfitAndLoss($conn);
// get should not be present
if (array_key_exists("carprofitid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$carProfitAndLoss->car_profit_and_loss_is_active = 1;
$carProfitAndLoss->car_profit_and_loss_car_id = checkIndex($data, "car_profit_and_loss_car_id");
$carProfitAndLoss->car_profit_and_loss_date = checkIndex($data, "car_profit_and_loss_date");
$carProfitAndLoss->car_profit_and_loss_id = checkIndex($data, "car_profit_and_loss_id");
$carProfitAndLoss->car_profit_and_loss_amount = checkIndex($data, "car_profit_and_loss_amount");
$carProfitAndLoss->car_profit_and_loss_created = date("Y-m-d H:i:s");
$carProfitAndLoss->car_profit_and_loss_datetime = date("Y-m-d H:i:s");

// validations 
isIdExist($carProfitAndLoss, $carProfitAndLoss->car_profit_and_loss_car_id);

// create
$query = checkCreate($carProfitAndLoss);

returnSuccess($carProfitAndLoss, "Car Profit and Loss Create", $query);
