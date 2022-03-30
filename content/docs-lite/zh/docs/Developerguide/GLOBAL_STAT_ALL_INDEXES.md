# GLOBAL\_STAT\_ALL\_INDEXES<a name="ZH-CN_TOPIC_0289900519"></a>

将包含各节点数据库中的每个索引行，显示访问特定索引的统计。

**表 1**  GLOBAL\_STAT\_ALL\_INDEXES字段

<a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_table14554806515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row66959015118"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p7696304516"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p7696304516"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p7696304516"></a><strong id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b86961108510"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b86961108510"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b86961108510"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p186962055116"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p186962055116"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p186962055116"></a><strong id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b46968015511"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b46968015511"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b46968015511"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196966019518"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196966019518"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196966019518"></a><strong id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b56969012516"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b56969012516"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_b56969012516"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row126961309517"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p9696130185112"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p9696130185112"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p9696130185112"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p2069616018513"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p2069616018513"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p2069616018513"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p126961505512"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p126961505512"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p126961505512"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row46968019515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p269700175110"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p269700175110"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p269700175110"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p186971808511"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p186971808511"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p186971808511"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p969713014510"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p969713014510"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p969713014510"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row1169716018514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p206976045117"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p206976045117"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p206976045117"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p136971006512"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p136971006512"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p136971006512"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p3697130165115"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p3697130165115"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p3697130165115"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row96971013512"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196978015517"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196978015517"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196978015517"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1869711095110"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1869711095110"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1869711095110"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p669713025112"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p669713025112"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p669713025112"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row176984011510"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p8698140175113"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p8698140175113"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p8698140175113"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p2698180105118"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p2698180105118"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p2698180105118"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196981001519"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196981001519"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p196981001519"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row1069870135110"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1669814095111"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1669814095111"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1669814095111"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p86983019512"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p86983019512"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p86983019512"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p18698140125111"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p18698140125111"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p18698140125111"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row56981107512"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p6698140135110"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p6698140135110"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p6698140135110"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p126981015518"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p126981015518"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p126981015518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1269918012513"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1269918012513"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p1269918012513"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row96997045112"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p96997015518"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p96997015518"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p96997015518"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p169911012515"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p169911012515"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p169911012515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p76991607511"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p76991607511"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p76991607511"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_row5699140155116"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p4699402512"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p4699402512"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p4699402512"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p15699190115113"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p15699190115113"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p15699190115113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p7699504518"><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p7699504518"></a><a name="zh-cn_topic_0283137212_zh-cn_topic_0237122593_p7699504518"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>

