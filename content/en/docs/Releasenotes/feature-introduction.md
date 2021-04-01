# Feature Introduction<a name="EN-US_TOPIC_0289899195"></a>

-   Standard SQLs

    Supports SQL92, SQL99, SQL2003, and SQL2011 standards, GBK and UTF-8 character sets, SQL standard functions and analytic functions, and SQL Procedural Language.

-   Database storage management

    Supports tablespaces where different tables can be stored in different locations.

-   Primary/standby deployment

    Supports the ACID properties, single-node fault recoveries, primary/standby data synchronization, and primary/standby switchover.

-   APIs

    Supports standard JDBC 4.0 and ODBC 3.5 features.

-   Management tools

    Provides the installation and deployment tool, instance start and stop tool, backup and restoration tool, scale-out and scale-in tool, and upgrade tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.

-   AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecasting, and exception monitoring; compatible with the MADlib ecosystem and supports high-performance AI algorithms in the library.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

This version is openGauss 2.0.0 Release. Compared with 1.1.0, this version has the following new features:

-   Simplified Installation

    The Simplified Installation does not contain cluster management tools, provides binary files of the database kernel, can quickly start the database instance, simple installation and configuration, suitable for individual developers.

-   Delayed standby databases

    Delays the time for a standby node to replay XLOG records, compared with the primary node.

-   Logical replication of standby nodes

    Supports logical decoding on a standby node,this can reduce host pressure

-   Enhanced capacity expansion tool

    Optimizes the scale-out tool to support online scale-out without interrupting services and allows the standby node to be scaled out as a cascaded standby node.

-   Gray upgrade

    Optimizes the upgrade tool and support business online upgrade. Currently, only the gray upgrade from version 1.1.0 to 2.0.0 is supported.

-   Backup machine IO write amplification optimization

    Optimize the IO of the standby machine, smooth the IO volume of the standby machine checkpoint brushing, and solve the problem that the large amount of standby machine IO affects the query performance.

-   WDR diagnostic report adds database operation indicators

    Adds four database running metrics: Effective CPU, WalWrite NoWait, Soft Parse, and Non-Parse CPU.

-   Features of the Data Studio client tool

    Data Studio supports multiple features of the openGauss kernel. The details are as follows:

    -   The pldebugger debugging function is added.
    -   The rollback of the pldebugger debugging function is added. Before using Data Studio for debugging, add an option to ensure that the debugging function is rolled back after data is modified.
    -   The XML and serial types are supported. Columns are added to the table. The column type can be XML or serial\(big|normal|small\).
    -   Foreign table objects can be created and displayed in Data Studio.
    -   The partial\_cluster\_key constraint of column-store tables is supported.
    -   Global temporary tables support DDL display and export.
    -   The LOCAL and GLOBAL flags are supported when a partitioned table is created.
    -   The MOT table is displayed.


