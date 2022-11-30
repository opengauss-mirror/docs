# STAT\_ALL\_TABLES<a name="ZH-CN_TOPIC_0245374692"></a>

本节点内数据库中每个表（包括TOAST表）的一行的统计信息。

**表 1**  STAT\_ALL\_TABLES字段

<a name="zh-cn_topic_0237122588_table81151723114516"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122588_row16340142315451"><th class="cellrowborder" valign="top" width="20.150000000000002%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122588_p103408232451"><a name="zh-cn_topic_0237122588_p103408232451"></a><a name="zh-cn_topic_0237122588_p103408232451"></a><strong id="zh-cn_topic_0237122588_b93404238453"><a name="zh-cn_topic_0237122588_b93404238453"></a><a name="zh-cn_topic_0237122588_b93404238453"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="27.12%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122588_p4340623134519"><a name="zh-cn_topic_0237122588_p4340623134519"></a><a name="zh-cn_topic_0237122588_p4340623134519"></a><strong id="zh-cn_topic_0237122588_b7340123194512"><a name="zh-cn_topic_0237122588_b7340123194512"></a><a name="zh-cn_topic_0237122588_b7340123194512"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="52.73%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122588_p16340823184519"><a name="zh-cn_topic_0237122588_p16340823184519"></a><a name="zh-cn_topic_0237122588_p16340823184519"></a><strong id="zh-cn_topic_0237122588_b2341323144519"><a name="zh-cn_topic_0237122588_b2341323144519"></a><a name="zh-cn_topic_0237122588_b2341323144519"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122588_row3341723164517"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p1634117237452"><a name="zh-cn_topic_0237122588_p1634117237452"></a><a name="zh-cn_topic_0237122588_p1634117237452"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p3341172334511"><a name="zh-cn_topic_0237122588_p3341172334511"></a><a name="zh-cn_topic_0237122588_p3341172334511"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p134152314511"><a name="zh-cn_topic_0237122588_p134152314511"></a><a name="zh-cn_topic_0237122588_p134152314511"></a>表的OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row1334152313456"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p10341323204517"><a name="zh-cn_topic_0237122588_p10341323204517"></a><a name="zh-cn_topic_0237122588_p10341323204517"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p1934112315453"><a name="zh-cn_topic_0237122588_p1934112315453"></a><a name="zh-cn_topic_0237122588_p1934112315453"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p93411923194513"><a name="zh-cn_topic_0237122588_p93411923194513"></a><a name="zh-cn_topic_0237122588_p93411923194513"></a>该表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row634192334518"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p834152311458"><a name="zh-cn_topic_0237122588_p834152311458"></a><a name="zh-cn_topic_0237122588_p834152311458"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p134215235455"><a name="zh-cn_topic_0237122588_p134215235455"></a><a name="zh-cn_topic_0237122588_p134215235455"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p1342182311451"><a name="zh-cn_topic_0237122588_p1342182311451"></a><a name="zh-cn_topic_0237122588_p1342182311451"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row0342223124519"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p83421623184516"><a name="zh-cn_topic_0237122588_p83421623184516"></a><a name="zh-cn_topic_0237122588_p83421623184516"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p73421123134513"><a name="zh-cn_topic_0237122588_p73421123134513"></a><a name="zh-cn_topic_0237122588_p73421123134513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p13342182394510"><a name="zh-cn_topic_0237122588_p13342182394510"></a><a name="zh-cn_topic_0237122588_p13342182394510"></a>该表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row53421233458"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p4342132314510"><a name="zh-cn_topic_0237122588_p4342132314510"></a><a name="zh-cn_topic_0237122588_p4342132314510"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p43421323104518"><a name="zh-cn_topic_0237122588_p43421323104518"></a><a name="zh-cn_topic_0237122588_p43421323104518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p9342323104517"><a name="zh-cn_topic_0237122588_p9342323104517"></a><a name="zh-cn_topic_0237122588_p9342323104517"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row153421823194515"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p8343152312452"><a name="zh-cn_topic_0237122588_p8343152312452"></a><a name="zh-cn_topic_0237122588_p8343152312452"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p83431523124520"><a name="zh-cn_topic_0237122588_p83431523124520"></a><a name="zh-cn_topic_0237122588_p83431523124520"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p434318237453"><a name="zh-cn_topic_0237122588_p434318237453"></a><a name="zh-cn_topic_0237122588_p434318237453"></a>该表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row7343132374513"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p6343923124511"><a name="zh-cn_topic_0237122588_p6343923124511"></a><a name="zh-cn_topic_0237122588_p6343923124511"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p83431723104515"><a name="zh-cn_topic_0237122588_p83431723104515"></a><a name="zh-cn_topic_0237122588_p83431723104515"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p1634317232458"><a name="zh-cn_topic_0237122588_p1634317232458"></a><a name="zh-cn_topic_0237122588_p1634317232458"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row4343192318455"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p9343923134514"><a name="zh-cn_topic_0237122588_p9343923134514"></a><a name="zh-cn_topic_0237122588_p9343923134514"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p1734332313457"><a name="zh-cn_topic_0237122588_p1734332313457"></a><a name="zh-cn_topic_0237122588_p1734332313457"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p33431223174510"><a name="zh-cn_topic_0237122588_p33431223174510"></a><a name="zh-cn_topic_0237122588_p33431223174510"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row1334402320454"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p123441923204512"><a name="zh-cn_topic_0237122588_p123441923204512"></a><a name="zh-cn_topic_0237122588_p123441923204512"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p93448236457"><a name="zh-cn_topic_0237122588_p93448236457"></a><a name="zh-cn_topic_0237122588_p93448236457"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p1434462315458"><a name="zh-cn_topic_0237122588_p1434462315458"></a><a name="zh-cn_topic_0237122588_p1434462315458"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row3344132384510"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p43441523184511"><a name="zh-cn_topic_0237122588_p43441523184511"></a><a name="zh-cn_topic_0237122588_p43441523184511"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p434442312458"><a name="zh-cn_topic_0237122588_p434442312458"></a><a name="zh-cn_topic_0237122588_p434442312458"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p5344102374512"><a name="zh-cn_topic_0237122588_p5344102374512"></a><a name="zh-cn_topic_0237122588_p5344102374512"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row20344823134513"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p16344132324514"><a name="zh-cn_topic_0237122588_p16344132324514"></a><a name="zh-cn_topic_0237122588_p16344132324514"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p18344182364518"><a name="zh-cn_topic_0237122588_p18344182364518"></a><a name="zh-cn_topic_0237122588_p18344182364518"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p153454237458"><a name="zh-cn_topic_0237122588_p153454237458"></a><a name="zh-cn_topic_0237122588_p153454237458"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row193451423194515"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p7345102315451"><a name="zh-cn_topic_0237122588_p7345102315451"></a><a name="zh-cn_topic_0237122588_p7345102315451"></a>n_live_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p834582316457"><a name="zh-cn_topic_0237122588_p834582316457"></a><a name="zh-cn_topic_0237122588_p834582316457"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p0345152314516"><a name="zh-cn_topic_0237122588_p0345152314516"></a><a name="zh-cn_topic_0237122588_p0345152314516"></a>估计活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row153453232451"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p1334514232455"><a name="zh-cn_topic_0237122588_p1334514232455"></a><a name="zh-cn_topic_0237122588_p1334514232455"></a>n_dead_tup</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p03457238453"><a name="zh-cn_topic_0237122588_p03457238453"></a><a name="zh-cn_topic_0237122588_p03457238453"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p63458236452"><a name="zh-cn_topic_0237122588_p63458236452"></a><a name="zh-cn_topic_0237122588_p63458236452"></a>估计死行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row1234572344516"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p1234517236454"><a name="zh-cn_topic_0237122588_p1234517236454"></a><a name="zh-cn_topic_0237122588_p1234517236454"></a>last_vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p18346823134517"><a name="zh-cn_topic_0237122588_p18346823134517"></a><a name="zh-cn_topic_0237122588_p18346823134517"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p9346623134514"><a name="zh-cn_topic_0237122588_p9346623134514"></a><a name="zh-cn_topic_0237122588_p9346623134514"></a>最后一次该表是手动清理的（不计算VACUUM FULL）的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row8346112314515"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p3346112317459"><a name="zh-cn_topic_0237122588_p3346112317459"></a><a name="zh-cn_topic_0237122588_p3346112317459"></a>last_autovacuum</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p183461423124514"><a name="zh-cn_topic_0237122588_p183461423124514"></a><a name="zh-cn_topic_0237122588_p183461423124514"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p534672315453"><a name="zh-cn_topic_0237122588_p534672315453"></a><a name="zh-cn_topic_0237122588_p534672315453"></a>上次被autovacuum守护进程清理的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row43464237455"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p11346162394518"><a name="zh-cn_topic_0237122588_p11346162394518"></a><a name="zh-cn_topic_0237122588_p11346162394518"></a>last_analyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p734652316459"><a name="zh-cn_topic_0237122588_p734652316459"></a><a name="zh-cn_topic_0237122588_p734652316459"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p1034611239450"><a name="zh-cn_topic_0237122588_p1034611239450"></a><a name="zh-cn_topic_0237122588_p1034611239450"></a>上次手动分析该表的时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row14346122310456"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p23465232452"><a name="zh-cn_topic_0237122588_p23465232452"></a><a name="zh-cn_topic_0237122588_p23465232452"></a>last_autoanalyze</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p1534722319455"><a name="zh-cn_topic_0237122588_p1534722319455"></a><a name="zh-cn_topic_0237122588_p1534722319455"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p8347162317450"><a name="zh-cn_topic_0237122588_p8347162317450"></a><a name="zh-cn_topic_0237122588_p8347162317450"></a>上次被autovacuum守护进程分析时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row1134722311459"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p1434732317454"><a name="zh-cn_topic_0237122588_p1434732317454"></a><a name="zh-cn_topic_0237122588_p1434732317454"></a>vacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p73471723114513"><a name="zh-cn_topic_0237122588_p73471723114513"></a><a name="zh-cn_topic_0237122588_p73471723114513"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p434762334514"><a name="zh-cn_topic_0237122588_p434762334514"></a><a name="zh-cn_topic_0237122588_p434762334514"></a>该表被手动清理的次数（不计算VACUUM FULL）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row93471723184520"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p103471223154519"><a name="zh-cn_topic_0237122588_p103471223154519"></a><a name="zh-cn_topic_0237122588_p103471223154519"></a>autovacuum_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p034792315454"><a name="zh-cn_topic_0237122588_p034792315454"></a><a name="zh-cn_topic_0237122588_p034792315454"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p5347202384519"><a name="zh-cn_topic_0237122588_p5347202384519"></a><a name="zh-cn_topic_0237122588_p5347202384519"></a>该表被autovacuum清理的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row6347132316459"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p1234812235451"><a name="zh-cn_topic_0237122588_p1234812235451"></a><a name="zh-cn_topic_0237122588_p1234812235451"></a>analyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p18348523104517"><a name="zh-cn_topic_0237122588_p18348523104517"></a><a name="zh-cn_topic_0237122588_p18348523104517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p19348182314515"><a name="zh-cn_topic_0237122588_p19348182314515"></a><a name="zh-cn_topic_0237122588_p19348182314515"></a>该表被手动分析的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122588_row15348923144520"><td class="cellrowborder" valign="top" width="20.150000000000002%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122588_p73481823104511"><a name="zh-cn_topic_0237122588_p73481823104511"></a><a name="zh-cn_topic_0237122588_p73481823104511"></a>autoanalyze_count</p>
</td>
<td class="cellrowborder" valign="top" width="27.12%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122588_p1034892320451"><a name="zh-cn_topic_0237122588_p1034892320451"></a><a name="zh-cn_topic_0237122588_p1034892320451"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="52.73%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122588_p1334882317453"><a name="zh-cn_topic_0237122588_p1334882317453"></a><a name="zh-cn_topic_0237122588_p1334882317453"></a>该表被autovacuum守护进程分析的次数。</p>
</td>
</tr>
</tbody>
</table>
