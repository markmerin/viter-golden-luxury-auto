<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';

// use needed classes
require '../../../../../models/developer/settings/totals/purchase-documents/PurchaseDocuments.php';

$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_document = new PurchaseDocuments($conn);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION']))
    checkApiKey();

if (array_key_exists("start", $_GET)) {
    $purchase_document->purchase_document_start = $_GET['start'];
    $purchase_document->purchase_document_total = 5;

    checkLimitId($purchase_document->purchase_document_start, $purchase_document->purchase_document_total);

    $query = checkReadLimit($purchase_document);
    $total_result = checkReadAll($purchase_document);
    http_response_code(200);

    checkReadQuery(
        $query,
        $total_result,
        $purchase_document->purchase_document_total,
        $purchase_document->purchase_document_start
    );

    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
