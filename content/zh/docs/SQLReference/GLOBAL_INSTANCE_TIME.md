# GLOBAL\_INSTANCE\_TIME

提供openGauss中所有正常节点下的各种时间消耗信息（时间类型见instance\_time视图）。

**表 1**  GLOBAL\_INSTANCE\_TIME字段

<a name="zh-cn_topic_0237122558_table072943914345"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122558_row147982399343"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122558_p15798439113417"><a name="zh-cn_topic_0237122558_p15798439113417"></a><a name="zh-cn_topic_0237122558_p15798439113417"></a><strong id="zh-cn_topic_0237122558_b079863919341"><a name="zh-cn_topic_0237122558_b079863919341"></a><a name="zh-cn_topic_0237122558_b079863919341"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122558_p1879810393349"><a name="zh-cn_topic_0237122558_p1879810393349"></a><a name="zh-cn_topic_0237122558_p1879810393349"></a><strong id="zh-cn_topic_0237122558_b157991639133410"><a name="zh-cn_topic_0237122558_b157991639133410"></a><a name="zh-cn_topic_0237122558_b157991639133410"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122558_p19799139143412"><a name="zh-cn_topic_0237122558_p19799139143412"></a><a name="zh-cn_topic_0237122558_p19799139143412"></a><strong id="zh-cn_topic_0237122558_b1379953973417"><a name="zh-cn_topic_0237122558_b1379953973417"></a><a name="zh-cn_topic_0237122558_b1379953973417"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122558_row47991839123410"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122558_p1979910394340"><a name="zh-cn_topic_0237122558_p1979910394340"></a><a name="zh-cn_topic_0237122558_p1979910394340"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122558_p47990393340"><a name="zh-cn_topic_0237122558_p47990393340"></a><a name="zh-cn_topic_0237122558_p47990393340"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122558_p11799153963415"><a name="zh-cn_topic_0237122558_p11799153963415"></a><a name="zh-cn_topic_0237122558_p11799153963415"></a>数据库进程的名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122558_row6799939123414"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122558_p1680063963417"><a name="zh-cn_topic_0237122558_p1680063963417"></a><a name="zh-cn_topic_0237122558_p1680063963417"></a>stat_id</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122558_p1800123913341"><a name="zh-cn_topic_0237122558_p1800123913341"></a><a name="zh-cn_topic_0237122558_p1800123913341"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122558_p0800173963410"><a name="zh-cn_topic_0237122558_p0800173963410"></a><a name="zh-cn_topic_0237122558_p0800173963410"></a>统计编号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122558_row18001939133415"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122558_p1780033993410"><a name="zh-cn_topic_0237122558_p1780033993410"></a><a name="zh-cn_topic_0237122558_p1780033993410"></a>stat_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122558_p580073916343"><a name="zh-cn_topic_0237122558_p580073916343"></a><a name="zh-cn_topic_0237122558_p580073916343"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122558_p1801239153413"><a name="zh-cn_topic_0237122558_p1801239153413"></a><a name="zh-cn_topic_0237122558_p1801239153413"></a>类型名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122558_row178011439123419"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122558_p080114397343"><a name="zh-cn_topic_0237122558_p080114397343"></a><a name="zh-cn_topic_0237122558_p080114397343"></a>value</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122558_p148013397341"><a name="zh-cn_topic_0237122558_p148013397341"></a><a name="zh-cn_topic_0237122558_p148013397341"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122558_p1180114397349"><a name="zh-cn_topic_0237122558_p1180114397349"></a><a name="zh-cn_topic_0237122558_p1180114397349"></a>时间值（单位：微秒）。</p>
</td>
</tr>
</tbody>
</table>

