# Features<a name="EN-US_TOPIC_0289899195"></a>

-   Standard SQL support

    Supports SQL-92, SQL-99, SQL:2003, and SQL:2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and stored procedures.

-   Database storage management

    Tablespaces are supported. Different tables can be stored in different locations. The enterprise edition supports storage engines such as Ustore, Astore, and MOT.

-   Primary/standby deployment

    Supports the ACID feature of transactions, single-node recovery, HA data synchronization, and HA switchover. The enterprise edition provides the CM tool to support database instance status query, primary/standby switchover, log management, and cluster status query and push.

-   Application programming interface \(API\)

    Supports standard JDBC 4.0 and ODBC 3.5 features.

-   Management tools

    Provides the installation and deployment tool, instance start and stop tool, backup and restoration tool, scale-out and scale-in tool, and upgrade tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, fine-grained ANY permission control, and other functions, to ensure data security at the management, application, system, and network layers.

-   AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecast, and exception detection; The native AI engine in the library supports 10+ high-performance machine learning algorithms.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This section describes openGauss 3.1.1. Compared with openGauss 3.1.0, it has the following new features:

-   Primary/Standby shared storage
    This feature enables the primary and standby nodes to share the same storage, implementing HA deployment mode for the primary/standby shared storage based on disk arrays. OCK RDMA can be used to improve the real-time read consistency on standby nodes. This feature depends on two Huawei-developed components:
    -   Distributed storage service (DSS)
        The DSS process is an independent process that directly manages raw devices of disk arrays and provides capabilities similar to distributed file systems for external systems. The shared memory and client API dynamic library provide the database with the capabilities of creating files, deleting files, expanding and shrinking files, and reading and writing files.
    -   Distributed memory service (DMS)
        DMS is a dynamic library integrated in the database. It transmits page content through the TCP/RDMA network, integrates the primary and standby memories, and provides the memory pooling capability to implement real-time read consistency on standby nodes. That is, after a transaction is committed on the primary node, the transaction can be read on the standby node immediately. There is no delayed read (the transaction isolation level is read committed).
    The shared storage uses OCK RDMA to reduce the latency of DMS primary/standby page exchange. Compared with the latency of read consistency on a standby node in TCP mode, when OCK RDMA is enabled, the latency is reduced by at least 20%.

-   CM deployment is decoupled from database deployment. CM supports incremental upgrade.
    The CM installation can be decoupled when the database process already exists. In addition, the CM component can be upgraded independently, enhancing the reliability of the database cluster.

-   Enhanced MySQL compatibility
    Version 3.1.1 supports the following syntax points: Only some typical syntax points are listed. For details, see [MySQL Compatibility](../DataMigrationGuide/b-compatible-description.md).
    -   Operators: !, ->, and ->>
    -   System functions: 28 JSON class functions, such as JSON_ARRAY(), JSON_OBJECT(), JSON_QUOTE(), JSON_CONTAINS(), JSON_CONTAINS_PATH(), and JSON_EXTRACT(), support any\_value, database, and default functions.
    -   DDLs:
        -   Functions can be used as partition conditions for partitioned tables.
        -   The partition table syntax supports LESS THAN MAXVALUE.

    -   DMLs:
        -   The Load DATA syntax can be used to import data.
        -   Views can be inserted, deleted, and updated.
        -   In an INSERT statement, the right value of an expression following SET can contain the column name.
        -   Multiple partitions can be specified to query data.

    -   PLs/SQLs:
        -   The WHILE loops with labels are supported.
        -   The CASE WHEN condition control syntax is supported.
        -   The IF_THEN control syntax is supported.
        -   The CURSOR syntax is compatible with MySQL.
        -   The Declare...CONDITION FOR syntax is supported.
        -   The DO expr \[, expr\]... is supported.
        -   The REPEAT and Return clauses are supported.
				
    -   DCLs:
        -   The CREATE USER with the IF NOT EXISTS option is supported.

    -   Others:
	    -   The sql\_mode options ansi\_quotes and no\_zero\_date are added, indicating that double quotation marks are used for reference and DATE can be all 0s.
	    -   The SHOW WARNINGS and SHOW ERRORS are supported.
	    -   The backquote can be used as identifiers.
