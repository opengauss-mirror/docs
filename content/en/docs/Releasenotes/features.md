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

This section describes the openGauss 3.1.0 enterprise edition. Compared with openGauss 3.0.0, it has the following new features:

-   The performance of basic operators is improved.
    -   The accuracy and performance of the new selection rate model in typical scenarios are improved by 1X.
    -   The performance of the partitioned table page is improved by 20% in typical scenarios.
    -   The performance of the Partition Iterator operator is improved by 5% in typical scenarios.
    -   The function dependency feature supports multi-column query, improving the accuracy by 1X in typical scenarios.
    -   The performance of the SeqScan operator is improved by 10% in typical scenarios.

-   Two-City Three-DC DR is supported.

    The remote DR solution based on streaming replication is added for the two-city 3DC cross-region DR feature.

    -   DR database failover is supported. When the remote network latency of the primary and standby clusters is less than or equal to 100 ms and the DR failover is performed in typical database configurations, the RTO is minute-level and the RPO is approximately equal to zero.
    -   Planned switchover between the DR primary and standby database instances is supported. When the remote network latency of the primary and standby clusters is less than or equal to 100 ms and the switchover is performed in typical database configurations, the RTO is minute-level and the RPO is 0.

-   The CM supports external status query and push.
    -   The HTTP/HTTPS service is used to remotely query the cluster status, helping management personnel and O&M platforms monitor the cluster status.
    -   When an primary/standby switchover occurs in the database cluster, the latest primary/standby information of the cluster is pushed to the receiving address registered by the application through the HTTP/HTTPS service in time. In this way, the application can detect the primary/standby change of the cluster in time and quickly connect to the new primary and standby nodes.

-   The DCF supports policy-based majority.

    DCF supports the policy-based majority capability. Based on the configured AZ, DCF ensures that at least one node in the AZ synchronizes replication logs.

-   DBMind autonomous O&M platform

    An end-to-end autonomous O&M platform is built: The anomaly detection capability is added to improve the self-monitoring, self-diagnosis, and self-tuning capabilities.

    -   DBMind servitization: provides simple deployment capabilities, adds cmd exporters to expand collection metrics, and extends openGauss-exporter to Agent to obtain real-time information.
    -   Anomaly detection: By analyzing monitored indicators, the system generates alarms for abnormal system status fluctuation, including rule-based and algorithm-based alarms. Algorithm-based analysis includes analysis of typical abnormal scenarios such as spike and mean shift.

-   Intelligent optimizer is supported.
    -   The Bayes network algorithm in the database is implemented, and intelligent statistics are implemented based on the algorithm to improve the accuracy of multi-column cardinality estimation and improve the quality of the generated execution plan.
    -   Adaptive plan selection solves plan jump problems caused by data skew, inaccurate indexes, and offset query, improving performance by more than 1x.

-   The fine-grained Any permission is enhanced.

    The ANY permission management supports the following 12 ANY permissions for five objects:

    -   ALTER ANY TYPE, DROP ANY TYPE
    -   ALTER ANY SEQUENCE, DROP ANY SEQUENCE, SELECT ANY SEQUENCE
    -   ALTER ANY INDEX, DROP ANY INDEX
    -   CREATE ANY TRIGGER, ALTER ANY TRIGGER, DROP ANY TRIGGER
    -   CREATE ANY SYNONYM, DROP ANY SYNONYM

-   The compression capability of row-store tables is enhanced.

    The storage status of the data page is changed by compressing the row-store data. A mapping management layer is added to flush compressed pages to disks. The entire process occurs when dirty pages are flushed to disks. The upper-layer logic of the database is not affected and users are unaware of the process.

    In the TPC-C test model, the compression ratio is higher than 2:1 and the performance deterioration is less than 5%.

-   Publication and subscription capabilities are enhanced.

    The publication and subscription functions are enhanced to support the remote active-active solution.

    -   The subscription relationship is not interrupted after the primary/standby switchover on the publisher.
    -   Basic data before subscription relationships are created can be synchronized.
    -   The replication slot is not lost after backup and restoration, ensuring that the publication and subscription connections are normal.
    -   Data can be sent in binary format.

-   Fine-grained rolling upgrade is supported.

    The gray upgrade provides the function of upgrading specified nodes. This ensures that some nodes are upgraded before the remaining nodes without interrupting services, reducing the service interruption duration in upgrade scenarios.

-   The diagnosis capability of the statement\_history view is enhanced.
    -   The standby node supports the statement\_history view, meeting the requirements for diagnosing slow SQL statements on the standby node.
    -   Statistics on waitevents are added to statement\_history to record the duration and number of wait events during slow SQL execution.

-   Middleware: integrates OpenLookeng to provide distributed OLAP capabilities.

    The distributed analysis capability is implemented based on OpenLookeng. OpenLookeng reuses the sharding capability of the ShardingSphere middleware so that OpenLookeng can obtain openGauss data for analysis and calculation. It combines the distributed OLTP capability formed by ShardingSphere and openGauss to form the distributed HTAP capability.

