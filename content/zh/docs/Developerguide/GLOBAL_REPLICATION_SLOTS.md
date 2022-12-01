# GLOBAL\_REPLICATION\_SLOTS<a name="ZH-CN_TOPIC_0245374815"></a>

GLOBAL\_REPLICATION\_SLOTS视图用于查看openGauss各节点的复制节点的信息。

**表 1**  GLOBAL\_REPLICATION\_SLOTS字段

<a name="zh-cn_topic_0237122711_table7541947184512"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122711_row18655164711454"><th class="cellrowborder" valign="top" width="25.14%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122711_p1465510478458"><a name="zh-cn_topic_0237122711_p1465510478458"></a><a name="zh-cn_topic_0237122711_p1465510478458"></a><strong id="zh-cn_topic_0237122711_b1765584724518"><a name="zh-cn_topic_0237122711_b1765584724518"></a><a name="zh-cn_topic_0237122711_b1765584724518"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.950000000000003%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122711_p1665504774511"><a name="zh-cn_topic_0237122711_p1665504774511"></a><a name="zh-cn_topic_0237122711_p1665504774511"></a><strong id="zh-cn_topic_0237122711_b16655134714520"><a name="zh-cn_topic_0237122711_b16655134714520"></a><a name="zh-cn_topic_0237122711_b16655134714520"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="57.91%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122711_p065664719451"><a name="zh-cn_topic_0237122711_p065664719451"></a><a name="zh-cn_topic_0237122711_p065664719451"></a><strong id="zh-cn_topic_0237122711_b265684715457"><a name="zh-cn_topic_0237122711_b265684715457"></a><a name="zh-cn_topic_0237122711_b265684715457"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122711_row7656194714518"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p1465614474457"><a name="zh-cn_topic_0237122711_p1465614474457"></a><a name="zh-cn_topic_0237122711_p1465614474457"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p96568475456"><a name="zh-cn_topic_0237122711_p96568475456"></a><a name="zh-cn_topic_0237122711_p96568475456"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p16561847144511"><a name="zh-cn_topic_0237122711_p16561847144511"></a><a name="zh-cn_topic_0237122711_p16561847144511"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row116569477456"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p11657947154510"><a name="zh-cn_topic_0237122711_p11657947154510"></a><a name="zh-cn_topic_0237122711_p11657947154510"></a>slot_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p19657174720451"><a name="zh-cn_topic_0237122711_p19657174720451"></a><a name="zh-cn_topic_0237122711_p19657174720451"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p1365744711453"><a name="zh-cn_topic_0237122711_p1365744711453"></a><a name="zh-cn_topic_0237122711_p1365744711453"></a>复制节点的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row26578472450"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p365711474451"><a name="zh-cn_topic_0237122711_p365711474451"></a><a name="zh-cn_topic_0237122711_p365711474451"></a>plugin</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p7657154713454"><a name="zh-cn_topic_0237122711_p7657154713454"></a><a name="zh-cn_topic_0237122711_p7657154713454"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p26572047164512"><a name="zh-cn_topic_0237122711_p26572047164512"></a><a name="zh-cn_topic_0237122711_p26572047164512"></a>插件名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row16571347204512"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p36581947154515"><a name="zh-cn_topic_0237122711_p36581947154515"></a><a name="zh-cn_topic_0237122711_p36581947154515"></a>slot_type</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p565844719455"><a name="zh-cn_topic_0237122711_p565844719455"></a><a name="zh-cn_topic_0237122711_p565844719455"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p18658104718457"><a name="zh-cn_topic_0237122711_p18658104718457"></a><a name="zh-cn_topic_0237122711_p18658104718457"></a>复制节点的类型。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row126582047124511"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p9658947194511"><a name="zh-cn_topic_0237122711_p9658947194511"></a><a name="zh-cn_topic_0237122711_p9658947194511"></a>datoid</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p365814714517"><a name="zh-cn_topic_0237122711_p365814714517"></a><a name="zh-cn_topic_0237122711_p365814714517"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p18658114712451"><a name="zh-cn_topic_0237122711_p18658114712451"></a><a name="zh-cn_topic_0237122711_p18658114712451"></a>复制节点的数据库OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row206581047184519"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p1658154715455"><a name="zh-cn_topic_0237122711_p1658154715455"></a><a name="zh-cn_topic_0237122711_p1658154715455"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p1565824719458"><a name="zh-cn_topic_0237122711_p1565824719458"></a><a name="zh-cn_topic_0237122711_p1565824719458"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p1465915471458"><a name="zh-cn_topic_0237122711_p1465915471458"></a><a name="zh-cn_topic_0237122711_p1465915471458"></a>复制节点的数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row1265964719453"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p9659144713453"><a name="zh-cn_topic_0237122711_p9659144713453"></a><a name="zh-cn_topic_0237122711_p9659144713453"></a>active</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p156591047184517"><a name="zh-cn_topic_0237122711_p156591047184517"></a><a name="zh-cn_topic_0237122711_p156591047184517"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p1765934714513"><a name="zh-cn_topic_0237122711_p1765934714513"></a><a name="zh-cn_topic_0237122711_p1765934714513"></a>复制节点是否为激活状态。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row765904724515"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p865915478458"><a name="zh-cn_topic_0237122711_p865915478458"></a><a name="zh-cn_topic_0237122711_p865915478458"></a>x_min</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p1265984718453"><a name="zh-cn_topic_0237122711_p1265984718453"></a><a name="zh-cn_topic_0237122711_p1265984718453"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p20659347124518"><a name="zh-cn_topic_0237122711_p20659347124518"></a><a name="zh-cn_topic_0237122711_p20659347124518"></a>复制节点事务标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row199875557352"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p498815554354"><a name="zh-cn_topic_0237122711_p498815554354"></a><a name="zh-cn_topic_0237122711_p498815554354"></a>catalog_xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p4988755183519"><a name="zh-cn_topic_0237122711_p4988755183519"></a><a name="zh-cn_topic_0237122711_p4988755183519"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p1598955513356"><a name="zh-cn_topic_0237122711_p1598955513356"></a><a name="zh-cn_topic_0237122711_p1598955513356"></a>逻辑复制槽对应的最早解码事务标识.</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row3659164714513"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p146591447204517"><a name="zh-cn_topic_0237122711_p146591447204517"></a><a name="zh-cn_topic_0237122711_p146591447204517"></a>restart_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p12660114714455"><a name="zh-cn_topic_0237122711_p12660114714455"></a><a name="zh-cn_topic_0237122711_p12660114714455"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p2066013477455"><a name="zh-cn_topic_0237122711_p2066013477455"></a><a name="zh-cn_topic_0237122711_p2066013477455"></a>复制节点的Xlog文件信息。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122711_row966004764520"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122711_p56609472453"><a name="zh-cn_topic_0237122711_p56609472453"></a><a name="zh-cn_topic_0237122711_p56609472453"></a>dummy_standby</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122711_p866044719454"><a name="zh-cn_topic_0237122711_p866044719454"></a><a name="zh-cn_topic_0237122711_p866044719454"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122711_p1660124716452"><a name="zh-cn_topic_0237122711_p1660124716452"></a><a name="zh-cn_topic_0237122711_p1660124716452"></a>复制节点是否为假备。</p>
</td>
</tr>
</tbody>
</table>
