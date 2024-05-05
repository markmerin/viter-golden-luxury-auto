<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);

if (array_key_exists("historyid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $history->history_aid = $_GET['historyid'];
    $history->history_name = checkIndex($data, "history_name");

    $history->history_datetime = date("Y-m-d H:i:s");

    $history_name_old = checkIndex($data, "history_name_old");

    checkId($history->history_aid);
    // validation
    compareName($history, $history_name_old, $history->history_name);

    // update
    $query = checkUpdate($history);
    returnSuccess($history, "history update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
