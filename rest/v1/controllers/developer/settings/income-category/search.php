<?php

// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/income-category/IncomeCategory.php';
require 'functions.php';
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$income_category = new IncomeCategory($conn);
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    checkApiKey();
    checkPayload($data);
    $income_category->income_category_search = $data["searchValue"];

    // get data
    if ($data["isFilter"] == true) {

        // if filter with search
        if ($income_category->income_category_search != "") {

            checkKeyword($income_category->income_category_search);
            $income_category->income_category_is_active = checkIndex($data, "income_category_is_active");
            $query = checkFilterByStatusAndSearch($income_category);
            http_response_code(200);
            getQueriedData($query);
        }

        // if filter only
        $income_category->income_category_is_active = checkIndex($data, "income_category_is_active");
        $query = checkFilterByStatus($income_category);
        http_response_code(200);
        getQueriedData($query);
    }

    checkKeyword($income_category->income_category_search);
    // if search only  
    $query = checkSearch($income_category);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();
