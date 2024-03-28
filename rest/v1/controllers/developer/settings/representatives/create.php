<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$representatives = new Representatives($conn);
// get should not be present
if (array_key_exists("representativesid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$representatives->representatives_is_active = 1;
$representatives->representatives_fname = checkIndex($data, "representatives_fname");
$representatives->representatives_lname = checkIndex($data, "representatives_lname");
$representatives->representatives_email = checkIndex($data, "representatives_email");
$representatives->representatives_created = date("Y-m-d H:i:s");
$representatives->representatives_datetime = date("Y-m-d H:i:s");

$representatives->representatives_fullname = "$representatives->representatives_fname $representatives->representatives_lname";

// validations 
isNameExist($representatives, $representatives->representatives_fullname);

// create
$query = checkCreate($representatives);

returnSuccess($representatives, "Representatives Create", $query);
