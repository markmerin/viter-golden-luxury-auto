<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_value = new TotalCarValue($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("totalcarvalueid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $car_value->car_value_aid = $_GET['totalcarvalueid'];
    $car_value->car_value_name = checkIndex($data, "car_value_name");
    $car_value_name_old = checkIndex($data, "car_value_name_old");
    $car_value->car_value_datetime = date("Y-m-d H:i:s");
    checkId($car_value->car_value_aid);
    // update
    compareName($car_value, $car_value_name_old, $car_value->car_value_name);

    $query = checkUpdate($car_value);
    returnSuccess($car_value, "Total Car Value", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
