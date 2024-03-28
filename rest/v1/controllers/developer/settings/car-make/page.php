<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/car-make/CarMake.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $car_make->car_make_start = $_GET['start'];
    $car_make->car_make_total = 5;

    checkLimitId($car_make->car_make_start, $car_make->car_make_total);

    $query = checkReadLimit($car_make);
    $total_result = checkReadAll($car_make);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $car_make->car_make_total,
        $car_make->car_make_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
