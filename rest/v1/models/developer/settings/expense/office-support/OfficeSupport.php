<?php
class OfficeSupport
{
    public $office_support_aid;
    public $office_support_is_active;
    public $office_support_name;
    public $office_support_created;
    public $office_support_datetime;

    public $connection;
    public $lastInsertedId;

    public $office_support_start;
    public $office_support_total;
    public $office_support_search;

    public $tblOfficeSupport;
    public $tblCarOfficeSupport;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOfficeSupport = "glav1_settings_office_support";
        $this->tblCarOfficeSupport = "glav1_car_office_support";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblOfficeSupport} ";
            $sql .= "(office_support_is_active, ";
            $sql .= "office_support_name, ";
            $sql .= "office_support_created, ";
            $sql .= "office_support_datetime ) values ( ";
            $sql .= ":office_support_is_active, ";
            $sql .= ":office_support_name, ";
            $sql .= ":office_support_created, ";
            $sql .= ":office_support_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_is_active" => $this->office_support_is_active,
                "office_support_name" => $this->office_support_name,
                "office_support_created" => $this->office_support_created,
                "office_support_datetime" => $this->office_support_datetime
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
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "order by office_support_is_active desc, ";
            $sql .= "office_support_name asc ";
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
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "where office_support_aid = :office_support_aid ";
            $sql .= "order by office_support_is_active desc, ";
            $sql .= "office_support_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_aid" => $this->office_support_aid
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
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "order by office_support_is_active desc, ";
            $sql .= "office_support_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->office_support_start - 1,
                "total" => $this->office_support_total,
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
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "where office_support_name like :office_support_name ";
            $sql .= "order by office_support_is_active desc, ";
            $sql .= "office_support_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_name" => "%{$this->office_support_search}%"
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchByOfficeSupport()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "where office_support_name like :office_support_name ";
            $sql .= "and office_support_is_active = 1 ";
            $sql .= "order by office_support_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_name" => "%{$this->office_support_search}%"
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
            $sql = "update {$this->tblOfficeSupport} set ";
            $sql .= "office_support_name = :office_support_name, ";
            $sql .= "office_support_datetime = :office_support_datetime ";
            $sql .= "where office_support_aid  = :office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_name" => $this->office_support_name,
                "office_support_datetime" => $this->office_support_datetime,
                "office_support_aid" => $this->office_support_aid,
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
            $sql = "update {$this->tblOfficeSupport} set ";
            $sql .= "office_support_is_active = :office_support_is_active, ";
            $sql .= "office_support_datetime = :office_support_datetime ";
            $sql .= "where office_support_aid = :office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_is_active" => $this->office_support_is_active,
                "office_support_datetime" => $this->office_support_datetime,
                "office_support_aid" => $this->office_support_aid
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
            $sql = "delete from {$this->tblOfficeSupport} ";
            $sql .= "where office_support_aid = :office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_aid" => $this->office_support_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select office_support_name from {$this->tblOfficeSupport} ";
            $sql .= "where office_support_name = :office_support_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_name" => "{$this->office_support_name}",
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
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "where ";
            $sql .= "office_support_is_active = :office_support_is_active ";
            $sql .= "and office_support_name like :office_support_name ";
            $sql .= "order by office_support_is_active desc, ";
            $sql .= "office_support_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_is_active" => $this->office_support_is_active,
                "office_support_name" => "%{$this->office_support_search}%"
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
            $sql .= "{$this->tblOfficeSupport} ";
            $sql .= "where ";
            $sql .= "office_support_is_active = :office_support_is_active ";
            $sql .= "order by office_support_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_is_active" => $this->office_support_is_active
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
            $sql = "select income_profits_and_loss_id from {$this->tblCarOfficeSupport} ";
            $sql .= "where income_profits_and_loss_id = :office_support_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "office_support_aid" => $this->office_support_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
