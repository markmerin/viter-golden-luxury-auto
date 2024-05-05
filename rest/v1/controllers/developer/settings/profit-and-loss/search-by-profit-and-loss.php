<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/settings/profit-and-loss/ProfitAndLoss.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profitsAndLoss = new ProfitAndLoss($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    $profitsAndLoss->profit_and_loss_search = $data["searchValue"];


    // if search only  
    $query = checkSearchByProfitAndLoss($profitsAndLoss);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
