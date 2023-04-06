# PG\_STAT\_BAD\_BLOCK<a name="ZH-CN_TOPIC_0289900534"></a>

PG\_STAT\_BAD\_BLOCK视图显示自节点启动后，读取数据时出现Page/CU校验失败的统计信息。

**表 1**  PG\_STAT\_BAD\_BLOCK字段

<a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_tba60076b7fa44497bbb0ef74c9ff01f1"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_rd5ca85b44f734b46aab8ed63f0fb7a14"><th class="cellrowborder" valign="top" width="23.532353235323534%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a2b21b64591ee4fb99e0d6e180ce994df"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a2b21b64591ee4fb99e0d6e180ce994df"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a2b21b64591ee4fb99e0d6e180ce994df"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.23202320232023%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_aa55934e6e4d54050b1824d158eae9f91"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_aa55934e6e4d54050b1824d158eae9f91"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_aa55934e6e4d54050b1824d158eae9f91"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="56.23562356235624%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_afad2a693bfe94677916cd71bcabd1bb1"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_afad2a693bfe94677916cd71bcabd1bb1"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_afad2a693bfe94677916cd71bcabd1bb1"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_r431e9edbca7c4ea5a40f5e56a9f4590c"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7b964404d72148a7b210a241596acaea"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7b964404d72148a7b210a241596acaea"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7b964404d72148a7b210a241596acaea"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7550f1cfed7148f48b3ca88aef689371"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7550f1cfed7148f48b3ca88aef689371"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7550f1cfed7148f48b3ca88aef689371"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a3ccedfa373734bacb73c5a8b9e23d844"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a3ccedfa373734bacb73c5a8b9e23d844"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a3ccedfa373734bacb73c5a8b9e23d844"></a>节点名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_rfc2e47110af14defa2be2d47eaccb7d8"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a833d611de1854beeaa0199472d14cf70"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a833d611de1854beeaa0199472d14cf70"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a833d611de1854beeaa0199472d14cf70"></a>databaseid</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a9e6dd309c4ec4466ad56f41d3a738fd5"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a9e6dd309c4ec4466ad56f41d3a738fd5"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a9e6dd309c4ec4466ad56f41d3a738fd5"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7bafaac74bbb4483ac8ca0e639840107"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7bafaac74bbb4483ac8ca0e639840107"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a7bafaac74bbb4483ac8ca0e639840107"></a>数据库OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_r48fe2e5dac594796b2a1e8233e4715c9"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_aec29f39d89cd443ea2662502e94fde0e"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_aec29f39d89cd443ea2662502e94fde0e"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_aec29f39d89cd443ea2662502e94fde0e"></a>tablespaceid</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a2e937429b6eb42d482a020049206491e"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a2e937429b6eb42d482a020049206491e"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a2e937429b6eb42d482a020049206491e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a0700687a5c584b75bbb912c316e7b6b5"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a0700687a5c584b75bbb912c316e7b6b5"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a0700687a5c584b75bbb912c316e7b6b5"></a>表空间OID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_r152bb9b220694af796342c8c3531a055"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a12818cfc0b39432facb99499d59d49c7"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a12818cfc0b39432facb99499d59d49c7"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a12818cfc0b39432facb99499d59d49c7"></a>relfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_ac04e501d2d944cfb9754e1cbe69ea534"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_ac04e501d2d944cfb9754e1cbe69ea534"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_ac04e501d2d944cfb9754e1cbe69ea534"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a47514e01a1884325a3edfe0546b29bf5"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a47514e01a1884325a3edfe0546b29bf5"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_zh-cn_topic_0059778891_a47514e01a1884325a3edfe0546b29bf5"></a>文件对象ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_row13806857105215"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p18806205716524"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p18806205716524"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p18806205716524"></a>bucketid</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p6806957115211"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p6806957115211"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p6806957115211"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p1180655775215"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p1180655775215"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p1180655775215"></a>一致性hash bucket ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_row6986152213412"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p5987422114110"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p5987422114110"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p5987422114110"></a>forknum</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p20987142210415"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p20987142210415"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p20987142210415"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p10987122224119"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p10987122224119"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p10987122224119"></a>文件类型。取值如下：</p>
<p id="p15451914153613"><a name="p15451914153613"></a><a name="p15451914153613"></a>0，数据主文件。</p>
<p id="p13871319163619"><a name="p13871319163619"></a><a name="p13871319163619"></a>1，FSM文件。</p>
<p id="p1048562216363"><a name="p1048562216363"></a><a name="p1048562216363"></a>2，VM文件。</p>
<p id="p320462515368"><a name="p320462515368"></a><a name="p320462515368"></a>3，BCM文件。</p>
<p id="p1575792719368"><a name="p1575792719368"></a><a name="p1575792719368"></a>大于4，列存表每个字段的数据文件。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_row2618174220414"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p2061844264118"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p2061844264118"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p2061844264118"></a>error_count</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p6618442154112"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p6618442154112"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p6618442154112"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p13618742154117"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p13618742154117"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p13618742154117"></a>出现校验失败的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_row15865252134117"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p17865175254117"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p17865175254117"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p17865175254117"></a>first_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p986595224119"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p986595224119"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p986595224119"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p88655527415"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p88655527415"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p88655527415"></a>第一次出现时间。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_row185381834194118"><td class="cellrowborder" valign="top" width="23.532353235323534%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p1753803434119"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p1753803434119"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p1753803434119"></a>last_time</p>
</td>
<td class="cellrowborder" valign="top" width="20.23202320232023%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p35388341412"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p35388341412"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p35388341412"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="56.23562356235624%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p85381034124119"><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p85381034124119"></a><a name="zh-cn_topic_0283136618_zh-cn_topic_0237122443_p85381034124119"></a>最近一次出现时间。</p>
</td>
</tr>
</tbody>
</table>

