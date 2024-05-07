<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/CarOfficeSupport.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new CarOfficeSupport($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("carofficeid", $_GET)) {
        // check data
        checkPayload($data);

        $officeSupport->car_office_support_aid = $_GET['carofficeid'];
        $officeSupport->car_office_support_is_active = trim($data["isActive"]);
        $officeSupport->car_office_support_datetime = date("Y-m-d H:i:s");

        checkId($officeSupport->car_office_support_aid);

        $query = checkActive($officeSupport);
        http_response_code(200);
        returnSuccess($officeSupport, "Car office support Active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
