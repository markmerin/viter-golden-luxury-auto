<?php
class PurchaseDocuments
{
    public $purchase_document_aid;
    public $purchase_document_is_active;
    public $purchase_document_name;
    public $purchase_document_created;
    public $purchase_document_datetime;

    public $connection;
    public $lastInsertedId;

    public $purchase_document_start;
    public $purchase_document_total;
    public $purchase_document_search;


    public $tblPurchaseDocuments;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPurchaseDocuments = "glav1_purchase_document";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblPurchaseDocuments} ";
            $sql .= "( purchase_document_name, ";
            $sql .= "purchase_document_is_active, ";
            $sql .= "purchase_document_created, ";
            $sql .= "purchase_document_datetime ) values ( ";
            $sql .= ":purchase_document_name, ";
            $sql .= ":purchase_document_is_active, ";
            $sql .= ":purchase_document_created, ";
            $sql .= ":purchase_document_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_name" => $this->purchase_document_name,
                "purchase_document_is_active" => $this->purchase_document_is_active,
                "purchase_document_created" => $this->purchase_document_created,
                "purchase_document_datetime" => $this->purchase_document_datetime,
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
            $sql .= " {$this->tblPurchaseDocuments} ";
            $sql .= "order by purchase_document_is_active desc, ";
            $sql .= "purchase_document_name asc ";
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
            $sql = "select * from {$this->tblPurchaseDocuments} ";
            $sql .= "where purchase_document_aid  = :purchase_document_aid  ";
            $sql .= "order by purchase_document_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_aid" => $this->purchase_document_aid,
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
            $sql .= "from {$this->tblPurchaseDocuments} ";
            $sql .= "order by purchase_document_is_active desc, ";
            $sql .= "purchase_document_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->purchase_document_start - 1,
                "total" => $this->purchase_document_total,
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
            $sql .= "from {$this->tblPurchaseDocuments} ";
            $sql .= "where purchase_document_name like :purchase_document_name ";
            $sql .= "order by purchase_document_is_active desc, ";
            $sql .= "purchase_document_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_name" => "%{$this->purchase_document_search}%",
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
            $sql = "update {$this->tblPurchaseDocuments} set ";
            $sql .= "purchase_document_name = :purchase_document_name, ";
            $sql .= "purchase_document_datetime = :purchase_document_datetime ";
            $sql .= "where purchase_document_aid = :purchase_document_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_name" => $this->purchase_document_name,
                "purchase_document_datetime" => $this->purchase_document_datetime,
                "purchase_document_aid" => $this->purchase_document_aid,
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
            $sql = "update {$this->tblPurchaseDocuments} set ";
            $sql .= "purchase_document_is_active = :purchase_document_is_active, ";
            $sql .= "purchase_document_datetime = :purchase_document_datetime ";
            $sql .= "where purchase_document_aid  = :purchase_document_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_is_active" => $this->purchase_document_is_active,
                "purchase_document_datetime" => $this->purchase_document_datetime,
                "purchase_document_aid" => $this->purchase_document_aid,
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
            $sql = "delete from {$this->tblPurchaseDocuments} ";
            $sql .= "where purchase_document_aid = :purchase_document_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_aid" => $this->purchase_document_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select purchase_document_name from {$this->tblPurchaseDocuments} ";
            $sql .= "where purchase_document_name = :purchase_document_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_name" => "{$this->purchase_document_name}",
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

            $sql .= "from {$this->tblPurchaseDocuments} ";
            $sql .= "where purchase_document_is_active = :purchase_document_is_active ";
            $sql .= "and purchase_document_name like :purchase_document_name ";
            $sql .= "order by purchase_document_is_active desc, ";
            $sql .= "purchase_document_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_name" => "%{$this->purchase_document_search}%",
                "purchase_document_is_active" => $this->purchase_document_is_active,
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
            $sql .= "from {$this->tblPurchaseDocuments} ";
            $sql .= "where purchase_document_is_active = :purchase_document_is_active ";
            $sql .= "order by purchase_document_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "purchase_document_is_active" => $this->purchase_document_is_active,
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
    //         $sql .= "where designation_expenses_id = :purchase_document_aid  ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "purchase_document_aid " => "{$this->purchase_document_aid }",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
