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
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $car_value->car_value_start = $_GET['start'];
    $car_value->car_value_total = 5;

    checkLimitId($car_value->car_value_start, $car_value->car_value_total);

    $query = checkReadLimit($car_value);
    $total_result = checkReadAll($car_value);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $car_value->car_value_total,
        $car_value->car_value_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
