# Automatic Job Retry upon Failure<a name="EN-US_TOPIC_0000001152275231"></a>

## Availability<a name="section57017810"></a>

This feature is available since openGauss 1.0.0.

## Introduction<a name="section43398242"></a>

If an error occurs in batch processing jobs due to network exceptions or deadlocks, failed jobs are automatically retried.

## Benefits<a name="section55039858"></a>

In common fault scenarios, such as network exception and deadlock, queries retry automatically in case of failure to improve database usability.

## Description<a name="section25596675"></a>

openGauss provides the job retry mechanism: gsql retry.

-   The gsql retry mechanism uses a unique error code \(SQL STATE\) to identify an error that requires a retry. The function of the client tool gsql is enhanced. The error code configuration file  **retry\_errcodes.conf**  is used to configure the list of errors that require a retry. The file is stored in the installation directory at the same level as gsql.  **gsql**  provides the  **\\set RETRY **\[_number_\] command to enable or disable the retry function. The number of retry times ranges from 5 to 10, and the default value is  **5**. When this function is enabled,  **gsql**  reads the preceding configuration file. The error retry controller records the error code list through the container. If an error occurs in the configuration file after the function is enabled, the controller sends the cached query statement to the server for retry until the query is successful or an error is reported when the number of retry times exceeds the maximum.

## Enhancements<a name="section29043486"></a>

None.

## Constraints<a name="section06531946143616"></a>

-   Functionality constraints:

    Retrying increases execution success rate but does not guarantee success.

