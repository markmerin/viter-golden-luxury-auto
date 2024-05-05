<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_financed = new PurchaseFinanced($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("purchasefinancedid", $_GET)) {
    $purchase_financed->purchase_financed_aid = $_GET['purchasefinancedid'];
    checkId($purchase_financed->purchase_financed_aid);
    $query = checkReadById($purchase_financed);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($purchase_financed);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
