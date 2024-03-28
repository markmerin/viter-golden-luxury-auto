<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);

if (array_key_exists("representativesid", $_GET)) {
    // get data
    $representatives->representatives_aid = $_GET['representativesid'];

    // validations
    checkId($representatives->representatives_aid);

    $query = checkDelete($representatives);
    returnSuccess($representatives, "representatives Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
