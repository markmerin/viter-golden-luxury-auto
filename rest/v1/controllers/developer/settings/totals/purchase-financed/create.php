<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$purchase_financed = new PurchaseFinanced($conn);
// get should not be present
if (array_key_exists("purchasefinancedid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$purchase_financed->purchase_financed_name = $data["purchase_financed_name"];
$purchase_financed->purchase_financed_is_active = 1;
$purchase_financed->purchase_financed_created = date("Y-m-d H:i:s");
$purchase_financed->purchase_financed_datetime = date("Y-m-d H:i:s");
// check name
isNameExist($purchase_financed, $purchase_financed->purchase_financed_name);
// create
$query = checkCreate($purchase_financed);
// add column
returnSuccess($purchase_financed, "Purchase Document", $query);
