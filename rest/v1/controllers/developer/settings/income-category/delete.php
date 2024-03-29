<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);

if (array_key_exists("incomecategoryid", $_GET)) {
    // get data
    $income_category->income_category_aid = $_GET['incomecategoryid'];

    // validations
    checkId($income_category->income_category_aid);
    isCategoryAssociated($income_category);
    $query = checkDelete($income_category);
    returnSuccess($income_category, "Income Category Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
