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
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET) && array_key_exists("clientid", $_GET)) {
        // get data
        $record_files->record_files_start = $_GET['start'];
        $record_files->record_files_client_id = $_GET['clientid'];
        $record_files->record_files_total = 10;

        checkLimitId($record_files->record_files_start, $record_files->record_files_total);
        $query = checkReadLimit($record_files);
        $total_result = checkReadAll($record_files);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $record_files->record_files_total,
            $record_files->record_files_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
