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
    // check data
    checkPayload($data);
    // get data
    $purchase_document->purchase_document_aid = $_GET['purchasedocumentsid'];
    $purchase_document->purchase_document_name = checkIndex($data, "purchase_document_name");
    $purchase_document_name_old = checkIndex($data, "purchase_document_name_old");
    $purchase_document->purchase_document_datetime = date("Y-m-d H:i:s");
    checkId($purchase_document->purchase_document_aid);
    // update
    compareName($purchase_document, $purchase_document_name_old, $purchase_document->purchase_document_name);

    $query = checkUpdate($purchase_document);
    returnSuccess($purchase_document, "Purchase Document", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
