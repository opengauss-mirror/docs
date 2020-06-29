# Statistics Information Functions<a name="EN-US_TOPIC_0242370462"></a>

Statistics information functions are divided into the following two categories: functions that access databases, using the OID of each table or index in a database to mark the database for which statistics are generated; functions that access servers, identified by the server process ID, whose value ranges from 1 to the number of currently active servers.

-   pg\_stat\_get\_db\_numbackends\(oid\)

    Description: Number of active server processes for a database

    Return type: integer

-   pg\_stat\_get\_db\_xact\_commit\(oid\)

    Description: Number of transactions committed in a database

    Return type: bigint

-   pg\_stat\_get\_db\_xact\_rollback\(oid\)

    Description: Number of transactions rolled back in a database

    Return type: bigint

-   pg\_stat\_get\_db\_blocks\_fetched\(oid\)

    Description: Number of disk blocks fetch requests for a database

    Return type: bigint

-   pg\_stat\_get\_db\_blocks\_hit\(oid\)

    Description: Number of disk block fetch requests found in cache for a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_returned\(oid\)

    Description: Number of tuples returned for a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_fetched\(oid\)

    Description: Number of tuples fetched for a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_inserted\(oid\)

    Description: Number of tuples inserted in a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_updated\(oid\)

    Description: Number of tuples updated in a database

    Return type: bigint

-   pg\_stat\_get\_db\_tuples\_deleted\(oid\)

    Description: Number of tuples deleted in a database

    Return type: bigint

-   pg\_stat\_get\_db\_conflict\_lock\(oid\)

    Description: Number of lock conflicts in a database

    Return type: bigint

-   pg\_stat\_get\_db\_deadlocks\(oid\)

    Description: Number of deadlocks in a database

    Return type: bigint

-   pg\_stat\_get\_numscans\(oid\)

    Description: Number of sequential row scans done if parameters are in a table or number of index scans done if parameters are in an index

    Return type: bigint

-   pg\_stat\_get\_tuples\_returned\(oid\)

    Description: Number of sequential row scans done if parameters are in a table or number of index entries returned if parameters are in an index

    Return type: bigint

-   pg\_stat\_get\_tuples\_fetched\(oid\)

    Description: Number of table rows fetched by bitmap scans if parameters are in a table, or table rows fetched by simple index scans using the index if parameters are in an index

    Return type: bigint

-   pg\_stat\_get\_tuples\_inserted\(oid\)

    Description: Number of rows inserted into table

    Return type: bigint

-   pg\_stat\_get\_tuples\_updated\(oid\)

    Description: Number of rows updated in table

    Return type: bigint

-   pg\_stat\_get\_tuples\_deleted\(oid\)

    Description: Number of rows deleted from table

    Return type: bigint

-   pg\_stat\_get\_tuples\_changed\(oid\)

    Description: Total number of inserted, updated, and deleted rows after the table was last analyzed or autoanalyzed

    Return type: bigint

-   pg\_stat\_get\_tuples\_hot\_updated\(oid\)

    Description: Number of rows HOT-updated in table

    Return type: bigint

-   pg\_stat\_get\_live\_tuples\(oid\)

    Description: Number of live rows in table

    Return type: bigint

-   pg\_stat\_get\_dead\_tuples\(oid\)

    Description: Number of dead rows in table

    Return type: bigint

-   pg\_stat\_get\_blocks\_fetched\(oid\)

    Description: Number of disk block fetch requests for table or index

    Return type: bigint

-   pg\_stat\_get\_blocks\_hit\(oid\)

    Description: Number of disk block requests found in cache for table or index

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_inserted\(oid\)

    Description: Number of rows in the corresponding table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_updated\(oid\)

    Description: Number of rows that have been updated in the corresponding table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_deleted\(oid\)

    Description: Number of rows deleted from the corresponding table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_tuples\_changed\(oid\)

    Description: Total number of inserted, updated, and deleted rows after the table partition was last analyzed or autoanalyzed

    Return type: bigint

-   pg\_stat\_get\_partition\_live\_tuples\(oid\)

    Description: Number of live rows in a table partition

    Return type: bigint

-   pg\_stat\_get\_partition\_dead\_tuples\(oid\)

    Description: Number of dead rows in a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_inserted\(oid\)

    Description: Number of tuple inserted into the active subtransactions related to the table.

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_deleted\(oid\)

    Description: Number of deleted tuples in the active subtransactions related to a table

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_hot\_updated\(oid\)

    Description: Number of hot updated tuples in the active subtransactions related to a table

    Return type: bigint

-   pg\_stat\_get\_xact\_tuples\_updated\(oid\)

    Description: Number of updated tuples in the active subtransactions related to a table

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_inserted\(oid\)

    Description: Number of inserted tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_deleted\(oid\)

    Description: Number of deleted tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_hot\_updated\(oid\)

    Description: Number of hot updated tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_xact\_partition\_tuples\_updated\(oid\)

    Description: Number of updated tuples in the active subtransactions related to a table partition

    Return type: bigint

-   pg\_stat\_get\_last\_vacuum\_time\(oid\)

    Description: Last time when the autovacuum thread is manually started to clear a table

    Return type: timestamptz

-   pg\_stat\_get\_last\_autovacuum\_time\(oid\)

    Description: Time of the last vacuum initiated by the autovacuum daemon on this table

    Return type: timestamptz

-   pg\_stat\_get\_vacuum\_count\(oid\)

    Description: Number of times a table is manually cleared

    Return type: bigint

-   pg\_stat\_get\_autovacuum\_count\(oid\)

    Description: Number of times the autovacuum daemon is started to clear a table

    Return type: bigint

-   pg\_stat\_get\_last\_analyze\_time\(oid\)

    Description: Last time when a table starts to be analyzed manually or by the autovacuum thread

    Return type: timestamptz

-   pg\_stat\_get\_last\_autoanalyze\_time\(oid\)

    Description: Time of the last analysis initiated by the autovacuum daemon on this table

    Return type: timestamptz

-   pg\_stat\_get\_analyze\_count\(oid\)

    Description: Number of times a table is manually analyzed

    Return type: bigint

-   pg\_stat\_get\_autoanalyze\_count\(oid\)

    Description: Number of times the autovacuum daemon analyzes a table

    Return type: bigint

