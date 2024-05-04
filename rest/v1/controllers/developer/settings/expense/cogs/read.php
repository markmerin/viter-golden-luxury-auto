<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$cogs = new Cogs($conn);

if (array_key_exists("cogsid", $_GET)) {
    $cogs->cogs_aid = $_GET['cogsid'];

    checkId($cogs->cogs_aid);

    $query = checkReadById($cogs);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($cogs);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
