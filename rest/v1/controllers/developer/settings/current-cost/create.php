<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCost($conn);
// get should not be present
if (array_key_exists("costid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$cost->current_cost_is_active = 1;
$cost->current_cost_name = checkIndex($data, "current_cost_name");
$cost->current_cost_created = date("Y-m-d H:i:s");
$cost->current_cost_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($cost, $cost->current_cost_name);

// create
$query = checkCreate($cost);

returnSuccess($cost, "Current cost create", $query);
