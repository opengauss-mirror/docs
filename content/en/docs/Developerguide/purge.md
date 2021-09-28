# PURGE<a name="EN-US_TOPIC_0000001151429881"></a>

## Function<a name="section625854265112"></a>

The  **PURGE**  statement can be used to:

-   Clear tables or indexes from the recycle bin and release all space related to the objects.
-   Clear the recycle bin.
-   Clear the objects of a specified tablespace in the recycle bin.

## Precautions<a name="section749425816510"></a>

-   The purge operation supports tables \(**PURGE TABLE**\), indexes \(**PURGE INDEX**\), recycle bins \(**PURGE RECYCLEBIN**\), and tablespaces \(**PURGE TABLESPACE**\).


-   The permission requirements for performing the  **PURGE**  operation are as follows:

    -   **PURGE TABLE**: The user must be the owner of the table and must have the  **USAGE**  permission on the schema to which the table belongs. By default, the system administrator has this permission.
    -   **PURGE INDEX**: The user must be the owner of the index and have the  **USAGE**  permission on the schema to which the index belongs. By default, the system administrator has this permission.
    -   **PURGE TABLESPACE**: The user must be the owner of the tablespace and have the  **USAGE**  permission on the schema to which the object belongs. The common user can delete only the table owned by oneself in the recycle bin. By default, the system administrator can delete all the objects in the specified tablespace in the recycle bin.
    -   **PURGE RECYCLEBIN**: Common users can clear only the objects owned by themselves in the recycle bin. In addition, the user must have the  **USAGE**  permission of the schema to which the objects belong. By default, the system administrator can clear all objects in the recycle bin.


## Syntax<a name="section2067414318544"></a>

```
PURGE { TABLE [schema_name.]table_name          
        | INDEX index_name         
        | RECYCLEBIN       
      }
```

## Parameter Description<a name="section19287181805211"></a>

-   _\[  __schema\_name.__  \]_

    Schema name


-   TABLE  _\[ schema\_name. \] table\_name_

    Clears a specified table in the recycle bin.


-   INDEX  _index\_name_

    Clears a specified index in the recycle bin.


-   RECYCLEBIN

    Clears the objects in the recycle bin.


## Examples<a name="section763816452134"></a>

```
-- Create the reason_table_space tablespace.
openGauss=#  CREATE TABLESPACE REASON_TABLE_SPACE1 owner tpcds RELATIVE location 'tablespace/tsp_reason1';
-- Create the tpcds.reason_t1 table in the tablespace.
openGauss=#  CREATE TABLE tpcds.reason_t1
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  ) tablespace reason_table_space1;
-- Create the tpcds.reason_t2 table in the tablespace.
openGauss=#  CREATE TABLE tpcds.reason_t2
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  ) tablespace reason_table_space1;
-- Create the tpcds.reason_t3 table in the tablespace.
openGauss=#  CREATE TABLE tpcds.reason_t3
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  ) tablespace reason_table_space1;
openGauss=#  CREATE TABLE tpcds.reason_t4
 (
  r_reason_sk    integer,
  r_reason_id    character(16),
  r_reason_desc  character(100)
  );
openGauss=#  DROP TABLE tpcds.reason_t1;
openGauss=#  DROP TABLE tpcds.reason_t2;
openGauss=#  DROP TABLE tpcds.reason_t3;
openGauss=#  DROP TABLE tpcds.reason_t4;
-- View the recycle bin.
openGauss=#  SELECT rcyname,rcyoriginname,rcytablespace FROM GS_RECYCLEBIN;
        rcyname        | rcyoriginname | rcytablespace 
-----------------------+---------------+---------------
 BIN$16409$2CEE988==$0 | reason_t1     |         16408
 BIN$16412$2CF2188==$0 | reason_t2     |         16408
 BIN$16415$2CF2EC8==$0 | reason_t3     |         16408
 BIN$16418$2CF3EC8==$0 | reason_t4     |             0
(4 rows)
-- Clear the table.
openGauss=#  PURGE TABLE tpcds.reason_t1;
openGauss=#  SELECT rcyname,rcyoriginname,rcytablespace FROM GS_RECYCLEBIN;
        rcyname        | rcyoriginname | rcytablespace 
-----------------------+---------------+---------------
 BIN$16412$2CF2188==$0 | reason_t2     |         16408
 BIN$16415$2CF2EC8==$0 | reason_t3     |         16408
 BIN$16418$2CF3EC8==$0 | reason_t4     |             0
(3 rows)

```

