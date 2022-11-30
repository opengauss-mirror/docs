# FILE\_REDO\_IOSTAT<a name="ZH-CN_TOPIC_0245374673"></a>

本节点Redo（WAL）相关的统计信息。

**表 1**  FILE\_REDO\_IOSTAT字段

<a name="zh-cn_topic_0237122569_table1760317275515"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122569_row771612717511"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122569_p1071611278515"><a name="zh-cn_topic_0237122569_p1071611278515"></a><a name="zh-cn_topic_0237122569_p1071611278515"></a><strong id="zh-cn_topic_0237122569_b1671613271058"><a name="zh-cn_topic_0237122569_b1671613271058"></a><a name="zh-cn_topic_0237122569_b1671613271058"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="31.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122569_p167161827558"><a name="zh-cn_topic_0237122569_p167161827558"></a><a name="zh-cn_topic_0237122569_p167161827558"></a><strong id="zh-cn_topic_0237122569_b47169277512"><a name="zh-cn_topic_0237122569_b47169277512"></a><a name="zh-cn_topic_0237122569_b47169277512"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="51.019999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122569_p17169271158"><a name="zh-cn_topic_0237122569_p17169271158"></a><a name="zh-cn_topic_0237122569_p17169271158"></a><strong id="zh-cn_topic_0237122569_b671652717520"><a name="zh-cn_topic_0237122569_b671652717520"></a><a name="zh-cn_topic_0237122569_b671652717520"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122569_row27160279514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p17717827751"><a name="zh-cn_topic_0237122569_p17717827751"></a><a name="zh-cn_topic_0237122569_p17717827751"></a>phywrts</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p17171271458"><a name="zh-cn_topic_0237122569_p17171271458"></a><a name="zh-cn_topic_0237122569_p17171271458"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p197171627156"><a name="zh-cn_topic_0237122569_p197171627156"></a><a name="zh-cn_topic_0237122569_p197171627156"></a>向wal buffer中写的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122569_row37174279511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p171719273512"><a name="zh-cn_topic_0237122569_p171719273512"></a><a name="zh-cn_topic_0237122569_p171719273512"></a>phyblkwrt</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p97176271157"><a name="zh-cn_topic_0237122569_p97176271157"></a><a name="zh-cn_topic_0237122569_p97176271157"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p1071714271556"><a name="zh-cn_topic_0237122569_p1071714271556"></a><a name="zh-cn_topic_0237122569_p1071714271556"></a>向wal buffer中写的block的块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122569_row1371712271754"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p971714273511"><a name="zh-cn_topic_0237122569_p971714273511"></a><a name="zh-cn_topic_0237122569_p971714273511"></a>writetim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p13717927558"><a name="zh-cn_topic_0237122569_p13717927558"></a><a name="zh-cn_topic_0237122569_p13717927558"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p13718132712515"><a name="zh-cn_topic_0237122569_p13718132712515"></a><a name="zh-cn_topic_0237122569_p13718132712515"></a>向xlog文件中写操作的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122569_row7718627555"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p071814271650"><a name="zh-cn_topic_0237122569_p071814271650"></a><a name="zh-cn_topic_0237122569_p071814271650"></a>avgiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p87189271754"><a name="zh-cn_topic_0237122569_p87189271754"></a><a name="zh-cn_topic_0237122569_p87189271754"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p371816272514"><a name="zh-cn_topic_0237122569_p371816272514"></a><a name="zh-cn_topic_0237122569_p371816272514"></a>平均写xlog的时间（writetim/phywrts）（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122569_row16718122716510"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p7718127258"><a name="zh-cn_topic_0237122569_p7718127258"></a><a name="zh-cn_topic_0237122569_p7718127258"></a>lstiotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p14718152720517"><a name="zh-cn_topic_0237122569_p14718152720517"></a><a name="zh-cn_topic_0237122569_p14718152720517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p6719127156"><a name="zh-cn_topic_0237122569_p6719127156"></a><a name="zh-cn_topic_0237122569_p6719127156"></a>最后一次写xlog的时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122569_row10719527859"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p37191627958"><a name="zh-cn_topic_0237122569_p37191627958"></a><a name="zh-cn_topic_0237122569_p37191627958"></a>miniotim</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p1071914278516"><a name="zh-cn_topic_0237122569_p1071914278516"></a><a name="zh-cn_topic_0237122569_p1071914278516"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p871992716511"><a name="zh-cn_topic_0237122569_p871992716511"></a><a name="zh-cn_topic_0237122569_p871992716511"></a>最小的写xlog时间（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122569_row77200278520"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122569_p872018271951"><a name="zh-cn_topic_0237122569_p872018271951"></a><a name="zh-cn_topic_0237122569_p872018271951"></a>maxiowtm</p>
</td>
<td class="cellrowborder" valign="top" width="31.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122569_p472120277515"><a name="zh-cn_topic_0237122569_p472120277515"></a><a name="zh-cn_topic_0237122569_p472120277515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.019999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122569_p9721627752"><a name="zh-cn_topic_0237122569_p9721627752"></a><a name="zh-cn_topic_0237122569_p9721627752"></a>最大的写xlog时间（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>
