# GLOBAL\_PAGEWRITER\_STATUS<a name="EN-US_TOPIC_0245374821"></a>

**GLOBAL\_PAGEWRITER\_STATUS**  displays the page flushing information and checkpoint information about all instances in openGauss. 

**Table  1**  GLOBAL\_PAGEWRITER\_STATUS columns

<a name="en-us_topic_0237122717_en-us_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="en-us_topic_0237122717_en-us_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="22.55%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122717_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="en-us_topic_0237122717_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="20.69%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122717_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="en-us_topic_0237122717_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122717_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="en-us_topic_0237122717_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122717_row757161654315"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p15571161614431"><a name="en-us_topic_0237122717_p15571161614431"></a><a name="en-us_topic_0237122717_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_p1457191694314"><a name="en-us_topic_0237122717_p1457191694314"></a><a name="en-us_topic_0237122717_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_p14572111616430"><a name="en-us_topic_0237122717_p14572111616430"></a><a name="en-us_topic_0237122717_p14572111616430"></a>node name</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_row4331121184412"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p42652367477"><a name="en-us_topic_0237122717_p42652367477"></a><a name="en-us_topic_0237122717_p42652367477"></a>pgwr_actual_flush_total_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_p183326113441"><a name="en-us_topic_0237122717_p183326113441"></a><a name="en-us_topic_0237122717_p183326113441"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_p196485711489"><a name="en-us_topic_0237122717_p196485711489"></a><a name="en-us_topic_0237122717_p196485711489"></a>Total number of dirty pages flushed from the startup time to the current time</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_en-us_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p286612409472"><a name="en-us_topic_0237122717_p286612409472"></a><a name="en-us_topic_0237122717_p286612409472"></a>pgwr_last_flush_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_p141611830114819"><a name="en-us_topic_0237122717_p141611830114819"></a><a name="en-us_topic_0237122717_p141611830114819"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="en-us_topic_0237122717_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>Number of dirty pages flushed in the previous batch</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_en-us_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p9514114434720"><a name="en-us_topic_0237122717_p9514114434720"></a><a name="en-us_topic_0237122717_p9514114434720"></a>remain_dirty_page_num</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="en-us_topic_0237122717_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"><a name="en-us_topic_0237122717_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a>Estimated number of dirty pages that are not flushed</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_en-us_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p208491052104717"><a name="en-us_topic_0237122717_p208491052104717"></a><a name="en-us_topic_0237122717_p208491052104717"></a>queue_head_page_rec_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="en-us_topic_0237122717_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="en-us_topic_0237122717_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><strong id="b1570724316399"><a name="b1570724316399"></a><a name="b1570724316399"></a>recovery_lsn</strong> of the first dirty page in the dirty page queue of the current instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_en-us_topic_0059778133_re2b1e3c100874445ae8b9f6672fd44b8"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"><a name="en-us_topic_0237122717_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_aa94b6d5d13c04feb8de4b1e39807c33c"></a>queue_rec_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_p1536784219486"><a name="en-us_topic_0237122717_p1536784219486"></a><a name="en-us_topic_0237122717_p1536784219486"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="en-us_topic_0237122717_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="en-us_topic_0237122717_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><strong id="b913614548399"><a name="b913614548399"></a><a name="b913614548399"></a>recovery_lsn</strong> of the dirty page queue of the current instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_en-us_topic_0059778133_r79a8e626edca446ea25954f708ff34f9"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p1536415313486"><a name="en-us_topic_0237122717_p1536415313486"></a><a name="en-us_topic_0237122717_p1536415313486"></a>current_xlog_insert_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_p128956455481"><a name="en-us_topic_0237122717_p128956455481"></a><a name="en-us_topic_0237122717_p128956455481"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_p143819517518"><a name="en-us_topic_0237122717_p143819517518"></a><a name="en-us_topic_0237122717_p143819517518"></a>Write position of Xlogs in the current instance</p>
</td>
</tr>
<tr id="en-us_topic_0237122717_row97943954819"><td class="cellrowborder" valign="top" width="22.55%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122717_p1479519164819"><a name="en-us_topic_0237122717_p1479519164819"></a><a name="en-us_topic_0237122717_p1479519164819"></a>ckpt_redo_point</p>
</td>
<td class="cellrowborder" valign="top" width="20.69%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122717_p379512954818"><a name="en-us_topic_0237122717_p379512954818"></a><a name="en-us_topic_0237122717_p379512954818"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122717_p079518915484"><a name="en-us_topic_0237122717_p079518915484"></a><a name="en-us_topic_0237122717_p079518915484"></a>Checkpoint of the current instance</p>
</td>
</tr>
</tbody>
</table>

