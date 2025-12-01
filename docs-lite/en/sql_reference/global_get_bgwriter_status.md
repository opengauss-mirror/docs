# GLOBAL\_GET\_BGWRITER\_STATUS<a name="EN-US_TOPIC_0289900970"></a>

**GLOBAL\_GET\_BGWRITER\_STATUS**  displays the information about pages flushed by the bgwriter threads of all instances in the database, number of pages in the candidate buffer chain, and buffer eviction information.

**Table  1**  GLOBAL\_GET\_BGWRITER\_STATUS columns

<a name="en-us_topic_0283137052_en-us_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="en-us_topic_0283137052_en-us_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137052_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="en-us_topic_0283137052_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="20.69%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137052_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="en-us_topic_0283137052_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137052_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="en-us_topic_0283137052_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137052_row757161654315"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137052_p15571161614431"><a name="en-us_topic_0283137052_p15571161614431"></a><a name="en-us_topic_0283137052_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137052_p1457191694314"><a name="en-us_topic_0283137052_p1457191694314"></a><a name="en-us_topic_0283137052_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137052_p14572111616430"><a name="en-us_topic_0283137052_p14572111616430"></a><a name="en-us_topic_0283137052_p14572111616430"></a>Node name</p>
</td>
</tr>
<tr id="en-us_topic_0283137052_row4331121184412"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137052_p42652367477"><a name="en-us_topic_0283137052_p42652367477"></a><a name="en-us_topic_0283137052_p42652367477"></a>bgwr_actual_flush_total_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137052_p183326113441"><a name="en-us_topic_0283137052_p183326113441"></a><a name="en-us_topic_0283137052_p183326113441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137052_p196485711489"><a name="en-us_topic_0283137052_p196485711489"></a><a name="en-us_topic_0283137052_p196485711489"></a>Total number of dirty pages flushed by the bgwriter thread from the startup time to the current time</p>
</td>
</tr>
<tr id="en-us_topic_0283137052_en-us_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137052_p286612409472"><a name="en-us_topic_0283137052_p286612409472"></a><a name="en-us_topic_0283137052_p286612409472"></a>bgwr_last_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137052_p141611830114819"><a name="en-us_topic_0283137052_p141611830114819"></a><a name="en-us_topic_0283137052_p141611830114819"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="en-us_topic_0283137052_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>Number of dirty pages flushed by the bgwriter thread in the previous batch</p>
</td>
</tr>
<tr id="en-us_topic_0283137052_en-us_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137052_p9514114434720"><a name="en-us_topic_0283137052_p9514114434720"></a><a name="en-us_topic_0283137052_p9514114434720"></a>candidate_slots</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="en-us_topic_0283137052_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"><a name="en-us_topic_0283137052_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a>Number of pages in the current candidate buffer chain.</p>
</td>
</tr>
<tr id="en-us_topic_0283137052_en-us_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137052_p208491052104717"><a name="en-us_topic_0283137052_p208491052104717"></a><a name="en-us_topic_0283137052_p208491052104717"></a>get_buffer_from_list</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="en-us_topic_0283137052_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="en-us_topic_0283137052_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>Number of times that pages are obtained from the candidate buffer chain during buffer eviction.</p>
</td>
</tr>
<tr id="en-us_topic_0283137052_en-us_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"><a name="en-us_topic_0283137052_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a>get_buffer_clock_sweep</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137052_p13777192233610"><a name="en-us_topic_0283137052_p13777192233610"></a><a name="en-us_topic_0283137052_p13777192233610"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137052_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="en-us_topic_0283137052_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="en-us_topic_0283137052_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>Number of times that pages are obtained from the original eviction solution during buffer eviction.</p>
</td>
</tr>
</tbody>
</table>

