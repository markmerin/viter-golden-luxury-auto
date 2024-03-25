<?php

class OtherAccount
{
    public $user_other_aid;
    public $user_other_id;
    public $user_other_is_active;
    public $user_other_name;
    public $user_other_email;
    public $user_other_new_email;
    public $user_other_role_id;
    public $user_other_key;
    public $user_other_password;
    public $user_other_created;
    public $user_other_datetime;

    public $connection;
    public $lastInsertedId;
    public $user_system_start;
    public $user_system_total;
    public $user_system_search;

    public $tblOtherSystem;
    public $tblRole;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOtherSystem = "glav1_user_other";
        $this->tblRole = "glav1_roles";
    }

    // read account
    public function readAccount()
    {
        try {
            $sql = "select user_other_aid, ";
            $sql .= "user_other_is_active, ";
            $sql .= "user_other_password ";
            $sql .= "from {$this->tblOtherSystem} ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $sql .= "and user_other_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function updatePassword()
    {
        try {
            $sql = "update {$this->tblOtherSystem} set ";
            $sql .= "user_other_password = :user_other_password, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid  = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_password" => $this->user_other_password,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
