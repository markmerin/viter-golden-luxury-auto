<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/CarCogs.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carCogs = new CarCogs($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("carcogsid", $_GET)) {
        // check data
        checkPayload($data);

        $carCogs->car_cogs_aid = $_GET['carcogsid'];
        $carCogs->car_cogs_is_active = trim($data["isActive"]);
        $carCogs->car_cogs_datetime = date("Y-m-d H:i:s");

        checkId($carCogs->car_cogs_aid);

        $query = checkActive($carCogs);
        http_response_code(200);
        returnSuccess($carCogs, "Car Cogs Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
