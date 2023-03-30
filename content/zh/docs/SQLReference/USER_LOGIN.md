# USER\_LOGIN<a name="ZH-CN_TOPIC_0245374827"></a>

USER\_LOGIN用来记录用户登录和退出次数的相关信息。

**表 1**  USER\_LOGIN字段

<a name="zh-cn_topic_0237122723_table894075612200"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122723_row318125719205"><th class="cellrowborder" valign="top" width="25.14%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122723_p41918573202"><a name="zh-cn_topic_0237122723_p41918573202"></a><a name="zh-cn_topic_0237122723_p41918573202"></a><strong id="zh-cn_topic_0237122723_b20194575209"><a name="zh-cn_topic_0237122723_b20194575209"></a><a name="zh-cn_topic_0237122723_b20194575209"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.950000000000003%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122723_p9191757162019"><a name="zh-cn_topic_0237122723_p9191757162019"></a><a name="zh-cn_topic_0237122723_p9191757162019"></a><strong id="zh-cn_topic_0237122723_b10191457172011"><a name="zh-cn_topic_0237122723_b10191457172011"></a><a name="zh-cn_topic_0237122723_b10191457172011"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="57.91%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122723_p111965792016"><a name="zh-cn_topic_0237122723_p111965792016"></a><a name="zh-cn_topic_0237122723_p111965792016"></a><strong id="zh-cn_topic_0237122723_b181913574209"><a name="zh-cn_topic_0237122723_b181913574209"></a><a name="zh-cn_topic_0237122723_b181913574209"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122723_row11191457172019"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122723_p119145722010"><a name="zh-cn_topic_0237122723_p119145722010"></a><a name="zh-cn_topic_0237122723_p119145722010"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122723_p1119135717202"><a name="zh-cn_topic_0237122723_p1119135717202"></a><a name="zh-cn_topic_0237122723_p1119135717202"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122723_p121965718209"><a name="zh-cn_topic_0237122723_p121965718209"></a><a name="zh-cn_topic_0237122723_p121965718209"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122723_row1419105717205"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122723_p420135713203"><a name="zh-cn_topic_0237122723_p420135713203"></a><a name="zh-cn_topic_0237122723_p420135713203"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122723_p6203573205"><a name="zh-cn_topic_0237122723_p6203573205"></a><a name="zh-cn_topic_0237122723_p6203573205"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122723_p42014574204"><a name="zh-cn_topic_0237122723_p42014574204"></a><a name="zh-cn_topic_0237122723_p42014574204"></a>用户名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122723_row42015717207"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122723_p620175722020"><a name="zh-cn_topic_0237122723_p620175722020"></a><a name="zh-cn_topic_0237122723_p620175722020"></a>user_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122723_p52065717207"><a name="zh-cn_topic_0237122723_p52065717207"></a><a name="zh-cn_topic_0237122723_p52065717207"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122723_p12201575206"><a name="zh-cn_topic_0237122723_p12201575206"></a><a name="zh-cn_topic_0237122723_p12201575206"></a>用户oid（同pg_authid中的oid字段）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122723_row172055762012"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122723_p1320195792018"><a name="zh-cn_topic_0237122723_p1320195792018"></a><a name="zh-cn_topic_0237122723_p1320195792018"></a>login_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122723_p102085772011"><a name="zh-cn_topic_0237122723_p102085772011"></a><a name="zh-cn_topic_0237122723_p102085772011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122723_p1620175719204"><a name="zh-cn_topic_0237122723_p1620175719204"></a><a name="zh-cn_topic_0237122723_p1620175719204"></a>登录次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122723_row102165752012"><td class="cellrowborder" valign="top" width="25.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122723_p221657102013"><a name="zh-cn_topic_0237122723_p221657102013"></a><a name="zh-cn_topic_0237122723_p221657102013"></a>logout_counter</p>
</td>
<td class="cellrowborder" valign="top" width="16.950000000000003%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122723_p122175772014"><a name="zh-cn_topic_0237122723_p122175772014"></a><a name="zh-cn_topic_0237122723_p122175772014"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="57.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122723_p6211757122015"><a name="zh-cn_topic_0237122723_p6211757122015"></a><a name="zh-cn_topic_0237122723_p6211757122015"></a>退出次数。</p>
</td>
</tr>
</tbody>
</table>
