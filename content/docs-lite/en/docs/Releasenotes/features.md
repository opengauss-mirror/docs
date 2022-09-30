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

    Supports SSL network connections, user permission management, password management, security auditing, fine-grained ANY permission control, and other functions, to ensure data security at the management, application, system, and network layers.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This section describes the lite edition of openGauss 3.1.0 Compared with openGauss 3.0.0, it has the following new features:

-   The performance of basic operators is improved.
    -   The accuracy and performance of the new selection rate model in typical scenarios are improved by 1X.
    -   The performance of the partitioned table page is improved by 20% in typical scenarios.
    -   The performance of the Partition Iterator operator is improved by 5% in typical scenarios.
    -   The function dependency feature supports multi-column query, improving the accuracy by 1X in typical scenarios.
    -   The performance of the SeqScan operator is improved by 10% in typical scenarios.

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

-   Publication-subscription is supported.

    The light edition supports the publication-subscription function for the first time. This feature is implemented based on logical replication. One or more subscribers can subscribe to one or more publications on a publisher node. The subscriber pulls data from the publications they subscribe to. Data across database clusters can be synchronized in real time.

    -   Publication-subscription can synchronize basic data. Before a publication-subscription relationship is created, data already exists in the table of the publisher. The basic data is synchronized to the subscriber after the subscription is created.
    -   gs\_probackup can be used to back up the logical replication slot of the publisher. In this way, the replication slot is not lost after the publisher uses gs\_probackup to back up and restore data, ensuring that the publication-subscription connections are normal.

-   Middleware: integrates OpenLookeng to provide distributed OLAP capabilities.

    The distributed analysis capability is implemented based on OpenLookeng. OpenLookeng reuses the sharding capability of the ShardingSphere middleware so that OpenLookeng can obtain openGauss data for analysis and calculation. It combines the distributed OLTP capability formed by ShardingSphere and openGauss to form the distributed HTAP capability.

-   Toolchain: MySQL full migration supports parallel migration, improving full migration performance.

    Table-level parallel migration is supported to improve the MySQL full migration performance.

-   Toolchain: MySQL incremental migration supports transaction-level parallel consumption, improving incremental migration performance.

    The open-source third-party software **mysql-binlog-connector-java** is used to parse the **binlog** of the MySQL database. Based on the principle of parallel replication between the primary and standby MySQL databases, multiple threads are used to replay parallel transactions on openGauss to implement online migration from the MySQL database to openGauss.

-   Toolchain: The data verification based on the Merkle tree is supported.

    A real-time data verification tool based on the Merkle tree is implemented. When MySQL data is migrated to openGauss, full and incremental verification of source and target data is supported.

-   Toolchain: Migration from openGauss to MySQL is supported, meeting MySQL reverse migration requirements.

    This feature is implemented based on logical replication of openGauss. Logical replication is enabled on openGauss, JDBC is used to obtain logical decoding, SQL parsing is performed on the logical decoding, and multi-thread concurrent migration is performed to migrate user data from MySQL to openGauss and ensure two databases run concurrently or escape after migration.
