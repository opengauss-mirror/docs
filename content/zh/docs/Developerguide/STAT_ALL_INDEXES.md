# STAT\_ALL\_INDEXES

将包含本节点数据库中的每个索引行，显示访问特定索引的统计。

**表 1**  STAT\_ALL\_INDEXES字段

<a name="zh-cn_topic_0237122591_table198091311204915"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122591_row121017125490"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122591_p4101712164910"><a name="zh-cn_topic_0237122591_p4101712164910"></a><a name="zh-cn_topic_0237122591_p4101712164910"></a><strong id="zh-cn_topic_0237122591_b12101112154918"><a name="zh-cn_topic_0237122591_b12101112154918"></a><a name="zh-cn_topic_0237122591_b12101112154918"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122591_p1810101284916"><a name="zh-cn_topic_0237122591_p1810101284916"></a><a name="zh-cn_topic_0237122591_p1810101284916"></a><strong id="zh-cn_topic_0237122591_b4113123490"><a name="zh-cn_topic_0237122591_b4113123490"></a><a name="zh-cn_topic_0237122591_b4113123490"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122591_p9111512174911"><a name="zh-cn_topic_0237122591_p9111512174911"></a><a name="zh-cn_topic_0237122591_p9111512174911"></a><strong id="zh-cn_topic_0237122591_b16112129492"><a name="zh-cn_topic_0237122591_b16112129492"></a><a name="zh-cn_topic_0237122591_b16112129492"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122591_row81141294911"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p101111121491"><a name="zh-cn_topic_0237122591_p101111121491"></a><a name="zh-cn_topic_0237122591_p101111121491"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p1311212154912"><a name="zh-cn_topic_0237122591_p1311212154912"></a><a name="zh-cn_topic_0237122591_p1311212154912"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p21181264916"><a name="zh-cn_topic_0237122591_p21181264916"></a><a name="zh-cn_topic_0237122591_p21181264916"></a>这个索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row6115122493"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p81181216493"><a name="zh-cn_topic_0237122591_p81181216493"></a><a name="zh-cn_topic_0237122591_p81181216493"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p412612134913"><a name="zh-cn_topic_0237122591_p412612134913"></a><a name="zh-cn_topic_0237122591_p412612134913"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p1912111294919"><a name="zh-cn_topic_0237122591_p1912111294919"></a><a name="zh-cn_topic_0237122591_p1912111294919"></a>索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row181214125495"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p121210122498"><a name="zh-cn_topic_0237122591_p121210122498"></a><a name="zh-cn_topic_0237122591_p121210122498"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p712111219495"><a name="zh-cn_topic_0237122591_p712111219495"></a><a name="zh-cn_topic_0237122591_p712111219495"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p4121612174920"><a name="zh-cn_topic_0237122591_p4121612174920"></a><a name="zh-cn_topic_0237122591_p4121612174920"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row712131214914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p1812121217499"><a name="zh-cn_topic_0237122591_p1812121217499"></a><a name="zh-cn_topic_0237122591_p1812121217499"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p1812812124911"><a name="zh-cn_topic_0237122591_p1812812124911"></a><a name="zh-cn_topic_0237122591_p1812812124911"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p213151213495"><a name="zh-cn_topic_0237122591_p213151213495"></a><a name="zh-cn_topic_0237122591_p213151213495"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row101313126495"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p3131912164910"><a name="zh-cn_topic_0237122591_p3131912164910"></a><a name="zh-cn_topic_0237122591_p3131912164910"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p111311125496"><a name="zh-cn_topic_0237122591_p111311125496"></a><a name="zh-cn_topic_0237122591_p111311125496"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p14135123496"><a name="zh-cn_topic_0237122591_p14135123496"></a><a name="zh-cn_topic_0237122591_p14135123496"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row8131712154914"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p12131612184914"><a name="zh-cn_topic_0237122591_p12131612184914"></a><a name="zh-cn_topic_0237122591_p12131612184914"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p413101220495"><a name="zh-cn_topic_0237122591_p413101220495"></a><a name="zh-cn_topic_0237122591_p413101220495"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p31471220492"><a name="zh-cn_topic_0237122591_p31471220492"></a><a name="zh-cn_topic_0237122591_p31471220492"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row151471214496"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p1714151215491"><a name="zh-cn_topic_0237122591_p1714151215491"></a><a name="zh-cn_topic_0237122591_p1714151215491"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p13141512124915"><a name="zh-cn_topic_0237122591_p13141512124915"></a><a name="zh-cn_topic_0237122591_p13141512124915"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p14141312154919"><a name="zh-cn_topic_0237122591_p14141312154919"></a><a name="zh-cn_topic_0237122591_p14141312154919"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122591_row314151244910"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122591_p0143129495"><a name="zh-cn_topic_0237122591_p0143129495"></a><a name="zh-cn_topic_0237122591_p0143129495"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122591_p715712204915"><a name="zh-cn_topic_0237122591_p715712204915"></a><a name="zh-cn_topic_0237122591_p715712204915"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122591_p315161224911"><a name="zh-cn_topic_0237122591_p315161224911"></a><a name="zh-cn_topic_0237122591_p315161224911"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>
