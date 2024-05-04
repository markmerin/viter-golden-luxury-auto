<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/profit-and-loss/ProfitAndLoss.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profitsAndLoss = new ProfitAndLoss($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $profitsAndLoss->profit_and_loss_start = $_GET['start'];
    $profitsAndLoss->profit_and_loss_total = 5;

    checkLimitId($profitsAndLoss->profit_and_loss_start, $profitsAndLoss->profit_and_loss_total);

    $query = checkReadLimit($profitsAndLoss);
    $total_result = checkReadAll($profitsAndLoss);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $profitsAndLoss->profit_and_loss_total,
        $profitsAndLoss->profit_and_loss_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
