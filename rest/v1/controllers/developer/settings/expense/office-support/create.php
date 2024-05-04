<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new OfficeSupport($conn);
// get should not be present
if (array_key_exists("officeid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$officeSupport->office_support_is_active = 1;
$officeSupport->office_support_name = checkIndex($data, "office_support_name");
$officeSupport->office_support_created = date("Y-m-d H:i:s");
$officeSupport->office_support_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($officeSupport, $officeSupport->office_support_name);

// create
$query = checkCreate($officeSupport);

returnSuccess($officeSupport, "Office support Create", $query);
