<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/representatives/Representatives.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $representatives->representatives_start = $_GET['start'];
    $representatives->representatives_total = 5;

    checkLimitId($representatives->representatives_start, $representatives->representatives_total);

    $query = checkReadLimit($representatives);
    $total_result = checkReadAll($representatives);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $representatives->representatives_total,
        $representatives->representatives_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
