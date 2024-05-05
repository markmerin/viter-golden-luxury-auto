<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';

// use needed classes
require '../../../../../models/developer/settings/totals/purchase-documents/PurchaseDocuments.php';

require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_document = new PurchaseDocuments($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $purchase_document->purchase_document_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($purchase_document->purchase_document_search != "") {

            checkKeyword($purchase_document->purchase_document_search);
            $purchase_document->purchase_document_is_active = checkIndex($data, "purchase_document_is_active");
            $query = checkFilterByStatusAndSearch($purchase_document);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $purchase_document->purchase_document_is_active = checkIndex($data, "purchase_document_is_active");
        $query = checkFilterByStatus($purchase_document);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($purchase_document->purchase_document_search);
    // if search only  
    $query = checkSearch($purchase_document);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
