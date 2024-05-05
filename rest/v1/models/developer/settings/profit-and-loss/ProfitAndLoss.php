<?php
class ProfitAndLoss
{
    public $profit_and_loss_aid;
    public $profit_and_loss_is_active;
    public $profit_and_loss_name;
    public $profit_and_loss_created;
    public $profit_and_loss_datetime;

    public $connection;
    public $lastInsertedId;

    public $profit_and_loss_start;
    public $profit_and_loss_total;
    public $profit_and_loss_search;

    public $tblProfitAndLoss;
    public $tblCarProfitAndLoss;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblProfitAndLoss = "glav1_settings_profit_and_loss";
        $this->tblCarProfitAndLoss = "tblCarProfitAndLoss";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblProfitAndLoss} ";
            $sql .= "(profit_and_loss_is_active , ";
            $sql .= "profit_and_loss_name, ";
            $sql .= "profit_and_loss_created, ";
            $sql .= "profit_and_loss_datetime ) values ( ";
            $sql .= ":profit_and_loss_is_active, ";
            $sql .= ":profit_and_loss_name, ";
            $sql .= ":profit_and_loss_created, ";
            $sql .= ":profit_and_loss_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_is_active" => $this->profit_and_loss_is_active,
                "profit_and_loss_name" => $this->profit_and_loss_name,
                "profit_and_loss_created" => $this->profit_and_loss_created,
                "profit_and_loss_datetime" => $this->profit_and_loss_datetime
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
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "order by profit_and_loss_is_active desc, ";
            $sql .= "profit_and_loss_name asc ";
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
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "where profit_and_loss_aid = :profit_and_loss_aid ";
            $sql .= "order by profit_and_loss_is_active desc, ";
            $sql .= "profit_and_loss_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_aid" => $this->profit_and_loss_aid
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
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "order by profit_and_loss_is_active desc, ";
            $sql .= "profit_and_loss_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->profit_and_loss_start - 1,
                "total" => $this->profit_and_loss_total,
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
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "where profit_and_loss_name like :profit_and_loss_name ";
            $sql .= "order by profit_and_loss_is_active desc, ";
            $sql .= "profit_and_loss_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_name" => "%{$this->profit_and_loss_search}%"
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchByProfitAndLoss()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from ";
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "where profit_and_loss_name like :profit_and_loss_name ";
            $sql .= "and profit_and_loss_is_active = 1 ";
            $sql .= "order by profit_and_loss_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_name" => "%{$this->profit_and_loss_search}%"
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
            $sql = "update {$this->tblProfitAndLoss} set ";
            $sql .= "profit_and_loss_name = :profit_and_loss_name, ";
            $sql .= "profit_and_loss_datetime = :profit_and_loss_datetime ";
            $sql .= "where profit_and_loss_aid  = :profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_name" => $this->profit_and_loss_name,
                "profit_and_loss_datetime" => $this->profit_and_loss_datetime,
                "profit_and_loss_aid" => $this->profit_and_loss_aid,
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
            $sql = "update {$this->tblProfitAndLoss} set ";
            $sql .= "profit_and_loss_is_active = :profit_and_loss_is_active, ";
            $sql .= "profit_and_loss_datetime = :profit_and_loss_datetime ";
            $sql .= "where profit_and_loss_aid = :profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_is_active" => $this->profit_and_loss_is_active,
                "profit_and_loss_datetime" => $this->profit_and_loss_datetime,
                "profit_and_loss_aid" => $this->profit_and_loss_aid
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
            $sql = "delete from {$this->tblProfitAndLoss} ";
            $sql .= "where profit_and_loss_aid = :profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_aid" => $this->profit_and_loss_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select profit_and_loss_name from {$this->tblProfitAndLoss} ";
            $sql .= "where profit_and_loss_name = :profit_and_loss_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_name" => "{$this->profit_and_loss_name}",
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
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "where ";
            $sql .= "profit_and_loss_is_active = :profit_and_loss_is_active ";
            $sql .= "and profit_and_loss_name like :profit_and_loss_name ";
            $sql .= "order by profit_and_loss_is_active desc, ";
            $sql .= "profit_and_loss_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_is_active" => $this->profit_and_loss_is_active,
                "profit_and_loss_name" => "%{$this->profit_and_loss_search}%"
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
            $sql .= "{$this->tblProfitAndLoss} ";
            $sql .= "where ";
            $sql .= "profit_and_loss_is_active = :profit_and_loss_is_active ";
            $sql .= "order by profit_and_loss_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_is_active" => $this->profit_and_loss_is_active
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
            $sql = "select car_profit_and_loss_car_id from {$this->tblCarProfitAndLoss} ";
            $sql .= "where car_profit_and_loss_car_id = :profit_and_loss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "profit_and_loss_aid" => $this->profit_and_loss_aid
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
