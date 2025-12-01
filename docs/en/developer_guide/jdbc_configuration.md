# JDBC Configuration<a name="EN-US_TOPIC_0000001149627971"></a>

Currently, third-party tools related to openGauss are connected through JDBC. This section describes the precautions for configuring the tool.

## Connection Parameters<a name="section51233666102514"></a>

-   \[Notice\] When a third-party tool connects to openGauss through JDBC, JDBC sends a connection request to openGauss. By default, the following configuration parameters are added. For details, see the implementation of the ConnectionFactoryImpl class in the JDBC code.

    ```
    params = {
    { "user", user },
    { "database", database },
    { "client_encoding", "UTF8" },
    { "DateStyle", "ISO" },
    { "extra_float_digits", "3" },
    { "TimeZone",  createPostgresTimeZone() },
    };
    ```

    These parameters may cause the JDBC and  **gsql**  clients to display inconsistent data, for example, date data display mode, floating point precision representation, and timezone.

    If the result is not as expected, you are advised to explicitly set these parameters in the Java connection setting.

-   [Proposal] When the database is connected through JDBC, **extra_float_digits** is set to **3**. When the database is connected using gsql, **extra_float_digits** is set to **0**. As a result, the precision of the same data displayed in JDBC clients may be different from that displayed in gsql clients.

-   [Proposal] In precision-sensitive scenarios, the numeric type is recommended.

-   \[Proposal\] When connecting to the database through JDBC, ensure that the following three time zones are the same:
    -   Time zone of the host where the JDBC client is located
    -   Time zone of the host where the openGauss database instance is located.
    -   Time zone used during openGauss database instance configuration.

        >![](public_sys-resources/icon-note.gif) **NOTE:** 
        >For details about how to set the time zone, see "Initial Configuration \> Synchronizing System Time" in  *Installation Guide*.



## fetchsize<a name="section2864318010275"></a>

\[Notice\] To use  **fetchsize**  in applications, disable  **autocommit**. Enabling the  **autocommit**  switch makes the  **fetchsize**  configuration invalid.

## autocommit<a name="section1636443510276"></a>

\[Proposal\] You are advised to enable  **autocommit**  in the code for connecting to openGauss by the JDBC. If  **autocommit**  needs to be disabled to improve performance or for other purposes, applications need to ensure their transactions are committed. For example, explicitly commit translations after specifying service SQL statements. Particularly, ensure that all transactions are committed before the client exits.

## Connection Releasing<a name="section1577694110277"></a>

\[Proposal\] You are advised to use connection pools to limit the number of connections from applications. Do not connect to a database every time you run an SQL statement.

\[Proposal\] After an application completes its tasks, disconnect its connection to openGauss to release occupied resources. You are advised to set the session timeout interval in the jobs.

\[Proposal\] Reset the session environment before releasing connections to the JDBC connection tool. Otherwise, historical session information may cause object conflicts.

-   If GUC parameters are set in the connection, run  **SET SESSION AUTHORIZATION DEFAULT;RESET ALL;**  to clear the connection status before you return the connection to the connection pool.
-   If a temporary table is used, delete the temporary table before you return the connection to the connection pool.

## CopyManager<a name="section1624965810277"></a>

\[Proposal\] In the scenario where the ETL tool is not used and real-time data import is required, it is recommended that you use the  **CopyManager**  interface driven by the openGauss JDBC to import data in batches during application development.
