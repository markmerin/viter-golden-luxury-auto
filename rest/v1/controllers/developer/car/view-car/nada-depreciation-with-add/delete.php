<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$nada = new NadaDepreciationWithAdd($conn);
// get $_GET data
if (array_key_exists("nadaid", $_GET)) {
    // get data
    $nada->nada_depreciation_with_add_aid = $_GET['nadaid'];
    checkId($nada->nada_depreciation_with_add_aid);

    // delete
    $query = checkDelete($nada);
    returnSuccess($nada, "Nada deprectiation with add delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
