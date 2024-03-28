<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);
// get should not be present
if (array_key_exists("incomecategoryid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$income_category->income_category_is_active = 1;
$income_category->income_category_name = checkIndex($data, "income_category_name");
$income_category->income_category_created = date("Y-m-d H:i:s");
$income_category->income_category_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($income_category, $income_category->income_category_name);

// create
$query = checkCreate($income_category);

returnSuccess($income_category, "income_category Create", $query);
