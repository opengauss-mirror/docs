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

    Provides installation and deployment tools, instance start and stop tools, and backup and restoration tools.

-   Security management

    Supports SSL network connections, user permission management, password management, security auditing, and other functions, to ensure data security at the management, application, system, and network layers.


## New Features<a name="en-us_topic_0283136327_section383172195410"></a>

openGauss 1.1.0 is an updated version of openGauss 1.0.0. Features and functions of this version are compatible with those of the previous version. The new features are as follows:

-   Supports LIST partition and HASH partition.
    -   The list partitioning function divides the key values in the records to be inserted into a table into multiple lists \(the lists do not overlap in different partitions\) based on a column of the table, and then creates a partition for each list to store the corresponding data.
    -   The hash partitioning function uses the internal hash algorithm to divide records to be inserted into a table into partitions based on a column of the table. If you specify the  **PARTITION**  parameter when running the  **CREATE TABLE**  statement, data in the table will be partitioned.

-   Supports equal-value query in a fully-encrypted database.

    A fully-encrypted database is a database system dedicated to processing ciphertext data. Data is encrypted and stored in the database server. The database supports retrieval and calculation of ciphertext data and inherits the original database capabilities related to query tasks, including the lexical parsing, syntax parsing, execution plan generation, transaction consistency assurance, and storage. The performance deterioration does not exceed 10% compared with that of non-encrypted computing.

-   Enhances primary/standby HA.
    -   Supports the cascaded standby node which replicates logs from the standby node to reduce the service processing pressure of the primary node.
    -   Scales the number of standby nodes to 8 nodes.
    -   Supports the  **catchup2normal\_wait\_time **parameter configuration. After the standby node starts and establishes a connection with the primary node, it is in log catchup mode. If the difference between logs that are caught up is less than the value of  **catchup2normal\_wait\_time**, the standby node is changed to synchronous mode.
    -   Supports non-synchronization of configuration files. The configuration parameters of primary and standby nodes vary according to the specifications of hardware where nodes are deployed. Therefore, the original synchronization function is modified and you do not have to synchronize parameter configuration files between the primary and standby nodes.

-   Expands the data type compatibility.

    Both char and varchar are compatible with PostgreSQL mode. When the length is calculated, the length of the character instead of the length of the byte is returned.

-   Adds monitoring dimensions.

    Monitors the  **sort&hash**  information about  **work\_mem **in the view returned by  **get\_instr\_unique\_sql\(\)**.

    Adds the  **WAIT\_EVENT\_WAL\_BUFFER\_ACCESS **and  **WAIT\_EVENT\_WAL\_BUFFER\_FULL **wait events to the  **get\_instr\_wait\_event **view to monitor  **wal\_buffer**.  **WAIT\_EVENT\_WAL\_BUFFER\_ACCESS **counts the number of times that the WAL buffer is accessed. \(In consideration of performance, the access duration is not measured.\)  **WAIT\_EVENT\_WAL\_BUFFER\_FULL **collects statistics on the number of access times and access duration when the WAL buffer is full.

-   Enhances AI.

    Automatically recommends proper indexes for simple queries based on the access conditions of SQL statements.

-   Supports PL/Python.

    Supports the Python language as the SQL programming language.

-   **gs\_basebackup **supports standby node backup.

    **gs\_basebackup **can back up data from the standby node to reduce the service processing pressure of the primary node.

-   Refines permission management models.

    Supports DDL permission granting and revoking.

-   Rebuilds autonomous transactions.

    Rebuilds the inter-process communication method used by the original autonomous transaction implementation to the inter-thread communication method, which is simpler.

-   Rebuilds parallel queries.

    Rebuilds a unified parallel framework to replace the original parallel query framework and the distributed cross-node parallel query framework.

-   Supports interval partition.

    Automatically creates partitions at a specified interval when the data inserted into a table in the database exceeds the existing range partition.

-   Supports the sysdate data type.

    Sysdate returns the current date and time, which are the time zone and time of the Linux OS on a host machine where the database is located.

-   Supports standby node adding or deleting.

    Provides the OM tool to support online scale-out and scale-in of standby nodes which can be dynamically added or deleted without affecting services.

-   Supports multiple Python versions.

    On CentOS, the database installation depends on Python 3.6. The released 1.1.0 version can be installed in Python 3.7. You can also build third-party libraries based on the specified Python 3._\* _version to adapt to more Python versions.

-   Supports adding an index online.

    Uses the  **create index concurrently**  syntax to create indexes online without blocking DML.

-   Provides the upgrade tool.

    Supports the upgrade from 1.0.1 to 1.1.0.

-   Decouples installation from the OM tool.

    The OM tool is decoupled from the database kernel in the 1.1.0 version:

    1.  The OM tool is stored in the openGauss-OM repository which will be used to manage the OM tool code.

    2.  The OM tool and kernel are packaged separately. You can place the images of the OM tool and kernel in the same directory and use the OM tool to install them. The installation method remains unchanged. If only the kernel is concerned, you can decompress the kernel image and run it separately.


