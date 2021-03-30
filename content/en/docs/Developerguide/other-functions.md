# Other Functions<a name="EN-US_TOPIC_0289900063"></a>

-   plan\_seed\(\)

    Description: Obtains the seed value of the previous query statement \(internal use\).

    Return type: int

-   pg\_stat\_get\_env\(\)

    Description: Obtains the environment variable information of the current node. Only the sysadmin and monitor admin users can access the environment variable information.

    Return type: record

    Example:

    ```
    postgres=# select pg_stat_get_env();
                                                                                  pg_stat_get_env
    ---------------------------------------------------------------------------------------------------------------------------------------
     (coordinator1,localhost,144773,49100,/data1/GaussDB_Kernel_TRUNK/install,/data1/GaussDB_Kernel_TRUNK/install/data/coordinator1,pg_log)
    (1 row)
    ```

-   pg\_catalog.plancache\_clean\(\)

    Description: Clears the global plan cache that is not used on nodes.

    Return type: Boolean

-   pg\_catalog.plancache\_status\(\)

    Description: Displays information about the global plan cache on nodes. The information returned by the function is the same as that in  [GLOBAL\_PLANCACHE\_STATUS](GLOBAL_PLANCACHE_STATUS.md).

    Return type: record

-   textlen\(\)

    Description: Provides the method of querying the logical length of text.

    Return type: int

-   threadpool\_status\(\)

    Description: Displays the status of worker threads and sessions in the thread pool.

    Return type: record

-   get\_local\_active\_session\(\)

    Description: Provides sampling records of the historical active session status stored in the memory of the current node.

    Return type: record

-   pg\_stat\_get\_thread\(\)

    Description: Provides information about the status of all threads under the current node.

    Return type: record

-   pg\_stat\_get\_sql\_count\(\)

    Description: Provides the counts of the  **SELECT**,  **UPDATE**,  **INSERT**,  **DELETE**, and  **MERGE INTO**  statements executed on the current node.

    Return type: record

-   pg\_stat\_get\_data\_senders\(\)

    Description: Provides detailed information about the data-copy sending thread active at the moment.

    Return type: record

