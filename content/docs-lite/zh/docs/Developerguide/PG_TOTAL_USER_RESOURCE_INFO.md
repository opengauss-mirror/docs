# PG\_TOTAL\_USER\_RESOURCE\_INFO<a name="ZH-CN_TOPIC_0289900504"></a>

PG\_TOTAL\_USER\_RESOURCE\_INFO视图显示所有用户资源使用情况，需要使用管理员用户进行查询。此视图在参数[use\_workload\_manager](负载管理.md#zh-cn_topic_0283137479_zh-cn_topic_0237124729_zh-cn_topic_0059777791_s9608d330c6a14d2cbd6ae75493437820)为on时才有效。其中，IO相关监控项在参数enable\_logical\_io\_statistics为on时才有效。

**表 1**  PG\_TOTAL\_USER\_RESOURCE\_INFO字段

<a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_t11b74f8fb7cd4bd8b53f72d8a89440c9"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_r5842d7f7603e497cb22101dfea845472"><th class="cellrowborder" valign="top" width="20.64%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_afad13ad0a32a4f00a617cdc00226c80b"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.810000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_abf389d4d152b452d832a966b9c967aec"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_abf389d4d152b452d832a966b9c967aec"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_abf389d4d152b452d832a966b9c967aec"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.550000000000004%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_aad914caab8464d5fb8e871ea9f9db721"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_r3fa5c62a2b324f449e54f1c1a7df2de8"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10103102071217"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10103102071217"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10103102071217"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p04241417123"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p04241417123"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p04241417123"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p639181441214"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p639181441214"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p639181441214"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_rf38881ac52a945d6944ba0502b0e83c4"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1110652110121"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1110652110121"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1110652110121"></a>used_memory</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p193412140122"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p193412140122"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p193412140122"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1230151411213"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1230151411213"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1230151411213"></a>正在使用的内存大小，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_zh-cn_topic_0059778356_rdeb045b57c5440c6876aa5e1fddf3793"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1275719218122"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1275719218122"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1275719218122"></a>total_memory</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p226191461218"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p226191461218"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p226191461218"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p62251431218"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p62251431218"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p62251431218"></a>可以使用的内存大小，单位MB。值为0表示未限制最大可用内存，其限制取决于数据库最大可用内存。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row0970538191711"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p9971538191717"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p9971538191717"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p9971538191717"></a>used_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p797217389175"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p797217389175"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p797217389175"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p397263812176"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p397263812176"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p397263812176"></a>正在使用的CPU核数（仅统计复杂作业CPU使用 情况，且该值为相关控制组的CPU使用统计值）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row64614276180"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p12894125171811"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p12894125171811"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p12894125171811"></a>total_cpu</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10894225181817"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10894225181817"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10894225181817"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p188951125151817"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p188951125151817"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p188951125151817"></a>在该机器节点上，用户关联控制组的CPU核数总和。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row10451327201810"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1689592518180"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1689592518180"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1689592518180"></a>used_space</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p12895425161810"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p12895425161810"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p12895425161810"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p489502517187"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p489502517187"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p489502517187"></a>已使用的永久表存储空间大小，单位KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row134412731818"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1089592520188"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1089592520188"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1089592520188"></a>total_space</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p14895192581819"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p14895192581819"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p14895192581819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p13895112513181"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p13895112513181"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p13895112513181"></a>可使用的永久表存储空间大小，单位KB，值为-1表示未限制最大存储空间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row74482015185315"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1544861535316"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1544861535316"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1544861535316"></a>used_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p944971545310"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p944971545310"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p944971545310"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1344917158536"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1344917158536"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1344917158536"></a>已使用的临时空间大小，单位KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row11962131865313"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p3962818115320"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p3962818115320"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p3962818115320"></a>total_temp_space</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p5962171813531"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p5962171813531"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p5962171813531"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p89621118165313"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p89621118165313"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p89621118165313"></a>可使用的临时空间总大小，单位KB，值为-1表示未限制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row448172235313"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1348172225317"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1348172225317"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1348172225317"></a>used_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p154819220535"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p154819220535"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p154819220535"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1648113224531"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1648113224531"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1648113224531"></a>已使用的算子落盘空间大小，单位KB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row1715825165318"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p271552585314"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p271552585314"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p271552585314"></a>total_spill_space</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10715162525319"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10715162525319"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p10715162525319"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p197151425115316"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p197151425115316"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p197151425115316"></a>可使用的算子落盘空间总大小，单位KB，值为-1表示未限制。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row663824192211"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p663834113223"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p663834113223"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p663834113223"></a>read_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p863819418229"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p863819418229"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p863819418229"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p46381241142211"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p46381241142211"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p46381241142211"></a><span id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text113271146162214"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text113271146162214"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text113271146162214"></a>数据库主节点</span>：过去5秒内，该用户在数据库节点上复杂作业read的字节总数（单位KB）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>数据库节点：实例启动至当前时间为止，该用户复杂作业read的字节总数（单位KB）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row758511216274"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1158617212276"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1158617212276"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1158617212276"></a>write_kbytes</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p115861421192712"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p115861421192712"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p115861421192712"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p25861121172715"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p25861121172715"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p25861121172715"></a><span id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text1226234812219"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text1226234812219"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text1226234812219"></a>数据库主节点</span>：过去5秒内，该用户在数据库节点上复杂作业write的字节总数（单位KB）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1917191716289"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1917191716289"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1917191716289"></a>数据库节点：实例启动至当前时间为止，该用户复杂作业write的字节总数（单位KB）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row1020031172910"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p42019182917"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p42019182917"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p42019182917"></a>read_counts</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p6201181172920"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p6201181172920"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p6201181172920"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p19710105172920"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p19710105172920"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p19710105172920"></a><span id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text15541134911222"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text15541134911222"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text15541134911222"></a>数据库主节点</span>：过去5秒内，该用户在数据库节点上复杂作业read的次数之和（单位次）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1720114116299"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1720114116299"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1720114116299"></a>数据库节点：实例启动至当前时间为止，该用户复杂作业read的次数之和（单位次）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row14601458142920"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p16460125819296"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p16460125819296"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p16460125819296"></a>write_counts</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1046085882917"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1046085882917"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1046085882917"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p193961020133012"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p193961020133012"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p193961020133012"></a><span id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text48946503228"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text48946503228"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text48946503228"></a>数据库主节点</span>：过去5秒内，该用户在数据库节点上复杂作业write的次数之和（单位次）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p11460158142912"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p11460158142912"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p11460158142912"></a>数据库节点：实例启动至当前时间为止，该用户复杂作业write的次数之和（单位次）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row1222144193118"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1722844173115"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1722844173115"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p1722844173115"></a>read_speed</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p322844153110"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p322844153110"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p322844153110"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p922184415311"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p922184415311"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p922184415311"></a><span id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text61671852172213"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text61671852172213"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text61671852172213"></a>数据库主节点</span>：过去5秒内，该用户在单个数据库节点上复杂作业read平均速率（单位KB/s）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p42022014332"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p42022014332"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p42022014332"></a>数据库节点：过去5秒内，该用户在该数据库节点上复杂作业read平均速率（单位KB/s）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_row78702338"><td class="cellrowborder" valign="top" width="20.64%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p4910083314"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p4910083314"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p4910083314"></a>write_speed</p>
</td>
<td class="cellrowborder" valign="top" width="20.810000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p995073313"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p995073313"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p995073313"></a>double precision</p>
</td>
<td class="cellrowborder" valign="top" width="58.550000000000004%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p2091702339"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p2091702339"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p2091702339"></a><span id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text9531205312229"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text9531205312229"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_text9531205312229"></a>数据库主节点</span>：过去5秒内，该用户在单个数据库节点上复杂作业write平均速率（单位KB/s）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p7807924163514"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p7807924163514"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p7807924163514"></a>数据库节点：过去5秒内，该用户在该数据库节点上复杂作业write平均速率（单位KB/s）。</p>
<p id="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a><a name="zh-cn_topic_0283137005_zh-cn_topic_0237122471_p118134716239"></a>仅分布式可用。</p>
</td>
</tr>
</tbody>
</table>

