<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/income-item/IncomeItem.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("incomeitemid", $_GET)) {
        // check data
        checkPayload($data);

        $income_item->income_item_aid = $_GET['incomeitemid'];
        $income_item->income_item_is_active = trim($data["isActive"]);
        $income_item->income_item_datetime = date("Y-m-d H:i:s");

        checkId($income_item->income_item_aid);

        $query = checkActive($income_item);
        http_response_code(200);
        returnSuccess($income_item, "Income Item Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
