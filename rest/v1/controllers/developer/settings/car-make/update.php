<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car_make = new CarMake($conn);

if (array_key_exists("carmakeid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $car_make->car_make_aid = $_GET['carmakeid'];
    $car_make->car_make_name = checkIndex($data, "car_make_name");
    $car_make->car_make_datetime = date("Y-m-d H:i:s");

    $car_make_name_old = checkIndex($data, "car_make_name_old");
    checkId($car_make->car_make_aid);

    // validation
    compareName($car_make, $car_make_name_old, $car_make->car_make_name);

    // update
    $query = checkUpdate($car_make);
    returnSuccess($car_make, "Children List update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
