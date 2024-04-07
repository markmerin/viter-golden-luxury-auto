<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/client/car/Car.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car = new Car($conn);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // get data

    if (array_key_exists("start", $_GET) && array_key_exists("email", $_GET)) {

        $car->car_start = $_GET['start'];
        $car->car_total = 10;

        $car->client_email =  $_GET['email'];

        $car->car_client_id = getResultData($car->readByEmail())[0]["client_aid"];

        checkLimitId($car->car_start, $car->car_total);
        $query = checkReadLimit($car);
        $total_result = checkReadAll($car);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $car->car_total,
            $car->car_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}


http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
