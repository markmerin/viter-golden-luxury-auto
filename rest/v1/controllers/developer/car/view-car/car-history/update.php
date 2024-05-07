<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carHistory = new CarHistory($conn);

if (array_key_exists("carhistoryid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $carHistory->car_history_aid = $_GET['carhistoryid'];
    // $carHistory->car_history_date = checkIndex($data, "car_history_date");
    // $carHistory->car_history_car_id = checkIndex($data, "car_history_car_id");
    $carHistory->car_history_amount = checkIndex($data, "car_history_amount");
    $carHistory->car_history_datetime = date("Y-m-d H:i:s");

    // $car_history_date_old = checkIndex($data, "car_history_date_old");
    checkId($carHistory->car_history_aid);


    // update
    $query = checkUpdate($carHistory);
    returnSuccess($carHistory, "Car History update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
