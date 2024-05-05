<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/history/History.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $history->history_start = $_GET['start'];
    $history->history_total = 5;

    checkLimitId($history->history_start, $history->history_total);

    $query = checkReadLimit($history);
    $total_result = checkReadAll($history);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $history->history_total,
        $history->history_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