-   pg\_total\_autovac\_tuples\(bool,bool\)

    Description: Returns tuple records related to the total autovac, such as  **nodename**,  **nspname**,  **relname**, and tuple IUDs. The input parameters specify whether to query  **relation**  and  **local**  information, respectively.

    Return type: setofrecord

-   pg\_autovac\_status\(oid\)

    Description: Returns autovac information, such as  **nodename**,  **nspname**,  **relname**,  **analyze**,  **vacuum**, thresholds of  **analyze**  and  **vacuum**, and the number of analyzed or vacuumed tuples.

    Return type: setofrecord

-   pg\_autovac\_timeout\(oid\)

    Description: Returns the number of consecutive timeouts during the autovac operation on a table. If the table information is invalid or the node information is abnormal,  **NULL**  will be returned.

    Return type: bigint

-   pg\_autovac\_dbnode\(oid\)

    Description: Returns the name of the dbnode performing the autovac operation on a table. If the table information is invalid or the node information is abnormal,  **NULL**  will be returned.

    Return type: text

-   pg\_stat\_get\_last\_data\_changed\_time\(oid\)

    Description: Returns the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was performed last time on a table. The data in the  **last\_data\_changed**  column of the  [PG\_STAT\_ALL\_TABLES](pg_stat_all_tables.md)  view is calculated by using this function. The performance of obtaining the last modification time by using the view is poor when the table has a large amount of data. In this case, you are advised to use the function.

    Return type: timestamptz

-   pg\_stat\_set\_last\_data\_changed\_time\(oid\)

    Description: Manually changes the time when  **INSERT**,  **UPDATE**,  **DELETE**, or  **EXCHANGE**/**TRUNCATE**/**DROP** **PARTITION**  was performed last time.

    Return type: void

-   pg\_backend\_pid\(\)

    Description: Thread ID of the server thread attached to the current session

    Return type: integer

-   pg\_stat\_get\_activity\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The return results are a subnet of those \(excluding the  **connection\_info**  column\) in the  [PG\_STAT\_ACTIVITY](pg_stat_activity.md)  view.

    Return type: setofrecord

-   pg\_stat\_get\_activity\_with\_conninfo\(integer\)

    Description: Returns a record about the backend with the specified PID. A record for each active backend in the system is returned if  **NULL**  is specified. The return results are a subnet of those in the  [PG\_STAT\_ACTIVITY](pg_stat_activity.md)  view.

    Return type: setofrecord

-   pg\_user\_iostat\(text\)

    Description: Displays the I/O load management information about the job currently executed by the user.

    Return type: record

    The following table describes return fields.

    <a name="en-us_topic_0237121998_table842513640"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row11426631846"><th class="cellrowborder" valign="top" width="14.6%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"><a name="en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a><a name="en-us_topic_0237121998_en-us_topic_0059777813_a54c6f4bf1ef74329935e7c5b3d44c568"></a>Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.9%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p54991455747"><a name="en-us_topic_0237121998_p54991455747"></a><a name="en-us_topic_0237121998_p54991455747"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="76.5%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p1468935815411"><a name="en-us_topic_0237121998_p1468935815411"></a><a name="en-us_topic_0237121998_p1468935815411"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row74262318415"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p54261938418"><a name="en-us_topic_0237121998_p54261938418"></a><a name="en-us_topic_0237121998_p54261938418"></a>userid</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1742611310413"><a name="en-us_topic_0237121998_p1742611310413"></a><a name="en-us_topic_0237121998_p1742611310413"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p114261231143"><a name="en-us_topic_0237121998_p114261231143"></a><a name="en-us_topic_0237121998_p114261231143"></a>User ID. </p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row7426039410"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p10426203540"><a name="en-us_topic_0237121998_p10426203540"></a><a name="en-us_topic_0237121998_p10426203540"></a>min_curr_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p242618317411"><a name="en-us_topic_0237121998_p242618317411"></a><a name="en-us_topic_0237121998_p242618317411"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p9426131249"><a name="en-us_topic_0237121998_p9426131249"></a><a name="en-us_topic_0237121998_p9426131249"></a>Minimum I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by ten thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row2426123642"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p11426173847"><a name="en-us_topic_0237121998_p11426173847"></a><a name="en-us_topic_0237121998_p11426173847"></a>max_curr_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p20426831246"><a name="en-us_topic_0237121998_p20426831246"></a><a name="en-us_topic_0237121998_p20426831246"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1742603448"><a name="en-us_topic_0237121998_p1742603448"></a><a name="en-us_topic_0237121998_p1742603448"></a>Maximum I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row542653546"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p19426637419"><a name="en-us_topic_0237121998_p19426637419"></a><a name="en-us_topic_0237121998_p19426637419"></a>min_peak_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p44261318416"><a name="en-us_topic_0237121998_p44261318416"></a><a name="en-us_topic_0237121998_p44261318416"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p154268319410"><a name="en-us_topic_0237121998_p154268319410"></a><a name="en-us_topic_0237121998_p154268319410"></a>Minimum peak I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row3426933419"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1942620314416"><a name="en-us_topic_0237121998_p1942620314416"></a><a name="en-us_topic_0237121998_p1942620314416"></a>max_peak_iops</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p34263312418"><a name="en-us_topic_0237121998_p34263312418"></a><a name="en-us_topic_0237121998_p34263312418"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p242615310414"><a name="en-us_topic_0237121998_p242615310414"></a><a name="en-us_topic_0237121998_p242615310414"></a>Maximum peak I/O of the current user across database nodes. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row4426834414"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p14427731047"><a name="en-us_topic_0237121998_p14427731047"></a><a name="en-us_topic_0237121998_p14427731047"></a>io_limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p104271831643"><a name="en-us_topic_0237121998_p104271831643"></a><a name="en-us_topic_0237121998_p104271831643"></a>int4</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p3427331643"><a name="en-us_topic_0237121998_p3427331643"></a><a name="en-us_topic_0237121998_p3427331643"></a><strong>io_limits</strong> set for the resource pool specified by the user. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row942753841"><td class="cellrowborder" valign="top" width="14.6%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p84272316419"><a name="en-us_topic_0237121998_p84272316419"></a><a name="en-us_topic_0237121998_p84272316419"></a>io_priority</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.9%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p74271935417"><a name="en-us_topic_0237121998_p74271935417"></a><a name="en-us_topic_0237121998_p74271935417"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="76.5%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1542716312414"><a name="en-us_topic_0237121998_p1542716312414"></a><a name="en-us_topic_0237121998_p1542716312414"></a><strong>io_priority</strong> set for the user. The IOPS is counted by ones for column storage and by thousands for row storage.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_function\_calls\(oid\)

    Description: Number of times the function has been called

    Return type: bigint

