<?php

// update for all
function checkUpdateForAll($object)
{
    $query = $object->updateForAll();
    checkQuery($query, "There's a problem processing your request. (update for all)");
    return $query;
}
