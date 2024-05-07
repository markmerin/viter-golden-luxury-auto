<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/total/CarPurchaseDocument.php';
require 'functions.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carPurchaseDocument = new CarPurchaseDocument($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    $carPurchaseDocument->car_purchase_document_car_id = checkIndex($data, "car_purchase_document_car_id");
    $carPurchaseDocument->car_purchase_document_date = checkIndex($data, "car_purchase_document_date");

    $query = checkFilterByDateYear($carPurchaseDocument);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
