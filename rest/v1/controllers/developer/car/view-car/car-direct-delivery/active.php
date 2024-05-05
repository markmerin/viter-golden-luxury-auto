<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
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
    if (array_key_exists("cardirectid", $_GET)) {
        // check data
        checkPayload($data);

        $carDirectDelivery->car_direct_delivery_aid = $_GET['cardirectid'];
        $carDirectDelivery->car_direct_delivery_is_active = trim($data["isActive"]);
        $carDirectDelivery->car_direct_delivery_datetime = date("Y-m-d H:i:s");

        checkId($carDirectDelivery->car_direct_delivery_aid);

        $query = checkActive($carDirectDelivery);
        http_response_code(200);
        returnSuccess($carDirectDelivery, "Car direct and delivery Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
