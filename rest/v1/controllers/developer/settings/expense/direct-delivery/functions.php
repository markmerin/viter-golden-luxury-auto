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

// search direct delivery
function checkSearchByDirectDelivery($object)
{
    $query = $object->searchByDirectDelivery();
    checkQuery($query, "Empty records. (search direct delivery)");
    return $query;
}
