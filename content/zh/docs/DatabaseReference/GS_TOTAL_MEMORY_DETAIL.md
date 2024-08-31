# GS\_TOTAL\_MEMORY\_DETAIL

GS\_TOTAL\_MEMORY\_DETAIL视图统计当前数据库节点使用内存的信息，单位为MB。当GUC参数enable\_memory\_limit的值为off时，本视图不可用。

**表 1**  GS\_TOTAL\_MEMORY\_DETAIL字段

<a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ta451d5c762a348078f6f4862f1517267"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_r07b299704b9940f687e6d79c1f322a65"><th class="cellrowborder" valign="top" width="20.14%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a0a859e2167dc46a39030a857642dc245"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a0a859e2167dc46a39030a857642dc245"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a0a859e2167dc46a39030a857642dc245"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="16.900000000000002%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_aba2f22c06fdd4420953f349559016449"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_aba2f22c06fdd4420953f349559016449"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_aba2f22c06fdd4420953f349559016449"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="62.96000000000001%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a01dae793686e46869a63740f70db8669"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a01dae793686e46869a63740f70db8669"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a01dae793686e46869a63740f70db8669"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_rd3156898c56c494abef783f03c9cfe27"><td class="cellrowborder" valign="top" width="20.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ab2df39707d9d4fe08bfe08c7f14159fb"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ab2df39707d9d4fe08bfe08c7f14159fb"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ab2df39707d9d4fe08bfe08c7f14159fb"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a9ea47633bddd4d8698857c6ecdbd808b"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a9ea47633bddd4d8698857c6ecdbd808b"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a9ea47633bddd4d8698857c6ecdbd808b"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.96000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a9ceb93a18fda46c08b15aa14a2f03724"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a9ceb93a18fda46c08b15aa14a2f03724"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a9ceb93a18fda46c08b15aa14a2f03724"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_r517a2b6081524615a7d2be38f3ff862b"><td class="cellrowborder" valign="top" width="20.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ae9e697cb81fa4262b8d2e274faf7a86a"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ae9e697cb81fa4262b8d2e274faf7a86a"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ae9e697cb81fa4262b8d2e274faf7a86a"></a>memorytype</p>
</td>
<td class="cellrowborder" valign="top" width="16.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a77d91c3c7e564e7aaed8149b4695c400"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a77d91c3c7e564e7aaed8149b4695c400"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a77d91c3c7e564e7aaed8149b4695c400"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="62.96000000000001%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ac7bb6fef6dad4d129bebb02087e11ef1"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ac7bb6fef6dad4d129bebb02087e11ef1"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ac7bb6fef6dad4d129bebb02087e11ef1"></a>内存类型，包括以下几种：<a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_u88c482574ea344e0b300ae5aea3150b1"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_u88c482574ea344e0b300ae5aea3150b1"></a><ul id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_u88c482574ea344e0b300ae5aea3150b1"><li>max_process_memory：<span id="text1798254510538"><a name="text1798254510538"></a><a name="text1798254510538"></a>openGauss</span>实例所占用的内存大小。</li><li>process_used_memory：<span id="text552395214112"><a name="text552395214112"></a><a name="text552395214112"></a>openGauss</span>进程所使用的内存大小。</li><li>max_dynamic_memory：最大动态内存。</li><li>dynamic_used_memory：已使用的动态内存。</li><li>dynamic_peak_memory：内存的动态峰值。</li><li>dynamic_used_shrctx：最大动态共享内存上下文。</li><li>dynamic_peak_shrctx：共享内存上下文的动态峰值。</li><li>max_shared_memory：最大共享内存。</li><li>shared_used_memory：已使用的共享内存。</li><li>max_cstore_memory：列存所允许使用的最大内存。</li><li>cstore_used_memory：列存已使用的内存大小。</li><li>max_sctpcomm_memory：通信库所允许使用的最大内存。</li><li>sctpcomm_used_memory：通信库已使用的内存大小。</li><li>sctpcomm_peak_memory：通信库的内存峰值。</li><li>other_used_memory：其他已使用的内存大小。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_r7748f97fe30847679befb97eb5b4a50c"><td class="cellrowborder" valign="top" width="20.14%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_abf2fdb1838cb4e23874be81970b776c9"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_abf2fdb1838cb4e23874be81970b776c9"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_abf2fdb1838cb4e23874be81970b776c9"></a>memorymbytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.900000000000002%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a70ba137cb8b14925826bfd7a1a2674f4"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a70ba137cb8b14925826bfd7a1a2674f4"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_a70ba137cb8b14925826bfd7a1a2674f4"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="62.96000000000001%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ad67d7ecf2dab4d449c49e5af770e9600"><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ad67d7ecf2dab4d449c49e5af770e9600"></a><a name="zh-cn_topic_0283137610_zh-cn_topic_0237122512_zh-cn_topic_0059777855_ad67d7ecf2dab4d449c49e5af770e9600"></a>内存类型分配内存的大小。</p>
</td>
</tr>
</tbody>
</table>

