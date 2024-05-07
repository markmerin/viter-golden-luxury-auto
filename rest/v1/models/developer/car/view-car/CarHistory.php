<?php
class CarHistory
{
    public $car_history_aid;
    public $car_history_is_active;
    public $car_history_car_id;
    public $car_history_date;
    public $car_history_id;
    public $car_history_amount;
    public $car_history_created;
    public $car_history_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_history_start;
    public $car_history_total;
    public $car_history_search;

    public $tblCarHistory;
    public $tblSettingHistory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarHistory = "glav1_car_history";
        // $this->tblSettingHistory = "glav1_settings_history";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarHistory} ";
            $sql .= "(car_history_is_active , ";
            $sql .= "car_history_car_id, ";
            $sql .= "car_history_date, ";
            $sql .= "car_history_id, ";
            $sql .= "car_history_amount, ";
            $sql .= "car_history_created, ";
            $sql .= "car_history_datetime ) values ( ";
            $sql .= ":car_history_is_active, ";
            $sql .= ":car_history_car_id, ";
            $sql .= ":car_history_date, ";
            $sql .= ":car_history_id, ";
            $sql .= ":car_history_amount, ";
            $sql .= ":car_history_created, ";
            $sql .= ":car_history_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_history_is_active" => $this->car_history_is_active,
                "car_history_car_id" => $this->car_history_car_id,
                "car_history_date" => $this->car_history_date,
                "car_history_id" => $this->car_history_id,
                "car_history_amount" => $this->car_history_amount,
                "car_history_created" => $this->car_history_created,
                "car_history_datetime" => $this->car_history_datetime
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
            $sql = "update {$this->tblCarHistory} set ";
            // $sql .= "car_history_car_id = :car_history_car_id, ";
            // $sql .= "car_history_id = :car_history_id, ";
            $sql .= "car_history_amount = :car_history_amount, ";
            $sql .= "car_history_datetime = :car_history_datetime ";
            $sql .= "where car_history_aid  = :car_history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "car_history_car_id" => $this->car_history_car_id,
                // "car_history_id" => $this->car_history_id,
                "car_history_amount" => $this->car_history_amount,
                "car_history_datetime" => $this->car_history_datetime,
                "car_history_aid" => $this->car_history_aid
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
            $sql .= "{$this->tblCarHistory} ";
            $sql .= "order by car_history_is_active desc, ";
            $sql .= "car_history_car_id asc ";
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
            $sql .= "{$this->tblCarHistory} ";
            $sql .= "where car_history_car_id = :car_history_car_id ";
            $sql .= "order by car_history_is_active desc, ";
            $sql .= "car_history_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_history_car_id" => $this->car_history_car_id
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
            $sql .= "{$this->tblCarHistory} ";
            $sql .= "where ";
            $sql .= "car_history_car_id = :car_history_car_id ";
            $sql .= "and car_history_date like :car_history_date ";
            $sql .= "order by car_history_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_history_car_id" => $this->car_history_car_id,
                "car_history_date" => "%{$this->car_history_date}%"
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
            $sql = "update {$this->tblCarHistory} set ";
            $sql .= "car_history_is_active = :car_history_is_active, ";
            $sql .= "car_history_datetime = :car_history_datetime ";
            $sql .= "where car_history_aid = :car_history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_history_is_active" => $this->car_history_is_active,
                "car_history_datetime" => $this->car_history_datetime,
                "car_history_aid" => $this->car_history_aid
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
            $sql = "delete from {$this->tblCarHistory} ";
            $sql .= "where car_history_aid = :car_history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_history_aid" => $this->car_history_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkId()
    {
        try {
            $sql = "select car_history_car_id from {$this->tblCarHistory} ";
            $sql .= "where car_history_car_id = :car_history_car_id ";
            $sql .= "and car_history_date = :car_history_date ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_history_car_id" => $this->car_history_car_id,
                "car_history_date" => $this->car_history_date
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
    //         $sql .= "where income_profits_and_loss_id = :car_history_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "car_history_aid" => $this->car_history_aid
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
