<?php
// set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../models/developer/client/Client.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("clientid", $_GET)) {
        // check data
        checkPayload($data);
        $client->client_aid = $_GET['clientid'];
        checkId($client->client_aid);

        $client->client_bank_name = $data["client_bank_name"];
        $client->client_bank_routing_number = $data["client_bank_routing_number"];
        $client->client_bank_account_number = $data["client_bank_account_number"];

        $query = checkUpdateBankDetails($client);
        http_response_code(200);
        returnSuccess($client, "Client", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
