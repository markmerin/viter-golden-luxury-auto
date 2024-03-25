<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserSystem($conn);
// get $_GET data

if (array_key_exists("usersystemid", $_GET)) {
    $user_system->user_system_aid = $_GET['usersystemid'];
    checkId($user_system->user_system_aid);
    $query = checkReadById($user_system);
    http_response_code(200);
    getQueriedData($query);
}

// if request is a GET e.g. /user
if (empty($_GET)) {
    $query = checkReadAll($user_system);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
