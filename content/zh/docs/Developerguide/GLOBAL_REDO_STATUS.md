# GLOBAL\_REDO\_STATUS

GLOBAL\_REDO\_STATUS视图显示openGauss实例的日志回放情况。

**表 1**  GLOBAL\_REDO\_STATUS字段

<a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.66%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="56.79%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122720_row757161654315"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p15571161614431"><a name="zh-cn_topic_0237122720_p15571161614431"></a><a name="zh-cn_topic_0237122720_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p1457191694314"><a name="zh-cn_topic_0237122720_p1457191694314"></a><a name="zh-cn_topic_0237122720_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p14572111616430"><a name="zh-cn_topic_0237122720_p14572111616430"></a><a name="zh-cn_topic_0237122720_p14572111616430"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row4331121184412"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p42652367477"><a name="zh-cn_topic_0237122720_p42652367477"></a><a name="zh-cn_topic_0237122720_p42652367477"></a>redo_start_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p183326113441"><a name="zh-cn_topic_0237122720_p183326113441"></a><a name="zh-cn_topic_0237122720_p183326113441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p196485711489"><a name="zh-cn_topic_0237122720_p196485711489"></a><a name="zh-cn_topic_0237122720_p196485711489"></a>当前实例日志回放的起始点。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p286612409472"><a name="zh-cn_topic_0237122720_p286612409472"></a><a name="zh-cn_topic_0237122720_p286612409472"></a>redo_start_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p141611830114819"><a name="zh-cn_topic_0237122720_p141611830114819"></a><a name="zh-cn_topic_0237122720_p141611830114819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>当前实例日志回放的起始UTC时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p9514114434720"><a name="zh-cn_topic_0237122720_p9514114434720"></a><a name="zh-cn_topic_0237122720_p9514114434720"></a>redo_done_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p156601826897"><a name="zh-cn_topic_0237122720_p156601826897"></a><a name="zh-cn_topic_0237122720_p156601826897"></a>当前实例日志回放的结束UTC时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p19789181011547"><a name="zh-cn_topic_0237122720_p19789181011547"></a><a name="zh-cn_topic_0237122720_p19789181011547"></a>curr_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>当前实例的当前UTC时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a>min_recovery_point</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p1536784219486"><a name="zh-cn_topic_0237122720_p1536784219486"></a><a name="zh-cn_topic_0237122720_p1536784219486"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="zh-cn_topic_0237122720_zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>当前实例日志的最小一致性点位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_zh-cn_topic_0059778133_r79a8e626edca446ea25954f708ff34f9"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p126981542102311"><a name="zh-cn_topic_0237122720_p126981542102311"></a><a name="zh-cn_topic_0237122720_p126981542102311"></a>read_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p128956455481"><a name="zh-cn_topic_0237122720_p128956455481"></a><a name="zh-cn_topic_0237122720_p128956455481"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p143819517518"><a name="zh-cn_topic_0237122720_p143819517518"></a><a name="zh-cn_topic_0237122720_p143819517518"></a>当前实例日志的读取位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row1279811101768"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p180013106613"><a name="zh-cn_topic_0237122720_p180013106613"></a><a name="zh-cn_topic_0237122720_p180013106613"></a>last_replayed_read_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p8801610169"><a name="zh-cn_topic_0237122720_p8801610169"></a><a name="zh-cn_topic_0237122720_p8801610169"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p2080251014615"><a name="zh-cn_topic_0237122720_p2080251014615"></a><a name="zh-cn_topic_0237122720_p2080251014615"></a>当前实例的日志回放位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row25928289611"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p1159214287615"><a name="zh-cn_topic_0237122720_p1159214287615"></a><a name="zh-cn_topic_0237122720_p1159214287615"></a>recovery_done_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p05933281269"><a name="zh-cn_topic_0237122720_p05933281269"></a><a name="zh-cn_topic_0237122720_p05933281269"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p1259316281161"><a name="zh-cn_topic_0237122720_p1259316281161"></a><a name="zh-cn_topic_0237122720_p1259316281161"></a>当前实例启动完成时的回放位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row78601472396"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p18611047123918"><a name="zh-cn_topic_0237122720_p18611047123918"></a><a name="zh-cn_topic_0237122720_p18611047123918"></a>read_xlog_io_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p186174723912"><a name="zh-cn_topic_0237122720_p186174723912"></a><a name="zh-cn_topic_0237122720_p186174723912"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p18611547173916"><a name="zh-cn_topic_0237122720_p18611547173916"></a><a name="zh-cn_topic_0237122720_p18611547173916"></a>当前实例读取回放日志的io次数计数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row9764145543918"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p18765755173913"><a name="zh-cn_topic_0237122720_p18765755173913"></a><a name="zh-cn_topic_0237122720_p18765755173913"></a>read_xlog_io_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p1176565593913"><a name="zh-cn_topic_0237122720_p1176565593913"></a><a name="zh-cn_topic_0237122720_p1176565593913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p6765555123914"><a name="zh-cn_topic_0237122720_p6765555123914"></a><a name="zh-cn_topic_0237122720_p6765555123914"></a>当前实例读取回放日志的io总时延。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row3705132614012"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p370592674017"><a name="zh-cn_topic_0237122720_p370592674017"></a><a name="zh-cn_topic_0237122720_p370592674017"></a>read_data_io_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p1870517266408"><a name="zh-cn_topic_0237122720_p1870517266408"></a><a name="zh-cn_topic_0237122720_p1870517266408"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p11706172664016"><a name="zh-cn_topic_0237122720_p11706172664016"></a><a name="zh-cn_topic_0237122720_p11706172664016"></a>当前实例回放过程中读取数据页面的io次数计数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row4992123118400"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p19992133118405"><a name="zh-cn_topic_0237122720_p19992133118405"></a><a name="zh-cn_topic_0237122720_p19992133118405"></a>read_data_io_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p159931131134018"><a name="zh-cn_topic_0237122720_p159931131134018"></a><a name="zh-cn_topic_0237122720_p159931131134018"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p1799383118409"><a name="zh-cn_topic_0237122720_p1799383118409"></a><a name="zh-cn_topic_0237122720_p1799383118409"></a>当前实例回放过程中读取数据页面的io总时延。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row8845193614402"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p984617369401"><a name="zh-cn_topic_0237122720_p984617369401"></a><a name="zh-cn_topic_0237122720_p984617369401"></a>write_data_io_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p4846736154017"><a name="zh-cn_topic_0237122720_p4846736154017"></a><a name="zh-cn_topic_0237122720_p4846736154017"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p8846143610402"><a name="zh-cn_topic_0237122720_p8846143610402"></a><a name="zh-cn_topic_0237122720_p8846143610402"></a>当前实例回放过程中写数据页面的io次数计数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row163984054010"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p1163934084013"><a name="zh-cn_topic_0237122720_p1163934084013"></a><a name="zh-cn_topic_0237122720_p1163934084013"></a>write_data_io_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p1663914402401"><a name="zh-cn_topic_0237122720_p1663914402401"></a><a name="zh-cn_topic_0237122720_p1663914402401"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p2639134018405"><a name="zh-cn_topic_0237122720_p2639134018405"></a><a name="zh-cn_topic_0237122720_p2639134018405"></a>当前实例回放过程中写数据页面的io总时延。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row11909204417408"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p1090974494015"><a name="zh-cn_topic_0237122720_p1090974494015"></a><a name="zh-cn_topic_0237122720_p1090974494015"></a>process_pending_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p1690924464015"><a name="zh-cn_topic_0237122720_p1690924464015"></a><a name="zh-cn_topic_0237122720_p1690924464015"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p891074434016"><a name="zh-cn_topic_0237122720_p891074434016"></a><a name="zh-cn_topic_0237122720_p891074434016"></a>当前实例回放过程中日志分发线程的同步次数计数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row858815485402"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p1558934814403"><a name="zh-cn_topic_0237122720_p1558934814403"></a><a name="zh-cn_topic_0237122720_p1558934814403"></a>process_pending_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p958954874011"><a name="zh-cn_topic_0237122720_p958954874011"></a><a name="zh-cn_topic_0237122720_p958954874011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p12589164813403"><a name="zh-cn_topic_0237122720_p12589164813403"></a><a name="zh-cn_topic_0237122720_p12589164813403"></a>当前实例回放过程中日志分发线程的同步总时延。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row22231953174018"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p182232053194012"><a name="zh-cn_topic_0237122720_p182232053194012"></a><a name="zh-cn_topic_0237122720_p182232053194012"></a>apply_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p822335313401"><a name="zh-cn_topic_0237122720_p822335313401"></a><a name="zh-cn_topic_0237122720_p822335313401"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p1922335324017"><a name="zh-cn_topic_0237122720_p1922335324017"></a><a name="zh-cn_topic_0237122720_p1922335324017"></a>当前实例回放过程中回放线程的同步次数计数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row694170134113"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p12949018417"><a name="zh-cn_topic_0237122720_p12949018417"></a><a name="zh-cn_topic_0237122720_p12949018417"></a>apply_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p59410094113"><a name="zh-cn_topic_0237122720_p59410094113"></a><a name="zh-cn_topic_0237122720_p59410094113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p49418024118"><a name="zh-cn_topic_0237122720_p49418024118"></a><a name="zh-cn_topic_0237122720_p49418024118"></a>当前实例回放过程中回放线程的同步总时延。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row224245104111"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p162438574110"><a name="zh-cn_topic_0237122720_p162438574110"></a><a name="zh-cn_topic_0237122720_p162438574110"></a>speed</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p192435524118"><a name="zh-cn_topic_0237122720_p192435524118"></a><a name="zh-cn_topic_0237122720_p192435524118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p15211419103813"><a name="zh-cn_topic_0237122720_p15211419103813"></a><a name="zh-cn_topic_0237122720_p15211419103813"></a>当前实例日志回放速率。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row135502924112"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p1155014916411"><a name="zh-cn_topic_0237122720_p1155014916411"></a><a name="zh-cn_topic_0237122720_p1155014916411"></a>local_max_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p25507918419"><a name="zh-cn_topic_0237122720_p25507918419"></a><a name="zh-cn_topic_0237122720_p25507918419"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p16550159154115"><a name="zh-cn_topic_0237122720_p16550159154115"></a><a name="zh-cn_topic_0237122720_p16550159154115"></a>当前实例启动成功后本地收到的回放日志的最大值。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row169229135418"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p6922713134119"><a name="zh-cn_topic_0237122720_p6922713134119"></a><a name="zh-cn_topic_0237122720_p6922713134119"></a>primary_flush_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p49221513204115"><a name="zh-cn_topic_0237122720_p49221513204115"></a><a name="zh-cn_topic_0237122720_p49221513204115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p89221313194113"><a name="zh-cn_topic_0237122720_p89221313194113"></a><a name="zh-cn_topic_0237122720_p89221313194113"></a>主机落盘日志的位置。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122720_row989231964117"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122720_p2892141954116"><a name="zh-cn_topic_0237122720_p2892141954116"></a><a name="zh-cn_topic_0237122720_p2892141954116"></a>worker_info</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122720_p148921119174113"><a name="zh-cn_topic_0237122720_p148921119174113"></a><a name="zh-cn_topic_0237122720_p148921119174113"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122720_p1889212196415"><a name="zh-cn_topic_0237122720_p1889212196415"></a><a name="zh-cn_topic_0237122720_p1889212196415"></a>当前实例回放线程信息，若没有开并行回放则该值为空。</p>
</td>
</tr>
</tbody>
</table>
