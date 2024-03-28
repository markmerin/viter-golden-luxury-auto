<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/expenses/Expenses.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $expenses->expenses_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($expenses->expenses_search != "") {

            checkKeyword($expenses->expenses_search);
            $expenses->expenses_is_active = checkIndex($data, "expenses_is_active");
            $query = checkFilterByStatusAndSearch($expenses);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $expenses->expenses_is_active = checkIndex($data, "expenses_is_active");
        $query = checkFilterByStatus($expenses);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($expenses->expenses_search);
    // if search only  
    $query = checkSearch($expenses);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
