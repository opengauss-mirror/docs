# GLOBAL\_DOUBLE\_WRITE\_STATUS<a name="ZH-CN_TOPIC_0289900121"></a>

GLOBAL\_DOUBLE\_WRITE\_STATUS视图显示openGauss所有实例的双写文件的情况。它是由每个节点的local\_double\_write\_stat视图组成，属性完全一致。

**表 1**  GLOBAL\_DOUBLE\_WRITE\_STATUS字段

<a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.66%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="56.79%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_row757161654315"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p15571161614431"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p15571161614431"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1457191694314"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1457191694314"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p14572111616430"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p14572111616430"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p14572111616430"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_row4331121184412"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p42652367477"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p42652367477"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p42652367477"></a>curr_dwn</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p183326113441"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p183326113441"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p183326113441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p196485711489"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p196485711489"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p196485711489"></a>当前双写文件的序列号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p286612409472"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p286612409472"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p286612409472"></a>curr_start_page</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p141611830114819"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p141611830114819"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p141611830114819"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>当前双写文件恢复起始页面。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p9514114434720"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p9514114434720"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p9514114434720"></a>file_trunc_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a>当前双写文件复用的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p19789181011547"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p19789181011547"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p19789181011547"></a>file_reset_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>当前双写文件写满后发生重置的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p26036181911"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p26036181911"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p26036181911"></a>total_writes</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1536784219486"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1536784219486"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1536784219486"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>当前双写文件总的I/O次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_zh-cn_topic_0059778133_r79a8e626edca446ea25954f708ff34f9"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1536415313486"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1536415313486"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1536415313486"></a>low_threshold_writes</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p128956455481"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p128956455481"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p128956455481"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p143819517518"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p143819517518"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p143819517518"></a>低效率写双写文件的I/O次数（一次I/O刷页数量少于16页面）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_row146811301918"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p468253018120"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p468253018120"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p468253018120"></a>high_threshold_writes</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p56831130614"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p56831130614"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p56831130614"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1968314301110"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1968314301110"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1968314301110"></a>高效率写双写文件的I/O次数（一次I/O刷页数量多于一批，421个页面）。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_row63081435610"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p113081435917"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p113081435917"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p113081435917"></a>total_pages</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p103081535811"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p103081535811"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p103081535811"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p63091435313"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p63091435313"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p63091435313"></a>当前刷页到双写文件区的总的页面个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_row72492411517"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1225016412112"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1225016412112"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1225016412112"></a>low_threshold_pages</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p225064112116"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p225064112116"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p225064112116"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p0250114115112"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p0250114115112"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p0250114115112"></a>低效率刷页的页面个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_row1666717458115"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1166804518119"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1166804518119"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p1166804518119"></a>high_threshold_pages</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p766811459112"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p766811459112"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p766811459112"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p10668194514119"><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p10668194514119"></a><a name="zh-cn_topic_0283136638_zh-cn_topic_0237122716_p10668194514119"></a>高效率刷页的页面个数。</p>
</td>
</tr>
<tr id="row21321879435"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p51333718432"><a name="p51333718432"></a><a name="p51333718432"></a>file_id</p>
</td>
<td class="cellrowborder" valign="top" width="20.66%" headers="mcps1.2.4.1.2 "><p id="p1213319714318"><a name="p1213319714318"></a><a name="p1213319714318"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.79%" headers="mcps1.2.4.1.3 "><p id="p11133770434"><a name="p11133770434"></a><a name="p11133770434"></a>当前双写文件的id号。</p>
</td>
</tr>
</tbody>
</table>
