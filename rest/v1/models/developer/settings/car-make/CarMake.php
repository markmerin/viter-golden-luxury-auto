<?php
class CarMake
{
    public $car_make_aid;
    public $car_make_is_active;
    public $car_make_name;
    public $car_make_created;
    public $car_make_datetime;

    public $connection;
    public $lastInsertedId;

    public $car_make_start;
    public $car_make_total;
    public $car_make_search;


    public $tblCarMake;
    public $tblCar;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarMake = "glav1_car_make";
        $this->tblCar = "glav1_car";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarMake} ";
            $sql .= "( car_make_name, ";
            $sql .= "car_make_is_active, ";
            $sql .= "car_make_created, ";
            $sql .= "car_make_datetime ) values ( ";
            $sql .= ":car_make_name, ";
            $sql .= ":car_make_is_active, ";
            $sql .= ":car_make_created, ";
            $sql .= ":car_make_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_name" => $this->car_make_name,
                "car_make_is_active" => $this->car_make_is_active,
                "car_make_created" => $this->car_make_created,
                "car_make_datetime" => $this->car_make_datetime,
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
            $sql .= " {$this->tblCarMake} ";
            $sql .= "order by car_make_is_active desc, ";
            $sql .= "car_make_name asc ";
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
            $sql = "select * from {$this->tblCarMake} ";
            $sql .= "where car_make_aid = :car_make_aid ";
            $sql .= "order by car_make_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_aid" => $this->car_make_aid,
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
            $sql .= "from {$this->tblCarMake} ";
            $sql .= "order by car_make_is_active desc, ";
            $sql .= "car_make_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->car_make_start - 1,
                "total" => $this->car_make_total,
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
            $sql .= "from {$this->tblCarMake} ";
            $sql .= "where car_make_name like :car_make_name ";
            $sql .= "order by car_make_is_active desc, ";
            $sql .= "car_make_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_name" => "%{$this->car_make_search}%",
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
            $sql = "update {$this->tblCarMake} set ";
            $sql .= "car_make_name = :car_make_name, ";
            $sql .= "car_make_datetime = :car_make_datetime ";
            $sql .= "where car_make_aid  = :car_make_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_name" => $this->car_make_name,
                "car_make_datetime" => $this->car_make_datetime,
                "car_make_aid" => $this->car_make_aid,
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
            $sql = "update {$this->tblCarMake} set ";
            $sql .= "car_make_is_active = :car_make_is_active, ";
            $sql .= "car_make_datetime = :car_make_datetime ";
            $sql .= "where car_make_aid = :car_make_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_is_active" => $this->car_make_is_active,
                "car_make_datetime" => $this->car_make_datetime,
                "car_make_aid" => $this->car_make_aid,
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
            $sql = "delete from {$this->tblCarMake} ";
            $sql .= "where car_make_aid = :car_make_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_aid" => $this->car_make_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select car_make_name from {$this->tblCarMake} ";
            $sql .= "where car_make_name = :car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_name" => "{$this->car_make_name}",
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

            $sql .= "from {$this->tblCarMake} ";
            $sql .= "where car_make_is_active = :car_make_is_active ";
            $sql .= "and car_make_name like :car_make_name ";
            $sql .= "order by car_make_is_active desc, ";
            $sql .= "car_make_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_name" => "%{$this->car_make_search}%",
                "car_make_is_active" => $this->car_make_is_active,
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
            $sql .= "from {$this->tblCarMake} ";
            $sql .= "where car_make_is_active = :car_make_is_active ";
            $sql .= "order by car_make_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_is_active" => $this->car_make_is_active,
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
            $sql = "select car_vehicle_make_id from {$this->tblCar} ";
            $sql .= "where car_vehicle_make_id = :car_vehicle_make_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_vehicle_make_id" => $this->car_make_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
