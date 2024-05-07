<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';

// use needed classes
require '../../../../../models/developer/settings/totals/purchase-documents/PurchaseDocuments.php';
// check database connection
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_document = new PurchaseDocuments($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);
    $purchase_document->purchase_document_search = $data["searchValue"];


    // if search only  
    $query = checkSearchByPurchaseDocument($purchase_document);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
