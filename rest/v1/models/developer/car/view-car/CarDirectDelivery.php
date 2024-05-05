<?php
class CarDirectDelivery
{
    public $car_direct_delivery_aid;
    public $car_direct_delivery_is_active;
    public $car_direct_delivery_car_id;
    public $car_direct_delivery_date;
    public $car_direct_delivery_id;
    public $car_direct_delivery_amount;
    public $car_direct_delivery_created;
    public $car_direct_delivery_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_direct_delivery_start;
    public $car_direct_delivery_total;
    public $car_direct_delivery_search;

    public $tblCarDirectDelivery;
    public $tblDirectDelivery;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarDirectDelivery = "glav1_car_direct_delivery";
        $this->tblDirectDelivery = "glav1_settings_direct_delivery";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarDirectDelivery} ";
            $sql .= "(car_direct_delivery_is_active , ";
            $sql .= "car_direct_delivery_car_id, ";
            $sql .= "car_direct_delivery_date, ";
            $sql .= "car_direct_delivery_id, ";
            $sql .= "car_direct_delivery_amount, ";
            $sql .= "car_direct_delivery_created, ";
            $sql .= "car_direct_delivery_datetime ) values ( ";
            $sql .= ":car_direct_delivery_is_active, ";
            $sql .= ":car_direct_delivery_car_id, ";
            $sql .= ":car_direct_delivery_date, ";
            $sql .= ":car_direct_delivery_id, ";
            $sql .= ":car_direct_delivery_amount, ";
            $sql .= ":car_direct_delivery_created, ";
            $sql .= ":car_direct_delivery_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_is_active" => $this->car_direct_delivery_is_active,
                "car_direct_delivery_car_id" => $this->car_direct_delivery_car_id,
                "car_direct_delivery_date" => $this->car_direct_delivery_date,
                "car_direct_delivery_id" => $this->car_direct_delivery_id,
                "car_direct_delivery_amount" => $this->car_direct_delivery_amount,
                "car_direct_delivery_created" => $this->car_direct_delivery_created,
                "car_direct_delivery_datetime" => $this->car_direct_delivery_datetime
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
            $sql = "update {$this->tblCarDirectDelivery} set ";
            // $sql .= "car_direct_delivery_car_id = :car_direct_delivery_car_id, ";
            // $sql .= "car_direct_delivery_id = :car_direct_delivery_id, ";
            $sql .= "car_direct_delivery_amount = :car_direct_delivery_amount, ";
            $sql .= "car_direct_delivery_datetime = :car_direct_delivery_datetime ";
            $sql .= "where car_direct_delivery_aid  = :car_direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "car_direct_delivery_car_id" => $this->car_direct_delivery_car_id,
                // "car_direct_delivery_id" => $this->car_direct_delivery_id,
                "car_direct_delivery_amount" => $this->car_direct_delivery_amount,
                "car_direct_delivery_datetime" => $this->car_direct_delivery_datetime,
                "car_direct_delivery_aid" => $this->car_direct_delivery_aid
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
            $sql .= "{$this->tblCarDirectDelivery} ";
            $sql .= "order by car_direct_delivery_is_active desc, ";
            $sql .= "car_direct_delivery_car_id asc ";
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
            $sql .= "{$this->tblCarDirectDelivery} ";
            $sql .= "where car_direct_delivery_car_id = :car_direct_delivery_car_id ";
            $sql .= "order by car_direct_delivery_is_active desc, ";
            $sql .= "car_direct_delivery_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_car_id" => $this->car_direct_delivery_car_id
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
            $sql .= "{$this->tblCarDirectDelivery} ";
            $sql .= "where ";
            $sql .= "car_direct_delivery_car_id = :car_direct_delivery_car_id ";
            $sql .= "and car_direct_delivery_date like :car_direct_delivery_date ";
            $sql .= "order by car_direct_delivery_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_car_id" => $this->car_direct_delivery_car_id,
                "car_direct_delivery_date" => "%{$this->car_direct_delivery_date}%"
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
            $sql = "update {$this->tblCarDirectDelivery} set ";
            $sql .= "car_direct_delivery_is_active = :car_direct_delivery_is_active, ";
            $sql .= "car_direct_delivery_datetime = :car_direct_delivery_datetime ";
            $sql .= "where car_direct_delivery_aid = :car_direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_is_active" => $this->car_direct_delivery_is_active,
                "car_direct_delivery_datetime" => $this->car_direct_delivery_datetime,
                "car_direct_delivery_aid" => $this->car_direct_delivery_aid
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
            $sql = "delete from {$this->tblCarDirectDelivery} ";
            $sql .= "where car_direct_delivery_aid = :car_direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_aid" => $this->car_direct_delivery_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkId()
    {
        try {
            $sql = "select car_direct_delivery_car_id from {$this->tblCarDirectDelivery} ";
            $sql .= "where car_direct_delivery_car_id = :car_direct_delivery_car_id ";
            $sql .= "and car_direct_delivery_date = :car_direct_delivery_date ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_car_id" => $this->car_direct_delivery_car_id,
                "car_direct_delivery_date" => $this->car_direct_delivery_date
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
            $sql = "select income_profits_and_loss_id from {$this->tblDirectDelivery} ";
            $sql .= "where income_profits_and_loss_id = :car_direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_direct_delivery_aid" => $this->car_direct_delivery_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
