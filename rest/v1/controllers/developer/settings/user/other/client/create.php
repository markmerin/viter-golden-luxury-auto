<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new UserOther($conn);
$encrypt = new Encryption();
// use notification template
require '../../../../../../notification/verify-account.php';
// get should not be present
if (array_key_exists("userotherid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$user_other->user_other_fname = checkIndex($data, "user_other_fname");
$user_other->user_other_is_active = 1;
$user_other->user_other_lname = checkIndex($data, "user_other_lname");
$user_other->user_other_email = checkIndex($data, "user_other_email");
$user_other->user_other_role_id = checkIndex($data, "user_other_role_id");
$user_other->user_other_key = $encrypt->doHash(rand());
$user_other->user_other_created = date("Y-m-d H:i:s");
$user_other->user_other_datetime = date("Y-m-d H:i:s");
$password_link = "/other/create-password";
// check email
isEmailExist($user_other, $user_other->user_other_email);
// send email notification
sendEmail(
    $password_link,
    $user_other->user_other_fname,
    $user_other->user_other_email,
    $user_other->user_other_key
);
// create
$query = checkCreate($user_other);
returnSuccess($user_other, "User other", $query);
