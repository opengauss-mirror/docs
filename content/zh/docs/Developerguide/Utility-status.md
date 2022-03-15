# Utility status<a name="ZH-CN_TOPIC_0000001259835123"></a>

Utility status包含Background writer stat、Replication slot和Replication stat三张表，列名称及描述如下所示。

## Background writer stat<a name="section155172118496"></a>

**表 1**  Background writer stat报表主要内容

<a name="table6474183811552"></a>
<table><thead align="left"><tr id="row124748385551"><th class="cellrowborder" valign="top" width="19.91%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="80.08999999999999%" id="mcps1.2.3.1.2"><p id="p184752380558"><a name="p184752380558"></a><a name="p184752380558"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row10475838135511"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p14748742115613"><a name="p14748742115613"></a><a name="p14748742115613"></a>Checkpoints Timed</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p197482428561"><a name="p197482428561"></a><a name="p197482428561"></a>执行的定期检查点数。</p>
</td>
</tr>
<tr id="row347583817550"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p2748204211563"><a name="p2748204211563"></a><a name="p2748204211563"></a>Checkpoints Require</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p0748542205610"><a name="p0748542205610"></a><a name="p0748542205610"></a>执行的需求检查点数。</p>
</td>
</tr>
<tr id="row1147518389557"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p674816425568"><a name="p674816425568"></a><a name="p674816425568"></a>Checkpoint Write Time(ms)</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p2748114210563"><a name="p2748114210563"></a><a name="p2748114210563"></a>花费在检查点处理部分的时间总量，其中文件被写入到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="row20475638165513"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p1074824218564"><a name="p1074824218564"></a><a name="p1074824218564"></a>Checkpoint Sync Time(ms)</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p67499425569"><a name="p67499425569"></a><a name="p67499425569"></a>花费在检查点处理部分的时间总量，其中文件被同步到磁盘，以毫秒为单位。</p>
</td>
</tr>
<tr id="row1747593815517"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p11749742175616"><a name="p11749742175616"></a><a name="p11749742175616"></a>Buffers Checkpoint</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p07491742145612"><a name="p07491742145612"></a><a name="p07491742145612"></a>检查点写缓冲区数量。</p>
</td>
</tr>
<tr id="row2047517386558"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p2749144215615"><a name="p2749144215615"></a><a name="p2749144215615"></a>Buffers Clean</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p2749194265613"><a name="p2749194265613"></a><a name="p2749194265613"></a>后端写进程写缓冲区数量。</p>
</td>
</tr>
<tr id="row184750389553"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p8749104217561"><a name="p8749104217561"></a><a name="p8749104217561"></a>Maxwritten Clean</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p474914211564"><a name="p474914211564"></a><a name="p474914211564"></a>后端写进程停止清理扫描时间数，因为它写了太多缓冲区。</p>
</td>
</tr>
<tr id="row15475538175510"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p1874964215620"><a name="p1874964215620"></a><a name="p1874964215620"></a>Buffers Backend</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p174954285613"><a name="p174954285613"></a><a name="p174954285613"></a>通过后端直接写缓冲区数。</p>
</td>
</tr>
<tr id="row6475138155513"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p174934219561"><a name="p174934219561"></a><a name="p174934219561"></a>Buffers Backend Fsync</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p874912426566"><a name="p874912426566"></a><a name="p874912426566"></a>后端不得不执行自己的fsync调用的时间数 （通常后端写进程处理这些即使后端确实自己写）。</p>
</td>
</tr>
<tr id="row15475538175517"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p197491342115614"><a name="p197491342115614"></a><a name="p197491342115614"></a>Buffers Alloc</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p674994210562"><a name="p674994210562"></a><a name="p674994210562"></a>分配的缓冲区数量。</p>
</td>
</tr>
<tr id="row647593865514"><td class="cellrowborder" valign="top" width="19.91%" headers="mcps1.2.3.1.1 "><p id="p67491442135611"><a name="p67491442135611"></a><a name="p67491442135611"></a>Stats Reset</p>
</td>
<td class="cellrowborder" valign="top" width="80.08999999999999%" headers="mcps1.2.3.1.2 "><p id="p374916429566"><a name="p374916429566"></a><a name="p374916429566"></a>这些统计被重置的时间。</p>
</td>
</tr>
</tbody>
</table>

## Replication slot<a name="section43781039115513"></a>

**表 2**  Replication slot报表主要内容

<a name="table4378939145511"></a>
<table><thead align="left"><tr id="row8379539165515"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p53791439185511"><a name="p53791439185511"></a><a name="p53791439185511"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1637943914552"><a name="p1637943914552"></a><a name="p1637943914552"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row337923910558"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p195371314135718"><a name="p195371314135718"></a><a name="p195371314135718"></a>Slot Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1253731417575"><a name="p1253731417575"></a><a name="p1253731417575"></a>复制节点名。</p>
</td>
</tr>
<tr id="row1379133965515"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p953771475713"><a name="p953771475713"></a><a name="p953771475713"></a>Slot Type</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p753721425714"><a name="p753721425714"></a><a name="p753721425714"></a>复制节点类型。</p>
</td>
</tr>
<tr id="row18379123915556"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p153721410572"><a name="p153721410572"></a><a name="p153721410572"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1753791475718"><a name="p1753791475718"></a><a name="p1753791475718"></a>复制节点数据库名称。</p>
</td>
</tr>
<tr id="row63799394551"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p2053713141579"><a name="p2053713141579"></a><a name="p2053713141579"></a>Active</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p12537141495713"><a name="p12537141495713"></a><a name="p12537141495713"></a>复制节点状态。</p>
</td>
</tr>
<tr id="row23791839195514"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p353781417578"><a name="p353781417578"></a><a name="p353781417578"></a>Xmin</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p125373145572"><a name="p125373145572"></a><a name="p125373145572"></a>复制节点事务标识。</p>
</td>
</tr>
<tr id="row5379183935513"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p05377141577"><a name="p05377141577"></a><a name="p05377141577"></a>Restart Lsn</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1453813149571"><a name="p1453813149571"></a><a name="p1453813149571"></a>复制节点的Xlog文件信息。</p>
</td>
</tr>
<tr id="row16379439185518"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p353851465718"><a name="p353851465718"></a><a name="p353851465718"></a>Dummy Standby</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1538114195717"><a name="p1538114195717"></a><a name="p1538114195717"></a>复制节点假备。</p>
</td>
</tr>
</tbody>
</table>

