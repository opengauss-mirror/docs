# PG\_REPLICATION\_ORIGIN

PG\_REPLICATION\_ORIGIN系统表包含所有已创建的复制源，该表为全局共享表，即在每个节点上只有一份pg\_replication\_origin，而不是每个数据库一份。

**表 1**  PG\_REPLICATION\_ORIGIN字段

<a name="table18213144346"></a>
<table><thead align="left"><tr id="row1721416413410"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p5215240411"><a name="p5215240411"></a><a name="p5215240411"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p2021518417414"><a name="p2021518417414"></a><a name="p2021518417414"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p921574744"><a name="p921574744"></a><a name="p921574744"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row142151641641"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1221518412419"><a name="p1221518412419"></a><a name="p1221518412419"></a>roident</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p221524443"><a name="p221524443"></a><a name="p221524443"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2021614419415"><a name="p2021614419415"></a><a name="p2021614419415"></a>一个集群范围内唯一的复制源标识符。</p>
</td>
</tr>
<tr id="row162161746418"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18216245412"><a name="p18216245412"></a><a name="p18216245412"></a>roname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6216241645"><a name="p6216241645"></a><a name="p6216241645"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1721684547"><a name="p1721684547"></a><a name="p1721684547"></a>外部的由用户定义的复制源名称。</p>
</td>
</tr>
</tbody>
</table>

