# GLOBAL\_STATIO\_ALL\_INDEXES

GLOBAL\_STATIO\_ALL\_INDEXES视图包含各节点的数据库中的每个索引行，显示特定索引的I/O的统计。

**表 1**  GLOBAL\_STATIO\_ALL\_INDEXES字段

<a name="zh-cn_topic_0237122692_table11900768262"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122692_row199912067265"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122692_p1899186122616"><a name="zh-cn_topic_0237122692_p1899186122616"></a><a name="zh-cn_topic_0237122692_p1899186122616"></a><strong id="zh-cn_topic_0237122692_b7991166102618"><a name="zh-cn_topic_0237122692_b7991166102618"></a><a name="zh-cn_topic_0237122692_b7991166102618"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122692_p69918612264"><a name="zh-cn_topic_0237122692_p69918612264"></a><a name="zh-cn_topic_0237122692_p69918612264"></a><strong id="zh-cn_topic_0237122692_b16991116112616"><a name="zh-cn_topic_0237122692_b16991116112616"></a><a name="zh-cn_topic_0237122692_b16991116112616"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122692_p7992961269"><a name="zh-cn_topic_0237122692_p7992961269"></a><a name="zh-cn_topic_0237122692_p7992961269"></a><strong id="zh-cn_topic_0237122692_b1899214616267"><a name="zh-cn_topic_0237122692_b1899214616267"></a><a name="zh-cn_topic_0237122692_b1899214616267"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122692_row1699217622615"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p179928652617"><a name="zh-cn_topic_0237122692_p179928652617"></a><a name="zh-cn_topic_0237122692_p179928652617"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p69923618268"><a name="zh-cn_topic_0237122692_p69923618268"></a><a name="zh-cn_topic_0237122692_p69923618268"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p1299219662615"><a name="zh-cn_topic_0237122692_p1299219662615"></a><a name="zh-cn_topic_0237122692_p1299219662615"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row189928616263"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p18992146142613"><a name="zh-cn_topic_0237122692_p18992146142613"></a><a name="zh-cn_topic_0237122692_p18992146142613"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p11992467263"><a name="zh-cn_topic_0237122692_p11992467263"></a><a name="zh-cn_topic_0237122692_p11992467263"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p7992146162614"><a name="zh-cn_topic_0237122692_p7992146162614"></a><a name="zh-cn_topic_0237122692_p7992146162614"></a>索引的表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row199938620265"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p0993366266"><a name="zh-cn_topic_0237122692_p0993366266"></a><a name="zh-cn_topic_0237122692_p0993366266"></a>indexrelid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p1199356182619"><a name="zh-cn_topic_0237122692_p1199356182619"></a><a name="zh-cn_topic_0237122692_p1199356182619"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p189933652611"><a name="zh-cn_topic_0237122692_p189933652611"></a><a name="zh-cn_topic_0237122692_p189933652611"></a>该索引的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row199310612269"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p149934620265"><a name="zh-cn_topic_0237122692_p149934620265"></a><a name="zh-cn_topic_0237122692_p149934620265"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p999312652616"><a name="zh-cn_topic_0237122692_p999312652616"></a><a name="zh-cn_topic_0237122692_p999312652616"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p1899315642616"><a name="zh-cn_topic_0237122692_p1899315642616"></a><a name="zh-cn_topic_0237122692_p1899315642616"></a>该索引的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row29931167269"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p4994667269"><a name="zh-cn_topic_0237122692_p4994667269"></a><a name="zh-cn_topic_0237122692_p4994667269"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p20994965268"><a name="zh-cn_topic_0237122692_p20994965268"></a><a name="zh-cn_topic_0237122692_p20994965268"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p1099417682617"><a name="zh-cn_topic_0237122692_p1099417682617"></a><a name="zh-cn_topic_0237122692_p1099417682617"></a>该索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row69941617263"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p1099406152610"><a name="zh-cn_topic_0237122692_p1099406152610"></a><a name="zh-cn_topic_0237122692_p1099406152610"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p19941769267"><a name="zh-cn_topic_0237122692_p19941769267"></a><a name="zh-cn_topic_0237122692_p19941769267"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p15994126202612"><a name="zh-cn_topic_0237122692_p15994126202612"></a><a name="zh-cn_topic_0237122692_p15994126202612"></a>索引名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row999417615269"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p1099456112615"><a name="zh-cn_topic_0237122692_p1099456112615"></a><a name="zh-cn_topic_0237122692_p1099456112615"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p499436142617"><a name="zh-cn_topic_0237122692_p499436142617"></a><a name="zh-cn_topic_0237122692_p499436142617"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p1299517612268"><a name="zh-cn_topic_0237122692_p1299517612268"></a><a name="zh-cn_topic_0237122692_p1299517612268"></a>从索引中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122692_row599515614265"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122692_p1099566152619"><a name="zh-cn_topic_0237122692_p1099566152619"></a><a name="zh-cn_topic_0237122692_p1099566152619"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122692_p19995268266"><a name="zh-cn_topic_0237122692_p19995268266"></a><a name="zh-cn_topic_0237122692_p19995268266"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122692_p1799513612265"><a name="zh-cn_topic_0237122692_p1799513612265"></a><a name="zh-cn_topic_0237122692_p1799513612265"></a>索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>
