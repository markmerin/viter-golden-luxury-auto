<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_rental_value = new TotalCarRentalValue($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("totalcarrentalvalueid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $car_rental_value->car_rental_value_aid = $_GET['totalcarrentalvalueid'];
    $car_rental_value->car_rental_value_name = checkIndex($data, "car_rental_value_name");
    $car_rental_value_name_old = checkIndex($data, "car_rental_value_name_old");
    $car_rental_value->car_rental_value_datetime = date("Y-m-d H:i:s");
    checkId($car_rental_value->car_rental_value_aid);
    // update
    compareName($car_rental_value, $car_rental_value_name_old, $car_rental_value->car_rental_value_name);

    $query = checkUpdate($car_rental_value);
    returnSuccess($car_rental_value, "Total Car Rental Value", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