-   generate\_wdr\_report\(begin\_snap\_id bigint, end\_snap\_id bigint, report\_type cstring, report\_scope cstring, node\_name cstring\)

    Description: Generates system diagnosis reports based on two snapshots. You need to run the command in the postgres database. By default, the initial user or the monadmin user can access the database. In V500R001C20SPC002 and earlier versions, the initial user or the sysadmin user can access the database.

    Return type: record

    **Table  1**  generate\_wdr\_report parameter description

    <a name="en-us_topic_0283137465_en-us_topic_0237121997_table1757513581634"></a>
    <table><tbody><tr id="en-us_topic_0283137465_en-us_topic_0237121997_row1280114581437"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p11801115814318"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p11801115814318"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p11801115814318"></a>Parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p158015584310"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p158015584310"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p158015584310"></a>Description</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p1880217581937"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1880217581937"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1880217581937"></a>Value Range</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row680211581937"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p380217581314"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p380217581314"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p380217581314"></a>begin_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p128028581331"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p128028581331"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p128028581331"></a>Snapshot ID that starts the diagnosis report period.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p78026587313"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p78026587313"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p78026587313"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row7802105817316"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p198029587313"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p198029587313"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p198029587313"></a>end_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p1080215589316"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1080215589316"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1080215589316"></a>Snapshot ID that ends the diagnosis report period. By default, the value of <strong id="b1037832010428"><a name="b1037832010428"></a><a name="b1037832010428"></a>end_snap_id</strong> is greater than that of <strong id="b91311123144216"><a name="b91311123144216"></a><a name="b91311123144216"></a>begin_snap_id</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p5802158436"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p5802158436"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p5802158436"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row1280225810310"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p580217585317"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p580217585317"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p580217585317"></a>report_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p19803858132"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p19803858132"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p19803858132"></a>Specifies the type of the generated report.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><a name="en-us_topic_0283137465_en-us_topic_0237121997_ul9103640142011"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_ul9103640142011"></a><ul id="en-us_topic_0283137465_en-us_topic_0237121997_ul9103640142011"><li><strong id="b75191529124515"><a name="b75191529124515"></a><a name="b75191529124515"></a>summary</strong></li><li><strong id="b1470510362456"><a name="b1470510362456"></a><a name="b1470510362456"></a>detail</strong></li><li><strong id="b18337195913443"><a name="b18337195913443"></a><a name="b18337195913443"></a>all</strong>: Both <strong id="b743112817459"><a name="b743112817459"></a><a name="b743112817459"></a>summary </strong>and <strong id="b1023181119455"><a name="b1023181119455"></a><a name="b1023181119455"></a>detail</strong> types are included.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row148031458936"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p28038584317"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p28038584317"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p28038584317"></a>report_scope</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p108034581732"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p108034581732"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p108034581732"></a>Specifies the scope for a report to be generated.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><a name="ul10102152712184"></a><a name="ul10102152712184"></a><ul id="ul10102152712184"><li>cluster: database-level information</li><li>node: node-level information</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row188031958732"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p1280316588318"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1280316588318"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1280316588318"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137259_p9831125295619"><a name="en-us_topic_0283137259_p9831125295619"></a><a name="en-us_topic_0283137259_p9831125295619"></a>When <strong id="b51081142164115"><a name="b51081142164115"></a><a name="b51081142164115"></a>report_scope</strong> is set to <strong id="b81764554114"><a name="b81764554114"></a><a name="b81764554114"></a>node</strong>, set this parameter to the name of the corresponding node. (You can run the select * from pg_node_env; command to query the node name.)</p>
    <p id="en-us_topic_0283137259_p941074755313"><a name="en-us_topic_0283137259_p941074755313"></a><a name="en-us_topic_0283137259_p941074755313"></a>If <strong id="b87314582410"><a name="b87314582410"></a><a name="b87314582410"></a>report_scope</strong> is set to <strong id="b83581212424"><a name="b83581212424"></a><a name="b83581212424"></a>cluster</strong>, this parameter can be omitted, left blank, or set to <strong id="b3186694426"><a name="b3186694426"></a><a name="b3186694426"></a>NULL</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p12803258238"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p12803258238"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p12803258238"></a></p>
    <a name="ul8919134451817"></a><a name="ul8919134451817"></a><ul id="ul8919134451817"><li>cluster: omitted/null/NULL</li><li>node: indicates the node name in openGauss.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   create\_wdr\_snapshot\(\)

    Description: Manually generates system diagnosis snapshots. This function requires the sysadmin permission.

    Return type: text

-   reset\_unique\_sql

    Description: Clears the Unique SQL statements in the memory of the database node. \(The sysadmin permission is required.\)

    Return type: Boolean

    **Table  2**  reset\_unique\_sql parameter description

    <a name="en-us_topic_0283137465_table143441146077"></a>
    <table><thead align="left"><tr id="en-us_topic_0283137465_row934420464720"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137465_p7344646272"><a name="en-us_topic_0283137465_p7344646272"></a><a name="en-us_topic_0283137465_p7344646272"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137465_p123445461977"><a name="en-us_topic_0283137465_p123445461977"></a><a name="en-us_topic_0283137465_p123445461977"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137465_p4344646478"><a name="en-us_topic_0283137465_p4344646478"></a><a name="en-us_topic_0283137465_p4344646478"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0283137465_row634484612716"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137465_p1322984713256"><a name="en-us_topic_0283137465_p1322984713256"></a><a name="en-us_topic_0283137465_p1322984713256"></a>scope</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137465_p9227144715250"><a name="en-us_topic_0283137465_p9227144715250"></a><a name="en-us_topic_0283137465_p9227144715250"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137465_p1322620473258"><a name="en-us_topic_0283137465_p1322620473258"></a><a name="en-us_topic_0283137465_p1322620473258"></a>Clearance scope type. The options are as follows:</p>
    <a name="en-us_topic_0283137465_ul27053230486"></a><a name="en-us_topic_0283137465_ul27053230486"></a><ul id="en-us_topic_0283137465_ul27053230486"><li><strong id="b1041264162318"><a name="b1041264162318"></a><a name="b1041264162318"></a>'GLOBAL'</strong>: Clears all nodes. If the value is <strong id="b1746111919233"><a name="b1746111919233"></a><a name="b1746111919233"></a>'GLOBAL'</strong>, this function can be executed only on the primary node.</li><li><strong id="b134321043182313"><a name="b134321043182313"></a><a name="b134321043182313"></a>'LOCAL'</strong>: Clears the current node.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_row113456461571"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137465_p13830135712614"><a name="en-us_topic_0283137465_p13830135712614"></a><a name="en-us_topic_0283137465_p13830135712614"></a>clean_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137465_p1722494715253"><a name="en-us_topic_0283137465_p1722494715253"></a><a name="en-us_topic_0283137465_p1722494715253"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137465_ul9212421184913"></a><a name="en-us_topic_0283137465_ul9212421184913"></a><ul id="en-us_topic_0283137465_ul9212421184913"><li><strong id="b1998874142411"><a name="b1998874142411"></a><a name="b1998874142411"></a>'BY_USERID'</strong>: The Unique SQL statements are cleared based on user IDs.</li><li><strong id="b1870945142914"><a name="b1870945142914"></a><a name="b1870945142914"></a>'BY_CNID'</strong>: The Unique SQL statements are cleared based on primary node IDs.</li><li><strong id="b187256345263"><a name="b187256345263"></a><a name="b187256345263"></a>'ALL'</strong>: All data is cleared.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_row934510461379"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137465_p1122194711253"><a name="en-us_topic_0283137465_p1122194711253"></a><a name="en-us_topic_0283137465_p1122194711253"></a>clean_value</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137465_p1922034720255"><a name="en-us_topic_0283137465_p1922034720255"></a><a name="en-us_topic_0283137465_p1922034720255"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137465_p19219947132513"><a name="en-us_topic_0283137465_p19219947132513"></a><a name="en-us_topic_0283137465_p19219947132513"></a>Clearance value corresponding to the clearance type.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   wdr\_xdb\_query\(db\_name\_str text, query text\)

    Description: Provides the capability of executing local cross-database queries. For example, when connecting to the Postgres database, access tables in the  **test**  database.

    ```
    select col1 from wdr_xdb_query('dbname=test','select col1 from t1') as dd(col1 int);
    ```

    Return type: record

