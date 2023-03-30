# GS\_MASKING\_POLICY\_ACTIONS<a name="EN-US_TOPIC_0306525313"></a>

**GS\_MASKING\_POLICY\_ACTIONS**  records the masking actions of a masking policy in the dynamic data masking policies. One masking policy corresponds to one or more rows of records in the catalog. Only the system administrator or security policy administrator can access this system catalog.

**Table  1**  GS\_MASKING\_POLICY\_ACTIONS columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.072807280728075%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.772677267726774%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.15451545154516%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row6109112913155"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p81098293151"><a name="p81098293151"></a><a name="p81098293151"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p141091329141520"><a name="p141091329141520"></a><a name="p141091329141520"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p1610915296152"><a name="p1610915296152"></a><a name="p1610915296152"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>actiontype</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>Name of a masking function used by a masking policy</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p13954055133012"><a name="p13954055133012"></a><a name="p13954055133012"></a>actparams</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p84761096534"><a name="p84761096534"></a><a name="p84761096534"></a>Parameter information transferred to a masking function</p>
</td>
</tr>
<tr id="row22511356153413"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p1525155603413"><a name="p1525155603413"></a><a name="p1525155603413"></a>actlabelname</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p2251185683420"><a name="p2251185683420"></a><a name="p2251185683420"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p725145693419"><a name="p725145693419"></a><a name="p725145693419"></a>Name of a masked label</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p539014288543"><a name="p539014288543"></a><a name="p539014288543"></a>policyoid</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p647119105316"><a name="p647119105316"></a><a name="p647119105316"></a>OID of a masking policy to which a record belongs, corresponding to the OID in <a href="gs_masking_policy.md">GS_MASKING_POLICY</a></p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.072807280728075%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>modifydate</p>
</td>
<td class="cellrowborder" valign="top" width="26.772677267726774%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="45.15451545154516%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Latest timestamp when a record is created or modified</p>
</td>
</tr>
</tbody>
</table>

