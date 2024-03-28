<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);

if (array_key_exists("carmakeid", $_GET)) {
    // get data
    $car_make->car_make_aid = $_GET['carmakeid'];

    // validations
    checkId($car_make->car_make_aid);

    $query = checkDelete($car_make);
    returnSuccess($car_make, "Car Make Delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
