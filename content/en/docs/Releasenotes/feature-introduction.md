# Feature Introduction<a name="EN-US_TOPIC_0244801137"></a>

-   Standard SQLs

    Supports SQL92, SQL99, SQL2003, and SQL2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and SQL Procedural Language.

-   Database storage management

    Supports tablespaces where different tables can be stored in different locations.

-   Primary/standby deployment

    Supports the ACID properties, single-node fault recoveries, primary/standby data synchronization, and primary/standby switchover.

-   APIs

    Supports standard JDBC 4.0 and ODBC 3.5 features.

-   Management tools

    Provides installation and deployment tools, instance start and stop tools, and backup and restoration tools.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.


## New Features<a name="section383172195410"></a>

This is the second version of openGauss. Features and functions of this version are compatible with those of the previous version. The new features are as follows:

-   XML Type

    Stores XML data. The advantage of storing XML data in a text type is that it can check the input value for structural goodness, and it also supports type safety checks on functions. To use this data type, you must use  **configure --with-libxml**  during compilation.

-   Pseudo-column ROWNUM

    Generates a sequence number for each row in the query result. The sequence numbers must be unique. When using the ROWNUM function, you must use the OVER clause to sort a column to generate sequence numbers.

-   MEDIAN Aggregate Function

    Returns the median value of a given value. The median value is in the middle of a group of values. If the parameter set contains an even number of numbers, MEDIAN returns the average value of the two numbers in the middle.

-   Global Temporary Table

    Temporary tables need to be created only once for each database. Global temporary table objects are stored in the data dictionary. A temporary table is used to store intermediate result sets of transactions or sessions. The data stored in a temporary table is visible only to the current session. Even if the current session has committed data, other sessions cannot see the data. A temporary table can be used for sessions. Data can still exist in a temporary table even after the data is committed. However, the data is lost after the temporary table is disconnected and then reconnected. A temporary table can also be used for transactions. After the transaction is submitted, the data disappears.

-   Foreign Table

    The data of foreign tables does not exist in the database. By providing the database with metadata that describes foreign tables, you can treat an operating system file or foreign data source as a database table and access it as if it were stored in a common database table. A foreign table is an extension of a database table. The foreign data wrapper \(FDW\) plug-in allows users to access tables of other heterogeneous databases in openGauss. openGauss supports FDW for Oracle \(oracle\_fdw\), FDW for MySQL \(mysql\_fdw\), and FDW for PostgreSQL \(Postgres\_fdw\), allowing users to access other heterogeneous databases in openGauss. To use these plug-ins, you need to install the client package of the corresponding database, recompile openGauss, and configure  **enable\_mysql\_fdw**  and  **enable\_oracle\_fdw**. After the database is started, run the  **create extension**  command to create an extension component, run the  **create server**  command to configure heterogeneous database connection parameters, run the  **create user mapping**  command to create a heterogeneous user mapping, and run the  **CREATE FOREIGN TABLE**  command to create a foreign table of a specified database.

-   Materialized View

    A local copy of the database query result data, which stores data based on data tables. It can also be called a snapshot. In a relational database, a common view is a virtual table that stores only SQL statements. A materialized view caches the query result of the view to a concrete or materialized table to store the actual data. Materialized views are used to pre-compute and save the results of time-consuming operations such as table join or aggregation. In this way, these time-consuming operations can be avoided during query execution, and results can be quickly obtained. The materialized view uses the query rewrite mechanism and does not require the modification of original query statements. The engine automatically selects a proper materialized view to rewrite the query, which is transparent to applications.

-   Foreign Key

    Represents a correlation between two relationships. A table that uses the foreign key of another relationship as the primary keyword is called the primary table. A table that has the foreign key is called the secondary table of the primary table. The foreign key establishes a referential integrity constraint between the primary table and the secondary table.

-   UPSERT \(INSERT ON CONFLICT DO\)

    When a constraint error occurs during data insertion, the system directly returns the error or executes the UPDATE statement.

-   Commit in a Stored Procedure, Independent Debugging, and Parentheses Omission

    You camn commit data in batches to ensure data reliability in a stored procedure. You can set breakpoints and perform independent debugging. Stored procedure debugging is a debugging method. During the development of a stored procedure, you can trace the process executed by the stored procedure step by step and find the error cause or program bug based on the variable value to improve the fault locating efficiency.

