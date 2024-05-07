<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carHistory = new CarHistory($conn);

if (array_key_exists("carhistoryid", $_GET)) {
    // get data
    $carHistory->car_history_aid = $_GET['carhistoryid'];

    // validations
    checkId($carHistory->car_history_aid);
    isAssociated($carHistory);

    $query = checkDelete($carHistory);
    returnSuccess($carHistory, "Car History Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
