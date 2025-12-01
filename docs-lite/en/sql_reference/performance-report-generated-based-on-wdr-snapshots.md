# Performance Report Generated Based on WDR Snapshots<a name="EN-US_TOPIC_0289900439"></a>

Statistics are summarized and collected based on WDR snapshot data tables to generate a performance report. By default, the initial user or monitor administrator can generate reports.

## Prerequisites<a name="en-us_topic_0283137259_section128252205291"></a>

A report can be generated after the WDR snapshot function is enabled (that is, enable\_wdr\_snapshot is set to **on**) and the number of snapshots is greater than or equal to 2.

## Procedure<a name="en-us_topic_0283137259_section49941629132915"></a>

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

4.  (Optional) Run the following command on the CCN to manually create a snapshot. If only one snapshot exists in the database or you want to view the monitoring data of the database in the current period, manually create a snapshot. This command is only available to the **sysadmin** user.

    ```
    select create_wdr_snapshot();
    ```

    >![](public_sys-resources/icon-note.gif) **NOTE:**
    >Run the **cm\_ctl query -Cdvi** command. In the command output, the information under **Central Coordinator State** is the CCN information.

5.  Run the following commands to generate a WDR in HTML format on the local PC:
    1.  Run the following commands to set the report format. **\\a** indicates that table row and column symbols are not displayed. **\\t** indicates that column names are not displayed. **\\o** specifies an output file.

        ```
        gsql> \a      
        gsql> \t 
        gsql> \o /home/om/wdrTestNode.html
        ```

    2.  Run the following command to generate a WDR in HTML format:

        ```
        gsql> select generate_wdr_report(begin_snap_id Oid, end_snap_id Oid, int report_type, int report_scope, int node_name );
        ```

        Example 1: Generate a cluster-level report.

        ```
        select generate_wdr_report(1, 2, 'all', 'cluster',null);
        ```

        Example 2: Generate a report for a node.

        ```
        select generate_wdr_report(1, 2, 'all', 'node', pgxc_node_str()::cstring);
        ```

        >![](public_sys-resources/icon-note.gif) **NOTE:**
        >Currently, the name of the openGauss node is fixed to **dn\_6001\_6002\_6003**. You can also replace it with the actual node name.

        **Table 1** Parameters of the generate\_wdr\_report function

        <a name="table213012428330"></a>
        <table><thead align="left"><tr id="row9130164213330"><th class="cellrowborder" valign="top" width="34.01010101010101%" id="mcps1.2.4.1.1"><p id="p51317421337"><a name="p51317421337"></a><a name="p51317421337"></a>Parameter</p>
        </th>
        <th class="cellrowborder" valign="top" width="32.56565656565657%" id="mcps1.2.4.1.2"><p id="p131311242103315"><a name="p131311242103315"></a><a name="p131311242103315"></a>Description</p>
        </th>
        <th class="cellrowborder" valign="top" width="33.42424242424243%" id="mcps1.2.4.1.3"><p id="p1213194210339"><a name="p1213194210339"></a><a name="p1213194210339"></a>Value Range</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row18131194223311"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p81311142183313"><a name="p81311142183313"></a><a name="p81311142183313"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p181315429333"><a name="p181315429333"></a><a name="p181315429333"></a>ID of a snapshot when a query starts, which is specified by <strong>snapshot_id</strong> in the <strong>snapshot.snapshot</strong> table.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p013194211337"><a name="p013194211337"></a><a name="p013194211337"></a>-</p>
        </td>
        </tr>
        <tr id="row1213114213335"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p61311542123311"><a name="p61311542123311"></a><a name="p61311542123311"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p11131154217335"><a name="p11131154217335"></a><a name="p11131154217335"></a>ID of a snapshot when a query ends. By default, the value of <strong>end_snap_id</strong> is greater than that of <strong>begin_snap_id table</strong> (<strong>snapshot_id</strong> in the <strong>snapshot.snapshot</strong> table).</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p191311542133314"><a name="p191311542133314"></a><a name="p191311542133314"></a>-</p>
        </td>
        </tr>
        <tr id="row1813144243318"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p9131194217331"><a name="p9131194217331"></a><a name="p9131194217331"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p12131042173314"><a name="p12131042173314"></a><a name="p12131042173314"></a>Type of the generated report. The value can be <strong>summary</strong>, <strong>detail</strong>, or <strong>all</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul14131134214334"></a><a name="ul14131134214334"></a><ul id="ul14131134214334"><li><strong>summary</strong>: summary data. </li><li><strong>detail</strong>: detailed data. </li><li><strong>all</strong>: summary data and detailed data.</li></ul>
        </td>
        </tr>
        <tr id="row121311042113315"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p13131184210330"><a name="p13131184210330"></a><a name="p13131184210330"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p513194219333"><a name="p513194219333"></a><a name="p513194219333"></a>Range of the generated report. The value can be <strong>cluster</strong> or <strong>node</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul613110422335"></a><a name="ul613110422335"></a><ul id="ul613110422335"><li><strong>cluster</strong>: database-level information. </li><li><strong>node</strong>: node-level information.</li></ul>
        </td>
        </tr>
        <tr id="row101314427335"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p61318424339"><a name="p61318424339"></a><a name="p61318424339"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p8131124217336"><a name="p8131124217336"></a><a name="p8131124217336"></a>When <strong>report_scope</strong> is set to <strong>node</strong>, set this parameter to the name of the corresponding node. (You can run the <strong>select * from pg_node_env;</strong> command to query the node name.)</p>
        <p id="p15131164213316"><a name="p15131164213316"></a><a name="p15131164213316"></a>If <strong>report_scope</strong> is set to <strong>cluster</strong>, this parameter can be omitted, left blank, or set to <strong>NULL</strong>.</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul3131184216333"></a><a name="ul3131184216333"></a><ul id="ul3131184216333"><li><strong>node</strong>: <span id="text31321742123313"><a name="text31321742123313"></a><a name="text31321742123313"></a>a node name in openGauss.</span> </li><li><strong>cluster</strong>: This value is omitted, left blank or set to <strong>NULL</strong>.</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    1.  Run the following command to disable the output options and format the output:

        ```
        \o \a \t 
        ```

