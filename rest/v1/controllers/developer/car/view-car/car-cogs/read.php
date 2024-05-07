<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carCogs = new CarCogs($conn);

if (array_key_exists("carcogsid", $_GET)) {
    $carCogs->car_cogs_aid = $_GET['carcogsid'];

    checkId($carCogs->car_cogs_aid);

    $query = checkReadById($carCogs);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($carCogs);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
