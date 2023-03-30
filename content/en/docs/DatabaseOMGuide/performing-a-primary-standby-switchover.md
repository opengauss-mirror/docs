# Performing a Primary/Standby Switchover<a name="EN-US_TOPIC_0289896999"></a>

## Scenarios<a name="en-us_topic_0283140544_en-us_topic_0237088791_en-us_topic_0141661468_en-us_topic_0138952674_en-us_topic_0085032066_en-us_topic_0059779253_s96a1309d1288457e8d608dbb445140ff"></a>

During openGaussdatabase  running, the database administrator needs to manually perform an primary/standby switchover on the database node. For example, after a primary/standby database node failover, you need to restore the original primary/standby roles, or you need to manually perform a primary/standby switchover due to a hardware fault.  A cascaded standby server cannot be directly switched to a primary server. You must perform a switchover or failover to change the cascaded standby server to a standby server, and then to a primary server.

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>-   The primary/standby switchover is a maintenance operation. Ensure that the openGaussdatabase  is normal and perform the switchover after all services are complete.
>-   When the ultimate RTO is enabled, cascaded standby servers are not supported. The standby server cannot be connected when the ultimate RTO is enabled. As a result, the cascaded standby server cannot synchronize data.

## Procedure<a name="en-us_topic_0283140544_en-us_topic_0237088791_section109254251128"></a>

1.  Log in to any database node as the OS user  **omm**  and run the following command to check the primary/standby status:

    ```
    gs_om -t status --detail
    ```

2.  Log in to the standby node to be switched to the primary node as the OS user  **omm**  and run the following command:

    ```
    gs_ctl switchover -D /home/omm/cluster/dn1/
    ```

    **/home/omm/cluster/dn1/**  is the data directory of the standby database node.

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >For the same database, you cannot perform a new primary/standby switchover if the previous switchover has not completed. If a switchover is performed when the host thread is processing services, the thread cannot stop, and switchover timeout will be reported. Actually, the switchover is ongoing in the background and will complete after the thread finishes service processing and stops. For example, when a host is deleting a large partitioned table, it may fail to respond to the switchover request.

3.  After the switchover is successful, run the following command to record the information about the current primary and standby nodes:

    ```
    gs_om -t refreshconf
    ```


## Examples<a name="en-us_topic_0283140544_en-us_topic_0237088791_en-us_topic_0059779253_sf72decb8d5ab4d65a5fb55e46b20257f"></a>

Run the following command to switch the standby database instance to the primary database instance:

1. Queries database status.

```
gs_om -t status --detail

[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
current_az      : AZ_ALL

[  Datanode State   ]

    node             node_ip         port      instance                            state
--------------------------------------------------------------------------------------------------
1  pekpopgsci00235  10.244.62.204    5432      6001 /home/wuqw/cluster/dn1/   P Primary Normal
2  pekpopgsci00238  10.244.61.81     5432      6002 /home/wuqw/cluster/dn1/   S Standby Normal
```

```
gs_om -t status --detail
[  CMServer State   ]

node      node_ip         instance                                 state
--------------------------------------------------------------------------
1  host40 10.243.40.20    1    /usr1/cm_gauss/cluster/cm/cm_server Primary
2  host39 10.243.39.8     2    /usr1/cm_gauss/cluster/cm/cm_server Standby
3  host15 10.243.15.65    3    /usr1/cm_gauss/cluster/cm/cm_server Standby

[    ETCD State     ]

node      node_ip         instance                         state
------------------------------------------------------------------------
1  host40 10.243.40.20    7001 /usr1/cm_gauss/cluster/etcd StateFollower
2  host39 10.243.39.8     7002 /usr1/cm_gauss/cluster/etcd StateFollower
3  host15 10.243.15.65    7003 /usr1/cm_gauss/cluster/etcd StateLeader

[   Cluster State   ]

cluster_state   : Normal
redistributing  : No
balanced        : Yes
current_az      : AZ_ALL

[  Datanode State   ]

node      node_ip         instance                        state            | node      node_ip         instance                        state            | node      node_ip         instance                        state
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1  host40 10.243.40.20    6001 /usr1/cm_gauss/cluster/dn1 P Primary Normal | 2  host39 10.243.39.8     6002 /usr1/cm_gauss/cluster/dn1 S Standby Normal | 3  host15 10.243.15.65    6003 /usr1/cm_gauss/cluster/dn1 S Standby Normal

```

2. Log in to the standby node and perform a primary/standby switchover. In addition, after a cascaded standby node is switched over, the cascaded standby server becomes a standby server, and the original standby server becomes a cascaded standby server.

```
gs_ctl switchover -D /home/wuqw/cluster/dn1/
[2020-06-17 14:28:01.730][24438][][gs_ctl]: gs_ctl switchover ,datadir is -D "/home/wuqw/cluster/dn1"
[2020-06-17 14:28:01.730][24438][][gs_ctl]: switchover term (1)
[2020-06-17 14:28:01.768][24438][][gs_ctl]: waiting for server to switchover............
[2020-06-17 14:28:11.175][24438][][gs_ctl]: done
[2020-06-17 14:28:11.175][24438][][gs_ctl]: switchover completed (/home/wuqw/cluster/dn1)
```

3. Save the information about the primary and standby nodes in the database.

```
gs_om -t refreshconf
Generating dynamic configuration file for all nodes.
Successfully generated dynamic configuration file.
```

## Troubleshooting<a name="en-us_topic_0283140544_en-us_topic_0237088791_en-us_topic_0059779253_s24c0d0766ecf46f1b90899bb6298d45b"></a>

If a switchover fails, troubleshoot the problem according to the log information. For details, see  [Log Reference](log-reference.md).

## Exception Handling<a name="en-us_topic_0283140544_en-us_topic_0237088791_en-us_topic_0059779253_seda6113ac28b46249907b9327a653307"></a>

Exception handling rules are as follows:

-   A switchover takes a long time under high service loads. In this case, no further operation is required.
-   When standby nodes are being built, a primary node can be demoted to a standby node only after sending logs to one of the standby nodes. As a result, the primary/standby switchover takes a long time. In this case, no further operation is required. However, you are not advised to perform a primary/standby switchover during the build process.
-   During a switchover, due to network faults and high disk usage, it is possible that the primary and standby instances are disconnected, or two primary nodes exist in a single pair. In this case, perform the following steps:

    >![](public_sys-resources/icon-warning.gif) **WARNING:** 
    >After two primary nodes appear, perform the following steps to restore the normal primary/standby state: Otherwise, data loss may occur.


1.  Run the following commands to query the current instance status of the database:

    ```
    gs_om -t status --detail
    ```

    The query result shows that the status of two instances is  **Primary**, which is abnormal.

2.  Determine the node that functions as the standby node and run the following command on the node to stop the service:

    ```
    gs_ctl stop -D /home/omm/cluster/dn1/
    ```

3.  Run the following command to start the standby node in standby mode:

    ```
    gs_ctl start -D /home/omm/cluster/dn1/ -M standby
    ```

4.  Save the information about the primary and standby nodes in the database.

    ```
    gs_om -t refreshconf
    ```

5.  Check the database status and ensure that the instance status is restored.

