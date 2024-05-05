<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCostWithAdd($conn);
// get should not be present
if (array_key_exists("costid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$cost->current_cost_with_add_is_active = 1;
$cost->current_cost_with_add_name = checkIndex($data, "current_cost_with_add_name");
$cost->current_cost_with_add_created = date("Y-m-d H:i:s");
$cost->current_cost_with_add_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($cost, $cost->current_cost_with_add_name);

// create
$query = checkCreate($cost);

returnSuccess($cost, "Current cost create", $query);
