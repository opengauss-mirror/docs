# GS\_GLOBAL\_CHAIN<a name="ZH-CN_TOPIC_0000001100127692"></a>

GS\_GLOBAL\_CHAIN系统表记录用户对防篡改用户表的修改操作信息，每条记录对应一次表级修改操作。具有审计管理员权限的用户可以查询此系统表，所有用户均不允许修改此系统表。

**表 1**  GS\_GLOBAL\_CHAIN字段

<a name="table845914245212"></a>
<table><thead align="left"><tr id="row15459154216524"><th class="cellrowborder" valign="top" width="17.06170617061706%" id="mcps1.2.4.1.1"><p id="p13460942125210"><a name="p13460942125210"></a><a name="p13460942125210"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="24.09240924092409%" id="mcps1.2.4.1.2"><p id="p174601425522"><a name="p174601425522"></a><a name="p174601425522"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="58.84588458845885%" id="mcps1.2.4.1.3"><p id="p10460114218529"><a name="p10460114218529"></a><a name="p10460114218529"></a>描述</p>
</th>
</tr>
</thead>
<tbody>
<tr id="row1146094213529"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p1236651611535"><a name="p1236651611535"></a><a name="p1236651611535"></a>blocknum</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p1187332611532"><a name="p1187332611532"></a><a name="p1187332611532"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p6481690534"><a name="p6481690534"></a><a name="p6481690534"></a>区块号，当前用户操作在账本中记录的序号。</p>
</td>
</tr>
<tr id="row10460542185211"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p163156504535"><a name="p163156504535"></a><a name="p163156504535"></a>dbname</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p10187125355311"><a name="p10187125355311"></a><a name="p10187125355311"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p14112313193"><a name="p14112313193"></a><a name="p14112313193"></a>数据库名称。被修改的防篡改用户表所属的database。</p>
</td>
</tr>
<tr id="row9460154275216"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p10712105012310"><a name="p10712105012310"></a><a name="p10712105012310"></a>username</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p3474109115313"><a name="p3474109115313"></a><a name="p3474109115313"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p136759531164"><a name="p136759531164"></a><a name="p136759531164"></a>用户名，执行用户表修改操作的用户名。</p>
</td>
</tr>
<tr id="row12460842185215"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p8829172305414"><a name="p8829172305414"></a><a name="p8829172305414"></a>starttime</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p146919995319"><a name="p146919995319"></a><a name="p146919995319"></a>timestamp with time zone</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p112181314549"><a name="p112181314549"></a><a name="p112181314549"></a>用户操作执行的最新时间戳。</p>
</td>
</tr>
<tr id="row1386717823917"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p2086713819397"><a name="p2086713819397"></a><a name="p2086713819397"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p138677814392"><a name="p138677814392"></a><a name="p138677814392"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p786748123912"><a name="p786748123912"></a><a name="p786748123912"></a>用户表Oid，被修改的防篡改用户表Oid。</p>
</td>
</tr>
<tr id="row3583161253917"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p17583131213398"><a name="p17583131213398"></a><a name="p17583131213398"></a>relnsp</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p758341211398"><a name="p758341211398"></a><a name="p758341211398"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p3584171213914"><a name="p3584171213914"></a><a name="p3584171213914"></a>模式Oid，被修改的防篡改用户表所属的namesapce oid。</p>
</td>
</tr>
<tr id="row18804918103910"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p6805191853915"><a name="p6805191853915"></a><a name="p6805191853915"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p11805111810396"><a name="p11805111810396"></a><a name="p11805111810396"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p080591815399"><a name="p080591815399"></a><a name="p080591815399"></a>用户表名，被修改的防篡改用户表名。</p>
</td>
</tr>
<tr id="row131731279393"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p11741427133915"><a name="p11741427133915"></a><a name="p11741427133915"></a>relhash</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p1617422710399"><a name="p1617422710399"></a><a name="p1617422710399"></a>hash16</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p12174227103917"><a name="p12174227103917"></a><a name="p12174227103917"></a>当前操作产生的表级别hash变化量。</p>
</td>
</tr>
<tr id="row1436142573918"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p163622553919"><a name="p163622553919"></a><a name="p163622553919"></a>globalhash</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p437125123911"><a name="p437125123911"></a><a name="p437125123911"></a>hash32</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p1637142563918"><a name="p1637142563918"></a><a name="p1637142563918"></a>全局摘要，由当前行信息与前一行globalhash计算而来，将整个表串联起来，用于验证GS_GLOBAL_CHAIN数据完整性。</p>
</td>
</tr>
<tr id="row1439415370333"><td class="cellrowborder" valign="top" width="17.06170617061706%" headers="mcps1.2.4.1.1 "><p id="p53941837133312"><a name="p53941837133312"></a><a name="p53941837133312"></a>txcommand</p>
</td>
<td class="cellrowborder" valign="top" width="24.09240924092409%" headers="mcps1.2.4.1.2 "><p id="p139483712331"><a name="p139483712331"></a><a name="p139483712331"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="58.84588458845885%" headers="mcps1.2.4.1.3 "><p id="p739412373337"><a name="p739412373337"></a><a name="p739412373337"></a>被记录操作的SQL语句。</p>
</td>
</tr>
</tbody>
</table>


