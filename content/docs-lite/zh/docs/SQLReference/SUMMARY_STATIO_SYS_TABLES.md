# SUMMARY\_STATIO\_SYS\_TABLES<a name="ZH-CN_TOPIC_0289900651"></a>

SUMMARY\_STATIO\_SYS\_TABLES视图显示openGauss内汇聚的命名空间中所有系统表的IO状态信息。

**表 1**  SUMMARY\_STATIO\_SYS\_TABLES字段

<a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_table134731546101414"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row1586164631411"><th class="cellrowborder" valign="top" width="19.62%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p35861346111416"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p35861346111416"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p35861346111416"></a><strong id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b15586846141411"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b15586846141411"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b15586846141411"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.19%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1358674681410"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1358674681410"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1358674681410"></a><strong id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b558644671413"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b558644671413"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b558644671413"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.190000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p12586194613142"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p12586194613142"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p12586194613142"></a><strong id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b1358794601417"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b1358794601417"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_b1358794601417"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row15874467144"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p058744611146"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p058744611146"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p058744611146"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p45872464141"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p45872464141"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p45872464141"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1858704631410"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1858704631410"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1858704631410"></a>该表模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row11587946151416"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p25871546101412"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p25871546101412"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p25871546101412"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1258794671411"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1258794671411"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1258794671411"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p35877461141"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p35877461141"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p35877461141"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row1958712461140"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p2058854615143"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p2058854615143"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p2058854615143"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1158854620141"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1158854620141"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1158854620141"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p165881246171410"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p165881246171410"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p165881246171410"></a>从该表中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row3588346151414"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p758884613142"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p758884613142"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p758884613142"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1558814616141"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1558814616141"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1558814616141"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1858864691415"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1858864691415"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1858864691415"></a>此表缓存命中数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row258954691414"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p3589246111415"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p3589246111415"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p3589246111415"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p185891146111416"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p185891146111416"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p185891146111416"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p758918468144"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p758918468144"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p758918468144"></a>从表中所有索引读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row4589144661419"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p19589104610144"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p19589104610144"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p19589104610144"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1859074615146"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1859074615146"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1859074615146"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p45901646111415"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p45901646111415"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p45901646111415"></a>表中所有索引命中缓存数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row159094621414"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1659034671414"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1659034671414"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1659034671414"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p859017466148"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p859017466148"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p859017466148"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p2590204661411"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p2590204661411"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p2590204661411"></a>此表的TOAST表读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row459013468144"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p165914466142"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p165914466142"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p165914466142"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p185916465144"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p185916465144"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p185916465144"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p8591184671416"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p8591184671416"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p8591184671416"></a>此表的TOAST表命中缓冲区数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row1759124618143"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p13591184641413"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p13591184641413"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p13591184641413"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1591104641415"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1591104641415"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p1591104641415"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p15929462140"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p15929462140"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p15929462140"></a>此表的TOAST表索引读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_row45921946171417"><td class="cellrowborder" valign="top" width="19.62%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p65921846151417"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p65921846151417"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p65921846151417"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.19%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p135921046171411"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p135921046171411"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p135921046171411"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.190000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p18592144641417"><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p18592144641417"></a><a name="zh-cn_topic_0283137218_zh-cn_topic_0237122679_p18592144641417"></a>此表的TOAST表索引命中缓冲区数（如果存在）。</p>
</td>
</tr>
</tbody>
</table>

