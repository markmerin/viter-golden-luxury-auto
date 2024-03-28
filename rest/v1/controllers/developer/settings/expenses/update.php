<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);

if (array_key_exists("expensesid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $expenses->expenses_aid = $_GET['expensesid'];
    $expenses->expenses_name = checkIndex($data, "expenses_name");
    $expenses->expenses_datetime = date("Y-m-d H:i:s");

    $expenses_name_old = checkIndex($data, "expenses_name_old");
    checkId($expenses->expenses_aid);

    // validation
    compareName($expenses, $expenses_name_old, $expenses->expenses_name);

    // update
    $query = checkUpdate($expenses);
    returnSuccess($expenses, "Expenses update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
