# GLOBAL\_REDO\_STATUS<a name="EN-US_TOPIC_0247293384"></a>

**GLOBAL\_REDO\_STATUS**  displays the log replay status of all instances in openGauss.

**Table  1**  GLOBAL\_REDO\_STATUS columns

<a name="en-us_topic_0237122720_en-us_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="en-us_topic_0237122720_en-us_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122720_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="en-us_topic_0237122720_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="20.66%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122720_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="en-us_topic_0237122720_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.79%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122720_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="en-us_topic_0237122720_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122720_row757161654315"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p15571161614431"><a name="en-us_topic_0237122720_p15571161614431"></a><a name="en-us_topic_0237122720_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p1457191694314"><a name="en-us_topic_0237122720_p1457191694314"></a><a name="en-us_topic_0237122720_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p14572111616430"><a name="en-us_topic_0237122720_p14572111616430"></a><a name="en-us_topic_0237122720_p14572111616430"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row4331121184412"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p42652367477"><a name="en-us_topic_0237122720_p42652367477"></a><a name="en-us_topic_0237122720_p42652367477"></a>redo_start_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p183326113441"><a name="en-us_topic_0237122720_p183326113441"></a><a name="en-us_topic_0237122720_p183326113441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p196485711489"><a name="en-us_topic_0237122720_p196485711489"></a><a name="en-us_topic_0237122720_p196485711489"></a>Start point for replaying the instance logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_en-us_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p286612409472"><a name="en-us_topic_0237122720_p286612409472"></a><a name="en-us_topic_0237122720_p286612409472"></a>redo_start_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p141611830114819"><a name="en-us_topic_0237122720_p141611830114819"></a><a name="en-us_topic_0237122720_p141611830114819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="en-us_topic_0237122720_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>Start time (UTC) when the instance logs are replayed</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_en-us_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p9514114434720"><a name="en-us_topic_0237122720_p9514114434720"></a><a name="en-us_topic_0237122720_p9514114434720"></a>redo_done_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="en-us_topic_0237122720_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p156601826897"><a name="en-us_topic_0237122720_p156601826897"></a><a name="en-us_topic_0237122720_p156601826897"></a>End time (UTC) when the instance logs are replayed</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_en-us_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p19789181011547"><a name="en-us_topic_0237122720_p19789181011547"></a><a name="en-us_topic_0237122720_p19789181011547"></a>curr_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="en-us_topic_0237122720_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="en-us_topic_0237122720_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>Current time (UTC) of the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_en-us_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"><a name="en-us_topic_0237122720_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a>min_recovery_point</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p1536784219486"><a name="en-us_topic_0237122720_p1536784219486"></a><a name="en-us_topic_0237122720_p1536784219486"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="en-us_topic_0237122720_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="en-us_topic_0237122720_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>Position of the minimum consistency point for the instance logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_en-us_topic_0059778133_r79a8e626edca446ea25954f708ff34f9"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p126981542102311"><a name="en-us_topic_0237122720_p126981542102311"></a><a name="en-us_topic_0237122720_p126981542102311"></a>read_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p128956455481"><a name="en-us_topic_0237122720_p128956455481"></a><a name="en-us_topic_0237122720_p128956455481"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p143819517518"><a name="en-us_topic_0237122720_p143819517518"></a><a name="en-us_topic_0237122720_p143819517518"></a>Position for reading the instance logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row1279811101768"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p180013106613"><a name="en-us_topic_0237122720_p180013106613"></a><a name="en-us_topic_0237122720_p180013106613"></a>last_replayed_read_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p8801610169"><a name="en-us_topic_0237122720_p8801610169"></a><a name="en-us_topic_0237122720_p8801610169"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p2080251014615"><a name="en-us_topic_0237122720_p2080251014615"></a><a name="en-us_topic_0237122720_p2080251014615"></a>Position for replaying the instance logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row25928289611"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p1159214287615"><a name="en-us_topic_0237122720_p1159214287615"></a><a name="en-us_topic_0237122720_p1159214287615"></a>recovery_done_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p05933281269"><a name="en-us_topic_0237122720_p05933281269"></a><a name="en-us_topic_0237122720_p05933281269"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p1259316281161"><a name="en-us_topic_0237122720_p1259316281161"></a><a name="en-us_topic_0237122720_p1259316281161"></a>Replay position after the instance is started</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row78601472396"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p18611047123918"><a name="en-us_topic_0237122720_p18611047123918"></a><a name="en-us_topic_0237122720_p18611047123918"></a>read_xlog_io_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p186174723912"><a name="en-us_topic_0237122720_p186174723912"></a><a name="en-us_topic_0237122720_p186174723912"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p18611547173916"><a name="en-us_topic_0237122720_p18611547173916"></a><a name="en-us_topic_0237122720_p18611547173916"></a>Number of I/Os when the instance reads and replays logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row9764145543918"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p18765755173913"><a name="en-us_topic_0237122720_p18765755173913"></a><a name="en-us_topic_0237122720_p18765755173913"></a>read_xlog_io_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p1176565593913"><a name="en-us_topic_0237122720_p1176565593913"></a><a name="en-us_topic_0237122720_p1176565593913"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p6765555123914"><a name="en-us_topic_0237122720_p6765555123914"></a><a name="en-us_topic_0237122720_p6765555123914"></a>Total I/O latency when the instance reads and replays logs</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row3705132614012"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p370592674017"><a name="en-us_topic_0237122720_p370592674017"></a><a name="en-us_topic_0237122720_p370592674017"></a>read_data_io_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p1870517266408"><a name="en-us_topic_0237122720_p1870517266408"></a><a name="en-us_topic_0237122720_p1870517266408"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p11706172664016"><a name="en-us_topic_0237122720_p11706172664016"></a><a name="en-us_topic_0237122720_p11706172664016"></a>Number of data page I/O reads during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row4992123118400"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p19992133118405"><a name="en-us_topic_0237122720_p19992133118405"></a><a name="en-us_topic_0237122720_p19992133118405"></a>read_data_io_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p159931131134018"><a name="en-us_topic_0237122720_p159931131134018"></a><a name="en-us_topic_0237122720_p159931131134018"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p1799383118409"><a name="en-us_topic_0237122720_p1799383118409"></a><a name="en-us_topic_0237122720_p1799383118409"></a>Total I/O latency of data page reads during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row8845193614402"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p984617369401"><a name="en-us_topic_0237122720_p984617369401"></a><a name="en-us_topic_0237122720_p984617369401"></a>write_data_io_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p4846736154017"><a name="en-us_topic_0237122720_p4846736154017"></a><a name="en-us_topic_0237122720_p4846736154017"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p8846143610402"><a name="en-us_topic_0237122720_p8846143610402"></a><a name="en-us_topic_0237122720_p8846143610402"></a>Number of data page I/O writes during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row163984054010"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p1163934084013"><a name="en-us_topic_0237122720_p1163934084013"></a><a name="en-us_topic_0237122720_p1163934084013"></a>write_data_io_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p1663914402401"><a name="en-us_topic_0237122720_p1663914402401"></a><a name="en-us_topic_0237122720_p1663914402401"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p2639134018405"><a name="en-us_topic_0237122720_p2639134018405"></a><a name="en-us_topic_0237122720_p2639134018405"></a>Total I/O latency of data page writes during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row11909204417408"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p1090974494015"><a name="en-us_topic_0237122720_p1090974494015"></a><a name="en-us_topic_0237122720_p1090974494015"></a>process_pending_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p1690924464015"><a name="en-us_topic_0237122720_p1690924464015"></a><a name="en-us_topic_0237122720_p1690924464015"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p891074434016"><a name="en-us_topic_0237122720_p891074434016"></a><a name="en-us_topic_0237122720_p891074434016"></a>Number of synchronization times of log distribution threads during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row858815485402"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p1558934814403"><a name="en-us_topic_0237122720_p1558934814403"></a><a name="en-us_topic_0237122720_p1558934814403"></a>process_pending_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p958954874011"><a name="en-us_topic_0237122720_p958954874011"></a><a name="en-us_topic_0237122720_p958954874011"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p12589164813403"><a name="en-us_topic_0237122720_p12589164813403"></a><a name="en-us_topic_0237122720_p12589164813403"></a>Total synchronization latency of log distribution threads during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row22231953174018"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p182232053194012"><a name="en-us_topic_0237122720_p182232053194012"></a><a name="en-us_topic_0237122720_p182232053194012"></a>apply_counter</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p822335313401"><a name="en-us_topic_0237122720_p822335313401"></a><a name="en-us_topic_0237122720_p822335313401"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p1922335324017"><a name="en-us_topic_0237122720_p1922335324017"></a><a name="en-us_topic_0237122720_p1922335324017"></a>Number of synchronization times of replay threads during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row694170134113"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p12949018417"><a name="en-us_topic_0237122720_p12949018417"></a><a name="en-us_topic_0237122720_p12949018417"></a>apply_total_dur</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p59410094113"><a name="en-us_topic_0237122720_p59410094113"></a><a name="en-us_topic_0237122720_p59410094113"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p49418024118"><a name="en-us_topic_0237122720_p49418024118"></a><a name="en-us_topic_0237122720_p49418024118"></a>Total synchronization latency of replay threads during replay in the instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row224245104111"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p162438574110"><a name="en-us_topic_0237122720_p162438574110"></a><a name="en-us_topic_0237122720_p162438574110"></a>speed</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p192435524118"><a name="en-us_topic_0237122720_p192435524118"></a><a name="en-us_topic_0237122720_p192435524118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p15211419103813"><a name="en-us_topic_0237122720_p15211419103813"></a><a name="en-us_topic_0237122720_p15211419103813"></a>Log replay rate of the current instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row135502924112"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p1155014916411"><a name="en-us_topic_0237122720_p1155014916411"></a><a name="en-us_topic_0237122720_p1155014916411"></a>local_max_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p25507918419"><a name="en-us_topic_0237122720_p25507918419"></a><a name="en-us_topic_0237122720_p25507918419"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p16550159154115"><a name="en-us_topic_0237122720_p16550159154115"></a><a name="en-us_topic_0237122720_p16550159154115"></a>Maximum number of replay logs received by the local host after the instance is started</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row169229135418"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p6922713134119"><a name="en-us_topic_0237122720_p6922713134119"></a><a name="en-us_topic_0237122720_p6922713134119"></a>primary_flush_ptr</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p49221513204115"><a name="en-us_topic_0237122720_p49221513204115"></a><a name="en-us_topic_0237122720_p49221513204115"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p89221313194113"><a name="en-us_topic_0237122720_p89221313194113"></a><a name="en-us_topic_0237122720_p89221313194113"></a>Log point where the host flushes logs to a disk</p>
</td>
</tr>
<tr id="en-us_topic_0237122720_row989231964117"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122720_p2892141954116"><a name="en-us_topic_0237122720_p2892141954116"></a><a name="en-us_topic_0237122720_p2892141954116"></a>worker_info</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122720_p148921119174113"><a name="en-us_topic_0237122720_p148921119174113"></a><a name="en-us_topic_0237122720_p148921119174113"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122720_p1889212196415"><a name="en-us_topic_0237122720_p1889212196415"></a><a name="en-us_topic_0237122720_p1889212196415"></a>Replay thread information of the instance. If concurrent replay is not enabled, the value is <strong id="b9675125484517"><a name="b9675125484517"></a><a name="b9675125484517"></a>NULL</strong>.</p>
</td>
</tr>
</tbody>
</table>

