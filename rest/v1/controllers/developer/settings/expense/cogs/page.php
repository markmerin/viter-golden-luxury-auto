<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/cogs/Cogs.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $cogs->cogs_start = $_GET['start'];
    $cogs->cogs_total = 5;

    checkLimitId($cogs->cogs_start, $cogs->cogs_total);

    $query = checkReadLimit($cogs);
    $total_result = checkReadAll($cogs);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $cogs->cogs_total,
        $cogs->cogs_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
