# GLOBAL\_GET\_BGWRITER\_STATUS

GLOBAL\_GET\_BGWRITER\_STATUS视图显示所有实例bgwriter线程刷页信息，候选buffer链中页面个数，buffer淘汰信息。

**表 1**  GLOBAL\_GET\_BGWRITER\_STATUS字段

<a name="zh-cn_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.69%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row757161654315"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p15571161614431"><a name="p15571161614431"></a><a name="p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p1457191694314"><a name="p1457191694314"></a><a name="p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p14572111616430"><a name="p14572111616430"></a><a name="p14572111616430"></a>实例名称。</p>
</td>
</tr>
<tr id="row4331121184412"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p42652367477"><a name="p42652367477"></a><a name="p42652367477"></a>bgwr_actual_flush_total_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p183326113441"><a name="p183326113441"></a><a name="p183326113441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p196485711489"><a name="p196485711489"></a><a name="p196485711489"></a>从启动到当前时间bgwriter线程总计刷脏页数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p286612409472"><a name="p286612409472"></a><a name="p286612409472"></a>bgwr_last_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p141611830114819"><a name="p141611830114819"></a><a name="p141611830114819"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>bgwriter线程上一批刷脏页数量。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p9514114434720"><a name="p9514114434720"></a><a name="p9514114434720"></a>candidate_slots</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"><a name="zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a><a name="zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a>当前候选buffer链中页面个数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="p208491052104717"><a name="p208491052104717"></a><a name="p208491052104717"></a>get_buffer_from_list</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>buffer淘汰从候选buffer链中获取页面的次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"><a name="zh-cn_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a><a name="zh-cn_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a>get_buffer_clock_sweep</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="p13777192233610"><a name="p13777192233610"></a><a name="p13777192233610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>buffer淘汰从原淘汰方案中获取页面的次数。</p>
</td>
</tr>
</tbody>
</table>

