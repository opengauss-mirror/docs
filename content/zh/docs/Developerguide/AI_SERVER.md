# AI\_SERVER<a name="ZH-CN_TOPIC_0000001106449240"></a>

ai\_server为anomaly\_detection特性的分离特性，在原anomaly\_detection数据采集功能的基础上增加了采集类型、采集项、数据存储模式，仅用于数据采集，后续将整合到anomaly\_detection中，该特性主要包含server组件和agent组件，agent须部署到数据库节点，用于数据采集，server部署在独立节点进行数据收集存储。

数据存储方式包括：sqlite、mongodb、influxdb。

采集项如[表1](#table174063254539)：

**表 1**  采集项说明

<a name="table174063254539"></a>
<table><thead align="left"><tr id="row19407152515320"><th class="cellrowborder" valign="top" width="13.451345134513451%" id="mcps1.2.4.1.1"><p id="p140752515531"><a name="p140752515531"></a><a name="p140752515531"></a>采集类型</p>
</th>
<th class="cellrowborder" valign="top" width="20.95209520952095%" id="mcps1.2.4.1.2"><p id="p440752517538"><a name="p440752517538"></a><a name="p440752517538"></a>采集项</p>
</th>
<th class="cellrowborder" valign="top" width="65.5965596559656%" id="mcps1.2.4.1.3"><p id="p24071425135311"><a name="p24071425135311"></a><a name="p24071425135311"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row14079256533"><td class="cellrowborder" rowspan="5" valign="top" width="13.451345134513451%" headers="mcps1.2.4.1.1 "><p id="p3407192513535"><a name="p3407192513535"></a><a name="p3407192513535"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="20.95209520952095%" headers="mcps1.2.4.1.2 "><p id="p640832535314"><a name="p640832535314"></a><a name="p640832535314"></a>work_mem</p>
</td>
<td class="cellrowborder" valign="top" width="65.5965596559656%" headers="mcps1.2.4.1.3 "><p id="p17408142520539"><a name="p17408142520539"></a><a name="p17408142520539"></a>数据库内存相关GUC参数，对涉及到排序任务的sql，检测分配的空间是否足够。</p>
</td>
</tr>
<tr id="row19408162514533"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p840872505318"><a name="p840872505318"></a><a name="p840872505318"></a>shared_buffers</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p74081925125310"><a name="p74081925125310"></a><a name="p74081925125310"></a>数据库内存相关GUC参数，不合适的shared_buffer会导致数据库性能变差。</p>
</td>
</tr>
<tr id="row1840811254537"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2408325195310"><a name="p2408325195310"></a><a name="p2408325195310"></a>max_connections</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p10409152575316"><a name="p10409152575316"></a><a name="p10409152575316"></a>数据库最大连接数。</p>
</td>
</tr>
<tr id="row74091925135316"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p2040932515537"><a name="p2040932515537"></a><a name="p2040932515537"></a>current connections</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p1440952519539"><a name="p1440952519539"></a><a name="p1440952519539"></a>数据库当前连接数。</p>
</td>
</tr>
<tr id="row19409182575315"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p20409132514536"><a name="p20409132514536"></a><a name="p20409132514536"></a>qps</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p840911254537"><a name="p840911254537"></a><a name="p840911254537"></a>数据库性能指标。</p>
</td>
</tr>
<tr id="row9409152565319"><td class="cellrowborder" rowspan="6" valign="top" width="13.451345134513451%" headers="mcps1.2.4.1.1 "><p id="p18409725145320"><a name="p18409725145320"></a><a name="p18409725145320"></a>os</p>
</td>
<td class="cellrowborder" valign="top" width="20.95209520952095%" headers="mcps1.2.4.1.2 "><p id="p1740992516537"><a name="p1740992516537"></a><a name="p1740992516537"></a>cpu usage</p>
</td>
<td class="cellrowborder" valign="top" width="65.5965596559656%" headers="mcps1.2.4.1.3 "><p id="p540902535311"><a name="p540902535311"></a><a name="p540902535311"></a>cpu使用率。</p>
</td>
</tr>
<tr id="row10410122595311"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1641062545310"><a name="p1641062545310"></a><a name="p1641062545310"></a>memory usage</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p3410125125313"><a name="p3410125125313"></a><a name="p3410125125313"></a>内存使用率。</p>
</td>
</tr>
<tr id="row531462825718"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p11316628165711"><a name="p11316628165711"></a><a name="p11316628165711"></a>io wait</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p431612813574"><a name="p431612813574"></a><a name="p431612813574"></a>系统因为io导致的进程wait。</p>
</td>
</tr>
<tr id="row1974623455715"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p27466345571"><a name="p27466345571"></a><a name="p27466345571"></a>io write</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p47471334155713"><a name="p47471334155713"></a><a name="p47471334155713"></a>数据磁盘写吞吐量。</p>
</td>
</tr>
<tr id="row1218013574576"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1618125795711"><a name="p1618125795711"></a><a name="p1618125795711"></a>io read</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p7181957135719"><a name="p7181957135719"></a><a name="p7181957135719"></a>数据磁盘读吞吐量。</p>
</td>
</tr>
<tr id="row14770140115813"><td class="cellrowborder" valign="top" headers="mcps1.2.4.1.1 "><p id="p1177020015587"><a name="p1177020015587"></a><a name="p1177020015587"></a>disk used</p>
</td>
<td class="cellrowborder" valign="top" headers="mcps1.2.4.1.2 "><p id="p277010015817"><a name="p277010015817"></a><a name="p277010015817"></a>磁盘已使用的大小。</p>
</td>
</tr>
</tbody>
</table>

部署方式请参见[AI\_MANAGER](AI_MANAGER.md)章节。
