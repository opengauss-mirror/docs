# PG\_SYNONYM<a name="EN-US_TOPIC_0000001126290482"></a>

**PG\_SYNONYM**  records the mapping between synonym object names and other database object names.

**Table  1** **PG\_SYNONYM**  columns

<a name="table18788155943310"></a>
<table><thead align="left"><tr id="row1078919597334"><th class="cellrowborder" valign="top" width="23.472347234723472%" id="mcps1.2.4.1.1"><p id="en-us_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"><a name="en-us_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"></a><a name="en-us_topic_0059778876_ac6c318856cec4e67967734cdbe84e08c"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="17.85178517851785%" id="mcps1.2.4.1.2"><p id="en-us_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"><a name="en-us_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"></a><a name="en-us_topic_0059778876_a6dc7600276264a3f8b273d69415ee20c"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="58.67586758675868%" id="mcps1.2.4.1.3"><p id="en-us_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"><a name="en-us_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"></a><a name="en-us_topic_0059778876_abd3b518d5c90486fa0735b1279bbb127"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row8305185610447"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p4306175610448"><a name="p4306175610448"></a><a name="p4306175610448"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p11306165616441"><a name="p11306165616441"></a><a name="p11306165616441"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p03067561448"><a name="p03067561448"></a><a name="p03067561448"></a>Database object ID</p>
</td>
</tr>
<tr id="row97906591330"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p1790185918337"><a name="p1790185918337"></a><a name="p1790185918337"></a>synname</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p18790175953317"><a name="p18790175953317"></a><a name="p18790175953317"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p1979075933318"><a name="p1979075933318"></a><a name="p1979075933318"></a>Synonym name</p>
</td>
</tr>
<tr id="row207901859173313"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p2516112712538"><a name="p2516112712538"></a><a name="p2516112712538"></a>synnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p11223112695411"><a name="p11223112695411"></a><a name="p11223112695411"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p18791125963311"><a name="p18791125963311"></a><a name="p18791125963311"></a>OID of the namespace that contains a synonym</p>
</td>
</tr>
<tr id="row8791185914334"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p19125193215533"><a name="p19125193215533"></a><a name="p19125193215533"></a>synowner</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p137911859113311"><a name="p137911859113311"></a><a name="p137911859113311"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p379118595335"><a name="p379118595335"></a><a name="p379118595335"></a>Owner of a synonym, usually the OID of the user who created it</p>
</td>
</tr>
<tr id="row6791195920333"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p77911599334"><a name="p77911599334"></a><a name="p77911599334"></a>synobjschema</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p279115915332"><a name="p279115915332"></a><a name="p279115915332"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p1979115915331"><a name="p1979115915331"></a><a name="p1979115915331"></a>Schema name specified by an associated object</p>
</td>
</tr>
<tr id="row22761958195319"><td class="cellrowborder" valign="top" width="23.472347234723472%" headers="mcps1.2.4.1.1 "><p id="p1527665855313"><a name="p1527665855313"></a><a name="p1527665855313"></a>synobjname</p>
</td>
<td class="cellrowborder" valign="top" width="17.85178517851785%" headers="mcps1.2.4.1.2 "><p id="p14276125835312"><a name="p14276125835312"></a><a name="p14276125835312"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.67586758675868%" headers="mcps1.2.4.1.3 "><p id="p1927605817534"><a name="p1927605817534"></a><a name="p1927605817534"></a>Name of an associated object</p>
</td>
</tr>
</tbody>
</table>

