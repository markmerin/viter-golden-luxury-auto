<?php
class Generic
{
    public $user_other_aid;
    public $user_other_is_active;
    public $user_other_fname;
    public $user_other_lname;
    public $user_other_email;
    public $user_other_new_email;
    public $user_other_role_id;
    public $user_other_key;
    public $user_other_password;
    public $user_other_created;
    public $user_other_datetime;

    public $connection;
    public $lastInsertedId;
    public $user_other_start;
    public $user_other_total;
    public $user_other_search;

    public $tblUserOther;
    public $tblRole;
    public $tblMaintenance;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUserOther = "glav1_user_other";
        $this->tblRole = "glav1_roles";
        $this->tblMaintenance = "glav1_maintenance";
    }


    // read login
    public function readLogin()
    {
        try {
            $sql = "select user.user_other_aid, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_password, ";
            $sql .= "role.* ";
            $sql .= "from {$this->tblUserOther} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and user.user_other_email like :user_other_email ";
            $sql .= "and user.user_other_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => $this->user_other_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key
    public function readKey()
    {
        try {
            $sql = "select user_other_key from {$this->tblUserOther} ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key for email verification
    public function readKeyChangeEmail()
    {
        try {
            $sql = "select ";
            $sql .= "user_other.user_other_key, ";
            $sql .= "user_other.user_other_fname, ";
            $sql .= "user_other.user_other_new_email, ";
            $sql .= "role.* ";
            $sql .= "from ";
            $sql .= "{$this->tblUserOther} as user_other, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user_other.user_other_key = :user_other_key ";
            $sql .= "and user_other.user_other_role_id = role.role_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read maintenance
    public function readMaintenance()
    {
        try {
            $sql = "select maintenance_aid, ";
            $sql .= "maintenance_is_for_client, ";
            $sql .= "maintenance_is_for_admin ";
            $sql .= "from {$this->tblMaintenance} ";
            $sql .= "limit 1 ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update for email verification
    public function updateEmailForUser()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_email = :user_other_email, ";
            $sql .= "user_other_new_email = '', ";
            $sql .= "user_other_key = '', ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => $this->user_other_email,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function setPassword()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_password = :user_other_password, ";
            $sql .= "user_other_key = '', ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_key  = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_password" => $this->user_other_password,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // reset password
    public function resetPassword()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_key = :user_other_key, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_email  = :user_other_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_email" => $this->user_other_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
