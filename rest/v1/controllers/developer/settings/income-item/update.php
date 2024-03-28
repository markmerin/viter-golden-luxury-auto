<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);

if (array_key_exists("incomeitemid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $income_item->income_item_aid = $_GET['incomeitemid'];
    $income_item->income_item_name = checkIndex($data, "income_item_name");
    $income_item->income_item_category_id = checkIndex($data, "income_item_category_id");
    $income_item->income_item_datetime = date("Y-m-d H:i:s");

    $income_item_name_old = checkIndex($data, "income_item_name_old");
    checkId($income_item->income_item_aid);

    // validation
    compareName($income_item, $income_item_name_old, $income_item->income_item_name);

    // update
    $query = checkUpdate($income_item);
    returnSuccess($income_item, "Income item update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
