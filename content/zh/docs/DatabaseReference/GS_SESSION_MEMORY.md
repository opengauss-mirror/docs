# GS\_SESSION\_MEMORY

GS\_SESSION\_MEMORY视图统计Session级别的内存使用情况，包含执行作业在数据节点上gaussdb线程和Stream线程分配的所有内存。当GUC参数enable\_memory\_limit的值为off时，本视图不可用。

**表 1**  GS\_SESSION\_MEMORY字段

<a name="zh-cn_topic_0059778767_t953e37afd21641229bbccf7b10f8ae94"></a>
<table><thead align="left"><tr id="zh-cn_topic_0059778767_rad825274bf5e49cebafef1d184ef1c6c"><th class="cellrowborder" valign="top" width="19.23%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778767_ae6a72d70e64d4cc986cdaa013c32cdb7"><a name="zh-cn_topic_0059778767_ae6a72d70e64d4cc986cdaa013c32cdb7"></a><a name="zh-cn_topic_0059778767_ae6a72d70e64d4cc986cdaa013c32cdb7"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="12.1%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778767_ac7d91c874038453b92277f263009bb69"><a name="zh-cn_topic_0059778767_ac7d91c874038453b92277f263009bb69"></a><a name="zh-cn_topic_0059778767_ac7d91c874038453b92277f263009bb69"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="68.67%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778767_a9b73ab5d2d2945b68b3a1a5357e1ecee"><a name="zh-cn_topic_0059778767_a9b73ab5d2d2945b68b3a1a5357e1ecee"></a><a name="zh-cn_topic_0059778767_a9b73ab5d2d2945b68b3a1a5357e1ecee"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0059778767_ra3f41aa6c9b14ef2a0542e658a67fe01"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778767_acb0d72afd1134a91a1740e7f827e44a5"><a name="zh-cn_topic_0059778767_acb0d72afd1134a91a1740e7f827e44a5"></a><a name="zh-cn_topic_0059778767_acb0d72afd1134a91a1740e7f827e44a5"></a>sessid</p>
</td>
<td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778767_a1fda091ce53140a8b8a20ef9a53c2204"><a name="zh-cn_topic_0059778767_a1fda091ce53140a8b8a20ef9a53c2204"></a><a name="zh-cn_topic_0059778767_a1fda091ce53140a8b8a20ef9a53c2204"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778767_a6e3e3ca87b764c4e91581aa131a58bad"><a name="zh-cn_topic_0059778767_a6e3e3ca87b764c4e91581aa131a58bad"></a><a name="zh-cn_topic_0059778767_a6e3e3ca87b764c4e91581aa131a58bad"></a>线程启动时间+线程标识。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778767_r96a8c34acda241da9f2215d05a90993c"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778767_a878d685a07034ffbb27389d056436465"><a name="zh-cn_topic_0059778767_a878d685a07034ffbb27389d056436465"></a><a name="zh-cn_topic_0059778767_a878d685a07034ffbb27389d056436465"></a>init_mem</p>
</td>
<td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778767_a6cabe1ae4912424eb877060615cb7f9f"><a name="zh-cn_topic_0059778767_a6cabe1ae4912424eb877060615cb7f9f"></a><a name="zh-cn_topic_0059778767_a6cabe1ae4912424eb877060615cb7f9f"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778767_acb7c29cd039b41d8a5d8216fc02e8123"><a name="zh-cn_topic_0059778767_acb7c29cd039b41d8a5d8216fc02e8123"></a><a name="zh-cn_topic_0059778767_acb7c29cd039b41d8a5d8216fc02e8123"></a>当前正在执行作业进入执行器前已分配的内存，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778767_r91694bd189574d56810e69097bbf834c"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778767_a75e18b6fc61b4edd8282dcea9e346a2d"><a name="zh-cn_topic_0059778767_a75e18b6fc61b4edd8282dcea9e346a2d"></a><a name="zh-cn_topic_0059778767_a75e18b6fc61b4edd8282dcea9e346a2d"></a>used_mem</p>
</td>
<td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778767_a1eaf7263ec7546fdb2ac141403f30768"><a name="zh-cn_topic_0059778767_a1eaf7263ec7546fdb2ac141403f30768"></a><a name="zh-cn_topic_0059778767_a1eaf7263ec7546fdb2ac141403f30768"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778767_aa7cc81c4c67c493ca6b36fa4b6447c6f"><a name="zh-cn_topic_0059778767_aa7cc81c4c67c493ca6b36fa4b6447c6f"></a><a name="zh-cn_topic_0059778767_aa7cc81c4c67c493ca6b36fa4b6447c6f"></a>当前正在执行作业已分配的内存，单位MB。</p>
</td>
</tr>
<tr id="zh-cn_topic_0059778767_r70b48f0daa984fcaa1403cd602025909"><td class="cellrowborder" valign="top" width="19.23%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0059778767_afe664db10a30490e9098541b3833f317"><a name="zh-cn_topic_0059778767_afe664db10a30490e9098541b3833f317"></a><a name="zh-cn_topic_0059778767_afe664db10a30490e9098541b3833f317"></a>peak_mem</p>
</td>
<td class="cellrowborder" valign="top" width="12.1%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0059778767_a72345cd720cc4d07b1eeea114cf91f3e"><a name="zh-cn_topic_0059778767_a72345cd720cc4d07b1eeea114cf91f3e"></a><a name="zh-cn_topic_0059778767_a72345cd720cc4d07b1eeea114cf91f3e"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="68.67%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0059778767_af966680339924b15a8a037f81355b40d"><a name="zh-cn_topic_0059778767_af966680339924b15a8a037f81355b40d"></a><a name="zh-cn_topic_0059778767_af966680339924b15a8a037f81355b40d"></a>当前正在执行作业已分配的内存峰值，单位MB。</p>
</td>
</tr>
</tbody>
</table>

