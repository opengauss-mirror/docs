# SUMMARY\_STAT\_ALL\_INDEXES

将包含openGauss内汇聚数据库中的每个索引行，显示访问特定索引的统计。

**表 1**  SUMMARY\_STAT\_ALL\_INDEXES字段

<a name="zh-cn_topic_0237122592_table12266855154914"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122592_row15351165504918"><th class="cellrowborder" valign="top" width="18.78%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122592_p1735110551493"><a name="zh-cn_topic_0237122592_p1735110551493"></a><a name="zh-cn_topic_0237122592_p1735110551493"></a><strong id="zh-cn_topic_0237122592_b12351175584913"><a name="zh-cn_topic_0237122592_b12351175584913"></a><a name="zh-cn_topic_0237122592_b12351175584913"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122592_p183511455184918"><a name="zh-cn_topic_0237122592_p183511455184918"></a><a name="zh-cn_topic_0237122592_p183511455184918"></a><strong id="zh-cn_topic_0237122592_b143529556493"><a name="zh-cn_topic_0237122592_b143529556493"></a><a name="zh-cn_topic_0237122592_b143529556493"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.83%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122592_p1735235512497"><a name="zh-cn_topic_0237122592_p1735235512497"></a><a name="zh-cn_topic_0237122592_p1735235512497"></a><strong id="zh-cn_topic_0237122592_b1635295594912"><a name="zh-cn_topic_0237122592_b1635295594912"></a><a name="zh-cn_topic_0237122592_b1635295594912"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122592_row173521455144910"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122592_p335215557490"><a name="zh-cn_topic_0237122592_p335215557490"></a><a name="zh-cn_topic_0237122592_p335215557490"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122592_p15353155114910"><a name="zh-cn_topic_0237122592_p15353155114910"></a><a name="zh-cn_topic_0237122592_p15353155114910"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122592_p1135395517497"><a name="zh-cn_topic_0237122592_p1135395517497"></a><a name="zh-cn_topic_0237122592_p1135395517497"></a>索引中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122592_row173531055104918"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122592_p183533554497"><a name="zh-cn_topic_0237122592_p183533554497"></a><a name="zh-cn_topic_0237122592_p183533554497"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122592_p835375534919"><a name="zh-cn_topic_0237122592_p835375534919"></a><a name="zh-cn_topic_0237122592_p835375534919"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122592_p203531550491"><a name="zh-cn_topic_0237122592_p203531550491"></a><a name="zh-cn_topic_0237122592_p203531550491"></a>索引的表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122592_row1335411552499"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122592_p2354185534919"><a name="zh-cn_topic_0237122592_p2354185534919"></a><a name="zh-cn_topic_0237122592_p2354185534919"></a>indexrelname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122592_p183541055124919"><a name="zh-cn_topic_0237122592_p183541055124919"></a><a name="zh-cn_topic_0237122592_p183541055124919"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122592_p73541755104916"><a name="zh-cn_topic_0237122592_p73541755104916"></a><a name="zh-cn_topic_0237122592_p73541755104916"></a>索引名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122592_row1935415594916"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122592_p193541955194919"><a name="zh-cn_topic_0237122592_p193541955194919"></a><a name="zh-cn_topic_0237122592_p193541955194919"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122592_p10355755164910"><a name="zh-cn_topic_0237122592_p10355755164910"></a><a name="zh-cn_topic_0237122592_p10355755164910"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122592_p1635545554916"><a name="zh-cn_topic_0237122592_p1635545554916"></a><a name="zh-cn_topic_0237122592_p1635545554916"></a>索引上开始的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122592_row11355655104910"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122592_p1635565524913"><a name="zh-cn_topic_0237122592_p1635565524913"></a><a name="zh-cn_topic_0237122592_p1635565524913"></a>idx_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122592_p4355755174913"><a name="zh-cn_topic_0237122592_p4355755174913"></a><a name="zh-cn_topic_0237122592_p4355755174913"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122592_p1535515554493"><a name="zh-cn_topic_0237122592_p1535515554493"></a><a name="zh-cn_topic_0237122592_p1535515554493"></a>通过索引上扫描返回的索引项数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122592_row18355115519491"><td class="cellrowborder" valign="top" width="18.78%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122592_p835575534915"><a name="zh-cn_topic_0237122592_p835575534915"></a><a name="zh-cn_topic_0237122592_p835575534915"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122592_p15356125554914"><a name="zh-cn_topic_0237122592_p15356125554914"></a><a name="zh-cn_topic_0237122592_p15356125554914"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.83%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122592_p193569550497"><a name="zh-cn_topic_0237122592_p193569550497"></a><a name="zh-cn_topic_0237122592_p193569550497"></a>通过使用索引的简单索引扫描抓取的活表行数。</p>
</td>
</tr>
</tbody>
</table>
