# 导出并查看WDR诊断报告<a name="ZH-CN_TOPIC_0000001238528930"></a>

访问WDR快照数据需要sysadmin或monadmin权限，因此需要使用root账号或其他拥有权限的账号来生成WDR诊断报告。

1.  执行如下命令新建报告文件。

    ```
    touch  /home/om/wdrTestNode.html
    ```

2.  连接系统库postgres。

    ```
    gsql -d postgres -p 端口号 -r
    ```

3.  选择snapshot.snapshot表中两个不同的snapshot，当这两个snapshot之间未发生服务重启，便可以使用这两个snapshot生成报告。

    ```
    gsql> select * from snapshot.snapshot order by start_ts desc limit 10;
    ```

4.  执行如下命令，在本地生成HTML格式的WDR报告。
    1.  执行如下命令，设置报告格式。\\a: 不显示表行列符号， \\t:  不显示列名 ，\\o: 指定输出文件。

        ```
        gsql> \a      
        gsql> \t 
        gsql> \o {报告路径}
        ```

    2.  执行如下命令，生成HTML格式的WDR报告。

        ```
        gsql> select generate_wdr_report(begin_snap_id Oid, end_snap_id Oid, int report_type, int report_scope, int node_name );
        ```

        示例一，生成集群级别的报告：

        ```
        select generate_wdr_report(1, 2, 'all', 'cluster',null);
        ```

        示例二，生成某个节点的报告：

        ```
        select generate_wdr_report(1, 2, 'all', 'node', pgxc_node_str()::cstring);
        ```

        >![](public_sys-resources/icon-note.gif) **说明：** 
        >当前openGauss的节点名固定是“dn\_6001\_6002\_6003”，也可直接代入。

        **表 1**  参数说明

        <a name="table612223716289"></a>
        <table><tbody><tr id="row20172113772815"><td class="cellrowborder" valign="top" width="16.04%"><p id="p1517210378288"><a name="p1517210378288"></a><a name="p1517210378288"></a>参数</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p121721737132819"><a name="p121721737132819"></a><a name="p121721737132819"></a>说明</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p117203752815"><a name="p117203752815"></a><a name="p117203752815"></a>取值范围</p>
        </td>
        </tr>
        <tr id="row1317233717281"><td class="cellrowborder" valign="top" width="16.04%"><p id="p141721337112810"><a name="p141721337112810"></a><a name="p141721337112810"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p1717263720289"><a name="p1717263720289"></a><a name="p1717263720289"></a>要查看的某段时间性能的开始的snapshot的id（表snapshot.snaoshot中的snapshot_id）</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p141721337182813"><a name="p141721337182813"></a><a name="p141721337182813"></a>-</p>
        </td>
        </tr>
        <tr id="row9172113742815"><td class="cellrowborder" valign="top" width="16.04%"><p id="p51731637132811"><a name="p51731637132811"></a><a name="p51731637132811"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p317313762815"><a name="p317313762815"></a><a name="p317313762815"></a>结束snapshot的id，默认end_snap_id大于begin_snap_id（表snapshot.snaoshot中的snapshot_id）</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p12173113752819"><a name="p12173113752819"></a><a name="p12173113752819"></a>-</p>
        </td>
        </tr>
        <tr id="row1417312379281"><td class="cellrowborder" valign="top" width="16.04%"><p id="p2173153710282"><a name="p2173153710282"></a><a name="p2173153710282"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p71731375280"><a name="p71731375280"></a><a name="p71731375280"></a>指定生成report的类型。</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><a name="ul4132243185013"></a><a name="ul4132243185013"></a><ul id="ul4132243185013"><li>summary</li><li>detail</li><li>all，即同时包含summary和detail。</li></ul>
        </td>
        </tr>
        <tr id="row13173937132817"><td class="cellrowborder" valign="top" width="16.04%"><p id="p19173203782815"><a name="p19173203782815"></a><a name="p19173203782815"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><p id="p19173153712289"><a name="p19173153712289"></a><a name="p19173153712289"></a>指定生成report的范围。</p>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><a name="ul18502133435114"></a><a name="ul18502133435114"></a><ul id="ul18502133435114"><li>cluster：集群</li><li>node：集群中某个节点。</li></ul>
        </td>
        </tr>
        <tr id="row13173113713282"><td class="cellrowborder" valign="top" width="16.04%"><p id="p17173173712819"><a name="p17173173712819"></a><a name="p17173173712819"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="54.690000000000005%"><a name="ul456943795214"></a><a name="ul456943795214"></a><ul id="ul456943795214"><li>在report_scope指定为single node时，需要把该参数指定为对应节点的名称。</li><li>在report_scope为cluster时，该值可以指定为省略或者为NULL。</li></ul>
        </td>
        <td class="cellrowborder" valign="top" width="29.270000000000003%"><p id="p617314374285"><a name="p617314374285"></a><a name="p617314374285"></a>-</p>
        </td>
        </tr>
        </tbody>
        </table>

5.  执行如下命令关闭输出选项及格式化输出命令。

    ```
    \o \a \t 
    ```

