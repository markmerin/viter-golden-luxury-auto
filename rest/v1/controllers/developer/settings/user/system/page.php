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
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $user_system->user_system_start = $_GET['start'];
        $user_system->user_system_total = 10;

        checkLimitId($user_system->user_system_start, $user_system->user_system_total);
        $query = checkReadLimit($user_system);
        $total_result = checkReadAll($user_system);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $user_system->user_system_total,
            $user_system->user_system_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
