# Other Functions<a name="EN-US_TOPIC_0289900063"></a>

-   plan\_seed\(\)

    Description: Obtains the seed value of the previous query statement \(internal use\).

    Return type: int

-   pg\_stat\_get\_env\(\)

    Description: Obtains the environment variable information of the current node. Only users with the  **sysadmin**  or  **monitor admin**  permission can access the environment variable information.

    Return type: record

    Example:

    ```
    openGauss=# select pg_stat_get_env();
                                                                                  pg_stat_get_env
    ---------------------------------------------------------------------------------------------------------------------------------------
     (coordinator1,localhost,144773,49100,/data1/GaussDB_Kernel_TRUNK/install,/data1/GaussDB_Kernel_TRUNK/install/data/coordinator1,pg_log)
    (1 row)
    ```

-   pg\_catalog.plancache\_clean\(\)

    Description: Clears the global plan cache that is not used on nodes.

    Return type: Boolean

-   pg\_catalog.plancache\_status\(\)

    Description: Displays information about the global plan cache on nodes. The information returned by the function is the same as that in  [GLOBAL\_PLANCACHE\_STATUS](en-us_topic_0297927201.md).

    Return type: record

-   textlen\(text\)

    Description: Provides the method of querying the logical length of text.

    Return type: int

-   threadpool\_status\(\)

    Description: Displays the status of worker threads and sessions in the thread pool.

    Return type: record

-   get\_local\_active\_session\(\)

    Description: Provides sampling records of the historical active sessions stored in the memory of the current node.

    Return type: record

-   pg\_stat\_get\_thread\(\)

    Description: Provides status information about all threads on the current node. Users with the  **sysadmin**  or  **monitor admin**  permission can view information about all threads, and common users can view only their own thread information.

    Return type: record

-   pg\_stat\_get\_sql\_count\(\)

    Description: Provides the counts of the  **SELECT**,  **UPDATE**,  **INSERT**,  **DELETE**, and  **MERGE INTO**  statements executed on the current node. Users with the  **sysadmin**  or  **monitor admin**  permission can view information about all users, and common users can view only their own statistics.

    Return type: record

-   pg\_stat\_get\_data\_senders\(\)

    Description: Provides detailed information about the data-copy sending thread active at the moment.

    Return type: record

-   get\_wait\_event\_info\(\)

    Description: Provides detailed information about the wait event.

    Return type: record

-   generate\_wdr\_report\(begin\_snap\_id bigint, end\_snap\_id bigint, report\_type cstring, report\_scope cstring, node\_name cstring\)

    Description: Generates system diagnosis reports based on two snapshots. You need to run the command in the  **postgres**  database. By default, the initial user or the user with the  **monadmin**  permission can access the database. In V500R001C20SPC002 and earlier versions, the initial user or the user with the  **sysadmin**  permission can access the database. The result can be queried only in the system database but cannot be queried in the user database.

    Return type: record

    **Table  1**  generate\_wdr\_report parameter description

    <a name="en-us_topic_0283137465_en-us_topic_0237121997_table1757513581634"></a>
    <table><tbody><tr id="en-us_topic_0283137465_en-us_topic_0237121997_row1280114581437"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p11801115814318"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p11801115814318"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p11801115814318"></a>Parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p158015584310"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p158015584310"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p158015584310"></a>Description</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p1880217581937"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1880217581937"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1880217581937"></a>Range</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row680211581937"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p380217581314"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p380217581314"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p380217581314"></a>begin_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p128028581331"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p128028581331"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p128028581331"></a>Snapshot ID that starts the diagnosis report period.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p78026587313"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p78026587313"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p78026587313"></a>N/A</p>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row7802105817316"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p198029587313"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p198029587313"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p198029587313"></a>end_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p1080215589316"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1080215589316"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1080215589316"></a>Snapshot ID that ends the diagnosis report period. By default, the value of <strong id="b1037832010428"><a name="b1037832010428"></a><a name="b1037832010428"></a>end_snap_id</strong> is greater than that of <strong id="b91311123144216"><a name="b91311123144216"></a><a name="b91311123144216"></a>begin_snap_id</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p5802158436"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p5802158436"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p5802158436"></a>N/A</p>
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
    <td class="cellrowborder" valign="top" width="34.47%"><a name="ul10102152712184"></a><a name="ul10102152712184"></a><ul id="ul10102152712184"><li><strong id="b1735195574411"><a name="b1735195574411"></a><a name="b1735195574411"></a>cluster</strong>: database-level information</li><li><strong id="b1081545813446"><a name="b1081545813446"></a><a name="b1081545813446"></a>node</strong>: node-level information</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_en-us_topic_0237121997_row188031958732"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0283137465_en-us_topic_0237121997_p1280316588318"><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1280316588318"></a><a name="en-us_topic_0283137465_en-us_topic_0237121997_p1280316588318"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="45.29%"><p id="en-us_topic_0283137259_p9831125295619"><a name="en-us_topic_0283137259_p9831125295619"></a><a name="en-us_topic_0283137259_p9831125295619"></a>When <strong id="b51081142164115"><a name="b51081142164115"></a><a name="b51081142164115"></a>report_scope</strong> is set to <strong id="b81764554114"><a name="b81764554114"></a><a name="b81764554114"></a>node</strong>, set this parameter to the name of the corresponding node. (You can run the <strong id="b2583181384512"><a name="b2583181384512"></a><a name="b2583181384512"></a>select * from pg_node_env;</strong> command to query the node name.)</p>
    <p id="en-us_topic_0283137259_p941074755313"><a name="en-us_topic_0283137259_p941074755313"></a><a name="en-us_topic_0283137259_p941074755313"></a>If <strong id="b87314582410"><a name="b87314582410"></a><a name="b87314582410"></a>report_scope</strong> is set to <strong id="b83581212424"><a name="b83581212424"></a><a name="b83581212424"></a>cluster</strong>, this parameter can be omitted, left blank, or set to <strong id="b3186694426"><a name="b3186694426"></a><a name="b3186694426"></a>NULL</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="34.47%"><a name="ul8919134451817"></a><a name="ul8919134451817"></a><ul id="ul8919134451817"><li><strong id="b6455103810456"><a name="b6455103810456"></a><a name="b6455103810456"></a>cluster</strong>: This value is omitted, left blank or set to <strong id="b9462638114517"><a name="b9462638114517"></a><a name="b9462638114517"></a>NULL</strong>.</li><li><strong id="b142954464511"><a name="b142954464511"></a><a name="b142954464511"></a>node</strong>: indicates the node name in openGauss.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   create\_wdr\_snapshot\(\)

    Description: Manually generates system diagnosis snapshots. This function requires the  **sysadmin**  permission.

    Return type: text

-   kill\_snapshot\(\)

    Description: Kills the WDR snapshot backend thread. Users who invoke this function must have the  **SYSADMIN**  permission, the  **REPLICATION**  permission, or inherit the  **gs\_role\_replication**  permission of the built-in role.

    Return type: void

-   capture\_view\_to\_json\(text,integer\)

    Description: Saves the view result to the directory specified by GUC:  **perf\_directory**. If  **is\_crossdb**  is set to  **1**, the view is accessed once for all databases. If the value of  **is\_crossdb**  is  **0**, the current database is accessed only once. Only users with the  **sysadmin**  or  **monitor admin**  permission can execute this function.

    Return type: int

-   reset\_unique\_sql

    Description: Clears the unique SQL statements in the memory of the database node. \(The  **sysadmin**  permission is required.\)

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
    <a name="en-us_topic_0283137465_ul27053230486"></a><a name="en-us_topic_0283137465_ul27053230486"></a><ul id="en-us_topic_0283137465_ul27053230486"><li><strong id="b1041264162318"><a name="b1041264162318"></a><a name="b1041264162318"></a>GLOBAL</strong>: Clears all nodes. If the value is <strong id="b1746111919233"><a name="b1746111919233"></a><a name="b1746111919233"></a>GLOBAL</strong>, this function can be executed only on the primary node.</li><li><strong id="b134321043182313"><a name="b134321043182313"></a><a name="b134321043182313"></a>LOCAL</strong>: Clears the current node.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0283137465_row113456461571"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137465_p13830135712614"><a name="en-us_topic_0283137465_p13830135712614"></a><a name="en-us_topic_0283137465_p13830135712614"></a>clean_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137465_p1722494715253"><a name="en-us_topic_0283137465_p1722494715253"></a><a name="en-us_topic_0283137465_p1722494715253"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137465_ul9212421184913"></a><a name="en-us_topic_0283137465_ul9212421184913"></a><ul id="en-us_topic_0283137465_ul9212421184913"><li><strong id="b9926615194612"><a name="b9926615194612"></a><a name="b9926615194612"></a>BY_USERID</strong>: Unique SQL statements are cleared based on user IDs.</li><li><strong id="b1870945142914"><a name="b1870945142914"></a><a name="b1870945142914"></a>BY_CNID</strong>: Unique SQL statements are cleared based on primary node IDs.</li><li><strong id="b187256345263"><a name="b187256345263"></a><a name="b187256345263"></a>ALL</strong>: All data is cleared.</li></ul>
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

    >![](public_sys-resources/icon-notice.gif) **NOTICE:** 
    >-   The values  **GLOBAL**  and  **LOCAL**  of  **scope**  apply to distributed databases. For openGauss, the values have the same meaning, indicating that the local node is cleared.
    >-   The value  **BY\_CNID**  of  **clean\_type**  applies only to distributed databases and is invalid for openGauss.

