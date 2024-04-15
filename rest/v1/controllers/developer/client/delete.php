<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new Client($conn);
// get $_GET data
if (array_key_exists("clientid", $_GET)) {
    // get data
    $client->client_aid = $_GET['clientid'];
    checkId($client->client_aid);

    $queryCar = $client->checkCarAssociation();
    $queryRecordAndFile = $client->checkRecordAndFileAssociation();

    if ($queryCar->rowCount() > 0 || $queryRecordAndFile->rowCount() > 0) {
        returnError("You cannot delete this item because it is already associated with other module.");
    }

    // delete
    $query = checkDelete($client);
    returnSuccess($client, "Client", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
