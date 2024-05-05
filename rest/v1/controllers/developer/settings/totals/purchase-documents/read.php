<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_document = new PurchaseDocuments($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("purchasedocumentsid", $_GET)) {
    $purchase_document->purchase_document_aid = $_GET['purchasedocumentsid'];
    checkId($purchase_document->purchase_document_aid);
    $query = checkReadById($purchase_document);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($purchase_document);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
