<?php
class RecordFiles
{
    public $record_files_aid;
    public $record_files_is_active;
    public $record_files_doc_name;
    public $record_files_client_id;
    public $record_files_date;
    public $record_files_remarks;
    public $record_files_gdrive;

    public $record_files_created;
    public $record_files_datetime;




    public $connection;
    public $lastInsertedId;

    public $record_files_start;
    public $record_files_total;
    public $record_files_search;

    public $tblRecordFiles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRecordFiles = "glav1_record_files";
    }




    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblRecordFiles} ";
            $sql .= "( record_files_doc_name, ";
            $sql .= "record_files_client_id, ";
            $sql .= "record_files_is_active, ";
            $sql .= "record_files_date, ";
            $sql .= "record_files_remarks, ";
            $sql .= "record_files_gdrive, ";
            $sql .= "record_files_created, ";
            $sql .= "record_files_datetime ) values ( ";
            $sql .= ":record_files_doc_name, ";
            $sql .= ":record_files_client_id, ";
            $sql .= ":record_files_is_active, ";
            $sql .= ":record_files_date, ";
            $sql .= ":record_files_remarks, ";
            $sql .= ":record_files_gdrive, ";
            $sql .= ":record_files_created, ";
            $sql .= ":record_files_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_doc_name" => $this->record_files_doc_name,
                "record_files_client_id" => $this->record_files_client_id,
                "record_files_is_active" => $this->record_files_is_active,
                "record_files_date" => $this->record_files_date,
                "record_files_remarks" => $this->record_files_remarks,
                "record_files_gdrive" => $this->record_files_gdrive,
                "record_files_created" => $this->record_files_created,
                "record_files_datetime" => $this->record_files_datetime,
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
            $sql .= "from {$this->tblRecordFiles} ";
            $sql .= "where record_files_client_id = :record_files_client_id ";
            $sql .= "order by record_files_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_client_id" => $this->record_files_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblRecordFiles} ";
            $sql .= "where record_files_client_id = :record_files_client_id ";
            $sql .= "order by record_files_is_active desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->record_files_start - 1,
                "total" => $this->record_files_total,
                "record_files_client_id" => $this->record_files_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    // search
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblRecordFiles} ";
            $sql .= "where record_files_client_id = :record_files_client_id ";
            $sql .= "and record_files_doc_name like :record_files_doc_name ";
            $sql .= "order by record_files_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_doc_name" => "%{$this->record_files_search}%",
                "record_files_client_id" => $this->record_files_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblRecordFiles}  ";
            $sql .= "where record_files_is_active = :record_files_is_active ";
            $sql .= "and record_files_client_id = :record_files_client_id ";
            $sql .= "order by record_files_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_is_active" => $this->record_files_is_active,
                "record_files_client_id" => $this->record_files_client_id
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // search
    public function searchByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblRecordFiles} ";
            $sql .= "where car.record_files_client_id = :record_files_client_id ";
            $sql .= "and record_files_is_active = :record_files_is_active ";
            $sql .= "order by record_files_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_is_active" => $this->record_files_is_active,
                "record_files_client_id" => $this->record_files_client_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblRecordFiles} ";
            $sql .= "where record_files_aid = :record_files_aid ";
            $sql .= "order by record_files_doc_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_aid" => $this->record_files_aid,
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
            $sql = "update {$this->tblRecordFiles} set ";
            $sql .= "record_files_doc_name = :record_files_doc_name, ";
            $sql .= "record_files_date = :record_files_date, ";
            $sql .= "record_files_remarks = :record_files_remarks, ";
            $sql .= "record_files_gdrive = :record_files_gdrive, ";
            $sql .= "record_files_datetime = :record_files_datetime ";
            $sql .= "where record_files_aid  = :record_files_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_doc_name" => $this->record_files_doc_name,
                "record_files_date" => $this->record_files_date,
                "record_files_remarks" => $this->record_files_remarks,
                "record_files_gdrive" => $this->record_files_gdrive,
                "record_files_datetime" => $this->record_files_datetime,
                "record_files_aid" => $this->record_files_aid,
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
            $sql = "update {$this->tblRecordFiles} set ";
            $sql .= "record_files_is_active = :record_files_is_active, ";
            $sql .= "record_files_datetime = :record_files_datetime ";
            $sql .= "where record_files_aid = :record_files_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_is_active" => $this->record_files_is_active,
                "record_files_datetime" => $this->record_files_datetime,
                "record_files_aid" => $this->record_files_aid,
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
            $sql = "delete from {$this->tblRecordFiles} ";
            $sql .= "where record_files_aid = :record_files_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_aid" => $this->record_files_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function checkName()
    {
        try {
            $sql = "select record_files_doc_name from {$this->tblRecordFiles} ";
            $sql .= "where record_files_doc_name = :record_files_doc_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "record_files_doc_name" => "{$this->record_files_doc_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
