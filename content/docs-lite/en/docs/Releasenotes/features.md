# Features<a name="EN-US_TOPIC_0289899195"></a>

-   Standard SQL support

    Supports SQL-92, SQL-99, SQL:2003, and SQL:2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and stored procedures.

-   Database storage management

    Supports tablespaces where different tables can be stored in different locations.

-   Primary/standby deployment

    Supports the ACID properties, single-node fault recovery, primary/standby data synchronization, and primary/standby switchover.

-   Application programming interface \(API\)

    Supports standard JDBC 4.0 and ODBC 3.5 features.

-   Management tools

    Provides installation and deployment tools, instance start and stop tools, backup and restoration tools, and upgrade tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This section describes the lite edition of openGauss 3.0.0. Compared with openGauss 2.1.0, it has the following new features:

-   Row-store execution to vectorized execution

    Row-store table queries are converted into vectorized execution plans for execution, improving the execution performance of complex queries.

-   Delay of entering the maximum availability mode

    When the maximum availability mode is enabled on the primary node and the primary node detects that the standby node exits \(for example, due to network jitter\), the primary node remains in the maximum protection mode within a specified time window. After the time window expires, the primary node enters the maximum availability mode.

-   Parallel logical decoding

    When JDBC or pg\_recvlogical is used for decoding, you can set  **parallel-decode-num**  to a value greater than 1 and less than or equal to 20 to enable parallel decoding. In this way, one read thread, multiple decoding threads, and one sending thread are used to perform logical decoding, significantly improving the decoding speed.


-   Global SysCache

    Decouples the system cache from sessions and binds them to threads to reduce the memory usage together with the thread pool feature. In addition, it is used to improve the cache hit rate and ensure stable performance.

-   Foreign key lock enhancement

    Two types of row locks are added, which are extended from share and update locks to key share, share, no key update, and update locks. A non-primary key update obtains a no key update lock, and a row lock obtained by a foreign key trigger is a key share lock. The two types of locks do not conflict with each other, thereby improving concurrency of foreign key locks.

-   Row-store table compression

    Supports row-store table compression. A general compression algorithm is provided to implement transparent compression of table and index data pages and maintenance of page storage locations to achieve high compression and high performance. Disk persistence is implemented using two types of files: compressed address file \(with the file name extension .pca\) and compressed data file \(with the file name extension .pcd\).

-   Open-source Data Studio

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

-   MySQL to openGauss migration tool Chameleon

    Chameleon is Python-based. It supports real-time data replication from MySQL to openGauss. The tool can replicate initial full data and incremental data in real time to migrate them from MySQL to openGauss.

-   Using ShardingSphere to build a distributed database

    Supports the distributed middleware ShardingSphere to provide openGauss the distributed database capability. Up to16 Kunpeng 920 nodes can be used for networking. The sharding performance is greater than 10 million tpmC.

-   Deploying a distributed database using Kubernetes

    Supports quick deployment of a distributed database. Patroni is used to implement planned switchover and automatic failover in case of faults. HAProxy is used to implement read and write load balancing between the primary and standby openGauss nodes. ShardingSphere is used to implement distributed capabilities. All functions are packaged into images and one-click deployment scripts are provided.


