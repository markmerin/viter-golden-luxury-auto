<?php
class NadaDepreciationWithAdd
{
    public $nada_depreciation_with_add_aid;
    public $nada_depreciation_with_add_is_active;
    public $nada_depreciation_with_add_car_id;
    public $nada_depreciation_with_add_id;
    public $nada_depreciation_with_add_date;
    public $nada_depreciation_with_add_created;
    public $nada_depreciation_with_add_datetime;

    public $connection;
    public $lastInsertedId;

    public $nada_depreciation_with_add_start;
    public $nada_depreciation_with_add_total;
    public $nada_depreciation_with_add_search;

    public $tblCurrentCostWithAdd;
    public $tblNadaDepreciationWithAdd;
    public $tblCar;
    public $tblCarMake;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCurrentCostWithAdd = "glav1_current_cost_with_add";
        $this->tblNadaDepreciationWithAdd = "glav1_nada_depreciation_with_add";
        $this->tblCar = "glav1_car";
        $this->tblCarMake = "glav1_car_make";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblNadaDepreciationWithAdd} ";
            $sql .= "( nada_depreciation_with_add_id, ";
            $sql .= "nada_depreciation_with_add_date, ";
            $sql .= "nada_depreciation_with_add_car_id, ";
            $sql .= "nada_depreciation_with_add_is_active, ";
            $sql .= "nada_depreciation_with_add_created, ";
            $sql .= "nada_depreciation_with_add_datetime ) values ( ";
            $sql .= ":nada_depreciation_with_add_id, ";
            $sql .= ":nada_depreciation_with_add_date, ";
            $sql .= ":nada_depreciation_with_add_car_id, ";
            $sql .= ":nada_depreciation_with_add_is_active, ";
            $sql .= ":nada_depreciation_with_add_created, ";
            $sql .= ":nada_depreciation_with_add_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_id" => $this->nada_depreciation_with_add_id,
                "nada_depreciation_with_add_date" => $this->nada_depreciation_with_add_date,
                "nada_depreciation_with_add_car_id" => $this->nada_depreciation_with_add_car_id,
                "nada_depreciation_with_add_is_active" => $this->nada_depreciation_with_add_is_active,
                "nada_depreciation_with_add_created" => $this->nada_depreciation_with_add_created,
                "nada_depreciation_with_add_datetime" => $this->nada_depreciation_with_add_datetime,
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
            $sql .= "{$this->tblNadaDepreciationWithAdd} as nada, ";
            $sql .= "{$this->tblCurrentCostWithAdd} as cost, ";
            $sql .= "{$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as make ";
            $sql .= "where nada.nada_depreciation_with_add_id = cost.current_cost_with_add_aid ";
            $sql .= "and nada.nada_depreciation_with_add_car_id = car.car_aid ";
            $sql .= "and car.car_vehicle_make_id = make.car_make_aid ";
            $sql .= "and car.car_aid = :nada_depreciation_with_add_car_id ";
            $sql .= "order by nada_depreciation_with_add_is_active desc, ";
            $sql .= "nada_depreciation_with_add_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_car_id" => $this->nada_depreciation_with_add_car_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblNadaDepreciationWithAdd} ";
            $sql .= "where nada_depreciation_with_add_aid = :nada_depreciation_with_add_aid ";
            $sql .= "order by nada_depreciation_with_add_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_aid" => $this->nada_depreciation_with_add_aid,
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
            $sql .= "from ";
            $sql .= "{$this->tblNadaDepreciationWithAdd} as nada, ";
            $sql .= "{$this->tblCurrentCostWithAdd} as cost, ";
            $sql .= "{$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as make ";
            $sql .= "where nada.nada_depreciation_with_add_id = cost.current_cost_with_add_aid ";
            $sql .= "and nada.nada_depreciation_with_add_car_id = car.car_aid ";
            $sql .= "and car.car_vehicle_make_id = make.car_make_aid ";
            $sql .= "and car.car_aid = :nada_depreciation_with_add_car_id ";
            $sql .= "order by nada_depreciation_with_add_is_active desc, ";
            $sql .= "nada_depreciation_with_add_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->nada_depreciation_with_add_start - 1,
                "total" => $this->nada_depreciation_with_add_total,
                "nada_depreciation_with_add_car_id" => $this->nada_depreciation_with_add_car_id,
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
            $sql .= "from ";
            $sql .= "{$this->tblNadaDepreciationWithAdd} as nada, ";
            $sql .= "{$this->tblCurrentCostWithAdd} as cost, ";
            $sql .= "{$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as make ";
            $sql .= "where nada.nada_depreciation_with_add_id = cost.current_cost_with_add_aid ";
            $sql .= "and nada.nada_depreciation_with_add_car_id = car.car_aid ";
            $sql .= "and car.car_vehicle_make_id = make.car_make_aid ";
            $sql .= "and car.car_aid = :nada_depreciation_with_add_car_id ";
            $sql .= "and car.car_make_name like :car_make_name ";
            $sql .= "order by nada_depreciation_with_add_is_active desc, ";
            $sql .= "nada_depreciation_with_add_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_car_id" => $this->nada_depreciation_with_add_car_id,
                "car_make_name" => "%{$this->nada_depreciation_with_add_search}%",
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
            $sql = "update {$this->tblNadaDepreciationWithAdd} set ";
            $sql .= "nada_depreciation_with_add_id = :nada_depreciation_with_add_id, ";
            $sql .= "nada_depreciation_with_add_date = :nada_depreciation_with_add_date, ";
            $sql .= "nada_depreciation_with_add_datetime = :nada_depreciation_with_add_datetime ";
            $sql .= "where nada_depreciation_with_add_aid  = :nada_depreciation_with_add_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_id" => $this->nada_depreciation_with_add_id,
                "nada_depreciation_with_add_date" => $this->nada_depreciation_with_add_date,
                "nada_depreciation_with_add_datetime" => $this->nada_depreciation_with_add_datetime,
                "nada_depreciation_with_add_aid" => $this->nada_depreciation_with_add_aid,
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
            $sql = "update {$this->tblNadaDepreciationWithAdd} set ";
            $sql .= "nada_depreciation_with_add_is_active = :nada_depreciation_with_add_is_active, ";
            $sql .= "nada_depreciation_with_add_datetime = :nada_depreciation_with_add_datetime ";
            $sql .= "where nada_depreciation_with_add_aid = :nada_depreciation_with_add_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_is_active" => $this->nada_depreciation_with_add_is_active,
                "nada_depreciation_with_add_datetime" => $this->nada_depreciation_with_add_datetime,
                "nada_depreciation_with_add_aid" => $this->nada_depreciation_with_add_aid,
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
            $sql = "delete from {$this->tblNadaDepreciationWithAdd} ";
            $sql .= "where nada_depreciation_with_add_aid = :nada_depreciation_with_add_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_aid" => $this->nada_depreciation_with_add_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select nada_depreciation_with_add_car_id from {$this->tblNadaDepreciationWithAdd} ";
            $sql .= "where nada_depreciation_with_add_car_id = :nada_depreciation_with_add_car_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_car_id" => "{$this->nada_depreciation_with_add_car_id}",
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
            $sql .= "from ";
            $sql .= "{$this->tblNadaDepreciationWithAdd} as nada, ";
            $sql .= "{$this->tblCurrentCostWithAdd} as cost, ";
            $sql .= "{$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as make ";
            $sql .= "where nada.nada_depreciation_with_add_id = cost.current_cost_with_add_aid ";
            $sql .= "and nada.nada_depreciation_with_add_car_id = car.car_aid ";
            $sql .= "and car.car_vehicle_make_id = make.car_make_aid ";
            $sql .= "and car.car_aid = :nada_depreciation_with_add_car_id ";
            $sql .= "and car.car_make_name like :car_make_name ";
            $sql .= "and nada.nada_depreciation_with_add_is_active = :nada_depreciation_with_add_is_active ";
            $sql .= "order by nada_depreciation_with_add_is_active desc, ";
            $sql .= "nada_depreciation_with_add_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_make_name" => "%{$this->nada_depreciation_with_add_search}%",
                "nada_depreciation_with_add_is_active" => $this->nada_depreciation_with_add_is_active,
                "nada_depreciation_with_add_car_id" => $this->nada_depreciation_with_add_car_id,
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
            $sql .= "from ";
            $sql .= "{$this->tblNadaDepreciationWithAdd} as nada, ";
            $sql .= "{$this->tblCurrentCostWithAdd} as cost, ";
            $sql .= "{$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as make ";
            $sql .= "where nada.nada_depreciation_with_add_id = cost.current_cost_with_add_aid ";
            $sql .= "and nada.nada_depreciation_with_add_car_id = car.car_aid ";
            $sql .= "and car.car_vehicle_make_id = make.car_make_aid ";
            $sql .= "and car.car_aid = :nada_depreciation_with_add_car_id ";
            $sql .= "and nada.nada_depreciation_with_add_is_active = :nada_depreciation_with_add_is_active ";
            $sql .= "order by nada_depreciation_with_add_is_active desc, ";
            $sql .= "nada_depreciation_with_add_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "nada_depreciation_with_add_is_active" => $this->nada_depreciation_with_add_is_active,
                "nada_depreciation_with_add_car_id" => $this->nada_depreciation_with_add_car_id,
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
                "car_vehicle_make_id" => $this->nada_depreciation_with_add_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
