<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);
// get should not be present
if (array_key_exists("childrenListId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$car_make->car_make_is_active = 1;
$car_make->car_make_name = checkIndex($data, "car_make_name");
$car_make->car_make_created = date("Y-m-d H:i:s");
$car_make->car_make_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($car_make, $car_make->car_make_name);

// create
$query = checkCreate($car_make);

returnSuccess($car_make, "Car MakeCreate", $query);
