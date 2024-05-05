<?php

// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/car/view-car/NadaDepreciationWithAdd.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$nada = new NadaDepreciationWithAdd($conn);
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();

    if (array_key_exists("start", $_GET) && array_key_exists("carid", $_GET)) {
        // get data
        $nada->nada_depreciation_with_add_start = $_GET['start'];
        $nada->nada_depreciation_with_add_car_id = $_GET['carid'];
        $nada->nada_depreciation_with_add_total = 10;

        checkLimitId($nada->nada_depreciation_with_add_start, $nada->nada_depreciation_with_add_total);
        $query = checkReadLimit($nada);
        $total_result = checkReadAll($nada);
        http_response_code(200);

        checkReadQuery(
            $query,
            $total_result,
            $nada->nada_depreciation_with_add_total,
            $nada->nada_depreciation_with_add_start
        );
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
