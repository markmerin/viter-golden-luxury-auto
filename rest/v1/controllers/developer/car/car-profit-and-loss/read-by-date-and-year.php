<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../models/developer/car/car-profit-and-loss/CarProfitAndLoss.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$carProfitAndLoss = new CarProfitAndLoss($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    // check data
    checkPayload($data);

    $carProfitAndLoss->car_profit_and_loss_car_id = checkIndex($data, "car_profit_and_loss_car_id");
    $carProfitAndLoss->car_profit_and_loss_date = checkIndex($data, "car_profit_and_loss_date");

    $query = checkFilterByDateYear($carProfitAndLoss);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
