<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$directDelivery = new DirectDelivery($conn);

if (array_key_exists("directid", $_GET)) {
    // get data
    $directDelivery->direct_delivery_aid = $_GET['directid'];

    // validations
    checkId($directDelivery->direct_delivery_aid);
    // isAssociated($directDelivery);

    $query = checkDelete($directDelivery);
    returnSuccess($directDelivery, "Direct Delivery Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
