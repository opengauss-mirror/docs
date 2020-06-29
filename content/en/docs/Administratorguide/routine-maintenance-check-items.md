# Routine Maintenance Check Items<a name="EN-US_TOPIC_0242215053"></a>

## Checking openGauss Status<a name="en-us_topic_0237088794_en-us_topic_0059778434_sec4d5eda2fa542ba9fa77a1f284812ed"></a>

openGauss provides tools to check database and instance status, ensuring that databases and instances are running properly to provide data services.

-   Check instance status.

    ```
    gs_check -U omm -i CheckClusterState
    ```

-   Check parameters.

    ```
    postgres=# SHOW parameter_name;
    ```

-   Modify parameters.

    ```
    gs_guc reload  -D /gaussdb/data/dbnode -c "paraname=value"
    ```


## Checking Lock Information<a name="en-us_topic_0237088794_en-us_topic_0059778434_s8e22677f9faf4758ad39f7d6d1dde863"></a>

The lock mechanism is an important method to ensure data consistency. Information check helps learn database transactions and database running status.

-   Query lock information in the database.

    ```
    postgres=# SELECT * FROM pg_locks;
    ```

-   Query the status of threads waiting to acquire locks.

    ```
    postgres=# SELECT * FROM pg_thread_wait_status WHERE wait_status = 'acquire lock';
    ```

-   Query the status of events waiting to acquire locks.

    ```
    postgres=# SELECT node_name, thread_name, tid, wait_status, query_id FROM pgxc_thread_wait_status WHERE wait_status = 'acquire lock';
    ```

-   Kill a system process.

    Search for a system process that is running and run the following command to end the process:

    ```
    ps ux
    kill -9 pid
    ```


## Collecting Event Statistics<a name="en-us_topic_0237088794_en-us_topic_0059778434_s6506801e729943aba510e2fe669ad8a1"></a>

Long-time running of SQL statements will occupy a lot of system resources. You can check event occurrence time and occupied memory to learn about database running status.

-   Query the time points about an event.

    Run the following command to query the thread start time, transaction start time, SQL start time, and status change time of the event:

    ```
    postgres=# SELECT backend_start,xact_start,query_start,state_change FROM pg_stat_activity;
    ```

-   Query the number of sessions on the current server.

    ```
    postgres=# SELECT count(*) FROM pg_stat_activity;
    ```

-   Collect system-level statistics.

    Run the following command to query information about the session that uses the maximum memory:

    ```
    postgres=# SELECT * FROM pv_session_memory_detail() ORDER BY usedsize desc limit 10;
    ```


## Checking Objects<a name="en-us_topic_0237088794_en-us_topic_0059778434_s8dae86ca711b4f24a076b0cffaa04b97"></a>

Tables, indexes, partitions, and constraints are key storage objects of a database. A database administrator needs to routinely maintain key information and these objects.

-   View table details.

    ```
    postgres=# \d+ table_name 
    ```

-   Query table statistics.

    ```
    postgres=# SELECT * FROM pg_statistic;
    ```

-   View index details.

    ```
    postgres=# \d+ index_name
    ```

-   Query partitioned table information.

    ```
    postgres=# SELECT * FROM pg_partition;
    ```

-   Collect statistics.

    Run the  **ANALYZE**  statement to collect related statistics on the database.

    Run the  **VACUUM**  statement to reclaim space and update statistics.

-   Query constraint information.

    ```
    postgres=# SELECT * FROM pg_constraint;
    ```


## Checking an SQL Report<a name="en-us_topic_0237088794_en-us_topic_0059778434_sb5b215f4b4a6440c97da40f66359217d"></a>

Run the  **EXPLAIN**  statement to view execution plans.

## Backing Up Data<a name="en-us_topic_0237088794_en-us_topic_0059778434_s66738f470526461eb7c137fbe0058c70"></a>

Never forget to back up data. During the routine work, the backup execution and backup data validity need to be checked to ensure data security and encryption security.

-   Export a specified user.

    ```
    gs_dump dbname -p port -f out.sql -U user_name -W password
    ```

-   Export a schema.

    ```
    gs_dump dbname -p port -n schema_name -f out.sql
    ```

-   Export a table.

    ```
    gs_dump dbname -p port -t table_name -f out.sql
    ```


## Checking Basic Information<a name="en-us_topic_0237088794_en-us_topic_0059778434_s35aa1e60db1042848a9f4f06413bcb4f"></a>

Basic information includes versions, components, and patches. Periodic database information checks and records are important for database life cycle management.

-   Check version information.

    ```
    postgres=# SELECT version();
    ```

-   Check table size and database size.

    ```
    postgres=# SELECT pg_table_size('table_name');
    postgres=# SELECT pg_database_size('database_name');
    ```


