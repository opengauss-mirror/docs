# GLOBAL\_STAT\_SESSION\_CU<a name="ZH-CN_TOPIC_0245374801"></a>

GLOBAL\_STAT\_SESSION\_CU用于查询openGauss各个节点，当前运行session的CU命中情况。session退出相应的统计数据会清零。openGauss重启后，统计数据也会清零。

**表 1**  GLOBAL\_STAT\_SESSION\_CU字段

<a name="zh-cn_topic_0237122697_table11123018172920"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122697_row11184918152916"><th class="cellrowborder" valign="top" width="20.45%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122697_p11841183292"><a name="zh-cn_topic_0237122697_p11841183292"></a><a name="zh-cn_topic_0237122697_p11841183292"></a><strong id="zh-cn_topic_0237122697_b418551819292"><a name="zh-cn_topic_0237122697_b418551819292"></a><a name="zh-cn_topic_0237122697_b418551819292"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.029999999999998%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122697_p11851418112919"><a name="zh-cn_topic_0237122697_p11851418112919"></a><a name="zh-cn_topic_0237122697_p11851418112919"></a><strong id="zh-cn_topic_0237122697_b018571872916"><a name="zh-cn_topic_0237122697_b018571872916"></a><a name="zh-cn_topic_0237122697_b018571872916"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="61.519999999999996%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122697_p10185101862916"><a name="zh-cn_topic_0237122697_p10185101862916"></a><a name="zh-cn_topic_0237122697_p10185101862916"></a><strong id="zh-cn_topic_0237122697_b171854189295"><a name="zh-cn_topic_0237122697_b171854189295"></a><a name="zh-cn_topic_0237122697_b171854189295"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122697_row418618185293"><td class="cellrowborder" valign="top" width="20.45%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122697_p1718641813294"><a name="zh-cn_topic_0237122697_p1718641813294"></a><a name="zh-cn_topic_0237122697_p1718641813294"></a>mem_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.029999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122697_p518691822916"><a name="zh-cn_topic_0237122697_p518691822916"></a><a name="zh-cn_topic_0237122697_p518691822916"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122697_p418601818299"><a name="zh-cn_topic_0237122697_p418601818299"></a><a name="zh-cn_topic_0237122697_p418601818299"></a>内存命中次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122697_row41867182291"><td class="cellrowborder" valign="top" width="20.45%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122697_p151861018152912"><a name="zh-cn_topic_0237122697_p151861018152912"></a><a name="zh-cn_topic_0237122697_p151861018152912"></a>hdd_sync_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.029999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122697_p7187918182914"><a name="zh-cn_topic_0237122697_p7187918182914"></a><a name="zh-cn_topic_0237122697_p7187918182914"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122697_p19187141872917"><a name="zh-cn_topic_0237122697_p19187141872917"></a><a name="zh-cn_topic_0237122697_p19187141872917"></a>硬盘同步读次数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122697_row1718714189298"><td class="cellrowborder" valign="top" width="20.45%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122697_p818701818293"><a name="zh-cn_topic_0237122697_p818701818293"></a><a name="zh-cn_topic_0237122697_p818701818293"></a>hdd_asyn_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.029999999999998%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122697_p15187918102911"><a name="zh-cn_topic_0237122697_p15187918102911"></a><a name="zh-cn_topic_0237122697_p15187918102911"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.519999999999996%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122697_p12187118162914"><a name="zh-cn_topic_0237122697_p12187118162914"></a><a name="zh-cn_topic_0237122697_p12187118162914"></a>硬盘异步读次数。</p>
</td>
</tr>
</tbody>
</table>

