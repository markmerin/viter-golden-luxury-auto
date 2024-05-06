<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new CarOfficeSupport($conn);

if (array_key_exists("carofficeid", $_GET)) {
    // get data
    $officeSupport->car_office_support_aid = $_GET['carofficeid'];

    // validations
    checkId($officeSupport->car_office_support_aid);
    // isAssociated($officeSupport);

    $query = checkDelete($officeSupport);
    returnSuccess($officeSupport, "Car Office support Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
