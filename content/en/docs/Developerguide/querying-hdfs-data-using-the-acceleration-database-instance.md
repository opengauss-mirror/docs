# Querying HDFS Data Using the Acceleration Database Instance<a name="EN-US_TOPIC_0311524277"></a>

## Background<a name="section88355275018"></a>

In openGauss, the way to store data on local DNs is carefully designed. Partitions and column storage are used to save data scanning cost and reduce I/O. However, such design is not suitable for HDFS foreign tables, and their distribution modes and data storage locations lead to high percentage of I/O duration in the total query execution time.

A openGauss database instance has only a fixed number of DNs for execution. Therefore, it takes a long time when a large amount of data is scanned. To solve these performance problems, certain operations \(such as scan and aggregate\) are pushed to the computing resource pool so that the percentage of I/O duration in total execution time is reduced by a large number of nodes concurrently performing operations.

In this scenario, there are two database instances: client database instance and acceleration database instance. The client database instance sends some computing tasks to the acceleration database instance. The acceleration database instance returns the intermediate result to the client database instance. The two database instances work together to complete a query task.

## Prerequisites<a name="section1373120381810"></a>

To use an acceleration database instance to improve the query performance of HDFS foreign tables, you need to deploy a large-scale openGauss database instance as the acceleration database instance. This database instance and the HDFS database instance are deployed on the same physical server.

## Configuring the Client Database Instance<a name="section152213321570"></a>

1.  Configure the client database instance to access the remote Hadoop database instance by referring to  [Interconnection Configuration](interconnection-configuration.md).
2.  Perform the steps in  [Using gsql to Connect to a Database](en-us_topic_0289900019.md).
3.  Enable the computing resource pool function on a DN.

    ```
    postgres=# set acceleration_with_compute_pool = on;
    ```

4.  Create a dummy server to save the connection information of the computing resource pool.

    You need to create a dummy server in the database that uses the computing resource pool to provide various information for accessing the acceleration database instance.

    ```
    postgres=# CREATE SERVER dummy_server FOREIGN DATA WRAPPER DFS_FDW OPTIONS (address 'xx.xx.178.243:61600', username 'omm', password 'Gauss@123', dbname 'accedb', remoteservername 'acceserver', type 'dummy');
    ```

    **address**  indicates the address for connecting to the acceleration database instance. If LVS is configured for the acceleration database instance, the IP address is the IP address of LVS. Otherwise, the IP address is the IP address of a DN of the acceleration database instance.

    **username**  and  **password**  are created in the acceleration database instance and saved by the dummy server for authentication during connection to the acceleration database instance.

    **dbname**  and  **remoteservername**  are created in the acceleration database instance and saved in the dummy server, specifying where plans are pushed down and executed.

5.  Create an HDFS server to directly access the remote Hadoop database instance.

    ```
    postgres=# CREATE SERVER orc_server FOREIGN DATA WRAPPER DFS_FDW OPTIONS (address 'xx.xx.185.201:25000,xx.xx.185.203:25000',hdfscfgpath 'hdfs_cfg', type 'hdfs');
    ```

    Assume that the HDFS client configuration file is stored in  **/home/config**  on the database physical server in step 1. Therefore,  **hdfscfgpath**  is set to  **hdfs\_cfg**. Change the value as needed.

    **address**  indicates the IP addresses and port numbers of the primary and standby nodes of the HDFS database instance.

    You can create an HDFS foreign table and check whether the client database instance is successfully configured to remotely read data from HDFS.


## Configuring the Acceleration Database Instance<a name="section17347161610814"></a>

Perform the following steps to configure DN parameters of the acceleration database instance:

1.  Log in as the OS user  **omm**  to the primary node of the database.
2.  Enable the acceleration database instance function.

    ```
    gs_guc set -Z datanode -N all -I all -c "use_workload_manager=on" 
    ```

    ```
    gs_guc set -Z datanode -N all -I all -c "enable_dynamic_workload=on" 
    ```

    ```
    gs_guc set -Z datanode -N all -I all -c "enable_acceleration_cluster_wlm=on" 
    ```

3.  Set  **max\_active\_statements**  to a positive value based on the database instance hardware scale.

    ```
    gs_guc reload -Z datanode -N all -I all -c "max_active_statements=10" 
    ```

4.  Perform the steps in  [Using gsql to Connect to a Database](en-us_topic_0289900019.md).
5.  If  **query\_dop**  is set to  **1**, dynamic resource management determines the concurrency of client requests on the acceleration database instance.

    ```
    postgres=# SET query_dop = 1;
    ```

6.  Set  **[session\_timeout](en-us_topic_0289899967.md#en-us_topic_0283137371_en-us_topic_0237124696_en-us_topic_0059778664_see4820fb6c024e0aa4c56882aeae204a)**  and  **[statement\_timeout](en-us_topic_0289900775.md#en-us_topic_0283136752_en-us_topic_0237124732_en-us_topic_0059779117_se47379dd6e1c4698aa7b28b7ca9bc7fe)**  to  **0**  to avoid connection timeout for long queries.

    ```
    postgres=# SET session_timeout = 0;
    postgres=# SET statement_timeout = 0;
    ```


Set other parameters.

1.  Configure LVS.

    LVS distributes requests from the database instance to different DNs in the computing resource pool. For details about how to configure LVS, see "Software Installation \> Configuring LVS".

2.  Create a username and a password.

    The username and the password are required for the client database instance to access the computing resource pool. You need to create a user in the computing resource pool, set its password, and grant the user with the query permission.

3.  Configure the HDFS server.

    Configure the acceleration database instance to access the remote Hadoop database instance by referring to  [Interconnection Configuration](interconnection-configuration.md). These configurations are used to create the database and HDFS server in the acceleration database instance so that requests can be delivered to the acceleration database instance.

    Example:

    ```
    postgres=# CREATE DATABASE accedb;
    ```

    ```
    postgres=# \c accedb
    ```

    ```
    postgres=# CREATE SERVER acceserver FOREIGN DATA WRAPPER DFS_FDW OPTIONS (address 'xx.xx.178.239:25000,xx.xx.178.241:25000', hdfscfgpath 'hdfs_cfg', type 'hdfs');
    ```

    In the example, HDFS configuration information is saved in the  **hdfs\_cfg**  directory on the physical server of the acceleration database instance. Therefore,  **hdfscfgpath**  is set to  **hdfs\_cfg**. Change the value as needed.

    **address**  indicates the IP addresses and port numbers of the primary and standby nodes of the HDFS database instance.

    **accedb**  and  **acceserver**  are displayed when the dummy server is created in the client database instance and are used to access HDFS.

4.  Configure a DN connection range.

    Add the following content to the  **pg\_hba.conf**  file of the DN of the acceleration database instance so that the DNs of the client database instance can access the DNs of the acceleration database instance: Example:

    ```
    gs_guc set -Z datanode -N all -I all -h "host all all 0.0.0.0/0 sha256"
    gs_guc set -Z datanode -N all -I all -h "host all all 10.0.0.0/8 sha256"
    gs_guc set -Z datanode -N all -I all -h "host all all 192.168.0.0/16 sha256"
    gs_guc set -Z datanode -N all -I all -h "host all all 10.185.181.0/24 sha256"
    ```


