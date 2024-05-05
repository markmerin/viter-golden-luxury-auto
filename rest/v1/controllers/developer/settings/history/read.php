<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);

if (array_key_exists("historyid", $_GET)) {
    $history->history_aid = $_GET['historyid'];

    checkId($history->history_aid);

    $query = checkReadById($history);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($history);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
