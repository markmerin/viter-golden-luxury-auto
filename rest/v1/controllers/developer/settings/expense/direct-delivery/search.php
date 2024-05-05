<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/direct-delivery/DirectDelivery.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$directDelivery = new DirectDelivery($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    $directDelivery->direct_delivery_search = $data["searchValue"];

    // if filter with search
    if ($data["isFilter"] == true) {
        if ($directDelivery->direct_delivery_search != "") {
            checkKeyword($directDelivery->direct_delivery_search);
            $directDelivery->direct_delivery_is_active = checkIndex($data, "direct_delivery_is_active");
            $query = checkFilterByStatusAndSearch($directDelivery);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $directDelivery->direct_delivery_is_active = checkIndex($data, "direct_delivery_is_active");
        $query = checkFilterByStatus($directDelivery);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($directDelivery->direct_delivery_search);
    // if search only  
    $query = checkSearch($directDelivery);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
