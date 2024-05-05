<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_value = new TotalCarValue($conn);
// get should not be present
if (array_key_exists("totalcarvalueid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$car_value->car_value_name = $data["car_value_name"];
$car_value->car_value_is_active = 1;
$car_value->car_value_created = date("Y-m-d H:i:s");
$car_value->car_value_datetime = date("Y-m-d H:i:s");
// check name
isNameExist($car_value, $car_value->car_value_name);
// create
$query = checkCreate($car_value);
// add column
returnSuccess($car_value, "Car Value", $query);
