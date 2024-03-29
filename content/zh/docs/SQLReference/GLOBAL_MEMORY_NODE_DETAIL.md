# GLOBAL\_MEMORY\_NODE\_DETAIL

显示当前openGauss中所有正常节点下的内存使用情况。

此视图依赖内存保护功能开启。

**表 1**  GLOBAL\_MEMORY\_NODE\_DETAIL字段

<a name="zh-cn_topic_0237122561_table0610155043612"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122561_row14830165013615"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122561_p1383017504365"><a name="zh-cn_topic_0237122561_p1383017504365"></a><a name="zh-cn_topic_0237122561_p1383017504365"></a><strong id="zh-cn_topic_0237122561_b1983045013617"><a name="zh-cn_topic_0237122561_b1983045013617"></a><a name="zh-cn_topic_0237122561_b1983045013617"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122561_p48309509365"><a name="zh-cn_topic_0237122561_p48309509365"></a><a name="zh-cn_topic_0237122561_p48309509365"></a><strong id="zh-cn_topic_0237122561_b28301750153611"><a name="zh-cn_topic_0237122561_b28301750153611"></a><a name="zh-cn_topic_0237122561_b28301750153611"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122561_p6830350173619"><a name="zh-cn_topic_0237122561_p6830350173619"></a><a name="zh-cn_topic_0237122561_p6830350173619"></a><strong id="zh-cn_topic_0237122561_b15830175083613"><a name="zh-cn_topic_0237122561_b15830175083613"></a><a name="zh-cn_topic_0237122561_b15830175083613"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122561_row3830115033611"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122561_p1383017501368"><a name="zh-cn_topic_0237122561_p1383017501368"></a><a name="zh-cn_topic_0237122561_p1383017501368"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122561_p683119506363"><a name="zh-cn_topic_0237122561_p683119506363"></a><a name="zh-cn_topic_0237122561_p683119506363"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122561_p28312505366"><a name="zh-cn_topic_0237122561_p28312505366"></a><a name="zh-cn_topic_0237122561_p28312505366"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122561_row18831145033612"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122561_p14831205073620"><a name="zh-cn_topic_0237122561_p14831205073620"></a><a name="zh-cn_topic_0237122561_p14831205073620"></a>memorytype</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122561_p283135053619"><a name="zh-cn_topic_0237122561_p283135053619"></a><a name="zh-cn_topic_0237122561_p283135053619"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0237122561_p683175017369"><a name="zh-cn_topic_0237122561_p683175017369"></a><a name="zh-cn_topic_0237122561_p683175017369"></a>内存使用的名称。<a name="zh-cn_topic_0237122561_ul483115014361"></a><a name="zh-cn_topic_0237122561_ul483115014361"></a><ul id="zh-cn_topic_0237122561_ul483115014361"><li>max_process_memory：<span id="zh-cn_topic_0237122561_text44751618105518"><a name="zh-cn_topic_0237122561_text44751618105518"></a><a name="zh-cn_topic_0237122561_text44751618105518"></a>openGauss</span>实例所占用的内存大小。</li><li>process_used_memory：进程所使用的内存大小。</li><li>max_dynamic_memory：最大动态内存。</li><li>dynamic_used_memory：已使用的动态内存。</li><li>dynamic_peak_memory：内存的动态峰值。</li><li>dynamic_used_shrctx：最大动态共享内存上下文。</li><li>dynamic_peak_shrctx：共享内存上下文的动态峰值。</li><li>max_shared_memory：最大共享内存。</li><li>shared_used_memory：已使用的共享内存。</li><li>max_cstore_memory：列存所允许使用的最大内存。</li><li>cstore_used_memory：列存已使用的内存大小。</li><li>max_sctpcomm_memory：sctp通信所允许使用的最大内存。</li><li>sctpcomm_used_memory：sctp通信已使用的内存大小。</li><li>sctpcomm_peak_memory：sctp通信的内存峰值。</li><li>other_used_memory：其他已使用的内存大小。</li><li>gpu_max_dynamic_memory：GPU最大动态内存。</li><li>gpu_dynamic_used_memory：GPU已使用的动态内存。</li><li>gpu_dynamic_peak_memory：GPU内存的动态峰值。</li><li>pooler_conn_memory：链接池申请内存计数。</li><li>pooler_freeconn_memory：链接池空闲连接的内存计数。</li><li>storage_compress_memory：存储模块压缩使用的内存大小。</li><li>udf_reserved_memory：UDF预留的内存大小。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0237122561_row1783515503364"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122561_p9835150163616"><a name="zh-cn_topic_0237122561_p9835150163616"></a><a name="zh-cn_topic_0237122561_p9835150163616"></a>memorymbytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122561_p1183565033619"><a name="zh-cn_topic_0237122561_p1183565033619"></a><a name="zh-cn_topic_0237122561_p1183565033619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122561_p2835145012369"><a name="zh-cn_topic_0237122561_p2835145012369"></a><a name="zh-cn_topic_0237122561_p2835145012369"></a>内存使用的大小，单位为MB。</p>
</td>
</tr>
</tbody>
</table>

