<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
// get $_GET data

if (array_key_exists("userotherid", $_GET)) {
    $user_other->user_other_aid = $_GET['userotherid'];
    checkId($user_other->user_other_aid);
    $query = checkReadById($user_other);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($user_other);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
