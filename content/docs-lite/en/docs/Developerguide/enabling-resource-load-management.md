# Enabling Resource Load Management<a name="EN-US_TOPIC_0000001193794331"></a>

## Background<a name="section4704103619115"></a>

This section describes how to configure parameters for resource load management.

## Prerequisites<a name="section102673333318"></a>

-   In openGauss, you can manage system resources only as a database administrator. Run the following statement to query user permissions:

    ```
    openGauss=# SELECT rolname FROM pg_roles WHERE rolsystemadmin = 't';
     rolname
    ---------
     omm
     Jack
    (2 rows)
    ```


-   Resource load management can be applied only to users with the login permission. Run the following statement to query user permissions:

    ```
    openGauss=# SELECT rolname FROM pg_roles WHERE rolcanlogin = 't';
     rolname
    ---------
     omm
    (1 row)
    ```


>![](public_sys-resources/icon-notice.gif) **NOTICE:** 
>If a user's login permission is revoked, the user's resource pool will be changed to  **default\_pool**. For details about  **default\_pool**, see  [Table 2](creating-a-resource-pool.md#en-us_topic_0066854608_table57723085173126).

## Procedure<a name="section344124715313"></a>

You can perform the following steps only as a database administrator to enable load management based on the resource pool. The following uses user  **omm**  as an example.

1.  Log in as the OS user  **omm**  to the primary node of openGauss.
2.  Enable the Cgroup function.

    ```
    gs_guc reload -Z datanode -D /gaussdb/data/datanode -c "enable_control_group=on"
    ```

3.  Enable resource pool–based load management.

    ```
    gs_guc set -Z datanode -D /gaussdb/data/datanode -c "use_workload_manager=on" 
    ```

4.  Enable resident backend thread control for the database.

    ```
    gs_guc set -Z datanode -D /gaussdb/data/datanode -c "enable_backend_control=on" 
    ```

5.  Enable control over the autoVacuumWorker thread among the resident backend threads for the database.

    ```
    gs_guc set -Z datanode -D /gaussdb/data/datanode -c "enable_vacuum_control=on"
    ```

6.  Restart the database for the parameter settings to take effect.

    ```
    gs_ctl restart -D /gaussdb/data/datanode
    ```