-   Error type constraints:

    Only the error types in  [Table 1](#table123551925257)  are supported.

    **Table  1**  Supported error types

    <a name="table123551925257"></a>
    <table><thead align="left"><tr id="row123564251159"><th class="cellrowborder" valign="top" width="46.29%" id="mcps1.2.4.1.1"><p id="p5356182513513"><a name="p5356182513513"></a><a name="p5356182513513"></a>Error Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.309999999999999%" id="mcps1.2.4.1.2"><p id="p23569257518"><a name="p23569257518"></a><a name="p23569257518"></a>Error Code</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.4%" id="mcps1.2.4.1.3"><p id="p03565251057"><a name="p03565251057"></a><a name="p03565251057"></a>Remarks</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row835611251652"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p23566252515"><a name="p23566252515"></a><a name="p23566252515"></a>CONNECTION_RESET_BY_PEER</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p1035616251258"><a name="p1035616251258"></a><a name="p1035616251258"></a>YY001</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p4356825253"><a name="p4356825253"></a><a name="p4356825253"></a>TCP communication error. Print information: "Connection reset by peer"</p>
    </td>
    </tr>
    <tr id="row03568254512"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p53561825454"><a name="p53561825454"></a><a name="p53561825454"></a>STREAM_CONNECTION_RESET_BY_PEER</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p1435612511510"><a name="p1435612511510"></a><a name="p1435612511510"></a>YY002</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p3356142518516"><a name="p3356142518516"></a><a name="p3356142518516"></a>TCP communication error. Print information: "Stream connection reset by peer" (communication between DNs)</p>
    </td>
    </tr>
    <tr id="row133569251256"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p1356202515518"><a name="p1356202515518"></a><a name="p1356202515518"></a>LOCK_WAIT_TIMEOUT</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p1635762514514"><a name="p1635762514514"></a><a name="p1635762514514"></a>YY003</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p63571925554"><a name="p63571925554"></a><a name="p63571925554"></a>Lock wait timeout. Print information: "Lock wait timeout"</p>
    </td>
    </tr>
    <tr id="row1935714251515"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p18357112512517"><a name="p18357112512517"></a><a name="p18357112512517"></a>CONNECTION_TIMED_OUT</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p12357172516520"><a name="p12357172516520"></a><a name="p12357172516520"></a>YY004</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p8357172518512"><a name="p8357172518512"></a><a name="p8357172518512"></a>TCP communication error. Print information: "Connection timed out"</p>
    </td>
    </tr>
    <tr id="row935715251755"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p23571625559"><a name="p23571625559"></a><a name="p23571625559"></a>SET_QUERY_ERROR</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p535713258512"><a name="p535713258512"></a><a name="p535713258512"></a>YY005</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p6357125250"><a name="p6357125250"></a><a name="p6357125250"></a>Failed to deliver the <strong id="b152291622175717"><a name="b152291622175717"></a><a name="b152291622175717"></a>SET</strong> command. Print information: "Set query error"</p>
    </td>
    </tr>
    <tr id="row83576258516"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p133571225153"><a name="p133571225153"></a><a name="p133571225153"></a>OUT_OF_LOGICAL_MEMORY</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p235717259512"><a name="p235717259512"></a><a name="p235717259512"></a>YY006</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p7357122519520"><a name="p7357122519520"></a><a name="p7357122519520"></a>Failed to apply for memory. Print information: "Out of logical memory"</p>
    </td>
    </tr>
    <tr id="row935714252514"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p23571225052"><a name="p23571225052"></a><a name="p23571225052"></a>SCTP_MEMORY_ALLOC</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p163570259513"><a name="p163570259513"></a><a name="p163570259513"></a>YY007</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p113571251515"><a name="p113571251515"></a><a name="p113571251515"></a>SCTP communication error. Print information: "Memory allocate error"</p>
    </td>
    </tr>
    <tr id="row535715251652"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p735716258511"><a name="p735716258511"></a><a name="p735716258511"></a>SCTP_NO_DATA_IN_BUFFER</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p10358225753"><a name="p10358225753"></a><a name="p10358225753"></a>YY008</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p635818259514"><a name="p635818259514"></a><a name="p635818259514"></a>SCTP communication error. Print information: "SCTP no data in buffer"</p>
    </td>
    </tr>
    <tr id="row1035815251455"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p1235818254515"><a name="p1235818254515"></a><a name="p1235818254515"></a>SCTP_RELEASE_MEMORY_CLOSE</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p163582251650"><a name="p163582251650"></a><a name="p163582251650"></a>YY009</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p16358182520518"><a name="p16358182520518"></a><a name="p16358182520518"></a>SCTP communication error. Print information: "Release memory close"</p>
    </td>
    </tr>
    <tr id="row63584253512"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p17358122516519"><a name="p17358122516519"></a><a name="p17358122516519"></a>SCTP_TCP_DISCONNECT</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p1735832511515"><a name="p1735832511515"></a><a name="p1735832511515"></a>YY010</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p235810251857"><a name="p235810251857"></a><a name="p235810251857"></a>SCTP and TCP communication error. Print information: "SCTP, TCP disconnect"</p>
    </td>
    </tr>
    <tr id="row123583257513"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p635818251856"><a name="p635818251856"></a><a name="p635818251856"></a>SCTP_DISCONNECT</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p1635810251355"><a name="p1635810251355"></a><a name="p1635810251355"></a>YY011</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p1535813251952"><a name="p1535813251952"></a><a name="p1535813251952"></a>SCTP communication error. Print information: "SCTP disconnect"</p>
    </td>
    </tr>
    <tr id="row735816251456"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p635882520514"><a name="p635882520514"></a><a name="p635882520514"></a>SCTP_REMOTE_CLOSE</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p2035812251954"><a name="p2035812251954"></a><a name="p2035812251954"></a>YY012</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p1435872513510"><a name="p1435872513510"></a><a name="p1435872513510"></a>SCTP communication error. Print information: "Stream closed by remote"</p>
    </td>
    </tr>
    <tr id="row3358225659"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p113581925559"><a name="p113581925559"></a><a name="p113581925559"></a>SCTP_WAIT_POLL_UNKNOW</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p193590257512"><a name="p193590257512"></a><a name="p193590257512"></a>YY013</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p113595251758"><a name="p113595251758"></a><a name="p113595251758"></a>Waiting for an unknown poll. Print information: "SCTP wait poll unknow"</p>
    </td>
    </tr>
    <tr id="row1435911257512"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p19359142511518"><a name="p19359142511518"></a><a name="p19359142511518"></a>SNAPSHOT_INVALID</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p153599253519"><a name="p153599253519"></a><a name="p153599253519"></a>YY014</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p835913251454"><a name="p835913251454"></a><a name="p835913251454"></a>Invalid snapshot. Print information: "Snapshot invalid"</p>
    </td>
    </tr>
    <tr id="row8359172512517"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p1935917259513"><a name="p1935917259513"></a><a name="p1935917259513"></a>ERRCODE_CONNECTION_RECEIVE_WRONG</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p93591252519"><a name="p93591252519"></a><a name="p93591252519"></a>YY015</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p435912251159"><a name="p435912251159"></a><a name="p435912251159"></a>Failed to receive a connection. Print information: "Connection receive wrong"</p>
    </td>
    </tr>
    <tr id="row103593256514"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p203591125453"><a name="p203591125453"></a><a name="p203591125453"></a>OUT_OF_MEMORY</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p73591025253"><a name="p73591025253"></a><a name="p73591025253"></a>53200</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p14359152519514"><a name="p14359152519514"></a><a name="p14359152519514"></a>Out of memory. Print information: "Out of memory"</p>
    </td>
    </tr>
    <tr id="row03594251518"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p173595251455"><a name="p173595251455"></a><a name="p173595251455"></a>CONNECTION_EXCEPTION</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p53601425651"><a name="p53601425651"></a><a name="p53601425651"></a>08000</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p636012251157"><a name="p636012251157"></a><a name="p636012251157"></a>Failed to communicate with DNs due to connection errors. Print information: "Connection exception"</p>
    </td>
    </tr>
    <tr id="row43602259510"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p11360102514511"><a name="p11360102514511"></a><a name="p11360102514511"></a>ADMIN_SHUTDOWN</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p836010250512"><a name="p836010250512"></a><a name="p836010250512"></a>57P01</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p336032512516"><a name="p336032512516"></a><a name="p336032512516"></a>System shutdown by the administrator. Print information: "Admin shutdown"</p>
    </td>
    </tr>
    <tr id="row193608252051"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p103609251951"><a name="p103609251951"></a><a name="p103609251951"></a>STREAM_REMOTE_CLOSE_SOCKET</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p183602251651"><a name="p183602251651"></a><a name="p183602251651"></a>XX003</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p163605251158"><a name="p163605251158"></a><a name="p163605251158"></a>Remote socket disabled. Print information: "Stream remote close socket"</p>
    </td>
    </tr>
    <tr id="row123601725558"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p1736082513512"><a name="p1736082513512"></a><a name="p1736082513512"></a>ERRCODE_STREAM_DUPLICATE_QUERY_ID</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p636016252519"><a name="p636016252519"></a><a name="p636016252519"></a>XX009</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p136014251555"><a name="p136014251555"></a><a name="p136014251555"></a>Duplicate query. Print information: "Duplicate query id"</p>
    </td>
    </tr>
    <tr id="row19360425858"><td class="cellrowborder" valign="top" width="46.29%" headers="mcps1.2.4.1.1 "><p id="p1936072514516"><a name="p1936072514516"></a><a name="p1936072514516"></a>ERRCODE_STREAM_CONCURRENT_UPDATE</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.309999999999999%" headers="mcps1.2.4.1.2 "><p id="p203601325352"><a name="p203601325352"></a><a name="p203601325352"></a>YY016</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.4%" headers="mcps1.2.4.1.3 "><p id="p1136162511510"><a name="p1136162511510"></a><a name="p1136162511510"></a>Concurrent stream query and update. Print information: "Stream concurrent update"</p>
    </td>
    </tr>
    </tbody>
    </table>

-   Statement type constraints:

    Support single-statement stored procedures, functions, and anonymous blocks. Statements in transaction blocks are not supported.

-   Statement constraints of a stored procedure:
    -   If an error occurs during the execution of a stored procedure containing EXCEPTION \(including statement block execution and statement execution in EXCEPTION\), the stored procedure can be retried. If the error is captured by EXCEPTION, the stored procedure cannot be retried.
    -   Advanced packages that use global variables are not supported.
    -   DBE\_TASK is not supported.
    -   PKG\_UTIL file operation is not supported.

-   Data import constraints:
    -   The  **COPY FROM STDIN**  statement is not supported.
    -   The  **gsql \\copy from**  metacommand is not supported.
    -   Data cannot be imported using  **JDBC CopyManager copyIn**.


## Dependencies<a name="section60064789"></a>

Valid only if the  **gsql**  tool works normally and the error list is correctly configured.

