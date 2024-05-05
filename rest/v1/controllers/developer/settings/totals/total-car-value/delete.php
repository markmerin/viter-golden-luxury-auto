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
    // get data
    $car_value->car_value_aid  = $_GET['totalcarvalueid'];
    checkId($car_value->car_value_aid);

    $query = checkDelete($car_value);

    returnSuccess($car_value, "Total Car Value", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
