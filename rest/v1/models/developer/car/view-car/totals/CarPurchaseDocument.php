<?php
class CarPurchaseDocument
{
    public $car_purchase_document_aid;
    public $car_purchase_document_is_active;
    public $car_purchase_document_car_id;
    public $car_purchase_document_date;
    public $car_purchase_document_id;
    public $car_purchase_document_amount;
    public $car_purchase_document_created;
    public $car_purchase_document_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_purchase_document_start;
    public $car_purchase_document_total;
    public $car_purchase_document_search;

    public $tblCarPurchaseDocument;
    public $tblSettingHistory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarPurchaseDocument = "glav1_car_purchase_document";
        // $this->tblSettingHistory = "glav1_settings_purchase_document";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarPurchaseDocument} ";
            $sql .= "(car_purchase_document_is_active , ";
            $sql .= "car_purchase_document_car_id, ";
            $sql .= "car_purchase_document_date, ";
            $sql .= "car_purchase_document_id, ";
            $sql .= "car_purchase_document_amount, ";
            $sql .= "car_purchase_document_created, ";
            $sql .= "car_purchase_document_datetime ) values ( ";
            $sql .= ":car_purchase_document_is_active, ";
            $sql .= ":car_purchase_document_car_id, ";
            $sql .= ":car_purchase_document_date, ";
            $sql .= ":car_purchase_document_id, ";
            $sql .= ":car_purchase_document_amount, ";
            $sql .= ":car_purchase_document_created, ";
            $sql .= ":car_purchase_document_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_purchase_document_is_active" => $this->car_purchase_document_is_active,
                "car_purchase_document_car_id" => $this->car_purchase_document_car_id,
                "car_purchase_document_date" => $this->car_purchase_document_date,
                "car_purchase_document_id" => $this->car_purchase_document_id,
                "car_purchase_document_amount" => $this->car_purchase_document_amount,
                "car_purchase_document_created" => $this->car_purchase_document_created,
                "car_purchase_document_datetime" => $this->car_purchase_document_datetime
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblCarPurchaseDocument} set ";
            // $sql .= "car_purchase_document_car_id = :car_purchase_document_car_id, ";
            // $sql .= "car_purchase_document_id = :car_purchase_document_id, ";
            $sql .= "car_purchase_document_amount = :car_purchase_document_amount, ";
            $sql .= "car_purchase_document_datetime = :car_purchase_document_datetime ";
            $sql .= "where car_purchase_document_aid  = :car_purchase_document_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "car_purchase_document_car_id" => $this->car_purchase_document_car_id,
                // "car_purchase_document_id" => $this->car_purchase_document_id,
                "car_purchase_document_amount" => $this->car_purchase_document_amount,
                "car_purchase_document_datetime" => $this->car_purchase_document_datetime,
                "car_purchase_document_aid" => $this->car_purchase_document_aid
            ]);
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
            $sql .= "{$this->tblCarPurchaseDocument} ";
            $sql .= "order by car_purchase_document_is_active desc, ";
            $sql .= "car_purchase_document_car_id asc ";
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
            $sql .= "{$this->tblCarPurchaseDocument} ";
            $sql .= "where car_purchase_document_car_id = :car_purchase_document_car_id ";
            $sql .= "order by car_purchase_document_is_active desc, ";
            $sql .= "car_purchase_document_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_purchase_document_car_id" => $this->car_purchase_document_car_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByDateYear()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblCarPurchaseDocument} ";
            $sql .= "where ";
            $sql .= "car_purchase_document_car_id = :car_purchase_document_car_id ";
            $sql .= "and car_purchase_document_date like :car_purchase_document_date ";
            $sql .= "order by car_purchase_document_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_purchase_document_car_id" => $this->car_purchase_document_car_id,
                "car_purchase_document_date" => "%{$this->car_purchase_document_date}%"
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
            $sql = "update {$this->tblCarPurchaseDocument} set ";
            $sql .= "car_purchase_document_is_active = :car_purchase_document_is_active, ";
            $sql .= "car_purchase_document_datetime = :car_purchase_document_datetime ";
            $sql .= "where car_purchase_document_aid = :car_purchase_document_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_purchase_document_is_active" => $this->car_purchase_document_is_active,
                "car_purchase_document_datetime" => $this->car_purchase_document_datetime,
                "car_purchase_document_aid" => $this->car_purchase_document_aid
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
            $sql = "delete from {$this->tblCarPurchaseDocument} ";
            $sql .= "where car_purchase_document_aid = :car_purchase_document_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_purchase_document_aid" => $this->car_purchase_document_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkId()
    {
        try {
            $sql = "select car_purchase_document_car_id from {$this->tblCarPurchaseDocument} ";
            $sql .= "where car_purchase_document_car_id = :car_purchase_document_car_id ";
            $sql .= "and car_purchase_document_date = :car_purchase_document_date ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_purchase_document_car_id" => $this->car_purchase_document_car_id,
                "car_purchase_document_date" => $this->car_purchase_document_date
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // association
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select income_profits_and_loss_id from {$this->tblSettingHistory} ";
    //         $sql .= "where income_profits_and_loss_id = :car_purchase_document_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "car_purchase_document_aid" => $this->car_purchase_document_aid
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
