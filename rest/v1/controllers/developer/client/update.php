<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);

if (array_key_exists("clientid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $client->client_aid = $_GET['clientid'];
    checkId($client->client_aid);

    $client->client_fname = checkIndex($data, "client_fname");
    $client->client_lname = checkIndex($data, "client_lname");
    $client->client_contact = checkIndex($data, "client_contact");
    $client->client_email = checkIndex($data, "client_email");
    $client_email_old = checkIndex($data, "client_email_old");
    $client->client_datetime = date("Y-m-d H:i:s");

    // check name
    compareEmail($client, $client_email_old, $client->client_email);

    // update
    $query = checkUpdate($client);
    returnSuccess($client, "Client", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
