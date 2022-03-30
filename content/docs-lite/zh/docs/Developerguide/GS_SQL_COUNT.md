# GS\_SQL\_COUNT<a name="ZH-CN_TOPIC_0289900440"></a>

GS\_SQL\_COUNT视图显示数据库当前节点当前时刻执行的五类语句（SELECT、INSERT、UPDATE、DELETE、MERGE INTO）统计信息。

-   普通用户查询GS\_SQL\_COUNT视图仅能看到该用户当前节点的统计信息；管理员权限用户查询GS\_SQL\_COUNT视图则能看到所有用户当前节点的统计信息。
-   当openGauss或该节点重启时，计数将清零，并重新开始计数 。
-   计数以节点收到的查询数为准，包括openGauss内部进行的查询。

**表 1**  GS\_SQL\_COUNT字段

<a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_t8f0334486f934453827d563b90c86711"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_r2a0276b542d54fd0808927c2c54b0fc6"><th class="cellrowborder" valign="top" width="25.15%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a5579cdd06a5645b3862144b2131a8649"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a5579cdd06a5645b3862144b2131a8649"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a5579cdd06a5645b3862144b2131a8649"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.75%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a1f7bf547d07e4656a132c0e34ba635ca"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a1f7bf547d07e4656a132c0e34ba635ca"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a1f7bf547d07e4656a132c0e34ba635ca"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="51.1%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8447f6b31ba54199a8224fea8463c23d"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8447f6b31ba54199a8224fea8463c23d"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8447f6b31ba54199a8224fea8463c23d"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_rf8b75b68e6a24e29931035876b3c3dfb"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8f18d3f0e5cd44d096020df47ca28e00"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8f18d3f0e5cd44d096020df47ca28e00"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8f18d3f0e5cd44d096020df47ca28e00"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_aecd744296d7d4b0397b2fe1fd923b6bf"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_aecd744296d7d4b0397b2fe1fd923b6bf"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_aecd744296d7d4b0397b2fe1fd923b6bf"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8579d68414bb40968ecb2f54fd50bfa3"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8579d68414bb40968ecb2f54fd50bfa3"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a8579d68414bb40968ecb2f54fd50bfa3"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_r685dd7e8104e4020b260711d0d1cf9a9"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ad7f3b45edf4748ef8bf45be74968b4ac"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ad7f3b45edf4748ef8bf45be74968b4ac"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ad7f3b45edf4748ef8bf45be74968b4ac"></a>user_name</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a0b778f8c6817439484fd5f0cb1d91e8b"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a0b778f8c6817439484fd5f0cb1d91e8b"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a0b778f8c6817439484fd5f0cb1d91e8b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_abd4a7662d8784ec1890fd6e25a2ce17d"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_abd4a7662d8784ec1890fd6e25a2ce17d"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_abd4a7662d8784ec1890fd6e25a2ce17d"></a>用户名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_r45542ef0924c49f2a21c540acd3c90e3"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a09bb26374b104b3fb29bbe2a80ef226a"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a09bb26374b104b3fb29bbe2a80ef226a"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a09bb26374b104b3fb29bbe2a80ef226a"></a>select_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_abe1aa36777e444c48c10c68dea6d28bd"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_abe1aa36777e444c48c10c68dea6d28bd"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_abe1aa36777e444c48c10c68dea6d28bd"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a08d938eccee84d42b9018a66f6b6784c"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a08d938eccee84d42b9018a66f6b6784c"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a08d938eccee84d42b9018a66f6b6784c"></a>select语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ra3bccb8528cd408aa54f8e30557c0359"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ac1f1c391b720448fb6cff2861dc151b6"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ac1f1c391b720448fb6cff2861dc151b6"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_ac1f1c391b720448fb6cff2861dc151b6"></a>update_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p84741447191914"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p84741447191914"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p84741447191914"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a83dfda58a9ac418fab57f167cd4a8244"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a83dfda58a9ac418fab57f167cd4a8244"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a83dfda58a9ac418fab57f167cd4a8244"></a>update语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_rd7538143f1a648d2ae003ee563237226"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_adad82d644319412cb3a8d9cb60daa836"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_adad82d644319412cb3a8d9cb60daa836"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_adad82d644319412cb3a8d9cb60daa836"></a>insert_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a0a0c18f59f1a47bdb17413bbe1716f3a"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a0a0c18f59f1a47bdb17413bbe1716f3a"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a0a0c18f59f1a47bdb17413bbe1716f3a"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a2fe293248c694ffd9fe3f04bdf3a3f6d"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a2fe293248c694ffd9fe3f04bdf3a3f6d"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_a2fe293248c694ffd9fe3f04bdf3a3f6d"></a>insert语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row15968121961816"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p149683193188"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p149683193188"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p149683193188"></a>delete_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p2024402715226"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p2024402715226"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p2024402715226"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18745636192217"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18745636192217"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18745636192217"></a>delete语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row73471081672"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p634812817715"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p634812817715"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p634812817715"></a>mergeinto_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p14348381716"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p14348381716"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p14348381716"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p10348158074"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p10348158074"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p10348158074"></a>MERGE INTO语句统计结果。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row9804702336"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p058235812339"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p058235812339"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p058235812339"></a>ddl_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p89281668349"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p89281668349"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p89281668349"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p317951613418"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p317951613418"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p317951613418"></a>DDL语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row146151710153314"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p12582135815332"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p12582135815332"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p12582135815332"></a>dml_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p99297611341"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p99297611341"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p99297611341"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p81791416123410"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p81791416123410"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p81791416123410"></a>DML语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row5861593311"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p14582145811339"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p14582145811339"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p14582145811339"></a>dcl_count</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p8929136163413"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p8929136163413"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p8929136163413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p20179121619345"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p20179121619345"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p20179121619345"></a>DML语句的数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row13127161816336"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p4583158173310"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p4583158173310"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p4583158173310"></a>total_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p139290613343"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p139290613343"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p139290613343"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p9179151633410"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p9179151633410"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p9179151633410"></a>总select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1380372019333"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1658316580338"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1658316580338"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1658316580338"></a>avg_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1892926103412"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1892926103412"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1892926103412"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p151791161346"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p151791161346"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p151791161346"></a>平均select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1265732314330"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1658345813320"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1658345813320"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1658345813320"></a>max_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p169291966347"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p169291966347"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p169291966347"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p417991610347"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p417991610347"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p417991610347"></a>最大select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1168342683313"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p65831358133310"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p65831358133310"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p65831358133310"></a>min_select_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p189291673412"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p189291673412"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p189291673412"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p91791216143413"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p91791216143413"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p91791216143413"></a>最小select的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1628852912337"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18583145811335"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18583145811335"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18583145811335"></a>total_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p189291693413"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p189291693413"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p189291693413"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p15180316173414"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p15180316173414"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p15180316173414"></a>总update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row2773124419339"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p758316581338"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p758316581338"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p758316581338"></a>avg_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p199296693415"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p199296693415"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p199296693415"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p121801216153415"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p121801216153415"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p121801216153415"></a>平均update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1211913473331"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18583155810338"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18583155810338"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18583155810338"></a>max_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p89296653419"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p89296653419"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p89296653419"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p15180161615341"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p15180161615341"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p15180161615341"></a>最大update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row212835153319"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p7583358123320"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p7583358123320"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p7583358123320"></a>min_update_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1992956153417"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1992956153417"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p1992956153417"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p191801016143411"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p191801016143411"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p191801016143411"></a>最小update的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row796855363318"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p258345833315"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p258345833315"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p258345833315"></a>total_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p49295611345"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p49295611345"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p49295611345"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p91806168346"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p91806168346"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p91806168346"></a>总insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1426427185317"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p3427727155315"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p3427727155315"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p3427727155315"></a>avg_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p124271727105310"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p124271727105310"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p124271727105310"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p842719278539"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p842719278539"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p842719278539"></a>平均insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1416233615316"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p181636364539"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p181636364539"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p181636364539"></a>max_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p10163336145311"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p10163336145311"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p10163336145311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18163336125318"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18163336125318"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p18163336125318"></a>最大insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row31141341155314"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p911424120533"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p911424120533"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p911424120533"></a>min_insert_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p611444185311"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p611444185311"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p611444185311"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p121151241165320"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p121151241165320"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p121151241165320"></a>最小insert的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1568416117522"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p56851315524"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p56851315524"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p56851315524"></a>total_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p146851712528"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p146851712528"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p146851712528"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p0685213527"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p0685213527"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p0685213527"></a>总delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1856196528"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p685789155210"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p685789155210"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p685789155210"></a>avg_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p128572091527"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p128572091527"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p128572091527"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p6857199185212"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p6857199185212"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p6857199185212"></a>平均delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row1221181765215"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p321161715215"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p321161715215"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p321161715215"></a>max_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p921111795211"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p921111795211"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p921111795211"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p321217171522"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p321217171522"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p321217171522"></a>最大delete的时间花费（单位：微秒）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_row194122224526"><td class="cellrowborder" valign="top" width="25.15%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p141314226521"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p141314226521"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p141314226521"></a>min_delete_elapse</p>
</td>
<td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p8413202225217"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p8413202225217"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p8413202225217"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="51.1%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p6413152225218"><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p6413152225218"></a><a name="zh-cn_topic_0283136879_zh-cn_topic_0237122389_p6413152225218"></a>最小delete的时间花费（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

