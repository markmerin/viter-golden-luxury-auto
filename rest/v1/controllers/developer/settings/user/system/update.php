<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_system = new UserSystem($conn);
$encrypt = new Encryption();
// use notification template
require '../../../../../notification/verify-email.php';

if (array_key_exists("usersystemid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $user_system->user_system_aid = $_GET['usersystemid'];
    $user_system->user_system_fname = checkIndex($data, "user_system_fname");
    $user_system->user_system_lname = checkIndex($data, "user_system_lname");
    $user_system->user_system_email = checkIndex($data, "user_system_email");
    $user_system->user_system_role_id = checkIndex($data, "user_system_role_id");
    $user_system->user_system_datetime = date("Y-m-d H:i:s");
    $user_system_email_old = strtolower($data["user_system_email_old"]);
    $user_system->user_system_key = $encrypt->doHash(rand());
    $link = "/developer/verify-email";
    checkId($user_system->user_system_aid);
    // check name
    compareEmail($user_system, $user_system_email_old, $user_system->user_system_email);
    // update
    if ($user_system->user_system_email != $user_system_email_old) {
        checkUpdateUserKeyAndNewEmail($user_system);
        sendEmailVerify(
            $link,
            $user_system->user_system_fname,
            $user_system_email_old,
            $user_system->user_system_email,
            $user_system->user_system_key
        );
    }
    $query = checkUpdate($user_system);
    returnSuccess($user_system, "User system", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
