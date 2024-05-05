<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_document = new PurchaseDocuments($conn);
// get should not be present
if (array_key_exists("purchasedocumentsid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$purchase_document->purchase_document_name = $data["purchase_document_name"];
$purchase_document->purchase_document_is_active = 1;
$purchase_document->purchase_document_created = date("Y-m-d H:i:s");
$purchase_document->purchase_document_datetime = date("Y-m-d H:i:s");
// check name
isNameExist($purchase_document, $purchase_document->purchase_document_name);
// create
$query = checkCreate($purchase_document);
// add column
returnSuccess($purchase_document, "Purchase Document", $query);
