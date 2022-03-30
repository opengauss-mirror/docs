# GS\_POLICY\_LABEL<a name="ZH-CN_TOPIC_0306525315"></a>

GS\_POLICY\_LABEL系统表记录资源标签配置信息，一个资源标签对应着一条或多条记录，每条记录标记了数据库资源所属的资源标签。需要有系统管理员或安全策略管理员权限才可以访问此系统表。

FQDN（Fully Qualified Domain Name）标识了数据库资源所属的绝对路径。

**表 1**  GS\_POLICY\_LABEL表字段

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1637335161513"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p237315516153"><a name="p237315516153"></a><a name="p237315516153"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p163731551191515"><a name="p163731551191515"></a><a name="p163731551191515"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p17373105191516"><a name="p17373105191516"></a><a name="p17373105191516"></a>行标识符（隐含属性，必须明确选择）。</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p497463145916"><a name="p497463145916"></a><a name="p497463145916"></a>labelname</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>资源标签名称。</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p426131210591"><a name="p426131210591"></a><a name="p426131210591"></a>labeltype</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p7160121618462"><a name="p7160121618462"></a><a name="p7160121618462"></a>资源标签类型，目前仅为RESOURCE。</p>
</td>
</tr>
<tr id="row22511356153413"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p164556169595"><a name="p164556169595"></a><a name="p164556169595"></a>fqdnnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p2251185683420"><a name="p2251185683420"></a><a name="p2251185683420"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p725145693419"><a name="p725145693419"></a><a name="p725145693419"></a>被标识的数据库资源所属的namespace oid。</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p913332025910"><a name="p913332025910"></a><a name="p913332025910"></a>fqdnid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p7634152411481"><a name="p7634152411481"></a><a name="p7634152411481"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p647119105316"><a name="p647119105316"></a><a name="p647119105316"></a>被标识的数据库资源的oid，若数据库资源为列，则该列为所属表的oid。</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1313242455915"><a name="p1313242455915"></a><a name="p1313242455915"></a>relcolumn</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>列名，若被标识的数据库资源为列，该列指出列名，否则该列为空。</p>
</td>
</tr>
<tr id="row22717277591"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p498882917591"><a name="p498882917591"></a><a name="p498882917591"></a>fqdntype</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p4288271597"><a name="p4288271597"></a><a name="p4288271597"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p0281327145911"><a name="p0281327145911"></a><a name="p0281327145911"></a>被标识的数据库资源的类型名称，例如：schema, table, column, view等。</p>
</td>
</tr>
</tbody>
</table>