## Replication stat<a name="section372174016550"></a>

**表 3**  Replication stat报表主要内容

<a name="table107213403552"></a>
<table><thead align="left"><tr id="row117211740195514"><th class="cellrowborder" valign="top" width="25.88%" id="mcps1.2.3.1.1"><p id="p10721184010556"><a name="p10721184010556"></a><a name="p10721184010556"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="74.11999999999999%" id="mcps1.2.3.1.2"><p id="p117225407557"><a name="p117225407557"></a><a name="p117225407557"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row87229402558"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p5994115175716"><a name="p5994115175716"></a><a name="p5994115175716"></a>Thread Id</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p0994851145720"><a name="p0994851145720"></a><a name="p0994851145720"></a>线程的PID。</p>
</td>
</tr>
<tr id="row17226406559"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p16994125165717"><a name="p16994125165717"></a><a name="p16994125165717"></a>Usesys Id</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p169943519575"><a name="p169943519575"></a><a name="p169943519575"></a>用户系统ID。</p>
</td>
</tr>
<tr id="row572211406556"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p16994175185711"><a name="p16994175185711"></a><a name="p16994175185711"></a>Usename</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p199495118571"><a name="p199495118571"></a><a name="p199495118571"></a>用户名称。</p>
</td>
</tr>
<tr id="row172294005517"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p899485119577"><a name="p899485119577"></a><a name="p899485119577"></a>Application Name</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p1299417514576"><a name="p1299417514576"></a><a name="p1299417514576"></a>应用程序。</p>
</td>
</tr>
<tr id="row07220407553"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p109941451115712"><a name="p109941451115712"></a><a name="p109941451115712"></a>Client Addr</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p11994751115712"><a name="p11994751115712"></a><a name="p11994751115712"></a>客户端地址。</p>
</td>
</tr>
<tr id="row1772264035512"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p149951251185719"><a name="p149951251185719"></a><a name="p149951251185719"></a>Client Hostname</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p12995351115715"><a name="p12995351115715"></a><a name="p12995351115715"></a>客户端主机名。</p>
</td>
</tr>
<tr id="row8722124045513"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p5995175111576"><a name="p5995175111576"></a><a name="p5995175111576"></a>Client Port</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p179951051175712"><a name="p179951051175712"></a><a name="p179951051175712"></a>客户端端口。</p>
</td>
</tr>
<tr id="row137229409555"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p1799545175712"><a name="p1799545175712"></a><a name="p1799545175712"></a>Backend Start</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p69955512571"><a name="p69955512571"></a><a name="p69955512571"></a>程序起始时间。</p>
</td>
</tr>
<tr id="row1072254015519"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p8995155155714"><a name="p8995155155714"></a><a name="p8995155155714"></a>State</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p139954514579"><a name="p139954514579"></a><a name="p139954514579"></a>日志复制状态。</p>
</td>
</tr>
<tr id="row7722124065518"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p39951551115712"><a name="p39951551115712"></a><a name="p39951551115712"></a>Sender Sent Location</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p99951519575"><a name="p99951519575"></a><a name="p99951519575"></a>发送端发送日志位置。</p>
</td>
</tr>
<tr id="row16722124015555"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p149950515578"><a name="p149950515578"></a><a name="p149950515578"></a>Receiver Write Location</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p16995165117579"><a name="p16995165117579"></a><a name="p16995165117579"></a>接收端write日志位置。</p>
</td>
</tr>
<tr id="row137231640125518"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p189951518574"><a name="p189951518574"></a><a name="p189951518574"></a>Receiver Flush Location</p>
<p id="p6995195118575"><a name="p6995195118575"></a><a name="p6995195118575"></a>Receiver Replay Location</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p999565195715"><a name="p999565195715"></a><a name="p999565195715"></a>接收端flush日志位置。</p>
<p id="p20995251165711"><a name="p20995251165711"></a><a name="p20995251165711"></a>接收端replay日志位置。</p>
</td>
</tr>
<tr id="row167716241110"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p1762463616115"><a name="p1762463616115"></a><a name="p1762463616115"></a>Sync Priority</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p14624193613111"><a name="p14624193613111"></a><a name="p14624193613111"></a>同步优先级。</p>
</td>
</tr>
<tr id="row239972712118"><td class="cellrowborder" valign="top" width="25.88%" headers="mcps1.2.3.1.1 "><p id="p1762416369119"><a name="p1762416369119"></a><a name="p1762416369119"></a>Sync State</p>
</td>
<td class="cellrowborder" valign="top" width="74.11999999999999%" headers="mcps1.2.3.1.2 "><p id="p1162493618116"><a name="p1162493618116"></a><a name="p1162493618116"></a>同步状态。</p>
</td>
</tr>
</tbody>
</table>

