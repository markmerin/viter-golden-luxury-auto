<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/CarHistory.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carHistory = new CarHistory($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("carhistoryid", $_GET)) {
        // check data
        checkPayload($data);

        $carHistory->car_history_aid = $_GET['carhistoryid'];
        $carHistory->car_history_is_active = trim($data["isActive"]);
        $carHistory->car_history_datetime = date("Y-m-d H:i:s");

        checkId($carHistory->car_history_aid);

        $query = checkActive($carHistory);
        http_response_code(200);
        returnSuccess($carHistory, "Car History Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
