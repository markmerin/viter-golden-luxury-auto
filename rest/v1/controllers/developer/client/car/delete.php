<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car = new Car($conn);
// get $_GET data
if (array_key_exists("carid", $_GET)) {
    // get data
    $car->car_aid = $_GET['carid'];
    checkId($car->car_aid);
    // delete
    $query = checkDelete($car);
    returnSuccess($car, "Car", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
