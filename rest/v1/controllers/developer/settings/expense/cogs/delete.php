<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);

if (array_key_exists("cogsid", $_GET)) {
    // get data
    $cogs->cogs_aid = $_GET['cogsid'];

    // validations
    checkId($cogs->cogs_aid);
    // isAssociated($cogs);

    $query = checkDelete($cogs);
    returnSuccess($cogs, "Cogs Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
