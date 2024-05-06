<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$nada = new NadaDepreciationWithAdd($conn);
// get $_GET data

if (array_key_exists("nadaid", $_GET)) {
    $nada->nada_depreciation_with_add_car_id = $_GET['nadaid'];
    checkId($nada->nada_depreciation_with_add_car_id);
    $query = checkReadById($nada);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($nada);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
