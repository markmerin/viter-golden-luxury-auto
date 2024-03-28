<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);

if (array_key_exists("incomecategoryid", $_GET)) {
    $income_category->income_category_aid = $_GET['incomecategoryid'];

    checkId($income_category->income_category_aid);

    $query = checkReadById($income_category);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($income_category);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
