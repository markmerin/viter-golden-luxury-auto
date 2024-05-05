<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carProfitAndLoss = new CarProfitAndLoss($conn);

if (array_key_exists("carprofitid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $carProfitAndLoss->car_profit_and_loss_aid = $_GET['carprofitid'];
    // $carProfitAndLoss->car_profit_and_loss_date = checkIndex($data, "car_profit_and_loss_date");
    // $carProfitAndLoss->car_profit_and_loss_car_id = checkIndex($data, "car_profit_and_loss_car_id");
    $carProfitAndLoss->car_profit_and_loss_amount = checkIndex($data, "car_profit_and_loss_amount");
    $carProfitAndLoss->car_profit_and_loss_datetime = date("Y-m-d H:i:s");

    // $car_profit_and_loss_date_old = checkIndex($data, "car_profit_and_loss_date_old");
    checkId($carProfitAndLoss->car_profit_and_loss_aid);


    // update
    $query = checkUpdate($carProfitAndLoss);
    returnSuccess($carProfitAndLoss, "car Profit and Loss update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
