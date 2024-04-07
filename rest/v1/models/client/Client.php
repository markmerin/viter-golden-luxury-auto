<?php
class Client
{
    public $client_aid;
    public $client_is_active;
    public $client_fname;
    public $client_lname;
    public $client_contact;
    public $client_email;
    public $client_bank_name;
    public $client_bank_routing_number;
    public $client_bank_account_number;
    public $client_created;
    public $client_datetime;

    public $connection;
    public $lastInsertedId;
    public $client_start;
    public $client_total;
    public $client_search;

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
            $sql = "select * from {$this->tblClient} ";
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
}
