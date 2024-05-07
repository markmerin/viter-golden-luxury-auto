<?php
class CarOfficeSupport
{
    public $car_office_support_aid;
    public $car_office_support_is_active;
    public $car_office_support_car_id;
    public $car_office_support_date;
    public $car_office_support_id;
    public $car_office_support_amount;
    public $car_office_support_created;
    public $car_office_support_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_office_support_start;
    public $car_office_support_total;
    public $car_office_support_search;

    public $tblCarOfficeSupport;
    public $tblOfficeSupport;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarOfficeSupport = "glav1_car_office_support";
        $this->tblOfficeSupport = "glav1_settings_office_support";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarOfficeSupport} ";
            $sql .= "(car_office_support_is_active , ";
            $sql .= "car_office_support_car_id, ";
            $sql .= "car_office_support_date, ";
            $sql .= "car_office_support_id, ";
            $sql .= "car_office_support_amount, ";
            $sql .= "car_office_support_created, ";
            $sql .= "car_office_support_datetime ) values ( ";
            $sql .= ":car_office_support_is_active, ";
            $sql .= ":car_office_support_car_id, ";
            $sql .= ":car_office_support_date, ";
            $sql .= ":car_office_support_id, ";
            $sql .= ":car_office_support_amount, ";
            $sql .= ":car_office_support_created, ";
            $sql .= ":car_office_support_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_is_active" => $this->car_office_support_is_active,
                "car_office_support_car_id" => $this->car_office_support_car_id,
                "car_office_support_date" => $this->car_office_support_date,
                "car_office_support_id" => $this->car_office_support_id,
                "car_office_support_amount" => $this->car_office_support_amount,
                "car_office_support_created" => $this->car_office_support_created,
                "car_office_support_datetime" => $this->car_office_support_datetime
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
            $sql = "update {$this->tblCarOfficeSupport} set ";
            // $sql .= "car_office_support_car_id = :car_office_support_car_id, ";
            // $sql .= "car_office_support_id = :car_office_support_id, ";
            $sql .= "car_office_support_amount = :car_office_support_amount, ";
            $sql .= "car_office_support_datetime = :car_office_support_datetime ";
            $sql .= "where car_office_support_aid  = :car_office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                // "car_office_support_car_id" => $this->car_office_support_car_id,
                // "car_office_support_id" => $this->car_office_support_id,
                "car_office_support_amount" => $this->car_office_support_amount,
                "car_office_support_datetime" => $this->car_office_support_datetime,
                "car_office_support_aid" => $this->car_office_support_aid
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
            $sql .= "{$this->tblCarOfficeSupport} ";
            $sql .= "order by car_office_support_is_active desc, ";
            $sql .= "car_office_support_car_id asc ";
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
            $sql .= "{$this->tblCarOfficeSupport} ";
            $sql .= "where car_office_support_car_id = :car_office_support_car_id ";
            $sql .= "order by car_office_support_is_active desc, ";
            $sql .= "car_office_support_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_car_id" => $this->car_office_support_car_id
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
            $sql .= "{$this->tblCarOfficeSupport} ";
            $sql .= "where ";
            $sql .= "car_office_support_car_id = :car_office_support_car_id ";
            $sql .= "and car_office_support_date like :car_office_support_date ";
            $sql .= "order by car_office_support_car_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_car_id" => $this->car_office_support_car_id,
                "car_office_support_date" => "%{$this->car_office_support_date}%"
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
            $sql = "update {$this->tblCarOfficeSupport} set ";
            $sql .= "car_office_support_is_active = :car_office_support_is_active, ";
            $sql .= "car_office_support_datetime = :car_office_support_datetime ";
            $sql .= "where car_office_support_aid = :car_office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_is_active" => $this->car_office_support_is_active,
                "car_office_support_datetime" => $this->car_office_support_datetime,
                "car_office_support_aid" => $this->car_office_support_aid
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
            $sql = "delete from {$this->tblCarOfficeSupport} ";
            $sql .= "where car_office_support_aid = :car_office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_aid" => $this->car_office_support_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkId()
    {
        try {
            $sql = "select car_office_support_car_id from {$this->tblCarOfficeSupport} ";
            $sql .= "where car_office_support_car_id = :car_office_support_car_id ";
            $sql .= "and car_office_support_id = :car_office_support_id ";
            $sql .= "and car_office_support_date = :car_office_support_date ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_car_id" => $this->car_office_support_car_id,
                "car_office_support_id" => $this->car_office_support_id,
                "car_office_support_date" => $this->car_office_support_date
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
            $sql = "select income_profits_and_loss_id from {$this->tblOfficeSupport} ";
            $sql .= "where income_profits_and_loss_id = :car_office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_office_support_aid" => $this->car_office_support_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
