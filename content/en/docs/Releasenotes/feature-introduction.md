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

    Provides the installation and deployment tool, instance start and stop tool, backup and restoration tool, scale-out and scale-in tool, and upgrade tool.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.

-   AI

    Supports parameter self-tuning, slow SQL discovery, single query index recommendation, virtual index, workload index recommendation, database metric collection, forecasting, and exception monitoring; compatible with the MADlib ecosystem and supports high-performance AI algorithms in the library.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

Compared with 2.0.0, openGauss 2.0.1 has the following new features:

-   Archiving Xlogs on the standby node

    Supports archiving of Xlogs on the standby node to reduce the I/O pressure on the primary node.

-   Enhancing the intelligent index recommendation capability
    -   Obtains service sequence numbers in pg\_log.

        Provides the function of extracting pg\_log service sequence numbers to enhance the availability of workload-level index recommendation.

    -   Enhances the virtual index function.

        Adds the filtering scenario where the virtual index is the same as the original index.