-   pg\_stat\_get\_function\_time\(oid\)

    Description: Total wall clock time spent in the function, in microseconds. Includes the time spent in functions called by this one.

    Return type: bigint

-   pg\_stat\_get\_function\_self\_time\(oid\)

    Description: Time spent in only this function. Time spent in called functions is excluded.

    Return type: bigint

-   pg\_stat\_get\_backend\_idset\(\)

    Description: Set of currently active server process numbers \(from 1 to the number of active server processes\)

    Return type: setofinteger

-   pg\_stat\_get\_backend\_pid\(integer\)

    Description: Thread ID of the given server thread

    Return type: bigint

-   pg\_stat\_get\_backend\_dbid\(integer\)

    Description: ID of the database connected to the given server process

    Return type: oid

-   pg\_stat\_get\_backend\_userid\(integer\)

    Description: User ID of the given server process

    Return type: oid

-   pg\_stat\_get\_backend\_activity\(integer\)

    Description: Active command of the given server process, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: text

-   pg\_stat\_get\_backend\_waiting\(integer\)

    Description: True if the given server process is waiting for a lock, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: Boolean

-   pg\_stat\_get\_backend\_activity\_start\(integer\)

    Description: The time at which the given server process's currently executing query was started, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_xact\_start\(integer\)

    Description: The time at which the given server process's currently executing transaction was started, but only if the current user is a system administrator or the same user as that of the session being queried and  **track\_activities**  is on

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_start\(integer\)

    Description: The time at which the given server process was started, or  **NULL**  if the current user is neither a system administrator nor the same user as that of the session being queried

    Return type: timestamp with time zone

-   pg\_stat\_get\_backend\_client\_addr\(integer\)

    Description: IP address of the client connected to the given server process. If the connection is over a Unix domain socket, or if the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

    Return type: inet

-   pg\_stat\_get\_backend\_client\_port\(integer\)

    Description: TCP port number of the client connected to the given server process If the connection is over a Unix domain socket,  **-1**  will be returned. If the current user is neither a system administrator nor the same user as that of the session being queried,  **NULL**  will be returned.

    Return type: integer

-   pg\_stat\_get\_bgwriter\_timed\_checkpoints\(\)

    Description: The number of times the background writer has started timed checkpoints \(because the  **checkpoint\_timeout**  time has expired\)

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_requested\_checkpoints\(\)

    Description: The number of times the background writer has started checkpoints based on requests from the backend because  **checkpoint\_segments**  has been exceeded or the  **CHECKPOINT**  command has been executed

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_buf\_written\_checkpoints\(\)

    Description: The number of buffers written by the background writer during checkpoints

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_buf\_written\_clean\(\)

    Description: The number of buffers written by the background writer for routine cleaning of dirty pages

    Return type: bigint

-   pg\_stat\_get\_bgwriter\_maxwritten\_clean\(\)

    Description: The number of times the background writer has stopped its cleaning scan because it has written more buffers than specified in the  **bgwriter\_lru\_maxpages**  parameter

    Return type: bigint

-   pg\_stat\_get\_buf\_written\_backend\(\)

    Description: The number of buffers written by the backend because they needed to allocate a new buffer

    Return type: bigint

-   pg\_stat\_get\_buf\_alloc\(\)

    Description: The total number of buffer allocations

    Return type: bigint

-   pg\_stat\_clear\_snapshot\(\)

    Description: Discards the current statistics snapshot.

    Return type: void

-   pg\_stat\_reset\(\)

    Description: Resets all statistics counters for the current database to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_reset\_shared\(text\)

    Description: Resets all statistics counters for the current database in each node in a shared cluster to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_reset\_single\_table\_counters\(oid\)

    Description: Resets statistics for a single table or index in the current database to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_reset\_single\_function\_counters\(oid\)

    Description: Resets statistics for a single function in the current database to zero \(requires system administrator permissions\).

    Return type: void

-   pg\_stat\_session\_cu\(int, int, int\)

    Description: Obtains the compression unit \(CU\) hit statistics of sessions running on the current node.

    Return type: record

-   gs\_get\_stat\_session\_cu\(text, int, int, int\)

    Description: Obtains the CU hit statistics of all running sessions in openGauss.

    Return type: record

-   gs\_get\_stat\_db\_cu\(text, text, int, int, int\)

    Description: Obtains the CU hit statistics of a database in openGauss.

    Return type: record

-   pg\_stat\_get\_cu\_mem\_hit\(oid\)

    Description: Obtains the number of CU memory hits of a column storage table in the current database of the current node.

    Return type: bigint

-   pg\_stat\_get\_cu\_hdd\_sync\(oid\)

    Description: Obtains the times CU is synchronously read from a disk by a column storage table in the current database of the current node.

    Return type: bigint

-   pg\_stat\_get\_cu\_hdd\_asyn\(oid\)

    Description: Obtains the times CU is asynchronously read from a disk by a column storage table in the current database of the current node.

    Return type: bigint

-   pg\_stat\_get\_db\_cu\_mem\_hit\(oid\)

    Description: Obtains the CU memory hit in a database of the current node.

    Return type: bigint

-   pg\_stat\_get\_db\_cu\_hdd\_sync\(oid\)

    Description: Obtains the times CU is synchronously read from a disk by a database of the current node.

    Return type: bigint

-   pgxc\_get\_wlm\_current\_instance\_info\(text, int default null\)

    Description: Queries the current resource usage on the primary database node and reads the data that is not stored in section "5.19.2.3 GS\_WLM\_INSTANCE\_HISTORY" system catalog in the memory. The input parameters are the node name \(**ALL**,  **C**,  **D**, or  _instance name_\) and the maximum number of records returned by each node. The returned value is  **GS\_WLM\_INSTANCE\_HISTORY**.

    Return type: setofrecord

