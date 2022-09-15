# LOCAL\_THREADPOOL\_STATUS<a name="EN-US_TOPIC_0289900815"></a>

**LOCAL\_THREADPOOL\_STATUS**  displays the status of worker threads and sessions in a thread pool. This view is valid only when  **enable\_thread\_pool**  is set to  **on**.

**Table  1**  LOCAL\_THREADPOOL\_STATUS columns

<a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="23.75%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="19.49%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137060_en-us_topic_0237122641_row757161654315"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_p15571161614431"><a name="en-us_topic_0283137060_en-us_topic_0237122641_p15571161614431"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_p1457191694314"><a name="en-us_topic_0283137060_en-us_topic_0237122641_p1457191694314"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_p14572111616430"><a name="en-us_topic_0283137060_en-us_topic_0237122641_p14572111616430"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_p14572111616430"></a>Database process name</p>
</td>
</tr>
<tr id="en-us_topic_0283137060_en-us_topic_0237122641_row4331121184412"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_p0332611449"><a name="en-us_topic_0283137060_en-us_topic_0237122641_p0332611449"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_p0332611449"></a>group_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_p183326113441"><a name="en-us_topic_0283137060_en-us_topic_0237122641_p183326113441"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_p183326113441"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_p1933218118445"><a name="en-us_topic_0283137060_en-us_topic_0237122641_p1933218118445"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_p1933218118445"></a>ID of the thread pool group</p>
</td>
</tr>
<tr id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a189be4244ba24464883ea28942896966"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a189be4244ba24464883ea28942896966"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a189be4244ba24464883ea28942896966"></a>bind_numa_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>NUMA ID to which the thread pool group is bound</p>
</td>
</tr>
<tr id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"></a>bind_cpu_number</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a>Information about the CPU to which the thread pool group is bound. If no CPUs are bound, the value is <strong id="en-us_topic_0283137060_b1083112210503"><a name="en-us_topic_0283137060_b1083112210503"></a><a name="en-us_topic_0283137060_b1083112210503"></a>NULL</strong>.</p>
</td>
</tr>
<tr id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"></a>listener</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="en-us_topic_0283137060_en-us_topic_0237122641_en-us_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>Number of listener threads in the thread pool group</p>
</td>
</tr>
<tr id="en-us_topic_0283137060_row16610201141119"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_p4613112118"><a name="en-us_topic_0283137060_p4613112118"></a><a name="en-us_topic_0283137060_p4613112118"></a>worker_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_p1161331191120"><a name="en-us_topic_0283137060_p1161331191120"></a><a name="en-us_topic_0283137060_p1161331191120"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="en-us_topic_0283137060_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="en-us_topic_0283137060_en-us_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>Information about threads in the thread pool, including:</p>
<a name="en-us_topic_0283137060_ul164246573148"></a><a name="en-us_topic_0283137060_ul164246573148"></a><ul id="en-us_topic_0283137060_ul164246573148"><li><strong id="en-us_topic_0283137060_b471122910248"><a name="en-us_topic_0283137060_b471122910248"></a><a name="en-us_topic_0283137060_b471122910248"></a>default</strong>: Number of initial threads in the thread pool group</li><li><strong id="en-us_topic_0283137060_b127831024142817"><a name="en-us_topic_0283137060_b127831024142817"></a><a name="en-us_topic_0283137060_b127831024142817"></a>new</strong>: Number of new threads in the thread pool group</li><li><strong id="en-us_topic_0283137060_b1144545932910"><a name="en-us_topic_0283137060_b1144545932910"></a><a name="en-us_topic_0283137060_b1144545932910"></a>expect</strong>: Expected number of threads in the thread pool group</li><li><strong id="en-us_topic_0283137060_b6452193018309"><a name="en-us_topic_0283137060_b6452193018309"></a><a name="en-us_topic_0283137060_b6452193018309"></a>actual</strong>: Actual number of threads in the thread pool group</li><li><strong id="en-us_topic_0283137060_b13259115233010"><a name="en-us_topic_0283137060_b13259115233010"></a><a name="en-us_topic_0283137060_b13259115233010"></a>idle</strong>: Number of idle threads in the thread pool group</li><li><strong id="en-us_topic_0283137060_b14548104153117"><a name="en-us_topic_0283137060_b14548104153117"></a><a name="en-us_topic_0283137060_b14548104153117"></a>pending</strong>: Number of pending threads in the thread pool group</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137060_row78596541114"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283137060_p785912516116"><a name="en-us_topic_0283137060_p785912516116"></a><a name="en-us_topic_0283137060_p785912516116"></a>session_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283137060_p1186016520115"><a name="en-us_topic_0283137060_p1186016520115"></a><a name="en-us_topic_0283137060_p1186016520115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283137060_p119613371672"><a name="en-us_topic_0283137060_p119613371672"></a><a name="en-us_topic_0283137060_p119613371672"></a>Information about sessions in the thread pool, including:</p>
<a name="en-us_topic_0283137060_ul2055983161912"></a><a name="en-us_topic_0283137060_ul2055983161912"></a><ul id="en-us_topic_0283137060_ul2055983161912"><li><strong id="en-us_topic_0283137060_b13174143813113"><a name="en-us_topic_0283137060_b13174143813113"></a><a name="en-us_topic_0283137060_b13174143813113"></a>total</strong>: Total number of sessions in the thread pool group</li><li><strong id="en-us_topic_0283137060_b543410478310"><a name="en-us_topic_0283137060_b543410478310"></a><a name="en-us_topic_0283137060_b543410478310"></a>waiting</strong>: Number of sessions pending scheduling in the thread pool group</li><li><strong id="en-us_topic_0283137060_b1179910339320"><a name="en-us_topic_0283137060_b1179910339320"></a><a name="en-us_topic_0283137060_b1179910339320"></a>running</strong>: Number of running sessions in the thread pool group</li><li><strong id="en-us_topic_0283137060_b94451843183211"><a name="en-us_topic_0283137060_b94451843183211"></a><a name="en-us_topic_0283137060_b94451843183211"></a>idle</strong>: Number of idle sessions in the thread pool group</li></ul>
</td>
</tr>
  <tr id="row78596541114"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p785912516116"><a name="p785912516116"></a><a name="p785912516116"></a>stream_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="p1186016520115"><a name="p1186016520115"></a><a name="p1186016520115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p119613371672"><a name="p119613371672"></a><a name="p119613371672"></a>Stream pool information, including:</p>
<a name="ul2055983161912"></a><a name="ul2055983161912"></a><ul id="ul2055983161912"><li><strong>total</strong>: total number of threads in the stream pool. </li><li><strong>running</strong>: number of threads that are being executed in the stream pool. </li><li><strong>idle</strong>: number of idle threads in the stream pool.</li></ul>
</td>
</tr>
</tbody>
</table>
