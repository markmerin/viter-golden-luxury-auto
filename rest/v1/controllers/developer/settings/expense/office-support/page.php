<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/office-support/OfficeSupport.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new OfficeSupport($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $officeSupport->office_support_start = $_GET['start'];
    $officeSupport->office_support_total = 5;

    checkLimitId($officeSupport->office_support_start, $officeSupport->office_support_total);

    $query = checkReadLimit($officeSupport);
    $total_result = checkReadAll($officeSupport);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $officeSupport->office_support_total,
        $officeSupport->office_support_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
