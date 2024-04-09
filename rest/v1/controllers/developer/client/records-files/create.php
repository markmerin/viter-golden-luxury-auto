<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$record_files = new RecordFiles($conn);
// get should not be present
if (array_key_exists("recordfilesid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

// get data
$record_files->record_files_is_active = 1;
$record_files->record_files_doc_name = strtolower($data["record_files_doc_name"]);
$record_files->record_files_date = $data["record_files_date"];
$record_files->record_files_remarks = $data["record_files_remarks"];
$record_files->record_files_client_id = $data["record_files_client_id"];
$record_files->record_files_gdrive = $data["record_files_gdrive"];

$record_files->record_files_created = date("Y-m-d H:i:s");
$record_files->record_files_datetime = date("Y-m-d H:i:s");

isNameExist($record_files, $record_files->record_files_doc_name);

// create
$query = checkCreate($record_files);
returnSuccess($record_files, "Record Files", $query);
