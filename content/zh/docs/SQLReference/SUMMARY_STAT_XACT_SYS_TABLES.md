# SUMMARY\_STAT\_XACT\_SYS\_TABLES

显示openGauss内汇聚的命名空间中系统表的事务状态信息。

**表 1**  SUMMARY\_STAT\_XACT\_SYS\_TABLES字段

<a name="zh-cn_topic_0237122604_table157278311218"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122604_row138291831027"><th class="cellrowborder" valign="top" width="18.96%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122604_p88299311215"><a name="zh-cn_topic_0237122604_p88299311215"></a><a name="zh-cn_topic_0237122604_p88299311215"></a><strong id="zh-cn_topic_0237122604_b3829153328"><a name="zh-cn_topic_0237122604_b3829153328"></a><a name="zh-cn_topic_0237122604_b3829153328"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.39%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122604_p882912312214"><a name="zh-cn_topic_0237122604_p882912312214"></a><a name="zh-cn_topic_0237122604_p882912312214"></a><strong id="zh-cn_topic_0237122604_b88300318217"><a name="zh-cn_topic_0237122604_b88300318217"></a><a name="zh-cn_topic_0237122604_b88300318217"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="63.65%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122604_p383017314212"><a name="zh-cn_topic_0237122604_p383017314212"></a><a name="zh-cn_topic_0237122604_p383017314212"></a><strong id="zh-cn_topic_0237122604_b148308310219"><a name="zh-cn_topic_0237122604_b148308310219"></a><a name="zh-cn_topic_0237122604_b148308310219"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122604_row19830232029"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p58301030211"><a name="zh-cn_topic_0237122604_p58301030211"></a><a name="zh-cn_topic_0237122604_p58301030211"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p3830631425"><a name="zh-cn_topic_0237122604_p3830631425"></a><a name="zh-cn_topic_0237122604_p3830631425"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p68301831327"><a name="zh-cn_topic_0237122604_p68301831327"></a><a name="zh-cn_topic_0237122604_p68301831327"></a>此表的模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row10830939213"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p88301831025"><a name="zh-cn_topic_0237122604_p88301831025"></a><a name="zh-cn_topic_0237122604_p88301831025"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p1883053721"><a name="zh-cn_topic_0237122604_p1883053721"></a><a name="zh-cn_topic_0237122604_p1883053721"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p16830932214"><a name="zh-cn_topic_0237122604_p16830932214"></a><a name="zh-cn_topic_0237122604_p16830932214"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row18318319211"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p1983114310216"><a name="zh-cn_topic_0237122604_p1983114310216"></a><a name="zh-cn_topic_0237122604_p1983114310216"></a>seq_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p12831631927"><a name="zh-cn_topic_0237122604_p12831631927"></a><a name="zh-cn_topic_0237122604_p12831631927"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p138311634213"><a name="zh-cn_topic_0237122604_p138311634213"></a><a name="zh-cn_topic_0237122604_p138311634213"></a>此表发起的顺序扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row28310318212"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p383111315212"><a name="zh-cn_topic_0237122604_p383111315212"></a><a name="zh-cn_topic_0237122604_p383111315212"></a>seq_tup_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p98311531324"><a name="zh-cn_topic_0237122604_p98311531324"></a><a name="zh-cn_topic_0237122604_p98311531324"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p883153826"><a name="zh-cn_topic_0237122604_p883153826"></a><a name="zh-cn_topic_0237122604_p883153826"></a>顺序扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row8831931527"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p208321731122"><a name="zh-cn_topic_0237122604_p208321731122"></a><a name="zh-cn_topic_0237122604_p208321731122"></a>idx_scan</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p188328312213"><a name="zh-cn_topic_0237122604_p188328312213"></a><a name="zh-cn_topic_0237122604_p188328312213"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p1283212314213"><a name="zh-cn_topic_0237122604_p1283212314213"></a><a name="zh-cn_topic_0237122604_p1283212314213"></a>此表发起的索引扫描数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row1483211311219"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p983223724"><a name="zh-cn_topic_0237122604_p983223724"></a><a name="zh-cn_topic_0237122604_p983223724"></a>idx_tup_fetch</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p58321532210"><a name="zh-cn_topic_0237122604_p58321532210"></a><a name="zh-cn_topic_0237122604_p58321532210"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p28321031425"><a name="zh-cn_topic_0237122604_p28321031425"></a><a name="zh-cn_topic_0237122604_p28321031425"></a>索引扫描抓取的活跃行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row18321937215"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p0832231528"><a name="zh-cn_topic_0237122604_p0832231528"></a><a name="zh-cn_topic_0237122604_p0832231528"></a>n_tup_ins</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p1783211311212"><a name="zh-cn_topic_0237122604_p1783211311212"></a><a name="zh-cn_topic_0237122604_p1783211311212"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p5833634210"><a name="zh-cn_topic_0237122604_p5833634210"></a><a name="zh-cn_topic_0237122604_p5833634210"></a>插入行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row20833136219"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p13833143729"><a name="zh-cn_topic_0237122604_p13833143729"></a><a name="zh-cn_topic_0237122604_p13833143729"></a>n_tup_upd</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p88331034217"><a name="zh-cn_topic_0237122604_p88331034217"></a><a name="zh-cn_topic_0237122604_p88331034217"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p10833435211"><a name="zh-cn_topic_0237122604_p10833435211"></a><a name="zh-cn_topic_0237122604_p10833435211"></a>更新行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row08331731216"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p5834636212"><a name="zh-cn_topic_0237122604_p5834636212"></a><a name="zh-cn_topic_0237122604_p5834636212"></a>n_tup_del</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p148341036218"><a name="zh-cn_topic_0237122604_p148341036218"></a><a name="zh-cn_topic_0237122604_p148341036218"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p138342031622"><a name="zh-cn_topic_0237122604_p138342031622"></a><a name="zh-cn_topic_0237122604_p138342031622"></a>删除行数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122604_row48343311216"><td class="cellrowborder" valign="top" width="18.96%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122604_p108348318211"><a name="zh-cn_topic_0237122604_p108348318211"></a><a name="zh-cn_topic_0237122604_p108348318211"></a>n_tup_hot_upd</p>
</td>
<td class="cellrowborder" valign="top" width="17.39%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122604_p108351931124"><a name="zh-cn_topic_0237122604_p108351931124"></a><a name="zh-cn_topic_0237122604_p108351931124"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="63.65%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122604_p19835935212"><a name="zh-cn_topic_0237122604_p19835935212"></a><a name="zh-cn_topic_0237122604_p19835935212"></a>HOT更新行数（比如没有更新所需的单独索引）。</p>
</td>
</tr>
</tbody>
</table>

