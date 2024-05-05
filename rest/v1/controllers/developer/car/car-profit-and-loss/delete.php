<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carProfitAndLoss = new CarProfitAndLoss($conn);

if (array_key_exists("carprofitid", $_GET)) {
    // get data
    $carProfitAndLoss->car_profit_and_loss_aid = $_GET['carprofitid'];

    // validations
    checkId($carProfitAndLoss->car_profit_and_loss_aid);
    // isAssociated($carProfitAndLoss);

    $query = checkDelete($carProfitAndLoss);
    returnSuccess($carProfitAndLoss, "Car Profit and loss Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
