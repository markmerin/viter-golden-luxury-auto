<?php
require 'functions.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$maintenance = new Maintenance($conn);

if (array_key_exists("maintenanceid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $maintenance->maintenance_aid = $GET["maintenanceid"];
    checkId($maintenance->maintenance_aid);


    // only if client
    if (array_key_exists("maintenance_is_for_client", $data)) {
        $maintenance->maintenance_is_for_client = $data["maintenance_is_for_client"];
        // update
        $query = checkUpdate($maintenance);
        returnSuccess($maintenance, "Maintenance", $query);
    }

    // only if for all
    if (array_key_exists("maintenance_is_for_client", $data) && array_key_exists("maintenance_is_for_admin", $data)) {
        $maintenance->maintenance_is_for_client = $data["maintenance_is_for_client"];
        $maintenance->maintenance_is_for_admin = $data["maintenance_is_for_admin"];
        $maintenance->maintenance_datetime = date("Y-m-d H:i:s");
        $query = checkUpdateForAll($maintenance);
        returnSuccess($maintenance, "Maintenance", $query);
    }
}

// return 404 error if endpoint not available
checkEndpoint();
