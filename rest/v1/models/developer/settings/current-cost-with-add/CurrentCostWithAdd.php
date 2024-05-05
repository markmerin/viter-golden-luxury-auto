<?php
class CurrentCostWithAdd
{
    public $current_cost_with_add_aid;
    public $current_cost_with_add_is_active;
    public $current_cost_with_add_name;
    public $current_cost_with_add_created;
    public $current_cost_with_add_datetime;

    public $connection;
    public $lastInsertedId;

    public $current_cost_with_add_start;
    public $current_cost_with_add_total;
    public $current_cost_with_add_search;


    public $tblCarMake;
    public $tblCar;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCarMake = "glav1_current_cost_with_add";
        $this->tblCar = "glav1_car";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCarMake} ";
            $sql .= "( current_cost_with_add_name, ";
            $sql .= "current_cost_with_add_is_active, ";
            $sql .= "current_cost_with_add_created, ";
            $sql .= "current_cost_with_add_datetime ) values ( ";
            $sql .= ":current_cost_with_add_name, ";
            $sql .= ":current_cost_with_add_is_active, ";
            $sql .= ":current_cost_with_add_created, ";
            $sql .= ":current_cost_with_add_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_name" => $this->current_cost_with_add_name,
                "current_cost_with_add_is_active" => $this->current_cost_with_add_is_active,
                "current_cost_with_add_created" => $this->current_cost_with_add_created,
                "current_cost_with_add_datetime" => $this->current_cost_with_add_datetime,
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
            $sql .= "order by current_cost_with_add_is_active desc, ";
            $sql .= "current_cost_with_add_name asc ";
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
            $sql .= "where current_cost_with_add_aid = :current_cost_with_add_aid ";
            $sql .= "order by current_cost_with_add_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_aid" => $this->current_cost_with_add_aid,
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
            $sql .= "order by current_cost_with_add_is_active desc, ";
            $sql .= "current_cost_with_add_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->current_cost_with_add_start - 1,
                "total" => $this->current_cost_with_add_total,
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
            $sql .= "where current_cost_with_add_name like :current_cost_with_add_name ";
            $sql .= "order by current_cost_with_add_is_active desc, ";
            $sql .= "current_cost_with_add_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_name" => "%{$this->current_cost_with_add_search}%",
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
            $sql .= "current_cost_with_add_name = :current_cost_with_add_name, ";
            $sql .= "current_cost_with_add_datetime = :current_cost_with_add_datetime ";
            $sql .= "where current_cost_with_add_aid  = :current_cost_with_add_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_name" => $this->current_cost_with_add_name,
                "current_cost_with_add_datetime" => $this->current_cost_with_add_datetime,
                "current_cost_with_add_aid" => $this->current_cost_with_add_aid,
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
            $sql .= "current_cost_with_add_is_active = :current_cost_with_add_is_active, ";
            $sql .= "current_cost_with_add_datetime = :current_cost_with_add_datetime ";
            $sql .= "where current_cost_with_add_aid = :current_cost_with_add_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_is_active" => $this->current_cost_with_add_is_active,
                "current_cost_with_add_datetime" => $this->current_cost_with_add_datetime,
                "current_cost_with_add_aid" => $this->current_cost_with_add_aid,
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
            $sql .= "where current_cost_with_add_aid = :current_cost_with_add_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_aid" => $this->current_cost_with_add_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select current_cost_with_add_name from {$this->tblCarMake} ";
            $sql .= "where current_cost_with_add_name = :current_cost_with_add_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_name" => "{$this->current_cost_with_add_name}",
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
            $sql .= "where current_cost_with_add_is_active = :current_cost_with_add_is_active ";
            $sql .= "and current_cost_with_add_name like :current_cost_with_add_name ";
            $sql .= "order by current_cost_with_add_is_active desc, ";
            $sql .= "current_cost_with_add_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_name" => "%{$this->current_cost_with_add_search}%",
                "current_cost_with_add_is_active" => $this->current_cost_with_add_is_active,
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
            $sql .= "where current_cost_with_add_is_active = :current_cost_with_add_is_active ";
            $sql .= "order by current_cost_with_add_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "current_cost_with_add_is_active" => $this->current_cost_with_add_is_active,
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
                "car_vehicle_make_id" => $this->current_cost_with_add_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
