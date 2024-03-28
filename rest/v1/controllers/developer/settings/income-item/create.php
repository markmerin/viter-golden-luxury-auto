<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_item = new IncomeItem($conn);
// get should not be present
if (array_key_exists("incomeitemid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$income_item->income_item_is_active = 1;
$income_item->income_item_name = checkIndex($data, "income_item_name");
$income_item->income_item_category_id = checkIndex($data, "income_item_category_id");
$income_item->income_item_created = date("Y-m-d H:i:s");
$income_item->income_item_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($income_item, $income_item->income_item_name);

// create
$query = checkCreate($income_item);

returnSuccess($income_item, "Income Item Create", $query);
