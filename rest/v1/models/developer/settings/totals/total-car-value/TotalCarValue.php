<?php
class TotalCarValue
{
    public $car_value_aid;
    public $car_value_is_active;
    public $car_value_name;
    public $car_value_created;
    public $car_value_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_value_start;
    public $car_value_total;
    public $car_value_search;


    public $tblCarValue;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarValue = "glav1_settings_total_car_value";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarValue} ";
            $sql .= "( car_value_name, ";
            $sql .= "car_value_is_active, ";
            $sql .= "car_value_created, ";
            $sql .= "car_value_datetime ) values ( ";
            $sql .= ":car_value_name, ";
            $sql .= ":car_value_is_active, ";
            $sql .= ":car_value_created, ";
            $sql .= ":car_value_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_name" => $this->car_value_name,
                "car_value_is_active" => $this->car_value_is_active,
                "car_value_created" => $this->car_value_created,
                "car_value_datetime" => $this->car_value_datetime,
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
            $sql .= " {$this->tblCarValue} ";
            $sql .= "order by car_value_is_active desc, ";
            $sql .= "car_value_name asc ";
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
            $sql = "select * from {$this->tblCarValue} ";
            $sql .= "where car_value_aid  = :car_value_aid  ";
            $sql .= "order by car_value_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_aid" => $this->car_value_aid,
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
            $sql .= "from {$this->tblCarValue} ";
            $sql .= "order by car_value_is_active desc, ";
            $sql .= "car_value_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->car_value_start - 1,
                "total" => $this->car_value_total,
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
            $sql .= "from {$this->tblCarValue} ";
            $sql .= "where car_value_name like :car_value_name ";
            $sql .= "order by car_value_is_active desc, ";
            $sql .= "car_value_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_name" => "%{$this->car_value_search}%",
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
            $sql = "update {$this->tblCarValue} set ";
            $sql .= "car_value_name = :car_value_name, ";
            $sql .= "car_value_datetime = :car_value_datetime ";
            $sql .= "where car_value_aid = :car_value_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_name" => $this->car_value_name,
                "car_value_datetime" => $this->car_value_datetime,
                "car_value_aid" => $this->car_value_aid,
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
            $sql = "update {$this->tblCarValue} set ";
            $sql .= "car_value_is_active = :car_value_is_active, ";
            $sql .= "car_value_datetime = :car_value_datetime ";
            $sql .= "where car_value_aid  = :car_value_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_is_active" => $this->car_value_is_active,
                "car_value_datetime" => $this->car_value_datetime,
                "car_value_aid" => $this->car_value_aid,
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
            $sql = "delete from {$this->tblCarValue} ";
            $sql .= "where car_value_aid = :car_value_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_aid" => $this->car_value_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select car_value_name from {$this->tblCarValue} ";
            $sql .= "where car_value_name = :car_value_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_name" => "{$this->car_value_name}",
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

            $sql .= "from {$this->tblCarValue} ";
            $sql .= "where car_value_is_active = :car_value_is_active ";
            $sql .= "and car_value_name like :car_value_name ";
            $sql .= "order by car_value_is_active desc, ";
            $sql .= "car_value_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_name" => "%{$this->car_value_search}%",
                "car_value_is_active" => $this->car_value_is_active,
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
            $sql .= "from {$this->tblCarValue} ";
            $sql .= "where car_value_is_active = :car_value_is_active ";
            $sql .= "order by car_value_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_value_is_active" => $this->car_value_is_active,
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
    //         $sql .= "where designation_expenses_id = :car_value_aid  ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "car_value_aid " => "{$this->car_value_aid }",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
