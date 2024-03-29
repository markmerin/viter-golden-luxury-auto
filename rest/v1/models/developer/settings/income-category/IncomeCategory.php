<?php
class IncomeCategory
{
    public $income_category_aid;
    public $income_category_is_active;
    public $income_category_name;
    public $income_category_created;
    public $income_category_datetime;

    public $connection;
    public $lastInsertedId;

    public $income_category_start;
    public $income_category_total;
    public $income_category_search;


    public $tblIncomeCategory;
    public $tblIncomeItem;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblIncomeCategory = "glav1_income_category";
        $this->tblIncomeItem = "glav1_income_item";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblIncomeCategory} ";
            $sql .= "( income_category_name, ";
            $sql .= "income_category_is_active, ";
            $sql .= "income_category_created, ";
            $sql .= "income_category_datetime ) values ( ";
            $sql .= ":income_category_name, ";
            $sql .= ":income_category_is_active, ";
            $sql .= ":income_category_created, ";
            $sql .= ":income_category_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_name" => $this->income_category_name,
                "income_category_is_active" => $this->income_category_is_active,
                "income_category_created" => $this->income_category_created,
                "income_category_datetime" => $this->income_category_datetime,
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
            $sql .= " {$this->tblIncomeCategory} ";
            $sql .= "order by income_category_is_active desc, ";
            $sql .= "income_category_name asc ";
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
            $sql = "select * from {$this->tblIncomeCategory} ";
            $sql .= "where income_category_aid = :income_category_aid ";
            $sql .= "order by income_category_is_active desc, ";
            $sql .= "income_category_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_aid" => $this->income_category_aid,
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
            $sql .= "from {$this->tblIncomeCategory} ";
            $sql .= "order by income_category_is_active desc, ";
            $sql .= "income_category_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->income_category_start - 1,
                "total" => $this->income_category_total,
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
            $sql .= "from {$this->tblIncomeCategory} ";
            $sql .= "where income_category_name like :income_category_name ";
            $sql .= "order by income_category_is_active desc, ";
            $sql .= "income_category_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_name" => "%{$this->income_category_search}%",
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
            $sql = "update {$this->tblIncomeCategory} set ";
            $sql .= "income_category_name = :income_category_name, ";
            $sql .= "income_category_datetime = :income_category_datetime ";
            $sql .= "where income_category_aid  = :income_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_name" => $this->income_category_name,
                "income_category_datetime" => $this->income_category_datetime,
                "income_category_aid" => $this->income_category_aid,
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
            $sql = "update {$this->tblIncomeCategory} set ";
            $sql .= "income_category_is_active = :income_category_is_active, ";
            $sql .= "income_category_datetime = :income_category_datetime ";
            $sql .= "where income_category_aid = :income_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_is_active" => $this->income_category_is_active,
                "income_category_datetime" => $this->income_category_datetime,
                "income_category_aid" => $this->income_category_aid,
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
            $sql = "delete from {$this->tblIncomeCategory} ";
            $sql .= "where income_category_aid = :income_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_aid" => $this->income_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select income_category_name from {$this->tblIncomeCategory} ";
            $sql .= "where income_category_name = :income_category_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_name" => "{$this->income_category_name}",
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
            $sql .= "from {$this->tblIncomeCategory} ";
            $sql .= "where income_category_is_active = :income_category_is_active ";
            $sql .= "and income_category_name like :income_category_name ";
            $sql .= "order by income_category_is_active desc, ";
            $sql .= "income_category_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_name" => "%{$this->income_category_search}%",
                "income_category_is_active" => $this->income_category_is_active,
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
            $sql .= "from {$this->tblIncomeCategory} ";
            $sql .= "where income_category_is_active = :income_category_is_active ";
            $sql .= "order by income_category_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_is_active" => $this->income_category_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }




    public function checkCategoryAssociation()
    {
        try {
            $sql = "select income_item_category_id from {$this->tblIncomeItem} ";
            $sql .= "where income_item_category_id = :income_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_category_aid" => "{$this->income_category_aid}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
