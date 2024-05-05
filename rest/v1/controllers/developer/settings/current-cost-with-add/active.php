<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/current-cost-with-add/CurrentCostWithAdd.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cost = new CurrentCostWithAdd($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("costid", $_GET)) {
        // check data
        checkPayload($data);

        $cost->current_cost_with_add_aid = $_GET['costid'];
        $cost->current_cost_with_add_is_active = trim($data["isActive"]);
        $cost->current_cost_with_add_datetime = date("Y-m-d H:i:s");

        checkId($cost->current_cost_with_add_aid);

        $query = checkActive($cost);
        http_response_code(200);
        returnSuccess($cost, "Curent cost active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
