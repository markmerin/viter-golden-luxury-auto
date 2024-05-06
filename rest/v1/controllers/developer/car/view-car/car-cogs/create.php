<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carCogs = new CarCogs($conn);
// get should not be present
if (array_key_exists("carcogsid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$carCogs->car_cogs_is_active = 1;
$carCogs->car_cogs_car_id = checkIndex($data, "car_cogs_car_id");
$carCogs->car_cogs_date = checkIndex($data, "car_cogs_date");
$carCogs->car_cogs_id = checkIndex($data, "car_cogs_id");
$carCogs->car_cogs_amount = checkIndex($data, "car_cogs_amount");
$carCogs->car_cogs_created = date("Y-m-d H:i:s");
$carCogs->car_cogs_datetime = date("Y-m-d H:i:s");

// validations 
isIdExist($carCogs, $carCogs->car_cogs_car_id);

// create
$query = checkCreate($carCogs);

returnSuccess($carCogs, "Car Cogs Create", $query);
