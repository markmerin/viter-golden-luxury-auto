<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$officeSupport = new OfficeSupport($conn);

if (array_key_exists("directid", $_GET)) {
    $officeSupport->office_support_aid = $_GET['directid'];

    checkId($officeSupport->office_support_aid);

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
