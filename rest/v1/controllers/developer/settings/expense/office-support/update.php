<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new OfficeSupport($conn);

if (array_key_exists("officeid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $officeSupport->office_support_aid = $_GET['officeid'];
    $officeSupport->office_support_name = checkIndex($data, "office_support_name");
    $officeSupport->office_support_datetime = date("Y-m-d H:i:s");

    $office_support_name_old = checkIndex($data, "office_support_name_old");
    checkId($officeSupport->office_support_aid);

    // validation
    compareName($officeSupport, $office_support_name_old, $officeSupport->office_support_name);

    // update
    $query = checkUpdate($officeSupport);
    returnSuccess($officeSupport, "Direct Delivery update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
