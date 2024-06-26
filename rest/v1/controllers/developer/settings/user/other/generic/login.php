<?php

// set http header
require '../../../../../../core/header.php';
// use needed functions
require '../../../../../../core/functions.php';
// use JWT
require '../../../../../../jwt/vendor/autoload.php';
// use needed classes
require '../../../../../../models/developer/settings/user/other/Generic.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$user_other = new Generic($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    $user_other->user_other_email = $data['user_other_email'];
    $password = $data['password'];

    $key = "jwt_admin_ko_ito";

    $result = checkLogin($user_other);

    $row = $result->fetch(PDO::FETCH_ASSOC);
    extract($row);

    loginAccess(
        $password,
        $user_other_password,
        $user_other_email,
        $row,
        $result,
        $key
    );
}

http_response_code(200);
