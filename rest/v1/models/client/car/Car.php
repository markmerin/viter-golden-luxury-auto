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

    public $client_email;

    public $connection;
    public $lastInsertedId;
    public $car_start;
    public $car_total;
    public $car_search;

    public $tblClient;
    public $tblCar;
    public $tblCarMake;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "glav1_client";
        $this->tblCar = "glav1_car";
        $this->tblCarMake = "glav1_car_make";
    }

    // read by id
    public function readByEmail()
    {
        try {
            $sql = "select client_aid from {$this->tblClient} ";
            $sql .= "where client_email = :client_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_email" => $this->client_email,
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

    // filter by status
    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car.car_client_id = :car_client_id ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "and car.car_is_active = :car_is_active ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_client_id" => $this->car_client_id,
                "car_is_active" => $this->car_is_active
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
                "car_client_id" => $this->car_client_id,
                "car_year" => "%{$this->car_search}%",
                "car_specs" => "%{$this->car_search}%",
                "car_vin_number" => "%{$this->car_search}%",
                "car_plate_number" => "%{$this->car_search}%",
                "car_make_name" => "%{$this->car_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search by status
    public function searchByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake ";
            $sql .= "where car.car_client_id = :car_client_id ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "and car.car_is_active = :car_is_active ";
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
                "car_client_id" => $this->car_client_id,
                "car_year" => "%{$this->car_search}%",
                "car_specs" => "%{$this->car_search}%",
                "car_vin_number" => "%{$this->car_search}%",
                "car_plate_number" => "%{$this->car_search}%",
                "car_make_name" => "%{$this->car_search}%",
                "car_is_active" => $this->car_is_active
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
