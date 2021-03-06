# Performance Report Generated Based on WDR Snapshot<a name="EN-US_TOPIC_0274366366"></a>

A performance report is generated by summarizing and collecting statistics based on WDR snapshot data tables.

## Prerequisites<a name="section128252205291"></a>

A report can be generated after the WDR snapshot function is enabled \(that is,  [enable\_wdr\_snapshot](system-performance-snapshot.md#en-us_topic_0237124757_section983311682019)  is set to  **on**\) and the number of snapshots is greater than or equal to 2.

## Procedure<a name="section49941629132915"></a>

1.  Run the following command to query the generated snapshot and obtain  **snapshot\_id**:

    ```
    select * from snapshot.snapshot;
    ```

2.  \(Optional\) Run the following command to manually create a snapshot. If only one snapshot exists in the database or to view the monitoring data of the database in the current period, manually create a snapshot.

    ```
    select create_wdr_snapshot();
    ```

3.  Perform the following steps to generate a performance report:
    1.  Run the following command to generate a formatted performance report file:

        ```
        \a \t \o Server file path
        ```

        The parameters in the preceding command are described as follows:

        -   **\\a**: switches the unaligned mode.
        -   **\\t**: switches the information and row count footer of the output column name.
        -   **\\o**: specifies that all the query results are sent to the server file.
        -   _Server file path_: indicates the path for storing the generated performance report file. The user must have the read and write permissions on the path.

    2.  Run the following command to write the queried information to the performance report:

        ```
        select generate_wdr_report(begin_snap_id Oid, end_snap_id Oid, varchar report_type, varchar report_scope, int node_name );
        ```

        The description of the parameters in the preceding command is as follows: 

        **Table  1**  Parameters of the generate\_wdr\_report function

        <a name="table5333144711537"></a>
        <table><thead align="left"><tr id="row040934711539"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p2409447155310"><a name="p2409447155310"></a><a name="p2409447155310"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="33.24242424242424%" id="mcps1.2.4.1.2"><p id="p10409154795317"><a name="p10409154795317"></a><a name="p10409154795317"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="33.42424242424243%" id="mcps1.2.4.1.3"><p id="p940974711533"><a name="p940974711533"></a><a name="p940974711533"></a>Value Range</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row540954735315"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p3409194710533"><a name="p3409194710533"></a><a name="p3409194710533"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p14093472535"><a name="p14093472535"></a><a name="p14093472535"></a>ID of a snapshot when a query starts, which is specified by <strong id="b20011237201"><a name="b20011237201"></a><a name="b20011237201"></a>snapshot_id</strong> in the <strong id="b17248162919209"><a name="b17248162919209"></a><a name="b17248162919209"></a>snapshot.snaoshot</strong> table.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p1740916478538"><a name="p1740916478538"></a><a name="p1740916478538"></a>-</p>
        </td>
        </tr>
        <tr id="row1640964715530"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p11409947115314"><a name="p11409947115314"></a><a name="p11409947115314"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p17410114711536"><a name="p17410114711536"></a><a name="p17410114711536"></a>ID of a snapshot when a query ends. By default, the value of <strong id="b17971772216"><a name="b17971772216"></a><a name="b17971772216"></a>end_snap_id</strong> is greater than that of <strong id="b17538182772217"><a name="b17538182772217"></a><a name="b17538182772217"></a>begin_snap_id table</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p541054716536"><a name="p541054716536"></a><a name="p541054716536"></a>-</p>
        </td>
        </tr>
        <tr id="row74101947205320"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p174101447205314"><a name="p174101447205314"></a><a name="p174101447205314"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p1410847175318"><a name="p1410847175318"></a><a name="p1410847175318"></a>Type of the generated report. The value can be <strong id="b1380403463019"><a name="b1380403463019"></a><a name="b1380403463019"></a>summary</strong>, <strong id="b144019385308"><a name="b144019385308"></a><a name="b144019385308"></a>detail</strong>, or <strong id="b2426344133010"><a name="b2426344133010"></a><a name="b2426344133010"></a>all</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul27626140555"></a><a name="ul27626140555"></a><ul id="ul27626140555"><li><strong id="b134828115318"><a name="b134828115318"></a><a name="b134828115318"></a>summary</strong>: Summary data</li><li><strong id="b129231013183120"><a name="b129231013183120"></a><a name="b129231013183120"></a>detail</strong>: Detailed data</li><li><strong id="b59841116193118"><a name="b59841116193118"></a><a name="b59841116193118"></a>all</strong>: summary data and detailed data</li></ul>
        </td>
        </tr>
        <tr id="row8410174755319"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p8410947105319"><a name="p8410947105319"></a><a name="p8410947105319"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p44101747145316"><a name="p44101747145316"></a><a name="p44101747145316"></a>Range of the generated report. The value can be <strong id="b135771333321"><a name="b135771333321"></a><a name="b135771333321"></a>cluster</strong> or <strong id="b1411313520321"><a name="b1411313520321"></a><a name="b1411313520321"></a>node</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul1630372943913"></a><a name="ul1630372943913"></a><ul id="ul1630372943913"><li><strong id="b126041538193217"><a name="b126041538193217"></a><a name="b126041538193217"></a>cluster</strong>: database-level information</li><li><strong id="b46101246133217"><a name="b46101246133217"></a><a name="b46101246133217"></a>node</strong>: node-level information</li></ul>
        </td>
        </tr>
        <tr id="row1841064716537"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p11410194725316"><a name="p11410194725316"></a><a name="p11410194725316"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p9831125295619"><a name="p9831125295619"></a><a name="p9831125295619"></a>When <span class="parmname" id="parmname17988649133213"><a name="parmname17988649133213"></a><a name="parmname17988649133213"></a><b>report_scope</b></span> is set to <span class="parmvalue" id="parmvalue1298864920328"><a name="parmvalue1298864920328"></a><a name="parmvalue1298864920328"></a><b>node</b></span>, set this parameter to the name of the corresponding node. (You can run the <strong id="b1597191153317"><a name="b1597191153317"></a><a name="b1597191153317"></a>select * from pg_node_env;</strong> command to query the node name.)</p>
        <p id="p941074755313"><a name="p941074755313"></a><a name="p941074755313"></a>If <strong id="b161053263330"><a name="b161053263330"></a><a name="b161053263330"></a>report_scope</strong> is set to <strong id="b11721152833318"><a name="b11721152833318"></a><a name="b11721152833318"></a>cluster</strong>, this parameter can be omitted, left blank, empty or set to <strong id="b9937839183313"><a name="b9937839183313"></a><a name="b9937839183313"></a>NULL</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul481800164318"></a><a name="ul481800164318"></a><ul id="ul481800164318"><li><strong id="b125176436331"><a name="b125176436331"></a><a name="b125176436331"></a>node</strong>: a node name in openGauss</li><li><strong id="b937002419350"><a name="b937002419350"></a><a name="b937002419350"></a>cluster</strong>: This value is omitted, left blank,empty or set to <strong id="b18649102613510"><a name="b18649102613510"></a><a name="b18649102613510"></a>NULL</strong>.</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    3.  Run the following commands to disable the output options and format the output:

        ```
        \o \a \t 
        ```



## Examples<a name="section65481355161913"></a>

```
-- To query enable_wdr_snapshot, set this parameter to on.
postgres=# show enable_wdr_snapshot;
 enable_wdr_snapshot 
---------------------
 on
(1 row)

-- Query the snapshots that have been generated.
postgres=# select * from snapshot.snapshot;
 snapshot_id |           start_ts            |            end_ts             
-------------+-------------------------------+-------------------------------
           1 | 2020-09-07 10:20:36.763244+08 | 2020-09-07 10:20:42.166511+08
           2 | 2020-09-07 10:21:13.416352+08 | 2020-09-07 10:21:19.470911+08
(2 rows)

-- Generate the formatted performance report wdrTestNode.html.
postgres=# \a \t \o /home/om/wdrTestNode.html
Output format is unaligned.
Showing only tuples.

-- Write data into the performance report wdrTestNode.html.
postgres=# select generate_wdr_report(1, 2, 'all', 'node', 'dn');

-- Close the performance report wdrTestNode.html.
postgres=# \o

-- Generate the formatted performance report wdrTestCluster.html.
postgres=# \o /home/om/wdrTestCluster.html

-- Write data into the performance report wdrTestCluster.html.
postgres=# select generate_wdr_report(1, 2, 'all', 'cluster', '');

-- Close the performance report wdrTestCluster.html.
postgres=# \o \a \t
Output format is aligned.
Tuples only is off.
```

