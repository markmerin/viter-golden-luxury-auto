<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$maintenance = new Maintenance($conn);
// get should not be present
if (array_key_exists("maintenanceid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$maintenance->maintenance_is_for_client = $data["maintenance_is_for_client"];
$maintenance->maintenance_is_for_admin = $data["maintenance_is_for_admin"];
$maintenance->maintenance_created = date("Y-m-d H:i:s");
$maintenance->maintenance_datetime = date("Y-m-d H:i:s");

// create
$query = checkCreate($maintenance);
returnSuccess($maintenance, "Role", $query);
