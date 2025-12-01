# SUMMARY\_STAT\_BAD\_BLOCK

获得openGauss内汇聚的表、索引等文件的读取失败信息。

**表 1**  SUMMARY\_STAT\_BAD\_BLOCK字段

<a name="zh-cn_topic_0237122613_table6228201714131"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122613_row183151917191320"><th class="cellrowborder" valign="top" width="18.61%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122613_p1031561710138"><a name="zh-cn_topic_0237122613_p1031561710138"></a><a name="zh-cn_topic_0237122613_p1031561710138"></a><strong id="zh-cn_topic_0237122613_b7315151717138"><a name="zh-cn_topic_0237122613_b7315151717138"></a><a name="zh-cn_topic_0237122613_b7315151717138"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="29.21%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122613_p13316191771318"><a name="zh-cn_topic_0237122613_p13316191771318"></a><a name="zh-cn_topic_0237122613_p13316191771318"></a><strong id="zh-cn_topic_0237122613_b231619173134"><a name="zh-cn_topic_0237122613_b231619173134"></a><a name="zh-cn_topic_0237122613_b231619173134"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.18000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122613_p33161917121314"><a name="zh-cn_topic_0237122613_p33161917121314"></a><a name="zh-cn_topic_0237122613_p33161917121314"></a><strong id="zh-cn_topic_0237122613_b23161617111319"><a name="zh-cn_topic_0237122613_b23161617111319"></a><a name="zh-cn_topic_0237122613_b23161617111319"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122613_row331691710138"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p331611716136"><a name="zh-cn_topic_0237122613_p331611716136"></a><a name="zh-cn_topic_0237122613_p331611716136"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p143161917121319"><a name="zh-cn_topic_0237122613_p143161917121319"></a><a name="zh-cn_topic_0237122613_p143161917121319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p18317171717139"><a name="zh-cn_topic_0237122613_p18317171717139"></a><a name="zh-cn_topic_0237122613_p18317171717139"></a>database的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122613_row6317131761319"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p63171817101313"><a name="zh-cn_topic_0237122613_p63171817101313"></a><a name="zh-cn_topic_0237122613_p63171817101313"></a>tablespaceid</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p12317121771319"><a name="zh-cn_topic_0237122613_p12317121771319"></a><a name="zh-cn_topic_0237122613_p12317121771319"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p1731721714131"><a name="zh-cn_topic_0237122613_p1731721714131"></a><a name="zh-cn_topic_0237122613_p1731721714131"></a>tablespace的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122613_row3317517181315"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p1031761761314"><a name="zh-cn_topic_0237122613_p1031761761314"></a><a name="zh-cn_topic_0237122613_p1031761761314"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p11318161719137"><a name="zh-cn_topic_0237122613_p11318161719137"></a><a name="zh-cn_topic_0237122613_p11318161719137"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p55571710175414"><a name="zh-cn_topic_0237122613_p55571710175414"></a><a name="zh-cn_topic_0237122613_p55571710175414"></a>relation的file node。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122613_row2031812175136"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p43181317101318"><a name="zh-cn_topic_0237122613_p43181317101318"></a><a name="zh-cn_topic_0237122613_p43181317101318"></a>forknum</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p531851715134"><a name="zh-cn_topic_0237122613_p531851715134"></a><a name="zh-cn_topic_0237122613_p531851715134"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p13318141719131"><a name="zh-cn_topic_0237122613_p13318141719131"></a><a name="zh-cn_topic_0237122613_p13318141719131"></a>fork编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122613_row103181617201320"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p20319117191312"><a name="zh-cn_topic_0237122613_p20319117191312"></a><a name="zh-cn_topic_0237122613_p20319117191312"></a>error_count</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p33191017161319"><a name="zh-cn_topic_0237122613_p33191017161319"></a><a name="zh-cn_topic_0237122613_p33191017161319"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p9319717131318"><a name="zh-cn_topic_0237122613_p9319717131318"></a><a name="zh-cn_topic_0237122613_p9319717131318"></a>error的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122613_row5319161761316"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p1131971771317"><a name="zh-cn_topic_0237122613_p1131971771317"></a><a name="zh-cn_topic_0237122613_p1131971771317"></a>first_time</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p8319131731314"><a name="zh-cn_topic_0237122613_p8319131731314"></a><a name="zh-cn_topic_0237122613_p8319131731314"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p2320171715139"><a name="zh-cn_topic_0237122613_p2320171715139"></a><a name="zh-cn_topic_0237122613_p2320171715139"></a>坏块第一次出现的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122613_row2320217151316"><td class="cellrowborder" valign="top" width="18.61%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122613_p232061731311"><a name="zh-cn_topic_0237122613_p232061731311"></a><a name="zh-cn_topic_0237122613_p232061731311"></a>last_time</p>
</td>
<td class="cellrowborder" valign="top" width="29.21%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122613_p6320171719135"><a name="zh-cn_topic_0237122613_p6320171719135"></a><a name="zh-cn_topic_0237122613_p6320171719135"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.18000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122613_p532021714138"><a name="zh-cn_topic_0237122613_p532021714138"></a><a name="zh-cn_topic_0237122613_p532021714138"></a>坏块最后出现的时间。</p>
</td>
</tr>
</tbody>
</table>