-   pg\_wlm\_jump\_queue\(pid int\)

    Description: Moves a task to the top of the CN queue.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   gs\_wlm\_switch\_cgroup\(pid int, cgroup text\)

    Description: Moves a job to other Cgroup to improve the job priority.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   pv\_session\_memctx\_detail\(threadid tid, MemoryContextName text\)

    Description: Record information about the memory context  **MemoryContextName**  of the thread  **tid**  into the  _threadid_**\_timestamp.log**  file in the  _$GAUSSLOG_**/pg\_log/**_$\{node\_name\}_**/dumpmem**  directory.  _threadid_  can be obtained from  _sessid_  in the  **PV\_SESSION\_MEMORY\_DETAIL**  table. In the officially released version, only the  **MemoryContextName**  that is an empty string \(two single quotation marks indicate that the input is an empty string\) is accepted. In this case, all memory context information is recorded. Otherwise, no operation is performed. For the DEBUG version for internal development and test personnel to debug, you can specify the  **MemoryContextName**  to be counted. In this case, all the memory usage of the context is recorded in the specified file. Only the administrator can execute this function.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   pg\_shared\_memctx\_detail\(MemoryContextName text\)

    Description: Record information about the memory context  **MemoryContextName**  into the  _threadid_**\_timestamp.log**  file in the  _$GAUSSLOG_**/pg\_log/**_$\{node\_name\}_**/dumpmem**  directory. This function is provided only for internal development and test personnel to debug in the DEBUG version. Calling this function in the officially released version does not involve any operation. Only the administrator can execute this function.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   local\_bgwriter\_stat\(\)

    Description: Displays the information about pages flushed by the bgwriter thread of this instance, number of pages in the candidate buffer chain, and buffer elimination information.

    Return type: record

-   local\_ckpt\_stat\(\)

    Description: Displays the information about checkpoints and flushing pages of the current instance.

    Return type: record

-   local\_double\_write\_stat\(\)

    Description: Displays the doublewrite file status of the current instance.

    Return type: record

-   local\_single\_flush\_dw\_stat\(\)

    Description: Displays the elimination of dual-write files on a single page in the instance.

    Return type: record

-   local\_pagewriter\_stat\(\)

    Description: Displays the page flushing information and checkpoint information of the current instance.

    Return type: record

-   local\_redo\_stat\(\)

    Description: Displays the replay status of the current standby instance.

    Return type: record

    Note: The returned replay status includes the current replay position and the replay position of the minimum restoration point.

