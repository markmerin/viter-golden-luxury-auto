<?php

use \Firebase\JWT\JWT;
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
$response = new Response();
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    $token = $data['token'];

    $key = "jwt_admin_ko_ito";

    tokenOther($user_other, $token, $key);
}

http_response_code(200);
