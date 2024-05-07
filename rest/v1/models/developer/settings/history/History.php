<?php
class History
{
    public $history_aid;
    public $history_is_active;
    public $history_name;




    public $history_created;
    public $history_datetime;

    public $connection;
    public $lastInsertedId;

    public $history_start;
    public $history_total;
    public $history_search;


    public $tblSettingsHistory;
    public $tblHistory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsHistory = "glav1_settings_history";
        $this->tblHistory = "glav1_car_history";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsHistory} ";
            $sql .= "(history_is_active, ";
            $sql .= "history_name, ";
            $sql .= "history_created, ";
            $sql .= "history_datetime ) values ( ";
            $sql .= ":history_is_active, ";
            $sql .= ":history_name, ";
            $sql .= ":history_created, ";
            $sql .= ":history_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_is_active" => $this->history_is_active,
                "history_name" => $this->history_name,
                "history_created" => $this->history_created,
                "history_datetime" => $this->history_datetime,
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
            $sql .= " {$this->tblSettingsHistory} ";
            $sql .= "order by history_is_active desc ";
            // $sql .= "history_name asc ";
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
            $sql = "select * from {$this->tblSettingsHistory} ";
            $sql .= "where history_aid = :history_aid ";
            $sql .= "order by history_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_aid" => $this->history_aid,
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
            $sql .= "from {$this->tblSettingsHistory} ";
            $sql .= "order by history_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->history_start - 1,
                "total" => $this->history_total,
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
            $sql .= "from {$this->tblSettingsHistory} ";
            $sql .= "where history_name like :history_name ";
            $sql .= "order by history_is_active desc, ";
            $sql .= "history_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_name" => "%{$this->history_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchByHistory()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblSettingsHistory} ";
            $sql .= "where history_name like :history_name ";
            $sql .= "and history_is_active = 1 ";
            $sql .= "order by history_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_name" => "%{$this->history_search}%"
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
            $sql = "update {$this->tblSettingsHistory} set ";
            $sql .= "history_name = :history_name, ";
            $sql .= "history_datetime = :history_datetime ";
            $sql .= "where history_aid  = :history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_name" => $this->history_name,
                "history_datetime" => $this->history_datetime,
                "history_aid" => $this->history_aid,
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
            $sql = "update {$this->tblSettingsHistory} set ";
            $sql .= "history_is_active = :history_is_active, ";
            $sql .= "history_datetime = :history_datetime ";
            $sql .= "where history_aid = :history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_is_active" => $this->history_is_active,
                "history_datetime" => $this->history_datetime,
                "history_aid" => $this->history_aid,
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
            $sql = "delete from {$this->tblSettingsHistory} ";
            $sql .= "where history_aid = :history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_aid" => $this->history_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select history_name ";
            $sql .= "from {$this->tblSettingsHistory} ";
            $sql .= "where history_name = :history_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_name" => "{$this->history_name}",

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
            $sql .= "from {$this->tblSettingsHistory} ";
            $sql .= "where history_is_active = :history_is_active ";
            $sql .= "and (history_name like :history_name ";
            $sql .= ") ";
            $sql .= "order by history_is_active desc, ";
            $sql .= "history_name asc, ";
            $sql .= " asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_name" => "%{$this->history_search}%",
                "history_is_active" => $this->history_is_active,
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
            $sql .= "from {$this->tblSettingsHistory} ";
            $sql .= "where history_is_active = :history_is_active ";
            $sql .= "order by history_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_is_active" => $this->history_is_active,
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
            $sql = "select car_history_id from {$this->tblHistory} ";
            $sql .= "where car_history_id = :history_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "history_aid" => "{$this->history_aid}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
