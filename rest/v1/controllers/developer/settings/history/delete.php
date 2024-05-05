<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);

if (array_key_exists("historyid", $_GET)) {
    // get data
    $history->history_aid = $_GET['historyid'];

    // validations
    checkId($history->history_aid);

    $query = checkDelete($history);
    returnSuccess($history, "history Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
