<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);

if (array_key_exists("incomecategoryid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $income_category->income_category_aid = $_GET['incomecategoryid'];
    $income_category->income_category_name = checkIndex($data, "income_category_name");
    $income_category->income_category_datetime = date("Y-m-d H:i:s");

    $income_category_name_old = checkIndex($data, "income_category_name_old");
    checkId($income_category->income_category_aid);

    // validation
    compareName($income_category, $income_category_name_old, $income_category->income_category_name);

    // update
    $query = checkUpdate($income_category);
    returnSuccess($income_category, "Income Category update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
