# TIMECAPSULE TABLE<a name="EN-US_TOPIC_0000001151110015"></a>

## Function<a name="section1788163418319"></a>

The  **TIMECAPSULE TABLE**  statement restores a table to an earlier state in the event of human or application errors.

The table can flash back to a past point in time, depending on the old version of the data stored in the system. In addition, openGauss cannot restore a table to an earlier state through DDL operations that change the structure of the table.

## Precautions<a name="section3945357031"></a>

-   The  **TIMECAPSULE TABLE**  statement can be used to flash back the data of the old version or the data from the recycle bin.
    -   **TO TIMECAPSULE**  and  **TO CSN**  can flash back a table to an earlier version.
    -   The recycle bin records the objects dropped or truncated by running  **DROP**  and  **TRUNCATE**.  **TO BEFORE DROP**  and  **TO BEFORE TRUNCATE**  flash back from the recycle bin.

-   The following object types do not support flashback: system catalogs, column-store tables, memory tables, DFS tables, global temporary tables, local temporary tables, unlogged tables, sequence tables, and hash bucket tables.
-   Between the flashback point and the current point, a statement \(**DDL**,  **DCL**, or  **VACUUM FULL**\) that modifies the table structure or affects physical storage has been executed. Therefore, the flashback fails.

-   To run  **DROP**, you must have the  **create**  or  **usage**  permission of the schema to which the junk object belongs, and you must be the owner of the schema or the owner of the junk object.

    To run  **TRUNCATE**, you must have the  **create**  or  **usage**  permission of the schema to which the junk object belongs, and you must be the owner of the schema or the junk object. In addition, you must have the  **TRUNCATE**  permission of the junk object.

-   Scenarios or tables that do not support DROP or TRUNCATE FLASHBACK
    -   Scenario where the recycle bin is disabled \(**enable\_recyclebin**  is set to  **off**\)
    -   Scenario where the system is being maintained \(**xc\_maintenance\_mode**  is set to  **on**\) or is being upgraded
    -   Scenario where multiple objects are deleted \(The  **DROP**  or  **TRUNCATE TABLE**  command is executed to delete multiple objects at the same time.\)
    -   System catalogs, column-store tables, memory tables, DFS tables, global temporary tables, local temporary tables, unlogged tables, sequence tables, and hash bucket tables


## Syntax<a name="section34914247413"></a>

```
TIMECAPSULE TABLE [ schema_name.]table_name TO {CSN expr | TIMESTAMP expr | BEFORE { DROP [RENAME TO table_name] | TRUNCATE } }
```

## Parameter Description<a name="section1168716336410"></a>

-   **schema\_name**

    Specifies a schema containing the table to be flashed back. If this parameter is not specified, the current schema is used.

-   **table\_name**

    Specifies a table name.


-   **TO CSN**

    Specifies the CSN corresponding to the time point when the table is to be flashed back.  _expr_  must be a number representing a valid CSN.

-   **TO TIMESTAMP**

    Specifies a timestamp value corresponding to the point in time to which you want to flash back the table. The result of  _expr_  must be a valid past timestamp \(convert a string to a time type using the  **TO\_TIMESTAMP**  function\). The table will be flashed back to a time within approximately 3 seconds of the specified timestamp.

    Note: When the flashback point is too old, the old version cannot be obtained because it is recycled. As a result, the flashback fails and the error message "Restore point too old" is displayed. You can set the retention period of the old version by setting  **vacuum\_defer\_cleanup\_age**  and  **version\_retention\_age**  to the same value.

-   **TO BEFORE DROP**

    Retrieves dropped tables and their subobjects from the recycle bin.

    You can specify either the original user-specified name of the table or the system-generated name assigned to the object when it was deleted.

    -   System-generated recycle bin object names are unique. Therefore, if you specify the system-generated name, the database retrieves that specified object. To see the content in your recycle bin, run  **select  \* from gs\_recyclebin;**.
    -   If you specify the user-specified name and the recycle bin contains more than one object of that name, the database retrieves the object that was moved to the recycle bin most recently. If you want to retrieve an older version of the table, then do one of these things:

        -   Specify the system-generated recycle bin name of the table you want to retrieve.

        -   Run the  **TIMECAPSULE TABLE ... TO BEFORE  DROP**  statement until you retrieve the table you want.

    -   When a dropped table is restored, only the base table name is restored, and the names of other subobjects remain the same as those in the recycle bin. You can run the DDL command to manually change the names of subobjects as required.
    -   The recycle bin does not support write operations such as DML, DCL, and DDL, and does not support DQL query operations \(supported in later versions\).
    -   The  **recyclebin\_retention\_time**  parameter has been set for specifying the retention period of objects in the recycle bin. The objects will be automatically deleted after the retention period expires.

-   **RENAME  TO**

    Specifies a new name for the table retrieved from the recycle bin.

-   **TRUNCATE**

    Flashes back to the point in time before the TRUNCATE operation.


## Examples<a name="section1596654110417"></a>

```
-- Delete the tpcds.reason_t2 table.
DROP TABLE IF EXISTS tpcds.reason_t2;
-- Create the tpcds.reason_t2 table.
openGauss=# CREATE TABLE tpcds.reason_t2
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  )with(storage_type = ustore);
-- Insert records into the tpcds.reason_t2 table.
openGauss=#  INSERT INTO tpcds.reason_t2 VALUES (1, 'AA', 'reason1'),(2, 'AB', 'reason2'),(3, 'AC', 'reason3');
INSERT 0 3
-- Delete data from the tpcds.reason_t2 table.
openGauss=#  TRUNCATE TABLE tpcds.reason_t2;
-- Query data in the tpcds.reason_t2 table.
openGauss=#  select * from tpcds.reason_t2;
 r_reason_sk | r_reason_id | r_reason_desc 
-------------+-------------+---------------
(0 rows)
-- Perform the TRUNCATE FLASHBACK operation.
openGauss=#  TIMECAPSULE TABLE tpcds.reason_t2 to BEFORE TRUNCATE;
openGauss=#  select * from tpcds.reason_t2;
 r_reason_sk |   r_reason_id    |                                            r_reason_desc                                             
-------------+------------------+------------------------------------------------------------------------------------------------------
           1 | AA               | reason1                                                                                             
           2 | AB               | reason2                                                                                             
           3 | AC               | reason3                                                                                             
(3 rows)
-- Delete the tpcds.reason_t2 table.
openGauss=#  DROP TABLE tpcds.reason_t2;
-- Perform the DROP FLASHBACK operation.
openGauss=#  TIMECAPSULE TABLE tpcds.reason_t2 to BEFORE DROP;
TimeCapsule Table
```

