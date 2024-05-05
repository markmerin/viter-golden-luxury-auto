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
    // check data
    checkPayload($data);
    // get data
    $purchase_financed->purchase_financed_aid = $_GET['purchasefinancedid'];
    $purchase_financed->purchase_financed_name = checkIndex($data, "purchase_financed_name");
    $purchase_financed_name_old = checkIndex($data, "purchase_financed_name_old");
    $purchase_financed->purchase_financed_datetime = date("Y-m-d H:i:s");
    checkId($purchase_financed->purchase_financed_aid);
    // update
    compareName($purchase_financed, $purchase_financed_name_old, $purchase_financed->purchase_financed_name);

    $query = checkUpdate($purchase_financed);
    returnSuccess($purchase_financed, "Purchase Financed", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
