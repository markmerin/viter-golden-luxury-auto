<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carCogs = new CarCogs($conn);

if (array_key_exists("carcogsid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $carCogs->car_cogs_aid = $_GET['carcogsid'];
    $carCogs->car_cogs_amount = checkIndex($data, "car_cogs_amount");
    $carCogs->car_cogs_datetime = date("Y-m-d H:i:s");

    checkId($carCogs->car_cogs_aid);

    // update
    $query = checkUpdate($carCogs);
    returnSuccess($carCogs, "Car cogs update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
