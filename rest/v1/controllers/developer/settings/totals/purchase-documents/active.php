<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';

// use needed classes
require '../../../../../models/developer/settings/totals/purchase-documents/PurchaseDocuments.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_document = new PurchaseDocuments($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("purchasedocumentsid", $_GET)) {
        // check data
        checkPayload($data);
        $purchase_document->purchase_document_aid = $_GET['purchasedocumentsid'];
        $purchase_document->purchase_document_is_active = trim($data["isActive"]);
        checkId($purchase_document->purchase_document_aid);
        $query = checkActive($purchase_document);
        http_response_code(200);
        returnSuccess($purchase_document, "Purchase Document", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
