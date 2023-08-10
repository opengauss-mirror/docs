# WDR Snapshot生成性能报告<a name="ZH-CN_TOPIC_0289900439"></a>

基于WDR Snapshot数据表汇总、统计，生成性能报告。

## 前提条件<a name="zh-cn_topic_0283137259_section128252205291"></a>

WDR Snasphot在启动后（即参数[enable\_wdr\_snapshot](系统性能快照.md#zh-cn_topic_0237124757_section983311682019)为on时），且快照数量大于等于2。

## 操作步骤<a name="zh-cn_topic_0283137259_section49941629132915"></a>

1.  执行如下命令查询已经生成的快照，以获取快照的snapshot\_id。

    ```
    select * from snapshot.snapshot;
    ```

2.  （可选）执行如下命令手动创建快照。数据库中只有一个快照或者需要查看在当前时间段数据库的监控数据，可以选择手动执行快照操作，该命令需要用户具有sysadmin权限。可在单机节点或集群主节点上执行。

    ```
    select create_wdr_snapshot();
    ```

3.  执行如下步骤生成性能报告。
    1.  执行如下命令生成格式化性能报告文件。

        ```
        \a \t \o 服务器文件路径
        ```

        上述命令涉及参数说明如下：

        -   \\a：切换非对齐模式。
        -   \\t：切换输出的字段名的信息和行计数脚注。
        -   \\o：把所有的查询结果发送至服务器文件里。
        -   服务器文件路径：生成性能报告文件存放路径。用户需要拥有此路径的读写权限。

    2.  执行如下命令将查询到的信息写入性能报告中。

        ```
        select generate_wdr_report(begin_snap_id bigint, end_snap_id bigint, report_type cstring, report_scope cstring, node_name cstring);
        ```

        命令中涉及的参数说明如下。

        **表 1**  generate\_wdr\_report函数参数说明

        <a name="zh-cn_topic_0283137259_table5333144711537"></a>
        <table><thead align="left"><tr id="zh-cn_topic_0283137259_row040934711539"><th class="cellrowborder" valign="top" width="34.01010101010101%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137259_p2409447155310"><a name="zh-cn_topic_0283137259_p2409447155310"></a><a name="zh-cn_topic_0283137259_p2409447155310"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="32.56565656565657%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137259_p10409154795317"><a name="zh-cn_topic_0283137259_p10409154795317"></a><a name="zh-cn_topic_0283137259_p10409154795317"></a>说明</p>
        </th>
        <th class="cellrowborder" valign="top" width="33.42424242424243%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137259_p940974711533"><a name="zh-cn_topic_0283137259_p940974711533"></a><a name="zh-cn_topic_0283137259_p940974711533"></a>取值范围</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="zh-cn_topic_0283137259_row540954735315"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137259_p3409194710533"><a name="zh-cn_topic_0283137259_p3409194710533"></a><a name="zh-cn_topic_0283137259_p3409194710533"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137259_p14093472535"><a name="zh-cn_topic_0283137259_p14093472535"></a><a name="zh-cn_topic_0283137259_p14093472535"></a>查询时间段开始的snapshot的id（表snapshot.snaoshot中的snapshot_id）。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137259_p1740916478538"><a name="zh-cn_topic_0283137259_p1740916478538"></a><a name="zh-cn_topic_0283137259_p1740916478538"></a>-</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283137259_row1640964715530"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137259_p11409947115314"><a name="zh-cn_topic_0283137259_p11409947115314"></a><a name="zh-cn_topic_0283137259_p11409947115314"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137259_p17410114711536"><a name="zh-cn_topic_0283137259_p17410114711536"></a><a name="zh-cn_topic_0283137259_p17410114711536"></a>查询时间段结束snapshot的id。默认end_snap_id大于begin_snap_id（表snapshot.snaoshot中的snapshot_id）。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137259_p541054716536"><a name="zh-cn_topic_0283137259_p541054716536"></a><a name="zh-cn_topic_0283137259_p541054716536"></a>-</p>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283137259_row74101947205320"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137259_p174101447205314"><a name="zh-cn_topic_0283137259_p174101447205314"></a><a name="zh-cn_topic_0283137259_p174101447205314"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137259_p1410847175318"><a name="zh-cn_topic_0283137259_p1410847175318"></a><a name="zh-cn_topic_0283137259_p1410847175318"></a>指定生成report的类型。例如，summary/detail/all。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137259_ul27626140555"></a><a name="zh-cn_topic_0283137259_ul27626140555"></a><ul id="zh-cn_topic_0283137259_ul27626140555"><li>summary：汇总数据。</li><li>detail：明细数据。</li><li>all：包含summary和detail。</li></ul>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283137259_row8410174755319"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137259_p8410947105319"><a name="zh-cn_topic_0283137259_p8410947105319"></a><a name="zh-cn_topic_0283137259_p8410947105319"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137259_p44101747145316"><a name="zh-cn_topic_0283137259_p44101747145316"></a><a name="zh-cn_topic_0283137259_p44101747145316"></a>指定生成report的范围，可以为cluster或者node。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137259_ul1630372943913"></a><a name="zh-cn_topic_0283137259_ul1630372943913"></a><ul id="zh-cn_topic_0283137259_ul1630372943913"><li>cluster：数据库级别的信息。</li><li>node：节点级别的信息。</li></ul>
        </td>
        </tr>
        <tr id="zh-cn_topic_0283137259_row1841064716537"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137259_p11410194725316"><a name="zh-cn_topic_0283137259_p11410194725316"></a><a name="zh-cn_topic_0283137259_p11410194725316"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137259_p9831125295619"><a name="zh-cn_topic_0283137259_p9831125295619"></a><a name="zh-cn_topic_0283137259_p9831125295619"></a>在report_scope指定为node时，需要把该参数指定为对应节点的名称。(节点名称可以执行select * from pg_node_env;查询)。</p>
        <p id="zh-cn_topic_0283137259_p941074755313"><a name="zh-cn_topic_0283137259_p941074755313"></a><a name="zh-cn_topic_0283137259_p941074755313"></a>在report_scope为cluster时，该值可以省略或者指定为空或NULL。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137259_ul481800164318"></a><a name="zh-cn_topic_0283137259_ul481800164318"></a><ul id="zh-cn_topic_0283137259_ul481800164318"><li>node：<span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span>中的节点名称。</li><li>cluster：省略/空/NULL。</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    3.  执行如下命令关闭输出选项及格式化输出命令。

        ```
        \o \a \t 
        ```


4.  根据需要查看WDR报告内容。

    **表 2**  WDR报表主要内容

    <a name="table11575121514110"></a>
    <table><thead align="left"><tr id="row2575515415"><th class="cellrowborder" valign="top" width="26.6%" id="mcps1.2.3.1.1"><p id="p95769156115"><a name="p95769156115"></a><a name="p95769156115"></a>项目</p>
    </th>
    <th class="cellrowborder" valign="top" width="73.4%" id="mcps1.2.3.1.2"><p id="p11576141512113"><a name="p11576141512113"></a><a name="p11576141512113"></a>描述</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row115761915713"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p135718501312"><a name="p135718501312"></a><a name="p135718501312"></a>Database Stat（数据库范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p15576615117"><a name="p15576615117"></a><a name="p15576615117"></a>数据库维度性能统计信息：事务，读写，行活动，写冲突，死锁等。</p>
    </td>
    </tr>
    <tr id="row55761015114"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p135731021"><a name="p135731021"></a><a name="p135731021"></a>Load Profile（数据库范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p357617151311"><a name="p357617151311"></a><a name="p357617151311"></a>数据库维度的性能统计信息：CPU时间，DB时间，逻辑读/物理读，IO性能，登入登出，负载强度，负载性能表现等。</p>
    </td>
    </tr>
    <tr id="row18576141511115"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p13524917629"><a name="p13524917629"></a><a name="p13524917629"></a>Instance Efficiency Percentages（数据库/节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p0576615218"><a name="p0576615218"></a><a name="p0576615218"></a>数据库级或者节点Buffer Hit（缓冲命中率），Effective CPU（CPU使用率），WalWrite NoWait（获取Wal Buffer成功率），Soft Parse（软解析率），Non-parse CPU（CPU非解析时间比例）。</p>
    </td>
    </tr>
    <tr id="row115764151812"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p177481629821"><a name="p177481629821"></a><a name="p177481629821"></a>Top 10 Events by Total Wait Time（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p1457618151110"><a name="p1457618151110"></a><a name="p1457618151110"></a>最消耗时间的事件。</p>
    </td>
    </tr>
    <tr id="row175761815718"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p898917481218"><a name="p898917481218"></a><a name="p898917481218"></a>Wait Classes by Total Wait Time（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p85763154111"><a name="p85763154111"></a><a name="p85763154111"></a>最消耗时间的等待事件分类。</p>
    </td>
    </tr>
    <tr id="row55764151710"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p6930825312"><a name="p6930825312"></a><a name="p6930825312"></a>Host CPU（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p1557621514116"><a name="p1557621514116"></a><a name="p1557621514116"></a>主机CPU消耗。</p>
    </td>
    </tr>
    <tr id="row857661514110"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p7991716336"><a name="p7991716336"></a><a name="p7991716336"></a>Memory Statistics（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p19576101510115"><a name="p19576101510115"></a><a name="p19576101510115"></a>内核内存使用分布。</p>
    </td>
    </tr>
    <tr id="row185761150118"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p12651331239"><a name="p12651331239"></a><a name="p12651331239"></a>Object stats（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p1457691518114"><a name="p1457691518114"></a><a name="p1457691518114"></a>表，索引维度的性能统计信息。</p>
    </td>
    </tr>
    <tr id="row145762156112"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p14537204613311"><a name="p14537204613311"></a><a name="p14537204613311"></a>Database Configuration（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p657615151715"><a name="p657615151715"></a><a name="p657615151715"></a>节点配置。</p>
    </td>
    </tr>
    <tr id="row4576111519111"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p148180593320"><a name="p148180593320"></a><a name="p148180593320"></a>SQL Statistics（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p75772015713"><a name="p75772015713"></a><a name="p75772015713"></a>SQL语句各个维度性能统计：端到端时间，行活动，缓存命中，CPU消耗，时间消耗细分。</p>
    </td>
    </tr>
    <tr id="row205775151415"><td class="cellrowborder" valign="top" width="26.6%" headers="mcps1.2.3.1.1 "><p id="p15283141442"><a name="p15283141442"></a><a name="p15283141442"></a>SQL Detail（节点范围）</p>
    </td>
    <td class="cellrowborder" valign="top" width="73.4%" headers="mcps1.2.3.1.2 "><p id="p55772158111"><a name="p55772158111"></a><a name="p55772158111"></a>SQL语句文本详情。</p>
    </td>
    </tr>
    </tbody>
    </table>


## 示例<a name="zh-cn_topic_0283137259_section65481355161913"></a>

```
--查询已经生成的快照。
postgres=# select * from snapshot.snapshot;
 snapshot_id |           start_ts            |            end_ts             
-------------+-------------------------------+-------------------------------
           1 | 2020-09-07 10:20:36.763244+08 | 2020-09-07 10:20:42.166511+08
           2 | 2020-09-07 10:21:13.416352+08 | 2020-09-07 10:21:19.470911+08
(2 rows)

--生成格式化性能报告wdrTestNode.html。
postgres=# \a \t \o /home/om/wdrTestNode.html
Output format is unaligned.
Showing only tuples.

--向性能报告wdrTestNode.html中写入数据。
postgres=# select generate_wdr_report(1, 2, 'all', 'node', 'dn');

--关闭性能报告wdrTestNode.html。
postgres=# \o

--生成格式化性能报告wdrTestCluster.html。
postgres=# \o /home/om/wdrTestCluster.html

--向格式化性能报告wdrTestCluster.html中写入数据。
postgres=# select generate_wdr_report(1, 2, 'all', 'cluster');

--关闭性能报告wdrTestCluster.html。
postgres=# \o \a \t
Output format is aligned.
Tuples only is off.
```

