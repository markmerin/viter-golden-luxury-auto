<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/income-category/IncomeCategory.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $income_category->income_category_start = $_GET['start'];
    $income_category->income_category_total = 5;

    checkLimitId($income_category->income_category_start, $income_category->income_category_total);

    $query = checkReadLimit($income_category);
    $total_result = checkReadAll($income_category);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $income_category->income_category_total,
        $income_category->income_category_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
