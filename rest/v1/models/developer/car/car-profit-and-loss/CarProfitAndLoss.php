<?php
class CarProfitAndLoss
{
    public $car_profit_and_loss_aid;
    public $car_profit_and_loss_is_active;
    public $car_profit_and_loss_car_id;
    public $car_profit_and_loss_date;
    public $car_profit_and_loss_id;
    public $car_profit_and_loss_amount;
    public $car_profit_and_loss_created;
    public $car_profit_and_loss_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_profit_and_loss_start;
    public $car_profit_and_loss_total;
    public $car_profit_and_loss_search;

    public $tblCarProfitAndLoss;
    public $tblProfitAndLoss;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarProfitAndLoss = "glav1_car_profit_and_loss";
        $this->tblProfitAndLoss = "glav1_settings_profit_and_loss";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarProfitAndLoss} ";
            $sql .= "(car_profit_and_loss_is_active , ";
            $sql .= "car_profit_and_loss_car_id, ";
            $sql .= "car_profit_and_loss_date, ";
            $sql .= "car_profit_and_loss_id, ";
            $sql .= "car_profit_and_loss_amount, ";
            $sql .= "car_profit_and_loss_created, ";
            $sql .= "car_profit_and_loss_datetime ) values ( ";
            $sql .= ":car_profit_and_loss_is_active, ";
            $sql .= ":car_profit_and_loss_car_id, ";
            $sql .= ":car_profit_and_loss_date, ";
            $sql .= ":car_profit_and_loss_id, ";
            $sql .= ":car_profit_and_loss_amount, ";
            $sql .= ":car_profit_and_loss_created, ";
            $sql .= ":car_profit_and_loss_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_is_active" => $this->car_profit_and_loss_is_active,
                "car_profit_and_loss_car_id" => $this->car_profit_and_loss_car_id,
                "car_profit_and_loss_date" => $this->car_profit_and_loss_date,
                "car_profit_and_loss_id" => $this->car_profit_and_loss_id,
                "car_profit_and_loss_amount" => $this->car_profit_and_loss_amount,
                "car_profit_and_loss_created" => $this->car_profit_and_loss_created,
                "car_profit_and_loss_datetime" => $this->car_profit_and_loss_datetime
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
            $sql = "update {$this->tblCarProfitAndLoss} set ";
            // $sql .= "car_profit_and_loss_car_id = :car_profit_and_loss_car_id, ";
            // $sql .= "car_profit_and_loss_id = :car_profit_and_loss_id, ";
            $sql .= "car_profit_and_loss_amount = :car_profit_and_loss_amount, ";
            $sql .= "car_profit_and_loss_datetime = :car_profit_and_loss_datetime ";
            $sql .= "where car_profit_and_loss_aid  = :car_profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "car_profit_and_loss_car_id" => $this->car_profit_and_loss_car_id,
                // "car_profit_and_loss_id" => $this->car_profit_and_loss_id,
                "car_profit_and_loss_amount" => $this->car_profit_and_loss_amount,
                "car_profit_and_loss_datetime" => $this->car_profit_and_loss_datetime,
                "car_profit_and_loss_aid" => $this->car_profit_and_loss_aid
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
            $sql .= "{$this->tblCarProfitAndLoss} ";
            $sql .= "order by car_profit_and_loss_is_active desc, ";
            $sql .= "car_profit_and_loss_car_id asc ";
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
            $sql .= "{$this->tblCarProfitAndLoss} ";
            $sql .= "where car_profit_and_loss_car_id = :car_profit_and_loss_car_id ";
            $sql .= "order by car_profit_and_loss_is_active desc, ";
            $sql .= "car_profit_and_loss_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_car_id" => $this->car_profit_and_loss_car_id
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
            $sql .= "{$this->tblCarProfitAndLoss} ";
            $sql .= "where ";
            $sql .= "car_profit_and_loss_car_id = :car_profit_and_loss_car_id ";
            $sql .= "and car_profit_and_loss_date like :car_profit_and_loss_date ";
            $sql .= "order by car_profit_and_loss_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_car_id" => $this->car_profit_and_loss_car_id,
                "car_profit_and_loss_date" => "%{$this->car_profit_and_loss_date}%"
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
            $sql = "update {$this->tblCarProfitAndLoss} set ";
            $sql .= "car_profit_and_loss_is_active = :car_profit_and_loss_is_active, ";
            $sql .= "car_profit_and_loss_datetime = :car_profit_and_loss_datetime ";
            $sql .= "where car_profit_and_loss_aid = :car_profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_is_active" => $this->car_profit_and_loss_is_active,
                "car_profit_and_loss_datetime" => $this->car_profit_and_loss_datetime,
                "car_profit_and_loss_aid" => $this->car_profit_and_loss_aid
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
            $sql = "delete from {$this->tblCarProfitAndLoss} ";
            $sql .= "where car_profit_and_loss_aid = :car_profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_aid" => $this->car_profit_and_loss_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkId()
    {
        try {
            $sql = "select car_profit_and_loss_car_id from {$this->tblCarProfitAndLoss} ";
            $sql .= "where car_profit_and_loss_car_id = :car_profit_and_loss_car_id ";
            $sql .= "and car_profit_and_loss_date = :car_profit_and_loss_date ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_car_id" => $this->car_profit_and_loss_car_id,
                "car_profit_and_loss_date" => $this->car_profit_and_loss_date
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
            $sql = "select income_profits_and_loss_id from {$this->tblProfitAndLoss} ";
            $sql .= "where income_profits_and_loss_id = :car_profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_profit_and_loss_aid" => $this->car_profit_and_loss_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
