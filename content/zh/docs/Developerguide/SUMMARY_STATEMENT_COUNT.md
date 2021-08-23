# SUMMARY\_STATEMENT\_COUNT<a name="ZH-CN_TOPIC_0245374762"></a>

显示数据库汇聚各节点（数据库节点）当前时刻执行的五类语句（SELECT、INSERT、UPDATE、DELETE、MERGE INTO）和（DDL、DML、DCL）统计信息。

**表 1**  SUMMARY\_STATEMENT\_COUNT字段

<a name="zh-cn_topic_0237122658_table1574472419574"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122658_row1285442410577"><th class="cellrowborder" valign="top" width="28.57%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122658_p1285442435717"><a name="zh-cn_topic_0237122658_p1285442435717"></a><a name="zh-cn_topic_0237122658_p1285442435717"></a><strong id="zh-cn_topic_0237122658_b1585422405711"><a name="zh-cn_topic_0237122658_b1585422405711"></a><a name="zh-cn_topic_0237122658_b1585422405711"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.35%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122658_p4854132445718"><a name="zh-cn_topic_0237122658_p4854132445718"></a><a name="zh-cn_topic_0237122658_p4854132445718"></a><strong id="zh-cn_topic_0237122658_b12854924205716"><a name="zh-cn_topic_0237122658_b12854924205716"></a><a name="zh-cn_topic_0237122658_b12854924205716"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="53.080000000000005%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122658_p1085582415579"><a name="zh-cn_topic_0237122658_p1085582415579"></a><a name="zh-cn_topic_0237122658_p1085582415579"></a><strong id="zh-cn_topic_0237122658_b11855202413573"><a name="zh-cn_topic_0237122658_b11855202413573"></a><a name="zh-cn_topic_0237122658_b11855202413573"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122658_row385592455710"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p1485532412576"><a name="zh-cn_topic_0237122658_p1485532412576"></a><a name="zh-cn_topic_0237122658_p1485532412576"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p188561245575"><a name="zh-cn_topic_0237122658_p188561245575"></a><a name="zh-cn_topic_0237122658_p188561245575"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p885620241573"><a name="zh-cn_topic_0237122658_p885620241573"></a><a name="zh-cn_topic_0237122658_p885620241573"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row285614248577"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p2085622455716"><a name="zh-cn_topic_0237122658_p2085622455716"></a><a name="zh-cn_topic_0237122658_p2085622455716"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p985692465712"><a name="zh-cn_topic_0237122658_p985692465712"></a><a name="zh-cn_topic_0237122658_p985692465712"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p18856124105710"><a name="zh-cn_topic_0237122658_p18856124105710"></a><a name="zh-cn_topic_0237122658_p18856124105710"></a>select语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row198561524155717"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p1485612420573"><a name="zh-cn_topic_0237122658_p1485612420573"></a><a name="zh-cn_topic_0237122658_p1485612420573"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p1385622420570"><a name="zh-cn_topic_0237122658_p1385622420570"></a><a name="zh-cn_topic_0237122658_p1385622420570"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p118561524155712"><a name="zh-cn_topic_0237122658_p118561524155712"></a><a name="zh-cn_topic_0237122658_p118561524155712"></a>update语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row198561424125716"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p19856112485713"><a name="zh-cn_topic_0237122658_p19856112485713"></a><a name="zh-cn_topic_0237122658_p19856112485713"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p178561524105720"><a name="zh-cn_topic_0237122658_p178561524105720"></a><a name="zh-cn_topic_0237122658_p178561524105720"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p1285662465715"><a name="zh-cn_topic_0237122658_p1285662465715"></a><a name="zh-cn_topic_0237122658_p1285662465715"></a>insert语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row19856122495718"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p1085618247571"><a name="zh-cn_topic_0237122658_p1085618247571"></a><a name="zh-cn_topic_0237122658_p1085618247571"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p3856424105711"><a name="zh-cn_topic_0237122658_p3856424105711"></a><a name="zh-cn_topic_0237122658_p3856424105711"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p0856624165718"><a name="zh-cn_topic_0237122658_p0856624165718"></a><a name="zh-cn_topic_0237122658_p0856624165718"></a>delete语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row8856172417573"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p385662414578"><a name="zh-cn_topic_0237122658_p385662414578"></a><a name="zh-cn_topic_0237122658_p385662414578"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p1285632425717"><a name="zh-cn_topic_0237122658_p1285632425717"></a><a name="zh-cn_topic_0237122658_p1285632425717"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p2857142419572"><a name="zh-cn_topic_0237122658_p2857142419572"></a><a name="zh-cn_topic_0237122658_p2857142419572"></a>merge into语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row17857172411578"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p8857924195713"><a name="zh-cn_topic_0237122658_p8857924195713"></a><a name="zh-cn_topic_0237122658_p8857924195713"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p0857202415713"><a name="zh-cn_topic_0237122658_p0857202415713"></a><a name="zh-cn_topic_0237122658_p0857202415713"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p13857172485712"><a name="zh-cn_topic_0237122658_p13857172485712"></a><a name="zh-cn_topic_0237122658_p13857172485712"></a>DDL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row1485752411577"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p1285712445720"><a name="zh-cn_topic_0237122658_p1285712445720"></a><a name="zh-cn_topic_0237122658_p1285712445720"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p78571124145718"><a name="zh-cn_topic_0237122658_p78571124145718"></a><a name="zh-cn_topic_0237122658_p78571124145718"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p168572024125720"><a name="zh-cn_topic_0237122658_p168572024125720"></a><a name="zh-cn_topic_0237122658_p168572024125720"></a>DML语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row16857224135711"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p885714242577"><a name="zh-cn_topic_0237122658_p885714242577"></a><a name="zh-cn_topic_0237122658_p885714242577"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p198574247570"><a name="zh-cn_topic_0237122658_p198574247570"></a><a name="zh-cn_topic_0237122658_p198574247570"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p685772455713"><a name="zh-cn_topic_0237122658_p685772455713"></a><a name="zh-cn_topic_0237122658_p685772455713"></a>DCL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row118571724115719"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p13857124195711"><a name="zh-cn_topic_0237122658_p13857124195711"></a><a name="zh-cn_topic_0237122658_p13857124195711"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p28571524165712"><a name="zh-cn_topic_0237122658_p28571524165712"></a><a name="zh-cn_topic_0237122658_p28571524165712"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p885713245576"><a name="zh-cn_topic_0237122658_p885713245576"></a><a name="zh-cn_topic_0237122658_p885713245576"></a>总select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row985712245573"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p985742418575"><a name="zh-cn_topic_0237122658_p985742418575"></a><a name="zh-cn_topic_0237122658_p985742418575"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p085762416578"><a name="zh-cn_topic_0237122658_p085762416578"></a><a name="zh-cn_topic_0237122658_p085762416578"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p14857324195713"><a name="zh-cn_topic_0237122658_p14857324195713"></a><a name="zh-cn_topic_0237122658_p14857324195713"></a>平均select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row585742415576"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p13857142485711"><a name="zh-cn_topic_0237122658_p13857142485711"></a><a name="zh-cn_topic_0237122658_p13857142485711"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p08571424105712"><a name="zh-cn_topic_0237122658_p08571424105712"></a><a name="zh-cn_topic_0237122658_p08571424105712"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p98573240570"><a name="zh-cn_topic_0237122658_p98573240570"></a><a name="zh-cn_topic_0237122658_p98573240570"></a>最大select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row14857724205719"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p385762455712"><a name="zh-cn_topic_0237122658_p385762455712"></a><a name="zh-cn_topic_0237122658_p385762455712"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p11858824155718"><a name="zh-cn_topic_0237122658_p11858824155718"></a><a name="zh-cn_topic_0237122658_p11858824155718"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p1085872418574"><a name="zh-cn_topic_0237122658_p1085872418574"></a><a name="zh-cn_topic_0237122658_p1085872418574"></a>最小select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row2085862415571"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p285882485713"><a name="zh-cn_topic_0237122658_p285882485713"></a><a name="zh-cn_topic_0237122658_p285882485713"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p3858112415712"><a name="zh-cn_topic_0237122658_p3858112415712"></a><a name="zh-cn_topic_0237122658_p3858112415712"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p585842455712"><a name="zh-cn_topic_0237122658_p585842455712"></a><a name="zh-cn_topic_0237122658_p585842455712"></a>总update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row385810243572"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p158581024185711"><a name="zh-cn_topic_0237122658_p158581024185711"></a><a name="zh-cn_topic_0237122658_p158581024185711"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p185815248572"><a name="zh-cn_topic_0237122658_p185815248572"></a><a name="zh-cn_topic_0237122658_p185815248572"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p15858424185710"><a name="zh-cn_topic_0237122658_p15858424185710"></a><a name="zh-cn_topic_0237122658_p15858424185710"></a>平均update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row0858102410575"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p16858824145719"><a name="zh-cn_topic_0237122658_p16858824145719"></a><a name="zh-cn_topic_0237122658_p16858824145719"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p98582024105716"><a name="zh-cn_topic_0237122658_p98582024105716"></a><a name="zh-cn_topic_0237122658_p98582024105716"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p68587240579"><a name="zh-cn_topic_0237122658_p68587240579"></a><a name="zh-cn_topic_0237122658_p68587240579"></a>最大update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row98581124185714"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p12858112465715"><a name="zh-cn_topic_0237122658_p12858112465715"></a><a name="zh-cn_topic_0237122658_p12858112465715"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p14858152465715"><a name="zh-cn_topic_0237122658_p14858152465715"></a><a name="zh-cn_topic_0237122658_p14858152465715"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p585882435712"><a name="zh-cn_topic_0237122658_p585882435712"></a><a name="zh-cn_topic_0237122658_p585882435712"></a>最小update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row0858112405715"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p14858152485719"><a name="zh-cn_topic_0237122658_p14858152485719"></a><a name="zh-cn_topic_0237122658_p14858152485719"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p9858102465713"><a name="zh-cn_topic_0237122658_p9858102465713"></a><a name="zh-cn_topic_0237122658_p9858102465713"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p285862475711"><a name="zh-cn_topic_0237122658_p285862475711"></a><a name="zh-cn_topic_0237122658_p285862475711"></a>总insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row885818240578"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p1285802445717"><a name="zh-cn_topic_0237122658_p1285802445717"></a><a name="zh-cn_topic_0237122658_p1285802445717"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p18591624145719"><a name="zh-cn_topic_0237122658_p18591624145719"></a><a name="zh-cn_topic_0237122658_p18591624145719"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p1285962417571"><a name="zh-cn_topic_0237122658_p1285962417571"></a><a name="zh-cn_topic_0237122658_p1285962417571"></a>平均insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row16859124135715"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p17859142415717"><a name="zh-cn_topic_0237122658_p17859142415717"></a><a name="zh-cn_topic_0237122658_p17859142415717"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p1485912445710"><a name="zh-cn_topic_0237122658_p1485912445710"></a><a name="zh-cn_topic_0237122658_p1485912445710"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p138591824205711"><a name="zh-cn_topic_0237122658_p138591824205711"></a><a name="zh-cn_topic_0237122658_p138591824205711"></a>最大insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row78591824185715"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p18592024135716"><a name="zh-cn_topic_0237122658_p18592024135716"></a><a name="zh-cn_topic_0237122658_p18592024135716"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p138591424175719"><a name="zh-cn_topic_0237122658_p138591424175719"></a><a name="zh-cn_topic_0237122658_p138591424175719"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p13859624165717"><a name="zh-cn_topic_0237122658_p13859624165717"></a><a name="zh-cn_topic_0237122658_p13859624165717"></a>最小insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row10859824145717"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p1185912246576"><a name="zh-cn_topic_0237122658_p1185912246576"></a><a name="zh-cn_topic_0237122658_p1185912246576"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p5859152495714"><a name="zh-cn_topic_0237122658_p5859152495714"></a><a name="zh-cn_topic_0237122658_p5859152495714"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p17859324185716"><a name="zh-cn_topic_0237122658_p17859324185716"></a><a name="zh-cn_topic_0237122658_p17859324185716"></a>总delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row1685942419571"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p13859122417574"><a name="zh-cn_topic_0237122658_p13859122417574"></a><a name="zh-cn_topic_0237122658_p13859122417574"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p128597249575"><a name="zh-cn_topic_0237122658_p128597249575"></a><a name="zh-cn_topic_0237122658_p128597249575"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p085942411577"><a name="zh-cn_topic_0237122658_p085942411577"></a><a name="zh-cn_topic_0237122658_p085942411577"></a>平均delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row208591224125718"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p188592024205715"><a name="zh-cn_topic_0237122658_p188592024205715"></a><a name="zh-cn_topic_0237122658_p188592024205715"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p7859424145717"><a name="zh-cn_topic_0237122658_p7859424145717"></a><a name="zh-cn_topic_0237122658_p7859424145717"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p7859192417574"><a name="zh-cn_topic_0237122658_p7859192417574"></a><a name="zh-cn_topic_0237122658_p7859192417574"></a>最大delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122658_row12859142411573"><td class="cellrowborder" valign="top" width="28.57%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122658_p14859524115711"><a name="zh-cn_topic_0237122658_p14859524115711"></a><a name="zh-cn_topic_0237122658_p14859524115711"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="18.35%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122658_p178596241577"><a name="zh-cn_topic_0237122658_p178596241577"></a><a name="zh-cn_topic_0237122658_p178596241577"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="53.080000000000005%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122658_p10859624145716"><a name="zh-cn_topic_0237122658_p10859624145716"></a><a name="zh-cn_topic_0237122658_p10859624145716"></a>最小delete的时间花费（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

