<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$records_files = new RecordFiles($conn);
// get should not be present
if (array_key_exists("clientid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$records_files->record_files_is_active = 1;
$records_files->record_files_doc_name = checkIndex($data, "client_lname");
$records_files->record_files_date = checkIndex($data, "client_fname");
$records_files->record_files_remarks = checkIndex($data, "client_contact");
$records_files->record_files_client_id = checkIndex($data, "client_contact");

$records_files->record_files_created = date("Y-m-d H:i:s");
$records_files->record_files_datetime = date("Y-m-d H:i:s");
// check email
isEmailExist($records_files, $records_files->record_files_doc_name);

// create
$query = checkCreate($records_files);
returnSuccess($records_files, "Records Files", $query);
