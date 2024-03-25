<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/user/system/UserSystem.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserSystem($conn);
$response = new Response();
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
$error = [];
$returnData = [];
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("usersystemkey", $_GET)) {
        // check data
        $user_system->user_system_key = $_GET['usersystemkey'];
        $query = checkReadKey($user_system);
        http_response_code(200);
        getQueriedData($query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
