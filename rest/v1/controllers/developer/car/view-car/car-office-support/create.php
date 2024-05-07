<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new CarOfficeSupport($conn);
// get should not be present
if (array_key_exists("carofficeid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$officeSupport->car_office_support_is_active = 1;
$officeSupport->car_office_support_car_id = checkIndex($data, "car_office_support_car_id");
$officeSupport->car_office_support_date = checkIndex($data, "car_office_support_date");
$officeSupport->car_office_support_id = checkIndex($data, "car_office_support_id");
$officeSupport->car_office_support_amount = checkIndex($data, "car_office_support_amount");
$officeSupport->car_office_support_created = date("Y-m-d H:i:s");
$officeSupport->car_office_support_datetime = date("Y-m-d H:i:s");

// validations 
isIdExist($officeSupport, $officeSupport->car_office_support_car_id);

// create
$query = checkCreate($officeSupport);

returnSuccess($officeSupport, "Car office support Create", $query);
