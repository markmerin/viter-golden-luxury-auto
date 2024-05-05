<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$directDelivery = new DirectDelivery($conn);
// get should not be present
if (array_key_exists("directid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$directDelivery->direct_delivery_is_active = 1;
$directDelivery->direct_delivery_name = checkIndex($data, "direct_delivery_name");
$directDelivery->direct_delivery_created = date("Y-m-d H:i:s");
$directDelivery->direct_delivery_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($directDelivery, $directDelivery->direct_delivery_name);

// create
$query = checkCreate($directDelivery);

returnSuccess($directDelivery, "Direct Delivery Create", $query);
