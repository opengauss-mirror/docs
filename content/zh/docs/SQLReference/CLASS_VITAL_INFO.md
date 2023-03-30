# CLASS\_VITAL\_INFO<a name="ZH-CN_TOPIC_0245374826"></a>

CLASS\_VITAL\_INFO视图用于做WDR时校验相同的表或者索引的oid是否一致。

**表 1**  CLASS\_VITAL\_INFO字段

<a name="zh-cn_topic_0237122722_table1351144175016"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122722_row12604425016"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122722_p4614414509"><a name="zh-cn_topic_0237122722_p4614414509"></a><a name="zh-cn_topic_0237122722_p4614414509"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122722_p26044125013"><a name="zh-cn_topic_0237122722_p26044125013"></a><a name="zh-cn_topic_0237122722_p26044125013"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122722_p126194425019"><a name="zh-cn_topic_0237122722_p126194425019"></a><a name="zh-cn_topic_0237122722_p126194425019"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122722_row16644135015"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122722_p157134425017"><a name="zh-cn_topic_0237122722_p157134425017"></a><a name="zh-cn_topic_0237122722_p157134425017"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122722_p771844115013"><a name="zh-cn_topic_0237122722_p771844115013"></a><a name="zh-cn_topic_0237122722_p771844115013"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122722_p13714446501"><a name="zh-cn_topic_0237122722_p13714446501"></a><a name="zh-cn_topic_0237122722_p13714446501"></a>表的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122722_row127194425015"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122722_p171444195015"><a name="zh-cn_topic_0237122722_p171444195015"></a><a name="zh-cn_topic_0237122722_p171444195015"></a>schemaname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122722_p187184416509"><a name="zh-cn_topic_0237122722_p187184416509"></a><a name="zh-cn_topic_0237122722_p187184416509"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122722_p77164410509"><a name="zh-cn_topic_0237122722_p77164410509"></a><a name="zh-cn_topic_0237122722_p77164410509"></a>schema名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122722_row1990864525113"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122722_p3909134545117"><a name="zh-cn_topic_0237122722_p3909134545117"></a><a name="zh-cn_topic_0237122722_p3909134545117"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122722_p2909154515115"><a name="zh-cn_topic_0237122722_p2909154515115"></a><a name="zh-cn_topic_0237122722_p2909154515115"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122722_p191016454518"><a name="zh-cn_topic_0237122722_p191016454518"></a><a name="zh-cn_topic_0237122722_p191016454518"></a>表名。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122722_row0754419504"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122722_p188744145018"><a name="zh-cn_topic_0237122722_p188744145018"></a><a name="zh-cn_topic_0237122722_p188744145018"></a>relkind</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122722_p11894414508"><a name="zh-cn_topic_0237122722_p11894414508"></a><a name="zh-cn_topic_0237122722_p11894414508"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0237122722_p5834415019"><a name="zh-cn_topic_0237122722_p5834415019"></a><a name="zh-cn_topic_0237122722_p5834415019"></a>表示对象类型，取值范围如下：<a name="zh-cn_topic_0237122722_ul15751123152918"></a><a name="zh-cn_topic_0237122722_ul15751123152918"></a><ul id="zh-cn_topic_0237122722_ul15751123152918"><li>r：表示普通表。</li><li>t：表示toast表。</li><li>i：表示索引。</li></ul>
</div>
</td>
</tr>
</tbody>
</table>

