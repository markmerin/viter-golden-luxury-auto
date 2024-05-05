<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_value = new TotalCarValue($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("totalcarvalueid", $_GET)) {
    $car_value->car_value_aid = $_GET['totalcarvalueid'];
    checkId($car_value->car_value_aid);
    $query = checkReadById($car_value);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($car_value);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
