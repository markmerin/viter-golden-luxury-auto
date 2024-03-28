<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/income-category/IncomeCategory.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("incomecategoryid", $_GET)) {
        // check data
        checkPayload($data);

        $income_category->income_category_aid = $_GET['incomecategoryid'];
        $income_category->income_category_is_active = trim($data["isActive"]);
        $income_category->income_category_datetime = date("Y-m-d H:i:s");

        checkId($income_category->income_category_aid);

        $query = checkActive($income_category);
        http_response_code(200);
        returnSuccess($income_category, "Income Category Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