6.  在/home/om/下根据需要查看WDR报告内容。

    **表 2**  WDR报表主要内容

    <a name="table11575121514110"></a>
    <table><thead align="left"><tr id="row2575515415"><th class="cellrowborder" valign="top" width="27.27%" id="mcps1.2.3.1.1"><p id="p95769156115"><a name="p95769156115"></a><a name="p95769156115"></a>项目</p>
    </th>
    <th class="cellrowborder" valign="top" width="72.72999999999999%" id="mcps1.2.3.1.2"><p id="p11576141512113"><a name="p11576141512113"></a><a name="p11576141512113"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row115761915713"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135718501312"><a name="p135718501312"></a><a name="p135718501312"></a>Database Stat（集群范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p15576615117"><a name="p15576615117"></a><a name="p15576615117"></a>数据库维度性能统计信息：事务，读写，行活动，写冲突，死锁等。</p>
    </td>
    </tr>
    <tr id="row55761015114"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p135731021"><a name="p135731021"></a><a name="p135731021"></a>Load Profile（集群范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p357617151311"><a name="p357617151311"></a><a name="p357617151311"></a>集群维度的性能统计信息：CPU时间，DB时间，逻辑读/物理读，IO性能，登入登出，负载强度，负载性能表现等。</p>
    </td>
    </tr>
    <tr id="row18576141511115"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p13524917629"><a name="p13524917629"></a><a name="p13524917629"></a>Instance Efficiency Percentages（集群/节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p0576615218"><a name="p0576615218"></a><a name="p0576615218"></a>集群级或者节点缓冲命中率。</p>
    </td>
    </tr>
    <tr id="row131525233484"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1315310231485"><a name="p1315310231485"></a><a name="p1315310231485"></a>IO Profile（集群/节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p14153323134813"><a name="p14153323134813"></a><a name="p14153323134813"></a>集群或者节点维度的IO的使用情况。</p>
    </td>
    </tr>
    <tr id="row115764151812"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p177481629821"><a name="p177481629821"></a><a name="p177481629821"></a>Top 10 Events by Total Wait Time（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457618151110"><a name="p1457618151110"></a><a name="p1457618151110"></a>最消耗时间的事件。</p>
    </td>
    </tr>
    <tr id="row175761815718"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p898917481218"><a name="p898917481218"></a><a name="p898917481218"></a>Wait Classes by Total Wait Time（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p85763154111"><a name="p85763154111"></a><a name="p85763154111"></a>最消耗时间的等待时间分类。</p>
    </td>
    </tr>
    <tr id="row55764151710"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p6930825312"><a name="p6930825312"></a><a name="p6930825312"></a>Host CPU（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1557621514116"><a name="p1557621514116"></a><a name="p1557621514116"></a>主机CPU消耗。</p>
    </td>
    </tr>
    <tr id="row857661514110"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p7991716336"><a name="p7991716336"></a><a name="p7991716336"></a>Memory Statistics（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p19576101510115"><a name="p19576101510115"></a><a name="p19576101510115"></a>内核内存使用分布。</p>
    </td>
    </tr>
    <tr id="row1116032625515"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p1316142615558"><a name="p1316142615558"></a><a name="p1316142615558"></a>Time Model（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p51611226135514"><a name="p51611226135514"></a><a name="p51611226135514"></a>节点范围的语句的时间分布信息。</p>
    </td>
    </tr>
    <tr id="row469714322313"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p469710321319"><a name="p469710321319"></a><a name="p469710321319"></a>Wait Events（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p869818329318"><a name="p869818329318"></a><a name="p869818329318"></a>节点级别的等待事件的统计信息。</p>
    </td>
    </tr>
    <tr id="row32171134967"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p4217934665"><a name="p4217934665"></a><a name="p4217934665"></a>Cache IO Stats (集群/节点范围)</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p42171134261"><a name="p42171134261"></a><a name="p42171134261"></a>用户的表、索引的IO的统计信息。</p>
    </td>
    </tr>
    <tr id="row13684036362"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p136841836962"><a name="p136841836962"></a><a name="p136841836962"></a>Utility status （节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1168423613617"><a name="p1168423613617"></a><a name="p1168423613617"></a>复制槽和后台checkpoint的状态信息。</p>
    </td>
    </tr>
    <tr id="row185761150118"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p12651331239"><a name="p12651331239"></a><a name="p12651331239"></a>Object stats（集群/节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p1457691518114"><a name="p1457691518114"></a><a name="p1457691518114"></a>表、索引维度的性能统计信息。</p>
    </td>
    </tr>
    <tr id="row145762156112"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p14537204613311"><a name="p14537204613311"></a><a name="p14537204613311"></a>Configuration settings（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p657615151715"><a name="p657615151715"></a><a name="p657615151715"></a>节点配置。</p>
    </td>
    </tr>
    <tr id="row4576111519111"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p148180593320"><a name="p148180593320"></a><a name="p148180593320"></a>SQL Statistics（集群/节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p75772015713"><a name="p75772015713"></a><a name="p75772015713"></a>SQL语句各个维度性能统计：端到端时间，行活动，缓存命中，CPU消耗，时间消耗细分。</p>
    </td>
    </tr>
    <tr id="row205775151415"><td class="cellrowborder" valign="top" width="27.27%" headers="mcps1.2.3.1.1 "><p id="p15283141442"><a name="p15283141442"></a><a name="p15283141442"></a>SQL Detail（集群/节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="72.72999999999999%" headers="mcps1.2.3.1.2 "><p id="p55772158111"><a name="p55772158111"></a><a name="p55772158111"></a>SQL语句文本详情。</p>
    </td>
    </tr>
    </tbody>
    </table>


