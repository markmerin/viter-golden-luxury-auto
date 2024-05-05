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
    // get data
    $purchase_financed->purchase_financed_aid  = $_GET['purchasefinancedid'];
    checkId($purchase_financed->purchase_financed_aid);

    $query = checkDelete($purchase_financed);

    returnSuccess($purchase_financed, "Purchase Financed", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