-   Middleware: The CM can manage the ShardingSphere Proxy and registration center.

    The CM supports customized resource management, ShardingSphere Proxy and registration center management, and automatic startup upon exceptions.

-   Toolchain: MySQL full migration supports parallel migration, improving full migration performance.

    Table-level parallel migration is supported to improve the MySQL full migration performance. Based on the sysbench test model, 10 tables (with a single table capacity of more than 3 million) can be migrated concurrently on the Kunpeng-920 2P server, achieving migration performance of more than 300 MB/s.

-   Toolchain: MySQL incremental migration supports transaction-level parallel consumption, improving incremental migration performance.

    The open-source third-party software **mysql-binlog-connector-java** is used to parse the **binlog** of the MySQL database. Based on the principle of parallel replication between the primary and standby MySQL databases, multiple threads are used to replay parallel transactions on openGauss to implement online migration from the MySQL database to openGauss.

    The sysbench is used to perform a pressure test on MySQL. In the IUD hybrid scenario with 10 tables and 30 concurrent threads, the overall incremental migration performance on the Kunpeng-920 2P server can reach 30,000 TPS.

-   Toolchain: The data verification based on the Merkle tree is supported.

    A real-time data verification tool based on the Merkle tree is implemented. When MySQL data is migrated to openGauss, full and incremental verification of source and target data is supported.

-   Toolchain: Migration from openGauss to MySQL is supported, meeting MySQL reverse migration requirements.

    This feature is implemented based on logical replication of openGauss. Logical replication is enabled on openGauss, JDBC is used to obtain logical decoding, SQL parsing is performed on the logical decoding, and multi-thread concurrent migration is performed to migrate user data from MySQL to openGauss and ensure two databases run concurrently or escape after migration.

    The sysbench performs a pressure test on openGauss. When 100 tables and 100 threads are concurrently executed, the overall migration performance on the Kunpeng-920 2P server can reach 30,000 TPS in the insert scenario.

-   Compatibility: Compatible with most common MySQL functions and syntax.

    The Dolphin plug-ins are provided to be compatible with MySQL in terms of keywords, data types, constants and macros, functions and operators, expressions, type conversion, DDL/DML/DCL syntax, stored procedures/user-defined functions, and system views.

    Version 3.1.0 supports the following syntax points: (Only some typical syntax points are listed. For details, see section "MySQL Compatibility" in the Developer Guide.)

    -   Data types: ENUM, SET, FIXED, LONGBLOB, MEDIUMBLOB, TINYBLOB, MEDIUM INT, DATETIME, YEAR, NVARCHAR, and unsigned integer.
    -   Operators: =, ^\ (XOR\), <=\> (not equal to), ||, &&, regexp, not regexp, rlike, DIV, MOD, XOR, like binary, and not like binary.
    -   System functions: if, ifnull, isnull, strcmp, locate, lcase, ucase, insert, bin, chara, elt, field, find\_int\_set, hex, space, soundex, length, convert, format, rand, crc32, conv, now, sysdate, current\_time, dayofmonth, is\_ipv4, inet\_aton, inet\_ntoa, is\_ipv6, inet6\_aton, export\_set, bit\_bool, json\_array, json\_quote, last\_insert\_id and group\_concat.
    -   DDLs:
        -   IF NOT EXISTS can be specified when a database is created.
        -   Comments can be created and modified in the column/table/index/procedure/function.
        -   Options can be arranged in disorder during table and index creation. Table names are case sensitive.
        -   Indexes and constraints can be specified during table creation.
        -   It is compatible with ADD, DELETE, EXCHANGE, REORGANIZE, TRUNCATE, ANALYZE, REBUILD, REPAIR, and REMOVE partitions.
        -   ON UPDATE current\_timestamp can be specified during table creation.
        -   Auto-increment columns are supported.

    -   DMLs:
        -   INSERT, UPDATE, and DELETE can contain the IGNORE keyword. When a conflict occurs, the error can be ignored.
        -   The DELETE statement supports ORDER BY and specified partitions.
        -   The DELETE statement can be used to delete multiple tables, and the UPDATE statement can be used to update multiple tables.
        -   The REPLACE INTO syntax is supported.

    -   PL/SQL:
        -   The PL/SQL supports the setting of DEFINER.
        -   Variables can be named in stored procedures.
        -   Use the CALL keyword to invoke a stored procedure that has parameters.
        -   DELIMITER can be used to define separators.

    -   DCLs:
        -   It is compatible with various SHOW syntaxes, including show databases, show processlist, show tables, show create table, show create view, and show master status.
        -   USE db\_name and DESC table\_name are supported.

    -   Network protocol compatibility: Compatible with basic network protocols of MySQL clients.
    -   Compatibility: The compatibility evaluation tool is supported.

        A compatibility assessment tool based on the openGauss kernel syntax tree. It can assess the compatibility of mainstream databases.
