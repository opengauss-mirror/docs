# Quick Start

-   [Learning Product Knowledge](learning-product-knowledge.md)
    -   [Product Features](product-features.md)
    -   [Software Architecture](software-architecture.md)
    -   [Typical Networking](typical-networking.md)

-   [Preparing for Installation](preparing-for-installation.md)
    -   [Installation Process](installation-process.md)
    -   [Obtaining and Verifying an Installation Package](obtaining-and-verifying-an-installation-package.md)
    -   [Preparing the Software and Hardware Installation Environment](preparing-the-software-and-hardware-installation-environment.md)
        -   [Software and Hardware Requirements](software-and-hardware-requirements.md)
        -   [Modifying OS Configuration](modifying-os-configuration.md)
            -   [Disabling the OS Firewall](disabling-the-os-firewall.md)
            -   [Setting Character Set Parameters](setting-character-set-parameters.md)
            -   [Setting the Time Zone and Time](setting-the-time-zone-and-time.md)
            -   [Disabling the Swap Memory](disabling-the-swap-memory.md)
            -   [Setting the NIC MTU](setting-the-nic-mtu.md)

        -   [Setting Remote Login of User root](setting-remote-login-of-user-root.md)

    -   [Installation User and User Group](installation-user-and-user-group.md)

-   [Installing the openGauss](installing-the-opengauss.md)
    -   [Creating a Configuration File](creating-a-configuration-file.md)
        -   [Configuring the Database Name and Directories](configuring-the-database-name-and-directories.md)
        -   [Configuring the Basic Host Information](configuring-the-basic-host-information.md)
        -   [Configuring Primary Database Node Information](configuring-primary-database-node-information.md)
        -   [Examples](examples.md)
            -   [Configuration File for Single-Instance Deployment](configuration-file-for-single-instance-deployment.md)
            -   [Configuration File for Primary/Secondary Deployment ](configuration-file-for-primary-secondary-deployment.md)


    -   [Initializing the Installation Environment](initializing-the-installation-environment.md)
        -   [Creating the Required User Account and Configuring the Installation Environment](creating-the-required-user-account-and-configuring-the-installation-environment.md)
        -   [Establishing Mutual Trust Manually](establishing-mutual-trust-manually.md)
        -   [Configuring OS Parameters](configuring-os-parameters.md)

    -   [Executing Installation](executing-installation.md)
    -   [\(Optional\) Setting the Standby Node to Readable]((optional)-setting-the-standby-node-to-readable.md)
    -   [Verifying the Installation](verifying-the-installation.md)
        -   [Checking the Health Status](checking-the-health-status.md)

    -   [Initial Configuration](initial-configuration.md)
        -   [Configuring the Locale and Character Set](configuring-the-locale-and-character-set.md)


-   [Using openGauss](using-opengauss.md)
    -   [Configuring openGauss Parameters](configuring-opengauss-parameters.md)
        -   [Setting a Client Authentication Policy](setting-a-client-authentication-policy.md)
        -   [Configuring Parameters in Configuration Files](configuring-parameters-in-configuration-files.md)

    -   [Using the gsql Client for Connection](using-the-gsql-client-for-connection.md)
        -   [Confirming Connection Information](confirming-connection-information.md)
        -   [Connecting to a Database Locally](connecting-to-a-database-locally.md)
        -   [Connecting to a Database Remotely](connecting-to-a-database-remotely.md)
            -   [Configuring a Whitelist Using gs\_guc](configuring-a-whitelist-using-gs_guc.md)
            -   [Installing the gsql Client and Connecting to a Database](installing-the-gsql-client-and-connecting-to-a-database.md)


    -   [Simple Data Management](simple-data-management.md)
        -   [Creating a Database](creating-a-database.md)
        -   [Creating a Table](creating-a-table.md)
        -   [Viewing Objects](viewing-objects.md)

    -   [Simple Permission Management](simple-permission-management.md)
        -   [Creating a Role](creating-a-role.md)
        -   [Creating a User](creating-a-user.md)
        -   [Granting Permissions](granting-permissions.md)

    -   [Executing SQL Statements Using the Client Tool](executing-sql-statements-using-the-client-tool.md)
        -   [Executing an SQL Statement](executing-an-sql-statement.md)
        -   [Executing Files in Batches](executing-files-in-batches.md)

    -   [Executing SQL Statements Using JDBC](executing-sql-statements-using-jdbc.md)
        -   [JDBC Package and Driver Class](jdbc-package-and-driver-class.md)
        -   [Loading the Driver](loading-the-driver.md)
        -   [Connecting to a Database](connecting-to-a-database.md)
        -   [Examples](examples-0.md)


