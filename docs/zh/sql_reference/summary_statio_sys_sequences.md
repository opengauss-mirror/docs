# SUMMARY\_STATIO\_SYS\_SEQUENCES

SUMMARY\_STATIO\_SYS\_SEQUENCES视图显示openGauss内汇聚的命名空间中所有系统表为序列的IO状态信息。

**表 1**  SUMMARY\_STATIO\_SYS\_SEQUENCES字段

<a name="zh-cn_topic_0237122685_table260916842114"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122685_row86631385215"><th class="cellrowborder" valign="top" width="18.43184318431843%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122685_p86631187210"><a name="zh-cn_topic_0237122685_p86631187210"></a><a name="zh-cn_topic_0237122685_p86631187210"></a><strong id="zh-cn_topic_0237122685_b366358202117"><a name="zh-cn_topic_0237122685_b366358202117"></a><a name="zh-cn_topic_0237122685_b366358202117"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="17.391739173917394%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122685_p196631589217"><a name="zh-cn_topic_0237122685_p196631589217"></a><a name="zh-cn_topic_0237122685_p196631589217"></a><strong id="zh-cn_topic_0237122685_b18663138182113"><a name="zh-cn_topic_0237122685_b18663138182113"></a><a name="zh-cn_topic_0237122685_b18663138182113"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="64.17641764176419%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122685_p366315872115"><a name="zh-cn_topic_0237122685_p366315872115"></a><a name="zh-cn_topic_0237122685_p366315872115"></a><strong id="zh-cn_topic_0237122685_b166641287219"><a name="zh-cn_topic_0237122685_b166641287219"></a><a name="zh-cn_topic_0237122685_b166641287219"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122685_row13664198152115"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122685_p1366410811214"><a name="zh-cn_topic_0237122685_p1366410811214"></a><a name="zh-cn_topic_0237122685_p1366410811214"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122685_p166417814212"><a name="zh-cn_topic_0237122685_p166417814212"></a><a name="zh-cn_topic_0237122685_p166417814212"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122685_p966410812116"><a name="zh-cn_topic_0237122685_p966410812116"></a><a name="zh-cn_topic_0237122685_p966410812116"></a>序列中模式名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122685_row156647852112"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122685_p76643802112"><a name="zh-cn_topic_0237122685_p76643802112"></a><a name="zh-cn_topic_0237122685_p76643802112"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122685_p96648892117"><a name="zh-cn_topic_0237122685_p96648892117"></a><a name="zh-cn_topic_0237122685_p96648892117"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122685_p5665888211"><a name="zh-cn_topic_0237122685_p5665888211"></a><a name="zh-cn_topic_0237122685_p5665888211"></a>序列名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122685_row7665108122114"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122685_p966578152114"><a name="zh-cn_topic_0237122685_p966578152114"></a><a name="zh-cn_topic_0237122685_p966578152114"></a>blks_read</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122685_p666517812217"><a name="zh-cn_topic_0237122685_p666517812217"></a><a name="zh-cn_topic_0237122685_p666517812217"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122685_p16653842119"><a name="zh-cn_topic_0237122685_p16653842119"></a><a name="zh-cn_topic_0237122685_p16653842119"></a>从序列中读取的磁盘块数。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122685_row266510814213"><td class="cellrowborder" valign="top" width="18.43184318431843%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122685_p7665784214"><a name="zh-cn_topic_0237122685_p7665784214"></a><a name="zh-cn_topic_0237122685_p7665784214"></a>blks_hit</p>
</td>
<td class="cellrowborder" valign="top" width="17.391739173917394%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122685_p20665888219"><a name="zh-cn_topic_0237122685_p20665888219"></a><a name="zh-cn_topic_0237122685_p20665888219"></a>numeric</p>
</td>
<td class="cellrowborder" valign="top" width="64.17641764176419%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122685_p9665148142110"><a name="zh-cn_topic_0237122685_p9665148142110"></a><a name="zh-cn_topic_0237122685_p9665148142110"></a>序列中缓存命中数。</p>
</td>
</tr>
</tbody>
</table>
