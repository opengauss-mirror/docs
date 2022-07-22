# Exporting and Viewing the WDR<a name="EN-US_TOPIC_0000001238528930"></a>

Accessing WDR snapshot data requires the **sysadmin** or **monadmin** permission. Therefore, to generate a WDR, you must use the **root** account or other accounts with the aforementioned permissions.

1.  Run the following command to create a report file:

    ```
    touch  /home/om/wdrTestNode.html
    ```

2.  Connect to the Postgres system database.

    ```
    gsql -d postgres -p [*Port number*] -r
    ```

3.  Select two different snapshots in the **snapshot.snapshot** table. If no service restart occurs between the two snapshots, use the two snapshots to generate a report.

    ```
    gsql> select * from snapshot.snapshot order by start_ts desc limit 10;
    ```

4.  Run the following commands to generate a WDR in HTML format on the local PC:
    1.  Run the following commands to set the report format. **\\a** indicates that table row and column symbols are not displayed. **\\t** indicates that column names are not displayed. **\\o** specifies an output file.

        ```
        gsql> \a      
        gsql> \t 
        gsql> \o {*Report path*}
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

        **Table 1** Parameter description

        <a name="table612223716289"></a>
        <table><tbody><tr id="row20172113772815"><td class="cellrowborder" valign="top" width="16.04%"><p id="p1517210378288"><a name="p1517210378288"></a><a name="p1517210378288"></a><strong>Parameter</strong></p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p121721737132819"><a name="p121721737132819"></a><a name="p121721737132819"></a><strong>Description</strong></p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p117203752815"><a name="p117203752815"></a><a name="p117203752815"></a><strong>Value Range</strong></p>
        </td>
        </tr>
        <tr id="row1317233717281"><td class="cellrowborder" valign="top" width="16.04%"><p id="p141721337112810"><a name="p141721337112810"></a><a name="p141721337112810"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p1717263720289"><a name="p1717263720289"></a><a name="p1717263720289"></a>ID of a snapshot that starts at a performance period (<strong>snapshot_id</strong> in the <strong>snapshot.snaoshot</strong> table)</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p141721337182813"><a name="p141721337182813"></a><a name="p141721337182813"></a>-</p>
        </td>
        </tr>
        <tr id="row9172113742815"><td class="cellrowborder" valign="top" width="16.04%"><p id="p51731637132811"><a name="p51731637132811"></a><a name="p51731637132811"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p317313762815"><a name="p317313762815"></a><a name="p317313762815"></a>ID of the end snapshot. By default, the value of <strong>end_snap_id</strong> is greater than the value of <strong>begin_snap_id</strong> (<strong>snapshot_id</strong> in the <strong>snapshot.snaoshot</strong> table).</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p12173113752819"><a name="p12173113752819"></a><a name="p12173113752819"></a>-</p>
        </td>
        </tr>
        <tr id="row1417312379281"><td class="cellrowborder" valign="top" width="16.04%"><p id="p2173153710282"><a name="p2173153710282"></a><a name="p2173153710282"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p71731375280"><a name="p71731375280"></a><a name="p71731375280"></a>Specifies the type of the generated report.</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><a name="ul4132243185013"></a><a name="ul4132243185013"></a><ul id="ul4132243185013"><li><strong>summary</strong></li><li><strong>detail</strong></li><li><strong>all</strong>: Both <strong>summary</strong> and <strong>detail</strong> types are included.</li></ul>
        </td>
        </tr>
        <tr id="row13173937132817"><td class="cellrowborder" valign="top" width="16.04%"><p id="p19173203782815"><a name="p19173203782815"></a><a name="p19173203782815"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p19173153712289"><a name="p19173153712289"></a><a name="p19173153712289"></a>Specifies the scope for the report to be generated.</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><a name="ul18502133435114"></a><a name="ul18502133435114"></a><ul id="ul18502133435114"><li><strong>cluster</strong>: cluster</li><li><strong>node</strong>: a node in the cluster</li></ul>
        </td>
        </tr>
        <tr id="row13173113713282"><td class="cellrowborder" valign="top" width="16.04%"><p id="p17173173712819"><a name="p17173173712819"></a><a name="p17173173712819"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><a name="ul456943795214"></a><a name="ul456943795214"></a><ul id="ul456943795214"><li>When <strong>report_scope</strong> is set to <strong>single node</strong>, set this parameter to the name of the corresponding node. </li><li>When <strong>report_scope</strong> is set to <strong>cluster</strong>, this parameter can be omitted or set to <strong>NULL</strong>.</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p617314374285"><a name="p617314374285"></a><a name="p617314374285"></a>-</p>
        </td>
        </tr>
        </tbody>
        </table>

5.  Run the following command to disable the output options and format the output:

    ```
    \o \a \t 
    ```

6.  View the WDR in **/home/om/** as required.

    **Table 2** Main content of the WDR

    <a name="table11575121514110"></a>
    <table><thead align="left"><tr id="row2575515415"><th class="cellrowborder" valign="top" width="27.27%" id="mcps1.2.3.1.1"><p id="p95769156115"><a name="p95769156115"></a><a name="p95769156115"></a><strong>Item</strong></p>
    </th>
    <th class="cellrowborder" valign="top" width="72.72999999999999%" id="mcps1.2.3.1.2"><p id="p11576141512113"><a name="p11576141512113"></a><a name="p11576141512113"></a><strong>Description</strong></p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row115761915713"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135718501312"><a name="p135718501312"></a><a name="p135718501312"></a>Database Stat (cluster scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p15576615117"><a name="p15576615117"></a><a name="p15576615117"></a>Database performance statistics: transactions, read and write operations, row activities, write conflicts, and deadlocks</p>
    </td>
    </tr>
    <tr id="row55761015114"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135731021"><a name="p135731021"></a><a name="p135731021"></a>Load Profile (cluster scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p357617151311"><a name="p357617151311"></a><a name="p357617151311"></a>Cluster performance statistics: CPU time, DB time, logical or physical read, I/O performance, login and logout, load strength, and load performance</p>
    </td>
    </tr>
    <tr id="row18576141511115"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p13524917629"><a name="p13524917629"></a><a name="p13524917629"></a>Instance Efficiency Percentages (cluster or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p0576615218"><a name="p0576615218"></a><a name="p0576615218"></a>Cluster-level or node-level cache hit ratio</p>
    </td>
    </tr>
    <tr id="row131525233484"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1315310231485"><a name="p1315310231485"></a><a name="p1315310231485"></a>I/O Profile (cluster or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p14153323134813"><a name="p14153323134813"></a><a name="p14153323134813"></a>I/O usage in the cluster or node dimension</p>
    </td>
    </tr>
    <tr id="row115764151812"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p177481629821"><a name="p177481629821"></a><a name="p177481629821"></a>Top 10 Events by Total Wait Time (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457618151110"><a name="p1457618151110"></a><a name="p1457618151110"></a>Most time-consuming event</p>
    </td>
    </tr>
    <tr id="row175761815718"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p898917481218"><a name="p898917481218"></a><a name="p898917481218"></a>Wait Classes by Total Wait Time (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p85763154111"><a name="p85763154111"></a><a name="p85763154111"></a>Category of the wait time that is most time-consuming</p>
    </td>
    </tr>
    <tr id="row55764151710"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p6930825312"><a name="p6930825312"></a><a name="p6930825312"></a>Host CPU (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1557621514116"><a name="p1557621514116"></a><a name="p1557621514116"></a>CPU usage of the host</p>
    </td>
    </tr>
    <tr id="row857661514110"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p7991716336"><a name="p7991716336"></a><a name="p7991716336"></a>Memory Statistics (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p19576101510115"><a name="p19576101510115"></a><a name="p19576101510115"></a>Kernel memory usage distribution</p>
    </td>
    </tr>
    <tr id="row1116032625515"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1316142615558"><a name="p1316142615558"></a><a name="p1316142615558"></a>Time Model (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p51611226135514"><a name="p51611226135514"></a><a name="p51611226135514"></a>Time distribution information about the statements on a node</p>
    </td>
    </tr>
    <tr id="row469714322313"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p469710321319"><a name="p469710321319"></a><a name="p469710321319"></a>Wait Events (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p869818329318"><a name="p869818329318"></a><a name="p869818329318"></a>Statistics on wait events at the node level</p>
    </td>
    </tr>
    <tr id="row32171134967"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p4217934665"><a name="p4217934665"></a><a name="p4217934665"></a>Cache I/O Stats (cluster or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p42171134261"><a name="p42171134261"></a><a name="p42171134261"></a>I/O statistics on user tables and indexes</p>
    </td>
    </tr>
    <tr id="row13684036362"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p136841836962"><a name="p136841836962"></a><a name="p136841836962"></a>Utility Status (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1168423613617"><a name="p1168423613617"></a><a name="p1168423613617"></a>Status information about the replication slot and background checkpoint</p>
    </td>
    </tr>
    <tr id="row185761150118"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p12651331239"><a name="p12651331239"></a><a name="p12651331239"></a>Object Stats (cluster or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457691518114"><a name="p1457691518114"></a><a name="p1457691518114"></a>Performance statistics in the index and table dimensions</p>
    </td>
    </tr>
    <tr id="row145762156112"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p14537204613311"><a name="p14537204613311"></a><a name="p14537204613311"></a>Configuration settings (node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p657615151715"><a name="p657615151715"></a><a name="p657615151715"></a>Node configuration</p>
    </td>
    </tr>
    <tr id="row4576111519111"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p148180593320"><a name="p148180593320"></a><a name="p148180593320"></a>SQL Statistics (cluster or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p75772015713"><a name="p75772015713"></a><a name="p75772015713"></a>SQL statement performance statistics: end-to-end time, row activities, cache hit, CPU consumption, and time consumption</p>
    </td>
    </tr>
    <tr id="row205775151415"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p15283141442"><a name="p15283141442"></a><a name="p15283141442"></a>SQL Detail (cluster or node scope)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p55772158111"><a name="p55772158111"></a><a name="p55772158111"></a>SQL statement text details</p>
    </td>
    </tr>
    </tbody>
    </table>
