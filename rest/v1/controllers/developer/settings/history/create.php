<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$history = new History($conn);
// get should not be present
if (array_key_exists("historyid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$history->history_is_active = 1;
$history->history_name = checkIndex($data, "history_name");

$history->history_created = date("Y-m-d H:i:s");
$history->history_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($history, $history->history_name);

// create
$query = checkCreate($history);

returnSuccess($history, "history Create", $query);
