<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/representatives/Representatives.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $representatives->representatives_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($representatives->representatives_search != "") {

            checkKeyword($representatives->representatives_search);
            $representatives->representatives_is_active = checkIndex($data, "representatives_is_active");
            $query = checkFilterByStatusAndSearch($representatives);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $representatives->representatives_is_active = checkIndex($data, "representatives_is_active");
        $query = checkFilterByStatus($representatives);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($representatives->representatives_search);
    // if search only  
    $query = checkSearch($representatives);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
