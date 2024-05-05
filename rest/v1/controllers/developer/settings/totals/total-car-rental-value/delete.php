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
    // get data
    $car_rental_value->car_rental_value_aid  = $_GET['totalcarrentalvalueid'];
    checkId($car_rental_value->car_rental_value_aid);

    $query = checkDelete($car_rental_value);

    returnSuccess($car_rental_value, "Total Car Rental Value", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
