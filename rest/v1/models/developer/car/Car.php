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
    public $tblClient;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCar = "glav1_car";
        $this->tblCarMake = "glav1_car_make";
        $this->tblClient = "glav1_client";
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "car.*, ";
            $sql .= "client.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake, ";
            $sql .= "{$this->tblClient} as client ";
            $sql .= "where car.car_client_id = client.client_aid ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->query($sql);
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
            $sql .= "client.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake, ";
            $sql .= "{$this->tblClient} as client ";
            $sql .= "where car.car_client_id = client.client_aid ";
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
            $sql .= "client.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake, ";
            $sql .= "{$this->tblClient} as client ";
            $sql .= "where car_is_active = :car_is_active ";
            $sql .= "and car.car_client_id = client.client_aid ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "group by car.car_aid ";
            $sql .= "order by car.car_is_active desc, ";
            $sql .= "carMake.car_make_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "car_is_active" => $this->car_is_active,
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
            $sql .= "client.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake, ";
            $sql .= "{$this->tblClient} as client ";
            $sql .= "where car.car_client_id = client.client_aid ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "and ( carMake.car_make_name like :car_make_name ";
            $sql .= "or car.car_year like :car_year ";
            $sql .= "or client.client_fname like :client_fname ";
            $sql .= "or client.client_lname like :client_lname ";
            $sql .= "or CONCAT(client.client_fname, ' ', client.client_lname) like :client_fullname ";
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
                "client_fname" => "%{$this->car_search}%",
                "client_lname" => "%{$this->car_search}%",
                "client_fullname" => "%{$this->car_search}%",
                "car_vin_number" => "%{$this->car_search}%",
                "car_plate_number" => "%{$this->car_search}%",
                "car_make_name" => "%{$this->car_search}%",
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
            $sql .= "client.*, ";
            $sql .= "carMake.car_make_name ";
            $sql .= "from {$this->tblCar} as car, ";
            $sql .= "{$this->tblCarMake} as carMake, ";
            $sql .= "{$this->tblClient} as client ";
            $sql .= "where car.car_client_id = client.client_aid ";
            $sql .= "and car_is_active = :car_is_active ";
            $sql .= "and car.car_vehicle_make_id = carMake.car_make_aid ";
            $sql .= "and ( carMake.car_make_name like :car_make_name ";
            $sql .= "or car.car_year like :car_year ";
            $sql .= "or client.client_fname like :client_fname ";
            $sql .= "or client.client_lname like :client_lname ";
            $sql .= "or CONCAT(client.client_fname, ' ', client.client_lname) like :client_fullname ";
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
                "client_fname" => "%{$this->car_search}%",
                "client_lname" => "%{$this->car_search}%",
                "client_fullname" => "%{$this->car_search}%",
                "car_vin_number" => "%{$this->car_search}%",
                "car_plate_number" => "%{$this->car_search}%",
                "car_make_name" => "%{$this->car_search}%",
                "car_is_active" => $this->car_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
