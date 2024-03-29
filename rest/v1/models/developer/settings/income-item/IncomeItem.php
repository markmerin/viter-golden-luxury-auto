<?php
class IncomeItem
{
    public $income_item_aid;
    public $income_item_is_active;
    public $income_item_name;
    public $income_item_category_id;
    public $income_item_created;
    public $income_item_datetime;

    public $connection;
    public $lastInsertedId;

    public $income_item_start;
    public $income_item_total;
    public $income_item_search;


    public $tblIncomeItem;
    public $tblIncomeCategory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblIncomeItem = "glav1_income_item";
        $this->tblIncomeCategory = "glav1_income_category";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblIncomeItem} ";
            $sql .= "(income_item_is_active , ";
            $sql .= "income_item_name, ";
            $sql .= "income_item_category_id, ";
            $sql .= "income_item_created, ";
            $sql .= "income_item_datetime ) values ( ";
            $sql .= ":income_item_is_active, ";
            $sql .= ":income_item_name, ";
            $sql .= ":income_item_category_id, ";
            $sql .= ":income_item_created, ";
            $sql .= ":income_item_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_is_active" => $this->income_item_is_active,
                "income_item_name" => $this->income_item_name,
                "income_item_category_id" => $this->income_item_category_id,
                "income_item_created" => $this->income_item_created,
                "income_item_datetime" => $this->income_item_datetime,
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
            $sql .= " {$this->tblIncomeItem} as item, ";
            $sql .= " {$this->tblIncomeCategory} as category ";
            $sql .= "where item.income_item_category_id = category.income_category_aid ";
            $sql .= "order by income_item_is_active desc, ";
            $sql .= "income_item_name asc ";
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
            $sql .= " {$this->tblIncomeItem} as item, ";
            $sql .= " {$this->tblIncomeCategory} as category ";
            $sql .= "where item.income_item_category_id = category.income_category_aid ";
            $sql .= "and income_item_aid = :income_item_aid ";
            $sql .= "order by income_item_is_active desc, ";
            $sql .= "income_item_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_aid" => $this->income_item_aid,
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
            $sql .= " {$this->tblIncomeItem} as item, ";
            $sql .= " {$this->tblIncomeCategory} as category ";
            $sql .= "where item.income_item_category_id = category.income_category_aid ";
            $sql .= "order by income_item_is_active desc, ";
            $sql .= "income_item_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->income_item_start - 1,
                "total" => $this->income_item_total,
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
            $sql .= " {$this->tblIncomeItem} as item, ";
            $sql .= " {$this->tblIncomeCategory} as category ";
            $sql .= "where item.income_item_category_id = category.income_category_aid ";
            $sql .= "and item.income_item_name like :income_item_name ";
            $sql .= "order by income_item_is_active desc, ";
            $sql .= "income_item_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_name" => "%{$this->income_item_search}%"
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
            $sql = "update {$this->tblIncomeItem} set ";
            $sql .= "income_item_name = :income_item_name, ";
            $sql .= "income_item_category_id = :income_item_category_id, ";
            $sql .= "income_item_datetime = :income_item_datetime ";
            $sql .= "where income_item_aid  = :income_item_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_name" => $this->income_item_name,
                "income_item_category_id" => $this->income_item_category_id,
                "income_item_datetime" => $this->income_item_datetime,
                "income_item_aid" => $this->income_item_aid,
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
            $sql = "update {$this->tblIncomeItem} set ";
            $sql .= "income_item_is_active = :income_item_is_active, ";
            $sql .= "income_item_datetime = :income_item_datetime ";
            $sql .= "where income_item_aid = :income_item_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_is_active" => $this->income_item_is_active,
                "income_item_datetime" => $this->income_item_datetime,
                "income_item_aid" => $this->income_item_aid,
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
            $sql = "delete from {$this->tblIncomeItem} ";
            $sql .= "where income_item_aid = :income_item_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_aid" => $this->income_item_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select income_item_name from {$this->tblIncomeItem} ";
            $sql .= "where income_item_name = :income_item_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_name" => "{$this->income_item_name}",
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
            $sql .= "from {$this->tblIncomeItem} as item, ";
            $sql .= "{$this->tblIncomeCategory} as category ";
            $sql .= "where item.income_item_category_id = category.income_category_aid ";
            $sql .= "and item.income_item_is_active = :income_item_is_active ";
            $sql .= "and item.income_item_name like :income_item_name ";
            $sql .= "order by item.income_item_is_active desc, ";
            $sql .= "income_item_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_name" => "%{$this->income_item_search}%",
                "income_item_is_active" => $this->income_item_is_active,
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
            $sql .= "from {$this->tblIncomeItem} as item, ";
            $sql .= "{$this->tblIncomeCategory} as category ";
            $sql .= "where item.income_item_category_id = category.income_category_aid ";
            $sql .= "and income_item_is_active = :income_item_is_active ";
            $sql .= "order by income_item_name asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "income_item_is_active" => $this->income_item_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // association
    // public function checkDesignationAssociation()
    // {
    //     try {
    //         $sql = "select designation_income_item_id from {$this->tblDesignation} ";
    //         $sql .= "where designation_income_item_id = :income_item_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "income_item_aid" => "{$this->income_item_aid}",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
