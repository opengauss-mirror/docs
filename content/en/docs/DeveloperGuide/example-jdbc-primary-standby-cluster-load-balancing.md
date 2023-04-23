# Example: JDBC Primary/Standby Cluster Load Balancing<a name="EN-US_TOPIC_0000001151910145"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:**
>In the following example, **host:port** represents a node, where **host** indicates the name or IP address of the server where the database resides, and **port** indicates the port number of the server where the database resides.


## JDBC Load Balancing Functions<a name="en-us_topic_0283136826_en-us_topic_0237120386_en-us_topic_0213179152_en-us_topic_0189251739_section8820452474"></a>

JDBC can set multiple database nodes in the URL to access the primary/standby cluster. After the load balancing parameter **autoBalance** is set in the URL, JDBC can establish the connection between the client and the primary/standby cluster on each node in the URL based on specific load balancing rules to implement load balancing.
The default value is **false**. In this case, the JDBC always connects to the same node that meets the connection setup conditions configured in the URL. When connecting to the primary/standby cluster, ensure that no write operation is performed in the service or use this parameter together with **targetServerType=slave** to restrict the client to connect only to the standby node. Currently, JDBC provides four load balancing modes: roundrobin, priority roundrobin, leastconn, and shuffle. The following provides some examples.
* **roundrobin**:
Round-robin mode, that is, JDBC connects to candidate nodes in the URL string in turn. The value can be **roundrobin**, **true**, or **balance**.
  * If a client wants to connect to the one-primary-two-standby cluster in round-robin mode and can select nodes in the cluster in turn when creating connections for multiple times, you can use the following configuration:
  ```
  jdbc:opengauss://node1,node2,node3/database?autoBalance=roundrobin
  ```
  * If a client wants to use the round-robin mode to connect only to the standby node of the one-primary-two-standby cluster and perform the read-only operation on the standby node, you can use the following configuration:
  ```
  jdbc:opengauss://node1,node2,node3/database?autoBalance=roundrobin&targetServerType=slave
  ```
  * If a client wants to use the round-robin mode to connect only to the primary node of the one-primary-two-standby cluster to prevent write operations from being routed to the standby node, you can use the following configuration:
  ```
  jdbc:opengauss://node1,node2,node3/database?autoBalance=roundrobin&targetServerType=master
  ```
* **shuffle**:
Shuffle mode, where a node in the URL string is randomly selected to establish a connection. The value is **shuffle**. The reference configuration for connecting one-primary-two-standby cluster in shuffle mode is as follows:
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=shuffle
```
* **leastconn**: The minimum connection mode, where candidate nodes are sorted based on the number of valid connections of each node. Connections are preferentially established with the node with fewer connections.
This mode collects statistics on the connections established in leastconn mode in the current cluster through the current driver and periodically checks the validity of these connections. The value is **leastconn**. The reference configuration for connecting one-primary-two-standby cluster in leastconn mode is as follows:
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=leastconn
```
* **priority roundrobin**: Round-robin mode with priorities. The connections for the first *n* candidate nodes are preferentially established. The value is **proprity[n]**, where **n** is a non-negative integer. Take the one-primary-two-standby cluster as an example. You can set the parameter as follows if a client wants to preferentially execute services on the primary node and standby node 1, and standby node 2 functions only as the standby node when other nodes are abnormal.

