# LOCAL\_THREADPOOL\_STATUS<a name="ZH-CN_TOPIC_0245374745"></a>

LOCAL\_THREADPOOL\_STATUS视图显示线程池下工作线程及会话的状态信息。该视图仅在线程池开启（enable\_thread\_pool = on）时生效。

**表 1**  LOCAL\_THREADPOOL\_STATUS字段

<a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_tc25f02433de2419f8da4d0a8c2c8e562"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_rea54060e599a49eb9c70be97cf91d9a0"><th class="cellrowborder" valign="top" width="23.75%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a32c1f84b5026462b86d11c4d809914f3"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.49%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_adc94583cb9b24e22bc66ecd21efdbf23"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="56.76%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a338cfb9341434b298385f2ba72e9620a"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122641_row757161654315"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122641_p15571161614431"><a name="zh-cn_topic_0237122641_p15571161614431"></a><a name="zh-cn_topic_0237122641_p15571161614431"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122641_p1457191694314"><a name="zh-cn_topic_0237122641_p1457191694314"></a><a name="zh-cn_topic_0237122641_p1457191694314"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122641_p14572111616430"><a name="zh-cn_topic_0237122641_p14572111616430"></a><a name="zh-cn_topic_0237122641_p14572111616430"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122641_row4331121184412"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122641_p0332611449"><a name="zh-cn_topic_0237122641_p0332611449"></a><a name="zh-cn_topic_0237122641_p0332611449"></a>group_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122641_p183326113441"><a name="zh-cn_topic_0237122641_p183326113441"></a><a name="zh-cn_topic_0237122641_p183326113441"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122641_p1933218118445"><a name="zh-cn_topic_0237122641_p1933218118445"></a><a name="zh-cn_topic_0237122641_p1933218118445"></a>线程池组ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_r70b979ea9a8c44088f169a2ed862a5e8"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a189be4244ba24464883ea28942896966"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a189be4244ba24464883ea28942896966"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a189be4244ba24464883ea28942896966"></a>bind_numa_id</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_ab01485ca1bd84a359dfeeb153ad699f9"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a382f47d73e7848e19eb1855c75c577e6"></a>该线程池组绑定的NUMA ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_r04a260d93f86474d8a270ecddee95749"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aba8c43466535431da7394bc8cb15abe7"></a>bind_cpu_number</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_af6663e23d11a47f5be18a42f98533bb8"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a0faf0893b3f8464aba64d3360be7ea39"></a>该线程池组绑定的CPU信息。如果未绑定CPU，该值为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_r34e57b3cec1d444992a50a171f8473cc"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aba9e0733d47e4984bfd06d56f1098390"></a>listener</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_aa36bd62dac9d4647b36218100312733d"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a><a name="zh-cn_topic_0237122641_zh-cn_topic_0059778133_a8392d26664af4197b11ac091cba47b60"></a>该线程池组的Listener线程数量。</p>
</td>
</tr>
<tr id="row16610201141119"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p4613112118"><a name="p4613112118"></a><a name="p4613112118"></a>worker_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="p1161331191120"><a name="p1161331191120"></a><a name="p1161331191120"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"><a name="zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a><a name="zh-cn_topic_0059778133_a027cb0c2fb494d2f96e6a0450a09023e"></a>线程池中线程相关信息，包括以下信息：</p>
<a name="ul164246573148"></a><a name="ul164246573148"></a><ul id="ul164246573148"><li>default：该线程池组中的初始线程数量。</li><li>new：该线程池组中新增线程的数量。</li><li>expect：该线程池组中预期线程的数量。</li><li>actual：该线程池组中实际线程的数量。</li><li>idle：该线程池组中空闲线程的数量。</li><li>pending：该线程池组中等待线程的数量。</li></ul>
</td>
</tr>
<tr id="row78596541114"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p785912516116"><a name="p785912516116"></a><a name="p785912516116"></a>session_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="p1186016520115"><a name="p1186016520115"></a><a name="p1186016520115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p119613371672"><a name="p119613371672"></a><a name="p119613371672"></a>线程池中会话相关信息，包括以下信息：</p>
<a name="ul2055983161912"></a><a name="ul2055983161912"></a><ul id="ul2055983161912"><li>total：该线程池组中所有的会话数量。</li><li>waiting：该线程池组中等待调度的会话数量。</li><li>running：该线程池中正在执行的会话数量。</li><li>idle：该线程池组中空闲的会话数量。</li></ul>
</td>
</tr>
   <tr id="row78596541114"><td class="cellrowborder" valign="top" width="23.75%" headers="mcps1.2.4.1.1 "><p id="p785912516116"><a name="p785912516116"></a><a name="p785912516116"></a>stream_info</p>
</td>
<td class="cellrowborder" valign="top" width="19.49%" headers="mcps1.2.4.1.2 "><p id="p1186016520115"><a name="p1186016520115"></a><a name="p1186016520115"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="56.76%" headers="mcps1.2.4.1.3 "><p id="p119613371672"><a name="p119613371672"></a><a name="p119613371672"></a>stream池相关信息，包含以下信息：</p>
<a name="ul2055983161912"></a><a name="ul2055983161912"></a><ul id="ul2055983161912"><li>total：该stream池组中所有的线程数量。</li><li>running：该stream池中正在执行的线程数量。</li><li>idle：该stream池组中空闲的线程数量。</li></ul>
</td>
</tr>
</tbody>
</table>
