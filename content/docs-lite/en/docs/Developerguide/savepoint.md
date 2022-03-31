# SAVEPOINT<a name="EN-US_TOPIC_0289899933"></a>

## Function<a name="en-us_topic_0283137144_en-us_topic_0237122183_en-us_topic_0059777880_section532518817713"></a>

**SAVEPOINT**  establishes a new savepoint within the current transaction.

A savepoint is a special mark inside a transaction. It allows all statements that are executed after it was established to be rolled back, restoring the transaction state to what it was at the time of the savepoint.

## Precautions<a name="en-us_topic_0283137144_en-us_topic_0237122183_en-us_topic_0059777880_section7325138279"></a>

-   Use  **ROLLBACK TO SAVEPOINT**  to roll back to a savepoint. Use  **RELEASE SAVEPOINT**  to destroy a savepoint but keep the effects of the statements executed after the savepoint was established.
-   Savepoints can only be established when inside a transaction block. Multiple savepoints can be defined in a transaction.
-   In the case of an unexpected termination of a thread or process caused by a node or connection failure, or of an error caused by the inconsistency between source and destination table structures in a  **COPY FROM**  operation, the transaction cannot be rolled back to the established savepoint. Instead, the entire transaction will be rolled back.
-   According to the SQL standard, when a savepoint with the same name is created, the previous savepoint with the same name is automatically deleted. In openGauss, the old savepoint is retained, but only the latest one is used during rollback or release. Releasing the newer savepoint with  **RELEASE SAVEPOINT**  will cause the older one to again become accessible to  **ROLLBACK TO SAVEPOINT**  and  **RELEASE SAVEPOINT**. In addition,  **SAVEPOINT **fully complies with the SQL standard.

## Syntax<a name="en-us_topic_0283137144_en-us_topic_0237122183_en-us_topic_0059777880_section173261081673"></a>

```
SAVEPOINT savepoint_name;
```

## Parameter Description<a name="en-us_topic_0283137144_en-us_topic_0237122183_en-us_topic_0059777880_section7327198178"></a>

savepoint\_name

Specifies the name of the new savepoint.

## Examples<a name="en-us_topic_0283137144_en-us_topic_0237122183_en-us_topic_0059777880_section11329989719"></a>

```
-- Create a table.
openGauss=# CREATE TABLE table1(a int);

-- Start a transaction.
openGauss=# START TRANSACTION;

-- Insert data.
openGauss=# INSERT INTO table1 VALUES (1);

-- Create a savepoint.
openGauss=# SAVEPOINT my_savepoint;

-- Insert data.
openGauss=# INSERT INTO table1 VALUES (2);

-- Roll back the savepoint.
openGauss=# ROLLBACK TO SAVEPOINT my_savepoint;

-- Insert data.
openGauss=# INSERT INTO table1 VALUES (3);

-- Commit the transaction.
openGauss=# COMMIT;

-- Query the content of the table. You can see 1 and 3 at the same time, but cannot see 2 because 2 is rolled back.
openGauss=# SELECT * FROM table1;

-- Delete the table.
openGauss=# DROP TABLE table1;

-- Create a table.
openGauss=# CREATE TABLE table2(a int);

-- Start a transaction.
openGauss=# START TRANSACTION;

-- Insert data.
openGauss=# INSERT INTO table2 VALUES (3);

-- Create a savepoint.
openGauss=# SAVEPOINT my_savepoint;

-- Insert data.
openGauss=# INSERT INTO table2 VALUES (4);

-- Roll back the savepoint.
openGauss=# RELEASE SAVEPOINT my_savepoint;

-- Commit the transaction.
openGauss=# COMMIT;

-- Query the table content. You can see 3 and 4 at the same time.
openGauss=# SELECT * FROM table2;

-- Delete the table.
openGauss=# DROP TABLE table2;
```

## Helpful Links<a name="en-us_topic_0283137144_en-us_topic_0237122183_en-us_topic_0059777880_section183301781176"></a>

[RELEASE SAVEPOINT](release-savepoint.md)  and  [ROLLBACK TO SAVEPOINT](rollback-to-savepoint.md)

