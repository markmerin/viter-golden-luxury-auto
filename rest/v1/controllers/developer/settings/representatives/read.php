<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);

if (array_key_exists("representativesid", $_GET)) {
    $representatives->representatives_aid = $_GET['representativesid'];

    checkId($representatives->representatives_aid);

    $query = checkReadById($representatives);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($representatives);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
