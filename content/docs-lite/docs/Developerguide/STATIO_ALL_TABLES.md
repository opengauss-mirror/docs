# STATIO\_ALL\_TABLES<a name="ZH-CN_TOPIC_0289899822"></a>

STATIO\_ALL\_TABLES视图将包含数据库中每个表（包括TOAST表）的一行，显示出特定表I/O的统计。

**表 1**  STATIO\_ALL\_TABLES字段

<a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_table16796228112212"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row99229286226"><th class="cellrowborder" valign="top" width="17.658234176582344%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p79236287227"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p79236287227"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p79236287227"></a><strong id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b18923182872210"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b18923182872210"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b18923182872210"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.71832816718328%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p12923182852215"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p12923182852215"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p12923182852215"></a><strong id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b8923728122212"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b8923728122212"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b8923728122212"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.62343765623437%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p492302822216"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p492302822216"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p492302822216"></a><strong id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b13923122814225"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b13923122814225"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_b13923122814225"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row6923152810224"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p7924192832212"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p7924192832212"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p7924192832212"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p992472882210"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p992472882210"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p992472882210"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p59242028202214"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p59242028202214"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p59242028202214"></a>表OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row139241028162215"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p119243282225"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p119243282225"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p119243282225"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p6924152822212"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p6924152822212"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p6924152822212"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p19924028182214"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p19924028182214"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p19924028182214"></a>该表模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row692442802216"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p1592572811224"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p1592572811224"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p1592572811224"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p392542832217"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p392542832217"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p392542832217"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p8925102812221"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p8925102812221"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p8925102812221"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row1492592814225"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p179251428132212"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p179251428132212"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p179251428132212"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p39256288223"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p39256288223"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p39256288223"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p5925192852217"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p5925192852217"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p5925192852217"></a>从该表中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row16925122810222"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p2925182812214"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p2925182812214"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p2925182812214"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p59251528192211"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p59251528192211"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p59251528192211"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p13926122822217"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p13926122822217"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p13926122822217"></a>该表缓存命中数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row1792682852219"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p5926192817229"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p5926192817229"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p5926192817229"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p1092610282222"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p1092610282222"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p1092610282222"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11926112817225"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11926112817225"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11926112817225"></a>从表中所有索引读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row792620285227"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p18926102882212"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p18926102882212"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p18926102882212"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p15926142812225"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p15926142812225"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p15926142812225"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p49266288223"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p49266288223"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p49266288223"></a>表中所有索引命中缓存数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row17926102882216"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p692712285226"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p692712285226"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p692712285226"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p2092712872212"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p2092712872212"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p2092712872212"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p20927132814223"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p20927132814223"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p20927132814223"></a>该表的TOAST表读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row1692715282226"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p14927102810222"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p14927102810222"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p14927102810222"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p8927112882210"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p8927112882210"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p8927112882210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11927182813227"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11927182813227"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11927182813227"></a>该表的TOAST表命中缓冲区数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row79277289223"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11928828192210"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11928828192210"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p11928828192210"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p16928192842216"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p16928192842216"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p16928192842216"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p6928928102211"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p6928928102211"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p6928928102211"></a>该表的TOAST表索引读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_row1692862822216"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p79284284224"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p79284284224"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p79284284224"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p29289282224"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p29289282224"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p29289282224"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p092862842213"><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p092862842213"></a><a name="zh-cn_topic_0283136977_zh-cn_topic_0237122687_p092862842213"></a>该表的TOAST表索引命中缓冲区数（如果存在）。</p>
</td>
</tr>
</tbody>
</table>

