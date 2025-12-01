# SUMMARY\_STAT\_DATABASE\_CONFLICTS

显示openGauss内汇聚的数据库冲突状态的统计信息。

**表 1**  SUMMARY\_STAT\_DATABASE\_CONFLICTS字段

<a name="zh-cn_topic_0237122598_table1212791117569"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122598_row919731185614"><th class="cellrowborder" valign="top" width="22.78%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122598_p16197121165612"><a name="zh-cn_topic_0237122598_p16197121165612"></a><a name="zh-cn_topic_0237122598_p16197121165612"></a><strong id="zh-cn_topic_0237122598_b819791112560"><a name="zh-cn_topic_0237122598_b819791112560"></a><a name="zh-cn_topic_0237122598_b819791112560"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.869999999999997%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122598_p11197101115568"><a name="zh-cn_topic_0237122598_p11197101115568"></a><a name="zh-cn_topic_0237122598_p11197101115568"></a><strong id="zh-cn_topic_0237122598_b8197171112567"><a name="zh-cn_topic_0237122598_b8197171112567"></a><a name="zh-cn_topic_0237122598_b8197171112567"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="60.35%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122598_p1419791110564"><a name="zh-cn_topic_0237122598_p1419791110564"></a><a name="zh-cn_topic_0237122598_p1419791110564"></a><strong id="zh-cn_topic_0237122598_b201978111564"><a name="zh-cn_topic_0237122598_b201978111564"></a><a name="zh-cn_topic_0237122598_b201978111564"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122598_row2197151112562"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122598_p91971011125614"><a name="zh-cn_topic_0237122598_p91971011125614"></a><a name="zh-cn_topic_0237122598_p91971011125614"></a>datname</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122598_p1819713117566"><a name="zh-cn_topic_0237122598_p1819713117566"></a><a name="zh-cn_topic_0237122598_p1819713117566"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122598_p1519801185613"><a name="zh-cn_topic_0237122598_p1519801185613"></a><a name="zh-cn_topic_0237122598_p1519801185613"></a>数据库名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122598_row1119801113566"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122598_p919841115619"><a name="zh-cn_topic_0237122598_p919841115619"></a><a name="zh-cn_topic_0237122598_p919841115619"></a>confl_tablespace</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122598_p31982119567"><a name="zh-cn_topic_0237122598_p31982119567"></a><a name="zh-cn_topic_0237122598_p31982119567"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122598_p9198191185616"><a name="zh-cn_topic_0237122598_p9198191185616"></a><a name="zh-cn_topic_0237122598_p9198191185616"></a>冲突的表空间的数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122598_row19198131117569"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122598_p1519812110562"><a name="zh-cn_topic_0237122598_p1519812110562"></a><a name="zh-cn_topic_0237122598_p1519812110562"></a>confl_lock</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122598_p1219881145610"><a name="zh-cn_topic_0237122598_p1219881145610"></a><a name="zh-cn_topic_0237122598_p1219881145610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122598_p91999114563"><a name="zh-cn_topic_0237122598_p91999114563"></a><a name="zh-cn_topic_0237122598_p91999114563"></a>冲突的锁数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122598_row21996115566"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122598_p111998112566"><a name="zh-cn_topic_0237122598_p111998112566"></a><a name="zh-cn_topic_0237122598_p111998112566"></a>confl_snapshot</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122598_p2019961135619"><a name="zh-cn_topic_0237122598_p2019961135619"></a><a name="zh-cn_topic_0237122598_p2019961135619"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122598_p019971115618"><a name="zh-cn_topic_0237122598_p019971115618"></a><a name="zh-cn_topic_0237122598_p019971115618"></a>冲突的快照数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122598_row161991911175613"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122598_p1719951115613"><a name="zh-cn_topic_0237122598_p1719951115613"></a><a name="zh-cn_topic_0237122598_p1719951115613"></a>confl_bufferpin</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122598_p52001611185618"><a name="zh-cn_topic_0237122598_p52001611185618"></a><a name="zh-cn_topic_0237122598_p52001611185618"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122598_p1120012114566"><a name="zh-cn_topic_0237122598_p1120012114566"></a><a name="zh-cn_topic_0237122598_p1120012114566"></a>冲突的缓冲区数目。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122598_row4200611175619"><td class="cellrowborder" valign="top" width="22.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122598_p7200711125612"><a name="zh-cn_topic_0237122598_p7200711125612"></a><a name="zh-cn_topic_0237122598_p7200711125612"></a>confl_deadlock</p>
</td>
<td class="cellrowborder" valign="top" width="16.869999999999997%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122598_p620017110564"><a name="zh-cn_topic_0237122598_p620017110564"></a><a name="zh-cn_topic_0237122598_p620017110564"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.35%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122598_p9200111175614"><a name="zh-cn_topic_0237122598_p9200111175614"></a><a name="zh-cn_topic_0237122598_p9200111175614"></a>冲突的死锁数目。</p>
</td>
</tr>
</tbody>
</table>
