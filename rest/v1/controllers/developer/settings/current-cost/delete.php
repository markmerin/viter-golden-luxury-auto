<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCost($conn);

if (array_key_exists("costid", $_GET)) {
    // get data
    $cost->current_cost_aid = $_GET['costid'];

    // validations
    checkId($cost->current_cost_aid);

    // isAssociated($cost);

    $query = checkDelete($cost);
    returnSuccess($cost, "Current cost delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