-   local\_recovery\_status\(\)

    Description: Displays log flow control information about the primary and standby instances.

    Return type: record

-   gs\_wlm\_node\_recover\(boolean isForce\)

    Description: Obtains top SQL query statement-level statistics recorded in the current memory. If the input parameter is not 0, the information is cleared from the memory.

    Return type: record

-   gs\_cgroup\_map\_ng\_conf\(group name\)

    Description: Reads the Cgroup configuration file of a specified logical database.

    Return type: record

-   gs\_wlm\_switch\_cgroup\(sess\_id int8, cgroup name\)

    Description: Switches the cgroup of a specified session.

    Return type: record

-   hdfs\_fdw\_handler\(\)

    Description: Rewrites a foreign table. It is a function to be defined when a foreign table is defined.

    Return type: record

-   hdfs\_fdw\_validator\(text\[\], oid\)

    Description: Rewrites a foreign table. It is a function to be defined when a foreign table is defined.

    Return type: record

-   comm\_client\_info\(\)

    Description: Queries information about active client connections of a single node.

    Return type: SETOF record

-   pg\_sync\_cstore\_delta\(text\)

    Description: Synchronizes the delta table structure of a specified column-store table with that of the column-store primary table.

    Return type: bigint

-   pg\_sync\_cstore\_delta\(\)

    Description: Synchronizes the delta table structure of all column-store tables with that of the column-store primary table.

    Return type: bigint

-   pg\_get\_flush\_lsn\(\)

    Description: Returns the location of the Xlog flushed from the current node.

    Return type: text

-   pg\_get\_sync\_flush\_lsn\(\)

    Description: Returns the location of the Xlog flushed by the majority on the current node.

    Return type: text

-   gs\_create\_log\_tables\(\)

    Description: Creates foreign tables and views for run logs and performance logs.

    Return type: void

    Example:

    ```
    postgres=# select gs_create_log_tables();
     gs_create_log_tables
    ----------------------
    
    (1 row)
    ```

