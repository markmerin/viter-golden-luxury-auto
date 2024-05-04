<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new OfficeSupport($conn);

if (array_key_exists("officeid", $_GET)) {
    // get data
    $officeSupport->office_support_aid = $_GET['officeid'];

    // validations
    checkId($officeSupport->office_support_aid);
    // isAssociated($officeSupport);

    $query = checkDelete($officeSupport);
    returnSuccess($officeSupport, "Office support Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
