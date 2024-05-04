<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/cogs/Cogs.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    $cogs->cogs_search = $data["searchValue"];

    // if filter with search
    if ($data["isFilter"] == true) {
        if ($cogs->cogs_search != "") {
            checkKeyword($cogs->cogs_search);
            $cogs->cogs_is_active = checkIndex($data, "cogs_is_active");
            $query = checkFilterByStatusAndSearch($cogs);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $cogs->cogs_is_active = checkIndex($data, "cogs_is_active");
        $query = checkFilterByStatus($cogs);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($cogs->cogs_search);
    // if search only  
    $query = checkSearch($cogs);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
