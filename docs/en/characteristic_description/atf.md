# openGauss Application Transparent Failover (ATF)

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-09-06T11:05:59.987Z pushedAt=2026-09-22T11:12:32.618Z -->

## Availability

This feature has been available since openGauss 7.0.0.

## Feature Overview

Application Transparent Failover (ATF) technology focuses on cluster-deployed databases. When a single database node fails (for example, due to power loss, network failure, or storage failure), the services on that node are transparently transferred to another healthy node. Customer applications are unaware of the failure; they only perceive a brief slowdown in services, without any error handling logic.

## Customer Benefits

1. **Zero-interruption business awareness**: When a node fails, services are automatically transferred, applications report no errors and require no fault-tolerance logic changes, reducing development and O&M costs.
2. **High availability assurance**: The failover process is transparent, significantly shortening service unavailability time and improving the overall reliability of the database cluster.
3. **Low intrusiveness**: No application code modification is required; the feature can be enabled through configuration only, adapting to rapid upgrades of existing services.

## Feature Description

ATF provides openGauss clusters with **transaction-level transparent recovery under node failures**. Relying on the cluster management component CM, it caches SQL and snapshots through the JDBC driver, blocks new transactions on the database side, and replays to rebuild sessions and transactions after a failure, achieving seamless switchover.

- Supports **unplanned failover**, automatically detecting node failure and switching to an available node.
- Supports SSL-encrypted connections, ensuring secure communication between ATF components, applications, and the database.
- Provides configurable reconnection policies and cache parameters to accommodate different business performance requirements.

## Feature Enhancements

None.

## Feature Constraints

When using the ATF feature, applications must pay close attention to the ATF feature constraints. When ATF automatically reconnects and restores a session, it currently supports restoring only GUC parameters; other session-level states are not yet supported for restoration. In addition, replaying transactions may cause certain irreversible operations to be executed repeatedly (such as writing files).

### GUC Parameter Support Policy

- For applications, only the USERSET and SUSET types need to be considered. In principle, if setting a parameter value supports overriding the previous setting, ATF can support inheritance.

### SQL Syntax Support Policy

Because SQL involves many parameters, tables, and functions that cannot be listed one by one, the general principles for SQL supported by the ATF feature are provided here. ATF does not support the following cases:

- Transactions that do not satisfy two-phase locking;
- Operations that do not write logs or cannot be synchronized to the standby node (for example, operations involving temporary tables or unlogged tables);
- Operations involving cross-transaction behavior (for example, cross-transaction cursors, online DDL, and REINDEX);
- Operations involving randomness or depending on the current time;
- Operations involving file I/O, especially file-writing operations (for example, COPY and LOAD DATA).

## Dependencies

- Depends on an openGauss **database cluster with CM**. ATF cannot be used if CM is not deployed.
- Depends on a **JDBC driver** that supports ATF. The parameter must be enabled in the connection string.

## Basic Principles

Under normal conditions, the client executes SQL statements through the JDBC driver. The driver sends requests to the primary node, and after the database finishes execution, it returns the snapshot of the SQL statement to the driver. The driver caches the executed SQL statements and their snapshots and other information. When a database fault occurs, transaction recovery is required, which consists of three phases:

1. Primary/standby switchover phase: When the primary node fails, the driver enters a waiting state until the standby node is promoted to primary.
2. Recovery phase: The driver sends the locally cached SQL statements carrying snapshots to the database. The database uses the snapshots sent by the driver to execute the corresponding SQL statements. During the recovery phase, the database only revives the transactions that were being executed before the fault occurred, and blocks other requests at the same time.
3. Normal phase: After all SQL statements cached by the driver have been executed, the database exits the recovery phase and continues to execute other SQL statements.

## Usage Guide

### 1. Deploying the ATF Cluster

1. Prerequisite: An **openGauss cluster with CM** has been deployed.
2. On each server, decompress the ATF installation package and run the installation as root:

```bash
sudo sh install.sh -u username -g groupname
```

3. Switch to the specified user to start/stop the ATF service:

```bash
# Start
./atf_start.sh
# Stop
./atf_stop.sh
```

