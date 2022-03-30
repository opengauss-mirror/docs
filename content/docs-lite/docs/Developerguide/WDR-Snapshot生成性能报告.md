# WDR Snapshot生成性能报告<a name="ZH-CN_TOPIC_0289900439"></a>

基于WDR Snapshot数据表汇总、统计，生成性能报告。

## 前提条件<a name="zh-cn_topic_0283137259_section128252205291"></a>

WDR Snasphot启动（即参数[enable\_wdr\_snapshot](系统性能快照.md#zh-cn_topic_0283137284_zh-cn_topic_0237124757_section983311682019)为on时），且快照数量大于等于2。

## 操作步骤<a name="zh-cn_topic_0283137259_section49941629132915"></a>

1.  执行以下命令连接postgres数据库。

    ```
    gsql -d postgres -p 端口号 -r
    ```

2.  执行如下命令查询已经生成的快照，以获取快照的snapshot\_id。

    ```
    select * from snapshot.snapshot;
    ```

3.  （可选）在CCN上执行如下命令手动创建快照。数据库中只有一个快照或者需要查看在当前时间段数据库的监控数据，可以选择手动执行快照操作，该命令需要用户具有sysadmin权限。

    ```
    select create_wdr_snapshot();
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >执行“cm\_ctl query -Cdvi”，回显中“Central Coordinator State”下显示的信息即为CCN信息。

4.  执行如下步骤生成性能报告。
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
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137259_p9831125295619"><a name="zh-cn_topic_0283137259_p9831125295619"></a><a name="zh-cn_topic_0283137259_p9831125295619"></a>在report_scope指定为node时，需要把该参数指定为对应节点的名称。（节点名称可以执行select * from pg_node_env;查询）。</p>
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

5.  根据需要[查看WDR报告](查看WDR报告.md)。

## 示例<a name="zh-cn_topic_0283137259_section65481355161913"></a>

```
--查询已经生成的快照。
openGauss=# select * from snapshot.snapshot;
 snapshot_id |           start_ts            |            end_ts             
-------------+-------------------------------+-------------------------------
           1 | 2020-09-07 10:20:36.763244+08 | 2020-09-07 10:20:42.166511+08
           2 | 2020-09-07 10:21:13.416352+08 | 2020-09-07 10:21:19.470911+08
(2 rows)

--生成格式化性能报告wdrTestNode.html。
openGauss=# \a \t \o /home/om/wdrTestNode.html
Output format is unaligned.
Showing only tuples.

--向性能报告wdrTestNode.html中写入数据。
openGauss=# select generate_wdr_report(1, 2, 'all', 'node', 'dn');

--关闭性能报告wdrTestNode.html。
openGauss=# \o

--生成格式化性能报告wdrTestCluster.html。
openGauss=# \o /home/om/wdrTestCluster.html

--向格式化性能报告wdrTestCluster.html中写入数据。
openGauss=# select generate_wdr_report(1, 2, 'all', 'cluster');

--关闭性能报告wdrTestCluster.html。
openGauss=# \o \a \t
Output format is aligned.
Tuples only is off.
```

