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
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("nadaid", $_GET)) {
        // check data
        checkPayload($data);
        $nada->nada_depreciation_with_add_aid = $_GET['nadaid'];
        $nada->nada_depreciation_with_add_is_active = trim($data["isActive"]);
        checkId($nada->nada_depreciation_with_add_aid);
        $query = checkActive($nada);
        http_response_code(200);
        returnSuccess($nada, "Nada depreciation with add active", $query);
    }
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
