<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserSystem($conn);
// get $_GET data
if (array_key_exists("usersystemid", $_GET)) {
    // get data
    $user_system->user_system_aid = $_GET['usersystemid'];
    checkId($user_system->user_system_aid);
    // delete
    $query = checkDelete($user_system);
    returnSuccess($user_system, "User system", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
