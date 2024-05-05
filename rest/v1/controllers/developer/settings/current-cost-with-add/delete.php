<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCostWithAdd($conn);

if (array_key_exists("costid", $_GET)) {
    // get data
    $cost->current_cost_with_add_aid = $_GET['costid'];

    // validations
    checkId($cost->current_cost_with_add_aid);

    // isAssociated($cost);

    $query = checkDelete($cost);
    returnSuccess($cost, "Current cost delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
