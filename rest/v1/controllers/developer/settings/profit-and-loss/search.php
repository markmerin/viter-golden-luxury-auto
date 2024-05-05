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

    // if filter with search
    if ($data["isFilter"] == true) {
        if ($profitsAndLoss->profit_and_loss_search != "") {
            checkKeyword($profitsAndLoss->profit_and_loss_search);
            $profitsAndLoss->profit_and_loss_is_active = checkIndex($data, "profit_and_loss_is_active");
            $query = checkFilterByStatusAndSearch($profitsAndLoss);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $profitsAndLoss->profit_and_loss_is_active = checkIndex($data, "profit_and_loss_is_active");
        $query = checkFilterByStatus($profitsAndLoss);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($profitsAndLoss->profit_and_loss_search);
    // if search only  
    $query = checkSearch($profitsAndLoss);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