-   pgxc\_get\_wlm\_history\_instance\_info\(text, TIMESTAMP, TIMESTAMP, int default null\)

    Description: Queries the historical resource usage on the primary database node and reads the data in section "GS\_WLM\_INSTANCE\_HISTORY" system catalog in the memory. The input parameters are as follows: node name \(**ALL**,  **C**,  **D**, or  _instance name_\), start time, end time, and maximum number of records returned for each instance. The returned value is  **GS\_WLM\_INSTANCE\_HISTORY**.

    Return type: setofrecord


-   pg\_stat\_get\_db\_cu\_hdd\_asyn\(oid\)

    Description: Obtains the times CU is asynchronously read from a disk by a database of the current node.

    Return type: bigint


-   pg\_stat\_bad\_block\(text, int, int, int, int, int, timestamp with time zone, timestamp with time zone\)

    Description: Obtains damage information about pages or CUs after the current node is started.

    Example: select \* from pg\_stat\_bad\_block\(\);

    Return type: record

-   pg\_stat\_bad\_block\_clear\(\)

    Description: Deletes the page and CU damage information that is read and recorded on the node. \(System administrator rights are required.\)

    Return type: void

-   gs\_respool\_exception\_info\(pool text\)

    Description: Queries for the query rule of a specified resource pool.

    Return type: record

-   gs\_control\_group\_info\(pool text\)

    Description: Queries for information about Cgroups associated with a resource pool.

    Return type: record

    The following table describes return fields.

    <a name="en-us_topic_0237121998_table1560939125613"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row260919925618"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_p17610179175619"><a name="en-us_topic_0237121998_p17610179175619"></a><a name="en-us_topic_0237121998_p17610179175619"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.44715528447155%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p361013935612"><a name="en-us_topic_0237121998_p361013935612"></a><a name="en-us_topic_0237121998_p361013935612"></a>Attribute Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.175482451754824%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p461011975616"><a name="en-us_topic_0237121998_p461011975616"></a><a name="en-us_topic_0237121998_p461011975616"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row116109912569"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p461079145611"><a name="en-us_topic_0237121998_p461079145611"></a><a name="en-us_topic_0237121998_p461079145611"></a>name</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p161020985611"><a name="en-us_topic_0237121998_p161020985611"></a><a name="en-us_topic_0237121998_p161020985611"></a>class_a:workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p196108914566"><a name="en-us_topic_0237121998_p196108914566"></a><a name="en-us_topic_0237121998_p196108914566"></a>Name of class and workload</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row06106985619"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p7610149125612"><a name="en-us_topic_0237121998_p7610149125612"></a><a name="en-us_topic_0237121998_p7610149125612"></a>class</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p2610139185611"><a name="en-us_topic_0237121998_p2610139185611"></a><a name="en-us_topic_0237121998_p2610139185611"></a>class_a</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p4610196562"><a name="en-us_topic_0237121998_p4610196562"></a><a name="en-us_topic_0237121998_p4610196562"></a>Class Cgroup name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1399384455713"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p209946441573"><a name="en-us_topic_0237121998_p209946441573"></a><a name="en-us_topic_0237121998_p209946441573"></a>workload</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p159941447578"><a name="en-us_topic_0237121998_p159941447578"></a><a name="en-us_topic_0237121998_p159941447578"></a>workload_a1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p20994544125713"><a name="en-us_topic_0237121998_p20994544125713"></a><a name="en-us_topic_0237121998_p20994544125713"></a>Workload Cgroup name</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row8632178185817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p17633882582"><a name="en-us_topic_0237121998_p17633882582"></a><a name="en-us_topic_0237121998_p17633882582"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p863315865812"><a name="en-us_topic_0237121998_p863315865812"></a><a name="en-us_topic_0237121998_p863315865812"></a>DEFWD</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p46338815818"><a name="en-us_topic_0237121998_p46338815818"></a><a name="en-us_topic_0237121998_p46338815818"></a>Cgroup type (Top, CLASS, BAKWD, DEFWD, and TSWD)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row19207812135811"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p2208812105815"><a name="en-us_topic_0237121998_p2208812105815"></a><a name="en-us_topic_0237121998_p2208812105815"></a>gid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p11208161265812"><a name="en-us_topic_0237121998_p11208161265812"></a><a name="en-us_topic_0237121998_p11208161265812"></a>87</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1120816121589"><a name="en-us_topic_0237121998_p1120816121589"></a><a name="en-us_topic_0237121998_p1120816121589"></a>Cgroup ID</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row01967412582"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p15196164105812"><a name="en-us_topic_0237121998_p15196164105812"></a><a name="en-us_topic_0237121998_p15196164105812"></a>shares</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p619610455819"><a name="en-us_topic_0237121998_p619610455819"></a><a name="en-us_topic_0237121998_p619610455819"></a>30</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p01966445815"><a name="en-us_topic_0237121998_p01966445815"></a><a name="en-us_topic_0237121998_p01966445815"></a>Percentage of CPU resources to those on the parent node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1931985165714"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p183203516578"><a name="en-us_topic_0237121998_p183203516578"></a><a name="en-us_topic_0237121998_p183203516578"></a>limits</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p7320125111571"><a name="en-us_topic_0237121998_p7320125111571"></a><a name="en-us_topic_0237121998_p7320125111571"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p43209514578"><a name="en-us_topic_0237121998_p43209514578"></a><a name="en-us_topic_0237121998_p43209514578"></a>Percentage of CPU cores to those on the parent node</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row148871119165810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p6887201917580"><a name="en-us_topic_0237121998_p6887201917580"></a><a name="en-us_topic_0237121998_p6887201917580"></a>rate</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p188871519125814"><a name="en-us_topic_0237121998_p188871519125814"></a><a name="en-us_topic_0237121998_p188871519125814"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1988821914586"><a name="en-us_topic_0237121998_p1988821914586"></a><a name="en-us_topic_0237121998_p1988821914586"></a>Allocation raio in Timeshare</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1970717163583"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p47079162588"><a name="en-us_topic_0237121998_p47079162588"></a><a name="en-us_topic_0237121998_p47079162588"></a>cpucores</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.44715528447155%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p37074160581"><a name="en-us_topic_0237121998_p37074160581"></a><a name="en-us_topic_0237121998_p37074160581"></a>0-3</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.175482451754824%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p17078161586"><a name="en-us_topic_0237121998_p17078161586"></a><a name="en-us_topic_0237121998_p17078161586"></a>CPU cores</p>
    </td>
    </tr>
    </tbody>
    </table>

