<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCostWithAdd($conn);

if (array_key_exists("costid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $cost->current_cost_with_add_aid = $_GET['costid'];
    $cost->current_cost_with_add_name = checkIndex($data, "current_cost_with_add_name");
    $cost->current_cost_with_add_datetime = date("Y-m-d H:i:s");

    $current_cost_with_add_name_old = checkIndex($data, "current_cost_with_add_name_old");
    checkId($cost->current_cost_with_add_aid);

    // validation
    compareName($cost, $current_cost_with_add_name_old, $cost->current_cost_with_add_name);

    // update
    $query = checkUpdate($cost);
    returnSuccess($cost, "Current cost update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
