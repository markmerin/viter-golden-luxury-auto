<?php
class Expenses
{
    public $expenses_aid;
    public $expenses_is_active;
    public $expenses_name;
    public $expenses_created;
    public $expenses_datetime;

    public $connection;
    public $lastInsertedId;

    public $expenses_start;
    public $expenses_total;
    public $expenses_search;


    public $tblExpenses;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblExpenses = "glav1_expenses";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblExpenses} ";
            $sql .= "( expenses_name, ";
            $sql .= "expenses_is_active, ";
            $sql .= "expenses_created, ";
            $sql .= "expenses_datetime ) values ( ";
            $sql .= ":expenses_name, ";
            $sql .= ":expenses_is_active, ";
            $sql .= ":expenses_created, ";
            $sql .= ":expenses_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_name" => $this->expenses_name,
                "expenses_is_active" => $this->expenses_is_active,
                "expenses_created" => $this->expenses_created,
                "expenses_datetime" => $this->expenses_datetime,
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
            $sql .= " {$this->tblExpenses} ";
            $sql .= "order by expenses_is_active desc, ";
            $sql .= "expenses_name asc ";
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
            $sql = "select * from {$this->tblExpenses} ";
            $sql .= "where expenses_aid = :expenses_aid ";
            $sql .= "order by expenses_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_aid" => $this->expenses_aid,
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
            $sql .= "from {$this->tblExpenses} ";
            $sql .= "order by expenses_is_active desc, ";
            $sql .= "expenses_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->expenses_start - 1,
                "total" => $this->expenses_total,
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
            $sql .= "from {$this->tblExpenses} ";
            $sql .= "where expenses_name like :expenses_name ";
            $sql .= "order by expenses_is_active desc, ";
            $sql .= "expenses_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_name" => "%{$this->expenses_search}%",
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
            $sql = "update {$this->tblExpenses} set ";
            $sql .= "expenses_name = :expenses_name, ";
            $sql .= "expenses_datetime = :expenses_datetime ";
            $sql .= "where expenses_aid  = :expenses_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_name" => $this->expenses_name,
                "expenses_datetime" => $this->expenses_datetime,
                "expenses_aid" => $this->expenses_aid,
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
            $sql = "update {$this->tblExpenses} set ";
            $sql .= "expenses_is_active = :expenses_is_active, ";
            $sql .= "expenses_datetime = :expenses_datetime ";
            $sql .= "where expenses_aid = :expenses_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_is_active" => $this->expenses_is_active,
                "expenses_datetime" => $this->expenses_datetime,
                "expenses_aid" => $this->expenses_aid,
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
            $sql = "delete from {$this->tblExpenses} ";
            $sql .= "where expenses_aid = :expenses_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_aid" => $this->expenses_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select expenses_name from {$this->tblExpenses} ";
            $sql .= "where expenses_name = :expenses_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_name" => "{$this->expenses_name}",
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

            $sql .= "from {$this->tblExpenses} ";
            $sql .= "where expenses_is_active = :expenses_is_active ";
            $sql .= "and expenses_name like :expenses_name ";
            $sql .= "order by expenses_is_active desc, ";
            $sql .= "expenses_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_name" => "%{$this->expenses_search}%",
                "expenses_is_active" => $this->expenses_is_active,
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
            $sql .= "from {$this->tblExpenses} ";
            $sql .= "where expenses_is_active = :expenses_is_active ";
            $sql .= "order by expenses_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "expenses_is_active" => $this->expenses_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // association
    // public function checkDesignationAssociation()
    // {
    //     try {
    //         $sql = "select designation_expenses_id from {$this->tblDesignation} ";
    //         $sql .= "where designation_expenses_id = :expenses_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "expenses_aid" => "{$this->expenses_aid}",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
