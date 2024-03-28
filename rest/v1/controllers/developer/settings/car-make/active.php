<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/car-make/CarMake.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("carmakeid", $_GET)) {
        // check data
        checkPayload($data);

        $car_make->car_make_aid = $_GET['carmakeid'];
        $car_make->car_make_is_active = trim($data["isActive"]);
        $car_make->car_make_datetime = date("Y-m-d H:i:s");

        checkId($car_make->car_make_aid);

        $query = checkActive($car_make);
        http_response_code(200);
        returnSuccess($car_make, "Car Make Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
