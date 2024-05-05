<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carDirectDelivery = new CarDirectDelivery($conn);

if (array_key_exists("cardirectid", $_GET)) {
    $carDirectDelivery->car_direct_delivery_aid = $_GET['cardirectid'];

    checkId($carDirectDelivery->car_direct_delivery_aid);

    $query = checkReadById($carDirectDelivery);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($carDirectDelivery);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
