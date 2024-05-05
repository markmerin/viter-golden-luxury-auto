<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCost($conn);

if (array_key_exists("costid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $cost->current_cost_aid = $_GET['costid'];
    $cost->current_cost_name = checkIndex($data, "current_cost_name");
    $cost->current_cost_datetime = date("Y-m-d H:i:s");

    $current_cost_name_old = checkIndex($data, "current_cost_name_old");
    checkId($cost->current_cost_aid);

    // validation
    compareName($cost, $current_cost_name_old, $cost->current_cost_name);

    // update
    $query = checkUpdate($cost);
    returnSuccess($cost, "Current cost update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
