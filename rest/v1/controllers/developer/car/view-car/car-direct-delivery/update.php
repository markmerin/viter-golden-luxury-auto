<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carDirectDelivery = new CarDirectDelivery($conn);

if (array_key_exists("cardirectid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $carDirectDelivery->car_direct_delivery_aid = $_GET['cardirectid'];
    $carDirectDelivery->car_direct_delivery_amount = checkIndex($data, "car_direct_delivery_amount");
    $carDirectDelivery->car_direct_delivery_datetime = date("Y-m-d H:i:s");

    checkId($carDirectDelivery->car_direct_delivery_aid);

    // update
    $query = checkUpdate($carDirectDelivery);
    returnSuccess($carDirectDelivery, "Car direct and delivery update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
