<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/expense/cogs/Cogs.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("cogsid", $_GET)) {
        // check data
        checkPayload($data);

        $cogs->cogs_aid = $_GET['cogsid'];
        $cogs->cogs_is_active = trim($data["isActive"]);
        $cogs->cogs_datetime = date("Y-m-d H:i:s");

        checkId($cogs->cogs_aid);

        $query = checkActive($cogs);
        http_response_code(200);
        returnSuccess($cogs, "Cogs Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
