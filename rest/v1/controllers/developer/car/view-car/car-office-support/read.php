<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new CarOfficeSupport($conn);

if (array_key_exists("carofficeid", $_GET)) {
    $officeSupport->car_office_support_aid = $_GET['carofficeid'];

    checkId($officeSupport->car_office_support_aid);

    $query = checkReadById($officeSupport);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($officeSupport);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
