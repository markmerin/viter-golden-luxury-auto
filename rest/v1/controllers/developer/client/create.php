<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);
// get should not be present
if (array_key_exists("clientid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$client->client_fname = checkIndex($data, "client_fname");
$client->client_is_active = 1;
$client->client_lname = checkIndex($data, "client_lname");
$client->client_contact = checkIndex($data, "client_contact");
$client->client_email = checkIndex($data, "client_email");
$client->client_created = date("Y-m-d H:i:s");
$client->client_datetime = date("Y-m-d H:i:s");
// check email
isEmailExist($client, $client->client_email);

// create
$query = checkCreate($client);
returnSuccess($client, "Client", $query);
