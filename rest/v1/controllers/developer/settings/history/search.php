<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/history/History.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $history->history_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($history->history_search != "") {

            checkKeyword($history->history_search);
            $history->history_is_active = checkIndex($data, "history_is_active");
            $query = checkFilterByStatusAndSearch($history);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $history->history_is_active = checkIndex($data, "history_is_active");
        $query = checkFilterByStatus($history);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($history->history_search);
    // if search only  
    $query = checkSearch($history);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
