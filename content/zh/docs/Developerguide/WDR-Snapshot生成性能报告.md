# WDR Snapshot生成性能报告<a name="ZH-CN_TOPIC_0274366366"></a>

基于WDR Snapshot数据表汇总、统计，生成性能报告。

## 前提条件<a name="section128252205291"></a>

WDR Snasphot在启动后（即参数[enable\_wdr\_snapshot](系统性能快照.md#zh-cn_topic_0237124757_section983311682019)为on时）， 且快照数量大于等于2时可以生成报告。

## 操作步骤<a name="section49941629132915"></a>

1.  执行如下命令查询已经生成的快照，以获取快照的snapshot\_id。

    ```
    select * from snapshot.snapshot;
    ```

2.  （可选）执行如下命令手动创建快照。数据库中只有一个快照或者需要查询在当前时段数据库监控的监控数据，可以选择手动执行快照操作。

    ```
    select create_wdr_snapshot();
    ```

3. 执行如下步骤生成性能报告。

    a.执行如下命令生成格式化性能报告文件。

    ```
    \a \t \o 服务器文件路径
    ```

    上述命令涉及参数说明如下：

      - \\a：切换非对齐模式。

      - \\t：切换输出的字段名的信息和行计数脚注。

      - \\o：把所有的查询结果发送至服务器文件里。

      - 服务器文件路径：生成性能报告文件存放路径。用户需要拥有此路径的读写权限。

    b. 执行如下命令将查询到的信息写入性能报告中。

    ```
    select generate_wdr_report(begin_snap_id Oid, end_snap_id Oid, varchar report_type, varchar report_scope, int node_name );
    ```

    命令中涉及的参数说明如下。

    **表 1**  generate\_wdr\_report函数参数说明

    <a name="table5333144711537"></a>
    <table><thead align="left"><tr id="row040934711539"><th class="cellrowborder" valign="top" width="33.333333333333336%" id="mcps1.2.4.1.1"><p id="p2409447155310"><a name="p2409447155310"></a><a name="p2409447155310"></a>参数</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.24242424242424%" id="mcps1.2.4.1.2"><p id="p10409154795317"><a name="p10409154795317"></a><a name="p10409154795317"></a>说明</p>
    </th>
    <th class="cellrowborder" valign="top" width="33.42424242424243%" id="mcps1.2.4.1.3"><p id="p940974711533"><a name="p940974711533"></a><a name="p940974711533"></a>取值范围</p>
    </th>
    </tr>
    </thead>
    <tbody><tr id="row540954735315"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p3409194710533"><a name="p3409194710533"></a><a name="p3409194710533"></a>begin_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p14093472535"><a name="p14093472535"></a><a name="p14093472535"></a>查询时间段开始的snapshot的id（表snapshot.snaoshot中的snapshot_id）。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p1740916478538"><a name="p1740916478538"></a><a name="p1740916478538"></a>-</p>
    </td>
    </tr>
    <tr id="row1640964715530"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p11409947115314"><a name="p11409947115314"></a><a name="p11409947115314"></a>end_snap_id</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p17410114711536"><a name="p17410114711536"></a><a name="p17410114711536"></a>查询时间段结束snapshot的id。默认end_snap_id大于begin_snap_id（表snapshot.snaoshot中的snapshot_id）。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p541054716536"><a name="p541054716536"></a><a name="p541054716536"></a>-</p>
    </td>
    </tr>
    <tr id="row74101947205320"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p174101447205314"><a name="p174101447205314"></a><a name="p174101447205314"></a>report_type</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p1410847175318"><a name="p1410847175318"></a><a name="p1410847175318"></a>指定生成report的类型。例如，summary/detail/all。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul27626140555"></a><a name="ul27626140555"></a><ul id="ul27626140555"><li>summary：汇总数据。</li><li>detail：明细数据。</li><li>all：包含summary和detail。</li></ul>
    </td>
    </tr>
    <tr id="row8410174755319"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p8410947105319"><a name="p8410947105319"></a><a name="p8410947105319"></a>report_scope</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p44101747145316"><a name="p44101747145316"></a><a name="p44101747145316"></a>指定生成report的范围，可以为cluster或者node。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul1630372943913"></a><a name="ul1630372943913"></a><ul id="ul1630372943913"><li>cluster：数据库级别的信息。</li><li>node：节点级别的信息。</li></ul>
    </td>
    </tr>
    <tr id="row1841064716537"><td class="cellrowborder" valign="top" width="33.333333333333336%" headers="mcps1.2.4.1.1 "><p id="p11410194725316"><a name="p11410194725316"></a><a name="p11410194725316"></a>node_name</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.24242424242424%" headers="mcps1.2.4.1.2 "><p id="p9831125295619"><a name="p9831125295619"></a><a name="p9831125295619"></a>在report_scope指定为node时，需要把该参数指定为对应节点的名称。(节点名称可以执行select * from pgxc_node;查询)。</p>
    <p id="p941074755313"><a name="p941074755313"></a><a name="p941074755313"></a>在report_scope为cluster时，该值可以指定为省略、空或者为NULL。</p>
    </td>
    <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul481800164318"></a><a name="ul481800164318"></a><ul id="ul481800164318"><li>node：openGauss中的节点名称。</li><li>cluster：省略、空或者NULL。</li></ul>
    </td>
    </tr>
    </tbody>
    </table>

    c.执行如下命令关闭输出选项及格式化输出命令。

    ```
    \o \a \t 
    ```



## 示例<a name="section65481355161913"></a>

```
--查询enable_wdr_snapshot，此参数需要为on。
postgres=# show enable_wdr_snapshot;
 enable_wdr_snapshot 
---------------------
 on
(1 row)

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
postgres=# select generate_wdr_report(1, 2, 'all', 'cluster', '');

--关闭性能报告wdrTestCluster.html。
postgres=# \o \a \t
Output format is aligned.
Tuples only is off.
```