-   wdr\_xdb\_query\(db\_name\_str text, query text\)

    Description: Provides the capability of executing local cross-database queries. For example, when connecting to the Postgres database, access tables in the  **test**  database.

    ```
    select col1 from wdr_xdb_query('dbname=test','select col1 from t1') as dd(col1 int);
    ```

    Return type: record

-   pg\_wlm\_jump\_queue\(pid int\)

    Description: Moves a task to the top of the queue of the primary node of the database.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   gs\_wlm\_switch\_cgroup\(pid int, cgroup text\)

    Description: Moves a job to another Cgroup to change the job priority.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   pv\_session\_memctx\_detail\(threadid tid, MemoryContextName text\)

    Description: Records information about the memory context  **MemoryContextName**  of the thread  **tid**  into the  _threadid_**\_timestamp.log**  file in the  _$GAUSSLOG_**/pg\_log/**_$\{node\_name\}_**/dumpmem**  directory.  _threadid_  can be obtained from  _sessid_  in the  **GS\_SESSION\_MEMORY\_DETAIL**  view. In the officially released version, only the  **MemoryContextName**  that is an empty string \(two single quotation marks indicate that the input is an empty string\) is accepted. In this case, all memory context information is recorded. Otherwise, no operation is performed. For the DEBUG version for internal development and test personnel to debug, you can specify the  **MemoryContextName**  to be counted. In this case, all the memory usage of the context is recorded in the specified file. Only the administrator can execute this function.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   pg\_shared\_memctx\_detail\(MemoryContextName text\)

    Description: Records information about the memory context  **MemoryContextName**  into the  _threadid_**\_timestamp.log**  file in the  _$GAUSSLOG_**/pg\_log/**_$\{node\_name\}_**/dumpmem**  directory. This function is provided only for internal development and test personnel to debug in the DEBUG version. Calling this function in the officially released version does not involve any operation. Only the administrator can execute this function.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   local\_bgwriter\_stat\(\)

    Description: Displays the information about pages flushed by the bgwriter thread of this instance, number of pages in the candidate buffer chain, and buffer elimination information.

    Return type: record

-   local\_candidate\_stat\(\)

    Description: Displays the number of pages in the candidate buffer chain of this instance and buffer elimination information, including the normal buffer pool and segment buffer pool.

    Return type: record

-   local\_ckpt\_stat\(\)

    Description: Displays the information about checkpoints and flushing pages of the current instance.

    Return type: record

-   local\_double\_write\_stat\(\)

    Description: Displays the doublewrite file status of the current instance.

    Return type: record

    **Table  3**  local\_double\_write\_stat parameters

    <a name="table114614044512"></a>
    <table><thead align="left"><tr id="row17462206459"><th class="cellrowborder" valign="top" width="23.97239723972397%" id="mcps1.2.4.1.1"><p id="p346200164518"><a name="p346200164518"></a><a name="p346200164518"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="16.011601160116008%" id="mcps1.2.4.1.2"><p id="p1746215014511"><a name="p1746215014511"></a><a name="p1746215014511"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="60.01600160016001%" id="mcps1.2.4.1.3"><p id="p1346216017458"><a name="p1346216017458"></a><a name="p1346216017458"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row24620014450"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p473452212452"><a name="p473452212452"></a><a name="p473452212452"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p79851581477"><a name="p79851581477"></a><a name="p79851581477"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p18731522104518"><a name="p18731522104518"></a><a name="p18731522104518"></a>Instance name</p>
    </td>
    </tr>
    <tr id="row046217018452"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p14730152211451"><a name="p14730152211451"></a><a name="p14730152211451"></a>curr_dwn</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p187292227454"><a name="p187292227454"></a><a name="p187292227454"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p187285224456"><a name="p187285224456"></a><a name="p187285224456"></a>Sequence number of the doublewrite file</p>
    </td>
    </tr>
    <tr id="row746215010451"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p17726142218452"><a name="p17726142218452"></a><a name="p17726142218452"></a>curr_start_page</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p157251222154516"><a name="p157251222154516"></a><a name="p157251222154516"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p18724152254517"><a name="p18724152254517"></a><a name="p18724152254517"></a>Start page for restoring the doublewrite file</p>
    </td>
    </tr>
    <tr id="row44631901458"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p14723122134518"><a name="p14723122134518"></a><a name="p14723122134518"></a>file_trunc_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p1172222254514"><a name="p1172222254514"></a><a name="p1172222254514"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p1572162218455"><a name="p1572162218455"></a><a name="p1572162218455"></a>Number of times that the doublewrite file is reused</p>
    </td>
    </tr>
    <tr id="row154637034514"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p571972254512"><a name="p571972254512"></a><a name="p571972254512"></a>file_reset_num</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p19718122215453"><a name="p19718122215453"></a><a name="p19718122215453"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p18717922114515"><a name="p18717922114515"></a><a name="p18717922114515"></a>Number of reset times after the doublewrite file is full</p>
    </td>
    </tr>
    <tr id="row046415019457"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p10716112294511"><a name="p10716112294511"></a><a name="p10716112294511"></a>total_writes</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p271552214519"><a name="p271552214519"></a><a name="p271552214519"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p871316222455"><a name="p871316222455"></a><a name="p871316222455"></a>Total number of I/Os of the doublewrite file</p>
    </td>
    </tr>
    <tr id="row18464150104515"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p2712722134514"><a name="p2712722134514"></a><a name="p2712722134514"></a>low_threshold_writes</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p571119226451"><a name="p571119226451"></a><a name="p571119226451"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p6690192214514"><a name="p6690192214514"></a><a name="p6690192214514"></a>Number of I/Os for writing doublewrite files with low efficiency (the number of I/O flushing pages at a time is less than 16)</p>
    </td>
    </tr>
    <tr id="row137178298462"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p1671892917469"><a name="p1671892917469"></a><a name="p1671892917469"></a>high_threshold_writes</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p137181429144610"><a name="p137181429144610"></a><a name="p137181429144610"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p11718132917460"><a name="p11718132917460"></a><a name="p11718132917460"></a>Number of I/Os for writing doublewrite files with high efficiency (the number of I/O flushing pages at a time is more than 421)</p>
    </td>
    </tr>
    <tr id="row6718192964614"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p1271892918461"><a name="p1271892918461"></a><a name="p1271892918461"></a>total_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p6718192914463"><a name="p6718192914463"></a><a name="p6718192914463"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p1371882919465"><a name="p1371882919465"></a><a name="p1371882919465"></a>Total number of pages that are flushed to the doublewrite file area</p>
    </td>
    </tr>
    <tr id="row27182296469"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p671832912461"><a name="p671832912461"></a><a name="p671832912461"></a>low_threshold_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p371862910461"><a name="p371862910461"></a><a name="p371862910461"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p8718162919468"><a name="p8718162919468"></a><a name="p8718162919468"></a>Number of pages that are flushed with low efficiency</p>
    </td>
    </tr>
    <tr id="row18718029154616"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p17181329184616"><a name="p17181329184616"></a><a name="p17181329184616"></a>high_threshold_pages</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p8718122918460"><a name="p8718122918460"></a><a name="p8718122918460"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p471914298468"><a name="p471914298468"></a><a name="p471914298468"></a>Number of pages that are flushed with high efficiency</p>
    </td>
    </tr>
    <tr id="row151121410308"><td class="cellrowborder" valign="top" width="23.97239723972397%" headers="mcps1.2.4.1.1 "><p id="p111364203012"><a name="p111364203012"></a><a name="p111364203012"></a>file_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.011601160116008%" headers="mcps1.2.4.1.2 "><p id="p141131545309"><a name="p141131545309"></a><a name="p141131545309"></a>int8</p>
    </td>
    <td class="cellrowborder" valign="top" width="60.01600160016001%" headers="mcps1.2.4.1.3 "><p id="p181131541308"><a name="p181131541308"></a><a name="p181131541308"></a>ID of the current doublewrite file</p>
    </td>
    </tr>
    </tbody>
    </table>

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

    Description: Displays log flow control information about the primary and standby nodes.

    Return type: record

-   gs\_wlm\_node\_recover\(boolean isForce\)

    Description: Obtains top SQL query statement-level statistics recorded in the current memory. If the input parameter is not  **0**, the information is cleared from the memory.

    Return type: record

-   gs\_wlm\_node\_clean\(cstring nodename\)

    Description: Clears data after the dynamic load management node is faulty. Only administrators can execute this function. This function is called by the database instance management module. You are not advised to directly call this function. This view is not supported in a centralized or standalone system.

    Return type: Boolean

-   gs\_cgroup\_map\_ng\_conf\(group name\)

    Description: Reads the Cgroup configuration file of a specified logical database.

    Return type: record

