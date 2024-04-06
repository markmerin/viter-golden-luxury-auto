<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$record_files = new RecordFiles($conn);
// get $_GET data
if (array_key_exists("recordsfilesid", $_GET)) {
    // get data
    $record_files->record_files_aid  = $_GET['recordsfilesid'];
    checkId($record_files->record_files_aid);
    $query = checkDelete($record_files);
    returnSuccess($record_files, "Record Files", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
