<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carDirectDelivery = new CarDirectDelivery($conn);

if (array_key_exists("carprofitid", $_GET)) {
    // get data
    $carDirectDelivery->car_direct_delivery_aid = $_GET['carprofitid'];

    // validations
    checkId($carDirectDelivery->car_direct_delivery_aid);
    // isAssociated($carDirectDelivery);

    $query = checkDelete($carDirectDelivery);
    returnSuccess($carDirectDelivery, "Car direct and delivery Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
