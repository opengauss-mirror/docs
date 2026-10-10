# openGauss Online DDL Feature Introduction

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-29T02:46:26.545Z pushedAt=2026-09-11T09:18:32.380Z -->

## Availability

This feature is introduced since openGauss 7.0.0-RC3.

## Feature Overview

In customer business scenarios, certain DDL operations in openGauss (such as modifying column types, modifying compression attributes, and partition splitting and merging) require data rebuilding. The rebuilding operation copies the existing data of the target table to new data files after rebuilding processing, and the execution duration of this operation is directly related to the data volume of the target table. Previously, openGauss only supported offline DDL except for online index creation. In such cases, performing DDL operations on a business table would hold a level-8 lock on the table throughout the entire process, during which concurrent business operations could not access the table, thereby blocking business. Moreover, as customer business tables grow increasingly large, the execution time of such DDL operations may even reach hours or days, and blocking business for such an extended period during the DDL window is unacceptable. The primary function of the openGauss Online DDL feature is to reduce the duration for which DDL operations hold a level-8 lock through an auxiliary table plus incremental catch-up model, allowing concurrent business operations to perform DML and DQL operations on the target table during data rebuilding, thereby preventing prolonged business blocking and addressing the pain point of customer business changes.

## Customer Value

The openGauss online DDL feature is primarily designed for scenarios where customers perform DDL operations on large tables, which require the DDL thread to rebuild the original table. This feature allows the DDL thread to hold an exclusive lock only for a short period and permits concurrent DML and DQL operations to execute normally during data rebuilding, thereby preventing prolonged service blocking during DDL execution and enhancing the competitiveness of openGauss.

## Feature Description

The openGauss online DDL feature supports online modification of column data types, modification of compression attributes, addition of table constraints (range constraints and NOT NULL constraints), partition table split and merge, and VACUUM FULL/CLUSTER for Astore and segment-page storage ordinary tables and partitioned tables in traditional primary-standby mode. Specifically, online DDL introduces the CONCURRENTLY keyword to the ALTER TABLE, VACUUM FULL, and CLUSTER syntax to trigger online DDL operations. An online DDL operation divides the DDL operation into four phases: (1) DDL preparation, (2) baseline data copy, (3) incremental data merge, and (4) DDL commit. Among them, the first and fourth phases require briefly acquiring a level-8 lock, while the second and third phases, which are the main time-consuming phases of DDL, primarily use a level-4 lock and allow concurrent DML operations. This feature improves the concurrency of the operated table during DDL, allowing short transactions to perform concurrent DML and DQL on the table, thereby avoiding business blocking. To ensure transaction atomicity and consistency, DDL transactions and concurrent DML transactions are independent of each other. Rolling back an online DDL transaction does not cause data loss for committed concurrent DML transactions, and rolling back a concurrent DML transaction does not propagate data into the new table.

To facilitate visualization of the online DDL running status, the online_ddl_status view is added for querying the online DDL transaction running status of the current database. The online_ddl_type column values include "CHECK", "REWRITE", "VACUUM", "CLUSTER", and "INVALID". The status column values include "NONE", "START", "PREPARE", "RERITE_CATALOG", "BASELINE_COPY", "CATCHUP", "COMMITTING", "END", and "UNKNOWN".
| Name            | Type        | Description                            |
| --------------- | ----------- | -------------------------------------- |
| relid           | Oid         | OID of the operated table              |
| hash_entry_key  | text        | spcnode/dbnode/reloid of the operated table |
| transaction_id  | int8        | Baseline transaction ID of the operated table |
| start_time      | timestamptz | Online DDL start time                  |
| online_ddl_type | text        | Online DDL type                        |
| temp_schem_name | text        | Name of the temporary schema created by this operation |
| status          | text        | Online DDL status                      |
| extra_info      | text        | Additional information                 |


## Feature Enhancement

Version 7.0.0-RC3 introduces the online DDL feature enhancement, which supports online execution of VACUUM FULL, CLUSTER, and partition splitting and merging operations on partitioned tables. Additionally, the online_ddl_status view is added for querying the running status of online DDL transactions in the current database.

## Feature Constraints

- This feature currently supports concurrent execution of the following DDL operations on Astore and segment-page partitioned tables and ordinary tables in traditional primary-standby scenarios: modifying compression attributes, modifying column data types, and adding table constraints (range constraints and NOT NULL constraints).
- Online DDL operations do not mean that no locks are applied to the table. An exclusive lock is still acquired on the table during certain phases of the DDL process, but the duration for which the DDL holds the level-8 lock is significantly reduced. In addition, during the data catch-up phase, it must be ensured that the catch-up data has been committed before it can be caught up. Therefore, this feature is not suitable for business scenarios where there are long transactions that concurrently modify the target table, as this may cause the online DDL thread to be blocked.
- Both newly added data and existing data must satisfy the relevant constraints after ALTER TABLE; otherwise, the online DDL operation will report an error.
- Constraints inherited from online index creation: online DDL cannot be executed within an explicit transaction, and online DDL cannot be performed on partitioned tables with global indexes.
- Online DDL operations are divided into two transactions. If the second transaction fails and is rolled back, the temporary schema and temporary tables created by the first transaction will be temporarily left behind and subsequently cleaned up periodically by the two-phase cleaner thread.
- Offline VACUUM FULL/CLUSTER operations hold a level-7 lock during the main process. To ensure data consistency, online VACUUM FULL/CLUSTER acquires a level-8 lock during the preparation phase and the DDL commit phase.
- Online VACUUM FULL/CLUSTER operations reorganize the baseline data according to the corresponding rules, while new data is appended to the end of the data based on the append-only principle.
- When rebuilding a partitioned table using online VACUUM FULL, the online VACUUM FULL operation is performed on each partition separately. If an error occurs during execution, the online VACUUM FULL operation will not be rolled back for partitions that have already been rebuilt.
## Dependencies