-   [Configuring Running Parameters](configuring-running-parameters.md)
    -   [Viewing Parameter Values](viewing-parameter-values.md)
    -   [Resetting Parameters](resetting-parameters.md)

-   [GUC Parameters](guc-parameters.md)
    -   [GUC Parameter Usage](guc-parameter-usage.md)
    -   [File Location](file-location.md)
    -   [Connection and Authentication](connection-and-authentication.md)
        -   [Connection Settings](connection-settings.md)
        -   [Security and Authentication \(postgresql.conf\)](security-and-authentication-(postgresql-conf).md)
        -   [Communication Library Parameters](communication-library-parameters.md)

    -   [Resource Consumption](resource-consumption.md)
        -   [Memory](memory.md)
        -   [Disk Space](disk-space.md)
        -   [Kernel Resource Usage](kernel-resource-usage.md)
        -   [Cost-based Vacuum Delay](cost-based-vacuum-delay.md)
        -   [Background Writer](background-writer.md)
        -   [Asynchronous I/O Operations](asynchronous-i-o-operations.md)

    -   [Parallel Data Import](parallel-data-import.md)
    -   [Write Ahead Log](write-ahead-log.md)
        -   [Settings](settings.md)
        -   [Checkpoints](checkpoints.md)
        -   [Log Replay](log-replay.md)
        -   [Archiving](archiving.md)

    -   [HA Replication](ha-replication.md)
        -   [Sending Server](sending-server.md)
        -   [Primary Server](primary-server.md)
        -   [Standby Server](standby-server.md)

    -   [Query Planning](query-planning.md)
        -   [Optimizer Method Configuration](optimizer-method-configuration.md)
        -   [Optimizer Cost Constants](optimizer-cost-constants.md)
        -   [Genetic Query Optimizer](genetic-query-optimizer.md)
        -   [Other Optimizer Options](other-optimizer-options.md)

    -   [Error Reporting and Logging](error-reporting-and-logging.md)
        -   [Logging Destination](logging-destination.md)
        -   [Logging Time](logging-time.md)
        -   [Logging Content](logging-content.md)
        -   [Using CSV Log Output](using-csv-log-output.md)

    -   [Alarm Detection](alarm-detection.md)
    -   [Statistics During the Database Running](statistics-during-the-database-running.md)
        -   [Query and Index Statistics Collector](query-and-index-statistics-collector.md)
        -   [Performance Statistics](performance-statistics.md)

    -   [Load Management](load-management.md)
    -   [Automatic Vacuuming](automatic-vacuuming.md)
    -   [Default Settings of Client Connection](default-settings-of-client-connection.md)
        -   [Statement Behavior](statement-behavior.md)
        -   [Zone and Formatting](zone-and-formatting.md)
        -   [Other Default Parameters](other-default-parameters.md)

    -   [Lock Management](lock-management.md)
    -   [Version and Platform Compatibility](version-and-platform-compatibility.md)
        -   [Compatibility with Earlier Versions](compatibility-with-earlier-versions.md)
        -   [Platform and Client Compatibility](platform-and-client-compatibility.md)

    -   [Fault Tolerance](fault-tolerance.md)
    -   [Connection Pool Parameters](connection-pool-parameters.md)
    -   [openGauss Transaction](opengauss-transaction.md)
    -   [Developer Options](developer-options.md)
    -   [Auditing](auditing.md)
        -   [Audit Switch](audit-switch.md)
        -   [User and Permission Audit](user-and-permission-audit.md)
        -   [Operation Auditing](operation-auditing.md)

    -   [Upgrade Parameters](upgrade-parameters.md)
    -   [Miscellaneous Parameters](miscellaneous-parameters.md)
    -   [Wait Events](wait-events.md)
    -   [Query](query.md)
    -   [System Performance Snapshot](system-performance-snapshot.md)

-   [FAQs](faqs.md)
    -   [What Should I Do If Mutual Trust Between Nodes in openGauss Is Lost?](what-should-i-do-if-mutual-trust-between-nodes-in-opengauss-is-lost.md)


