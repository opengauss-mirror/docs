# 扩展函数

下表列举了openGauss中支持的扩展函数，不作为商用特性交付，仅供参考。

<a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_table36793338153059"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_row8256713153057"><th class="cellrowborder" valign="top" width="13.3%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p55113726153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p55113726153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p55113726153057"></a>分类</p>
</th>
<th class="cellrowborder" valign="top" width="37.53%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p54844983153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p54844983153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p54844983153057"></a>函数名称</p>
</th>
<th class="cellrowborder" valign="top" width="49.17%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p60256628153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p60256628153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p60256628153057"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_row32745771153057"><td class="cellrowborder" rowspan="2" valign="top" width="13.3%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p20706780153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p20706780153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p20706780153057"></a>访问权限查询函数</p>
<p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p10365711153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p10365711153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p10365711153057"></a></p>
</td>
<td class="cellrowborder" valign="top" width="37.53%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p39517468153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p39517468153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p39517468153057"></a>has_sequence_privilege(user, sequence, privilege)</p>
</td>
<td class="cellrowborder" valign="top" width="49.17%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p61561361153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p61561361153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p61561361153057"></a>指定用户是否有访问序列的权限</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_row42065549153057"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p22676680153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p22676680153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p22676680153057"></a>has_sequence_privilege(sequence, privilege)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p44628232153057"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p44628232153057"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p44628232153057"></a>当前用户是否有访问序列的权限</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_row38230543183938"><td class="cellrowborder" rowspan="2" valign="top" width="13.3%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p58170845184312"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p58170845184312"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p58170845184312"></a>触发器函数</p>
</td>
<td class="cellrowborder" valign="top" width="37.53%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p25576862183938"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p25576862183938"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p25576862183938"></a>pg_get_triggerdef(oid)</p>
</td>
<td class="cellrowborder" valign="top" width="49.17%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p58459942183938"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p58459942183938"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p58459942183938"></a>为触发器获取CREATE [ CONSTRAINT ] TRIGGER命令</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_row26617459183938"><td class="cellrowborder" valign="top" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p3169557183938"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p3169557183938"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p3169557183938"></a>pg_get_triggerdef(oid, boolean)</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p55407592183938"><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p55407592183938"></a><a name="zh-cn_topic_0283137689_zh-cn_topic_0237122203_zh-cn_topic_0075058739_p55407592183938"></a>为触发器获取CREATE [ CONSTRAINT ] TRIGGER命令</p>
</td>
</tr>
</tbody>
</table>
