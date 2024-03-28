<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);

if (array_key_exists("expensesid", $_GET)) {
    // get data
    $expenses->expenses_aid = $_GET['expensesid'];

    // validations
    checkId($expenses->expenses_aid);

    $query = checkDelete($expenses);
    returnSuccess($expenses, "Expenses Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
