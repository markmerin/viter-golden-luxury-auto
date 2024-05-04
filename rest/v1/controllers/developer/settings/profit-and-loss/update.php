<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profitsAndLoss = new ProfitAndLoss($conn);

if (array_key_exists("profitid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $profitsAndLoss->profit_and_loss_aid = $_GET['profitid'];
    $profitsAndLoss->profit_and_loss_name = checkIndex($data, "profit_and_loss_name");
    $profitsAndLoss->profit_and_loss_datetime = date("Y-m-d H:i:s");

    $profit_and_loss_name_old = checkIndex($data, "profit_and_loss_name_old");
    checkId($profitsAndLoss->profit_and_loss_aid);

    // validation
    compareName($profitsAndLoss, $profit_and_loss_name_old, $profitsAndLoss->profit_and_loss_name);

    // update
    $query = checkUpdate($profitsAndLoss);
    returnSuccess($profitsAndLoss, "Profit and Loss update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
