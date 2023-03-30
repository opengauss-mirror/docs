# GS\_POLICY\_LABEL<a name="EN-US_TOPIC_0306525315"></a>

**GS\_POLICY\_LABEL**  records the resource label configuration information. One resource label corresponds to one or more records, and each record identifies the resource label to which a database resource belongs. Only the system administrator or security policy administrator can access this system catalog.

Fully Qualified Domain Name \(FQDN\) identifies an absolute path of a database resource.

**Table  1**  GS\_POLICY\_LABEL columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1637335161513"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p237315516153"><a name="p237315516153"></a><a name="p237315516153"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p163731551191515"><a name="p163731551191515"></a><a name="p163731551191515"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p17373105191516"><a name="p17373105191516"></a><a name="p17373105191516"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p497463145916"><a name="p497463145916"></a><a name="p497463145916"></a>labelname</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>Resource label name</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p426131210591"><a name="p426131210591"></a><a name="p426131210591"></a>labeltype</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p7160121618462"><a name="p7160121618462"></a><a name="p7160121618462"></a>Resource tag type. Currently, the value is <strong id="b1959954616124"><a name="b1959954616124"></a><a name="b1959954616124"></a>RESOURCE</strong>.</p>
</td>
</tr>
<tr id="row22511356153413"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p164556169595"><a name="p164556169595"></a><a name="p164556169595"></a>fqdnnamespace</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p2251185683420"><a name="p2251185683420"></a><a name="p2251185683420"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p725145693419"><a name="p725145693419"></a><a name="p725145693419"></a>OID of a namespace to which an identified database resource belongs</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p913332025910"><a name="p913332025910"></a><a name="p913332025910"></a>fqdnid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p7634152411481"><a name="p7634152411481"></a><a name="p7634152411481"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p647119105316"><a name="p647119105316"></a><a name="p647119105316"></a>OID of an identified database resource. If the database resource is a column, this column is the OID of the catalog.</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1313242455915"><a name="p1313242455915"></a><a name="p1313242455915"></a>relcolumn</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Column name. If the identified database resource is a column, this column indicates the column name. Otherwise, this column is empty.</p>
</td>
</tr>
<tr id="row22717277591"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p498882917591"><a name="p498882917591"></a><a name="p498882917591"></a>fqdntype</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p4288271597"><a name="p4288271597"></a><a name="p4288271597"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p0281327145911"><a name="p0281327145911"></a><a name="p0281327145911"></a>Type of the identified database resource, for example, schema, table, column, or view</p>
</td>
</tr>
</tbody>
</table>

