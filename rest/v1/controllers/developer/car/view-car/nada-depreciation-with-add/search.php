<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
require 'functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/NadaDepreciationWithAdd.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$nada = new NadaDepreciationWithAdd($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $nada->nada_depreciation_with_add_search = $data["searchValue"];
    $nada->nada_depreciation_with_add_car_id = $data["nada_depreciation_with_add_car_id"];

    // only if filtering
    if ($data["isFilter"]) {

        // only if search with filter
        if ($nada->nada_depreciation_with_add_search != "") {

            $nada->nada_depreciation_with_add_is_active = checkIndex($data, "nada_depreciation_with_add_is_active");
            $query = checkFilterByStatusAndSearch($nada);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $nada->nada_depreciation_with_add_is_active = checkIndex($data, "nada_depreciation_with_add_is_active");
        $query = checkFilterByStatus($nada);
        http_response_code(200);
        getQueriedData($query);
    }

    $query = checkSearch($nada);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
