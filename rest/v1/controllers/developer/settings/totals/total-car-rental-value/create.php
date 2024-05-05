<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_rental_value = new TotalCarRentalValue($conn);
// get should not be present
if (array_key_exists("totalcarrentalvalueid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$car_rental_value->car_rental_value_name = $data["car_rental_value_name"];
$car_rental_value->car_rental_value_is_active = 1;
$car_rental_value->car_rental_value_created = date("Y-m-d H:i:s");
$car_rental_value->car_rental_value_datetime = date("Y-m-d H:i:s");
// check name
isNameExist($car_rental_value, $car_rental_value->car_rental_value_name);
// create
$query = checkCreate($car_rental_value);
// add column
returnSuccess($car_rental_value, "Total Car Rental Value", $query);
