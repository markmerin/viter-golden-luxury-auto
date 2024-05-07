<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/total/CarPurchaseDocument.php';
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
    if (array_key_exists("carpurchasedocid", $_GET)) {
        // check data
        checkPayload($data);

        $carPurchaseDocument->car_purchase_document_aid = $_GET['carpurchasedocid'];
        $carPurchaseDocument->car_purchase_document_is_active = trim($data["isActive"]);
        $carPurchaseDocument->car_purchase_document_datetime = date("Y-m-d H:i:s");

        checkId($carPurchaseDocument->car_purchase_document_aid);

        $query = checkActive($carPurchaseDocument);
        http_response_code(200);
        returnSuccess($carPurchaseDocument, "Car Purchase Document Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
