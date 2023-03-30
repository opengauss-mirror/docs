# GLOBAL\_MEMORY\_NODE\_DETAIL<a name="EN-US_TOPIC_0245374665"></a>

The memory usage of all normal nodes in openGauss is displayed. 

**Table  1**  GLOBAL\_MEMORY\_NODE\_DETAIL fields

<a name="en-us_topic_0237122561_table0610155043612"></a>
<table><thead align="left"><tr id="en-us_topic_0237122561_row14830165013615"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122561_p1383017504365"><a name="en-us_topic_0237122561_p1383017504365"></a><a name="en-us_topic_0237122561_p1383017504365"></a><strong id="b626442316443"><a name="b626442316443"></a><a name="b626442316443"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122561_p48309509365"><a name="en-us_topic_0237122561_p48309509365"></a><a name="en-us_topic_0237122561_p48309509365"></a><strong id="b87556265445"><a name="b87556265445"></a><a name="b87556265445"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122561_p6830350173619"><a name="en-us_topic_0237122561_p6830350173619"></a><a name="en-us_topic_0237122561_p6830350173619"></a><strong id="b207913012449"><a name="b207913012449"></a><a name="b207913012449"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122561_row3830115033611"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122561_p1383017501368"><a name="en-us_topic_0237122561_p1383017501368"></a><a name="en-us_topic_0237122561_p1383017501368"></a>nodename</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122561_p683119506363"><a name="en-us_topic_0237122561_p683119506363"></a><a name="en-us_topic_0237122561_p683119506363"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122561_p28312505366"><a name="en-us_topic_0237122561_p28312505366"></a><a name="en-us_topic_0237122561_p28312505366"></a>Node name.</p>
</td>
</tr>
<tr id="en-us_topic_0237122561_row18831145033612"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122561_p14831205073620"><a name="en-us_topic_0237122561_p14831205073620"></a><a name="en-us_topic_0237122561_p14831205073620"></a>memorytype</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122561_p283135053619"><a name="en-us_topic_0237122561_p283135053619"></a><a name="en-us_topic_0237122561_p283135053619"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><div class="p" id="en-us_topic_0237122561_p683175017369"><a name="en-us_topic_0237122561_p683175017369"></a><a name="en-us_topic_0237122561_p683175017369"></a>Memory name.<a name="en-us_topic_0237122561_ul483115014361"></a><a name="en-us_topic_0237122561_ul483115014361"></a><ul id="en-us_topic_0237122561_ul483115014361"><li><strong id="b197703261263"><a name="b197703261263"></a><a name="b197703261263"></a>max_process_memory</strong>: memory occupied by the <span id="text16775152614616"><a name="text16775152614616"></a><a name="text16775152614616"></a>openGauss</span> instance</li><li><strong id="b134912391861"><a name="b134912391861"></a><a name="b134912391861"></a>process_used_memory</strong>: memory occupied by a process</li><li><strong id="b1533385774716"><a name="b1533385774716"></a><a name="b1533385774716"></a>max_dynamic_memory</strong>: maximum dynamic memory</li><li><strong id="b842352706151936"><a name="b842352706151936"></a><a name="b842352706151936"></a>dynamic_used_memory</strong>: used dynamic memory</li><li><strong id="b842352706151940"><a name="b842352706151940"></a><a name="b842352706151940"></a>dynamic_peak_memory</strong>: dynamic peak value of the memory</li><li><strong id="b64542056174814"><a name="b64542056174814"></a><a name="b64542056174814"></a>dynamic_used_shrctx</strong>: maximum dynamic shared memory context</li><li><strong id="b84235270615208"><a name="b84235270615208"></a><a name="b84235270615208"></a>dynamic_peak_shrctx</strong>: dynamic peak value of the shared memory context</li><li><strong id="b842352706152012"><a name="b842352706152012"></a><a name="b842352706152012"></a>max_shared_memory</strong>: maximum shared memory</li><li><strong id="b842352706152018"><a name="b842352706152018"></a><a name="b842352706152018"></a>shared_used_memory</strong>: used shared memory</li><li><strong id="b17401971491"><a name="b17401971491"></a><a name="b17401971491"></a>max_cstore_memory</strong>: maximum memory allowed by the column</li><li><strong id="b842352706152054"><a name="b842352706152054"></a><a name="b842352706152054"></a>cstore_used_memory</strong>: memory used in column storage</li><li><strong id="b679661211496"><a name="b679661211496"></a><a name="b679661211496"></a>max_sctpcomm_memory</strong>: maximum memory size allowed for the SCTP communications</li><li><strong id="b84235270615213"><a name="b84235270615213"></a><a name="b84235270615213"></a>sctpcomm_used_memory</strong>: memory used for SCTP communications</li><li><strong id="b842352706152149"><a name="b842352706152149"></a><a name="b842352706152149"></a>sctpcomm_peak_memory</strong>: memory peak of SCTP communications</li><li><strong id="b84235270615228"><a name="b84235270615228"></a><a name="b84235270615228"></a>other_used_memory</strong>: other used memory</li><li><strong id="b2025903734918"><a name="b2025903734918"></a><a name="b2025903734918"></a>gpu_max_dynamic_memory</strong>: maximum dynamic memory of GPU</li><li><strong id="b1314216185505"><a name="b1314216185505"></a><a name="b1314216185505"></a>gpu_dynamic_used_memory</strong>: used dynamic memory of GPU</li><li><strong id="b7416327195010"><a name="b7416327195010"></a><a name="b7416327195010"></a>gpu_dynamic_peak_memory</strong>: dynamic peak value of the GPU memory</li><li><strong id="b105535153912"><a name="b105535153912"></a><a name="b105535153912"></a>pooler_conn_memory</strong>: applied memory in the connection pool</li><li><strong id="b117624315393"><a name="b117624315393"></a><a name="b117624315393"></a>pooler_freeconn_memory</strong>: memory occupied by idle connections in the connection pool</li><li><strong id="b1572166153912"><a name="b1572166153912"></a><a name="b1572166153912"></a>storage_compress_memory</strong>: memory used by the storage module for compression</li><li><strong id="b748067163914"><a name="b748067163914"></a><a name="b748067163914"></a>udf_reserved_memory</strong>: reserved memory for the UDF</li></ul>
</div>
</td>
</tr>
<tr id="en-us_topic_0237122561_row1783515503364"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122561_p9835150163616"><a name="en-us_topic_0237122561_p9835150163616"></a><a name="en-us_topic_0237122561_p9835150163616"></a>memorymbytes</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122561_p1183565033619"><a name="en-us_topic_0237122561_p1183565033619"></a><a name="en-us_topic_0237122561_p1183565033619"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122561_p2835145012369"><a name="en-us_topic_0237122561_p2835145012369"></a><a name="en-us_topic_0237122561_p2835145012369"></a>Size of the used memory in the unit of MB.</p>
</td>
</tr>
</tbody>
</table>

