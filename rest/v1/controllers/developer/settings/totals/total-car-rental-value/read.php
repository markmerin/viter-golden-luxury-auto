<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_rental_value = new TotalCarRentalValue($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("totalcarrentalvalueid", $_GET)) {
    $car_rental_value->car_rental_value_aid = $_GET['totalcarrentalvalueid'];
    checkId($car_rental_value->car_rental_value_aid);
    $query = checkReadById($car_rental_value);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($car_rental_value);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
