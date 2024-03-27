<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new Userother($conn);
$encrypt = new Encryption();
// use notification template
require '../../../../../../notification/verify-email.php';

if (array_key_exists("userotherid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $user_other->user_other_aid = $_GET['userotherid'];
    $user_other->user_other_fname = checkIndex($data, "user_other_fname");
    $user_other->user_other_lname = checkIndex($data, "user_other_lname");
    $user_other->user_other_email = checkIndex($data, "user_other_email");
    $user_other->user_other_role_id = checkIndex($data, "user_other_role_id");
    $user_other_email_old = checkIndex($data, "user_other_email_old");
    $user_other->user_other_key = $encrypt->doHash(rand());
    $user_other->user_other_datetime = date("Y-m-d H:i:s");
    $link = "/other/verify-email";
    checkId($user_other->user_other_aid);
    // check name
    compareEmail($user_other, $user_other_email_old, $user_other->user_other_email);
    // update
    if ($user_other->user_other_email != $user_other_email_old) {
        checkUpdateUserKeyAndNewEmail($user_other);
        sendEmailVerify(
            $link,
            $user_other->user_other_fname,
            $user_other_email_old,
            $user_other->user_other_email,
            $user_other->user_other_key
        );
    }
    // update
    $query = checkUpdate($user_other);
    returnSuccess($user_other, "User other", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
