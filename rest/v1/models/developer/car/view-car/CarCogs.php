<?php
class CarCogs
{
    public $car_cogs_aid;
    public $car_cogs_is_active;
    public $car_cogs_car_id;
    public $car_cogs_date;
    public $car_cogs_id;
    public $car_cogs_amount;
    public $car_cogs_created;
    public $car_cogs_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_cogs_start;
    public $car_cogs_total;
    public $car_cogs_search;

    public $tblCarCogs;
    public $tblCogs;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarCogs = "glav1_car_cogs";
        $this->tblCogs = "glav1_settings_cogs";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarCogs} ";
            $sql .= "(car_cogs_is_active , ";
            $sql .= "car_cogs_car_id, ";
            $sql .= "car_cogs_date, ";
            $sql .= "car_cogs_id, ";
            $sql .= "car_cogs_amount, ";
            $sql .= "car_cogs_created, ";
            $sql .= "car_cogs_datetime ) values ( ";
            $sql .= ":car_cogs_is_active, ";
            $sql .= ":car_cogs_car_id, ";
            $sql .= ":car_cogs_date, ";
            $sql .= ":car_cogs_id, ";
            $sql .= ":car_cogs_amount, ";
            $sql .= ":car_cogs_created, ";
            $sql .= ":car_cogs_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_is_active" => $this->car_cogs_is_active,
                "car_cogs_car_id" => $this->car_cogs_car_id,
                "car_cogs_date" => $this->car_cogs_date,
                "car_cogs_id" => $this->car_cogs_id,
                "car_cogs_amount" => $this->car_cogs_amount,
                "car_cogs_created" => $this->car_cogs_created,
                "car_cogs_datetime" => $this->car_cogs_datetime
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
            $sql = "update {$this->tblCarCogs} set ";
            // $sql .= "car_cogs_car_id = :car_cogs_car_id, ";
            // $sql .= "car_cogs_id = :car_cogs_id, ";
            $sql .= "car_cogs_amount = :car_cogs_amount, ";
            $sql .= "car_cogs_datetime = :car_cogs_datetime ";
            $sql .= "where car_cogs_aid  = :car_cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "car_cogs_car_id" => $this->car_cogs_car_id,
                // "car_cogs_id" => $this->car_cogs_id,
                "car_cogs_amount" => $this->car_cogs_amount,
                "car_cogs_datetime" => $this->car_cogs_datetime,
                "car_cogs_aid" => $this->car_cogs_aid
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
            $sql .= "{$this->tblCarCogs} ";
            $sql .= "order by car_cogs_is_active desc, ";
            $sql .= "car_cogs_car_id asc ";
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
            $sql .= "{$this->tblCarCogs} ";
            $sql .= "where car_cogs_car_id = :car_cogs_car_id ";
            $sql .= "order by car_cogs_is_active desc, ";
            $sql .= "car_cogs_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_car_id" => $this->car_cogs_car_id
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
            $sql .= "{$this->tblCarCogs} ";
            $sql .= "where ";
            $sql .= "car_cogs_car_id = :car_cogs_car_id ";
            $sql .= "and car_cogs_date like :car_cogs_date ";
            $sql .= "order by car_cogs_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_car_id" => $this->car_cogs_car_id,
                "car_cogs_date" => "%{$this->car_cogs_date}%"
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
            $sql = "update {$this->tblCarCogs} set ";
            $sql .= "car_cogs_is_active = :car_cogs_is_active, ";
            $sql .= "car_cogs_datetime = :car_cogs_datetime ";
            $sql .= "where car_cogs_aid = :car_cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_is_active" => $this->car_cogs_is_active,
                "car_cogs_datetime" => $this->car_cogs_datetime,
                "car_cogs_aid" => $this->car_cogs_aid
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
            $sql = "delete from {$this->tblCarCogs} ";
            $sql .= "where car_cogs_aid = :car_cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_aid" => $this->car_cogs_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkId()
    {
        try {
            $sql = "select car_cogs_car_id from {$this->tblCarCogs} ";
            $sql .= "where car_cogs_car_id = :car_cogs_car_id ";
            $sql .= "and car_cogs_id = :car_cogs_id ";
            $sql .= "and car_cogs_date = :car_cogs_date ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_car_id" => $this->car_cogs_car_id,
                "car_cogs_id" => $this->car_cogs_id,
                "car_cogs_date" => $this->car_cogs_date
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
            $sql = "select income_profits_and_loss_id from {$this->tblCogs} ";
            $sql .= "where income_profits_and_loss_id = :car_cogs_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_cogs_aid" => $this->car_cogs_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
