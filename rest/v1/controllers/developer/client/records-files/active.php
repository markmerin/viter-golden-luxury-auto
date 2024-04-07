<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/client/record-files/RecordFiles.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$record_files = new RecordFiles($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("recordsfilesid", $_GET)) {
        // check data
        checkPayload($data);
        $record_files->record_files_aid  = $_GET['recordsfilesid'];
        $record_files->record_files_is_active = trim($data["isActive"]);
        checkId($record_files->record_files_aid);
        $query = checkActive($record_files);
        http_response_code(200);
        returnSuccess($record_files, "Record Files", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
