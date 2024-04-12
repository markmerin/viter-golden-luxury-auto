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
    // get data
    $quicklink->quicklink_aid = $_GET['quicklinkid'];
    checkId($quicklink->quicklink_aid);

    $query = checkDelete($quicklink);

    returnSuccess($quicklink, "quicklink", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