-   dbe\_perf.get\_global\_full\_sql\_by\_timestamp\(start\_timestamp timestamp with time zone, end\_timestamp timestamp with time zone\)

    Description: Obtains full SQL information at the database level.

    Return type: record

    **Table  3**  dbe\_perf.get\_global\_full\_sql\_by\_timestamp parameter description

    <a name="table173628271511"></a>
    <table><thead align="left"><tr id="row2036210271054"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p63621027457"><a name="p63621027457"></a><a name="p63621027457"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="22.06220622062206%" id="mcps1.2.4.1.2"><p id="p3362327156"><a name="p3362327156"></a><a name="p3362327156"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="57.69576957695769%" id="mcps1.2.4.1.3"><p id="p13362627452"><a name="p13362627452"></a><a name="p13362627452"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row173625271356"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p638719511858"><a name="p638719511858"></a><a name="p638719511858"></a>start_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p152934101864"><a name="p152934101864"></a><a name="p152934101864"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1376712315612"><a name="p1376712315612"></a><a name="p1376712315612"></a>Start point of the SQL start time range.</p>
    </td>
    </tr>
    <tr id="row17363142719512"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p129832059655"><a name="p129832059655"></a><a name="p129832059655"></a>end_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p14382011366"><a name="p14382011366"></a><a name="p14382011366"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1736312720519"><a name="p1736312720519"></a><a name="p1736312720519"></a>End point of the SQL start time range.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   dbe\_perf.get\_global\_slow\_sql\_by\_timestamp\(start\_timestamp timestamp with time zone, end\_timestamp timestamp with time zone\)

    Description: Obtains slow SQL information at the database level.

    Return type: record

    **Table  4**  dbe\_perf.get\_global\_slow\_sql\_by\_timestamp parameter description

    <a name="table152133591871"></a>
    <table><thead align="left"><tr id="row72147595714"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p1921419591570"><a name="p1921419591570"></a><a name="p1921419591570"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="22.06220622062206%" id="mcps1.2.4.1.2"><p id="p221415916720"><a name="p221415916720"></a><a name="p221415916720"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="57.69576957695769%" id="mcps1.2.4.1.3"><p id="p32140592071"><a name="p32140592071"></a><a name="p32140592071"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row3214185916710"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p1721455912713"><a name="p1721455912713"></a><a name="p1721455912713"></a>start_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p12143595711"><a name="p12143595711"></a><a name="p12143595711"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1721455914713"><a name="p1721455914713"></a><a name="p1721455914713"></a>Start point of the SQL start time range.</p>
    </td>
    </tr>
    <tr id="row321413592710"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p162141759672"><a name="p162141759672"></a><a name="p162141759672"></a>end_timestamp</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p202141559372"><a name="p202141559372"></a><a name="p202141559372"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p1421455917712"><a name="p1421455917712"></a><a name="p1421455917712"></a>End point of the SQL start time range.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   statement\_detail\_decode\(detail text, format text, pretty boolean\)

    Description: Parses the details column in a full or slow SQL statement.

    Return type: text

    **Table  5**  statement\_detail\_decode parameter description

    <a name="table9745177191215"></a>
    <table><thead align="left"><tr id="row127451717124"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p1974687151213"><a name="p1974687151213"></a><a name="p1974687151213"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="22.06220622062206%" id="mcps1.2.4.1.2"><p id="p147461271125"><a name="p147461271125"></a><a name="p147461271125"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="57.69576957695769%" id="mcps1.2.4.1.3"><p id="p197461975128"><a name="p197461975128"></a><a name="p197461975128"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row167467711212"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p197461379124"><a name="p197461379124"></a><a name="p197461379124"></a><strong id="b4248191533212"><a name="b4248191533212"></a><a name="b4248191533212"></a>detail</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p137462712123"><a name="p137462712123"></a><a name="p137462712123"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p138588178133"><a name="p138588178133"></a><a name="p138588178133"></a>A set of events generated by the SQL statement (unreadable).</p>
    </td>
    </tr>
    <tr id="row187462714127"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p1674617710129"><a name="p1674617710129"></a><a name="p1674617710129"></a>format</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p17746137131219"><a name="p17746137131219"></a><a name="p17746137131219"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p246504413137"><a name="p246504413137"></a><a name="p246504413137"></a>Parsing output format. The value is <strong id="b635712483241"><a name="b635712483241"></a><a name="b635712483241"></a>plaintext</strong>.</p>
    </td>
    </tr>
    <tr id="row17254145010126"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p225445020123"><a name="p225445020123"></a><a name="p225445020123"></a>pretty</p>
    </td>
    <td class="cellrowborder" valign="top" width="22.06220622062206%" headers="mcps1.2.4.1.2 "><p id="p1025485020129"><a name="p1025485020129"></a><a name="p1025485020129"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><div class="p" id="p7905125312149"><a name="p7905125312149"></a><a name="p7905125312149"></a>Whether to display the text in pretty format when <strong id="b106594338279"><a name="b106594338279"></a><a name="b106594338279"></a>format</strong> is set to <strong id="b1170019238252"><a name="b1170019238252"></a><a name="b1170019238252"></a>plaintext</strong>. The options are as follows:<a name="ul6896165111497"></a><a name="ul6896165111497"></a><ul id="ul6896165111497"><li>The value <strong id="b1197654722714"><a name="b1197654722714"></a><a name="b1197654722714"></a>true </strong>indicates that events are separated by <strong id="b13431135542718"><a name="b13431135542718"></a><a name="b13431135542718"></a>\n</strong>.</li><li>The value <strong id="b1484645742711"><a name="b1484645742711"></a><a name="b1484645742711"></a>false </strong>indicates that events are separated by commas (,).</li></ul>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

-   get\_global\_user\_transaction\(\)

    Description: Returns transaction information about each user on all nodes.

    Return type: node\_name name, usename name, commit\_counter bigint, rollback\_counter bigint, resp\_min bigint, resp\_max bigint, resp\_avg bigint, resp\_total bigint, bg\_commit\_counter bigint, bg\_rollback\_counter bigint, bg\_resp\_min bigint, bg\_resp\_max bigint, bg\_resp\_avg bigint, bg\_resp\_total bigint

-   pg\_collation\_for

    Description: Returns the sorting rule corresponding to the input parameter string.

    Parameter: any \(Explicit type conversion is required for constants.\)

    Return type: text

-   pgxc\_unlock\_for\_sp\_database\(name Name\)

    Description: Releases a specified database lock.

    Parameter: database name

    Return type: Boolean

-   pgxc\_lock\_for\_sp\_database\(name Name\)

    Description: Locks a specified database.

    Parameter: database name

    Return type: Boolean

