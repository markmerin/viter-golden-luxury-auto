<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes

require 'functions.php';
require '../../../../models/developer/client/record-files/RecordFiles.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$record_files = new RecordFiles($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $record_files->record_files_search = $data["searchValue"];
    $record_files->record_files_client_id = $data["record_files_client_id"];

    // only if filtering
    if ($data["isFilter"]) {

        // only if search with filter
        if ($record_files->record_files_search != "") {

            $record_files->record_files_is_active = checkIndex($data, "record_files_is_active");
            $query = checkSearchByStatus($record_files);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $record_files->record_files_is_active = checkIndex($data, "record_files_is_active");
        $query = checkFilterByStatus($record_files);
        http_response_code(200);
        getQueriedData($query);
    }

    $query = checkSearch($record_files);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