-   gs\_wlm\_switch\_cgroup\(sess\_id int8, cgroup name\)

    Description: Switches the Cgroup of a specified session.

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

    Description: Returns the position of the Xlog flushed from the current node.

    Return type: text

-   pg\_get\_sync\_flush\_lsn\(\)

    Description: Returns the position of the Xlog flushed by the majority on the current node.

    Return type: text

-   gs\_create\_log\_tables\(\)

    Description: Creates foreign tables and views for run logs and performance logs.

    Return type: void

    Example:

    ```
    openGauss=# select gs_create_log_tables();
     gs_create_log_tables
    ----------------------
    
    (1 row)
    ```

-   dbe\_perf.get\_global\_full\_sql\_by\_timestamp\(start\_timestamp timestamp with time zone, end\_timestamp timestamp with time zone\)

    Description: Obtains full SQL information at the database level. The result can be queried only in the system database but cannot be queried in the user database.

    Return type: record

    **Table  4**  dbe\_perf.get\_global\_full\_sql\_by\_timestamp parameter description

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

    Description: Obtains slow SQL information at the database level. The result can be queried only in the system database but cannot be queried in the user database.

    Return type: record

    **Table  5**  dbe\_perf.get\_global\_slow\_sql\_by\_timestamp parameter description

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

    Description: Parses the  **details**  column in a full or slow SQL statement. The result can be queried only in the system database but cannot be queried in the user database.

    Return type: text

    **Table  6**  statement\_detail\_decode parameter description

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
    <td class="cellrowborder" valign="top" width="57.69576957695769%" headers="mcps1.2.4.1.3 "><p id="p138588178133"><a name="p138588178133"></a><a name="p138588178133"></a>Set of events generated by the SQL statement (unreadable).</p>
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

-   get\_prepared\_pending\_xid

    Description: Returns nextxid when restoration is complete.

    Parameter: nan

    Return type: text

-   pg\_clean\_region\_info

    Description: Clears the regionmap.

    Parameter: nan

    Return type: character varying

-   pg\_get\_delta\_info

    Description: Obtains delta information from a single DN.

    Parameter: rel text, schema\_name text

    Return type: part\_name text, live\_tuple bigint, data\_size bigint, and blocknum bigint

-   pg\_get\_replication\_slot\_name

    Description: Obtains the slot name.

    Parameter: nan

    Return type: text

-   pg\_get\_running\_xacts

    Description: Obtains running xact.

    Parameter:  **nan**

    Return type: handle integer, gxid xid, state tinyint, node text, xmin xid, vacuum boolean, timeline bigint, prepare\_xid xid, pid bigint, and next\_xid xid

-   pg\_get\_variable\_info

    Description: Obtains the shared memory variable  _cache_.

    Parameter: nan

    Return type: node\_name text, nextOid oid, nextXid xid, oldestXid xid, xidVacLimit xid, oldestXidDB oid, lastExtendCSNLogpage xid, startExtendCSNLogpage xid, nextCommitSeqNo xid, latestCompletedXid xid, and startupMaxXid xid

-   pg\_get\_xidlimit

    Description: Obtains transaction ID information from the shared memory.

    Parameter: nan

    Return type: nextXid xid, oldestXid xid, xidVacLimit xid, xidWarnLimit xid, xidStopLimit xid, xidWrapLimit xid, and oldestXidDB oid

