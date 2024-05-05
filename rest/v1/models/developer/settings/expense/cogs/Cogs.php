<?php
class Cogs
{
    public $cogs_aid;
    public $cogs_is_active;
    public $cogs_name;
    public $cogs_created;
    public $cogs_datetime;

    public $connection;
    public $lastInsertedId;

    public $cogs_start;
    public $cogs_total;
    public $cogs_search;

    public $tblCogs;
    public $tblCarExpense;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCogs = "glav1_cogs";
        $this->tblCarExpense = "glav1_car_expense";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCogs} ";
            $sql .= "(cogs_is_active, ";
            $sql .= "cogs_name, ";
            $sql .= "cogs_created, ";
            $sql .= "cogs_datetime ) values ( ";
            $sql .= ":cogs_is_active, ";
            $sql .= ":cogs_name, ";
            $sql .= ":cogs_created, ";
            $sql .= ":cogs_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_is_active" => $this->cogs_is_active,
                "cogs_name" => $this->cogs_name,
                "cogs_created" => $this->cogs_created,
                "cogs_datetime" => $this->cogs_datetime
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
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCogs} ";
            $sql .= "order by cogs_is_active desc, ";
            $sql .= "cogs_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCogs} ";
            $sql .= "where cogs_aid = :cogs_aid ";
            $sql .= "order by cogs_is_active desc, ";
            $sql .= "cogs_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_aid" => $this->cogs_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCogs} ";
            $sql .= "order by cogs_is_active desc, ";
            $sql .= "cogs_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->cogs_start - 1,
                "total" => $this->cogs_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCogs} ";
            $sql .= "where cogs_name like :cogs_name ";
            $sql .= "order by cogs_is_active desc, ";
            $sql .= "cogs_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_name" => "%{$this->cogs_search}%"
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
            $sql = "update {$this->tblCogs} set ";
            $sql .= "cogs_name = :cogs_name, ";
            $sql .= "cogs_datetime = :cogs_datetime ";
            $sql .= "where cogs_aid  = :cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_name" => $this->cogs_name,
                "cogs_datetime" => $this->cogs_datetime,
                "cogs_aid" => $this->cogs_aid,
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
            $sql = "update {$this->tblCogs} set ";
            $sql .= "cogs_is_active = :cogs_is_active, ";
            $sql .= "cogs_datetime = :cogs_datetime ";
            $sql .= "where cogs_aid = :cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_is_active" => $this->cogs_is_active,
                "cogs_datetime" => $this->cogs_datetime,
                "cogs_aid" => $this->cogs_aid
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
            $sql = "delete from {$this->tblCogs} ";
            $sql .= "where cogs_aid = :cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_aid" => $this->cogs_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select cogs_name from {$this->tblCogs} ";
            $sql .= "where cogs_name = :cogs_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_name" => "{$this->cogs_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCogs} ";
            $sql .= "where ";
            $sql .= "cogs_is_active = :cogs_is_active ";
            $sql .= "and cogs_name like :cogs_name ";
            $sql .= "order by cogs_is_active desc, ";
            $sql .= "cogs_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_is_active" => $this->cogs_is_active,
                "cogs_name" => "%{$this->cogs_search}%"
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCogs} ";
            $sql .= "where ";
            $sql .= "cogs_is_active = :cogs_is_active ";
            $sql .= "order by cogs_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_is_active" => $this->cogs_is_active
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // association
    public function checkAssociation()
    {
        try {
            $sql = "select income_profits_and_loss_id from {$this->tblCarExpense} ";
            $sql .= "where income_profits_and_loss_id = :cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "cogs_aid" => $this->cogs_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
