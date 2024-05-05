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
    // get data
    $purchase_document->purchase_document_aid = $_GET['purchasedocumentsid'];
    checkId($purchase_document->purchase_document_aid);

    $query = checkDelete($purchase_document);

    returnSuccess($purchase_document, "Purchase Document", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
