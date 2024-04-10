<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$quicklink = new Quicklink($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("quicklinkid", $_GET)) {
    $quicklink->quicklink_aid = $_GET['quicklinkid'];
    checkId($quicklink->quicklink_aid);
    $query = checkReadById($quicklink);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($quicklink);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
