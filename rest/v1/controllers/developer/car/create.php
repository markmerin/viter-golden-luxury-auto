<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$car = new Car($conn);
// get should not be present
if (array_key_exists("carid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

// get data
$car->car_photo = $data["car_photo"];
$car->car_client_id = $data["car_client_id"];
$car->car_is_active = 1;
$car->car_vehicle_make_id = $data["car_vehicle_make_id"];
$car->car_year = $data["car_year"];
$car->car_specs = $data["car_specs"];
$car->car_vin_number = $data["car_vin_number"];
$car->car_plate_number = $data["car_plate_number"];
$car->car_registration_date = $data["car_registration_date"];
$car->car_gas = $data["car_gas"];
$car->car_tire_size = $data["car_tire_size"];
$car->car_oil_type = $data["car_oil_type"];
$car->car_created = date("Y-m-d H:i:s");
$car->car_datetime = date("Y-m-d H:i:s");

// create
$query = checkCreate($car);
returnSuccess($car, "Car", $query);