4. Configuration file: `/conf/atf_config.conf`. After modification, restart ATF for the changes to take effect. Core configurations include the listening port, number of threads, SSL certificate, cluster status cache, and so on.

### 2. Enabling ATF on a Database Instance

Set the following GUC parameter in `postgresql.conf`:
`atf_task_counter_timeout_sec = 5`
A value of 0 means the feature is disabled. For details, see [openGauss Transactions](../database_reference/opengauss_transaction.md)

### 3. Enabling ATF in a JDBC Connection

Add ATF-related parameters to the connection string. Example:

```text
jdbc:gaussdb://node1,node2,node3/database?enableATF=true&atfLevel=U&atfAddress=node1:12345,node2:12345&atfSslcert=/path1/server.pem,/path2/server.pem&atfReconnects=3&atfTimeout=1000
```

Key Parameter Description:

- `enableATF=true`: Enables transaction recovery.
- `atfLevel=U`: Enables unplanned ATF.
- `atfAddress`: ATF component address and port.
- `atfSslcert`: ATF SSL certificate path.

For details about the parameters, see [Connecting to a Database Using JDBC](../developer_guide/connecting_to_a_database_jdbc.md).

### Usage Example

First, create a table and insert 11 rows of data into it:

```SQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    email VARCHAR(100),
    detail TEXT
);
```

Java test code:

```java
package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class StreamTest {
    public static void main(String[] args) {
        // Database connection information
        String url = "jdbc:postgresql://localhost:33000/postgrestest??enableATF=true&atfLevel=U&atfAddress=node1:12345,node2:12345&atfSslcert=/path1/server.pem,/path2/server.pem&atfReconnects=3&atfTimeout=1000";
        String username = "postgrestest";
        String password = "postgresTest@123";

        // SQL query statement
        String sql = "select * from users where age=30 order by name desc;";

        try {
            Connection conn = DriverManager.getConnection(url, username, password);
            conn.setAutoCommit(false);
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setFetchSize(5);
            pstmt.execute();
            ResultSet rs = pstmt.getResultSet();
            int cnt = 0;
            while (rs.next()) {
                cnt++;
                int id = rs.getInt("id");
                String name = rs.getString("name");
                double salary = rs.getDouble("age");
                System.out.printf("No.%d, ID: %d, Name: %s, Salary: %.2f%n", cnt, id, name, salary);
            }

            conn.commit();
            conn.close();

        } catch (SQLException e) {
            System.err.println("Database operation failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
```

Execute the test script directly without any failure, and 11 rows of data are read:

```text
Mar 05, 2026 3:27:29 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [e522ca01-c9f4-4621-8a33-29ff1e84577e] Try to connect. IP: localhost:33000
Mar 05, 2026 3:27:29 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [*.*.0.1:47848/*.*.0.1:33000] Connection is established. ID: e522ca01-c9f4-4621-8a33-29ff1e84577e
Mar 05, 2026 3:27:29 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: Connect complete. ID: e522ca01-c9f4-4621-8a33-29ff1e84577e
No.1, ID: 24425035, Name: thread_9, Age: 30
No.2, ID: 23802346, Name: thread_8, Age: 30
No.3, ID: 23815638, Name: thread_7, Age: 30
No.4, ID: 23817179, Name: thread_6, Age: 30
No.5, ID: 23798772, Name: thread_5, Age: 30
No.6, ID: 23797555, Name: thread_4, Age: 30
No.7, ID: 23799220, Name: thread_3, Age: 30
No.8, ID: 23799699, Name: thread_2, Age: 30
No.9, ID: 24431268, Name: thread_2, Age: 30
No.10, ID: 23807993, Name: thread_1, Age: 30
No.11, ID: 24427845, Name: thread_0, Age: 30
```

Use a Java script to connect to the database and query table data. Use single-step debugging to cause a database failure when reading the fourth row of data:
The logs show that the failure is detected when reading the second fetchSize. After reconnection, the cached SQL is automatically replayed, and the remaining data continues to be output after the replay is complete.

