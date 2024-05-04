<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profitsAndLoss = new ProfitAndLoss($conn);
// get should not be present
if (array_key_exists("profitid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

$profitsAndLoss->profit_and_loss_is_active = 1;
$profitsAndLoss->profit_and_loss_name = checkIndex($data, "profit_and_loss_name");
$profitsAndLoss->profit_and_loss_created = date("Y-m-d H:i:s");
$profitsAndLoss->profit_and_loss_datetime = date("Y-m-d H:i:s");

// validations 
isNameExist($profitsAndLoss, $profitsAndLoss->profit_and_loss_name);

// create
$query = checkCreate($profitsAndLoss);

returnSuccess($profitsAndLoss, "Profit and Loss Create", $query);
