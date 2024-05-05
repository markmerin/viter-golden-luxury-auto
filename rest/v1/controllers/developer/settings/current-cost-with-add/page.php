<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/current-cost-with-add/CurrentCostWithAdd.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCostWithAdd($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $cost->current_cost_with_add_start = $_GET['start'];
    $cost->current_cost_with_add_total = 5;

    checkLimitId($cost->current_cost_with_add_start, $cost->current_cost_with_add_total);

    $query = checkReadLimit($cost);
    $total_result = checkReadAll($cost);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $cost->current_cost_with_add_total,
        $cost->current_cost_with_add_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
