# WDR Snapshot生成性能报告<a name="ZH-CN_TOPIC_0289900439"></a>

基于WDR Snapshot数据表汇总、统计，生成性能报告，默认初始化用户或监控管理员用户可以生成报告。

## 前提条件<a name="zh-cn_topic_0283137259_section128252205291"></a>

WDR Snapshot启动（即参数[enable\_wdr\_snapshot](../DatabaseReference/系统性能快照.md#zh-cn_topic_0283137284_zh-cn_topic_0237124757_section983311682019)为on时），且快照数量大于等于2。

## 操作步骤<a name="zh-cn_topic_0283137259_section49941629132915"></a>

1.  执行如下命令新建报告文件。

    ```
    touch  /home/om/wdrTestNode.html
    ```

2.  执行以下命令连接postgres数据库。

    ```
    gsql -d postgres -p 端口号 -r
    ```

3.  执行如下命令查询已经生成的快照，以获取快照的snapshot\_id。

    ```
    select * from snapshot.snapshot;
    ```

4.  （可选）在单机节点或集群主节点上执行如下命令手动创建快照。数据库中只有一个快照或者需要查看在当前时间段数据库的监控数据，可以选择手动执行快照操作，该命令需要用户具有sysadmin权限。

    ```
    select create_wdr_snapshot();
    ```

    >![](public_sys-resources/icon-note.gif) **说明：** 
    >
    >执行“cm\_ctl query -Cdvi”，回显中“Central Coordinator State”下显示的信息即为CCN信息。

5.  执行如下命令，在本地生成HTML格式的WDR报告。
    1.  执行如下命令，设置报告格式。\\a: 不显示表行列符号， \\t:  不显示列名 ，\\o: 指定输出文件。

        ```
        gsql> \a      
        gsql> \t 
        gsql> \o /home/om/wdrTestNode.html
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
        >
        >当前openGauss的节点名固定是“dn\_6001\_6002\_6003”，也可直接代入。

        **表 1**  generate\_wdr\_report函数参数说明

        <a name="table213012428330"></a>
        <table><thead align="left"><tr id="row9130164213330"><th class="cellrowborder" valign="top" width="34.01010101010101%" id="mcps1.2.4.1.1"><p id="p51317421337"><a name="p51317421337"></a><a name="p51317421337"></a>参数</p>
        </th>
        <th class="cellrowborder" valign="top" width="32.56565656565657%" id="mcps1.2.4.1.2"><p id="p131311242103315"><a name="p131311242103315"></a><a name="p131311242103315"></a>说明</p>
        </th>
        <th class="cellrowborder" valign="top" width="33.42424242424243%" id="mcps1.2.4.1.3"><p id="p1213194210339"><a name="p1213194210339"></a><a name="p1213194210339"></a>取值范围</p>
        </th>
        </tr>
        </thead>
        <tbody><tr id="row18131194223311"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p81311142183313"><a name="p81311142183313"></a><a name="p81311142183313"></a>begin_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p181315429333"><a name="p181315429333"></a><a name="p181315429333"></a>查询时间段开始的snapshot的id（表snapshot.snapshot中的snapshot_id）。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p013194211337"><a name="p013194211337"></a><a name="p013194211337"></a>-</p>
        </td>
        </tr>
        <tr id="row1213114213335"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p61311542123311"><a name="p61311542123311"></a><a name="p61311542123311"></a>end_snap_id</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p11131154217335"><a name="p11131154217335"></a><a name="p11131154217335"></a>查询时间段结束snapshot的id。默认end_snap_id大于begin_snap_id（表snapshot.snapshot中的snapshot_id）。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><p id="p191311542133314"><a name="p191311542133314"></a><a name="p191311542133314"></a>-</p>
        </td>
        </tr>
        <tr id="row1813144243318"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p9131194217331"><a name="p9131194217331"></a><a name="p9131194217331"></a>report_type</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p12131042173314"><a name="p12131042173314"></a><a name="p12131042173314"></a>指定生成report的类型。例如，summary/detail/all。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul14131134214334"></a><a name="ul14131134214334"></a><ul id="ul14131134214334"><li>summary：汇总数据。</li><li>detail：明细数据。</li><li>all：包含summary和detail。</li></ul>
        </td>
        </tr>
        <tr id="row121311042113315"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p13131184210330"><a name="p13131184210330"></a><a name="p13131184210330"></a>report_scope</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p513194219333"><a name="p513194219333"></a><a name="p513194219333"></a>指定生成report的范围，可以为cluster或者node。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul613110422335"></a><a name="ul613110422335"></a><ul id="ul613110422335"><li>cluster：数据库级别的信息。</li><li>node：节点级别的信息。</li></ul>
        </td>
        </tr>
        <tr id="row101314427335"><td class="cellrowborder" valign="top" width="34.01010101010101%" headers="mcps1.2.4.1.1 "><p id="p61318424339"><a name="p61318424339"></a><a name="p61318424339"></a>node_name</p>
        </td>
        <td class="cellrowborder" valign="top" width="32.56565656565657%" headers="mcps1.2.4.1.2 "><p id="p8131124217336"><a name="p8131124217336"></a><a name="p8131124217336"></a>在report_scope指定为node时，需要把该参数指定为对应节点的名称。（节点名称可以执行select * from pg_node_env;查询）。</p>
        <p id="p15131164213316"><a name="p15131164213316"></a><a name="p15131164213316"></a>在report_scope为cluster时，该值可以省略或者指定为空或NULL。</p>
        </td>
        <td class="cellrowborder" valign="top" width="33.42424242424243%" headers="mcps1.2.4.1.3 "><a name="ul3131184216333"></a><a name="ul3131184216333"></a><ul id="ul3131184216333"><li>node：<span id="text31321742123313"><a name="text31321742123313"></a><a name="text31321742123313"></a>openGauss</span>中的节点名称。</li><li>cluster：省略/空/NULL。</li></ul>
        </td>
        </tr>
        </tbody>
        </table>

    3.  执行如下命令关闭输出选项及格式化输出命令。

        ```
        \o \a \t 
        ```

6.  在/home/om/下根据需要[查看WDR报告](查看WDR报告.md)。

## 示例<a name="zh-cn_topic_0283137259_section65481355161913"></a>

```
--创建报告文件
touch  /home/om/wdrTestNode.html

--连接数据库
gsql -d postgres -p 端口号 -r

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
openGauss=# select generate_wdr_report(1, 2, 'all', 'node', 'dn_6001_6002_6003');

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

