<?php
class DirectDelivery
{
    public $direct_delivery_aid;
    public $direct_delivery_is_active;
    public $direct_delivery_name;
    public $direct_delivery_created;
    public $direct_delivery_datetime;

    public $connection;
    public $lastInsertedId;

    public $direct_delivery_start;
    public $direct_delivery_total;
    public $direct_delivery_search;

    public $tblDirectDelivery;
    public $tblCarDirectDelivery;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDirectDelivery = "glav1_settings_direct_delivery";
        $this->tblCarDirectDelivery = "glav1_car_direct_delivery";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblDirectDelivery} ";
            $sql .= "(direct_delivery_is_active, ";
            $sql .= "direct_delivery_name, ";
            $sql .= "direct_delivery_created, ";
            $sql .= "direct_delivery_datetime ) values ( ";
            $sql .= ":direct_delivery_is_active, ";
            $sql .= ":direct_delivery_name, ";
            $sql .= ":direct_delivery_created, ";
            $sql .= ":direct_delivery_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_is_active" => $this->direct_delivery_is_active,
                "direct_delivery_name" => $this->direct_delivery_name,
                "direct_delivery_created" => $this->direct_delivery_created,
                "direct_delivery_datetime" => $this->direct_delivery_datetime
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
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "order by direct_delivery_is_active desc, ";
            $sql .= "direct_delivery_name asc ";
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
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "where direct_delivery_aid = :direct_delivery_aid ";
            $sql .= "order by direct_delivery_is_active desc, ";
            $sql .= "direct_delivery_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_aid" => $this->direct_delivery_aid
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
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "order by direct_delivery_is_active desc, ";
            $sql .= "direct_delivery_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->direct_delivery_start - 1,
                "total" => $this->direct_delivery_total,
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
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "where direct_delivery_name like :direct_delivery_name ";
            $sql .= "order by direct_delivery_is_active desc, ";
            $sql .= "direct_delivery_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_name" => "%{$this->direct_delivery_search}%"
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchByDirectDelivery()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "where direct_delivery_name like :direct_delivery_name ";
            $sql .= "and direct_delivery_is_active = 1 ";
            $sql .= "order by direct_delivery_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_name" => "%{$this->direct_delivery_search}%"
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
            $sql = "update {$this->tblDirectDelivery} set ";
            $sql .= "direct_delivery_name = :direct_delivery_name, ";
            $sql .= "direct_delivery_datetime = :direct_delivery_datetime ";
            $sql .= "where direct_delivery_aid  = :direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_name" => $this->direct_delivery_name,
                "direct_delivery_datetime" => $this->direct_delivery_datetime,
                "direct_delivery_aid" => $this->direct_delivery_aid,
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
            $sql = "update {$this->tblDirectDelivery} set ";
            $sql .= "direct_delivery_is_active = :direct_delivery_is_active, ";
            $sql .= "direct_delivery_datetime = :direct_delivery_datetime ";
            $sql .= "where direct_delivery_aid = :direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_is_active" => $this->direct_delivery_is_active,
                "direct_delivery_datetime" => $this->direct_delivery_datetime,
                "direct_delivery_aid" => $this->direct_delivery_aid
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
            $sql = "delete from {$this->tblDirectDelivery} ";
            $sql .= "where direct_delivery_aid = :direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_aid" => $this->direct_delivery_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select direct_delivery_name from {$this->tblDirectDelivery} ";
            $sql .= "where direct_delivery_name = :direct_delivery_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_name" => "{$this->direct_delivery_name}",
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
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "where ";
            $sql .= "direct_delivery_is_active = :direct_delivery_is_active ";
            $sql .= "and direct_delivery_name like :direct_delivery_name ";
            $sql .= "order by direct_delivery_is_active desc, ";
            $sql .= "direct_delivery_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_is_active" => $this->direct_delivery_is_active,
                "direct_delivery_name" => "%{$this->direct_delivery_search}%"
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
            $sql .= "{$this->tblDirectDelivery} ";
            $sql .= "where ";
            $sql .= "direct_delivery_is_active = :direct_delivery_is_active ";
            $sql .= "order by direct_delivery_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_is_active" => $this->direct_delivery_is_active
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
            $sql = "select car_direct_delivery_id from {$this->tblCarDirectDelivery} ";
            $sql .= "where car_direct_delivery_id = :direct_delivery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "direct_delivery_aid" => $this->direct_delivery_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
