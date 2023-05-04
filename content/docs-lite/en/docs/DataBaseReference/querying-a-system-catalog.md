# Querying a System Catalog<a name="EN-US_TOPIC_0289900778"></a>

In addition to the created tables, a database contains many system catalogs. These system catalogs contain openGauss installation information and information about various queries and processes in openGauss. You can collect information about the database by querying system catalogs.

In [System Catalogs and System Views](system-catalogs-and-system-views.md), the description about each table indicates whether the table is visible to all users or only the initial user. To query tables that are visible only to the initial user, log in as the user.

openGauss provides the following types of system catalogs and views:

-   System catalogs and views inherited from PG

    These system catalogs and views have the prefix **PG**.

-   New system catalogs and views of openGauss

    These system catalogs and views have the prefix **GS**.


## Querying Database Tables<a name="en-us_topic_0283136670_en-us_topic_0237120304_en-us_topic_0100315815_section371043012532"></a>

For example, you can run the following command to query the **PG\_TABLES** system catalog for all tables in the **public** schema:

```
SELECT distinct(tablename) FROM pg_tables WHERE SCHEMANAME = 'public'; 
```

Information similar to the following is displayed:

```
     tablename
-------------------
 err_hr_staffs
 test
 err_hr_staffs_ft3
 web_returns_p1
 mig_seq_table
 films4
(6 rows)
```

## Viewing Database Users<a name="en-us_topic_0283136670_en-us_topic_0237120304_en-us_topic_0100315815_section522012906"></a>

You can run the **PG\_USER** command to view the list of all users in the database, and view the user ID \(**USESYSID**\) and permissions.

```
SELECT * FROM pg_user; 
```

```
 usename | usesysid | usecreatedb | usesuper | usecatupd | userepl |  passwd  | valbegin |
 valuntil |   respool    | parent | spacelimit | useconfig | nodegroup | tempspacelimit |
spillspacelimit
---------+----------+-------------+----------+-----------+---------+----------+----------+
----------+--------------+--------+------------+-----------+-----------+----------------+-
----------------
 omm     |       10 | t           | t        | t         | t       | ******** |          |
          | default_pool |      0 |            |           |           |                |
 joe     |    16806 | f           | f        | f         | f       | ******** |          |
          | default_pool |      0 |            |           |           |                |
(2 rows)
```

## Viewing and Stopping the Running Query Statements<a name="en-us_topic_0283136670_en-us_topic_0237120304_en-us_topic_0100315815_section1642584412912"></a>

You can view the running query statements in the [PG\_STAT\_ACTIVITY](pg_stat_activity.md) view. You can use the following methods:

1.  Set the parameter **track\_activities** to **on**.

    ```
    SET track_activities = on;
    ```

    The database collects the running information about active queries only if the parameter is set to **on**.

2.  View the running query statements. Run the following command to view the database names, users performing queries, query status, and the corresponding PIDs which are connected to the running query statements:

    ```
    SELECT datname, usename, state,pid FROM pg_stat_activity;
    ```

    ```
     datname  | usename | state  |       pid
    ----------+---------+--------+-----------------
     postgres | Ruby    | active | 140298793514752
     postgres | Ruby    | active | 140298718004992
     postgres | Ruby    | idle   | 140298650908416
     postgres | Ruby    | idle   | 140298625742592
     postgres | omm | active | 140298575406848
    (5 rows)
    ```

    If the **state** column is **idle**, the connection is idle and requires a user to enter a command.

    To identify only active query statements, run the following command:

    ```
    SELECT datname, usename, state FROM pg_stat_activity WHERE state != 'idle';
    ```

3.  To cancel queries that have been running for a long time, use the **PG\_TERMINATE\_BACKEND** function to end sessions based on the thread ID.

    ```
    SELECT PG_TERMINATE_BACKEND(139834759993104);
    ```

    If information similar to the following is displayed, the session is successfully terminated:

    ```
    PG_TERMINATE_BACKEND
    ----------------------
     t
    (1 row)
    ```

    If information similar to the following is displayed, a user has terminated the current session:

    ```
    FATAL:  terminating connection due to administrator command
    FATAL:  terminating connection due to administrator command
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >
    >If the **PG\_TERMINATE\_BACKEND** function is used to terminate the backend threads of the current session, the **gsql** client will be reconnected automatically rather than be logged out. The message "The connection to the server was lost. Attempting reset: Succeeded." is returned.
    >```
    >FATAL:  terminating connection due to administrator command
    >FATAL:  terminating connection due to administrator command
    >The connection to the server was lost. Attempting reset: Succeeded.
    >```
