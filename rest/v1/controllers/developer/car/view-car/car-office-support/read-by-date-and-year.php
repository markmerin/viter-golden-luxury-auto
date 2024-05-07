<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/CarOfficeSupport.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new CarOfficeSupport($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    $officeSupport->car_office_support_car_id = checkIndex($data, "car_office_support_car_id");
    $officeSupport->car_office_support_date = checkIndex($data, "car_office_support_date");

    $query = checkFilterByDateYear($officeSupport);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
