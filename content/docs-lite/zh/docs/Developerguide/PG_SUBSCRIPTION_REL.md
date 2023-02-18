# PG\_SUBSCRIPTION\_REL<a name="ZH-CN_TOPIC_0000001198917452"></a>

系统表PG\_SUBSCRIPTION\_REL包含每个订阅中每个被复制表的状态，是多对多的映射关系。

该系统表仅包含运行[CREATE SUBSCRIPTION](CREATE-SUBSCRIPTION.md)或[ALTER SUBSCRIPTION ... REFRESH PUBLICATION](ALTER-SUBSCRIPTION.md)后对订阅已知的表。

**表 1**  PG\_SUBSCRIPTION\_REL字段

<a name="table10398182255119"></a>
<table><thead align="left"><tr id="row5400162217515"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p11400152265113"><a name="p11400152265113"></a><a name="p11400152265113"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p19400622165117"><a name="p19400622165117"></a><a name="p19400622165117"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p114006220517"><a name="p114006220517"></a><a name="p114006220517"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row28891944205414"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1333112917367"></a>srsubid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"></a><a name="zh-cn_topic_0283137298_zh-cn_topic_0237122310_p1433462923615"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11514618540"><a name="p11514618540"></a><a name="p11514618540"></a>订阅标识符。</p>
</td>
</tr>
<tr id="row10400322175118"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p540116221516"><a name="p540116221516"></a><a name="p540116221516"></a>srrelid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14011322165117"><a name="p14011322165117"></a><a name="p14011322165117"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p8401142219519"><a name="p8401142219519"></a><a name="p8401142219519"></a>订阅关系标识符。</p>
</td>
</tr>
<tr id="row18401522155113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13401132217516"><a name="p13401132217516"></a><a name="p13401132217516"></a>srsubstate</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p4401222145118"><a name="p4401222145118"></a><a name="p4401222145118"></a>char</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p114016229518"><a name="p114016229518"></a><a name="p114016229518"></a>订阅状态。<li>i：初始化</li><li>d：基础数据正在复制</li><li>f：基础数据复制完成</li><li>s：已与增量复制进度同步</li><li>r：准备好增量复制</p>
</td>
</tr>
<tr id="row740182215112"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p16401112255116"><a name="p16401112255116"></a><a name="p16401112255116"></a>srcsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p84011222165110"><a name="p84011222165110"></a><a name="p84011222165110"></a>int8</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10401822115111"><a name="p10401822115111"></a><a name="p10401822115111"></a>基础数据复制过程中快照csn。</p>
</td>
</tr>
<tr id="row15401112285110"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p540132212511"><a name="p540132212511"></a><a name="p540132212511"></a>srsublsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1340132219511"><a name="p1340132219511"></a><a name="p1340132219511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p164029226515"><a name="p164029226515"></a><a name="p164029226515"></a>在s或r状态中，用于同步增量复制进度的远端LSN，否则为空。</p>
</td>
</tr>
</tbody>
</table>

