# Ledger Database Mechanism<a name="EN-US_TOPIC_0000001110353738"></a>

## Availability<a name="section17746747"></a>

This feature is available since openGauss 2.1.0.

## Introduction<a name="section25503003"></a>

The ledger database feature includes adding the verification information to a tamper-proof table specified by a user and recording the user's data operation history. The consistency between the data and operation history is checked to ensure that the user data cannot be maliciously tampered with. When a user performs DML operations on a tamper-proof table, the system adds a small amount of additional row-level verification information to the table and records the SQL statements and data change history. The feature provides a verification API for users to check whether the data in the tamper-proof table is consistent with the operation information recorded by the system.

## Benefits<a name="section28200442"></a>

The ledger database provides user data operation records, historical data change records, and easy-to-use consistency verification API to help users check whether sensitive information in the database is maliciously tampered with at any time, effectively improving the tamper-proof capability of the database.

## Description<a name="section52477394"></a>

The ledger database uses the ledger schema to isolate common tables from tamper-proof user tables. If a row-store table created in the ledger schema has the tamper-proof attribute, it is a tamper-proof user table. When data is inserted into a tamper-proof user table, the system automatically generates a small amount of row-level verification information. When a user executes DML, the system records user operations in the global blockchain table \(GS\_GLOBAL\_CHAIN\) and records data changes in the historical table corresponding to the user table. The data in operation records, data change records, and the user table must be the same. The ledger database provides a high-performance verification API for users to verify data consistency. If the consistency verification fails, the data may be tampered with. In this case, contact the audit administrator to trace the operation history.

## Enhancements<a name="section2534498"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   In tamper-proof schema, row-store tables are tamper-proofing, whereas temporary tables, unlogged tables, column-store tables, and time series tables are not.
-   The structure of the tamper-proof user table cannot be modified. The tamper-proof tables cannot be truncated. The tamper-proof user table cannot be switched to a common schema. The non-tamper-proof table cannot be switched to the tamper-proof schema.
-   If the tamper-proof table is a partitioned table, operations such as exchange partition, drop partition and truncate partition are not supported.
-   Functions and triggers cannot be used to modify data in a tamper-proof user table.
-   When a tamper-proof user table is created, the column named  **hash**  cannot exist.
-   Common users can call the tampering verification API to verify only tables that they have the permission to query.
-   Only the audit administrator and initial user can query the global blockchain table and tables in BLOCKCHAIN schema. Common users do not have the permission to access and all users do not have the permission to modify the tables.
-   According to the naming rules of historical tables, if the name of the schema or table to be created ends or starts with an underscore \(\_\), the name of the corresponding historical table may conflict with that of an existing table. In this case, you need to rename the table.
-   Currently, the hash digest of user row-level data in the ledger database is used only to ensure data integrity. It cannot prevent attackers from directly tampering with data files.

## Dependencies<a name="section22810484"></a>

None.

