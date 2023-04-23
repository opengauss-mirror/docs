# GS\_AUDITING\_POLICY\_ACCESS<a name="EN-US_TOPIC_0306525309"></a>

**GS\_AUDITING\_POLICY\_ACCESS**  records the unified audit information about DML database operations. Only the system administrator or security policy administrator can access this system catalog.

**Table  1**  GS\_AUDITING\_POLICY\_ACCESS columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="17.401740174017398%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="32.86328632863286%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="49.734973497349735%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row230112265145"><td class="cellrowborder" valign="top" width="17.401740174017398%" headers="mcps1.2.4.1.1 "><p id="p163011626111416"><a name="p163011626111416"></a><a name="p163011626111416"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="32.86328632863286%" headers="mcps1.2.4.1.2 "><p id="p630116262144"><a name="p630116262144"></a><a name="p630116262144"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="49.734973497349735%" headers="mcps1.2.4.1.3 "><p id="p14301172611419"><a name="p14301172611419"></a><a name="p14301172611419"></a>Row identifier (hidden attribute, which must be specified)</p>
</td>
</tr>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="17.401740174017398%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>accesstype</p>
</td>
<td class="cellrowborder" valign="top" width="32.86328632863286%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.734973497349735%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>DML database operation type. For example, SELECT, INSERT, and DELETE.</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="17.401740174017398%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>labelname</p>
</td>
<td class="cellrowborder" valign="top" width="32.86328632863286%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="49.734973497349735%" headers="mcps1.2.4.1.3 "><p id="p84761096534"><a name="p84761096534"></a><a name="p84761096534"></a>Resource label name. This column corresponds to the <strong id="b10388144123116"><a name="b10388144123116"></a><a name="b10388144123116"></a>polname</strong> column in the <strong id="b1226901410321"><a name="b1226901410321"></a><a name="b1226901410321"></a>GS_AUDITING_POLICY</strong> system catalog.</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="17.401740174017398%" headers="mcps1.2.4.1.1 "><p id="p10712105012310"><a name="p10712105012310"></a><a name="p10712105012310"></a>policyoid</p>
</td>
<td class="cellrowborder" valign="top" width="32.86328632863286%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="49.734973497349735%" headers="mcps1.2.4.1.3 "><p id="p647119105316"><a name="p647119105316"></a><a name="p647119105316"></a>OID of the audit policy, corresponding to the OID in the <strong id="b97011612937"><a name="b97011612937"></a><a name="b97011612937"></a>GS_AUDITING_POLICY</strong> system catalog</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="17.401740174017398%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>modifydate</p>
</td>
<td class="cellrowborder" valign="top" width="32.86328632863286%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>timestamp without time zone</p>
</td>
<td class="cellrowborder" valign="top" width="49.734973497349735%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Latest creation or modification timestamp</p>
</td>
</tr>
</tbody>
</table>

