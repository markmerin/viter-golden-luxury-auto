<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/car-make/CarMake.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $car_make->car_make_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($car_make->car_make_search != "") {

            checkKeyword($car_make->car_make_search);
            $car_make->car_make_is_active = checkIndex($data, "car_make_is_active");
            $query = checkFilterByStatusAndSearch($car_make);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $car_make->car_make_is_active = checkIndex($data, "car_make_is_active");
        $query = checkFilterByStatus($car_make);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($car_make->car_make_search);
    // if search only  
    $query = checkSearch($car_make);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