-   Autonomous Transaction

    Allows you to create a "transaction in a transaction" that can be committed or rolled back independently of its parent transaction. With autonomous transactions, you can start a new transaction, complete some work, and then commit or roll back, all of which do not affect the state of the currently executed transaction. For details about autonomous transaction constraints, see the description of autonomous transactions in the specification constraints.

-   Keyword Alias

    Keywords such as name, value, and type are used as the aliases of query result columns.

-   Logical Replication

    In logical replication, the primary database is called the source database, and the standby database is called the objective database. The source database parses the WAL file based on the specified logical parsing rule and parses the DML operation into certain logical change information \(standard SQL statements\). The source database sends standard SQL statements to the objective database. After receiving the SQL statements, the objective database applies them to implement data synchronization. Logical replication involves only DML operations. Logical replication can implement cross-version replication, heterogeneous database replication, dual-write database replication, and table-level replication.

-   Incremental Backup and Restoration \(beta\)

    Supports full backup and incremental backup of the database, manages backup data, and views the backup status. Supports combination of incremental backups and deletion of expired backups.

    The database server dynamically tracks page modifications, and when a relational page is updated, the page is marked for backup. To use the incremental backup function, you need to enable the GUC parameter  **enable\_cbm\_tracking**  and allow the server to track the page modifications.

-   Point-in-time Recovery \(PITR\)

    Uses basic hot backup, write-ahead logs \(WALs\), and archived WALs for backup and recovery. When replay a WAL record, you can stop at any point in time, so that there is a snapshot of the consistent database at any point in time. That is, you can restore the database to the state at any time since the backup starts. During recovery, you can specify the recovery stop point as TID, time, and LSN.

-   Standby Node in Replay Mode

    The primary and standby nodes support the remote\_apply mode. In remote\_apply mode, the primary node returns to the application only after the redo logs of the standby node are restored.

-   Global Partitioned Indexes

    A global index is an independent index created on the entire table. If the query references a non-partition column, the performance can be improved.

-   Automatic Extended Partition Based on Range Partitions

    The INTERVAL partition is a function extension of the range partitions. For range partitions of continuous data types, if the new data value inserted does not match the current partition, the Interval-Partition feature can be used to automatically create partitions. The partition column must be of the integer or time type.

-   Parallel Query \(beta\)

    Supports the parallel scanning operator, and optimizes the execution mode of SQL statements. The single-thread mode that uses a single CPU at most is improved to the multi-thread mode that completes the work collaboratively. Parallel query consumes more hardware resources, but greatly improves the task execution efficiency.

-   OS Platform

    Supports openEuler 20.3LTS on x86-64 and Kirin V10 on Arm. It can run on openEuler and CentOS containers.

-   **ALTER SYSTEM SET**  Syntax

    Modifies values of database instance parameters in a session. After the database is reconnected or restarted, the parameters can be successfully modified and written into the  **postgresql.conf**  and  **postgresql.conf.bak**  configuration files.

-   IPv6 Protocol

    The database can be connected using the IPv6 protocol.

-   PostGIS Plug-in

    PostGIS is a spatial database that supports geographic objects, uses the point, line, and plane data types, and allows spatial relationship location query in SQL. Before using this function, you need to install the PostGIS plug-in.

-   GIN Index

    A common inverted index, which is a data structure for storing a set. GIN indexes are suitable for multivalued element searches, such as array and full-text searches.

-   Stored Procedure Debugging

    By installing the pldebuger plug-in, you can debug the SQL statements of functions and stored procedures.

-   Standby Node Scale-out

    Supports the standby node scale-out in the database cluster using tools. A standalone or primary/standby database can be scaled to a maximum of one primary and four standbys.

-   Automatic Workload Diagnosis Report \(WDR\)

    Generates a performance report between two different time points based on the system performance snapshot data at these time points. The report is used to diagnose database kernel performance faults.

-   Supports transaction-level synchronization of heterogeneous databases \(only DML\).

## Optimized Features<a name="section147262552548"></a>

This is the second release of openGauss. The current version does not optimize features of the first release.

