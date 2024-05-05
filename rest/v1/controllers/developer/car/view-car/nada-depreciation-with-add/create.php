<?php
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$nada = new NadaDepreciationWithAdd($conn);
// get should not be present
if (array_key_exists("nadaid", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);

// get data
$nada->nada_depreciation_with_add_is_active = 1;
$nada->nada_depreciation_with_add_car_id = $data["nada_depreciation_with_add_car_id"];
$nada->nada_depreciation_with_add_id = $data["nada_depreciation_with_add_id"];
$nada->nada_depreciation_with_add_amount = $data["nada_depreciation_with_add_amount"];
$nada->nada_depreciation_with_add_date = $data["nada_depreciation_with_add_date"];
$nada->nada_depreciation_with_add_created = date("Y-m-d H:i:s");
$nada->nada_depreciation_with_add_datetime = date("Y-m-d H:i:s");

// create
$query = checkCreate($nada);
returnSuccess($nada, "Nada depreciation with add create", $query);
