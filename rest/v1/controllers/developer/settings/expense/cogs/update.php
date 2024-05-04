<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);

if (array_key_exists("cogsid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $cogs->cogs_aid = $_GET['cogsid'];
    $cogs->cogs_name = checkIndex($data, "cogs_name");
    $cogs->cogs_datetime = date("Y-m-d H:i:s");

    $cogs_name_old = checkIndex($data, "cogs_name_old");
    checkId($cogs->cogs_aid);

    // validation
    compareName($cogs, $cogs_name_old, $cogs->cogs_name);

    // update
    $query = checkUpdate($cogs);
    returnSuccess($cogs, "Cogs update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
