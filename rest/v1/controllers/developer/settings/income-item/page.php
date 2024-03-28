<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/income-item/IncomeItem.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $income_item->income_item_start = $_GET['start'];
    $income_item->income_item_total = 5;

    checkLimitId($income_item->income_item_start, $income_item->income_item_total);

    $query = checkReadLimit($income_item);
    $total_result = checkReadAll($income_item);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $income_item->income_item_total,
        $income_item->income_item_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
