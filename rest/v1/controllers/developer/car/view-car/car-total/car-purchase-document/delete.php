<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carPurchaseDocument = new CarPurchaseDocument($conn);

if (array_key_exists("carprofitid", $_GET)) {
    // get data
    $carPurchaseDocument->car_purchase_document_aid = $_GET['carprofitid'];

    // validations
    checkId($carPurchaseDocument->car_purchase_document_aid);
    // isAssociated($carPurchaseDocument);

    $query = checkDelete($carPurchaseDocument);
    returnSuccess($carPurchaseDocument, "Car Purchase Document Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
