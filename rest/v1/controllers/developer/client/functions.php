<?php

// filter by status
function checkFilterByStatus($object)
{
    $query = $object->filterByStatus();
    checkQuery($query, "Empty records. (filter by status)");
    return $query;
}

// search by status
function checkSearchByStatus($object)
{
    $query = $object->searchByStatus();
    checkQuery($query, "Empty records. (search by status)");
    return $query;
}

// update bank details
function checkUpdateBankDetails($object)
{
    $query = $object->updateBankDetails();
    checkQuery($query, "There's a problem processing your request. (update bank details)");
    return $query;
}
