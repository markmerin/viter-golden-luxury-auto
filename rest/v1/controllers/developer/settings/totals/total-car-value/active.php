<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/totals/total-car-value/TotalCarValue.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_value = new TotalCarValue($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("totalcarvalueid", $_GET)) {
        // check data
        checkPayload($data);
        $car_value->car_value_aid = $_GET['totalcarvalueid'];
        $car_value->car_value_is_active = trim($data["isActive"]);
        checkId($car_value->car_value_aid);
        $query = checkActive($car_value);
        http_response_code(200);
        returnSuccess($car_value, "Total Car Value", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
