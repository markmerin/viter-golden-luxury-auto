<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/representatives/Representatives.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("representativesid", $_GET)) {
        // check data
        checkPayload($data);

        $representatives->representatives_aid = $_GET['representativesid'];
        $representatives->representatives_is_active = trim($data["isActive"]);
        $representatives->representatives_datetime = date("Y-m-d H:i:s");

        checkId($representatives->representatives_aid);

        $query = checkActive($representatives);
        http_response_code(200);
        returnSuccess($representatives, "Representatives Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
