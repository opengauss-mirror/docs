
# Enhanced MySQL Compatibility

## Availability

This feature is available since openGauss 3.0.0.

## Introduction

This feature enhances the compatibility between openGauss and MySQL from the following aspects (only some typical syntax is listed. For details, see section "MySQL Compatibility" in the *Data Migration Guide*):

User locks are supported. Users can use SQL statements to add user-defined locks so that multiple programs can complete lock-related interaction. In this way, clients can obtain consistent lock views from any location.

When data is inserted into a newly created table, the current time is recorded by default. When data is updated without specifying the update time, the current time is displayed by default.

The session-level SQL mode can be set to allow runtime, global, and intra-session changes.

Hidden indexes are supported and are not used by the optimizer.

Columns are case sensitive. The column names used during table creation retain case-sensitive information in the system catalog. When these columns are used, case-insensitive information is ignored.

The default character set and collation can be set and modified at the schema, table, and column levels.


## Benefits

A user lock is set to protect data, data structures, and some character strings, preventing mutual interference between sessions and ensuring information consistency and security. It solves the problem that the operation timestamp is recorded when the user service data is written or modified. By setting the SQL mode, you can solve the known issues in earlier versions and compatibility issues in later versions. By hiding indexes, you can test the impact of deleting an index on the query performance without disabling, deleting, or re-creating the index, improving the SQL tuning efficiency. By supporting case sensitivity, column names can remain case sensitive during query. You can set and modify the default character set and collation at the schema, table, and column levels based on the actual application scenarios.