-   get\_instr\_workload\_info\(integer\)

    Description: Obtains the transaction volume and time information on the primary database node.

    Return type: record

    <a name="en-us_topic_0237121998_table11596620133817"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row2596020173814"><th class="cellrowborder" valign="top" width="26.37736226377362%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_p859672013382"><a name="en-us_topic_0237121998_p859672013382"></a><a name="en-us_topic_0237121998_p859672013382"></a>Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.357164283571645%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p65961920183815"><a name="en-us_topic_0237121998_p65961920183815"></a><a name="en-us_topic_0237121998_p65961920183815"></a>Attribute Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="45.26547345265474%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p0597320123812"><a name="en-us_topic_0237121998_p0597320123812"></a><a name="en-us_topic_0237121998_p0597320123812"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row9597152043813"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p85971620193814"><a name="en-us_topic_0237121998_p85971620193814"></a><a name="en-us_topic_0237121998_p85971620193814"></a>resourcepool_oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1159742018382"><a name="en-us_topic_0237121998_p1159742018382"></a><a name="en-us_topic_0237121998_p1159742018382"></a>10</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p6251644184720"><a name="en-us_topic_0237121998_p6251644184720"></a><a name="en-us_topic_0237121998_p6251644184720"></a>OID of the resource pool (the logic is equivalent to the load)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row359712053818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p359718205387"><a name="en-us_topic_0237121998_p359718205387"></a><a name="en-us_topic_0237121998_p359718205387"></a>commit_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p16597420133810"><a name="en-us_topic_0237121998_p16597420133810"></a><a name="en-us_topic_0237121998_p16597420133810"></a>4</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p182501441478"><a name="en-us_topic_0237121998_p182501441478"></a><a name="en-us_topic_0237121998_p182501441478"></a>Number of front-end transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1259720206381"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1559722013812"><a name="en-us_topic_0237121998_p1559722013812"></a><a name="en-us_topic_0237121998_p1559722013812"></a>rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p155971720163818"><a name="en-us_topic_0237121998_p155971720163818"></a><a name="en-us_topic_0237121998_p155971720163818"></a>1</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1924994424720"><a name="en-us_topic_0237121998_p1924994424720"></a><a name="en-us_topic_0237121998_p1924994424720"></a>Number of front-end transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row12597820153817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p17597520103816"><a name="en-us_topic_0237121998_p17597520103816"></a><a name="en-us_topic_0237121998_p17597520103816"></a>resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p4597420193815"><a name="en-us_topic_0237121998_p4597420193815"></a><a name="en-us_topic_0237121998_p4597420193815"></a>949</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p824864494710"><a name="en-us_topic_0237121998_p824864494710"></a><a name="en-us_topic_0237121998_p824864494710"></a>Minimum response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row95971020153817"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1259719206384"><a name="en-us_topic_0237121998_p1259719206384"></a><a name="en-us_topic_0237121998_p1259719206384"></a>resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p205984208383"><a name="en-us_topic_0237121998_p205984208383"></a><a name="en-us_topic_0237121998_p205984208383"></a>201891</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p224704444712"><a name="en-us_topic_0237121998_p224704444712"></a><a name="en-us_topic_0237121998_p224704444712"></a>Maximum response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row95981320153810"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p10598192063818"><a name="en-us_topic_0237121998_p10598192063818"></a><a name="en-us_topic_0237121998_p10598192063818"></a>resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1059832019385"><a name="en-us_topic_0237121998_p1059832019385"></a><a name="en-us_topic_0237121998_p1059832019385"></a>43564</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p7246174414712"><a name="en-us_topic_0237121998_p7246174414712"></a><a name="en-us_topic_0237121998_p7246174414712"></a>Average response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1059822014389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p18598420103816"><a name="en-us_topic_0237121998_p18598420103816"></a><a name="en-us_topic_0237121998_p18598420103816"></a>resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p65985207388"><a name="en-us_topic_0237121998_p65985207388"></a><a name="en-us_topic_0237121998_p65985207388"></a>217822</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1224584413477"><a name="en-us_topic_0237121998_p1224584413477"></a><a name="en-us_topic_0237121998_p1224584413477"></a>Total response time of front-end transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row159852013380"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p135981420193810"><a name="en-us_topic_0237121998_p135981420193810"></a><a name="en-us_topic_0237121998_p135981420193810"></a>bg_commit_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p15984206380"><a name="en-us_topic_0237121998_p15984206380"></a><a name="en-us_topic_0237121998_p15984206380"></a>910</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p075814565503"><a name="en-us_topic_0237121998_p075814565503"></a><a name="en-us_topic_0237121998_p075814565503"></a>Number of background transactions that were committed</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row19598192013815"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p559812053810"><a name="en-us_topic_0237121998_p559812053810"></a><a name="en-us_topic_0237121998_p559812053810"></a>bg_rollback_counter</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p16598152020386"><a name="en-us_topic_0237121998_p16598152020386"></a><a name="en-us_topic_0237121998_p16598152020386"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p9769159175019"><a name="en-us_topic_0237121998_p9769159175019"></a><a name="en-us_topic_0237121998_p9769159175019"></a>Number of background transactions that were rolled back</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row337414493389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p133752049173811"><a name="en-us_topic_0237121998_p133752049173811"></a><a name="en-us_topic_0237121998_p133752049173811"></a>bg_resp_min</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p183757493389"><a name="en-us_topic_0237121998_p183757493389"></a><a name="en-us_topic_0237121998_p183757493389"></a>97</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1192231165119"><a name="en-us_topic_0237121998_p1192231165119"></a><a name="en-us_topic_0237121998_p1192231165119"></a>Minimum response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row45313548389"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p65355419381"><a name="en-us_topic_0237121998_p65355419381"></a><a name="en-us_topic_0237121998_p65355419381"></a>bg_resp_max</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p175345413382"><a name="en-us_topic_0237121998_p175345413382"></a><a name="en-us_topic_0237121998_p175345413382"></a>678080687</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p76633614519"><a name="en-us_topic_0237121998_p76633614519"></a><a name="en-us_topic_0237121998_p76633614519"></a>Maximum response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row225795743818"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p2257857123819"><a name="en-us_topic_0237121998_p2257857123819"></a><a name="en-us_topic_0237121998_p2257857123819"></a>bg_resp_avg</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p3257257143815"><a name="en-us_topic_0237121998_p3257257143815"></a><a name="en-us_topic_0237121998_p3257257143815"></a>327847884</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p13572131118512"><a name="en-us_topic_0237121998_p13572131118512"></a><a name="en-us_topic_0237121998_p13572131118512"></a>Average response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row35321851114514"><td class="cellrowborder" valign="top" width="26.37736226377362%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p7533951154513"><a name="en-us_topic_0237121998_p7533951154513"></a><a name="en-us_topic_0237121998_p7533951154513"></a>bg_resp_total</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.357164283571645%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p7533351194520"><a name="en-us_topic_0237121998_p7533351194520"></a><a name="en-us_topic_0237121998_p7533351194520"></a>298341575300</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.26547345265474%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p17865151410518"><a name="en-us_topic_0237121998_p17865151410518"></a><a name="en-us_topic_0237121998_p17865151410518"></a>Total response time of background transactions (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pv\_instance\_time\(\)

    Description: Obtains the time consumed in each execution phase on the current node.

    Return type: record

    <a name="en-us_topic_0237121998_table1149417513587"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121998_row17494175195812"><th class="cellrowborder" valign="top" width="26.37736226377363%" id="mcps1.1.4.1.1"><p id="en-us_topic_0237121998_p5494751165810"><a name="en-us_topic_0237121998_p5494751165810"></a><a name="en-us_topic_0237121998_p5494751165810"></a>Stat_name Attribute</p>
    </th>
    <th class="cellrowborder" valign="top" width="25.317468253174685%" id="mcps1.1.4.1.2"><p id="en-us_topic_0237121998_p1049411514586"><a name="en-us_topic_0237121998_p1049411514586"></a><a name="en-us_topic_0237121998_p1049411514586"></a>Attribute Value</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.3051694830517%" id="mcps1.1.4.1.3"><p id="en-us_topic_0237121998_p1349455114584"><a name="en-us_topic_0237121998_p1349455114584"></a><a name="en-us_topic_0237121998_p1349455114584"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121998_row8494451135816"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p549525155814"><a name="en-us_topic_0237121998_p549525155814"></a><a name="en-us_topic_0237121998_p549525155814"></a>DB_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1733818301818"><a name="en-us_topic_0237121998_p1733818301818"></a><a name="en-us_topic_0237121998_p1733818301818"></a>1062385</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p2337143016114"><a name="en-us_topic_0237121998_p2337143016114"></a><a name="en-us_topic_0237121998_p2337143016114"></a>Total end-to-end wall time consumed by all threads (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row749595118581"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1495105135816"><a name="en-us_topic_0237121998_p1495105135816"></a><a name="en-us_topic_0237121998_p1495105135816"></a>CPU_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p203361230316"><a name="en-us_topic_0237121998_p203361230316"></a><a name="en-us_topic_0237121998_p203361230316"></a>311777</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1833583012115"><a name="en-us_topic_0237121998_p1833583012115"></a><a name="en-us_topic_0237121998_p1833583012115"></a>Total CPU time consumed by all threads (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row16495951175812"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p1495155195818"><a name="en-us_topic_0237121998_p1495155195818"></a><a name="en-us_topic_0237121998_p1495155195818"></a>EXECUTION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p10334130312"><a name="en-us_topic_0237121998_p10334130312"></a><a name="en-us_topic_0237121998_p10334130312"></a>380037</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p633313302012"><a name="en-us_topic_0237121998_p633313302012"></a><a name="en-us_topic_0237121998_p633313302012"></a>Total time consumed on the executor (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row74951351185818"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p19495185135816"><a name="en-us_topic_0237121998_p19495185135816"></a><a name="en-us_topic_0237121998_p19495185135816"></a>PARSE_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p733263016111"><a name="en-us_topic_0237121998_p733263016111"></a><a name="en-us_topic_0237121998_p733263016111"></a>6033</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p33313301713"><a name="en-us_topic_0237121998_p33313301713"></a><a name="en-us_topic_0237121998_p33313301713"></a>Total time consumed for parsing SQL statements (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row549555145818"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p164951051115813"><a name="en-us_topic_0237121998_p164951051115813"></a><a name="en-us_topic_0237121998_p164951051115813"></a>PLAN_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p7330123012117"><a name="en-us_topic_0237121998_p7330123012117"></a><a name="en-us_topic_0237121998_p7330123012117"></a>173356</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p03291130113"><a name="en-us_topic_0237121998_p03291130113"></a><a name="en-us_topic_0237121998_p03291130113"></a>Total time consumed for generating an execution plan (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row049565195819"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p84962517584"><a name="en-us_topic_0237121998_p84962517584"></a><a name="en-us_topic_0237121998_p84962517584"></a>REWRITE_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p032811304119"><a name="en-us_topic_0237121998_p032811304119"></a><a name="en-us_topic_0237121998_p032811304119"></a>2274</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p173279301214"><a name="en-us_topic_0237121998_p173279301214"></a><a name="en-us_topic_0237121998_p173279301214"></a>Total time consumed on query rewriting (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row1249618515587"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p16496175175812"><a name="en-us_topic_0237121998_p16496175175812"></a><a name="en-us_topic_0237121998_p16496175175812"></a>PL_EXECUTION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p2032653013119"><a name="en-us_topic_0237121998_p2032653013119"></a><a name="en-us_topic_0237121998_p2032653013119"></a>0</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p1132512301213"><a name="en-us_topic_0237121998_p1132512301213"></a><a name="en-us_topic_0237121998_p1132512301213"></a>Total time consumed for executing PL/SQL statements (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row7496751105819"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p94968513584"><a name="en-us_topic_0237121998_p94968513584"></a><a name="en-us_topic_0237121998_p94968513584"></a>PL_COMPILATION_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p163241730816"><a name="en-us_topic_0237121998_p163241730816"></a><a name="en-us_topic_0237121998_p163241730816"></a>557</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p632310301312"><a name="en-us_topic_0237121998_p632310301312"></a><a name="en-us_topic_0237121998_p632310301312"></a>Total time consumed for SQL compilation (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row649618515581"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p154961151125814"><a name="en-us_topic_0237121998_p154961151125814"></a><a name="en-us_topic_0237121998_p154961151125814"></a>NET_SEND_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p1732213305119"><a name="en-us_topic_0237121998_p1732213305119"></a><a name="en-us_topic_0237121998_p1732213305119"></a>1673</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p143201430118"><a name="en-us_topic_0237121998_p143201430118"></a><a name="en-us_topic_0237121998_p143201430118"></a>Total time consumed for sending data over network (unit: μs)</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121998_row949616511589"><td class="cellrowborder" valign="top" width="26.37736226377363%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0237121998_p17496115114582"><a name="en-us_topic_0237121998_p17496115114582"></a><a name="en-us_topic_0237121998_p17496115114582"></a>DATA_IO_TIME</p>
    </td>
    <td class="cellrowborder" valign="top" width="25.317468253174685%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0237121998_p11319113017114"><a name="en-us_topic_0237121998_p11319113017114"></a><a name="en-us_topic_0237121998_p11319113017114"></a>426622</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.3051694830517%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0237121998_p113188301015"><a name="en-us_topic_0237121998_p113188301015"></a><a name="en-us_topic_0237121998_p113188301015"></a>Total time consumed for data read and write (unit: μs)</p>
    </td>
    </tr>
    </tbody>
    </table>

