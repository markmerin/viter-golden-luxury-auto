<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/office-support/OfficeSupport.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new OfficeSupport($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    $officeSupport->office_support_search = $data["searchValue"];

    // if filter with search
    if ($data["isFilter"] == true) {
        if ($officeSupport->office_support_search != "") {
            checkKeyword($officeSupport->office_support_search);
            $officeSupport->office_support_is_active = checkIndex($data, "office_support_is_active");
            $query = checkFilterByStatusAndSearch($officeSupport);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $officeSupport->office_support_is_active = checkIndex($data, "office_support_is_active");
        $query = checkFilterByStatus($officeSupport);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($officeSupport->office_support_search);
    // if search only  
    $query = checkSearch($officeSupport);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
