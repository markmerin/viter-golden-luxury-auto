<?php
class SystemAccount
{
    public $user_system_aid;
    public $user_system_is_active;
    public $user_system_fname;
    public $user_system_lname;
    public $user_system_email;
    public $user_system_new_email;
    public $user_system_role_id;
    public $user_system_key;
    public $user_system_password;
    public $user_system_created;
    public $user_system_datetime;

    public $connection;
    public $lastInsertedId;
    public $user_system_start;
    public $user_system_total;
    public $user_system_search;

    public $tblUserSystem;
    public $tblRole;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUserSystem = "glav1_user_system";
    }

    // read account
    public function readAccount()
    {
        try {
            $sql = "select user_system_aid, ";
            $sql .= "user_system_is_active, ";
            $sql .= "user_system_password ";
            $sql .= "from {$this->tblUserSystem} ";
            $sql .= "where user_system_aid = :user_system_aid ";
            $sql .= "and user_system_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_system_aid" => $this->user_system_aid,
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
            $sql = "update {$this->tblUserSystem} set ";
            $sql .= "user_system_password = :user_system_password, ";
            $sql .= "user_system_datetime = :user_system_datetime ";
            $sql .= "where user_system_aid  = :user_system_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_system_password" => $this->user_system_password,
                "user_system_datetime" => $this->user_system_datetime,
                "user_system_aid" => $this->user_system_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