-   DBE\_PERF.get\_global\_instance\_time\(\)

    Description: Provides the time consumption of each key phase of openGauss. This function is supported only on the primary node of the database. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_unique\_sql\(\)

    Description: Obtains information about execution statements \(normalized SQL statements\) on the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   reset\_unique\_sql\(text, text, bigint\)

    Description: Resets information about system execution statements \(normalized SQL statements\) information as a user with the  **sysadmin**  permission. The value of the first parameter can be** global**  or  **local**.  **global**  indicates that information on all nodes is cleared, and  **local**  indicates that only information on the current node is cleared. The value of the second parameter can be  **ALL**,  **BY\_USERID**, or  **BY\_CNID**.  **ALL**  indicates that all information is cleared.  **BY\_USERID**  indicates that the SQL information of the user specified by  **USERID**  is cleared.  **BY\_CNID**  indicates that the SQL information related to the primary node of the database in the system is cleared. The third parameter indicates  **CNID**  and  **USERID**. If the second parameter is set to  **ALL**, the third parameter does not take effect and can be set to any value.

    Return type: Boolean

-   get\_instr\_wait\_event\(NULL\)

    Description: Obtains the statistics on wait events of the current node.

    Return type: record

-   get\_instr\_user\_login\(\)

    Description: Obtains the number of user login and logout times of the current node as a user with the  **sysadmin**  permission.

    Return type: record

