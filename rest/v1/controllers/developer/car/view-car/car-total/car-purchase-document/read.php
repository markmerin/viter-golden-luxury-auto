<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carPurchaseDocument = new CarPurchaseDocument($conn);

if (array_key_exists("carpurchasedocid", $_GET)) {
    $carPurchaseDocument->car_purchase_document_aid = $_GET['carpurchasedocid'];

    checkId($carPurchaseDocument->car_purchase_document_aid);

    $query = checkReadById($carPurchaseDocument);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($carPurchaseDocument);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
