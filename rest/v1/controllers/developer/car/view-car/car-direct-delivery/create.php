<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carDirectDelivery = new CarDirectDelivery($conn);
// get should not be present
if (array_key_exists("cardirectid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$carDirectDelivery->car_direct_delivery_is_active = 1;
$carDirectDelivery->car_direct_delivery_car_id = checkIndex($data, "car_direct_delivery_car_id");
$carDirectDelivery->car_direct_delivery_date = checkIndex($data, "car_direct_delivery_date");
$carDirectDelivery->car_direct_delivery_id = checkIndex($data, "car_direct_delivery_id");
$carDirectDelivery->car_direct_delivery_amount = checkIndex($data, "car_direct_delivery_amount");
$carDirectDelivery->car_direct_delivery_created = date("Y-m-d H:i:s");
$carDirectDelivery->car_direct_delivery_datetime = date("Y-m-d H:i:s");

// validations 
isIdExist($carDirectDelivery, $carDirectDelivery->car_direct_delivery_car_id);

// create
$query = checkCreate($carDirectDelivery);

returnSuccess($carDirectDelivery, "Car direct and delivery Create", $query);
