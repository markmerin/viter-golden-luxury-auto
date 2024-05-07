<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carPurchaseDocument = new CarPurchaseDocument($conn);
// get should not be present
if (array_key_exists("carpurchasedocid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$carPurchaseDocument->car_purchase_document_is_active = 1;
$carPurchaseDocument->car_purchase_document_car_id = checkIndex($data, "car_purchase_document_car_id");
$carPurchaseDocument->car_purchase_document_date = checkIndex($data, "car_purchase_document_date");
$carPurchaseDocument->car_purchase_document_id = checkIndex($data, "car_purchase_document_id");
$carPurchaseDocument->car_purchase_document_amount = checkIndex($data, "car_purchase_document_amount");
$carPurchaseDocument->car_purchase_document_created = date("Y-m-d H:i:s");
$carPurchaseDocument->car_purchase_document_datetime = date("Y-m-d H:i:s");

// validations 
isIdExist($carPurchaseDocument, $carPurchaseDocument->car_purchase_document_car_id);

// create
$query = checkCreate($carPurchaseDocument);

returnSuccess($carPurchaseDocument, "Car Purchase Document Create", $query);
