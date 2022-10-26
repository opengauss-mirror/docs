# Common JDBC Parameters<a name="EN-US_TOPIC_0000001399380057"></a>

## targetServerType<a name="section556210112155"></a>

**Principle**: If the value is **master**, JDBC attempts to connect to the IP addresses configured in the string in sequence until the primary node in the cluster is connected.

If the value is **slave**, JDBC attempts to connect to the IP addresses configured in the string in sequence until the standby node in the cluster is connected. The query statement is **select local\_role, db\_state from pg\_stat\_get\_stream\_replications\(\);**.

**Suggestion**: You are advised to set this parameter to **master** for services with write operations to ensure that the primary node can be properly connected after a primary/standby switchover. However, if the standby node is not completely promoted to primary during the primary/standby switchover, the connection cannot be established. As a result, service statements cannot be executed.

## hostRecheckSeconds<a name="section57081469162"></a>

**Principle**: Specifies the period during which the DN list stored in JDBC remains trusted. Within this period, the DN list is directly read from the host addresses stored in JDBC. After that (or the primary node fails to be connected within the specified period), the node status in the DN list is updated and other IP addresses are connected.

**Suggestion**: The default value is **10s**. You are advised to adjust the value based on service requirements. This parameter is used together with the **targetServerType** parameter.

## allowReadOnly<a name="section971895131917"></a>

**Principle**: Checks whether the transaction access mode can be modified through **setReadOnly**. If the value is **true**, the transaction access mode can be modified. If the value is **false**, the transaction access mode cannot be modified through this interface. To modify the transaction access mode, execute **SET SESSION CHARACTERISTICS AS TRANSACTION + READ ONLY / READ WEITE**.

**Suggestion**: The default value **true** is recommended.

## fetchsize<a name="section977561515206"></a>

**Principle**: After **fetchsize** is set to *n* and the database server executes a query, JDBC communicates with the server when the invoker executes **resultset.next\(\)**, fetches *n* pieces of data to the JDBC client, and returns the first piece of data to the invoker. When the invoker fetches the (*n*+1)th data record, the invoker fetches data from the database server again.

**Function**: This prevents the database from transmitting all results to the client at a time, which exhausts the memory resources of the client.

**Suggestion**: You are advised to set this parameter based on the amount of data queried by services and the memory of the client. When setting **fetchsize**, disable automatic commit \(**autocommit**=**false**\). Otherwise, the setting of **fetchsize** does not take effect.

## defaultRowFetchSize<a name="section1097717285206"></a>

**Function**: The default value of **fetchsize** is **0**. Setting **defaultRowFetchSize** will change the default value of **fetchsize**.

## batchMode<a name="section27774212223"></a>

**Function**: This parameter specifies whether to connect the database in batch mode. The default value is **on**. After the function is enabled, the batch update performance is improved, and the return value is also batch updated. For example, if three data records are inserted in batches, the return value is **\[3,0,0\]** when the function is enabled, and the return value is **\[1,1,1\]** when the function is disabled.

**Suggestion**: If the service framework \(such as hibernate\) checks the return value during batch update, you can set this parameter to solve the problem.

## loginTimeout<a name="section191718166231"></a>

**Function**: Controls the time for establishing a connection with the database. The time includes connection timeout and socket timeout. If the time elapsed exceeds the threshold, the connection exits. The calculation formula is as follows: **loginTimeout** = **connectiontimeout** x Number of nodes + Connection authentication time + Initialization statement execution time.

**Suggestion**: After this parameter is set, an asynchronous thread is started each time a connection is established. If there are a large number of connections, the pressure on the client may increase. If this parameter needs to be set, you are advised to set it to 3 x **connectTimeout** in centralized deployment to prevent connection failures when the network is abnormal and the third IP address is the IP address of the primary node.

