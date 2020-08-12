# SUMMARY\_STAT\_ALL\_TABLES<a name="ZH-CN_TOPIC_0245374693"></a>

openGauss内汇聚数据库中每个表的一行（包括TOAST表）的统计信息。

**表 1**  SUMMARY\_STAT\_ALL\_TABLES字段

<a name="zh-cn_topic_0237122589_table94001310104614"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122589_row1761211108466"><th class="cellrowborder" valign="top" width="23.05%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122589_p26121310184610"><a name="zh-cn_topic_0237122589_p26121310184610"></a><a name="zh-cn_topic_0237122589_p26121310184610"></a><strong id="zh-cn_topic_0237122589_b13612191094610"><a name="zh-cn_topic_0237122589_b13612191094610"></a><a name="zh-cn_topic_0237122589_b13612191094610"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.04%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122589_p13612151019460"><a name="zh-cn_topic_0237122589_p13612151019460"></a><a name="zh-cn_topic_0237122589_p13612151019460"></a><strong id="zh-cn_topic_0237122589_b116127108468"><a name="zh-cn_topic_0237122589_b116127108468"></a><a name="zh-cn_topic_0237122589_b116127108468"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="49.91%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122589_p26120107465"><a name="zh-cn_topic_0237122589_p26120107465"></a><a name="zh-cn_topic_0237122589_p26120107465"></a><strong id="zh-cn_topic_0237122589_b106121110194616"><a name="zh-cn_topic_0237122589_b106121110194616"></a><a name="zh-cn_topic_0237122589_b106121110194616"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122589_row961311084618"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p13613111018467"><a name="zh-cn_topic_0237122589_p13613111018467"></a><a name="zh-cn_topic_0237122589_p13613111018467"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p1761312109467"><a name="zh-cn_topic_0237122589_p1761312109467"></a><a name="zh-cn_topic_0237122589_p1761312109467"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p3613171044616"><a name="zh-cn_topic_0237122589_p3613171044616"></a><a name="zh-cn_topic_0237122589_p3613171044616"></a>此表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row18613710114613"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p16131510144615"><a name="zh-cn_topic_0237122589_p16131510144615"></a><a name="zh-cn_topic_0237122589_p16131510144615"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p196131310144610"><a name="zh-cn_topic_0237122589_p196131310144610"></a><a name="zh-cn_topic_0237122589_p196131310144610"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p8613191064610"><a name="zh-cn_topic_0237122589_p8613191064610"></a><a name="zh-cn_topic_0237122589_p8613191064610"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row1361391015466"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p461321014618"><a name="zh-cn_topic_0237122589_p461321014618"></a><a name="zh-cn_topic_0237122589_p461321014618"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p16141510194612"><a name="zh-cn_topic_0237122589_p16141510194612"></a><a name="zh-cn_topic_0237122589_p16141510194612"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p1661419105467"><a name="zh-cn_topic_0237122589_p1661419105467"></a><a name="zh-cn_topic_0237122589_p1661419105467"></a>此表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row8614110124610"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p861771013465"><a name="zh-cn_topic_0237122589_p861771013465"></a><a name="zh-cn_topic_0237122589_p861771013465"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p14617171014613"><a name="zh-cn_topic_0237122589_p14617171014613"></a><a name="zh-cn_topic_0237122589_p14617171014613"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p13617131064616"><a name="zh-cn_topic_0237122589_p13617131064616"></a><a name="zh-cn_topic_0237122589_p13617131064616"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row961719108463"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p1961713108463"><a name="zh-cn_topic_0237122589_p1961713108463"></a><a name="zh-cn_topic_0237122589_p1961713108463"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p161701010466"><a name="zh-cn_topic_0237122589_p161701010466"></a><a name="zh-cn_topic_0237122589_p161701010466"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p161817102469"><a name="zh-cn_topic_0237122589_p161817102469"></a><a name="zh-cn_topic_0237122589_p161817102469"></a>此表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row861851013466"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p4618111084615"><a name="zh-cn_topic_0237122589_p4618111084615"></a><a name="zh-cn_topic_0237122589_p4618111084615"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p19618201094611"><a name="zh-cn_topic_0237122589_p19618201094611"></a><a name="zh-cn_topic_0237122589_p19618201094611"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p4618161094618"><a name="zh-cn_topic_0237122589_p4618161094618"></a><a name="zh-cn_topic_0237122589_p4618161094618"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row261881054617"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p1361810107461"><a name="zh-cn_topic_0237122589_p1361810107461"></a><a name="zh-cn_topic_0237122589_p1361810107461"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p1261971074618"><a name="zh-cn_topic_0237122589_p1261971074618"></a><a name="zh-cn_topic_0237122589_p1261971074618"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p13619610174612"><a name="zh-cn_topic_0237122589_p13619610174612"></a><a name="zh-cn_topic_0237122589_p13619610174612"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row17619181016463"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p1361911104461"><a name="zh-cn_topic_0237122589_p1361911104461"></a><a name="zh-cn_topic_0237122589_p1361911104461"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p861911018469"><a name="zh-cn_topic_0237122589_p861911018469"></a><a name="zh-cn_topic_0237122589_p861911018469"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p5619161004610"><a name="zh-cn_topic_0237122589_p5619161004610"></a><a name="zh-cn_topic_0237122589_p5619161004610"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row7619131015468"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p1961911034614"><a name="zh-cn_topic_0237122589_p1961911034614"></a><a name="zh-cn_topic_0237122589_p1961911034614"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p11619141017461"><a name="zh-cn_topic_0237122589_p11619141017461"></a><a name="zh-cn_topic_0237122589_p11619141017461"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p136191310174618"><a name="zh-cn_topic_0237122589_p136191310174618"></a><a name="zh-cn_topic_0237122589_p136191310174618"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row5620610144615"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p166201110144619"><a name="zh-cn_topic_0237122589_p166201110144619"></a><a name="zh-cn_topic_0237122589_p166201110144619"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p1962011010466"><a name="zh-cn_topic_0237122589_p1962011010466"></a><a name="zh-cn_topic_0237122589_p1962011010466"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p4620210194611"><a name="zh-cn_topic_0237122589_p4620210194611"></a><a name="zh-cn_topic_0237122589_p4620210194611"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row4620410174616"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p126201010174618"><a name="zh-cn_topic_0237122589_p126201010174618"></a><a name="zh-cn_topic_0237122589_p126201010174618"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p262041017462"><a name="zh-cn_topic_0237122589_p262041017462"></a><a name="zh-cn_topic_0237122589_p262041017462"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p17620111004614"><a name="zh-cn_topic_0237122589_p17620111004614"></a><a name="zh-cn_topic_0237122589_p17620111004614"></a>估计活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row6620171020468"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p17620131016466"><a name="zh-cn_topic_0237122589_p17620131016466"></a><a name="zh-cn_topic_0237122589_p17620131016466"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p20621710144618"><a name="zh-cn_topic_0237122589_p20621710144618"></a><a name="zh-cn_topic_0237122589_p20621710144618"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p162121004618"><a name="zh-cn_topic_0237122589_p162121004618"></a><a name="zh-cn_topic_0237122589_p162121004618"></a>估计死行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row962181015462"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p1062161024620"><a name="zh-cn_topic_0237122589_p1062161024620"></a><a name="zh-cn_topic_0237122589_p1062161024620"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p4621010184618"><a name="zh-cn_topic_0237122589_p4621010184618"></a><a name="zh-cn_topic_0237122589_p4621010184618"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p1462151012468"><a name="zh-cn_topic_0237122589_p1462151012468"></a><a name="zh-cn_topic_0237122589_p1462151012468"></a>最后一次此表是手动清理的（不计算VACUUM FULL）的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row17621110134610"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p14621210134612"><a name="zh-cn_topic_0237122589_p14621210134612"></a><a name="zh-cn_topic_0237122589_p14621210134612"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p862171016461"><a name="zh-cn_topic_0237122589_p862171016461"></a><a name="zh-cn_topic_0237122589_p862171016461"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p3622710154617"><a name="zh-cn_topic_0237122589_p3622710154617"></a><a name="zh-cn_topic_0237122589_p3622710154617"></a>上次被autovacuum守护进程清理的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row1562261074616"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p2622101016467"><a name="zh-cn_topic_0237122589_p2622101016467"></a><a name="zh-cn_topic_0237122589_p2622101016467"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p14622110134611"><a name="zh-cn_topic_0237122589_p14622110134611"></a><a name="zh-cn_topic_0237122589_p14622110134611"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p136226104468"><a name="zh-cn_topic_0237122589_p136226104468"></a><a name="zh-cn_topic_0237122589_p136226104468"></a>上次手动分析这个表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row1762281064619"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p196221102469"><a name="zh-cn_topic_0237122589_p196221102469"></a><a name="zh-cn_topic_0237122589_p196221102469"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p462261012464"><a name="zh-cn_topic_0237122589_p462261012464"></a><a name="zh-cn_topic_0237122589_p462261012464"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p11622210154618"><a name="zh-cn_topic_0237122589_p11622210154618"></a><a name="zh-cn_topic_0237122589_p11622210154618"></a>上次被autovacuum守护进程分析时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row18623151019461"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p962320108468"><a name="zh-cn_topic_0237122589_p962320108468"></a><a name="zh-cn_topic_0237122589_p962320108468"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p8623191015460"><a name="zh-cn_topic_0237122589_p8623191015460"></a><a name="zh-cn_topic_0237122589_p8623191015460"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p962391024615"><a name="zh-cn_topic_0237122589_p962391024615"></a><a name="zh-cn_topic_0237122589_p962391024615"></a>这个表被手动清理的次数（不计算VACUUM FULL）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row15623010184615"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p76235101461"><a name="zh-cn_topic_0237122589_p76235101461"></a><a name="zh-cn_topic_0237122589_p76235101461"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p462331054618"><a name="zh-cn_topic_0237122589_p462331054618"></a><a name="zh-cn_topic_0237122589_p462331054618"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p196231410154616"><a name="zh-cn_topic_0237122589_p196231410154616"></a><a name="zh-cn_topic_0237122589_p196231410154616"></a>这个表被autovacuum清理的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row1162391014462"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p156241410134619"><a name="zh-cn_topic_0237122589_p156241410134619"></a><a name="zh-cn_topic_0237122589_p156241410134619"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p9624910104617"><a name="zh-cn_topic_0237122589_p9624910104617"></a><a name="zh-cn_topic_0237122589_p9624910104617"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p06241110104615"><a name="zh-cn_topic_0237122589_p06241110104615"></a><a name="zh-cn_topic_0237122589_p06241110104615"></a>这个表被手动分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122589_row9624310174618"><td class="cellrowborder" valign="top" width="23.05%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122589_p3624161034613"><a name="zh-cn_topic_0237122589_p3624161034613"></a><a name="zh-cn_topic_0237122589_p3624161034613"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.04%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122589_p1262481016466"><a name="zh-cn_topic_0237122589_p1262481016466"></a><a name="zh-cn_topic_0237122589_p1262481016466"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="49.91%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122589_p1624171015464"><a name="zh-cn_topic_0237122589_p1624171015464"></a><a name="zh-cn_topic_0237122589_p1624171015464"></a>这个表被autovacuum守护进程分析的次数。</p>
</td>
</tr>
</tbody>
</table>

