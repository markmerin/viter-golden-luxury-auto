<?php

// Read all
function checkFilterByStatus($object)
{
    $query = $object->filterByStatus();
    checkQuery($query, "Empty records. (filter by status)");
    return $query;
}

// Read all
function checkFilterByStatusAndSearch($object)
{
    $query = $object->filterByStatusAndSearch();
    checkQuery($query, "Empty records. (filter by status)");
    return $query;
}

// search by profit and loss
function checkSearchByProfitAndLoss($object)
{
    $query = $object->searchByProfitAndLoss();
    checkQuery($query, "Empty records. (search by profit and loss)");
    return $query;
}
