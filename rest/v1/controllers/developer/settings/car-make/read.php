<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);

if (array_key_exists("carmakeid", $_GET)) {
    $car_make->car_make_aid = $_GET['carmakeid'];

    checkId($car_make->car_make_aid);

    $query = checkReadById($car_make);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($car_make);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
