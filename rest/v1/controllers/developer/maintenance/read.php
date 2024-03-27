<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$maintenance = new Maintenance($conn);


if (empty($_GET)) {
    $query = checkReadAll($maintenance);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
