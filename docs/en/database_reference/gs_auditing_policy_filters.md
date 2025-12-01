# GS\_AUDITING\_POLICY\_FILTERS<a name="EN-US_TOPIC_0306525310"></a>

**GS\_AUDITING\_POLICY\_FILTERS**  records the filtering policies about the unified audit. Each record corresponds to a design policy. Only the system administrator or security policy administrator can access this system catalog.

**Table  1**  GS\_AUDITING\_POLICY\_FILTERS columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="28.24282428242824%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="26.38263826382638%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="45.374537453745376%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row43581404142"><td class="cellrowborder" valign="top" width="28.24282428242824%" headers="mcps1.2.4.1.1 "><p id="p23581407147"><a name="p23581407147"></a><a name="p23581407147"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="26.38263826382638%" headers="mcps1.2.4.1.2 "><p id="p53581040101412"><a name="p53581040101412"></a><a name="p53581040101412"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.374537453745376%" headers="mcps1.2.4.1.3 "><p id="p43585408143"><a name="p43585408143"></a><a name="p43585408143"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="28.24282428242824%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>filtertype</p>
</td>
<td class="cellrowborder" valign="top" width="26.38263826382638%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.374537453745376%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>Filter type. Currently, the value is <strong id="b126061102427"><a name="b126061102427"></a><a name="b126061102427"></a>logical_expr</strong>.</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="28.24282428242824%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>labelname</p>
</td>
<td class="cellrowborder" valign="top" width="26.38263826382638%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="45.374537453745376%" headers="mcps1.2.4.1.3 "><p id="p84761096534"><a name="p84761096534"></a><a name="p84761096534"></a>Name. Currently, the value is <strong id="b351019219428"><a name="b351019219428"></a><a name="b351019219428"></a>logical_expr</strong>.</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="28.24282428242824%" headers="mcps1.2.4.1.1 "><p id="p10712105012310"><a name="p10712105012310"></a><a name="p10712105012310"></a>policyoid</p>
</td>
<td class="cellrowborder" valign="top" width="26.38263826382638%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="45.374537453745376%" headers="mcps1.2.4.1.3 "><p id="p136759531164"><a name="p136759531164"></a><a name="p136759531164"></a>OID of the audit policy, corresponding to the OID in the <strong id="b188531749131"><a name="b188531749131"></a><a name="b188531749131"></a>GS_AUDITING_POLICY</strong> system catalog</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="28.24282428242824%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>modifydate</p>
</td>
<td class="cellrowborder" valign="top" width="26.38263826382638%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="45.374537453745376%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Latest creation or modification timestamp</p>
</td>
</tr>
<tr id="row157017151550"><td class="cellrowborder" valign="top" width="28.24282428242824%" headers="mcps1.2.4.1.1 "><p id="p177015151759"><a name="p177015151759"></a><a name="p177015151759"></a>logicaloperator</p>
</td>
<td class="cellrowborder" valign="top" width="26.38263826382638%" headers="mcps1.2.4.1.2 "><p id="p12701315952"><a name="p12701315952"></a><a name="p12701315952"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="45.374537453745376%" headers="mcps1.2.4.1.3 "><p id="p10707151153"><a name="p10707151153"></a><a name="p10707151153"></a>Logical character string of a filter criterion</p>
</td>
</tr>
</tbody>
</table>

