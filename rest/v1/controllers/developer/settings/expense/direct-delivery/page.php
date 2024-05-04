<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/direct-delivery/DirectDelivery.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$directDelivery = new DirectDelivery($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $directDelivery->direct_delivery_start = $_GET['start'];
    $directDelivery->direct_delivery_total = 5;

    checkLimitId($directDelivery->direct_delivery_start, $directDelivery->direct_delivery_total);

    $query = checkReadLimit($directDelivery);
    $total_result = checkReadAll($directDelivery);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $directDelivery->direct_delivery_total,
        $directDelivery->direct_delivery_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
