<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carHistory = new CarHistory($conn);

if (array_key_exists("carprofitid", $_GET)) {
    $carHistory->car_history_aid = $_GET['carprofitid'];

    checkId($carHistory->car_history_aid);

    $query = checkReadById($carHistory);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($carHistory);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