-   copy\_error\_log\_create\(\)

    Description: Creates the error table \(**public.pgxc\_copy\_error\_log**\) required for creating the  **COPY FROM**  error tolerance mechanism.

    Return type: Boolean

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >-   This function attempts to create the  **public.pgxc\_copy\_error\_log**  table. For details about the table, see  [Table 6](#table138318280213).
    >-   Create the B-tree index on the  **relname**  column and execute  **REVOKE ALL on public.pgxc\_copy\_error\_log FROM public**  to manage permissions for the error table \(the permissions are the same as those of the  **COPY**  statement\).
    >-   **public.pgxc\_copy\_error\_log**  is a row-store table. Therefore, this function can be executed and  **COPY**  error tolerance is available only when row-store tables can be created in the database instance. Note that after the GUC parameter  **enable\_hadoop\_env**  is enabled, row-store tables cannot be created in the database instance \(the default value of GaussDB Kernel is off\).
    >-   Same as the error table and the  **COPY**  statement, the function requires  **sysadmin**  or higher permissions.
    >-   If the  **public.pgxc\_copy\_error\_log**  table or the  **copy\_error\_log\_relname\_idx**  index exists before the function creates it, the function will report an error and roll back.

    **Table  6**  Error table public.pgxc\_copy\_error\_log

    <a name="table138318280213"></a>
    <table><thead align="left"><tr id="row48415282214"><th class="cellrowborder" valign="top" width="22.31223122312231%" id="mcps1.2.4.1.1"><p id="p084142817211"><a name="p084142817211"></a><a name="p084142817211"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.992899289928992%" id="mcps1.2.4.1.2"><p id="p198410281525"><a name="p198410281525"></a><a name="p198410281525"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.6948694869487%" id="mcps1.2.4.1.3"><p id="p08411281214"><a name="p08411281214"></a><a name="p08411281214"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row65469159815"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p195466152819"><a name="p195466152819"></a><a name="p195466152819"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p165477151182"><a name="p165477151182"></a><a name="p165477151182"></a>character varying</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p3547141514816"><a name="p3547141514816"></a><a name="p3547141514816"></a>Table name in the form of <em id="i053011189332"><a name="i053011189332"></a><a name="i053011189332"></a>Schema name</em><strong id="b1453381816339"><a name="b1453381816339"></a><a name="b1453381816339"></a>.</strong><em id="i1153561843315"><a name="i1153561843315"></a><a name="i1153561843315"></a>Table name</em></p>
    </td>
    </tr>
    <tr id="row984112817210"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1882414211083"><a name="p1882414211083"></a><a name="p1882414211083"></a>begintime</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p1082562116817"><a name="p1082562116817"></a><a name="p1082562116817"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p17825921686"><a name="p17825921686"></a><a name="p17825921686"></a>Time when a data format error was reported</p>
    </td>
    </tr>
    <tr id="row148502818216"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p1935720521277"><a name="p1935720521277"></a><a name="p1935720521277"></a>filename</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p1535785215711"><a name="p1535785215711"></a><a name="p1535785215711"></a>character varying</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p10357155215713"><a name="p10357155215713"></a><a name="p10357155215713"></a>Name of the source data file where a data format error occurs</p>
    </td>
    </tr>
    <tr id="row1418810441476"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p2035812521178"><a name="p2035812521178"></a><a name="p2035812521178"></a>lineno</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p12358205220716"><a name="p12358205220716"></a><a name="p12358205220716"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p2358105218712"><a name="p2358105218712"></a><a name="p2358105218712"></a>Number of the row where a data format error occurs in a source data file</p>
    </td>
    </tr>
    <tr id="row181905441873"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p6358185215718"><a name="p6358185215718"></a><a name="p6358185215718"></a>rawrecord</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p153583521175"><a name="p153583521175"></a><a name="p153583521175"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p1135810527714"><a name="p1135810527714"></a><a name="p1135810527714"></a>Raw record of a data format error in the source data file</p>
    </td>
    </tr>
    <tr id="row1487854919720"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p9359145212719"><a name="p9359145212719"></a><a name="p9359145212719"></a><strong id="b824691720"><a name="b824691720"></a><a name="b824691720"></a>detail</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p83592521276"><a name="p83592521276"></a><a name="p83592521276"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p20359105219717"><a name="p20359105219717"></a><a name="p20359105219717"></a>Error details</p>
    </td>
    </tr>
    </tbody>
    </table>


