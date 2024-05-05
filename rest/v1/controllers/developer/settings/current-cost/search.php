<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/settings/current-cost/CurrentCost.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCost($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $cost->current_cost_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($cost->current_cost_search != "") {

            checkKeyword($cost->current_cost_search);
            $cost->current_cost_is_active = checkIndex($data, "current_cost_is_active");
            $query = checkFilterByStatusAndSearch($cost);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $cost->current_cost_is_active = checkIndex($data, "current_cost_is_active");
        $query = checkFilterByStatus($cost);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($cost->current_cost_search);
    // if search only  
    $query = checkSearch($cost);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
