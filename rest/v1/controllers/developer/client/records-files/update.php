<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$record_files = new RecordFiles($conn);

if (array_key_exists("recordsfilesid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $record_files->record_files_aid  = $_GET['recordsfilesid'];
    checkId($record_files->record_files_aid);

    // get data
    $record_files->record_files_doc_name = strtolower($data["record_files_doc_name"]);
    $record_files->record_files_date = $data["record_files_date"];
    $record_files->record_files_remarks = $data["record_files_remarks"];
    $record_files->record_files_client_id = $data["record_files_client_id"];
    $record_files->record_files_gdrive = $data["record_files_gdrive"];

    $record_files->record_files_datetime = date("Y-m-d H:i:s");

    $record_files_doc_name_old = checkIndex($data, "record_files_doc_name_old");

    compareName($record_files, $record_files_doc_name_old, $record_files->record_files_doc_name);

    // update
    $query = checkUpdate($record_files);
    returnSuccess($record_files, "Record Files", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