-   get\_global\_user\_transaction\(\)

    Description: Returns transaction information about each user on all nodes.

    Return type: node\_name name, usename name, commit\_counter bigint, rollback\_counter bigint, resp\_min bigint, resp\_max bigint, resp\_avg bigint, resp\_total bigint, bg\_commit\_counter bigint, bg\_rollback\_counter bigint, bg\_resp\_min bigint, bg\_resp\_max bigint, bg\_resp\_avg bigint, and bg\_resp\_total bigint

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
    >-   This function attempts to create the  **public.pgxc\_copy\_error\_log**  table. For details about the table, see  [Table 7](#table138318280213).
    >-   Create the B-tree index on the  **relname**  column and execute  **REVOKE ALL on public.pgxc\_copy\_error\_log FROM public**  to manage permissions for the error table \(the permissions are the same as those of the  **COPY**  statement\).
    >-   **public.pgxc\_copy\_error\_log**  is a row-store table. Therefore, this function can be executed and  **COPY**  error tolerance is available only when row-store tables can be created in the database instance. Note that after the GUC parameter  **enable\_hadoop\_env**  is enabled, row-store tables cannot be created in the database instance \(the default value is  **off**  for GaussDB Kernel\).
    >-   Same as the error table and the  **COPY**  statement, the function requires  **sysadmin**  or higher permissions.
    >-   If the  **public.pgxc\_copy\_error\_log**  table or the  **copy\_error\_log\_relname\_idx**  index exists before the function creates it, the function will report an error and roll back.

    **Table  7**  Error table public.pgxc\_copy\_error\_log

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
    <tr id="row1487854919720"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="p9359145212719"><a name="p9359145212719"></a><a name="p9359145212719"></a><strong id="b1586059390"><a name="b1586059390"></a><a name="b1586059390"></a>detail</strong></p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="p83592521276"><a name="p83592521276"></a><a name="p83592521276"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="p20359105219717"><a name="p20359105219717"></a><a name="p20359105219717"></a>Error details</p>
    </td>
    </tr>
    </tbody>
    </table>

-   dynamic\_func\_control\(scope text, function\_name text, action text, "\{params\}" text\[\]\)

    Description: Dynamically enables built-in functions. Currently, only full SQL statements can be dynamically enabled.

    Return type: record

    **Table  8**  Parameter description of dynamic\_func\_control

    <a name="table125341781558"></a>
    <table><thead align="left"><tr id="row155342813517"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p95341581056"><a name="p95341581056"></a><a name="p95341581056"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.5015501550155%" id="mcps1.2.4.1.2"><p id="p353418813517"><a name="p353418813517"></a><a name="p353418813517"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="64.25642564256425%" id="mcps1.2.4.1.3"><p id="p153458554"><a name="p153458554"></a><a name="p153458554"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row7534988517"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p85341584512"><a name="p85341584512"></a><a name="p85341584512"></a>scope</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.5015501550155%" headers="mcps1.2.4.1.2 "><p id="p165341818512"><a name="p165341818512"></a><a name="p165341818512"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.25642564256425%" headers="mcps1.2.4.1.3 "><p id="p753417817519"><a name="p753417817519"></a><a name="p753417817519"></a>Scope where the function is to be dynamically enabled. Currently, only <strong id="b647312015475"><a name="b647312015475"></a><a name="b647312015475"></a>LOCAL</strong> is supported.</p>
    </td>
    </tr>
    <tr id="row18535158955"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p0535081456"><a name="p0535081456"></a><a name="p0535081456"></a>function_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.5015501550155%" headers="mcps1.2.4.1.2 "><p id="p9535198953"><a name="p9535198953"></a><a name="p9535198953"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.25642564256425%" headers="mcps1.2.4.1.3 "><p id="p20535581955"><a name="p20535581955"></a><a name="p20535581955"></a>Function name. Currently, only <strong id="b465512137476"><a name="b465512137476"></a><a name="b465512137476"></a>STMT</strong> is supported.</p>
    </td>
    </tr>
    <tr id="row154618521052"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p175461521151"><a name="p175461521151"></a><a name="p175461521151"></a>action</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.5015501550155%" headers="mcps1.2.4.1.2 "><p id="p75468520511"><a name="p75468520511"></a><a name="p75468520511"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.25642564256425%" headers="mcps1.2.4.1.3 "><div class="p" id="p4744161918417"><a name="p4744161918417"></a><a name="p4744161918417"></a>When <strong id="b5714610124611"><a name="b5714610124611"></a><a name="b5714610124611"></a>function_name</strong> is set to <strong id="b17721310184615"><a name="b17721310184615"></a><a name="b17721310184615"></a>STMT</strong>, the value of <strong id="b37211310134617"><a name="b37211310134617"></a><a name="b37211310134617"></a>action</strong> can only be <strong id="b1972281013460"><a name="b1972281013460"></a><a name="b1972281013460"></a>TRACK</strong>, <strong id="b172211024612"><a name="b172211024612"></a><a name="b172211024612"></a>UNTRACK</strong>, <strong id="b47221710124614"><a name="b47221710124614"></a><a name="b47221710124614"></a>LIST</strong>, or <strong id="b1972261074611"><a name="b1972261074611"></a><a name="b1972261074611"></a>CLEAN</strong>.<a name="ul593172715418"></a><a name="ul593172715418"></a><ul id="ul593172715418"><li><strong id="b17153135412476"><a name="b17153135412476"></a><a name="b17153135412476"></a>TRACK</strong>: records the full SQL information of normalized SQL statements.</li><li><strong id="b1832787174818"><a name="b1832787174818"></a><a name="b1832787174818"></a>UNTRACK</strong>: cancels the recording of full SQL information of normalized SQL statements.</li><li><strong id="b192241411124814"><a name="b192241411124814"></a><a name="b192241411124814"></a>LIST</strong>: lists normalized SQL information that is recorded in the current track.</li><li><strong id="b747411146488"><a name="b747411146488"></a><a name="b747411146488"></a>CLEAN</strong>: cleans normalized SQL information that is recorded in the current track.</li></ul>
    </div>
    </td>
    </tr>
    <tr id="row12619611267"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p861912119616"><a name="p861912119616"></a><a name="p861912119616"></a>params</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.5015501550155%" headers="mcps1.2.4.1.2 "><p id="p146191711565"><a name="p146191711565"></a><a name="p146191711565"></a>text[]</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.25642564256425%" headers="mcps1.2.4.1.3 "><div class="p" id="p321410421244"><a name="p321410421244"></a><a name="p321410421244"></a>When <strong id="b454419192487"><a name="b454419192487"></a><a name="b454419192487"></a>function_name</strong> is set to <strong id="b125441219204816"><a name="b125441219204816"></a><a name="b125441219204816"></a>STMT</strong>, the parameters corresponding to different actions are set as follows:<a name="ul3553174512415"></a><a name="ul3553174512415"></a><ul id="ul3553174512415"><li><strong id="b768522910481"><a name="b768522910481"></a><a name="b768522910481"></a>TRACK</strong>: <strong id="b146853296484"><a name="b146853296484"></a><a name="b146853296484"></a>'{"Normalized SQLID", "L0/L1/L2"}'</strong></li><li><strong id="b16922113317482"><a name="b16922113317482"></a><a name="b16922113317482"></a>UNTRACK</strong>: <strong id="b1592283354814"><a name="b1592283354814"></a><a name="b1592283354814"></a>'{"Normalized SQLID"}'</strong></li><li>LIST - '{}'</li><li>CLEAN - '{}'</li></ul>
    </div>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_parse\_page\_bypath\(path text, blocknum bigint, relation\_type text, read\_memory boolean\)

    Description: Parses a specified table page and returns the path for storing the parsed content.

    Return type: text

    Note: Only the system administrator or O&M administrator can execute this function.

    **Table  9**  gs\_parse\_page\_bypath parameters

    <a name="table127501424144518"></a>
    <table><thead align="left"><tr id="row15750624184510"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p19751132419458"><a name="p19751132419458"></a><a name="p19751132419458"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.48154815481548%" id="mcps1.2.4.1.2"><p id="p11751324124511"><a name="p11751324124511"></a><a name="p11751324124511"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="64.27642764276428%" id="mcps1.2.4.1.3"><p id="p17751102494511"><a name="p17751102494511"></a><a name="p17751102494511"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row107519241451"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p975110242458"><a name="p975110242458"></a><a name="p975110242458"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p67511524104517"><a name="p67511524104517"></a><a name="p67511524104517"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul1513413587229"></a><a name="ul1513413587229"></a><ul id="ul1513413587229"><li>For an ordinary table or segment-page table, the relative path is <em id="i1448183763015"><a name="i1448183763015"></a><a name="i1448183763015"></a>Tablespace name</em><strong id="b346010463306"><a name="b346010463306"></a><a name="b346010463306"></a>/</strong><em id="i1120755117300"><a name="i1120755117300"></a><a name="i1120755117300"></a>Database OID</em><strong id="b92101856123012"><a name="b92101856123012"></a><a name="b92101856123012"></a>/</strong><em id="i1894510453116"><a name="i1894510453116"></a><a name="i1894510453116"></a>Relfilenode of the table (physical file name)</em>. For example, <strong id="b1465163415316"><a name="b1465163415316"></a><a name="b1465163415316"></a>base/16603/16394</strong>.</li><li>You can run the <strong id="b1657894817316"><a name="b1657894817316"></a><a name="b1657894817316"></a>pg_relation_filepath(table_name text)</strong> command to query the relative path of the table file.</li><li>Valid path formats are as follows:<a name="ul6101510191412"></a><a name="ul6101510191412"></a><ul id="ul6101510191412"><li>global/relNode</li><li>base/dbNode/relNode</li><li>pg_tblspc/spcNode/version_dir/dbNode/relNode</li></ul>
    </li></ul>
    </td>
    </tr>
    <tr id="row075117243452"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p177511124114511"><a name="p177511124114511"></a><a name="p177511124114511"></a>blocknum</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p17511824124519"><a name="p17511824124519"></a><a name="p17511824124519"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul14851174272113"></a><a name="ul14851174272113"></a><ul id="ul14851174272113"><li><strong id="b141931022163214"><a name="b141931022163214"></a><a name="b141931022163214"></a>-1</strong>: Information about all blocks</li><li><strong id="b149301837104817"><a name="b149301837104817"></a><a name="b149301837104817"></a>0-</strong><em id="i1024863610489"><a name="i1024863610489"></a><a name="i1024863610489"></a>MaxBlockNumber</em>: Information about the corresponding block</li></ul>
    </td>
    </tr>
    <tr id="row5751102415451"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p275152454511"><a name="p275152454511"></a><a name="p275152454511"></a>relation_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p175111246453"><a name="p175111246453"></a><a name="p175111246453"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul959582318182"></a><a name="ul959582318182"></a><ul id="ul959582318182"><li><strong id="b45881826203311"><a name="b45881826203311"></a><a name="b45881826203311"></a>heap</strong>: Astore table</li><li><strong id="b1160644293315"><a name="b1160644293315"></a><a name="b1160644293315"></a>uheap</strong>: Ustore table</li><li><strong id="b1339795293320"><a name="b1339795293320"></a><a name="b1339795293320"></a>btree_index</strong>: B-tree index</li><li><strong id="b18901716183416"><a name="b18901716183416"></a><a name="b18901716183416"></a>ubtree_index</strong>: UBTree index</li><li><strong id="b2676132853417"><a name="b2676132853417"></a><a name="b2676132853417"></a>segment</strong>: Segment-page</li></ul>
    </td>
    </tr>
    <tr id="row87521824164510"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p275214248458"><a name="p275214248458"></a><a name="p275214248458"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p8752624164513"><a name="p8752624164513"></a><a name="p8752624164513"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul490694355512"></a><a name="ul490694355512"></a><ul id="ul490694355512"><li><strong id="b8899175793418"><a name="b8899175793418"></a><a name="b8899175793418"></a>false</strong>: The system parses the page from the disk file.</li><li><strong id="b57591813143612"><a name="b57591813143612"></a><a name="b57591813143612"></a>true</strong>: The system attempts to parse the page from the shared buffer. If the page does not exist in the shared buffer, the system parses the page from the disk file.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_xlogdump\_lsn\(start\_lsn text, end\_lsn text\)

    Description: Parses Xlogs within the specified LSN range and returns the path for storing the parsed content. You can use  **pg\_current\_xlog\_location\(\)**  to obtain the current Xlog position.

    Return type: text

    Parameters: LSN start position and LSN end position

    Note: Only the system administrator or O&M administrator can execute this function.

-   gs\_xlogdump\_xid\(c\_xid xid\)

    Description: Parses Xlogs of a specified XID and returns the path for storing the parsed content. You can use  **txid\_current\(\)**  to obtain the current XID.

    Parameter: XID

    Return type: text

    Note: Only the system administrator or O&M administrator can execute this function.

-   gs\_xlogdump\_tablepath\(path text, blocknum bigint, relation\_type text\)

    Description: Parses logs corresponding to a specified table page and returns the path for storing the parsed content.

    Return type: text

    Note: Only the system administrator or O&M administrator can execute this function.

    **Table  10**  gs\_xlogdump\_tablepath parameters

    <a name="table12160121692320"></a>
    <table><thead align="left"><tr id="row11158111612236"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p615861612232"><a name="p615861612232"></a><a name="p615861612232"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.48154815481548%" id="mcps1.2.4.1.2"><p id="p1115871652311"><a name="p1115871652311"></a><a name="p1115871652311"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="64.27642764276428%" id="mcps1.2.4.1.3"><p id="p815818168231"><a name="p815818168231"></a><a name="p815818168231"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row10159141682317"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p1015815166233"><a name="p1015815166233"></a><a name="p1015815166233"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p101581816182310"><a name="p101581816182310"></a><a name="p101581816182310"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul1615991612239"></a><a name="ul1615991612239"></a><ul id="ul1615991612239"><li>For an ordinary table or segment-page table, the relative path is <em id="i12287166133918"><a name="i12287166133918"></a><a name="i12287166133918"></a>Tablespace name</em><strong id="b192871362398"><a name="b192871362398"></a><a name="b192871362398"></a>/</strong><em id="i1528714614396"><a name="i1528714614396"></a><a name="i1528714614396"></a>Database OID</em><strong id="b1928810623910"><a name="b1928810623910"></a><a name="b1928810623910"></a>/</strong><em id="i1728811614398"><a name="i1728811614398"></a><a name="i1728811614398"></a>Relfilenode of the table (physical file name)</em>. For example, <strong id="b15564137392"><a name="b15564137392"></a><a name="b15564137392"></a>base/16603/16394</strong>.</li><li>You can run the <strong id="b2096852003910"><a name="b2096852003910"></a><a name="b2096852003910"></a>pg_relation_filepath(table_name text)</strong> command to query the relative path of the table file.</li><li>Valid path formats are as follows:<a name="ul4520122418471"></a><a name="ul4520122418471"></a><ul id="ul4520122418471"><li>global/relNode</li><li>base/dbNode/relNode</li><li>pg_tblspc/spcNode/version_dir/dbNode/relNode</li></ul>
    </li></ul>
    </td>
    </tr>
    <tr id="row1415941613231"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p181591616162317"><a name="p181591616162317"></a><a name="p181591616162317"></a>blocknum</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p415912163235"><a name="p415912163235"></a><a name="p415912163235"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul17159216172315"></a><a name="ul17159216172315"></a><ul id="ul17159216172315"><li><strong id="b132414273396"><a name="b132414273396"></a><a name="b132414273396"></a>-1</strong>: Information about all blocks</li><li><strong id="b8420144224813"><a name="b8420144224813"></a><a name="b8420144224813"></a>0-</strong><em id="i1442012426483"><a name="i1442012426483"></a><a name="i1442012426483"></a>MaxBlockNumber</em>: Information about the corresponding block</li></ul>
    </td>
    </tr>
    <tr id="row1716011619233"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p1515901618232"><a name="p1515901618232"></a><a name="p1515901618232"></a>relation_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p91590168233"><a name="p91590168233"></a><a name="p91590168233"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul191591316112310"></a><a name="ul191591316112310"></a><ul id="ul191591316112310"><li><strong id="b20821182917393"><a name="b20821182917393"></a><a name="b20821182917393"></a>heap</strong>: Astore table</li><li><strong id="b13189832183917"><a name="b13189832183917"></a><a name="b13189832183917"></a>uheap</strong>: Ustore table</li><li><strong id="b165288333393"><a name="b165288333393"></a><a name="b165288333393"></a>btree_index</strong>: B-tree index</li><li><strong id="b378417345391"><a name="b378417345391"></a><a name="b378417345391"></a>ubtree_index</strong>: UBTree index</li><li><strong id="b314173610399"><a name="b314173610399"></a><a name="b314173610399"></a>segment</strong>: Segment-page</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_xlogdump\_parsepage\_tablepath\(path text, blocknum bigint, relation\_type text, read\_memory boolean\)

    Description: Parses the specified table page and logs corresponding to the table page and returns the path for storing the parsed content. It can be regarded as one execution of  **gs\_parse\_page\_bypath**  and  **gs\_xlogdump\_tablepath**. The prerequisite for executing this function is that the table file exists. To view logs of deleted tables, call  **gs\_xlogdump\_tablepath**.

    Return type: text

    Note: Only the system administrator or O&M administrator can execute this function.

    **Table  11**  gs\_xlogdump\_parsepage\_tablepath parameters

    <a name="table1115193952317"></a>
    <table><thead align="left"><tr id="row16138398236"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p01363919239"><a name="p01363919239"></a><a name="p01363919239"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.48154815481548%" id="mcps1.2.4.1.2"><p id="p913193972316"><a name="p913193972316"></a><a name="p913193972316"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="64.27642764276428%" id="mcps1.2.4.1.3"><p id="p6131339162314"><a name="p6131339162314"></a><a name="p6131339162314"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row15137391238"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p71313922317"><a name="p71313922317"></a><a name="p71313922317"></a>path</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p151311391235"><a name="p151311391235"></a><a name="p151311391235"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul9131039182315"></a><a name="ul9131039182315"></a><ul id="ul9131039182315"><li>For an ordinary table or segment-page table, the relative path is <em id="i4273193724018"><a name="i4273193724018"></a><a name="i4273193724018"></a>Tablespace name</em><strong id="b8279153718404"><a name="b8279153718404"></a><a name="b8279153718404"></a>/</strong><em id="i5279173764020"><a name="i5279173764020"></a><a name="i5279173764020"></a>Database OID</em><strong id="b1227943774019"><a name="b1227943774019"></a><a name="b1227943774019"></a>/</strong><em id="i72791372407"><a name="i72791372407"></a><a name="i72791372407"></a>Relfilenode of the table (physical file name)</em>. For example, <strong id="b1339694944014"><a name="b1339694944014"></a><a name="b1339694944014"></a>base/16603/16394</strong>.</li><li>You can run the <strong id="b1174475313402"><a name="b1174475313402"></a><a name="b1174475313402"></a>pg_relation_filepath(table_name text)</strong> command to query the relative path of the table file.</li><li>Valid path formats are as follows:<a name="ul0359831124719"></a><a name="ul0359831124719"></a><ul id="ul0359831124719"><li>global/relNode</li><li>base/dbNode/relNode</li><li>pg_tblspc/spcNode/version_dir/dbNode/relNode</li></ul>
    </li></ul>
    </td>
    </tr>
    <tr id="row191463962314"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p161443912320"><a name="p161443912320"></a><a name="p161443912320"></a>blocknum</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p0144395233"><a name="p0144395233"></a><a name="p0144395233"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul81453912318"></a><a name="ul81453912318"></a><ul id="ul81453912318"><li><strong id="b18681135618407"><a name="b18681135618407"></a><a name="b18681135618407"></a>-1</strong>: Information about all blocks</li><li><strong id="b204225425482"><a name="b204225425482"></a><a name="b204225425482"></a>0-</strong><em id="i17422642134810"><a name="i17422642134810"></a><a name="i17422642134810"></a>MaxBlockNumber</em>: Information about the corresponding block</li></ul>
    </td>
    </tr>
    <tr id="row314173922310"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p161403962319"><a name="p161403962319"></a><a name="p161403962319"></a>relation_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p11473962314"><a name="p11473962314"></a><a name="p11473962314"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul1714539122310"></a><a name="ul1714539122310"></a><ul id="ul1714539122310"><li><strong id="b152292074117"><a name="b152292074117"></a><a name="b152292074117"></a>heap</strong>: Astore table</li><li><strong id="b19762154112"><a name="b19762154112"></a><a name="b19762154112"></a>uheap</strong>: Ustore table</li><li><strong id="b995173114119"><a name="b995173114119"></a><a name="b995173114119"></a>btree_index</strong>: B-tree index</li><li><strong id="b119974184118"><a name="b119974184118"></a><a name="b119974184118"></a>ubtree_index</strong>: UBTree index</li><li><strong id="b53575513418"><a name="b53575513418"></a><a name="b53575513418"></a>segment</strong>: Segment-page</li></ul>
    </td>
    </tr>
    <tr id="row1515103902320"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p3151139192318"><a name="p3151139192318"></a><a name="p3151139192318"></a>read_memory</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p171543992320"><a name="p171543992320"></a><a name="p171543992320"></a>boolean</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul101523982314"></a><a name="ul101523982314"></a><ul id="ul101523982314"><li><strong id="b173099774120"><a name="b173099774120"></a><a name="b173099774120"></a>false</strong>: The system parses the page from the disk file.</li><li><strong id="b129151044113"><a name="b129151044113"></a><a name="b129151044113"></a>true</strong>: The system attempts to parse the page from the shared buffer. If the page does not exist in the shared buffer, the system parses the page from the disk file.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_index\_verify\(Oid oid, uint32:wq blkno\)

    Description: Checks whether the sequence of keys on the UBtree index page or index tree is correct.

    Return type: record

    **Table  12**  gs\_index\_verify parameters

    <a name="table20495851424"></a>
    <table><thead align="left"><tr id="row94951557218"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p9495951125"><a name="p9495951125"></a><a name="p9495951125"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.48154815481548%" id="mcps1.2.4.1.2"><p id="p94951651126"><a name="p94951651126"></a><a name="p94951651126"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="64.27642764276428%" id="mcps1.2.4.1.3"><p id="p449516514219"><a name="p449516514219"></a><a name="p449516514219"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row649613518218"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p449610515215"><a name="p449610515215"></a><a name="p449610515215"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p16496751123"><a name="p16496751123"></a><a name="p16496751123"></a>Oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul10496951120"></a><a name="ul10496951120"></a><ul id="ul10496951120"><li>Index file relfilenode, which can be queried using <strong id="b4513314174510"><a name="b4513314174510"></a><a name="b4513314174510"></a>select relfilenode from pg_class where relname='</strong><em id="i136011434454"><a name="i136011434454"></a><a name="i136011434454"></a>Index file name</em><strong id="b64862162458"><a name="b64862162458"></a><a name="b64862162458"></a>'</strong>.</li></ul>
    </td>
    </tr>
    <tr id="row44968519214"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p12738153011817"><a name="p12738153011817"></a><a name="p12738153011817"></a>blkno</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p1947519492819"><a name="p1947519492819"></a><a name="p1947519492819"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul149611518215"></a><a name="ul149611518215"></a><ul id="ul149611518215"><li><strong id="b154143244314"><a name="b154143244314"></a><a name="b154143244314"></a>0</strong>: indicates that all pages in the index tree are checked.</li><li>If the value is greater than 0, the index page whose page code is equal to the value of <strong id="b1657848444"><a name="b1657848444"></a><a name="b1657848444"></a>blkno</strong> is checked.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_index\_recycle\_queue\(Oid oid, int type, uint32 blkno\)

    Description: Parses the UBtree index recycling queue information.

    Return type: record

    **Table  13**  gs\_index\_recycle\_queue parameters

    <a name="table121161030171216"></a>
    <table><thead align="left"><tr id="row11171230191211"><th class="cellrowborder" valign="top" width="20.242024202420243%" id="mcps1.2.4.1.1"><p id="p1211715307125"><a name="p1211715307125"></a><a name="p1211715307125"></a>Parameter</p>
    </th>
    <th class="cellrowborder" valign="top" width="15.48154815481548%" id="mcps1.2.4.1.2"><p id="p3117430171212"><a name="p3117430171212"></a><a name="p3117430171212"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="64.27642764276428%" id="mcps1.2.4.1.3"><p id="p121171308125"><a name="p121171308125"></a><a name="p121171308125"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row18117230171215"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p19117203014124"><a name="p19117203014124"></a><a name="p19117203014124"></a>oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p81171930171213"><a name="p81171930171213"></a><a name="p81171930171213"></a>Oid</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul1117143019121"></a><a name="ul1117143019121"></a><ul id="ul1117143019121"><li>Index file relfilenode, which can be queried using <strong id="b1043110174612"><a name="b1043110174612"></a><a name="b1043110174612"></a>select relfilenode from pg_class where relname='</strong><em id="i14350174620"><a name="i14350174620"></a><a name="i14350174620"></a>Index file name</em><strong id="b154312018461"><a name="b154312018461"></a><a name="b154312018461"></a>'</strong>.</li></ul>
    </td>
    </tr>
    <tr id="row8261134191611"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p16261247165"><a name="p16261247165"></a><a name="p16261247165"></a>type</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p026234191615"><a name="p026234191615"></a><a name="p026234191615"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul1455571701615"></a><a name="ul1455571701615"></a><ul id="ul1455571701615"><li><strong id="b87111314466"><a name="b87111314466"></a><a name="b87111314466"></a>0</strong>: indicates that the entire queue to be recycled is parsed.</li><li><strong id="b19313428194620"><a name="b19313428194620"></a><a name="b19313428194620"></a>1</strong>: indicates that the entire empty page queue is parsed.</li><li><strong id="b1311093414463"><a name="b1311093414463"></a><a name="b1311093414463"></a>2</strong>: indicates that a single page is parsed.</li></ul>
    </td>
    </tr>
    <tr id="row111793051217"><td class="cellrowborder" valign="top" width="20.242024202420243%" headers="mcps1.2.4.1.1 "><p id="p3117203001211"><a name="p3117203001211"></a><a name="p3117203001211"></a>blkno</p>
    </td>
    <td class="cellrowborder" valign="top" width="15.48154815481548%" headers="mcps1.2.4.1.2 "><p id="p13117163051218"><a name="p13117163051218"></a><a name="p13117163051218"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="64.27642764276428%" headers="mcps1.2.4.1.3 "><a name="ul18118153014128"></a><a name="ul18118153014128"></a><ul id="ul18118153014128"><li>ID of the recycling queue page. This parameter is valid only when <strong id="b10143164734619"><a name="b10143164734619"></a><a name="b10143164734619"></a>type</strong> is set to <strong id="b196061248104619"><a name="b196061248104619"></a><a name="b196061248104619"></a>2</strong>. The value of <strong id="b10983145074612"><a name="b10983145074612"></a><a name="b10983145074612"></a>blkno</strong> ranges from 1 to 4294967294.</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_stat\_wal\_entrytable\(int64 idx\)

    Description: Exports the content of the write-ahead log insertion status table in the Xlog.

    Return type: record

    **Table  14**  gs\_stat\_wal\_entrytable parameters

    <a name="table4929155865119"></a>
    <table><thead align="left"><tr id="row13930125855114"><th class="cellrowborder" valign="top" width="10.05%" id="mcps1.2.5.1.1"><p id="p1066133922413"><a name="p1066133922413"></a><a name="p1066133922413"></a>Category</p>
    </th>
    <th class="cellrowborder" valign="top" width="16.189999999999998%" id="mcps1.2.5.1.2"><p id="p193010585511"><a name="p193010585511"></a><a name="p193010585511"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="14.32%" id="mcps1.2.5.1.3"><p id="p093095865118"><a name="p093095865118"></a><a name="p093095865118"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="59.440000000000005%" id="mcps1.2.5.1.4"><p id="p139301758195119"><a name="p139301758195119"></a><a name="p139301758195119"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row1293055855111"><td class="cellrowborder" valign="top" width="10.05%" headers="mcps1.2.5.1.1 "><p id="p116611939192414"><a name="p116611939192414"></a><a name="p116611939192414"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.189999999999998%" headers="mcps1.2.5.1.2 "><p id="p19930165811519"><a name="p19930165811519"></a><a name="p19930165811519"></a>idx</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.32%" headers="mcps1.2.5.1.3 "><p id="p3930858115120"><a name="p3930858115120"></a><a name="p3930858115120"></a>int64</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.440000000000005%" headers="mcps1.2.5.1.4 "><a name="ul69301258105116"></a><a name="ul69301258105116"></a><ul id="ul69301258105116"><li><strong id="b153531300475"><a name="b153531300475"></a><a name="b153531300475"></a>-1</strong>: queries all elements in an array.</li><li><strong id="b11562153744717"><a name="b11562153744717"></a><a name="b11562153744717"></a>0-</strong><em id="i1198913449475"><a name="i1198913449475"></a><a name="i1198913449475"></a>Maximum value</em>: content of a specific array element.</li></ul>
    </td>
    </tr>
    <tr id="row8748191322515"><td class="cellrowborder" valign="top" width="10.05%" headers="mcps1.2.5.1.1 "><p id="p177491413152510"><a name="p177491413152510"></a><a name="p177491413152510"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.189999999999998%" headers="mcps1.2.5.1.2 "><p id="p187491113182511"><a name="p187491113182511"></a><a name="p187491113182511"></a>idx</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.32%" headers="mcps1.2.5.1.3 "><p id="p9749613102517"><a name="p9749613102517"></a><a name="p9749613102517"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.440000000000005%" headers="mcps1.2.5.1.4 "><p id="p374971312518"><a name="p374971312518"></a><a name="p374971312518"></a>Records the subscripts in the corresponding array.</p>
    </td>
    </tr>
    <tr id="row1732619109252"><td class="cellrowborder" valign="top" width="10.05%" headers="mcps1.2.5.1.1 "><p id="p19327171022512"><a name="p19327171022512"></a><a name="p19327171022512"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.189999999999998%" headers="mcps1.2.5.1.2 "><p id="p15327131013259"><a name="p15327131013259"></a><a name="p15327131013259"></a>endlsn</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.32%" headers="mcps1.2.5.1.3 "><p id="p1332711062511"><a name="p1332711062511"></a><a name="p1332711062511"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.440000000000005%" headers="mcps1.2.5.1.4 "><p id="p1532721018256"><a name="p1532721018256"></a><a name="p1532721018256"></a>Records the LSN label.</p>
    </td>
    </tr>
    <tr id="row1782363132510"><td class="cellrowborder" valign="top" width="10.05%" headers="mcps1.2.5.1.1 "><p id="p16823932259"><a name="p16823932259"></a><a name="p16823932259"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.189999999999998%" headers="mcps1.2.5.1.2 "><p id="p4823113182517"><a name="p4823113182517"></a><a name="p4823113182517"></a>lrc</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.32%" headers="mcps1.2.5.1.3 "><p id="p1782317372515"><a name="p1782317372515"></a><a name="p1782317372515"></a>int32</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.440000000000005%" headers="mcps1.2.5.1.4 "><p id="p118231435256"><a name="p118231435256"></a><a name="p118231435256"></a>Records the corresponding LRC.</p>
    </td>
    </tr>
    <tr id="row156126595241"><td class="cellrowborder" valign="top" width="10.05%" headers="mcps1.2.5.1.1 "><p id="p10613659172410"><a name="p10613659172410"></a><a name="p10613659172410"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="16.189999999999998%" headers="mcps1.2.5.1.2 "><p id="p66131659132416"><a name="p66131659132416"></a><a name="p66131659132416"></a>status</p>
    </td>
    <td class="cellrowborder" valign="top" width="14.32%" headers="mcps1.2.5.1.3 "><p id="p66131859182419"><a name="p66131859182419"></a><a name="p66131859182419"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="59.440000000000005%" headers="mcps1.2.5.1.4 "><p id="p17613155914249"><a name="p17613155914249"></a><a name="p17613155914249"></a>Determines whether the Xlog corresponding to the current entry has been completely copied to the WAL buffer:</p>
    <a name="ul132586129272"></a><a name="ul132586129272"></a><ul id="ul132586129272"><li><strong id="b5658946105017"><a name="b5658946105017"></a><a name="b5658946105017"></a>0</strong>: Not copied.</li><li><strong id="b1489919177518"><a name="b1489919177518"></a><a name="b1489919177518"></a>1</strong>: Copied</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_walwriter\_flush\_position\(\)

    Description: Outputs the refresh position of write-ahead logs.

    Return type: record

    **Table  15**  gs\_walwriter\_flush\_position parameters

    <a name="table188124399287"></a>
    <table><thead align="left"><tr id="row14812239122817"><th class="cellrowborder" valign="top" width="10.65%" id="mcps1.2.5.1.1"><p id="p17812739152811"><a name="p17812739152811"></a><a name="p17812739152811"></a>Category</p>
    </th>
    <th class="cellrowborder" valign="top" width="24.73%" id="mcps1.2.5.1.2"><p id="p28121139102813"><a name="p28121139102813"></a><a name="p28121139102813"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.37%" id="mcps1.2.5.1.3"><p id="p681243915288"><a name="p681243915288"></a><a name="p681243915288"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="56.25%" id="mcps1.2.5.1.4"><p id="p108121339172819"><a name="p108121339172819"></a><a name="p108121339172819"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row158121439162810"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p16812143919282"><a name="p16812143919282"></a><a name="p16812143919282"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p1881233920283"><a name="p1881233920283"></a><a name="p1881233920283"></a>last_flush_status_entry</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p19812193913288"><a name="p19812193913288"></a><a name="p19812193913288"></a>int32</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p10812739152817"><a name="p10812739152817"></a><a name="p10812739152817"></a>Subscript index obtained after the Xlog flushes the tblEntry of the last flushed disk.</p>
    </td>
    </tr>
    <tr id="row3812143972819"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p12812939192816"><a name="p12812939192816"></a><a name="p12812939192816"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p78131939172810"><a name="p78131939172810"></a><a name="p78131939172810"></a>last_scanned_lrc</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p178138393288"><a name="p178138393288"></a><a name="p178138393288"></a>int32</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p781343982819"><a name="p781343982819"></a><a name="p781343982819"></a>LRC obtained after the Xlog flushes the last tblEntry scanned last time.</p>
    </td>
    </tr>
    <tr id="row781333915287"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p58138395283"><a name="p58138395283"></a><a name="p58138395283"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p08131039112813"><a name="p08131039112813"></a><a name="p08131039112813"></a>curr_lrc</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p1813183913283"><a name="p1813183913283"></a><a name="p1813183913283"></a>int32</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p6813739122816"><a name="p6813739122816"></a><a name="p6813739122816"></a>Latest LRC usage in the WALInsertStatusEntry status table. The LRC indicates the LRC value corresponding to the WALInsertStatusEntry when the next Xlog record is written.</p>
    </td>
    </tr>
    <tr id="row14813153910282"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p08131539132816"><a name="p08131539132816"></a><a name="p08131539132816"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p481323915288"><a name="p481323915288"></a><a name="p481323915288"></a>curr_byte_pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p181343932814"><a name="p181343932814"></a><a name="p181343932814"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p181318390288"><a name="p181318390288"></a><a name="p181318390288"></a>The latest Xlog position after the Xlog is written to the WAL file, which is also the next Xlog insertion point.</p>
    </td>
    </tr>
    <tr id="row1781363922815"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p7813103942817"><a name="p7813103942817"></a><a name="p7813103942817"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p12813539152818"><a name="p12813539152818"></a><a name="p12813539152818"></a>prev_byte_size</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p1681383912817"><a name="p1681383912817"></a><a name="p1681383912817"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p7813193982818"><a name="p7813193982818"></a><a name="p7813193982818"></a>Length of the previous Xlog record.</p>
    </td>
    </tr>
    <tr id="row2081343982810"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p6813639132818"><a name="p6813639132818"></a><a name="p6813639132818"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p5813113972817"><a name="p5813113972817"></a><a name="p5813113972817"></a>flush_result</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p188131039152811"><a name="p188131039152811"></a><a name="p188131039152811"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p7813163932813"><a name="p7813163932813"></a><a name="p7813163932813"></a>Position of the current global Xlog flush.</p>
    </td>
    </tr>
    <tr id="row158131339182814"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p1381383911286"><a name="p1381383911286"></a><a name="p1381383911286"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p13813439142810"><a name="p13813439142810"></a><a name="p13813439142810"></a>send_result</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p0813639152812"><a name="p0813639152812"></a><a name="p0813639152812"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p38136394282"><a name="p38136394282"></a><a name="p38136394282"></a>Xlog sending position on the current host.</p>
    </td>
    </tr>
    <tr id="row936316413307"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p8363104163014"><a name="p8363104163014"></a><a name="p8363104163014"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p8363174123014"><a name="p8363174123014"></a><a name="p8363174123014"></a>shm_rqst_write_pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p103631841309"><a name="p103631841309"></a><a name="p103631841309"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p0363545303"><a name="p0363545303"></a><a name="p0363545303"></a>The write position of the LogwrtRqst request in the XLogCtl recorded in the shared memory.</p>
    </td>
    </tr>
    <tr id="row186811717308"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p16693714309"><a name="p16693714309"></a><a name="p16693714309"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p1269772303"><a name="p1269772303"></a><a name="p1269772303"></a>shm_rqst_flush_pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p66919783018"><a name="p66919783018"></a><a name="p66919783018"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p116914716309"><a name="p116914716309"></a><a name="p116914716309"></a>The flush position of the LogwrtRqst request in the XLogCtl recorded in the shared memory.</p>
    </td>
    </tr>
    <tr id="row126629903011"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p66621914309"><a name="p66621914309"></a><a name="p66621914309"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p1066312915302"><a name="p1066312915302"></a><a name="p1066312915302"></a>shm_result_write_pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p206631594306"><a name="p206631594306"></a><a name="p206631594306"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p9663593304"><a name="p9663593304"></a><a name="p9663593304"></a>The write position of the LogwrtResult request in the XLogCtl recorded in the shared memory.</p>
    </td>
    </tr>
    <tr id="row184911712183012"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p9491512183012"><a name="p9491512183012"></a><a name="p9491512183012"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p1049151223019"><a name="p1049151223019"></a><a name="p1049151223019"></a>shm_result_flush_pos</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p1491161215306"><a name="p1491161215306"></a><a name="p1491161215306"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p749119128300"><a name="p749119128300"></a><a name="p749119128300"></a>The flush position of the LogwrtResult request in the XLogCtl recorded in the shared memory.</p>
    </td>
    </tr>
    <tr id="row266981543019"><td class="cellrowborder" valign="top" width="10.65%" headers="mcps1.2.5.1.1 "><p id="p366981515309"><a name="p366981515309"></a><a name="p366981515309"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="24.73%" headers="mcps1.2.5.1.2 "><p id="p1666951512304"><a name="p1666951512304"></a><a name="p1666951512304"></a>curr_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.37%" headers="mcps1.2.5.1.3 "><p id="p16691615193015"><a name="p16691615193015"></a><a name="p16691615193015"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="56.25%" headers="mcps1.2.5.1.4 "><p id="p186691815133011"><a name="p186691815133011"></a><a name="p186691815133011"></a>Current time.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_walwriter\_flush\_stat\(int operation\)

    Description: Collects statistics on the frequency of writing and synchronizing write-ahead logs, data volume, and Xlog file information.

    Return type: record

    **Table  16**  gs\_walwriter\_flush\_stat parameters

    <a name="table94501910135111"></a>
    <table><thead align="left"><tr id="row16450510165117"><th class="cellrowborder" valign="top" width="10.780000000000001%" id="mcps1.2.5.1.1"><p id="p17582743173512"><a name="p17582743173512"></a><a name="p17582743173512"></a>Category</p>
    </th>
    <th class="cellrowborder" valign="top" width="29.299999999999997%" id="mcps1.2.5.1.2"><p id="p44504106513"><a name="p44504106513"></a><a name="p44504106513"></a>Parameter Name</p>
    </th>
    <th class="cellrowborder" valign="top" width="8.4%" id="mcps1.2.5.1.3"><p id="p245141035114"><a name="p245141035114"></a><a name="p245141035114"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="51.519999999999996%" id="mcps1.2.5.1.4"><p id="p18451101013511"><a name="p18451101013511"></a><a name="p18451101013511"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row74511410125111"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p2582743193517"><a name="p2582743193517"></a><a name="p2582743193517"></a>Input parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p12451110145118"><a name="p12451110145118"></a><a name="p12451110145118"></a>operation</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p18451610125111"><a name="p18451610125111"></a><a name="p18451610125111"></a>int</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><a name="ul34519108516"></a><a name="ul34519108516"></a><ul id="ul34519108516"><li><strong id="b1383483517"><a name="b1383483517"></a><a name="b1383483517"></a>-1</strong>: Disable the statistics function. (Default value)</li><li><strong id="b145191291210"><a name="b145191291210"></a><a name="b145191291210"></a>0</strong>: Enable the statistics function.</li><li><strong id="b116239131214"><a name="b116239131214"></a><a name="b116239131214"></a>1</strong>: Query statistics.</li><li><strong id="b19743142951215"><a name="b19743142951215"></a><a name="b19743142951215"></a>2</strong>: Reset statistics.</li></ul>
    </td>
    </tr>
    <tr id="row1370084120349"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p258215437359"><a name="p258215437359"></a><a name="p258215437359"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p9701641123416"><a name="p9701641123416"></a><a name="p9701641123416"></a>write_times</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p197013413343"><a name="p197013413343"></a><a name="p197013413343"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p6701124133412"><a name="p6701124133412"></a><a name="p6701124133412"></a>Number of times that the Xlog calls the <strong id="b7770125521310"><a name="b7770125521310"></a><a name="b7770125521310"></a>write</strong> API.</p>
    </td>
    </tr>
    <tr id="row17115174513413"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p458294316350"><a name="p458294316350"></a><a name="p458294316350"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p16115134518344"><a name="p16115134518344"></a><a name="p16115134518344"></a>sync_times</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p17115845133410"><a name="p17115845133410"></a><a name="p17115845133410"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p81161845113419"><a name="p81161845113419"></a><a name="p81161845113419"></a>Number of times that the Xlog calls the <strong id="b1262665710132"><a name="b1262665710132"></a><a name="b1262665710132"></a>sync</strong> API.</p>
    </td>
    </tr>
    <tr id="row12596164614341"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p05821043123511"><a name="p05821043123511"></a><a name="p05821043123511"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p15596184610341"><a name="p15596184610341"></a><a name="p15596184610341"></a>total_xlog_sync_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p85961464349"><a name="p85961464349"></a><a name="p85961464349"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p1659616464343"><a name="p1659616464343"></a><a name="p1659616464343"></a>Total number of backend thread requests for writing data to Xlogs.</p>
    </td>
    </tr>
    <tr id="row51821151193418"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p4582143143513"><a name="p4582143143513"></a><a name="p4582143143513"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p1918215514345"><a name="p1918215514345"></a><a name="p1918215514345"></a>total_actual_xlog_sync_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p31821051113418"><a name="p31821051113418"></a><a name="p31821051113418"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p1118213513346"><a name="p1118213513346"></a><a name="p1118213513346"></a>Total number of Xlogs that call the <strong id="b2746196161416"><a name="b2746196161416"></a><a name="b2746196161416"></a>sync</strong> API for disk flushing.</p>
    </td>
    </tr>
    <tr id="row16553185433413"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p1958216432359"><a name="p1958216432359"></a><a name="p1958216432359"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p35531454193417"><a name="p35531454193417"></a><a name="p35531454193417"></a>avg_write_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p1155365417347"><a name="p1155365417347"></a><a name="p1155365417347"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p3553165463416"><a name="p3553165463416"></a><a name="p3553165463416"></a>Number of Xlogs written each time the <strong id="b12616165418142"><a name="b12616165418142"></a><a name="b12616165418142"></a>XLogWrite</strong> API is called.</p>
    </td>
    </tr>
    <tr id="row19477205753412"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p858284314358"><a name="p858284314358"></a><a name="p858284314358"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p34771457173412"><a name="p34771457173412"></a><a name="p34771457173412"></a>avg_actual_write_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p1347765713416"><a name="p1347765713416"></a><a name="p1347765713416"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p194771157153417"><a name="p194771157153417"></a><a name="p194771157153417"></a>Number of Xlogs written each time the <strong id="b568145919142"><a name="b568145919142"></a><a name="b568145919142"></a>write</strong> API is called.</p>
    </td>
    </tr>
    <tr id="row5999135812340"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p4582124353511"><a name="p4582124353511"></a><a name="p4582124353511"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p499918585349"><a name="p499918585349"></a><a name="p499918585349"></a>avg_sync_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p159991458143410"><a name="p159991458143410"></a><a name="p159991458143410"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p59991558173410"><a name="p59991558173410"></a><a name="p59991558173410"></a>Average number of Xlogs for each synchronization request.</p>
    </td>
    </tr>
    <tr id="row1384690133511"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p11582204323520"><a name="p11582204323520"></a><a name="p11582204323520"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p17847150193518"><a name="p17847150193518"></a><a name="p17847150193518"></a>avg_actual_sync_bytes</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p188473016353"><a name="p188473016353"></a><a name="p188473016353"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p98473010353"><a name="p98473010353"></a><a name="p98473010353"></a>Actual Xlog amount of disk flushing by calling <strong id="b8283148121518"><a name="b8283148121518"></a><a name="b8283148121518"></a>sync</strong> each time.</p>
    </td>
    </tr>
    <tr id="row133461727103517"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p165821343103519"><a name="p165821343103519"></a><a name="p165821343103519"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p8347142763513"><a name="p8347142763513"></a><a name="p8347142763513"></a>total_write_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p1347192763517"><a name="p1347192763517"></a><a name="p1347192763517"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p1734722713515"><a name="p1734722713515"></a><a name="p1734722713515"></a>Total time of calling the write operation (unit: μs).</p>
    </td>
    </tr>
    <tr id="row9362162913358"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p13582154316352"><a name="p13582154316352"></a><a name="p13582154316352"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p3362122913357"><a name="p3362122913357"></a><a name="p3362122913357"></a>total_sync_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p5362192963518"><a name="p5362192963518"></a><a name="p5362192963518"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p17362152913513"><a name="p17362152913513"></a><a name="p17362152913513"></a>Total time of calling the sync operation (unit: μs).</p>
    </td>
    </tr>
    <tr id="row122773153511"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p958234319354"><a name="p958234319354"></a><a name="p958234319354"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p2227133113359"><a name="p2227133113359"></a><a name="p2227133113359"></a>avg_write_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p162271931183510"><a name="p162271931183510"></a><a name="p162271931183510"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p152271731163511"><a name="p152271731163511"></a><a name="p152271731163511"></a>Average time for calling the <strong id="b1104122817161"><a name="b1104122817161"></a><a name="b1104122817161"></a>write</strong> API each time (unit: μs).</p>
    </td>
    </tr>
    <tr id="row8770143253519"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p1958234333518"><a name="p1958234333518"></a><a name="p1958234333518"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p17770143218356"><a name="p17770143218356"></a><a name="p17770143218356"></a>avg_sync_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p12770143253520"><a name="p12770143253520"></a><a name="p12770143253520"></a>uint32</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p107703320350"><a name="p107703320350"></a><a name="p107703320350"></a>Average time for calling the <strong id="b10698183391613"><a name="b10698183391613"></a><a name="b10698183391613"></a>sync</strong> API each time (unit: μs).</p>
    </td>
    </tr>
    <tr id="row12733349357"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p1558215437357"><a name="p1558215437357"></a><a name="p1558215437357"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p1473143419355"><a name="p1473143419355"></a><a name="p1473143419355"></a>curr_init_xlog_segno</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p87318343352"><a name="p87318343352"></a><a name="p87318343352"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p27363453510"><a name="p27363453510"></a><a name="p27363453510"></a>ID of the latest Xlog segment file.</p>
    </td>
    </tr>
    <tr id="row1968163563515"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p258284310356"><a name="p258284310356"></a><a name="p258284310356"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p1868163543510"><a name="p1868163543510"></a><a name="p1868163543510"></a>curr_open_xlog_segno</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p66815354353"><a name="p66815354353"></a><a name="p66815354353"></a>uint64</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p1681535133518"><a name="p1681535133518"></a><a name="p1681535133518"></a>ID of the Xlog segment file that is being written.</p>
    </td>
    </tr>
    <tr id="row1640433718355"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p1582443103514"><a name="p1582443103514"></a><a name="p1582443103514"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p1840493710353"><a name="p1840493710353"></a><a name="p1840493710353"></a>last_reset_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p184042376358"><a name="p184042376358"></a><a name="p184042376358"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p20404143783515"><a name="p20404143783515"></a><a name="p20404143783515"></a>Time when statistics were last collected.</p>
    </td>
    </tr>
    <tr id="row587343816354"><td class="cellrowborder" valign="top" width="10.780000000000001%" headers="mcps1.2.5.1.1 "><p id="p20582643103514"><a name="p20582643103514"></a><a name="p20582643103514"></a>Output parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="29.299999999999997%" headers="mcps1.2.5.1.2 "><p id="p38734388359"><a name="p38734388359"></a><a name="p38734388359"></a>curr_time</p>
    </td>
    <td class="cellrowborder" valign="top" width="8.4%" headers="mcps1.2.5.1.3 "><p id="p7873133813357"><a name="p7873133813357"></a><a name="p7873133813357"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.519999999999996%" headers="mcps1.2.5.1.4 "><p id="p19873183815351"><a name="p19873183815351"></a><a name="p19873183815351"></a>Current time.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   gs\_comm\_proxy\_thread\_status\(\)

    Description: Collects statistics on data packets sent and received by the proxy communication library  **comm\_proxy**  when a user-mode network is configured for the database instance.

    Parameter: nan

    Return type: record

    >![](public_sys-resources/icon-note.gif) **NOTE:** 
    >The query result of this function is displayed only when the user-mode network is deployed in a centralized environment and  **enable\_dfx in comm\_proxy\_attr**  is set to  **true**. In other scenarios, an error message is displayed, indicating that queries are not supported.


