<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);

if (array_key_exists("representativesid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $representatives->representatives_aid = $_GET['representativesid'];
    $representatives->representatives_fname = checkIndex($data, "representatives_fname");
    $representatives->representatives_lname = checkIndex($data, "representatives_lname");
    $representatives->representatives_email = checkIndex($data, "representatives_email");
    $representatives->representatives_datetime = date("Y-m-d H:i:s");

    $representatives_fname_old = checkIndex($data, "representatives_fname_old");
    $representatives_lname_old = checkIndex($data, "representatives_lname_old");

    checkId($representatives->representatives_aid);

    $representatives->representatives_fullname = "$representatives->representatives_fname $representatives->representatives_lname";
    $representatives_fullname_old = "$representatives_fname_old $representatives_lname_old";


    // validation
    compareName($representatives, $representatives_fullname_old, $representatives->representatives_fullname);

    // update
    $query = checkUpdate($representatives);
    returnSuccess($representatives, "Representatives update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