```text
Mar 05, 2026 3:24:06 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [0dcd49f6-f7ab-4c76-8e43-9920bd460f6c] Try to connect. IP: localhost:33000
Mar 05, 2026 3:24:06 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [*.*.0.1:47108/*.*.0.1:33000] Connection is established. ID: 0dcd49f6-f7ab-4c76-8e43-9920bd460f6c
Mar 05, 2026 3:24:06 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: Connect complete. ID: 0dcd49f6-f7ab-4c76-8e43-9920bd460f6c
No.1, ID: 24425035, Name: thread_9, Age: 30
No.2, ID: 23802346, Name: thread_8, Age: 30
No.3, ID: 23815638, Name: thread_7, Age: 30
No.4, ID: 23817179, Name: thread_6, Age: 30
No.5, ID: 23798772, Name: thread_5, Age: 30
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.QueryExecutorImpl processResults
SEVERE: IO Exception.received packetType:69last PacketType:-1connection info:*.*.0.1:47108/*.*.0.1:33000buffer :
buffer is empty
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [ea75a99a-c8b0-46d9-a763-f64dcd83dfa8] Try to connect. IP: localhost:33000
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: [*.*.0.1:47144/*.*.0.1:33000] Connection is established. ID: ea75a99a-c8b0-46d9-a763-f64dcd83dfa8
Mar 05, 2026 3:24:21 PM org.postgresql.core.v3.ConnectionFactoryImpl openConnectionImpl
INFO: Connect complete. ID: ea75a99a-c8b0-46d9-a763-f64dcd83dfa8
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgConnection reconnect
INFO: reconnect to server successfully.
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeATFCache
INFO: recovery:ATFCachedQuery{query=set dolphin.b_compatibility_mode to on, queryResult=QueryExecutionResult{xid=0, xmin=112309735, xmax=112309735, csn=111159655, fetchSize=0, fetchNum=1, takenDuringRecovery=false, timeline=0, resultHash=8c52684db8f49511e9b44471716bf164, rowCount=0}, parameterList=null, flags=0}
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeOneATFQuery
INFO: Result check success after recovery
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeATFCache
INFO: recovery:ATFCachedQuery{query=set connection_info = '{"driver_name":"JDBC","driver_version":"@GSVERSION@"}', queryResult=QueryExecutionResult{xid=0, xmin=112309735, xmax=112309735, csn=111159655, fetchSize=0, fetchNum=1, takenDuringRecovery=false, timeline=0, resultHash=8c52684db8f49511e9b44471716bf164, rowCount=0}, parameterList=null, flags=4}
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeOneATFQuery
INFO: Result check success after recovery
Mar 05, 2026 3:24:21 PM org.postgresql.jdbc.PgStatement executeATFCache
INFO: recovery:ATFCachedQuery{query=select * from users where age=30 order by name desc, queryResult=QueryExecutionResult{xid=0, xmin=112309735, xmax=112309735, csn=111159655, fetchSize=5, fetchNum=1, takenDuringRecovery=false, timeline=0, resultHash=cc51fb6118ded8c7600712cc44047a12, rowCount=5}, parameterList=<[]>, flags=0}
Mar 05, 2026 3:24:31 PM org.postgresql.jdbc.PgStatement executeOneATFQuery
INFO: Result check success after recovery
No.6, ID: 23797555, Name: thread_4, Age: 30
No.7, ID: 23799220, Name: thread_3, Age: 30
No.8, ID: 23799699, Name: thread_2, Age: 30
No.9, ID: 24431268, Name: thread_2, Age: 30
No.10, ID: 23807993, Name: thread_1, Age: 30
No.11, ID: 24427845, Name: thread_0, Age: 30
```

## Usage Scenarios

1. **High availability for core services**: Avoiding service interruption caused by node failures for finance, government, e-commerce, and other services that require 24×7 online operation
2. **Existing applications without modification**: Transparently improving cluster's fault tolerance for deployed services whose code cannot be modified
3. **Cluster primary/standby switchover O&M**: Ensuring the service is unaware of primary/standby switchover triggered by node upgrades and maintenance and reports no errors
4. **Transaction-oriented services sensitive to interruption**: Online transaction scenarios such as orders, payments, and accounting that strictly require transaction integrity
