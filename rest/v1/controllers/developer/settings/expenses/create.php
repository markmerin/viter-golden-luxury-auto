<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);
// get should not be present
if (array_key_exists("expensesid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$expenses->expenses_is_active = 1;
$expenses->expenses_name = checkIndex($data, "expenses_name");
$expenses->expenses_created = date("Y-m-d H:i:s");
$expenses->expenses_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($expenses, $expenses->expenses_name);

// create
$query = checkCreate($expenses);

returnSuccess($expenses, "Expenses Create", $query);