-   get\_instr\_rt\_percentile\(\)

    Description: Obtains the response time distribution for 80% and 95% SQL statements in the CCN node. The unified cluster information of openGauss is stored on the CCN node. The query result from other nodes is  **0**.

    Return type: record

-   get\_node\_stat\_reset\_time\(\)

    Description: Obtains statistics about reset \(restart, primary/standby switchover, and database deletion\) time of the current node.

    Return type: record

-   DBE\_PERF.get\_global\_os\_runtime\(\)

    Description: Displays the running status of the current OS. This function is supported only on the primary node of the database. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_os\_threads\(\)

    Description: Provides information about the threads under all normal nodes of openGauss. This function is supported only on the primary node of the database. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_workload\_sql\_count\(\)

    Description: Provides statistics about the number of SELECT, UPDATE, INSERT, DELETE, DDL, DML, and DCL statements of different service loads in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_workload\_sql\_elapse\_time\(\)

    Description: Provides statistics about the number of SELECT, UPDATE, INSERT, and DELETE statements and response time information \(TOTAL, AVG, MIN, and MAX\) for different loads in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_workload\_transaction\(\)

    Description: Obtains the transaction volume and time information on all nodes of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_stat\(\)

    Description: Obtains the session status information on all nodes of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >The status information contains the following 17 items:  **commit**,  **rollback**,  **sql**,  **table\_scan**,  **blocks\_fetched**,  **physical\_read\_operation**,  
    >shared\_blocks\_dirtied,local\_blocks\_dirtied,shared\_blocks\_read,local\_blocks\_read,  
    >blocks\_read\_time,blocks\_write\_time,sort\_imemory,sort\_idisk,cu\_mem\_hit,  
    >cu\_hdd\_sync\_read,cu\_hdd\_asyread  

-   DBE\_PERF.get\_global\_session\_time\(\)

    Description: Provides the time consumed in each key phase of each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_memory\(\)

    Description: Displays statistics about memory usage at the session level on each node in the unit of MB, including all the memory allocated to Postgres and stream threads on DNs for jobs currently executed by users. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_session\_memory\_detail\(\)

    Description: Displays statistics about thread memory usage on each node by MemoryContext node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   gs\_session\_memory\_detail\_tp

    Description: Collects statistics about thread memory usage by MemoryContext node. When  **enable\_thread\_pool**  is set to  **on**, this view contains memory usage of all threads and sessions.

    Return type: record