None.

## Basic Principles

The overall approach of this feature is as follows: first, copy the old table to a new table created based on the new metadata, and then catch up with the data newly added to the old table by concurrent DML operations. A ddlDeltaLog table is introduced to record all concurrent INSERT/UPDATE/DELETE operations during online DDL, including the operation type and the ctid of the record in the old table, while a ctidMap table is introduced to record the ctid mapping between the old and new tables. During the data catch-up phase, ddlDeltaLog is traversed, and for each log entry, the new table is updated synchronously based on the operation type and the new table ctid mapped in ctidMap. The process is specifically divided into the following four phases:

1. Preparation Phase
    (1) Create a temporary schema, the catch-up log table ddlDeltaLog, and register the information of this online DDL operation in the global hash table ddlDeltaLogs. (2) Obtain snapshot sp1 for scanning baseline data. (3) Restart a new transaction to make ddlDeltaLog externally visible. (4) Reopen the table with a level-4 lock and release the level-8 lock, after which concurrent DML operations are permitted.
2. Baseline Data Copy Phase
    (1) Create ddlCtidMap to record the ctid mapping between the old and new tables.
    (2) Scan the old table using snapshot sp1, copy data to the temporary table temp_table, and record the ctid mapping between the old and new tables in ddlCtidMap.
3. Incremental Data Merge Phase
    (1) Traverse ddlDeltalog multiple times. During each traversal, append data to temp_table based on the records in ddlDeltaLog.
4. DDL Commit Phase
    (1) Reacquire the level-8 lock.
    (2) Perform the final append to synchronize all remaining logs in ddlDeltaLog to the new table.
    (3) Swap the relfilenode of the old and new tables.
    (4) Clean up online DDL-related information and commit the transaction.

## Usage Guide

The openGauss online DDL feature supports, in traditional primary-standby deployments, Astore and segment-page storage for modifying column data types, modifying compression attributes, adding constraints (including range constraints and NOT NULL constraints), VACUUM FULL, CLUSTER, and partition splitting and merging for partitioned tables. The keyword CONCURRENTLY is introduced to trigger the online DDL functionality:

```sql
ALTER TABLE [CONCURRENTLY] table_name ......
```

Taking a regular table named table as an example, the syntax for online DDL is as follows:

```sql
drop table if exists employee;
CREATE TABLE employee (
    id      INT,
    name    VARCHAR,
    email   VARCHAR,
    age     INT
);
CREATE INDEX idx_employee ON employee (id);
```

- Modify the data type of a column:

```sql
ALTER TABLE CONCURRENTLY employee ALTER COLUMN age TYPE VARCHAR;
```

- Modify row-store compression attributes:

```sql
ALTER TABLE CONCURRENTLY employee SET (compresstype = 2, compress_level = 30);
```

- Add a NOT NULL constraint to a table:

```sql
ALTER TABLE CONCURRENTLY employee ALTER id SET NOT NULL;
```

- Add a range constraint to a table:

```sql
ALTER TABLE CONCURRENTLY emplyee ADD CONSTRAINT chk_employee_age (age >=18 AND age <=65);
```

Perform online VACUUM FULL on a table:
```sql
VACUUM FULL CONCURRENTLY employee;
```

Perform online CLUSTER on a table:
```sql
CLUSTER CONCURRENTLY employee USING idx_employee;
```

Take the partitioned table orders as an example:
```sql
drop table if exists orders;
CREATE TABLE orders (
    order_id    INT          NOT NULL,
    customer_id INT,
    product_name VARCHAR(100),
    region      VARCHAR(50)
)
PARTITION BY RANGE (order_id)
(
    PARTITION p1 VALUES LESS THAN (1000),
    PARTITION p2 VALUES LESS THAN (2000),
    PARTITION p3 VALUES LESS THAN (3000),
    PARTITION p4 VALUES LESS THAN (MAXVALUE)
);
CREATE INDEX idx_orders ON orders (customer_id) local;
```

Perform VACUUM FULL CONCURRENTLY on the entire table.
```sql
VACUUM FULL CONCURRENTLY orders;
```

Perform VACUUM FULL CONCURRENTLY on partition p1.
```sql
VACUUM FULL CONCURRENTLY orders partition(p1);
```

Perform CLUSTER CONCURRENTLY on the entire table.
```sql
CLUSTER CONCURRENTLY orders USING idx_orders;
```

Perform CLUSTER CONCURRENTLY on partition p1.
```sql
cluster CONCURRENTLY orders partition(p1) USING idx_orders;
```

Split partition p1 into p11 and p12.
```sql
ALTER TABLE CONCURRENTLY orders SPLIT PARTITION p1 AT (500) INTO (PARTITION p11, PARTITION p12);
```

Merge partitions p3 and p4 into p5.
```sql
ALTER TABLE CONCURRENTLY orders MERGE PARTITIONS p3, p4 INTO PARTITION p5;
```

In addition, a SIGHUP-level parameter log_online_ddl_level is added for online DDL, which is used to adjust the online DDL log printing level. This parameter is intended only for functional verification and is not recommended for normal use.

A system function online_ddl_status() is added to query the running status of online DDL transactions in the current database.
```sql
SELECT * FROM online_ddl_status();
```


## Use Cases

Scenarios in openGauss traditional primary-standby deployments where DDL operations are performed on large tables and data rebuild is required, such as modifying column data types, modifying row-store compression attributes, adding constraints (which do not require rebuild but require table scanning, including NOT NULL constraints and range constraints), VACUUM FULL, CLUSTER, and partition table split or merge partitions.