<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCost($conn);

if (array_key_exists("costid", $_GET)) {
    $cost->current_cost_aid = $_GET['costid'];

    checkId($cost->current_cost_aid);

    $query = checkReadById($cost);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($cost);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