-   DBE\_PERF.get\_global\_session\_stat\_activity\(\)

    Description: Displays information about threads that are running on each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_thread\_wait\_status\(\)

    Description: Displays the block waiting status of backend threads and auxiliary threads on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_wlm\_user\_resource\_runtime\(\)

    Description: Displays the resource usage of all users. This parameter is valid only when  **use\_workload\_manager**  is set to  **on**. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_history\_table\(\)

    Description: Displays the operator-related records \(persistent\) generated after jobs are executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_history\(\)

    Description: Displays the operator-related records generated after jobs are executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_operator\_runtime\(\)

    Description: Displays real-time operator-related records of jobs executed on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_history\(\)

    Description: Displays the historical records of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_history\_table\(\)

    Description: Displays the historical records \(persistent\) of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_complex\_runtime\(\)

    Description: Displays the real-time information of complex queries on the primary database node of the current user. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_memory\_node\_detail\(\)

    Description: Displays the memory usage of a certain database on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_shared\_memory\_detail\(\)

    Description: Displays the usage information about all the shared memory contexts of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_indexes

    Description: Displays statistics about each index displayed in a row in the current database, showing I/O statistics about accesses to that specific index. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_local\_toastname\_and\_toastindexname\(\)

    Description: Provides the mapping between the name and index of the local TOAST table and its associated tables.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_all\_indexes\(\)

    Description: Collects statistics about each index displayed in a row in the current databases of all nodes and displays the I/O statistics of a specific index. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_sequences\(\)

    Description: Provides I/O status information about all sequences in the namespace. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_all\_tables\(\)

    Description: Displays the I/O statistics about each table in databases on each node as a user with the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_all\_tables\(\)

    Description: Collects I/O statistics about each table in databases in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_local\_toast\_relation\(\)

    Description: Provides the mapping between the name of the local toast table and its associated table. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_sys\_indexes\(\)

    Description: Displays the I/O status information about all system catalog indexes in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_sys\_indexes\(\)

    Description: Collects the I/O status information about all system catalog indexes in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_sys\_sequences\(\)

    Description: Provides the I/O status information about all the system sequences in the namespace. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_sys\_tables\(\)

    Description: Provides I/O status information about all system catalogs in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_sys\_tables\(\)

    Description: Displays the I/O status information of all system catalogs in the namespace in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_user\_indexes\(\)

    Description: Displays the I/O status information about all user relationship table indexes in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_user\_indexes\(\)

    Description: Displays the I/O status information about all user relationship table indexes in namespaces in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_user\_sequences\(\)

    Description: Displays the I/O status information about all user sequences in the namespace of each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statio\_user\_tables\(\)

    Description: Displays the displays I/O status information about all user relationship tables in namespaces on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statio\_user\_tables\(\)

    Description: Displays the I/O status information about all user relationship tables in namespaces in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_stat\_db\_cu\(\)

    Description: Queries CU hits in a database and in each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_all\_indexes\(\)

    Description: Displays statistics of each index in databases on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_all\_indexes\(\)

    Description: Collects statistics on each index in all databases on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_sys\_tables\(\)

    Description: Displays statistics about the system catalogs of all the namespaces in  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_sys\_tables\(\)

    Description: Collects statistics about the system catalogs of all the namespaces in  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_sys\_indexes\(\)

    Description: Displays index status information about all the system catalogs in the  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_sys\_indexes\(\)

    Description: Collects statistics about index status information about all the system catalogs in the  **pg\_catalog**  and  **information\_schema**  schemas on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_user\_tables\(\)

    Description: Displays the status information about customized ordinary tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_user\_tables\(\)

    Description: Collects statistics about the status information about customized ordinary tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_user\_indexes\(\)

    Description: Displays the status information about the index of customized ordinary tables in all databases. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_user\_indexes\(\)

    Description: Collects statistics about the status information about the index of customized ordinary tables in all databases. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_database\(\)

    Description: Displays database statistics of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_database\_conflicts\(\)

    Description: Collects statistics on the database of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_all\_tables\(\)

    Description: Displays transaction status information about all ordinary tables and TOAST tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_xact\_all\_tables\(\)

    Description: Collects statistics about transaction status information about all ordinary tables and TOAST tables in all namespaces. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_sys\_tables\(\)

    Description: Displays transaction status information about all system catalogs in namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_xact\_sys\_tables\(\)

    Description: Collects statistics about transaction status information about all system catalogs in namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_user\_tables\(\)

    Description: Displays the transaction status information of the user tables in the namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_stat\_xact\_user\_tables\(\)

    Description: Collects statistics about the transaction status information of the user tables in the namespaces on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_user\_functions\(\)

    Description: Displays the transaction status information of customized functions in the namespaces on all nodes. To query the function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_xact\_user\_functions\(\)

    Description: Collects statistics about the transaction status information of customized functions in the namespaces on all nodes. To query the function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_stat\_bad\_block\(\)

    Description: Displays information about table and index read failures on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_file\_redo\_iostat\(\)

    Description: Collects statistics on information about table and index read failures on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_file\_iostat\(\)

    Description: Displays statistics about data file I/Os on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_locks\(\)

    Description: Displays lock information of all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_replication\_slots\(\)

    Description: Displays logical replication information on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_bgwriter\_stat\(\)

    Description: Displays statistics about the background writer process's activities on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_replication\_stat\(\)

    Description: Displays information about log synchronization status on each node, such as the locations where the sender sends logs and where the receiver receives logs. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_transactions\_running\_xacts\(\)

    Description: Displays information about running transactions on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_transactions\_running\_xacts\(\)

    Description: Collects statistics of information about running transactions on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_transactions\_prepared\_xacts\(\)

    Description: Displays information about transactions that are currently prepared for two-phase commit on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_transactions\_prepared\_xacts\(\)

    Description: Collects statistics information about transactions that are currently prepared for two-phase commit on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_statement\(\)

    Description: Displays the status information of the historically-executed statements on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_statement\_count\(\)

    Description: Displays the number of SELECT, UPDATE, INSERT, and DELETE statements and response time information \(TOTAL, AVG, MIN, and MAX\) on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_config\_settings\(\)

    Description: Displays GUC parameter configuration information on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_wait\_events\(\)

    Description: Displays the wait event status information on each node. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_statement\_responsetime\_percentile\(\)

    Description: Obtains the response time distribution for 80% and 95% SQL statements of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_summary\_user\_login\(\)

    Description: Collects statistics about number of user login and logout times on each node in openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   DBE\_PERF.get\_global\_record\_reset\_time\(\)

    Description: Displays the statistics about reset \(restart, primary/standby switchover, and database deletion\) time of openGauss. To query this function, you must have the  **sysadmin**  permission.

    Return type: record

-   gs\_wlm\_user\_resource\_info\(name text\)

    Description: Queries for a user's resource quota and resource usage.

    Return type: record

-   get\_local\_rel\_iostat\(\)

    Description: Queries the accumulated I/O status of data files on the current node.

    Return type: record

-   DBE\_PERF.get\_global\_rel\_iostat\(\)

    Description: Displays statistics about data file I/Os on all nodes. To query this function, you must have the  **sysadmin**  permission.

    Return type: record


Example:

The function  **pg\_backend\_pid**  shows the ID of the current server thread.

```
postgres=# SELECT pg_backend_pid();
 pg_backend_pid  
-----------------
 139706243217168
(1 row)
```

The function  **pg\_stat\_get\_backend\_pid**  shows the ID of a given server thread.

```
postgres=# SELECT pg_stat_get_backend_pid(1);
 pg_stat_get_backend_pid 
-------------------------
         139706243217168
(1 row)
```

