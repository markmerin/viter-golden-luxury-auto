<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carPurchaseDocument = new CarPurchaseDocument($conn);

if (array_key_exists("carpurchasedocid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $carPurchaseDocument->car_purchase_document_aid = $_GET['carpurchasedocid'];
    // $carPurchaseDocument->car_purchase_document_date = checkIndex($data, "car_purchase_document_date");
    // $carPurchaseDocument->car_purchase_document_car_id = checkIndex($data, "car_purchase_document_car_id");
    $carPurchaseDocument->car_purchase_document_amount = checkIndex($data, "car_purchase_document_amount");
    $carPurchaseDocument->car_purchase_document_datetime = date("Y-m-d H:i:s");

    // $car_purchase_document_date_old = checkIndex($data, "car_purchase_document_date_old");
    checkId($carPurchaseDocument->car_purchase_document_aid);


    // update
    $query = checkUpdate($carPurchaseDocument);
    returnSuccess($carPurchaseDocument, "car Purchase Document update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