>![](public_sys-resources/icon-notice.gif) **NOTICE:**
>After this parameter is set, for multiple IP addresses, the value of this parameter is the time for attempting to connect to all the IP addresses. If this parameter is set to a small value, the subsequent IP addresses may fail to be connected. For example, if three IP addresses are set, **logintimeout** is set to **5s**, and it takes 5s to connect to the first two IP addresses, the third IP address cannot be connected. In the centralized deployment environment, the last IP address is the IP address of the primary node. As a result, the automatic search for the primary node may fail.

## cancelSignalTimeout<a name="section158271453172310"></a>

**Function**: Canceling messages may cause a block. This parameter controls **connectTimeout** and **socketTimeout** in a cancel message, in seconds. in seconds. It is used to prevent timeout detection from being performed when the connection is canceled due to timeout.

**Suggestion**: The default value is **10s**. You are advised to adjust the value based on service requirements.

## connectTimeout<a name="section233713142242"></a>

**Function**: Controls the socket timeout threshold during connection setup. In this case, this timeout threshold is the time when the JDBC connects to the database through the socket, not the time when the connection object is returned. If the time elapsed exceeds the threshold, JDBC searches for the next IP address.

**Suggestion**: This parameter determines the maximum timeout interval for establishing a TCP connection on each node. If a network fault occurs on a node, JDBC attempts to connect to the node until the time specified by **connectTimeout** elapses, and then attempts to connect to the next node. Considering the network jitter and delay, you are advised to set this parameter to **3s**.

## socketTimeout<a name="section663313518243"></a>

**Function**: Controls the timeout threshold of socket operations. If the time of executing service statements or reading data streams from the network exceeds the threshold (that is, when the statement execution time exceeds the specified threshold and no data is returned), the connection is interrupted.

**Suggestion**: This parameter specifies the maximum execution time of a single SQL statement. If the execution time of a single SQL statement exceeds the value of this parameter, an error is reported and the statement exits. You are advised to set this parameter based on service characteristics.

## autosave<a name="section177291155122418"></a>

**Function**: If the value is **always**, you can set a savepoint before each statement in a transaction. If an error is reported during statement execution in a transaction, the system returns to the latest savepoint. In this way, subsequent statements in the transaction can be properly executed and committed.

**Suggestion**: You are not advised to set this parameter because the performance deteriorates severely.

## currentSchema<a name="section196082212252"></a>

**Function**: Specifies the schema of the current connection. If this parameter is not set, the default schema is the username used for the connection.

**Suggestion**: You are advised to set this parameter to the schema where the service data is located.

## prepareThreshold<a name="section65591537122511"></a>

**Function**: The default value is **5**. If an SQL statement is executed for multiple consecutive times in a session and the number of execution times specified by **prepareThreshold** is reached, JDBC does not send the PARSE command to the SQL statement but caches the SQL statement to improve the execution speed.

**Suggestion**: The default value is **5**. Adjust the value based on service requirements.

## preparedStatementCacheQueries<a name="section97391426267"></a>

**Function**: Specifies the number of queries cached in each connection. The default value is **256**. If more than 256 different queries are used in the **prepareStatement\(\)** call, the least recently used query cache will be discarded.

**Suggestion**: The default value is **256**. Adjust the value based on service requirements. This parameter is used together with **prepareThreshold**.

## blobMode<a name="section20591122619265"></a>

**Function**: Sets the **setBinaryStream** method to assign values to different types of data. The value **on** indicates that values are assigned to BLOB data. The value **off** indicates that values are assigned to bytea data. The default value is **on**. For example, you can assign values to parameters in the **preparestatement** and **callablestatement** objects.

**Suggestion**: The default value is **true**.

## setAutocommit<a name="section710434213264"></a>

**Function**: If the value is **true**, a transaction is automatically started when each statement is executed. After the execution is complete, the transaction is automatically committed. That is, each statement is a transaction. If the value is **false**, a transaction is automatically started. However, you need to manually commit the transaction.

**Suggestion**: Adjust the value based on service characteristics. If autocommit needs to be disabled for performance or other purposes, the application must ensure that transactions can be committed. For example, explicitly commit translations after specifying service SQL statements. Particularly, ensure that all transactions are committed before the client exits.
