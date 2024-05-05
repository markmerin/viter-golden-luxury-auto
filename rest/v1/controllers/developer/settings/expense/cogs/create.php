<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);
// get should not be present
if (array_key_exists("cogsid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$cogs->cogs_is_active = 1;
$cogs->cogs_name = checkIndex($data, "cogs_name");
$cogs->cogs_created = date("Y-m-d H:i:s");
$cogs->cogs_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($cogs, $cogs->cogs_name);

// create
$query = checkCreate($cogs);

returnSuccess($cogs, "Cogs Create", $query);
