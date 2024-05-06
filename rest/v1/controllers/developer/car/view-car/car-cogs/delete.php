<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carCogs = new CarCogs($conn);

if (array_key_exists("carcogsid", $_GET)) {
    // get data
    $carCogs->car_cogs_aid = $_GET['carcogsid'];

    // validations
    checkId($carCogs->car_cogs_aid);
    // isAssociated($carCogs);

    $query = checkDelete($carCogs);
    returnSuccess($carCogs, "Car Cogs Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
