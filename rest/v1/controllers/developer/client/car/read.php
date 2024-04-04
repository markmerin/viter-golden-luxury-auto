<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car = new Car($conn);
// get $_GET data

if (array_key_exists("carid", $_GET)) {
    $car->car_aid = $_GET['carid'];
    checkId($car->car_aid);
    $query = checkReadById($car);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($car);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
