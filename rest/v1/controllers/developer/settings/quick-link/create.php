<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$quicklink = new Quicklink($conn);
// get should not be present
if (array_key_exists("quicklinkid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$quicklink->quicklink_name = checkIndex($data, "quicklink_name");
$quicklink->quicklink_link = checkIndex($data, "quicklink_link");
$quicklink->quicklink_is_active = 1;
$quicklink->quicklink_created = date("Y-m-d H:i:s");
$quicklink->quicklink_datetime = date("Y-m-d H:i:s");
// check name
isNameExist($quicklink, $quicklink->quicklink_name);
// create
$query = checkCreate($quicklink);
// add column
returnSuccess($quicklink, "quicklink", $query);
