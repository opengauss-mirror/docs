# SUMMARY\_STATIO\_USER\_TABLES<a name="ZH-CN_TOPIC_0289899850"></a>

SUMMARY\_STATIO\_USER\_TABLES视图显示openGauss内汇聚的命名空间中所有用户关系表的IO状态信息。

**表 1**  SUMMARY\_STATIO\_USER\_TABLES字段

<a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_table9806345859"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row1193413457510"><th class="cellrowborder" valign="top" width="19.62%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p99341451857"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p99341451857"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p99341451857"></a><strong id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b693415451050"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b693415451050"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b693415451050"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.19%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p59341645658"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p59341645658"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p59341645658"></a><strong id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b11934144511514"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b11934144511514"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b11934144511514"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.190000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p209341459514"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p209341459514"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p209341459514"></a><strong id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b59348453517"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b59348453517"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_b59348453517"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row79349459519"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p8934194520513"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p8934194520513"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p8934194520513"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p293512451519"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p293512451519"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p293512451519"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p293510455519"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p293510455519"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p293510455519"></a>该表模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row1935845251"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1793518451759"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1793518451759"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1793518451759"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p09351451159"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p09351451159"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p09351451159"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p59355452051"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p59355452051"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p59355452051"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row6935134513515"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p12935164518514"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p12935164518514"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p12935164518514"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1493514452516"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1493514452516"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1493514452516"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1493694514515"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1493694514515"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1493694514515"></a>从该表中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row493634517518"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p993614520510"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p993614520510"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p993614520510"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p2093611451853"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p2093611451853"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p2093611451853"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p29361451951"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p29361451951"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p29361451951"></a>此表缓存命中数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row793617451457"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p16936104520519"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p16936104520519"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p16936104520519"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p39361645252"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p39361645252"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p39361645252"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p129364451859"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p129364451859"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p129364451859"></a>从表中所有索引读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row1693620453512"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1793794519520"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1793794519520"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1793794519520"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p149371545554"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p149371545554"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p149371545554"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p993717456520"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p993717456520"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p993717456520"></a>表中所有索引命中缓存数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row1793716451452"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p99377451459"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p99377451459"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p99377451459"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p69371045456"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p69371045456"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p69371045456"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p893714515510"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p893714515510"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p893714515510"></a>此表的TOAST表读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row179370451955"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p12938124517512"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p12938124517512"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p12938124517512"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1293894513514"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1293894513514"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1293894513514"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p17938194513510"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p17938194513510"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p17938194513510"></a>此表的TOAST表命中缓冲区数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row1393874512517"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p793815451954"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p793815451954"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p793815451954"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1693812451854"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1693812451854"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p1693812451854"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p893814451659"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p893814451659"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p893814451659"></a>此表的TOAST表索引读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_row14938164513520"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p149381545856"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p149381545856"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p149381545856"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p139381045154"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p139381045154"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p139381045154"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p5939345853"><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p5939345853"></a><a name="zh-cn_topic_0283137017_zh-cn_topic_0237122670_p5939345853"></a>此表的TOAST表索引命中缓冲区数（如果存在）。</p>
</td>
</tr>
</tbody>
</table>

