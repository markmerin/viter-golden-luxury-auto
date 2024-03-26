<?php
class Maintenance
{
    public $maintenance_aid;
    public $maintenance_is_for_client;
    public $maintenance_is_for_admin;
    public $maintenance_created;
    public $maintenance_datetime;

    public $connection;
    public $lastInsertedId;
    public $maintenance_start;
    public $maintenance_total;
    public $maintenance_search;

    public $tblMaintenance;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMaintenance = "glav1_maintenance";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblMaintenance} ";
            $sql .= "( maintenance_is_for_client, ";
            $sql .= "maintenance_is_for_admin, ";
            $sql .= "maintenance_created, ";
            $sql .= "maintenance_datetime ) values ( ";
            $sql .= ":maintenance_is_for_client, ";
            $sql .= ":maintenance_is_for_admin, ";
            $sql .= ":maintenance_created, ";
            $sql .= ":maintenance_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "maintenance_is_for_client" => $this->maintenance_is_for_client,
                "maintenance_is_for_admin" => $this->maintenance_is_for_admin,
                "maintenance_created" => $this->maintenance_created,
                "maintenance_datetime" => $this->maintenance_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read maintenance
    public function readAll()
    {
        try {
            $sql = "select maintenance_aid, ";
            $sql .= "maintenance_is_for_client, ";
            $sql .= "maintenance_is_for_admin ";
            $sql .= "from {$this->tblMaintenance} ";
            $sql .= "limit 1 ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update maintenance for client
    public function update()
    {
        try {
            $sql = "update {$this->tblMaintenance} set ";
            $sql .= "maintenance_is_for_client = :maintenance_is_for_client, ";
            $sql .= "maintenance_datetime = :maintenance_datetime ";
            $sql .= "where maintenance_aid  = :maintenance_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "maintenance_is_for_client" => $this->maintenance_is_for_client,
                "maintenance_datetime" => $this->maintenance_datetime,
                "maintenance_aid" => $this->maintenance_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update maintenance for all
    public function updateForAll()
    {
        try {
            $sql = "update {$this->tblMaintenance} set ";
            $sql .= "maintenance_is_for_client = :maintenance_is_for_client, ";
            $sql .= "maintenance_is_for_admin = :maintenance_is_for_admin, ";
            $sql .= "maintenance_datetime = :maintenance_datetime ";
            $sql .= "where maintenance_aid  = :maintenance_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "maintenance_is_for_client" => $this->maintenance_is_for_client,
                "maintenance_is_for_admin" => $this->maintenance_is_for_admin,
                "maintenance_datetime" => $this->maintenance_datetime,
                "maintenance_aid" => $this->maintenance_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
