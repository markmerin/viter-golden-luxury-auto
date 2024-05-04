<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profitsAndLoss = new ProfitAndLoss($conn);

if (array_key_exists("profitid", $_GET)) {
    $profitsAndLoss->profit_and_loss_aid = $_GET['profitid'];

    checkId($profitsAndLoss->profit_and_loss_aid);

    $query = checkReadById($profitsAndLoss);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($profitsAndLoss);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
