# SUMMARY\_FILE\_REDO\_IOSTAT

openGauss内汇聚所有的Redo（WAL）相关的统计信息。

**表 1**  SUMMARY\_FILE\_REDO\_IOSTAT字段

<a name="zh-cn_topic_0237122570_table18353189131118"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122570_row845279141114"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122570_p945239191120"><a name="zh-cn_topic_0237122570_p945239191120"></a><a name="zh-cn_topic_0237122570_p945239191120"></a><strong id="zh-cn_topic_0237122570_b645289121119"><a name="zh-cn_topic_0237122570_b645289121119"></a><a name="zh-cn_topic_0237122570_b645289121119"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122570_p04528917111"><a name="zh-cn_topic_0237122570_p04528917111"></a><a name="zh-cn_topic_0237122570_p04528917111"></a><strong id="zh-cn_topic_0237122570_b545289151115"><a name="zh-cn_topic_0237122570_b545289151115"></a><a name="zh-cn_topic_0237122570_b545289151115"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122570_p114526913119"><a name="zh-cn_topic_0237122570_p114526913119"></a><a name="zh-cn_topic_0237122570_p114526913119"></a><strong id="zh-cn_topic_0237122570_b2453393114"><a name="zh-cn_topic_0237122570_b2453393114"></a><a name="zh-cn_topic_0237122570_b2453393114"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122570_row9453095118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p11453159161120"><a name="zh-cn_topic_0237122570_p11453159161120"></a><a name="zh-cn_topic_0237122570_p11453159161120"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p545318913118"><a name="zh-cn_topic_0237122570_p545318913118"></a><a name="zh-cn_topic_0237122570_p545318913118"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p10453795113"><a name="zh-cn_topic_0237122570_p10453795113"></a><a name="zh-cn_topic_0237122570_p10453795113"></a>向wal buffer中写的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122570_row16453129111120"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p16453129161119"><a name="zh-cn_topic_0237122570_p16453129161119"></a><a name="zh-cn_topic_0237122570_p16453129161119"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p8453998116"><a name="zh-cn_topic_0237122570_p8453998116"></a><a name="zh-cn_topic_0237122570_p8453998116"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p1745369151120"><a name="zh-cn_topic_0237122570_p1745369151120"></a><a name="zh-cn_topic_0237122570_p1745369151120"></a>向wal buffer中写的block的块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122570_row1345339161115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p3454119121117"><a name="zh-cn_topic_0237122570_p3454119121117"></a><a name="zh-cn_topic_0237122570_p3454119121117"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p84541911112"><a name="zh-cn_topic_0237122570_p84541911112"></a><a name="zh-cn_topic_0237122570_p84541911112"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p1145469151113"><a name="zh-cn_topic_0237122570_p1145469151113"></a><a name="zh-cn_topic_0237122570_p1145469151113"></a>向xlog文件中写操作的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122570_row1845429171115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p124547931114"><a name="zh-cn_topic_0237122570_p124547931114"></a><a name="zh-cn_topic_0237122570_p124547931114"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p745415911113"><a name="zh-cn_topic_0237122570_p745415911113"></a><a name="zh-cn_topic_0237122570_p745415911113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p645479121110"><a name="zh-cn_topic_0237122570_p645479121110"></a><a name="zh-cn_topic_0237122570_p645479121110"></a>平均写xlog的时间（writetim/phywrts）（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122570_row1145412914118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p194548901116"><a name="zh-cn_topic_0237122570_p194548901116"></a><a name="zh-cn_topic_0237122570_p194548901116"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p64554941113"><a name="zh-cn_topic_0237122570_p64554941113"></a><a name="zh-cn_topic_0237122570_p64554941113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p145518917111"><a name="zh-cn_topic_0237122570_p145518917111"></a><a name="zh-cn_topic_0237122570_p145518917111"></a>最后一次写xlog的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122570_row94551998113"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p8455692114"><a name="zh-cn_topic_0237122570_p8455692114"></a><a name="zh-cn_topic_0237122570_p8455692114"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p145509151118"><a name="zh-cn_topic_0237122570_p145509151118"></a><a name="zh-cn_topic_0237122570_p145509151118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p1145519161119"><a name="zh-cn_topic_0237122570_p1145519161119"></a><a name="zh-cn_topic_0237122570_p1145519161119"></a>最小的写xlog时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122570_row0455795115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122570_p17455169191114"><a name="zh-cn_topic_0237122570_p17455169191114"></a><a name="zh-cn_topic_0237122570_p17455169191114"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122570_p1845517920111"><a name="zh-cn_topic_0237122570_p1845517920111"></a><a name="zh-cn_topic_0237122570_p1845517920111"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122570_p1145549201110"><a name="zh-cn_topic_0237122570_p1145549201110"></a><a name="zh-cn_topic_0237122570_p1145549201110"></a>最大的写xlog时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
