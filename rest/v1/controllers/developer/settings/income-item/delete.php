<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);

if (array_key_exists("incomeitemid", $_GET)) {
    // get data
    $income_item->income_item_aid = $_GET['incomeitemid'];

    // validations
    checkId($income_item->income_item_aid);

    $query = checkDelete($income_item);
    returnSuccess($income_item, "Income Category Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
