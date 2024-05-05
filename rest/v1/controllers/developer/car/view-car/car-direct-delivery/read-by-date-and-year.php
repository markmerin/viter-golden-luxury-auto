<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/CarDirectDelivery.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carDirectDelivery = new CarDirectDelivery($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    $carDirectDelivery->car_direct_delivery_car_id = checkIndex($data, "car_direct_delivery_car_id");
    $carDirectDelivery->car_direct_delivery_date = checkIndex($data, "car_direct_delivery_date");

    $query = checkFilterByDateYear($carDirectDelivery);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
