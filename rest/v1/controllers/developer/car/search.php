<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/car/Car.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car = new Car($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $car->car_search = $data["searchValue"];

    // only if filtering
    if ($data["isFilter"]) {

        // only if search with filter
        if ($car->car_search != "") {

            $car->car_is_active = checkIndex($data, "car_is_active");
            $query = checkSearchByStatus($car);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $car->car_is_active = checkIndex($data, "car_is_active");
        $query = checkFilterByStatus($car);
        http_response_code(200);
        getQueriedData($query);
    }

    $query = checkSearch($car);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
