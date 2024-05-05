<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$nada = new NadaDepreciationWithAdd($conn);

if (array_key_exists("nadaid", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $nada->nada_depreciation_with_add_aid = $_GET['nadaid'];
    checkId($nada->nada_depreciation_with_add_aid);

    // get data
    $nada->nada_depreciation_with_add_id = $data["nada_depreciation_with_add_id"];
    $nada->nada_depreciation_with_add_date = $data["nada_depreciation_with_add_date"];
    $nada->nada_depreciation_with_add_amount = $data["nada_depreciation_with_add_amount"];
    $nada->nada_depreciation_with_add_datetime = date("Y-m-d H:i:s");

    // update
    $query = checkUpdate($nada);
    returnSuccess($nada, "Nada depreciation with add update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
