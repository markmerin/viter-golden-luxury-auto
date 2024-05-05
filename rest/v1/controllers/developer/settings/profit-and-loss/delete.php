<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$profitsAndLoss = new ProfitAndLoss($conn);

if (array_key_exists("profitid", $_GET)) {
    // get data
    $profitsAndLoss->profit_and_loss_aid = $_GET['profitid'];

    // validations
    checkId($profitsAndLoss->profit_and_loss_aid);
    isAssociated($profitsAndLoss);

    $query = checkDelete($profitsAndLoss);
    returnSuccess($profitsAndLoss, "Profit and loss Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
