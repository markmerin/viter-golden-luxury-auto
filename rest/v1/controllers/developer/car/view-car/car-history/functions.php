<?php

// Read all
function checkFilterByDateYear($object)
{
    $query = $object->filterByDateYear();
    checkQuery($query, "Empty records. (filter by date year)");
    return $query;
}

// compare two values
function compareTwoId($object, $id_old, $id)
{
    if (strtolower($id_old) !=  strtolower($id)) {
        isIdExist($object);
    }
}
