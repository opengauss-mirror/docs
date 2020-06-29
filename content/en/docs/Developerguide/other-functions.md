# Other Functions<a name="EN-US_TOPIC_0242370461"></a>

-   pgxc\_pool\_check\(\)

    Description: Checks whether the connection data buffered in the pool is consistent with  **pgxc\_node**.

    Return type: Boolean

-   pgxc\_pool\_reload\(\)

    Description: Updates the connection information buffered in the pool.

    Return type: Boolean

-   pgxc\_lock\_for\_backup\(\)

    Description: Locks openGauss for taking backup that would be used for restoration on the new nodes.

    Return type: Boolean

-   plan\_seed\(\)

    Description: Obtains the seed value of the previous query statement \(internal use\).

    Return type: int

-   pg\_stat\_get\_env\(\)

    Description: Obtains the environment variable information about the current node.

    Return type: record

-   pg\_stat\_get\_thread\(\)

    Description: Provides information about the status of all threads under the current node.

    Return type: record

-   pg\_stat\_get\_sql\_count\(\)

    Description: Provides the counts of the  **SELECT**,  **UPDATE**,  **INSERT**,  **DELETE**, and  **MERGE INTO**  statements executed on the current node.

    Return type: record

-   copy\_error\_log\_create\(\)

    Description: Creates the error table \(**public.pgxc\_copy\_error\_log**\) required for creating the  **COPY FROM**  error tolerance mechanism.

    Return type: Boolean

    >![](public_sys-resources/icon-note.gif) **NOTE:**   
    >-   This function attempts to create the  **public.pgxc\_copy\_error\_log**  table. For details about the table, see  [Table 1](#en-us_topic_0237121997_table138318280213).  
    >-   Create the B-tree index on the  **relname**  column and execute  **REVOKE ALL on public.pgxc\_copy\_error\_log FROM public**  to manage permissions for the error table \(the permissions are the same as those of the  **COPY**  statement\).  
    >-   **public.pgxc\_copy\_error\_log**  is a row-store table. Therefore, this function can be executed and  **COPY**  error tolerance is available only when row-store tables can be created in openGauss. Row-store tables cannot be created in openGauss if  **enable\_hadoop\_env**  is set to  **on**. \(By default, this parameter is set to  **off**  in openGauss.\)  
    >-   Same as the error table and the  **COPY**  statement, the function requires  **sysadmin**  or higher permissions.  
    >-   If the  **public.pgxc\_copy\_error\_log**  table or the  **copy\_error\_log\_relname\_idx**  index already exists before the function creates it, the function will report an error and roll back.  

    **Table  1**  Error table public.pgxc\_copy\_error\_log

    <a name="en-us_topic_0237121997_table138318280213"></a>
    <table><thead align="left"><tr id="en-us_topic_0237121997_row48415282214"><th class="cellrowborder" valign="top" width="22.31223122312231%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237121997_p084142817211"><a name="en-us_topic_0237121997_p084142817211"></a><a name="en-us_topic_0237121997_p084142817211"></a>Column</p>
    </th>
    <th class="cellrowborder" valign="top" width="28.992899289928992%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237121997_p198410281525"><a name="en-us_topic_0237121997_p198410281525"></a><a name="en-us_topic_0237121997_p198410281525"></a>Type</p>
    </th>
    <th class="cellrowborder" valign="top" width="48.6948694869487%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237121997_p08411281214"><a name="en-us_topic_0237121997_p08411281214"></a><a name="en-us_topic_0237121997_p08411281214"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="en-us_topic_0237121997_row65469159815"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121997_p195466152819"><a name="en-us_topic_0237121997_p195466152819"></a><a name="en-us_topic_0237121997_p195466152819"></a>relname</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121997_p165477151182"><a name="en-us_topic_0237121997_p165477151182"></a><a name="en-us_topic_0237121997_p165477151182"></a>varchar</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121997_p3547141514816"><a name="en-us_topic_0237121997_p3547141514816"></a><a name="en-us_topic_0237121997_p3547141514816"></a>Table name in the form of <em>Schema name</em><strong>.</strong><em>Table name</em></p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row984112817210"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121997_p1882414211083"><a name="en-us_topic_0237121997_p1882414211083"></a><a name="en-us_topic_0237121997_p1882414211083"></a>begintime</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121997_p1082562116817"><a name="en-us_topic_0237121997_p1082562116817"></a><a name="en-us_topic_0237121997_p1082562116817"></a>timestamp with time zone</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121997_p17825921686"><a name="en-us_topic_0237121997_p17825921686"></a><a name="en-us_topic_0237121997_p17825921686"></a>Time when a data format error was reported</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row148502818216"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121997_p1935720521277"><a name="en-us_topic_0237121997_p1935720521277"></a><a name="en-us_topic_0237121997_p1935720521277"></a>filename</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121997_p1535785215711"><a name="en-us_topic_0237121997_p1535785215711"></a><a name="en-us_topic_0237121997_p1535785215711"></a>character varying</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121997_p10357155215713"><a name="en-us_topic_0237121997_p10357155215713"></a><a name="en-us_topic_0237121997_p10357155215713"></a>Name of the source data file where a data format error occurs</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row1418810441476"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121997_p2035812521178"><a name="en-us_topic_0237121997_p2035812521178"></a><a name="en-us_topic_0237121997_p2035812521178"></a>rownum</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121997_p12358205220716"><a name="en-us_topic_0237121997_p12358205220716"></a><a name="en-us_topic_0237121997_p12358205220716"></a>bigint</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121997_p2358105218712"><a name="en-us_topic_0237121997_p2358105218712"></a><a name="en-us_topic_0237121997_p2358105218712"></a>Number of the row where a data format error occurs in a source data file</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row181905441873"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121997_p6358185215718"><a name="en-us_topic_0237121997_p6358185215718"></a><a name="en-us_topic_0237121997_p6358185215718"></a>rawrecord</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121997_p153583521175"><a name="en-us_topic_0237121997_p153583521175"></a><a name="en-us_topic_0237121997_p153583521175"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121997_p1135810527714"><a name="en-us_topic_0237121997_p1135810527714"></a><a name="en-us_topic_0237121997_p1135810527714"></a>Raw record of a data format error in the source data file</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row1487854919720"><td class="cellrowborder" valign="top" width="22.31223122312231%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237121997_p9359145212719"><a name="en-us_topic_0237121997_p9359145212719"></a><a name="en-us_topic_0237121997_p9359145212719"></a>detail</p>
    </td>
    <td class="cellrowborder" valign="top" width="28.992899289928992%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237121997_p83592521276"><a name="en-us_topic_0237121997_p83592521276"></a><a name="en-us_topic_0237121997_p83592521276"></a>text</p>
    </td>
    <td class="cellrowborder" valign="top" width="48.6948694869487%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237121997_p20359105219717"><a name="en-us_topic_0237121997_p20359105219717"></a><a name="en-us_topic_0237121997_p20359105219717"></a>Error details</p>
    </td>
    </tr>
    </tbody>
    </table>

-   pg\_stat\_get\_data\_senders\(\)

    Description: Provides detailed information about the data-copy sending thread active at the moment.

    Return type: record

-   generate\_wdr\_report\(begin\_snap\_id Oid, end\_snap\_id Oid, int report\_type, int report\_scope, int node\_name\)

    Description: Generates system diagnosis reports based on two snapshots.

    Return type: record

    **Table  2**  Parameter description

    <a name="en-us_topic_0237121997_table1757513581634"></a>
    <table><tbody><tr id="en-us_topic_0237121997_row1280114581437"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0237121997_p11801115814318"><a name="en-us_topic_0237121997_p11801115814318"></a><a name="en-us_topic_0237121997_p11801115814318"></a>Parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.83%"><p id="en-us_topic_0237121997_p158015584310"><a name="en-us_topic_0237121997_p158015584310"></a><a name="en-us_topic_0237121997_p158015584310"></a>Description</p>
    </td>
    <td class="cellrowborder" valign="top" width="27.93%"><p id="en-us_topic_0237121997_p1880217581937"><a name="en-us_topic_0237121997_p1880217581937"></a><a name="en-us_topic_0237121997_p1880217581937"></a>Value Range</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row680211581937"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0237121997_p380217581314"><a name="en-us_topic_0237121997_p380217581314"></a><a name="en-us_topic_0237121997_p380217581314"></a>begin_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.83%"><p id="en-us_topic_0237121997_p128028581331"><a name="en-us_topic_0237121997_p128028581331"></a><a name="en-us_topic_0237121997_p128028581331"></a>Snapshot ID that starts the diagnosis report period.</p>
    </td>
    <td class="cellrowborder" valign="top" width="27.93%"><p id="en-us_topic_0237121997_p78026587313"><a name="en-us_topic_0237121997_p78026587313"></a><a name="en-us_topic_0237121997_p78026587313"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row7802105817316"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0237121997_p198029587313"><a name="en-us_topic_0237121997_p198029587313"></a><a name="en-us_topic_0237121997_p198029587313"></a>end_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.83%"><p id="en-us_topic_0237121997_p1080215589316"><a name="en-us_topic_0237121997_p1080215589316"></a><a name="en-us_topic_0237121997_p1080215589316"></a>Snapshot ID that ends the diagnosis report period. By default, the value of <strong>end_snap_id</strong> is greater than that of <strong>begin_snap_id</strong>.</p>
    </td>
    <td class="cellrowborder" valign="top" width="27.93%"><p id="en-us_topic_0237121997_p5802158436"><a name="en-us_topic_0237121997_p5802158436"></a><a name="en-us_topic_0237121997_p5802158436"></a>-</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row1280225810310"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0237121997_p580217585317"><a name="en-us_topic_0237121997_p580217585317"></a><a name="en-us_topic_0237121997_p580217585317"></a>report_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.83%"><p id="en-us_topic_0237121997_p19803858132"><a name="en-us_topic_0237121997_p19803858132"></a><a name="en-us_topic_0237121997_p19803858132"></a>Specifies the type of the generated report.</p>
    </td>
    <td class="cellrowborder" valign="top" width="27.93%"><a name="en-us_topic_0237121997_ul9103640142011"></a><a name="en-us_topic_0237121997_ul9103640142011"></a><ul id="en-us_topic_0237121997_ul9103640142011"><li><strong id="b97701018193212"><a name="b97701018193212"></a><a name="b97701018193212"></a>summary</strong></li><li><strong id="b4248191533212"><a name="b4248191533212"></a><a name="b4248191533212"></a>detail</strong></li><li><strong>all</strong>: Both <strong>summary </strong>and <strong>detail</strong> types are included.</li></ul>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row148031458936"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0237121997_p28038584317"><a name="en-us_topic_0237121997_p28038584317"></a><a name="en-us_topic_0237121997_p28038584317"></a>report_scope</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.83%"><p id="en-us_topic_0237121997_p108034581732"><a name="en-us_topic_0237121997_p108034581732"></a><a name="en-us_topic_0237121997_p108034581732"></a>Specifies the scope for a report to be generated.</p>
    </td>
    <td class="cellrowborder" valign="top" width="27.93%"><p id="p1121534790"><a name="p1121534790"></a><a name="p1121534790"></a><strong id="b812645593120"><a name="b812645593120"></a><a name="b812645593120"></a>node</strong>: a node in openGauss</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row188031958732"><td class="cellrowborder" valign="top" width="20.24%"><p id="en-us_topic_0237121997_p1280316588318"><a name="en-us_topic_0237121997_p1280316588318"></a><a name="en-us_topic_0237121997_p1280316588318"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="51.83%"><p id="p10320111217913"><a name="p10320111217913"></a><a name="p10320111217913"></a>When <span class="parmname" id="parmname94685915245"><a name="parmname94685915245"></a><a name="parmname94685915245"></a><b>report_scope</b></span> is set to <span class="parmvalue" id="parmvalue0659181392416"><a name="parmvalue0659181392416"></a><a name="parmvalue0659181392416"></a><b>node</b></span>, set this parameter to the name of the corresponding node.</p>
    </td>
    <td class="cellrowborder" valign="top" width="27.93%"><p id="en-us_topic_0237121997_p12803258238"><a name="en-us_topic_0237121997_p12803258238"></a><a name="en-us_topic_0237121997_p12803258238"></a>-</p>
    </td>
    </tr>
    </tbody>
    </table>

-   create\_wdr\_snapshot\(stat text, dbid Oid\)

    Description: Manually generates system diagnosis snapshots.

    Return type: record

    **Table  3**  Parameter description

    <a name="en-us_topic_0237121997_table1668210471952"></a>
    <table><tbody><tr id="en-us_topic_0237121997_row1373111475519"><td class="cellrowborder" valign="top" width="28.970000000000002%"><p id="en-us_topic_0237121997_p147317473510"><a name="en-us_topic_0237121997_p147317473510"></a><a name="en-us_topic_0237121997_p147317473510"></a>Parameter</p>
    </td>
    <td class="cellrowborder" valign="top" width="71.03%"><p id="en-us_topic_0237121997_p14731847951"><a name="en-us_topic_0237121997_p14731847951"></a><a name="en-us_topic_0237121997_p14731847951"></a>Description</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row137319471355"><td class="cellrowborder" valign="top" width="28.970000000000002%"><p id="en-us_topic_0237121997_p137315473511"><a name="en-us_topic_0237121997_p137315473511"></a><a name="en-us_topic_0237121997_p137315473511"></a>stat</p>
    </td>
    <td class="cellrowborder" valign="top" width="71.03%"><p id="en-us_topic_0237121997_p1732947950"><a name="en-us_topic_0237121997_p1732947950"></a><a name="en-us_topic_0237121997_p1732947950"></a>Specifies the name of the node for each snapshot. By default, the status information of all nodes is collected.</p>
    </td>
    </tr>
    <tr id="en-us_topic_0237121997_row1173234712514"><td class="cellrowborder" valign="top" width="28.970000000000002%"><p id="en-us_topic_0237121997_p10732164715519"><a name="en-us_topic_0237121997_p10732164715519"></a><a name="en-us_topic_0237121997_p10732164715519"></a>dbid</p>
    </td>
    <td class="cellrowborder" valign="top" width="71.03%"><p id="en-us_topic_0237121997_p16732154710517"><a name="en-us_topic_0237121997_p16732154710517"></a><a name="en-us_topic_0237121997_p16732154710517"></a>ID of the database whose status information is to be collected.</p>
    </td>
    </tr>
    </tbody>
    </table>

-   wdr\_xdb\_query\(db\_name\_str text, query text\)

    Description: Provides the capability of executing cross-database queries at local. For example, when connecting to the Postgres database, access tables in the  **test**  database.

    ```
    select col1 from wdr_xdb_query('dbname=test','select col1 from t1') as dd(col1 int);
    ```

    Return type: record

-   pg\_wlm\_jump\_queue\(pid int\)

    Description: Moves a task to the top of the primary database node queue.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   gs\_wlm\_switch\_cgroup\(pid int, cgroup text\)

    Description: Moves a job to other Cgroup to improve the job priority.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   pv\_session\_memctx\_detail\(threadid tid, MemoryContextName text\)

    Description: Record information about the memory context  **MemoryContextName**  of the thread  **tid**  into the  _threadid_**\_timestamp.log**  file in the  **/tmp/dumpmem**  directory.  _threadid_  can be obtained from  _sessid_  in the  **PV\_SESSION\_MEMORY\_DETAIL**  table. When  **MemoryContextName**  is set to  **''**, all memory context information is recorded.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure

-   pg\_shared\_memctx\_detail\(MemoryContextName text\)

    Description: Record information about the memory context  **MemoryContextName**  into the  _threadid_**\_timestamp.log**  file in the  **/tmp/dumpmem**  directory.

    Return type: Boolean

    -   **true**: success
    -   **false**: failure


>![](public_sys-resources/icon-note.gif) **NOTE:**   
>**pgxc\_lock\_for\_backup**  locks openGauss before  **gs\_dump**  or  **gs\_dumpall**  is used to back up openGauss. After openGauss is locked, operations changing the system structure are not allowed. This function does not affect DML statements.  

