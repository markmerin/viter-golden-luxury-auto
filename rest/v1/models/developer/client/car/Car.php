<?php
class Car
{
    public $car_aid;
    public $car_is_active;
    public $car_photo;
    public $car_client_id;
    public $car_vehicle_make_id;
    public $car_year;
    public $car_specs;
    public $car_vin_number;
    public $car_plate_number;
    public $car_registration_date;
    public $car_gas;
    public $car_tire_size;
    public $car_oil_type;
    public $car_nada_retail;
    public $car_nada_clean;
    public $car_nada_average;
    public $car_nada_rough;
    public $car_miles;
    public $car_last_oil_change;
    public $car_created;
    public $car_datetime;

    public $connection;
    public $lastInsertedId;
    public $car_start;
    public $car_total;
    public $car_search;

    public $tblCar;
    public $tblCarMake;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCar = "glav1_car";
        $this->tblCarMake = "glav1_car_make";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblCar} ";
            $sql .= "( car_photo, ";
            $sql .= "car_client_id, ";
            $sql .= "car_is_active, ";
            $sql .= "car_vehicle_make_id, ";
            $sql .= "car_year, ";
            $sql .= "car_specs, ";
            $sql .= "car_vin_number, ";
            $sql .= "car_plate_number, ";
            $sql .= "car_registration_date, ";
            $sql .= "car_gas, ";
            $sql .= "car_tire_size, ";
            $sql .= "car_oil_type, ";
            $sql .= "car_nada_retail, ";
            $sql .= "car_nada_clean, ";
            $sql .= "car_nada_average, ";
            $sql .= "car_nada_rough, ";
            $sql .= "car_miles, ";
            $sql .= "car_last_oil_change, ";
            $sql .= "car_created, ";
            $sql .= "car_datetime ) values ( ";
            $sql .= ":car_photo, ";
            $sql .= ":car_client_id, ";
            $sql .= ":car_is_active, ";
            $sql .= ":car_vehicle_make_id, ";
            $sql .= ":car_year, ";
            $sql .= ":car_specs, ";
            $sql .= ":car_vin_number, ";
            $sql .= ":car_plate_number, ";
            $sql .= ":car_registration_date, ";
            $sql .= ":car_gas, ";
            $sql .= ":car_tire_size, ";
            $sql .= ":car_oil_type, ";
            $sql .= ":car_nada_retail, ";
            $sql .= ":car_nada_clean, ";
            $sql .= ":car_nada_average, ";
            $sql .= ":car_nada_rough, ";
            $sql .= ":car_miles, ";
            $sql .= ":car_last_oil_change, ";
            $sql .= ":car_created, ";
            $sql .= ":car_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_photo" => $this->car_photo,
                "car_client_id" => $this->car_client_id,
                "car_is_active" => $this->car_is_active,
                "car_vehicle_make_id" => $this->car_vehicle_make_id,
                "car_year" => $this->car_year,
                "car_specs" => $this->car_specs,
                "car_vin_number" => $this->car_vin_number,
                "car_plate_number" => $this->car_plate_number,
                "car_registration_date" => $this->car_registration_date,
                "car_gas" => $this->car_gas,
                "car_tire_size" => $this->car_tire_size,
                "car_oil_type" => $this->car_oil_type,
                "car_nada_retail" => $this->car_nada_retail,
                "car_nada_clean" => $this->car_nada_clean,
                "car_nada_average" => $this->car_nada_average,
                "car_nada_rough" => $this->car_nada_rough,
                "car_miles" => $this->car_miles,
                "car_last_oil_change" => $this->car_last_oil_change,
                "car_created" => $this->car_created,
                "car_datetime" => $this->car_datetime,
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
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car.car_client_id = :car_client_id ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_client_id" => $this->car_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car.car_client_id = :car_client_id ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->car_start - 1,
                "total" => $this->car_total,
                "car_client_id" => $this->car_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car_is_active = :car_is_active ";
            $sql .= "and car.car_client_id = :car_client_id ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_is_active" => $this->car_is_active,
                "car_client_id" => $this->car_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car.car_client_id = :car_client_id ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "and ( carMake.car_make_name like :car_make_name ";
            $sql .= "or car.car_year like :car_year ";
            $sql .= "or car.car_specs like :car_specs ";
            $sql .= "or car.car_vin_number like :car_vin_number ";
            $sql .= "or car.car_plate_number like :car_plate_number ";
            $sql .= ") ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_year" => "%{$this->car_search}%",
                "car_specs" => "%{$this->car_search}%",
                "car_vin_number" => "%{$this->car_search}%",
                "car_plate_number" => "%{$this->car_search}%",
                "car_make_name" => "%{$this->car_search}%",
                "car_client_id" => $this->car_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function searchByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car.car_client_id = :car_client_id ";
            $sql .= "and car_is_active = :car_is_active ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "and ( carMake.car_make_name like :car_make_name ";
            $sql .= "or car.car_year like :car_year ";
            $sql .= "or car.car_specs like :car_specs ";
            $sql .= "or car.car_vin_number like :car_vin_number ";
            $sql .= "or car.car_plate_number like :car_plate_number ";
            $sql .= ") ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_year" => "%{$this->car_search}%",
                "car_specs" => "%{$this->car_search}%",
                "car_vin_number" => "%{$this->car_search}%",
                "car_plate_number" => "%{$this->car_search}%",
                "car_make_name" => "%{$this->car_search}%",
                "car_is_active" => $this->car_is_active,
                "car_client_id" => $this->car_client_id,
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
            $sql = "select * from {$this->tblCar} ";
            $sql .= "where car_aid = :car_aid ";
            $sql .= "order by car_photo asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_aid" => $this->car_aid,
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
            $sql = "update {$this->tblCar} set ";
            $sql .= "car_photo = :car_photo, ";
            $sql .= "car_vehicle_make_id = :car_vehicle_make_id, ";
            $sql .= "car_year = :car_year, ";
            $sql .= "car_specs = :car_specs, ";
            $sql .= "car_vin_number = :car_vin_number, ";
            $sql .= "car_plate_number = :car_plate_number, ";
            $sql .= "car_registration_date = :car_registration_date, ";
            $sql .= "car_gas = :car_gas, ";
            $sql .= "car_tire_size = :car_tire_size, ";
            $sql .= "car_oil_type = :car_oil_type, ";
            $sql .= "car_nada_retail = :car_nada_retail, ";
            $sql .= "car_nada_clean = :car_nada_clean, ";
            $sql .= "car_nada_average = :car_nada_average, ";
            $sql .= "car_nada_rough = :car_nada_rough, ";
            $sql .= "car_miles = :car_miles, ";
            $sql .= "car_last_oil_change = :car_last_oil_change, ";
            $sql .= "car_datetime = :car_datetime ";
            $sql .= "where car_aid  = :car_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_photo" => $this->car_photo,
                "car_vehicle_make_id" => $this->car_vehicle_make_id,
                "car_year" => $this->car_year,
                "car_specs" => $this->car_specs,
                "car_vin_number" => $this->car_vin_number,
                "car_plate_number" => $this->car_plate_number,
                "car_registration_date" => $this->car_registration_date,
                "car_gas" => $this->car_gas,
                "car_tire_size" => $this->car_tire_size,
                "car_oil_type" => $this->car_oil_type,
                "car_nada_retail" => $this->car_nada_retail,
                "car_nada_clean" => $this->car_nada_clean,
                "car_nada_average" => $this->car_nada_average,
                "car_nada_rough" => $this->car_nada_rough,
                "car_miles" => $this->car_miles,
                "car_last_oil_change" => $this->car_last_oil_change,
                "car_datetime" => $this->car_datetime,
                "car_aid" => $this->car_aid,
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
            $sql = "update {$this->tblCar} set ";
            $sql .= "car_is_active = :car_is_active, ";
            $sql .= "car_datetime = :car_datetime ";
            $sql .= "where car_aid = :car_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_is_active" => $this->car_is_active,
                "car_datetime" => $this->car_datetime,
                "car_aid" => $this->car_aid,
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
            $sql = "delete from {$this->tblCar} ";
            $sql .= "where car_aid = :car_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_aid" => $this->car_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
