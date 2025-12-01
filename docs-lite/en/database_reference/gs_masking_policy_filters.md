# GS\_MASKING\_POLICY\_FILTERS<a name="EN-US_TOPIC_0306525314"></a>

**GS\_MASKING\_POLICY\_FILTERS**  records the user filter criteria corresponding to the dynamic data masking policies. The corresponding masking policy takes effect only when the user information meets the filter criteria. Only the system administrator or security policy administrator can access this system catalog.

**Table  1**  GS\_MASKING\_POLICY\_FILTERS columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row85081037151512"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p9509737181518"><a name="p9509737181518"></a><a name="p9509737181518"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p65097376152"><a name="p65097376152"></a><a name="p65097376152"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p85092379156"><a name="p85092379156"></a><a name="p85092379156"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p981501874519"><a name="p981501874519"></a><a name="p981501874519"></a>filtertype</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>Filter type. Currently, the value is <strong id="b162954551069"><a name="b162954551069"></a><a name="b162954551069"></a>logical_expr</strong>.</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>filterlabelname</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p7160121618462"><a name="p7160121618462"></a><a name="p7160121618462"></a>Filter range. Currently, the value is <strong id="b11205515719"><a name="b11205515719"></a><a name="b11205515719"></a>logical_expr</strong>.</p>
</td>
</tr>
<tr id="row22511356153413"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1525155603413"><a name="p1525155603413"></a><a name="p1525155603413"></a>policyoid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p2251185683420"><a name="p2251185683420"></a><a name="p2251185683420"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p725145693419"><a name="p725145693419"></a><a name="p725145693419"></a>OID of the masking policy to which a user filter criterion belongs, which corresponds to the OID in <a href="gs_masking_policy.md">GS_MASKING_POLICY</a></p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p539014288543"><a name="p539014288543"></a><a name="p539014288543"></a>modifydate</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p7634152411481"><a name="p7634152411481"></a><a name="p7634152411481"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p647119105316"><a name="p647119105316"></a><a name="p647119105316"></a>Latest timestamp when a user filter criterion is created or modified</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p92401132185119"><a name="p92401132185119"></a><a name="p92401132185119"></a>logicaloperator</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Polish notation of a filter criterion</p>
</td>
</tr>
</tbody>
</table>

