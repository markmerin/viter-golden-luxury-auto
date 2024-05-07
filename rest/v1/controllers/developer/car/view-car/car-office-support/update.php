<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new CarOfficeSupport($conn);

if (array_key_exists("carofficeid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $officeSupport->car_office_support_aid = $_GET['carofficeid'];
    $officeSupport->car_office_support_amount = checkIndex($data, "car_office_support_amount");
    $officeSupport->car_office_support_datetime = date("Y-m-d H:i:s");

    checkId($officeSupport->car_office_support_aid);

    // update
    $query = checkUpdate($officeSupport);
    returnSuccess($officeSupport, "Car office support update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
