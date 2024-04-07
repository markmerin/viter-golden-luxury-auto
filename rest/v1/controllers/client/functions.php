<?php

// read by email
function checkReadByEmail($object)
{
    $query = $object->readByEmail();
    checkQuery($query, "Empty records. (read by email)");
    return $query;
}
