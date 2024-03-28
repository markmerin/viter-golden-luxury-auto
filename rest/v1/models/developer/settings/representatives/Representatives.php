<?php
class Representatives
{
    public $representatives_aid;
    public $representatives_is_active;
    public $representatives_fname;
    public $representatives_lname;
    public $representatives_email;

    public $representatives_fullname;

    public $representatives_created;
    public $representatives_datetime;

    public $connection;
    public $lastInsertedId;

    public $representatives_start;
    public $representatives_total;
    public $representatives_search;


    public $tblRepresentatives;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRepresentatives = "glav1_representatives";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblRepresentatives} ";
            $sql .= "(representatives_is_active, ";
            $sql .= "representatives_fname, ";
            $sql .= "representatives_lname, ";
            $sql .= "representatives_email, ";
            $sql .= "representatives_created, ";
            $sql .= "representatives_datetime ) values ( ";
            $sql .= ":representatives_is_active, ";
            $sql .= ":representatives_fname, ";
            $sql .= ":representatives_lname, ";
            $sql .= ":representatives_email, ";
            $sql .= ":representatives_created, ";
            $sql .= ":representatives_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_is_active" => $this->representatives_is_active,
                "representatives_fname" => $this->representatives_fname,
                "representatives_lname" => $this->representatives_lname,
                "representatives_email" => $this->representatives_email,
                "representatives_created" => $this->representatives_created,
                "representatives_datetime" => $this->representatives_datetime,
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
            $sql .= " {$this->tblRepresentatives} ";
            $sql .= "order by representatives_is_active desc, ";
            $sql .= "representatives_fname asc ";
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
            $sql = "select * from {$this->tblRepresentatives} ";
            $sql .= "where representatives_aid = :representatives_aid ";
            $sql .= "order by representatives_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_aid" => $this->representatives_aid,
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
            $sql .= "from {$this->tblRepresentatives} ";
            $sql .= "order by representatives_is_active desc, ";
            $sql .= "representatives_lname asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->representatives_start - 1,
                "total" => $this->representatives_total,
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
            $sql .= "from {$this->tblRepresentatives} ";
            $sql .= "where representatives_fname like :representatives_fname ";
            $sql .= "or representatives_lname like :representatives_lname ";
            $sql .= "order by representatives_is_active desc, ";
            $sql .= "representatives_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_fname" => "%{$this->representatives_search}%",
                "representatives_lname" => "%{$this->representatives_search}%",
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
            $sql = "update {$this->tblRepresentatives} set ";
            $sql .= "representatives_fname = :representatives_fname, ";
            $sql .= "representatives_lname = :representatives_lname, ";
            $sql .= "representatives_email = :representatives_email, ";
            $sql .= "representatives_datetime = :representatives_datetime ";
            $sql .= "where representatives_aid  = :representatives_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_fname" => $this->representatives_fname,
                "representatives_lname" => $this->representatives_lname,
                "representatives_email" => $this->representatives_email,
                "representatives_datetime" => $this->representatives_datetime,
                "representatives_aid" => $this->representatives_aid,
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
            $sql = "update {$this->tblRepresentatives} set ";
            $sql .= "representatives_is_active = :representatives_is_active, ";
            $sql .= "representatives_datetime = :representatives_datetime ";
            $sql .= "where representatives_aid = :representatives_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_is_active" => $this->representatives_is_active,
                "representatives_datetime" => $this->representatives_datetime,
                "representatives_aid" => $this->representatives_aid,
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
            $sql = "delete from {$this->tblRepresentatives} ";
            $sql .= "where representatives_aid = :representatives_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_aid" => $this->representatives_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select representatives_fname,  ";
            $sql .= "representatives_lname  ";
            $sql .= "from {$this->tblRepresentatives} ";
            $sql .= "where representatives_fname = :representatives_fname ";
            $sql .= "and representatives_lname = :representatives_lname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_fname" => "{$this->representatives_fname}",
                "representatives_lname" => "{$this->representatives_lname}",
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
            $sql .= "from {$this->tblRepresentatives} ";
            $sql .= "where representatives_is_active = :representatives_is_active ";
            $sql .= "and (representatives_fname like :representatives_fname ";
            $sql .= "or representatives_lname like :representatives_lname) ";
            $sql .= "order by representatives_is_active desc, ";
            $sql .= "representatives_fname asc, ";
            $sql .= "representatives_lname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_fname" => "%{$this->representatives_search}%",
                "representatives_lname" => "%{$this->representatives_search}%",
                "representatives_is_active" => $this->representatives_is_active,
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
            $sql .= "from {$this->tblRepresentatives} ";
            $sql .= "where representatives_is_active = :representatives_is_active ";
            $sql .= "order by representatives_fname asc ";

            $query = $this->connection->prepare($sql);
            $query->execute([
                "representatives_is_active" => $this->representatives_is_active,
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
    //         $sql = "select designation_representatives_id from {$this->tblDesignation} ";
    //         $sql .= "where designation_representatives_id = :representatives_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "representatives_aid" => "{$this->representatives_aid}",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
