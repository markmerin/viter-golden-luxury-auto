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
// check association
function isHistoryAssociated($object)
{
    $query = $object->checkHistoryAssociation();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}