6.  [View the WDR](wdr-snapshot-schema.md) in **/home/om/** as required.

## Example<a name="en-us_topic_0283137259_section65481355161913"></a>

```
--Create a report file.
touch  /home/om/wdrTestNode.html

--Connect to the database.
gsql -d postgres -p [*Port number*] -r

--Query the snapshots that have been generated.
openGauss=# select * from snapshot.snapshot;
 snapshot_id |           start_ts            |            end_ts             
-------------+-------------------------------+-------------------------------
           1 | 2020-09-07 10:20:36.763244+08 | 2020-09-07 10:20:42.166511+08
           2 | 2020-09-07 10:21:13.416352+08 | 2020-09-07 10:21:19.470911+08
(2 rows)


--Generate the formatted performance report **wdrTestNode.html**.
openGauss=# \a \t \o /home/om/wdrTestNode.html
Output format is unaligned.
Showing only tuples.

--Write data into the performance report **wdrTestNode.html**.
openGauss=# select generate_wdr_report(1, 2, 'all', 'node', 'dn_6001_6002_6003');

--Close the performance report **wdrTestNode.html**.
openGauss=# \o

--Generate the formatted performance report **wdrTestCluster.html**.
openGauss=# \o /home/om/wdrTestCluster.html

--Write data into the performance report **wdrTestCluster.html**.
openGauss=# select generate_wdr_report(1, 2, 'all', 'cluster');

--Close the performance report **wdrTestCluster.html**.
openGauss=# \o \a \t
Output format is aligned.
Tuples only is off.
```
