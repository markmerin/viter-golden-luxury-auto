<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$record_files = new RecordFiles($conn);
// get $_GET data

if (array_key_exists("recordfilesid", $_GET)) {
    $record_files->record_files_aid  = $_GET['recordfilesid'];
    checkId($record_files->record_files_aid);
    $query = checkReadById($car);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($record_files);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
