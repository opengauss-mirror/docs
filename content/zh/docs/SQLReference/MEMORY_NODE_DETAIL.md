# MEMORY\_NODE\_DETAIL

显示某个数据库节点内存使用情况。

**表 1**  MEMORY\_NODE\_DETAIL字段

<a name="zh-cn_topic_0237122560_table64521053123519"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122560_row5522753163514"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122560_p1552295319353"><a name="zh-cn_topic_0237122560_p1552295319353"></a><a name="zh-cn_topic_0237122560_p1552295319353"></a><strong id="zh-cn_topic_0237122560_b1252235310353"><a name="zh-cn_topic_0237122560_b1252235310353"></a><a name="zh-cn_topic_0237122560_b1252235310353"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122560_p1752218531352"><a name="zh-cn_topic_0237122560_p1752218531352"></a><a name="zh-cn_topic_0237122560_p1752218531352"></a><strong id="zh-cn_topic_0237122560_b16523125311353"><a name="zh-cn_topic_0237122560_b16523125311353"></a><a name="zh-cn_topic_0237122560_b16523125311353"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122560_p85231053133513"><a name="zh-cn_topic_0237122560_p85231053133513"></a><a name="zh-cn_topic_0237122560_p85231053133513"></a><strong id="zh-cn_topic_0237122560_b125231153193511"><a name="zh-cn_topic_0237122560_b125231153193511"></a><a name="zh-cn_topic_0237122560_b125231153193511"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122560_row552315318357"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122560_p11523115363511"><a name="zh-cn_topic_0237122560_p11523115363511"></a><a name="zh-cn_topic_0237122560_p11523115363511"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122560_p1523155311352"><a name="zh-cn_topic_0237122560_p1523155311352"></a><a name="zh-cn_topic_0237122560_p1523155311352"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122560_p16524175319350"><a name="zh-cn_topic_0237122560_p16524175319350"></a><a name="zh-cn_topic_0237122560_p16524175319350"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122560_row452415393511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122560_p65241253153519"><a name="zh-cn_topic_0237122560_p65241253153519"></a><a name="zh-cn_topic_0237122560_p65241253153519"></a>memorytype</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122560_p85241533353"><a name="zh-cn_topic_0237122560_p85241533353"></a><a name="zh-cn_topic_0237122560_p85241533353"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0237122560_p5524553203520"><a name="zh-cn_topic_0237122560_p5524553203520"></a><a name="zh-cn_topic_0237122560_p5524553203520"></a>内存的名称。<a name="zh-cn_topic_0237122561_ul483115014361"></a><a name="zh-cn_topic_0237122561_ul483115014361"></a><ul id="zh-cn_topic_0237122561_ul483115014361"><li>max_process_memory：<span id="zh-cn_topic_0237122561_text44751618105518"><a name="zh-cn_topic_0237122561_text44751618105518"></a><a name="zh-cn_topic_0237122561_text44751618105518"></a>openGauss</span>实例所占用的内存大小。</li><li>process_used_memory：进程所使用的内存大小。</li><li>max_dynamic_memory：最大动态内存。</li><li>dynamic_used_memory：已使用的动态内存。</li><li>dynamic_peak_memory：内存的动态峰值。</li><li>dynamic_used_shrctx：最大动态共享内存上下文。</li><li>dynamic_peak_shrctx：共享内存上下文的动态峰值。</li><li>max_shared_memory：最大共享内存。</li><li>shared_used_memory：已使用的共享内存。</li><li>max_cstore_memory：列存所允许使用的最大内存。</li><li>cstore_used_memory：列存已使用的内存大小。</li><li>max_sctpcomm_memory：sctp通信所允许使用的最大内存。</li><li>sctpcomm_used_memory：sctp通信已使用的内存大小。</li><li>sctpcomm_peak_memory：sctp通信的内存峰值。</li><li>other_used_memory：其他已使用的内存大小。</li><li>gpu_max_dynamic_memory：GPU最大动态内存。</li><li>gpu_dynamic_used_memory：GPU已使用的动态内存。</li><li>gpu_dynamic_peak_memory：GPU内存的动态峰值。</li><li>pooler_conn_memory：链接池申请内存计数。</li><li>pooler_freeconn_memory：链接池空闲连接的内存计数。</li><li>storage_compress_memory：存储模块压缩使用的内存大小。</li><li>udf_reserved_memory：UDF预留的内存大小。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0237122560_row352417536353"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122560_p8524175373517"><a name="zh-cn_topic_0237122560_p8524175373517"></a><a name="zh-cn_topic_0237122560_p8524175373517"></a>memorymbytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122560_p5524125303515"><a name="zh-cn_topic_0237122560_p5524125303515"></a><a name="zh-cn_topic_0237122560_p5524125303515"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122560_p1524153123513"><a name="zh-cn_topic_0237122560_p1524153123513"></a><a name="zh-cn_topic_0237122560_p1524153123513"></a>内存使用的大小，单位为MB。</p>
</td>
</tr>
</tbody>
</table>

