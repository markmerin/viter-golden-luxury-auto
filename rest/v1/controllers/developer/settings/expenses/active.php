<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/expenses/Expenses.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$expenses = new Expenses($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("expensesid", $_GET)) {
        // check data
        checkPayload($data);

        $expenses->expenses_aid = $_GET['expensesid'];
        $expenses->expenses_is_active = trim($data["isActive"]);
        $expenses->expenses_datetime = date("Y-m-d H:i:s");

        checkId($expenses->expenses_aid);

        $query = checkActive($expenses);
        http_response_code(200);
        returnSuccess($expenses, "Expenses Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
