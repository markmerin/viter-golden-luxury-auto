<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);

if (array_key_exists("incomeitemid", $_GET)) {
    $income_item->income_item_aid = $_GET['incomeitemid'];

    checkId($income_item->income_item_aid);

    $query = checkReadById($income_item);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($income_item);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
