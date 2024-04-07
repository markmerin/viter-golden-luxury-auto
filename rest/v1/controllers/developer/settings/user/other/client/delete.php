<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
// get $_GET data
if (array_key_exists("userotherid", $_GET)) {
    // get data
    $user_other->user_other_aid = $_GET['userotherid'];
    checkId($user_other->user_other_aid);
    // delete
    $query = checkDelete($user_other);
    returnSuccess($user_other, "User other", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
