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
    // check data
    checkPayload($data);
    // get data
    $quicklink->quicklink_aid = $_GET['quicklinkid'];
    $quicklink->quicklink_name = checkIndex($data, "quicklink_name");
    $quicklink->quicklink_link = checkIndex($data, "quicklink_link");
    $quicklink_name_old = checkIndex($data, "quicklink_name_old");
    $quicklink->quicklink_datetime = date("Y-m-d H:i:s");
    checkId($quicklink->quicklink_aid);
    // update
    compareName($quicklink, $quicklink_name_old, $quicklink->quicklink_name);

    $query = checkUpdate($quicklink);
    returnSuccess($quicklink, "quicklink", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
