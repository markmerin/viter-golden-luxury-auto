<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);

if (array_key_exists("expensesid", $_GET)) {
    $expenses->expenses_aid = $_GET['expensesid'];

    checkId($expenses->expenses_aid);

    $query = checkReadById($expenses);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($expenses);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
