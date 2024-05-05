<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$directDelivery = new DirectDelivery($conn);

if (array_key_exists("directid", $_GET)) {
    $directDelivery->direct_delivery_aid = $_GET['directid'];

    checkId($directDelivery->direct_delivery_aid);

    $query = checkReadById($directDelivery);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($directDelivery);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
