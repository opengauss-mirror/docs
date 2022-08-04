# Features<a name="EN-US_TOPIC_0289899195"></a>

-   Standard SQL support

    Supports SQL-92, SQL-99, SQL:2003, and SQL:2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and stored procedures.

-   Database storage management

    Tablespaces are supported. Different tables can be stored in different locations. The enterprise edition supports storage engines such as Ustore, Astore, and MOT.

-   Primary/standby deployment

    Supports the ACID feature of transactions, single-node recovery, HA data synchronization, and HA switchover. The enterprise edition provides the CM tool to support database instance status query, primary/standby switchover, and log management.

-   Application programming interface \(API\)

    Supports standard JDBC 4.0 and ODBC 3.5 features.

-   Management tools

    Provides the installation and deployment tool, instance start and stop tool, backup and restoration tool, scale-out and scale-in tool, and upgrade tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.

-   AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecast, and exception detection; The native AI engine in the library supports 10+ high-performance machine learning algorithms.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This section describes the openGauss 3.0.0 enterprise edition. Compared with openGauss 2.1.0, openGauss 3.0.0 has the following new features:

-    [Row-store execution to vectorized execution](../CharacteristicDescription/row-store-execution-to-vectorized-execution.md)

    Row-store table queries are converted into vectorized execution plans for execution, improving the execution performance of complex queries.

-   [Delay of entering the maximum availability mode](../CharacteristicDescription/delaying-entering-the-maximum-availability-mode.md)

    When the maximum availability mode is enabled on the primary node and the primary node detects that the standby node exits (for example, due to network jitter), the primary node remains in the maximum protection mode within a specified time window. After the time window expires, the primary node enters the maximum availability mode.

-   [Parallel logical decoding](../CharacteristicDescription/parallel-logical-decoding.md)

    When JDBC or pg\_recvlogical is used for decoding, you can set **parallel-decode-num** to a value greater than 1 and less than or equal to 20 to enable parallel decoding. In this way, one reader, multiple decoders, and one sender are used to perform logical decoding, significantly improving the decoding speed.


-   [Cluster Manager](../Toolreference/unified-database-management-tool.md)

    Supports customized resource monitoring and provides capabilities such as monitoring of the primary/standby database status, network communication faults, file system faults, and automatic primary/standby switchover upon faults.

-   [Global SysCache](../CharacteristicDescription/global-syscache.md)

    Decouples the system cache from sessions and binds them to threads to reduce the memory usage together with the thread pool feature. In addition, it is used to improve the cache hit rate and ensure stable performance.

-   [Publication-subscription](../CharacteristicDescription/publication-subscription.md)

    Supports publication-subscription, which is implemented based on logical replication, with one or more subscribers subscribing to one or more publications on a publisher node. The subscriber pulls data from the publications they subscribe to. Data across database clusters can be synchronized in real time.

-   [Foreign key lock enhancement](../CharacteristicDescription/foreign-key-lock-enhancement.md)

    Two types of row locks are added, which are extended from share and update locks to key share, share, no key update, and update locks. A non-primary key update obtains a no key update lock, and a row lock obtained by a foreign key trigger is a key share lock. The two types of locks do not conflict with each other, thereby improving concurrency of foreign key locks.

-   [Row-store table compression](../Developerguide/create-table.md)

    Supports row-store table compression. A general compression algorithm is provided to implement transparent compression of table and index data pages and maintenance of page storage locations to achieve high compression and high performance. Disk persistence is implemented using two types of files: compressed address file (with the file name extension .pca) and compressed data file (with the file name extension .pcd).

-   [Open-source Data Studio] (../CharacteristicDescription/opengauss-client-tool-datastudio.md)

    Data Studio is a universal and integrated development environment for developers and database administrators. It simplifies the development and management of the openGauss database and supports the following functions:

    -   Connect to the openGauss database over an integrated GUI-based development environment.
    -   Efficiently develop SQL.
    -   Manage or create database objects \(databases, schemas, functions, stored procedures, tables, sequences, columns, indexes, constraints, views, users, roles, and tablespaces\).
    -   Run SQL statements or SQL scripts.
    -   Create and execute a stored procedure.
    -   Add, delete, modify, and query table data.
    -   Import and export table data.
    -   Display and export DDL data.
    -   Import and export connection information.
    -   Format SQL statements.
    -   View SQL execution history.
    -   Display the execution plan and ER diagram.

-   [MySQL to openGauss migration tool Chameleon] (../CharacteristicDescription/mysql-to-opengauss-migration-tool-chameleon.md)

    Chameleon is Python-based. It supports real-time data replication from MySQL to openGauss. The tool can replicate initial full data and incremental data in real time to migrate them from MySQL to openGauss.

-   [Using ShardingSphere to build a distributed database](../CharacteristicDescription/distributed-database-capability.md)

    Supports the distributed middleware ShardingSphere to provide openGauss the distributed database capability. Up to 16 Kunpeng 920 nodes can be used for networking. The sharding performance is greater than 10 million tpmC.

-   [Deploying a distributed database using Kubernetes](../CharacteristicDescription/deploying-a-distributed-database-using-kubernetes.md)

    Supports quick deployment of a distributed database. Patroni is used to implement planned switchover and automatic failover in case of faults. HAProxy is used to implement read and write load balancing between the primary and standby openGauss nodes. ShardingSphere is used to implement distributed capabilities. All functions are packaged into images and one-click deployment scripts are provided.
