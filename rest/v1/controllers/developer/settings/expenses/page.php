<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/expenses/Expenses.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $expenses->expenses_start = $_GET['start'];
    $expenses->expenses_total = 5;

    checkLimitId($expenses->expenses_start, $expenses->expenses_total);

    $query = checkReadLimit($expenses);
    $total_result = checkReadAll($expenses);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $expenses->expenses_total,
        $expenses->expenses_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
