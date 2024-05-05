<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/totals/purchase-financed/PurchaseFinanced.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_financed = new PurchaseFinanced($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $purchase_financed->purchase_financed_start = $_GET['start'];
    $purchase_financed->purchase_financed_total = 5;

    checkLimitId($purchase_financed->purchase_financed_start, $purchase_financed->purchase_financed_total);

    $query = checkReadLimit($purchase_financed);
    $total_result = checkReadAll($purchase_financed);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $purchase_financed->purchase_financed_total,
        $purchase_financed->purchase_financed_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
