# Exporting and Viewing the WDR<a name="EN-US_TOPIC_0000001238528930"></a>

Accessing WDR snapshot data requires the **sysadmin** or **monadmin** permission. Therefore, to generate a WDR, you must use the **root** account or other accounts with the aforementioned permissions.

## Prerequisites<a name="section1129182418184"></a>

A report can be generated after the WDR snapshot function is enabled (that is, [enable\_wdr\_snapshot](en-us_topic_0289901018.md#en-us_topic_0283137284_en-us_topic_0237124757_section983311682019) is set to **on**) and the number of snapshots is greater than or equal to 2.

## Procedure<a name="section5655043171812"></a>

1.  Run the following command to create a report file:

    ```
    touch  /home/om/wdrTestNode.html
    ```

2.  Run the following command to connect to the **postgres** database.

    ```
    gsql -d postgres -p [*Port number*] -r
    ```

3.  Run the following command to query the generated snapshot and obtain **snapshot\_id**:

    ```
    select * from snapshot.snapshot;
    ```

4.  (Optional) Run the following command to manually create a snapshot. If only one snapshot exists in the database or you want to view the monitoring data of the database in the current period, manually create a snapshot. This command is only available to users with the sysadmin permission.
    ```
    select create_wdr_snapshot();
    ```
5. Generate a performance report.
    1.  Run the following command to generate a formatted performance report file:

        ```
        \a \t \o /home/om/wdrTestNode.html
        ```
        The parameters in the preceding commands are described as follows:
        -   **\\a**: switches the unaligned mode.
        -   **\\t**: switches the information and row count footer of the output column name.
        -   **\\o**: specifies that all the query results are sent to the server file.
        -   *Server file path*: specifies the path for storing the generated performance report file.

    2.  Write the queried information to a performance report:

        ```
        select generate_wdr_report(begin_snap_id bigint, end_snap_id bigint, report_type cstring, report_scope cstring, node_name cstring);
        ```

        Example 1: Generate a cluster-level report.

        ```
        select generate_wdr_report(1, 2, 'all', 'cluster');
        ```

        Example 2: Generate a report for a node.

        ```
        select generate_wdr_report(1, 2, 'all', 'node', pgxc_node_str()::cstring);
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >Currently, the name of the openGauss node is fixed to **dn\_6001\_6002\_6003**. You can also replace it with the actual node name.

        The description of the parameters in the preceding command is as follows: 

        **Table  1**  Parameters of the generate\_wdr\_report function

        <a name="en-us_topic_0283137259_table5333144711537"></a>
        <table><thead align="left"><tr id="en-us_topic_0283137259_row040934711539"><th class="cellrowborder" valign="top" width="34.01010101010101%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137259_p2409447155310"><a name="en-us_topic_0283137259_p2409447155310"></a><a name="en-us_topic_0283137259_p2409447155310"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="32.56565656565657%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137259_p10409154795317"><a name="en-us_topic_0283137259_p10409154795317"></a><a name="en-us_topic_0283137259_p10409154795317"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="33.42424242424243%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137259_p940974711533"><a name="en-us_topic_0283137259_p940974711533"></a><a name="en-us_topic_0283137259_p940974711533"></a>Value Range</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="en-us_topic_0283137259_row540954735315"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137259_p3409194710533"><a name="en-us_topic_0283137259_p3409194710533"></a><a name="en-us_topic_0283137259_p3409194710533"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137259_p14093472535"><a name="en-us_topic_0283137259_p14093472535"></a><a name="en-us_topic_0283137259_p14093472535"></a>ID of a snapshot when a query starts, which is specified by <strong>snapshot_id</strong> in the <strong>snapshot.snapshot</strong> table.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137259_p1740916478538"><a name="en-us_topic_0283137259_p1740916478538"></a><a name="en-us_topic_0283137259_p1740916478538"></a>-</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137259_row1640964715530"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137259_p11409947115314"><a name="en-us_topic_0283137259_p11409947115314"></a><a name="en-us_topic_0283137259_p11409947115314"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137259_p17410114711536"><a name="en-us_topic_0283137259_p17410114711536"></a><a name="en-us_topic_0283137259_p17410114711536"></a>ID of a snapshot when a query ends. By default, the value of **end_snap_id** is greater than that of **begin_snap_id table** (**snapshot_id** in the **snapshot.snaoshot** table).</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137259_p541054716536"><a name="en-us_topic_0283137259_p541054716536"></a><a name="en-us_topic_0283137259_p541054716536"></a>-</p>
        </td>
        </tr>
        <tr id="en-us_topic_0283137259_row74101947205320"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137259_p174101447205314"><a name="en-us_topic_0283137259_p174101447205314"></a><a name="en-us_topic_0283137259_p174101447205314"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137259_p1410847175318"><a name="en-us_topic_0283137259_p1410847175318"></a><a name="en-us_topic_0283137259_p1410847175318"></a>Type of the generated report. The value can be <strong>summary</strong>, <strong>detail</strong>, or <strong>all</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137259_ul27626140555"></a><a name="en-us_topic_0283137259_ul27626140555"></a><ul id="en-us_topic_0283137259_ul27626140555"><li><strong>summary</strong>: summary data. </li><li><strong>detail</strong>detailed data. </li><li><strong>all</strong>summary data and detailed data.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0283137259_row8410174755319"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137259_p8410947105319"><a name="en-us_topic_0283137259_p8410947105319"></a><a name="en-us_topic_0283137259_p8410947105319"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137259_p44101747145316"><a name="en-us_topic_0283137259_p44101747145316"></a><a name="en-us_topic_0283137259_p44101747145316"></a>Range of the generated report. The value can be <strong>cluster</strong> or <strong>node</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137259_ul1630372943913"></a><a name="en-us_topic_0283137259_ul1630372943913"></a><ul id="en-us_topic_0283137259_ul1630372943913"><li><strong>cluster</strong>: database-level information. </li><li><strong>node</strong>node-level information.</li></ul>
        </td>
        </tr>
        <tr id="en-us_topic_0283137259_row1841064716537"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137259_p11410194725316"><a name="en-us_topic_0283137259_p11410194725316"></a><a name="en-us_topic_0283137259_p11410194725316"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137259_p9831125295619"><a name="en-us_topic_0283137259_p9831125295619"></a><a name="en-us_topic_0283137259_p9831125295619"></a>When <strong>report_scope</strong> is set to <strong>node</strong>, set this parameter to the name of the corresponding node. (You can run the **select * from pg_node_env;** command to query the node name.)</p>
        <p id="en-us_topic_0283137259_p941074755313"><a name="en-us_topic_0283137259_p941074755313"></a><a name="en-us_topic_0283137259_p941074755313"></a>If <strong>report_scope</strong> is set to <strong>cluster</strong>, this parameter can be omitted, left blank, or set to <strong>NULL</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0283137259_ul481800164318"></a><a name="en-us_topic_0283137259_ul481800164318"></a><ul id="en-us_topic_0283137259_ul481800164318"><li><strong>node</strong>: a node name in openGauss. </li><li><strong>cluster</strong>This value is omitted, left blank or set to <strong>NULL</strong>.</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    3.  Disable the output options and format the output.

        ```
        \o \a \t 
        ```

6. View the WDR in **/home/om/** as required.

    **Table 2** Content of the WDR

    <a name="table11575121514110"></a>
    <table><thead align="left"><tr id="row2575515415"><th class="cellrowborder" valign="top" width="27.27%" id="mcps1.2.3.1.1"><p id="p95769156115"><a name="p95769156115"></a><a name="p95769156115"></a>Metric</p>
    </th>
    <th class="cellrowborder" valign="top" width="72.72999999999999%" id="mcps1.2.3.1.2"><p id="p11576141512113"><a name="p11576141512113"></a><a name="p11576141512113"></a>Description</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row115761915713"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135718501312"><a name="p135718501312"></a><a name="p135718501312"></a>Database Stat (database instance scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p15576615117"><a name="p15576615117"></a><a name="p15576615117"></a>Database performance statistics: transactions, read and write operations, row activities, write conflicts, and deadlocks</p>
    </td>
    </tr>
    <tr id="row55761015114"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135731021"><a name="p135731021"></a><a name="p135731021"></a>Load Profile (database instance scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p357617151311"><a name="p357617151311"></a><a name="p357617151311"></a>Database instance performance statistics: CPU time, DB time, logical or physical read, I/O performance, login and logout, load strength, and load performance</p>
    </td>
    </tr>
    <tr id="row18576141511115"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p13524917629"><a name="p13524917629"></a><a name="p13524917629"></a>Instance Efficiency Percentages (database instance or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p0576615218"><a name="p0576615218"></a><a name="p0576615218"></a>Database instance-level or node-level cache hit ratio</p>
    </td>
    </tr>
    <tr id="row131525233484"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1315310231485"><a name="p1315310231485"></a><a name="p1315310231485"></a>I/O Profile (database instance or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p14153323134813"><a name="p14153323134813"></a><a name="p14153323134813"></a>I/O usage in the database instance or node dimension</p>
    </td>
    </tr>
    <tr id="row115764151812"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p177481629821"><a name="p177481629821"></a><a name="p177481629821"></a>Top 10 Events by Total Wait Time</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457618151110"><a name="p1457618151110"></a><a name="p1457618151110"></a>Most time-consuming event</p>
    </td>
    </tr>
    <tr id="row175761815718"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p898917481218"><a name="p898917481218"></a><a name="p898917481218"></a>Wait Classes by Total Wait Time</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p85763154111"><a name="p85763154111"></a><a name="p85763154111"></a>Category of the wait time that is most time-consuming</p>
    </td>
    </tr>
    <tr id="row55764151710"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p6930825312"><a name="p6930825312"></a><a name="p6930825312"></a>Host CPU</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1557621514116"><a name="p1557621514116"></a><a name="p1557621514116"></a>CPU usage of the host</p>
    </td>
    </tr>
    <tr id="row857661514110"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p7991716336"><a name="p7991716336"></a><a name="p7991716336"></a>Memory Statistics</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p19576101510115"><a name="p19576101510115"></a><a name="p19576101510115"></a>Kernel memory usage distribution</p>
    </td>
    </tr>
    <tr id="row1116032625515"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1316142615558"><a name="p1316142615558"></a><a name="p1316142615558"></a>Time Model</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p51611226135514"><a name="p51611226135514"></a><a name="p51611226135514"></a>Time distribution information about the statements on a node</p>
    </td>
    </tr>
    <tr id="row469714322313"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p469710321319"><a name="p469710321319"></a><a name="p469710321319"></a>Wait Events</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p869818329318"><a name="p869818329318"></a><a name="p869818329318"></a>Statistics about node-level wait events. For details, see the waiting status list, list of wait events corresponding to lightweight locks, list of wait events corresponding to I/Os, and list of wait events corresponding to transaction locks in section "System Catalogs and System Views > System Views > PG_THREAD_WAIT_STATUS" in the Developer Guide.</p>
    </td>
    </tr>
    <tr id="row32171134967"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p4217934665"><a name="p4217934665"></a><a name="p4217934665"></a>Cache I/O Stats (database instance or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p42171134261"><a name="p42171134261"></a><a name="p42171134261"></a>I/O statistics on user tables and indexes</p>
    </td>
    </tr>
    <tr id="row13684036362"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p136841836962"><a name="p136841836962"></a><a name="p136841836962"></a>Utility Status</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1168423613617"><a name="p1168423613617"></a><a name="p1168423613617"></a>Status information about the replication slot and background checkpoint</p>
    </td>
    </tr>
    <tr id="row185761150118"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p12651331239"><a name="p12651331239"></a><a name="p12651331239"></a>Object Stats (database instance or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457691518114"><a name="p1457691518114"></a><a name="p1457691518114"></a>Performance statistics in the index and table dimensions</p>
    </td>
    </tr>
    <tr id="row145762156112"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p14537204613311"><a name="p14537204613311"></a><a name="p14537204613311"></a>Configuration Settings</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p657615151715"><a name="p657615151715"></a><a name="p657615151715"></a>Node configuration</p>
    </td>
    </tr>
    <tr id="row4576111519111"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p148180593320"><a name="p148180593320"></a><a name="p148180593320"></a>SQL Statistics (database instance or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p75772015713"><a name="p75772015713"></a><a name="p75772015713"></a>SQL statement performance statistics are displayed in the following dimensions: total time, average time, CPU duration, number of returned rows, number of scanned rows, number of execution times, logical read, and physical read.</p>
    </td>
    </tr>
    <tr id="row205775151415"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p15283141442"><a name="p15283141442"></a><a name="p15283141442"></a>SQL Detail (database instance or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p55772158111"><a name="p55772158111"></a><a name="p55772158111"></a>SQL statement text details</p>
    </td>
    </tr>
    </tbody>
    </table>


## Examples<a name="section1867235819271"></a>

```
--Create a report file.
touch /home/om/wdrTestNode.html

--Connect to the database.
gsql -d postgres -p [Port number] -r

--Query the snapshots that have been generated.
openGauss=# select * from snapshot.snapshot;
 snapshot_id |           start_ts            |            end_ts             
-------------+-------------------------------+-------------------------------
           1 | 2020-09-07 10:20:36.763244+08 | 2020-09-07 10:20:42.166511+08
           2 | 2020-09-07 10:21:13.416352+08 | 2020-09-07 10:21:19.470911+08
(2 rows)


--Generate the formatted performance report wdrTestNode.html.
openGauss=# \a \t \o /home/om/wdrTestNode.html
Output format is unaligned.
Showing only tuples.

--Write data into the performance report wdrTestNode.html.
openGauss=# select generate_wdr_report(1, 2, 'all', 'node', 'dn_6001_6002_6003');

--Close the performance report wdrTestNode.html.
openGauss=# \o

--Generate the formatted performance report wdrTestCluster.html.
openGauss=# \o /home/om/wdrTestCluster.html

--Write data into the performance report wdrTestCluster.html.
openGauss=# select generate_wdr_report(1, 2, 'all', 'cluster');

--Close the performance report wdrTestCluster.html.
openGauss=# \o \a \t
Output format is aligned.
Tuples only is off.
```
