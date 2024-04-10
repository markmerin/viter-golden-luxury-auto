<?php
class Quicklink
{
    public $quicklink_aid;
    public $quicklink_is_active;
    public $quicklink_name;
    public $quicklink_link;
    public $quicklink_created;
    public $quicklink_datetime;

    public $connection;
    public $lastInsertedId;
    public $tblQuickLink;



    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblQuickLink = "glav1_quicklinks";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblQuickLink} ";
            $sql .= "( quicklink_name, ";
            $sql .= "quicklink_link, ";
            $sql .= "quicklink_is_active, ";
            $sql .= "quicklink_created, ";
            $sql .= "quicklink_datetime ) values ( ";
            $sql .= ":quicklink_name, ";
            $sql .= ":quicklink_link, ";
            $sql .= ":quicklink_is_active, ";
            $sql .= ":quicklink_created, ";
            $sql .= ":quicklink_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "quicklink_name" => $this->quicklink_name,
                "quicklink_link" => $this->quicklink_link,
                "quicklink_is_active" => $this->quicklink_is_active,
                "quicklink_created" => $this->quicklink_created,
                "quicklink_datetime" => $this->quicklink_datetime,
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
            $sql .= " {$this->tblQuickLink} ";
            $sql .= "order by quicklink_is_active desc, ";
            $sql .= "quicklink_name asc ";
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
            $sql = "select * from {$this->tblQuickLink} ";
            $sql .= "where quicklink_aid = :quicklink_aid ";
            $sql .= "order by quicklink_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "quicklink_aid" => $this->quicklink_aid,
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
            $sql = "update {$this->tblQuickLink} set ";
            $sql .= "quicklink_name = :quicklink_name, ";
            $sql .= "quicklink_link = :quicklink_link, ";
            $sql .= "quicklink_datetime = :quicklink_datetime ";
            $sql .= "where quicklink_aid  = :quicklink_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "quicklink_name" => $this->quicklink_name,
                "quicklink_link" => $this->quicklink_link,
                "quicklink_datetime" => $this->quicklink_datetime,
                "quicklink_aid" => $this->quicklink_aid,
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
            $sql = "update {$this->tblQuickLink} set ";
            $sql .= "quicklink_is_active = :quicklink_is_active, ";
            $sql .= "quicklink_datetime = :quicklink_datetime ";
            $sql .= "where quicklink_aid = :quicklink_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "quicklink_is_active" => $this->quicklink_is_active,
                "quicklink_datetime" => $this->quicklink_datetime,
                "quicklink_aid" => $this->quicklink_aid,
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
            $sql = "delete from {$this->tblQuickLink} ";
            $sql .= "where quicklink_aid = :quicklink_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "quicklink_aid" => $this->quicklink_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // name
    public function checkName()
    {
        try {
            $sql = "select quicklink_name from {$this->tblQuickLink} ";
            $sql .= "where quicklink_name = :quicklink_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "quicklink_name" => "{$this->quicklink_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
