# PG\_SYNONYM

PG\_SYNONYM系统表存储同义词对象名与其他数据库对象名间的映射信息。

**表 1**  PG\_SYNONYM字段

<a name="table18788155943310"></a>
<table><thead align="left"><tr id="row1078919597334"><th class="cellrowborder" valign="top" width="23.472347234723472%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"><a name="zh-cn_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"></a><a name="zh-cn_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.85178517851785%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"><a name="zh-cn_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"></a><a name="zh-cn_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.67586758675868%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"><a name="zh-cn_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"></a><a name="zh-cn_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row8305185610447"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p4306175610448"><a name="p4306175610448"></a><a name="p4306175610448"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p11306165616441"><a name="p11306165616441"></a><a name="p11306165616441"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p03067561448"><a name="p03067561448"></a><a name="p03067561448"></a>数据库对象id。</p>
</td>
</tr>
<tr id="row97906591330"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p1790185918337"><a name="p1790185918337"></a><a name="p1790185918337"></a>synname</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p18790175953317"><a name="p18790175953317"></a><a name="p18790175953317"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p1979075933318"><a name="p1979075933318"></a><a name="p1979075933318"></a>同义词名称。</p>
</td>
</tr>
<tr id="row207901859173313"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p2516112712538"><a name="p2516112712538"></a><a name="p2516112712538"></a>synnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p11223112695411"><a name="p11223112695411"></a><a name="p11223112695411"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p18791125963311"><a name="p18791125963311"></a><a name="p18791125963311"></a>包含该同义词的名字空间的OID。</p>
</td>
</tr>
<tr id="row8791185914334"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p19125193215533"><a name="p19125193215533"></a><a name="p19125193215533"></a>synowner</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p137911859113311"><a name="p137911859113311"></a><a name="p137911859113311"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p379118595335"><a name="p379118595335"></a><a name="p379118595335"></a>同义词的所有者，通常是创建它的用户OID。</p>
</td>
</tr>
<tr id="row6791195920333"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p77911599334"><a name="p77911599334"></a><a name="p77911599334"></a>synobjschema</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p279115915332"><a name="p279115915332"></a><a name="p279115915332"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p1979115915331"><a name="p1979115915331"></a><a name="p1979115915331"></a>关联对象指定的模式名。</p>
</td>
</tr>
<tr id="row22761958195319"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p1527665855313"><a name="p1527665855313"></a><a name="p1527665855313"></a>synobjname</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p14276125835312"><a name="p14276125835312"></a><a name="p14276125835312"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p1927605817534"><a name="p1927605817534"></a><a name="p1927605817534"></a>关联对象名。</p>
</td>
</tr>
</tbody>
</table>

