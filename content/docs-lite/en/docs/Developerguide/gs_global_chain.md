# GS\_GLOBAL\_CHAIN<a name="EN-US_TOPIC_0000001100127692"></a>

**GS\_GLOBAL\_CHAIN**  records information about modification operations performed by users on the tamper-proof user table. Each record corresponds to a table-level modification operation. Users with the audit administrator permission can query this system catalog, but no user is allowed to modify this system catalog.

**Table  1**  GS\_GLOBAL\_CHAIN columns

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="17.06170617061706%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="24.09240924092409%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="58.84588458845885%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1146094213529"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>blocknum</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>Block number, which is the sequence number of the current user operation recorded in the ledger</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p14112313193"><a name="p14112313193"></a><a name="p14112313193"></a>Name of the database, to which the modified tamper-proof user table belongs</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p10712105012310"><a name="p10712105012310"></a><a name="p10712105012310"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p136759531164"><a name="p136759531164"></a><a name="p136759531164"></a>Username, which is the name of the user who performs the operation of modifying the user table</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>starttime</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>Latest timestamp when a user performs an operation</p>
</td>
</tr>
<tr id="row1386717823917"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p2086713819397"><a name="p2086713819397"></a><a name="p2086713819397"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p138677814392"><a name="p138677814392"></a><a name="p138677814392"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p786748123912"><a name="p786748123912"></a><a name="p786748123912"></a>OID of the modified tamper-proof user table</p>
</td>
</tr>
<tr id="row3583161253917"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p17583131213398"><a name="p17583131213398"></a><a name="p17583131213398"></a>relnsp</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p758341211398"><a name="p758341211398"></a><a name="p758341211398"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p3584171213914"><a name="p3584171213914"></a><a name="p3584171213914"></a>OID of the namespace to which the modified tamper-proof user table belongs</p>
</td>
</tr>
<tr id="row18804918103910"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p6805191853915"><a name="p6805191853915"></a><a name="p6805191853915"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p11805111810396"><a name="p11805111810396"></a><a name="p11805111810396"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p080591815399"><a name="p080591815399"></a><a name="p080591815399"></a>User table name, which is the name of the modified tamper-proof user table</p>
</td>
</tr>
<tr id="row131731279393"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p11741427133915"><a name="p11741427133915"></a><a name="p11741427133915"></a>relhash</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p1617422710399"><a name="p1617422710399"></a><a name="p1617422710399"></a>hash16</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p12174227103917"><a name="p12174227103917"></a><a name="p12174227103917"></a>Table-level hash change amount generated by the current operation</p>
</td>
</tr>
<tr id="row1436142573918"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p163622553919"><a name="p163622553919"></a><a name="p163622553919"></a>globalhash</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p437125123911"><a name="p437125123911"></a><a name="p437125123911"></a>hash32</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p1637142563918"><a name="p1637142563918"></a><a name="p1637142563918"></a>Global digest, which is calculated based on the information of the current row and the <strong id="b092715259552"><a name="b092715259552"></a><a name="b092715259552"></a>globalhash</strong> of the previous row. It connects the entire table to verify the integrity of <strong id="b9256103012555"><a name="b9256103012555"></a><a name="b9256103012555"></a>GS_GLOBAL_CHAIN</strong> data.</p>
</td>
</tr>
<tr id="row1439415370333"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p53941837133312"><a name="p53941837133312"></a><a name="p53941837133312"></a>txcommand</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p139483712331"><a name="p139483712331"></a><a name="p139483712331"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p739412373337"><a name="p739412373337"></a><a name="p739412373337"></a>SQL statement whose operations are recorded</p>
</td>
</tr>
</tbody>
</table>

