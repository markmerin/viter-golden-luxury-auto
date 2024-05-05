<?php
class PurchaseFinanced
{
    public $purchase_financed_aid;
    public $purchase_financed_is_active;
    public $purchase_financed_name;
    public $purchase_financed_created;
    public $purchase_financed_datetime;

    public $connection;
    public $lastInsertedId;

    public $purchase_financed_start;
    public $purchase_financed_total;
    public $purchase_financed_search;


    public $tblPurchasefinanced;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPurchasefinanced = "glav1_purchase_financed";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblPurchasefinanced} ";
            $sql .= "( purchase_financed_name, ";
            $sql .= "purchase_financed_is_active, ";
            $sql .= "purchase_financed_created, ";
            $sql .= "purchase_financed_datetime ) values ( ";
            $sql .= ":purchase_financed_name, ";
            $sql .= ":purchase_financed_is_active, ";
            $sql .= ":purchase_financed_created, ";
            $sql .= ":purchase_financed_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_name" => $this->purchase_financed_name,
                "purchase_financed_is_active" => $this->purchase_financed_is_active,
                "purchase_financed_created" => $this->purchase_financed_created,
                "purchase_financed_datetime" => $this->purchase_financed_datetime,
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
            $sql .= " {$this->tblPurchasefinanced} ";
            $sql .= "order by purchase_financed_is_active desc, ";
            $sql .= "purchase_financed_name asc ";
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
            $sql = "select * from {$this->tblPurchasefinanced} ";
            $sql .= "where purchase_financed_aid  = :purchase_financed_aid  ";
            $sql .= "order by purchase_financed_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_aid" => $this->purchase_financed_aid,
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
            $sql .= "from {$this->tblPurchasefinanced} ";
            $sql .= "order by purchase_financed_is_active desc, ";
            $sql .= "purchase_financed_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->purchase_financed_start - 1,
                "total" => $this->purchase_financed_total,
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
            $sql .= "from {$this->tblPurchasefinanced} ";
            $sql .= "where purchase_financed_name like :purchase_financed_name ";
            $sql .= "order by purchase_financed_is_active desc, ";
            $sql .= "purchase_financed_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_name" => "%{$this->purchase_financed_search}%",
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
            $sql = "update {$this->tblPurchasefinanced} set ";
            $sql .= "purchase_financed_name = :purchase_financed_name, ";
            $sql .= "purchase_financed_datetime = :purchase_financed_datetime ";
            $sql .= "where purchase_financed_aid = :purchase_financed_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_name" => $this->purchase_financed_name,
                "purchase_financed_datetime" => $this->purchase_financed_datetime,
                "purchase_financed_aid" => $this->purchase_financed_aid,
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
            $sql = "update {$this->tblPurchasefinanced} set ";
            $sql .= "purchase_financed_is_active = :purchase_financed_is_active, ";
            $sql .= "purchase_financed_datetime = :purchase_financed_datetime ";
            $sql .= "where purchase_financed_aid  = :purchase_financed_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_is_active" => $this->purchase_financed_is_active,
                "purchase_financed_datetime" => $this->purchase_financed_datetime,
                "purchase_financed_aid" => $this->purchase_financed_aid,
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
            $sql = "delete from {$this->tblPurchasefinanced} ";
            $sql .= "where purchase_financed_aid = :purchase_financed_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_aid" => $this->purchase_financed_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select purchase_financed_name from {$this->tblPurchasefinanced} ";
            $sql .= "where purchase_financed_name = :purchase_financed_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_name" => "{$this->purchase_financed_name}",
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

            $sql .= "from {$this->tblPurchasefinanced} ";
            $sql .= "where purchase_financed_is_active = :purchase_financed_is_active ";
            $sql .= "and purchase_financed_name like :purchase_financed_name ";
            $sql .= "order by purchase_financed_is_active desc, ";
            $sql .= "purchase_financed_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_name" => "%{$this->purchase_financed_search}%",
                "purchase_financed_is_active" => $this->purchase_financed_is_active,
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
            $sql .= "from {$this->tblPurchasefinanced} ";
            $sql .= "where purchase_financed_is_active = :purchase_financed_is_active ";
            $sql .= "order by purchase_financed_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_financed_is_active" => $this->purchase_financed_is_active,
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
    //         $sql .= "where designation_expenses_id = :purchase_financed_aid  ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "purchase_financed_aid " => "{$this->purchase_financed_aid }",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
