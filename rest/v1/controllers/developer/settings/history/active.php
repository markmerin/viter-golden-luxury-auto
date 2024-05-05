<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/history/History.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("historyid", $_GET)) {
        // check data
        checkPayload($data);

        $history->history_aid = $_GET['historyid'];
        $history->history_is_active = trim($data["isActive"]);
        $history->history_datetime = date("Y-m-d H:i:s");

        checkId($history->history_aid);

        $query = checkActive($history);
        http_response_code(200);
        returnSuccess($history, "history Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
