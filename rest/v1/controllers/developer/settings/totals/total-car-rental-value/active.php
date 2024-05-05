<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/totals/total-car-rental-value/TotalCarRentalValue.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_rental_value = new TotalCarRentalValue($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("totalcarrentalvalueid", $_GET)) {
        // check data
        checkPayload($data);
        $car_rental_value->car_rental_value_aid = $_GET['totalcarrentalvalueid'];
        $car_rental_value->car_rental_value_is_active = trim($data["isActive"]);
        checkId($car_rental_value->car_rental_value_aid);
        $query = checkActive($car_rental_value);
        http_response_code(200);
        returnSuccess($car_rental_value, "Total Car Rental Value", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
