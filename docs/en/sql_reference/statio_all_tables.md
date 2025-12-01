# STATIO\_ALL\_TABLES<a name="EN-US_TOPIC_0245374791"></a>

**STATIO\_ALL\_TABLES**  contains one row for each table \(including TOAST tables\) in the current database, showing I/O statistics about specific tables.

**Table  1**  STATIO\_ALL\_TABLES columns

<a name="en-us_topic_0237122687_table16796228112212"></a>
<table><thead align="left"><tr id="en-us_topic_0237122687_row99229286226"><th class="cellrowborder" valign="top" width="17.658234176582344%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122687_p79236287227"><a name="en-us_topic_0237122687_p79236287227"></a><a name="en-us_topic_0237122687_p79236287227"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="16.71832816718328%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122687_p12923182852215"><a name="en-us_topic_0237122687_p12923182852215"></a><a name="en-us_topic_0237122687_p12923182852215"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="65.62343765623437%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122687_p492302822216"><a name="en-us_topic_0237122687_p492302822216"></a><a name="en-us_topic_0237122687_p492302822216"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122687_row6923152810224"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p7924192832212"><a name="en-us_topic_0237122687_p7924192832212"></a><a name="en-us_topic_0237122687_p7924192832212"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p992472882210"><a name="en-us_topic_0237122687_p992472882210"></a><a name="en-us_topic_0237122687_p992472882210"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p59242028202214"><a name="en-us_topic_0237122687_p59242028202214"></a><a name="en-us_topic_0237122687_p59242028202214"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row139241028162215"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p119243282225"><a name="en-us_topic_0237122687_p119243282225"></a><a name="en-us_topic_0237122687_p119243282225"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p6924152822212"><a name="en-us_topic_0237122687_p6924152822212"></a><a name="en-us_topic_0237122687_p6924152822212"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p19924028182214"><a name="en-us_topic_0237122687_p19924028182214"></a><a name="en-us_topic_0237122687_p19924028182214"></a>Name of the schema that the table is in</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row692442802216"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p1592572811224"><a name="en-us_topic_0237122687_p1592572811224"></a><a name="en-us_topic_0237122687_p1592572811224"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p392542832217"><a name="en-us_topic_0237122687_p392542832217"></a><a name="en-us_topic_0237122687_p392542832217"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p8925102812221"><a name="en-us_topic_0237122687_p8925102812221"></a><a name="en-us_topic_0237122687_p8925102812221"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row1492592814225"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p179251428132212"><a name="en-us_topic_0237122687_p179251428132212"></a><a name="en-us_topic_0237122687_p179251428132212"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p39256288223"><a name="en-us_topic_0237122687_p39256288223"></a><a name="en-us_topic_0237122687_p39256288223"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p5925192852217"><a name="en-us_topic_0237122687_p5925192852217"></a><a name="en-us_topic_0237122687_p5925192852217"></a>Number of disk blocks read from the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row16925122810222"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p2925182812214"><a name="en-us_topic_0237122687_p2925182812214"></a><a name="en-us_topic_0237122687_p2925182812214"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p59251528192211"><a name="en-us_topic_0237122687_p59251528192211"></a><a name="en-us_topic_0237122687_p59251528192211"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p13926122822217"><a name="en-us_topic_0237122687_p13926122822217"></a><a name="en-us_topic_0237122687_p13926122822217"></a>Number of cache hits in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row1792682852219"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p5926192817229"><a name="en-us_topic_0237122687_p5926192817229"></a><a name="en-us_topic_0237122687_p5926192817229"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p1092610282222"><a name="en-us_topic_0237122687_p1092610282222"></a><a name="en-us_topic_0237122687_p1092610282222"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p11926112817225"><a name="en-us_topic_0237122687_p11926112817225"></a><a name="en-us_topic_0237122687_p11926112817225"></a>Number of disk blocks read from all indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row792620285227"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p18926102882212"><a name="en-us_topic_0237122687_p18926102882212"></a><a name="en-us_topic_0237122687_p18926102882212"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p15926142812225"><a name="en-us_topic_0237122687_p15926142812225"></a><a name="en-us_topic_0237122687_p15926142812225"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p49266288223"><a name="en-us_topic_0237122687_p49266288223"></a><a name="en-us_topic_0237122687_p49266288223"></a>Number of cache hits in indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row17926102882216"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p692712285226"><a name="en-us_topic_0237122687_p692712285226"></a><a name="en-us_topic_0237122687_p692712285226"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p2092712872212"><a name="en-us_topic_0237122687_p2092712872212"></a><a name="en-us_topic_0237122687_p2092712872212"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p20927132814223"><a name="en-us_topic_0237122687_p20927132814223"></a><a name="en-us_topic_0237122687_p20927132814223"></a>Number of disk blocks read from the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row1692715282226"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p14927102810222"><a name="en-us_topic_0237122687_p14927102810222"></a><a name="en-us_topic_0237122687_p14927102810222"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p8927112882210"><a name="en-us_topic_0237122687_p8927112882210"></a><a name="en-us_topic_0237122687_p8927112882210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p11927182813227"><a name="en-us_topic_0237122687_p11927182813227"></a><a name="en-us_topic_0237122687_p11927182813227"></a>Number of buffer hits in the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row79277289223"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p11928828192210"><a name="en-us_topic_0237122687_p11928828192210"></a><a name="en-us_topic_0237122687_p11928828192210"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p16928192842216"><a name="en-us_topic_0237122687_p16928192842216"></a><a name="en-us_topic_0237122687_p16928192842216"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p6928928102211"><a name="en-us_topic_0237122687_p6928928102211"></a><a name="en-us_topic_0237122687_p6928928102211"></a>Number of disk blocks read from the TOAST table index (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122687_row1692862822216"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122687_p79284284224"><a name="en-us_topic_0237122687_p79284284224"></a><a name="en-us_topic_0237122687_p79284284224"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122687_p29289282224"><a name="en-us_topic_0237122687_p29289282224"></a><a name="en-us_topic_0237122687_p29289282224"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122687_p092862842213"><a name="en-us_topic_0237122687_p092862842213"></a><a name="en-us_topic_0237122687_p092862842213"></a>Number of buffer-hits in the TOAST table index (if any) in the table</p>
</td>
</tr>
</tbody>
</table>

