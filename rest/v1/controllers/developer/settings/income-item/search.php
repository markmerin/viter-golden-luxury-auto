<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/income-item/IncomeItem.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $income_item->income_item_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($income_item->income_item_search != "") {

            checkKeyword($income_item->income_item_search);
            $income_item->income_item_is_active = checkIndex($data, "income_item_is_active");
            $query = checkFilterByStatusAndSearch($income_item);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $income_item->income_item_is_active = checkIndex($data, "income_item_is_active");
        $query = checkFilterByStatus($income_item);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($income_item->income_item_search);
    // if search only  
    $query = checkSearch($income_item);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