```
jdbc:opengauss://node1,node2,node3/database?autoBalance=priority2
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>-   JDBC load balancing identifies a cluster based on the node set specified in the URL string. If multiple URLs with the same node set and load balancing mode use the same driver to establish connections, JDBC considers the connections as connections in the same cluster and performs load balancing as a whole.
>-   JDBC supports driver-level load balancing. It balances the load of connections created in the same cluster based on the driver instead of the actual number of connections on each node in the cluster or other drivers.
>-   In leastconn mode, the heartbeat thread is enabled, and scheduled tasks such as connection validity monitoring are executed every 20 seconds. If the heartbeat thread detects that the number of cached connections in leastconn mode is 0 for two consecutive times, the heartbeat thread is disabled and the cached leastconn information is cleared.

## JDBC Quick Load Balancing Functions when Cluster Status Changes<a name="en-us_topic_0283136826_en-us_topic_0237120386_en-us_topic_0213179152_en-us_topic_0189251739_section8820452474"></a>

This function applies to the scenario where the connection pool is used to connect to the primary/standby cluster and the leastconn mode is set. The connection pool usually maintains a certain number of long-lived connections. When a node in the cluster fails, the connection pool re-creates connections on the remaining nodes. When the failed node is recovered, the connection pool has created sufficient long-lived connections on other nodes. Therefore, the newly recovered node is always idle unless some original connections are closed.
When this function is enabled, the JDBC periodically checks the status of the node configured in the URL. When detecting that a node is recovered, JDBC filters out idle connections on other nodes and closes them. After detecting that the number of cached connections decreases, the connection pool creates connections on the newly recovered node based on the leastconn mode to rebalance the cluster load. This function is used together with **enableQuickAutoBalance**, **maxIdleTimeBeforeTerminal**, **minReservedConPerCluster**, and **minReservedConPerDatanode**. The details are as follows:
* **enableQuickAutoBalance**: indicates whether to enable the JDBC quick load balancing function when the cluster changes. This function must be used together with the leastconn mode. When this parameter is set to **true** and **autoBalance** is set to **leastconn**, this function is enabled. The parameters take effect for connections.

  Value range: **"true"** or **"false"**

  Default value: **"false"**

* **maxIdleTimeBeforeTerminal**: maximum idle duration of a connection when JDBC triggers quick load balancing. When filtering idle connections, the JDBC quick load balancing function considers the connections that are in the idle state and last for a period longer than or equal to the value of **maxIdleTimeBeforeTerminal** as idle connections. These connections may be closed by the JDBC. This parameter is valid only when **autoBalance** is set to **leastconn** and **enableQuickAutoBalance** is set to **true**. The parameters take effect for connections.
  
  Unit: second.

  Value range: an integer in [0, 9223372036854775).

  Default value: **0**

* **minReservedConPerCluster**: The minimum percentage of idle connections in a cluster when JDBC triggers quick load balancing. By default, when JDBC triggers quick load balancing, all filtered idle connections are closed. If this parameter is set, JDBC reserves at least *minReservedConPerCluster*% of idle connections in the cluster when quick load balancing is triggered. This parameter takes effect for clusters. If this parameter is set for multiple URLs for which the same node is configured and the quick load balancing function is enabled, the minimum value is used.

  Value range: an integer in [0, 100].

  Default value: **0**

* **minReservedConPerDatanode**: minimum percentage of idle connections on a node when JDBC triggers quick load balancing. If this parameter is set, JDBC reserves at least *minReservedConPerDatanode*% of idle connections on each node when quick load balancing is triggered. If both **minReservedConPerDatanode** and **minReservedConPerCluster** are set for the URL string, JDBC ensures that the filtered connections to be closed meet both parameters. This parameter takes effect for clusters. If this parameter is set for multiple URLs for which the same node is configured and the quick load balancing function is enabled, the minimum value is used.

  Value range: an integer in [0, 100].

  Default value: **0**

The following is a simple case for enabling JDBC quick load balancing. You can perform the following configuration to enable the leastconn mode when the JDBC connection is established and the quick load balancing when the cluster status changes. After the functions are enabled, JDBC caches valid connections created using the URL and periodically queries the status of node 1, node 2, and node 3. When detecting that the node is recovered, JDBC filters out idle connections (idle duration > 30 seconds) from the cached connections and closes the connections. The connection pool establishes connections in leastconn mode to rebalance the number of connections in the cluster.
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=leastconn&enableQuickAutoBalance=true
```
In addition, you can set additional parameters to control the criteria for filtering idle connections and the percentage of idle connections to be closed in the cluster and on each node.
```
jdbc:opengauss://node1,node2,node3/database?autoBalance=leastconn&enableQuickAutoBalance=true&maxIdleTimeBeforeTerminal=20&minReservedConPerCluster=20&minReservedConPerDatanode=20
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>-   JDBC implements load balancing only based on the connections of the driver in the same cluster. When quick load balancing is triggered, only the connections created by the driver in a cluster and configured with corresponding parameters are disabled.
>-   To use this function, you need to adjust parameters to meet the service requirements of the client. The JDBC cannot detect whether a connection is required by the actual service. Therefore, the JDBC filters out connections that can be closed by determining idle connections. If the parameters do not match the actual service requirements, connections held by a user may be closed.
>-   When performing quick load balancing, JDBC closes some connections that meet the conditions based on the configured parameters. If most existing connections do not meet the conditions, for example, all connections are active, the quick load balancing result may be poor.
>-   The JDBC quick load balancing function enables the heartbeat thread to close idle connections by phase. Quick load balancing depends on the leastconn mode. Therefore, the mechanism for disabling this function is the same as that in the leastconn mode.
