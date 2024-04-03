<?php

// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/client/client.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $client->client_search = $data["searchValue"];

    // only if filtering
    if ($data["isFilter"]) {

        // only if search with filter
        if ($client->client_search != "") {

            $client->client_is_active = checkIndex($data, "client_is_active");
            $query = checkSearchByStatus($client);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $client->client_is_active = checkIndex($data, "client_is_active");
        $query = checkFilterByStatus($client);
        http_response_code(200);
        getQueriedData($query);
    }

    $query = checkSearch($client);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
