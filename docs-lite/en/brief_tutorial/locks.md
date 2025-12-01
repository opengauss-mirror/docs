# Locks<a name="EN-US_TOPIC_0000001209981914"></a>

To ensure database data consistency, you can execute the LOCK TABLE statement to prevent other users from modifying tables.

For example, an application needs to ensure that data in a table is not modified during transaction running. For this purpose, tables can be locked. This prevents data from being concurrently modified.

The LOCK TABLE statement is useless outside a transaction block, because the lock would remain held only to the completion of the statement.

## Syntax<a name="section1632155118333"></a>

```
LOCK [ TABLE ] name  IN lock_mode MODE
```

## Parameter Description<a name="section6973139183420"></a>

-   **name**

    Specifies the name of the table to be locked.

-   **lock\_mode**

    Specifies the lock mode. The basic modes are as follows:

    -   **ACCESS EXCLUSIVE**

        Guarantees that the holder is the only transaction accessing the table in any way. It is the default lock mode.

    -   **ACCESS SHARE**

        Indicates the lock mode for reading tables without modifying them.



## Examples<a name="en-us_topic_0283136808_en-us_topic_0237122168_en-us_topic_0059778442_s9884bdbe455b460a9a2dde267283b75b"></a>

Obtains an  **ACCESS EXCLUSIVE**  lock on a table when going to perform a delete operation.

```
-- Create a sample table.
openGauss=# CREATE TABLE graderecord  
             (  
             number INTEGER,  
             name CHAR(20),  
             class CHAR(20),  
             grade INTEGER
             );
-- Insert data.
openGauss=# insert into graderecord values('210101','Alan','21.01',92);  
insert into graderecord values('210102','Ben','21.01',62);  
insert into graderecord values('210103','Brain','21.01',26);  
insert into graderecord values('210204','Carl','21.02',77);  
insert into graderecord values('210205','David','21.02',47);  
insert into graderecord values('210206','Eric','21.02',97);  
insert into graderecord values('210307','Frank','21.03',90);  
insert into graderecord values('210308','Gavin','21.03',100); 
insert into graderecord values('210309','Henry','21.03',67);  
insert into graderecord values('210410','Jack','21.04',75);  
insert into graderecord values('210311','Jerry','21.04',60);

-- Start the process.
openGauss=# START TRANSACTION;

-- Provide the example table.
openGauss=# LOCK TABLE graderecord IN ACCESS EXCLUSIVE MODE;

-- Delete the example table.
openGauss=# DELETE FROM graderecord WHERE name ='Alan';

openGauss=# COMMIT;
```

