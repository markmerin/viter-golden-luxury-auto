<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$directDelivery = new DirectDelivery($conn);

if (array_key_exists("directid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $directDelivery->direct_delivery_aid = $_GET['directid'];
    $directDelivery->direct_delivery_name = checkIndex($data, "direct_delivery_name");
    $directDelivery->direct_delivery_datetime = date("Y-m-d H:i:s");

    $direct_delivery_name_old = checkIndex($data, "direct_delivery_name_old");
    checkId($directDelivery->direct_delivery_aid);

    // validation
    compareName($directDelivery, $direct_delivery_name_old, $directDelivery->direct_delivery_name);

    // update
    $query = checkUpdate($directDelivery);
    returnSuccess($directDelivery, "Direct Delivery update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
