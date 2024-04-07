<?php

// set http header
require '../../../../../../core/header.php';
// use needed functions
require '../../../../../../core/functions.php';
// use needed classes
require '../../../../../../models/developer/settings/user/other/UserClient.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET)) {
        // get data
        $user_other->user_other_start = $_GET['start'];
        $user_other->user_other_total = 10;

        checkLimitId($user_other->user_other_start, $user_other->user_other_total);
        $query = checkReadLimit($user_other);
        $total_result = checkReadAll($user_other);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $user_other->user_other_total,
            $user_other->user_other_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
