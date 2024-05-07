<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carHistory = new CarHistory($conn);
// get should not be present
if (array_key_exists("carhistoryid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$carHistory->car_history_is_active = 1;
$carHistory->car_history_car_id = checkIndex($data, "car_history_car_id");
$carHistory->car_history_date = checkIndex($data, "car_history_date");
$carHistory->car_history_id = checkIndex($data, "car_history_id");
$carHistory->car_history_amount = checkIndex($data, "car_history_amount");
$carHistory->car_history_created = date("Y-m-d H:i:s");
$carHistory->car_history_datetime = date("Y-m-d H:i:s");

// validations 
isIdExist($carHistory, $carHistory->car_history_car_id);

// create
$query = checkCreate($carHistory);

returnSuccess($carHistory, "History Create", $query);
