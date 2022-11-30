# GS\_RECYCLEBIN<a name="ZH-CN_TOPIC_0000001151309157"></a>

gs\_recyclebin描述了回收站对象的详细信息。

**表 1**  gs\_recyclebin字段

<a name="table165293775215"></a>
<table><thead align="left"><tr id="row12247437185219"><th class="cellrowborder" valign="top" width="20.3%" id="mcps1.2.4.1.1"><p id="p12475373526"><a name="p12475373526"></a><a name="p12475373526"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="17.8%" id="mcps1.2.4.1.2"><p id="p6247183715525"><a name="p6247183715525"></a><a name="p6247183715525"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="61.9%" id="mcps1.2.4.1.3"><p id="p6247113785216"><a name="p6247113785216"></a><a name="p6247113785216"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1924713375522"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p72471237105219"><a name="p72471237105219"></a><a name="p72471237105219"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p3247837105214"><a name="p3247837105214"></a><a name="p3247837105214"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p11247143711529"><a name="p11247143711529"></a><a name="p11247143711529"></a>系统列。</p>
</td>
</tr>
<tr id="row172471137155215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p9248143785217"><a name="p9248143785217"></a><a name="p9248143785217"></a>rcybaseid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p62481537205220"><a name="p62481537205220"></a><a name="p62481537205220"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p8248133710526"><a name="p8248133710526"></a><a name="p8248133710526"></a>基表对象id，引用gs_recyclebin.oid。</p>
</td>
</tr>
<tr id="row20248193725219"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p32481037145214"><a name="p32481037145214"></a><a name="p32481037145214"></a>rcydbid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p2024810376522"><a name="p2024810376522"></a><a name="p2024810376522"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p17248837195214"><a name="p17248837195214"></a><a name="p17248837195214"></a>当前对象所属数据库oid。</p>
</td>
</tr>
<tr id="row1999202511419"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1754716331041"><a name="p1754716331041"></a><a name="p1754716331041"></a>rcyrelid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p15476331845"><a name="p15476331845"></a><a name="p15476331845"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p6548143310410"><a name="p6548143310410"></a><a name="p6548143310410"></a>当前对象oid。</p>
</td>
</tr>
<tr id="row92481137155216"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p152481437175210"><a name="p152481437175210"></a><a name="p152481437175210"></a>rcyname</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p13248123785218"><a name="p13248123785218"></a><a name="p13248123785218"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p224843710527"><a name="p224843710527"></a><a name="p224843710527"></a>回收站对象名称，格式“BIN$unique_id$oid$0”，其中unique_id为最多16字符唯一标识，oid为对象标识符。</p>
</td>
</tr>
<tr id="row12248173735215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1424873710529"><a name="p1424873710529"></a><a name="p1424873710529"></a>rcyoriginname</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p1524853711521"><a name="p1524853711521"></a><a name="p1524853711521"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p19248337145218"><a name="p19248337145218"></a><a name="p19248337145218"></a>原始对象名称。</p>
</td>
</tr>
<tr id="row192483377521"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p162480379527"><a name="p162480379527"></a><a name="p162480379527"></a>rcyoperation</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p0248173712522"><a name="p0248173712522"></a><a name="p0248173712522"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p124833719522"><a name="p124833719522"></a><a name="p124833719522"></a>操作类型。</p>
<a name="ul9248537185214"></a><a name="ul9248537185214"></a><ul id="ul9248537185214"><li>d表示drop。</li><li>t表示truncate。</li></ul>
</td>
</tr>
<tr id="row15249143716526"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p162491437205212"><a name="p162491437205212"></a><a name="p162491437205212"></a>rcytype</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p824923713529"><a name="p824923713529"></a><a name="p824923713529"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p72496378525"><a name="p72496378525"></a><a name="p72496378525"></a>对象类型。</p>
<a name="ul182491437115217"></a><a name="ul182491437115217"></a><ul id="ul182491437115217"><li>0表示table。</li><li>1表示index。</li><li>2表示toast table。</li><li>3表示toast index。</li><li>4表示sequence，指serial、bigserial、smallserial、largeserial类型自动关联的序列对象。</li><li>5表示partition。</li><li>6表示global index。</li></ul>
</td>
</tr>
<tr id="row172491037175215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p10249123715213"><a name="p10249123715213"></a><a name="p10249123715213"></a>rcyrecyclecsn</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p15249163715219"><a name="p15249163715219"></a><a name="p15249163715219"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1249133714525"><a name="p1249133714525"></a><a name="p1249133714525"></a>对象drop、truncate时csn。</p>
</td>
</tr>
<tr id="row202491937195219"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1024933775212"><a name="p1024933775212"></a><a name="p1024933775212"></a>rcyrecycletime</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p132491137195213"><a name="p132491137195213"></a><a name="p132491137195213"></a>timestamptz</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p32491237135212"><a name="p32491237135212"></a><a name="p32491237135212"></a>对象drop、truncate时间。</p>
</td>
</tr>
<tr id="row1624915373526"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p9250737165218"><a name="p9250737165218"></a><a name="p9250737165218"></a>rcycreatecsn</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p1025015379526"><a name="p1025015379526"></a><a name="p1025015379526"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1425043718525"><a name="p1425043718525"></a><a name="p1425043718525"></a>对象创建时csn。</p>
</td>
</tr>
<tr id="row12250237155218"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p8250337115219"><a name="p8250337115219"></a><a name="p8250337115219"></a>rcychangecsn</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p6250337115210"><a name="p6250337115210"></a><a name="p6250337115210"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1250173719522"><a name="p1250173719522"></a><a name="p1250173719522"></a>对象定义改变的csn。</p>
</td>
</tr>
<tr id="row1725083755217"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p172501037105217"><a name="p172501037105217"></a><a name="p172501037105217"></a>rcynamespace</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p925093720524"><a name="p925093720524"></a><a name="p925093720524"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p725012375525"><a name="p725012375525"></a><a name="p725012375525"></a>包含这个关系的名字空间的OID。</p>
</td>
</tr>
<tr id="row1725013755218"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p5250037155213"><a name="p5250037155213"></a><a name="p5250037155213"></a>rcyowner</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p172504373522"><a name="p172504373522"></a><a name="p172504373522"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p32507375523"><a name="p32507375523"></a><a name="p32507375523"></a>关系所有者。</p>
</td>
</tr>
<tr id="row525015378522"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p225013710523"><a name="p225013710523"></a><a name="p225013710523"></a>rcytablespace</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p82507377523"><a name="p82507377523"></a><a name="p82507377523"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p92501737125218"><a name="p92501737125218"></a><a name="p92501737125218"></a>这个关系存储所在的表空间。如果为0，则意味着使用该数据库的缺省表空间。如果关系在磁盘上没有文件，则这个字段没有什么意义。</p>
</td>
</tr>
<tr id="row15250103713521"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p1525015375521"><a name="p1525015375521"></a><a name="p1525015375521"></a>rcyrelfilenode</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p11251737125217"><a name="p11251737125217"></a><a name="p11251737125217"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p1525163717524"><a name="p1525163717524"></a><a name="p1525163717524"></a>回收站对象在磁盘上的文件的名称，如果没有则为0，用于TRUNCATE对象恢复时纹理文件还原。</p>
</td>
</tr>
<tr id="row162519377527"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p13251203735215"><a name="p13251203735215"></a><a name="p13251203735215"></a>rcycanrestore</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p525118377528"><a name="p525118377528"></a><a name="p525118377528"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p2025111370521"><a name="p2025111370521"></a><a name="p2025111370521"></a>是否可以被单独闪回。</p>
</td>
</tr>
<tr id="row625163717521"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p192511437145219"><a name="p192511437145219"></a><a name="p192511437145219"></a>rcycanpurge</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p1251103711523"><a name="p1251103711523"></a><a name="p1251103711523"></a>bool</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p5251937135212"><a name="p5251937135212"></a><a name="p5251937135212"></a>是否可以被单独purge。</p>
</td>
</tr>
<tr id="row202511537125215"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p425113714529"><a name="p425113714529"></a><a name="p425113714529"></a>rcyfrozenxid</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p925113735219"><a name="p925113735219"></a><a name="p925113735219"></a>xid32</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p42511237175211"><a name="p42511237175211"></a><a name="p42511237175211"></a>该表中所有在这个之前的事务ID已经被一个固定的（“frozen”）事务ID替换。</p>
</td>
</tr>
<tr id="row11251937175218"><td class="cellrowborder" valign="top" width="20.3%" headers="mcps1.2.4.1.1 "><p id="p3251163755213"><a name="p3251163755213"></a><a name="p3251163755213"></a>rcyfrozenxid64</p>
</td>
<td class="cellrowborder" valign="top" width="17.8%" headers="mcps1.2.4.1.2 "><p id="p132519372521"><a name="p132519372521"></a><a name="p132519372521"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="61.9%" headers="mcps1.2.4.1.3 "><p id="p5251103710528"><a name="p5251103710528"></a><a name="p5251103710528"></a>该表中所有在这个之前的事务ID已经被一个固定的（“frozen”）事务ID替换。</p>
</td>
</tr>
</tbody>
</table>
