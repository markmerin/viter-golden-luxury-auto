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

// search cogs
function checkSearchByCogs($object)
{
    $query = $object->searchByCogs();
    checkQuery($query, "Empty records. (search cogs)");
    return $query;
}
