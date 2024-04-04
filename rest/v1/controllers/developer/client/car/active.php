<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/client/car/Car.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car = new Car($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("carid", $_GET)) {
        // check data
        checkPayload($data);
        $car->car_aid = $_GET['carid'];
        $car->car_is_active = trim($data["isActive"]);
        checkId($car->car_aid);
        $query = checkActive($car);
        http_response_code(200);
        returnSuccess($car, "Car", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
