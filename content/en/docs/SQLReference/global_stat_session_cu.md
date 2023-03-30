# GLOBAL\_STAT\_SESSION\_CU<a name="EN-US_TOPIC_0245374801"></a>

**GLOBAL\_STAT\_SESSION\_CU**  is used to query the CU hit rate of running sessions on each node in openGauss. The data about a session is cleared when you exit this session or restart openGauss. 

**Table  1**  GLOBAL\_STAT\_SESSION\_CU columns

<a name="en-us_topic_0237122697_table11123018172920"></a>
<table><thead align="left"><tr id="en-us_topic_0237122697_row11184918152916"><th class="cellrowborder" valign="top" width="20.45%" id="mcps1.2.4.1.1"><p id="en-us_topic_0237122697_p11841183292"><a name="en-us_topic_0237122697_p11841183292"></a><a name="en-us_topic_0237122697_p11841183292"></a><strong id="b127581433145518"><a name="b127581433145518"></a><a name="b127581433145518"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="18.029999999999998%" id="mcps1.2.4.1.2"><p id="en-us_topic_0237122697_p11851418112919"><a name="en-us_topic_0237122697_p11851418112919"></a><a name="en-us_topic_0237122697_p11851418112919"></a><strong id="b7639734115516"><a name="b7639734115516"></a><a name="b7639734115516"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="61.519999999999996%" id="mcps1.2.4.1.3"><p id="en-us_topic_0237122697_p10185101862916"><a name="en-us_topic_0237122697_p10185101862916"></a><a name="en-us_topic_0237122697_p10185101862916"></a><strong id="b1929403513554"><a name="b1929403513554"></a><a name="b1929403513554"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0237122697_row418618185293"><td class="cellrowborder" valign="top" width="20.45%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122697_p1718641813294"><a name="en-us_topic_0237122697_p1718641813294"></a><a name="en-us_topic_0237122697_p1718641813294"></a>mem_hit</p>
</td>
<td class="cellrowborder" valign="top" width="18.029999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122697_p518691822916"><a name="en-us_topic_0237122697_p518691822916"></a><a name="en-us_topic_0237122697_p518691822916"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122697_p418601818299"><a name="en-us_topic_0237122697_p418601818299"></a><a name="en-us_topic_0237122697_p418601818299"></a>Number of memory hits</p>
</td>
</tr>
<tr id="en-us_topic_0237122697_row41867182291"><td class="cellrowborder" valign="top" width="20.45%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122697_p151861018152912"><a name="en-us_topic_0237122697_p151861018152912"></a><a name="en-us_topic_0237122697_p151861018152912"></a>hdd_sync_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.029999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122697_p7187918182914"><a name="en-us_topic_0237122697_p7187918182914"></a><a name="en-us_topic_0237122697_p7187918182914"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122697_p19187141872917"><a name="en-us_topic_0237122697_p19187141872917"></a><a name="en-us_topic_0237122697_p19187141872917"></a>Number of synchronous hard disk reads</p>
</td>
</tr>
<tr id="en-us_topic_0237122697_row1718714189298"><td class="cellrowborder" valign="top" width="20.45%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0237122697_p818701818293"><a name="en-us_topic_0237122697_p818701818293"></a><a name="en-us_topic_0237122697_p818701818293"></a>hdd_asyn_read</p>
</td>
<td class="cellrowborder" valign="top" width="18.029999999999998%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0237122697_p15187918102911"><a name="en-us_topic_0237122697_p15187918102911"></a><a name="en-us_topic_0237122697_p15187918102911"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="61.519999999999996%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0237122697_p12187118162914"><a name="en-us_topic_0237122697_p12187118162914"></a><a name="en-us_topic_0237122697_p12187118162914"></a>Number of asynchronous hard disk reads</p>
</td>
</tr>
</tbody>
</table>

