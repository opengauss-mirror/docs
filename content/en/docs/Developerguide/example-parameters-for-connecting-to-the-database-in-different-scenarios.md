# Example: Parameters for Connecting to the Database in Different Scenarios<a name="EN-US_TOPIC_0000001151910145"></a>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>In the following example,  **host:port**  represents a node, where  **host**  indicates the name or IP address of the server where the database resides, and  **port**  indicates the port number of the server where the database resides.

## DR<a name="section06783811495"></a>

A customer has two database instances. Database instance A is the production database instance, and database instance B is the DR database instance. When the customer performs a DR switchover, database instance A is demoted to the DR database instance, and database instance B is promoted the production database instance. In this case, to avoid application restart or re-release caused by modifications on the configuration file, the customer can write database instances A and B to the connection string when initializing the configuration file. If the primary database instance cannot be connected, the driver attempts to connect to the DR database instance. For example, database instance A consists of  _node1_,  _node2_, and  _node3_, and database instance B consists of  _node4_,  _node5_, and  _node6_.

The URL can be configured as follows:

```
jdbc:opengauss://node1,node2,node3,node4,node5,node6/database?priorityServers=3
```

## Load Balancing<a name="section21559251497"></a>

A customer has a centralized database instance that consists of one primary node and two standby nodes, that is,  _node1_,  _node2_, and  _node3_.  _node1_  is the primary node, and  _node2_  and  _node3_  are the standby nodes.

If the customer wants to evenly distribute the connections established on the same application to three nodes, the URL can be configured as follows:

```
jdbc:opengauss://node1,node2,node3/database?loadBalanceHosts=true
```

>![](public_sys-resources/icon-caution.gif) **CAUTION:** 
>When  **loadBalanceHosts**  is used, if the connection is established on the standby DN, write operations cannot be performed. If read and write operations are required, do not set this parameter.

## Log Diagnosis Scenario<a name="section179211561507"></a>

If a customer encounters slow data import or some errors that are difficult to analyze, the trace log function can be enabled for diagnosis. The URL can be configured as follows:

```
jdbc:opengauss://node1/database?loggerLevel=trace&loggerFile=jdbc.log
```

## High Performance<a name="section154591017145016"></a>

A customer may execute the same SQL statement for multiple times with different input parameters. To improve the execution efficiency, the  **prepareThreshold**  parameter can be enabled to avoid repeatedly generating execution plans. The URL can be configured as follows:

```
jdbc:opengauss://node1/database?prepareThreshold=5
```

A customer queries 10 million data records at a time. To prevent memory overflow caused by simultaneous return of the data records, the  **defaultRowFetchSize**  parameter can be used. The URL can be configured as follows:

```
jdbc:opengauss://node1/database?defaultRowFetchSize=50000
```

A customer needs to insert 10 million data records in batches. To improve efficiency, the  **batchMode**  parameter can be used. The URL can be configured as follows:

```
jdbc:opengauss://node1/database?batchMode=true
```

## Case Conversion<a name="section588403715355"></a>

In the Oracle database, metadata is stored in uppercase letters by default. In the GaussDB, metadata is stored in lowercase letters by default. Therefore, after the metadata is migrated from Oracle to GaussDB, the uppercase letters changes to lowercase letters. If the original service involves the processing of uppercase metadata, you can enable this parameter. However, you are advised to modify the service code instead of using this method to solve the problem. If you have to use this function, ensure that the metadata in the current database is in lowercase to avoid problems.

```
jdbc:opengauss://node1/database?uppercaseAttributeName=true
```

The APIs involved in DatabaseMetaData can be directly invoked based on input parameters. The methods of using the APIs involved in ResultSetMetaData are as follows:

```
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("select * from test_supper");
ResultSetMetaData rsmd = rs.getMetaData();
for (int i = 1; i <= rsmd.getColumnCount(); i++) {
    System.out.println(rsmd.getColumnLabel(i) + "   " + rsmd.getColumnName(i));
}
```

