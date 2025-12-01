# GLOBAL\_STATIO\_ALL\_TABLES<a name="EN-US_TOPIC_0245374793"></a>

**GLOBAL\_STATIO\_ALL\_TABLES**  contains I/O statistics about each table \(including TOAST tables\) in databases on each node. 

**Table  1**  GLOBAL\_STATIO\_ALL\_TABLES columns

<a name="en-us_topic_0237122689_table175055113230"></a>
<table><thead align="left"><tr id="en-us_topic_0237122689_row1317712511231"><th class="cellrowborder" valign="top" width="17.658234176582344%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122689_p9177175116235"><a name="en-us_topic_0237122689_p9177175116235"></a><a name="en-us_topic_0237122689_p9177175116235"></a><strong id="b1970791174617"><a name="b1970791174617"></a><a name="b1970791174617"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.71832816718328%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122689_p15177165117236"><a name="en-us_topic_0237122689_p15177165117236"></a><a name="en-us_topic_0237122689_p15177165117236"></a><strong id="b1761319128460"><a name="b1761319128460"></a><a name="b1761319128460"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.62343765623437%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122689_p1317820513233"><a name="en-us_topic_0237122689_p1317820513233"></a><a name="en-us_topic_0237122689_p1317820513233"></a><strong id="b11245201311465"><a name="b11245201311465"></a><a name="b11245201311465"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122689_row1517820516232"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p1017805102310"><a name="en-us_topic_0237122689_p1017805102310"></a><a name="en-us_topic_0237122689_p1017805102310"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p317855113236"><a name="en-us_topic_0237122689_p317855113236"></a><a name="en-us_topic_0237122689_p317855113236"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p15178451202312"><a name="en-us_topic_0237122689_p15178451202312"></a><a name="en-us_topic_0237122689_p15178451202312"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row13178115112316"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p517855112315"><a name="en-us_topic_0237122689_p517855112315"></a><a name="en-us_topic_0237122689_p517855112315"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p917895119235"><a name="en-us_topic_0237122689_p917895119235"></a><a name="en-us_topic_0237122689_p917895119235"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p417805113236"><a name="en-us_topic_0237122689_p417805113236"></a><a name="en-us_topic_0237122689_p417805113236"></a>Table OID</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row1017817514238"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p017925182315"><a name="en-us_topic_0237122689_p017925182315"></a><a name="en-us_topic_0237122689_p017925182315"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p9179451202318"><a name="en-us_topic_0237122689_p9179451202318"></a><a name="en-us_topic_0237122689_p9179451202318"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p61791951142320"><a name="en-us_topic_0237122689_p61791951142320"></a><a name="en-us_topic_0237122689_p61791951142320"></a>Name of the schema that contains the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row3179155182311"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p41796517236"><a name="en-us_topic_0237122689_p41796517236"></a><a name="en-us_topic_0237122689_p41796517236"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p917965112319"><a name="en-us_topic_0237122689_p917965112319"></a><a name="en-us_topic_0237122689_p917965112319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p21796511235"><a name="en-us_topic_0237122689_p21796511235"></a><a name="en-us_topic_0237122689_p21796511235"></a>Table name</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row3179651152318"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p11791251182310"><a name="en-us_topic_0237122689_p11791251182310"></a><a name="en-us_topic_0237122689_p11791251182310"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p81801851112312"><a name="en-us_topic_0237122689_p81801851112312"></a><a name="en-us_topic_0237122689_p81801851112312"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p1180135117234"><a name="en-us_topic_0237122689_p1180135117234"></a><a name="en-us_topic_0237122689_p1180135117234"></a>Number of disk blocks read from the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row16180951172312"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p7180115119237"><a name="en-us_topic_0237122689_p7180115119237"></a><a name="en-us_topic_0237122689_p7180115119237"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p8180951152314"><a name="en-us_topic_0237122689_p8180951152314"></a><a name="en-us_topic_0237122689_p8180951152314"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p6180185112231"><a name="en-us_topic_0237122689_p6180185112231"></a><a name="en-us_topic_0237122689_p6180185112231"></a>Number of cache hits in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row11809512237"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p6181165132315"><a name="en-us_topic_0237122689_p6181165132315"></a><a name="en-us_topic_0237122689_p6181165132315"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p191811251142315"><a name="en-us_topic_0237122689_p191811251142315"></a><a name="en-us_topic_0237122689_p191811251142315"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p9181135115232"><a name="en-us_topic_0237122689_p9181135115232"></a><a name="en-us_topic_0237122689_p9181135115232"></a>Number of disk blocks read from all indexes in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row91811551122310"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p141811051182317"><a name="en-us_topic_0237122689_p141811051182317"></a><a name="en-us_topic_0237122689_p141811051182317"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p018135172310"><a name="en-us_topic_0237122689_p018135172310"></a><a name="en-us_topic_0237122689_p018135172310"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p1818155110236"><a name="en-us_topic_0237122689_p1818155110236"></a><a name="en-us_topic_0237122689_p1818155110236"></a>Number of cache hits in the table </p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row418185110233"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p141811751172316"><a name="en-us_topic_0237122689_p141811751172316"></a><a name="en-us_topic_0237122689_p141811751172316"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p17182125113236"><a name="en-us_topic_0237122689_p17182125113236"></a><a name="en-us_topic_0237122689_p17182125113236"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p11821751132315"><a name="en-us_topic_0237122689_p11821751132315"></a><a name="en-us_topic_0237122689_p11821751132315"></a>Number of disk blocks read from the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row2182651142315"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p18182151152314"><a name="en-us_topic_0237122689_p18182151152314"></a><a name="en-us_topic_0237122689_p18182151152314"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p3182105102317"><a name="en-us_topic_0237122689_p3182105102317"></a><a name="en-us_topic_0237122689_p3182105102317"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p31826512239"><a name="en-us_topic_0237122689_p31826512239"></a><a name="en-us_topic_0237122689_p31826512239"></a>Number of buffer hits in the TOAST table (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row218215122318"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p518215517238"><a name="en-us_topic_0237122689_p518215517238"></a><a name="en-us_topic_0237122689_p518215517238"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p1818210517236"><a name="en-us_topic_0237122689_p1818210517236"></a><a name="en-us_topic_0237122689_p1818210517236"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p6183651172317"><a name="en-us_topic_0237122689_p6183651172317"></a><a name="en-us_topic_0237122689_p6183651172317"></a>Number of disk blocks read from the TOAST table index (if any) in the table</p>
</td>
</tr>
<tr id="en-us_topic_0237122689_row6183135142313"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122689_p17183751142313"><a name="en-us_topic_0237122689_p17183751142313"></a><a name="en-us_topic_0237122689_p17183751142313"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122689_p018312519239"><a name="en-us_topic_0237122689_p018312519239"></a><a name="en-us_topic_0237122689_p018312519239"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122689_p1018325119239"><a name="en-us_topic_0237122689_p1018325119239"></a><a name="en-us_topic_0237122689_p1018325119239"></a>Number of buffer-hits in the TOAST table index (if any) in the table</p>
</td>
</tr>
</tbody>
</table>

