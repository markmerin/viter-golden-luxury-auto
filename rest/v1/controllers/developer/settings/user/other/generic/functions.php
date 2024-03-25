<?php

// Update email for trainer
function checkUpdateEmailForTrainer($object)
{
    $query = $object->updateEmailForTrainer();
    checkQuery($query, "There's a problem processing your request. (update email for trainer)");
    return $query;
}

// Update email for trainee
function checkUpdateEmailForTrainee($object)
{
    $query = $object->updateEmailForTrainee();
    checkQuery($query, "There's a problem processing your request. (update email for trainee)");
    return $query;
}
