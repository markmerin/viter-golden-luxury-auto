<?php
class Client
{
    public $client_aid;
    public $client_is_active;
    public $client_fname;
    public $client_lname;
    public $client_contact;
    public $client_email;
    public $client_bank_name;
    public $client_bank_routing_number;
    public $client_bank_account_number;
    public $client_created;
    public $client_datetime;

    public $connection;
    public $lastInsertedId;
    public $client_start;
    public $client_total;
    public $client_search;

    public $tblClient;
    public $tblRole;
    public $tblAccess;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "glav1_client";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblClient} ";
            $sql .= "( client_fname, ";
            $sql .= "client_lname, ";
            $sql .= "client_is_active, ";
            $sql .= "client_contact, ";
            $sql .= "client_email, ";
            $sql .= "client_created, ";
            $sql .= "client_datetime ) values ( ";
            $sql .= ":client_fname, ";
            $sql .= ":client_lname, ";
            $sql .= ":client_is_active, ";
            $sql .= ":client_contact, ";
            $sql .= ":client_email, ";
            $sql .= ":client_created, ";
            $sql .= ":client_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_fname" => $this->client_fname,
                "client_lname" => $this->client_lname,
                "client_is_active" => $this->client_is_active,
                "client_contact" => $this->client_contact,
                "client_email" => $this->client_email,
                "client_created" => $this->client_created,
                "client_datetime" => $this->client_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "client_fname, ";
            $sql .= "client_lname, ";
            $sql .= "client_is_active, ";
            $sql .= "client_email, ";
            $sql .= "client_contact, ";
            $sql .= "client_aid ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_fname ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "client_fname, ";
            $sql .= "client_lname, ";
            $sql .= "client_is_active, ";
            $sql .= "client_email, ";
            $sql .= "client_contact, ";
            $sql .= "client_aid ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_fname ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->client_start - 1,
                "total" => $this->client_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "client_fname, ";
            $sql .= "client_lname, ";
            $sql .= "client_is_active, ";
            $sql .= "client_email, ";
            $sql .= "client_contact, ";
            $sql .= "client_aid ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "where client_is_active = :client_is_active ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_is_active" => $this->client_is_active
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "client_fname, ";
            $sql .= "client_lname, ";
            $sql .= "client_is_active, ";
            $sql .= "client_email, ";
            $sql .= "client_contact, ";
            $sql .= "client_aid ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "where ( client_fname like :client_fname ";
            $sql .= "or client_lname like :client_lname ";
            $sql .= "or client_email like :client_email ";
            $sql .= "or CONCAT(client_fname, ' ', client_lname) like :fullname ";
            $sql .= ") ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_fname" => "%{$this->client_search}%",
                "client_lname" => "%{$this->client_search}%",
                "client_email" => "%{$this->client_search}%",
                "fullname" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function searchByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "client_fname, ";
            $sql .= "client_lname, ";
            $sql .= "client_is_active, ";
            $sql .= "client_email, ";
            $sql .= "client_contact, ";
            $sql .= "client_aid ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "where client_is_active = :client_is_active ";
            $sql .= "and ( client_fname like :client_fname ";
            $sql .= "or client_lname like :client_lname ";
            $sql .= "or client_email like :client_email ";
            $sql .= "or CONCAT(client_fname, ' ', client_lname) like :fullname ";
            $sql .= ") ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_fname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_fname" => "%{$this->client_search}%",
                "client_lname" => "%{$this->client_search}%",
                "client_email" => "%{$this->client_search}%",
                "fullname" => "%{$this->client_search}%",
                "client_is_active" => $this->client_search,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblClient} ";
            $sql .= "where client_aid = :client_aid ";
            $sql .= "order by client_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_fname = :client_fname, ";
            $sql .= "client_lname = :client_lname, ";
            $sql .= "client_contact = :client_contact, ";
            $sql .= "client_email = :client_email, ";
            $sql .= "client_datetime = :client_datetime ";
            $sql .= "where client_aid  = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_fname" => $this->client_fname,
                "client_lname" => $this->client_lname,
                "client_contact" => $this->client_contact,
                "client_email" => $this->client_email,
                "client_datetime" => $this->client_datetime,
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function updateBankDetails()
    {
        try {
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_bank_name = :client_bank_name, ";
            $sql .= "client_bank_routing_number = :client_bank_routing_number, ";
            $sql .= "client_bank_account_number = :client_bank_account_number, ";
            $sql .= "client_datetime = :client_datetime ";
            $sql .= "where client_aid  = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_bank_name" => $this->client_bank_name,
                "client_bank_routing_number" => $this->client_bank_routing_number,
                "client_bank_account_number" => $this->client_bank_account_number,
                "client_datetime" => $this->client_datetime,
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_is_active = :client_is_active, ";
            $sql .= "client_datetime = :client_datetime ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_is_active" => $this->client_is_active,
                "client_datetime" => $this->client_datetime,
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblClient} ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator

    // email
    public function checkEmail()
    {
        try {
            $sql = "select client_email from {$this->tblClient} ";
            $sql .= "where client_email = :client_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_email" => "{$this->client_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
