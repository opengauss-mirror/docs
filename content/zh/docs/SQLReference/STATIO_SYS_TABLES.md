# STATIO\_SYS\_TABLES

STATIO\_SYS\_TABLES视图显示命名空间中所有系统表的IO状态信息。

**表 1**  STATIO\_SYS\_TABLES字段

<a name="zh-cn_topic_0237122678_table612712014149"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122678_row13248180141414"><th class="cellrowborder" valign="top" width="17.658234176582344%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122678_p62481808145"><a name="zh-cn_topic_0237122678_p62481808145"></a><a name="zh-cn_topic_0237122678_p62481808145"></a><strong id="zh-cn_topic_0237122678_b62481405148"><a name="zh-cn_topic_0237122678_b62481405148"></a><a name="zh-cn_topic_0237122678_b62481405148"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.71832816718328%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122678_p2248804143"><a name="zh-cn_topic_0237122678_p2248804143"></a><a name="zh-cn_topic_0237122678_p2248804143"></a><strong id="zh-cn_topic_0237122678_b424890101415"><a name="zh-cn_topic_0237122678_b424890101415"></a><a name="zh-cn_topic_0237122678_b424890101415"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.62343765623437%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122678_p824813017142"><a name="zh-cn_topic_0237122678_p824813017142"></a><a name="zh-cn_topic_0237122678_p824813017142"></a><strong id="zh-cn_topic_0237122678_b172495011144"><a name="zh-cn_topic_0237122678_b172495011144"></a><a name="zh-cn_topic_0237122678_b172495011144"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122678_row1224916010148"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p2249120181418"><a name="zh-cn_topic_0237122678_p2249120181418"></a><a name="zh-cn_topic_0237122678_p2249120181418"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p62491071418"><a name="zh-cn_topic_0237122678_p62491071418"></a><a name="zh-cn_topic_0237122678_p62491071418"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p324912011142"><a name="zh-cn_topic_0237122678_p324912011142"></a><a name="zh-cn_topic_0237122678_p324912011142"></a>表OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row8249100201411"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p92491703148"><a name="zh-cn_topic_0237122678_p92491703148"></a><a name="zh-cn_topic_0237122678_p92491703148"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p202496041414"><a name="zh-cn_topic_0237122678_p202496041414"></a><a name="zh-cn_topic_0237122678_p202496041414"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p102500061413"><a name="zh-cn_topic_0237122678_p102500061413"></a><a name="zh-cn_topic_0237122678_p102500061413"></a>该表模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row62507081418"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p17250110201418"><a name="zh-cn_topic_0237122678_p17250110201418"></a><a name="zh-cn_topic_0237122678_p17250110201418"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p162501807141"><a name="zh-cn_topic_0237122678_p162501807141"></a><a name="zh-cn_topic_0237122678_p162501807141"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p3250404140"><a name="zh-cn_topic_0237122678_p3250404140"></a><a name="zh-cn_topic_0237122678_p3250404140"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row62509019146"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p5250180121410"><a name="zh-cn_topic_0237122678_p5250180121410"></a><a name="zh-cn_topic_0237122678_p5250180121410"></a>heap_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p1325014017143"><a name="zh-cn_topic_0237122678_p1325014017143"></a><a name="zh-cn_topic_0237122678_p1325014017143"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p1025111031413"><a name="zh-cn_topic_0237122678_p1025111031413"></a><a name="zh-cn_topic_0237122678_p1025111031413"></a>从该表中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row1325117031418"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p16251180141419"><a name="zh-cn_topic_0237122678_p16251180141419"></a><a name="zh-cn_topic_0237122678_p16251180141419"></a>heap_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p525112071413"><a name="zh-cn_topic_0237122678_p525112071413"></a><a name="zh-cn_topic_0237122678_p525112071413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p1525112011149"><a name="zh-cn_topic_0237122678_p1525112011149"></a><a name="zh-cn_topic_0237122678_p1525112011149"></a>该表缓存命中数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row17251140141412"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p325115001414"><a name="zh-cn_topic_0237122678_p325115001414"></a><a name="zh-cn_topic_0237122678_p325115001414"></a>idx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p1425150141412"><a name="zh-cn_topic_0237122678_p1425150141412"></a><a name="zh-cn_topic_0237122678_p1425150141412"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p42511071416"><a name="zh-cn_topic_0237122678_p42511071416"></a><a name="zh-cn_topic_0237122678_p42511071416"></a>从表中所有索引读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row152514071411"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p112521905148"><a name="zh-cn_topic_0237122678_p112521905148"></a><a name="zh-cn_topic_0237122678_p112521905148"></a>idx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p1225215061415"><a name="zh-cn_topic_0237122678_p1225215061415"></a><a name="zh-cn_topic_0237122678_p1225215061415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p92523051413"><a name="zh-cn_topic_0237122678_p92523051413"></a><a name="zh-cn_topic_0237122678_p92523051413"></a>表中所有索引命中缓存数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row225210091415"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p12252100151417"><a name="zh-cn_topic_0237122678_p12252100151417"></a><a name="zh-cn_topic_0237122678_p12252100151417"></a>toast_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p82520051411"><a name="zh-cn_topic_0237122678_p82520051411"></a><a name="zh-cn_topic_0237122678_p82520051411"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p725217051414"><a name="zh-cn_topic_0237122678_p725217051414"></a><a name="zh-cn_topic_0237122678_p725217051414"></a>该表的TOAST表读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row1225210031411"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p625219019144"><a name="zh-cn_topic_0237122678_p625219019144"></a><a name="zh-cn_topic_0237122678_p625219019144"></a>toast_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p17252403145"><a name="zh-cn_topic_0237122678_p17252403145"></a><a name="zh-cn_topic_0237122678_p17252403145"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p9253180161419"><a name="zh-cn_topic_0237122678_p9253180161419"></a><a name="zh-cn_topic_0237122678_p9253180161419"></a>该表的TOAST表命中缓冲区数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row17253103149"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p10253130171411"><a name="zh-cn_topic_0237122678_p10253130171411"></a><a name="zh-cn_topic_0237122678_p10253130171411"></a>tidx_blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p192530010145"><a name="zh-cn_topic_0237122678_p192530010145"></a><a name="zh-cn_topic_0237122678_p192530010145"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p525314018148"><a name="zh-cn_topic_0237122678_p525314018148"></a><a name="zh-cn_topic_0237122678_p525314018148"></a>该表的TOAST表索引读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122678_row525315017149"><td class="cellrowborder" valign="top" width="17.658234176582344%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122678_p152534013143"><a name="zh-cn_topic_0237122678_p152534013143"></a><a name="zh-cn_topic_0237122678_p152534013143"></a>tidx_blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="16.71832816718328%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122678_p17253503144"><a name="zh-cn_topic_0237122678_p17253503144"></a><a name="zh-cn_topic_0237122678_p17253503144"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.62343765623437%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122678_p525316051411"><a name="zh-cn_topic_0237122678_p525316051411"></a><a name="zh-cn_topic_0237122678_p525316051411"></a>该表的TOAST表索引命中缓冲区数（如果存在）。</p>
</td>
</tr>
</tbody>
</table>

