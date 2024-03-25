<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new Userother($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("userotherid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $user_other->user_other_aid = $_GET['userotherid'];
    $user_other->user_other_role_id = checkIndex($data, "user_other_role_id");
    $user_other->user_other_datetime = date("Y-m-d H:i:s");
    checkId($user_other->user_other_aid);
    // update
    $query = checkUpdate($user_other);
    returnSuccess($user_other, "User other", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
