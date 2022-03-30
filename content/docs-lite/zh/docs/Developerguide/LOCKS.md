# LOCKS<a name="ZH-CN_TOPIC_0289899932"></a>

LOCKS视图用于查看各打开事务所持有的锁信息。

**表 1**  LOCKS字段

<a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_table1854117176252"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row2849917132514"><th class="cellrowborder" valign="top" width="23.189999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1184951782518"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1184951782518"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1184951782518"></a><strong id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b084914171257"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b084914171257"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b084914171257"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.54%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p484917174258"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p484917174258"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p484917174258"></a><strong id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b88491317152518"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b88491317152518"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b88491317152518"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="60.27%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p98499178259"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p98499178259"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p98499178259"></a><strong id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b5850171752517"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b5850171752517"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_b5850171752517"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row7850117132515"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p168501017202516"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p168501017202516"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p168501017202516"></a>locktype</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p118501317182511"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p118501317182511"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p118501317182511"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1985018176258"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1985018176258"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1985018176258"></a>被锁定对象的类型：relation，extend，page，tuple，transactionid，virtualxid，object，userlock，advisory。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row20850161722511"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p885010178256"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p885010178256"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p885010178256"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p10850217172516"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p10850217172516"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p10850217172516"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p12850151716253"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p12850151716253"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p12850151716253"></a>被锁定对象所在数据库的OID：<a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_ul1085011177254"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_ul1085011177254"></a><ul id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_ul1085011177254"><li>如果被锁定的对象是共享对象，则OID为0。</li><li>如果是一个事务ID，则为NULL。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row1185191712252"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p885131710252"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p885131710252"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p885131710252"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13851717192511"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13851717192511"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13851717192511"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p38514176250"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p38514176250"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p38514176250"></a>关系的OID，如果锁定的对象不是关系，也不是关系的一部分，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row1285220179255"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p185251710251"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p185251710251"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p185251710251"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1285215174257"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1285215174257"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1285215174257"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p17852161717257"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p17852161717257"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p17852161717257"></a>关系内部的页面编号，如果对象不是关系页或者不是行页，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row98525173259"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385220170258"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385220170258"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385220170258"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p38531417112515"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p38531417112515"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p38531417112515"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p58531172255"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p58531172255"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p58531172255"></a>页面里边的行编号，如果对象不是行，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row19673183417586"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p11673834155813"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p11673834155813"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p11673834155813"></a>bucket</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p4673163485819"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p4673163485819"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p4673163485819"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p56731534145813"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p56731534145813"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p56731534145813"></a>哈希桶号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row38536175254"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p28531217162515"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p28531217162515"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p28531217162515"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p15853191713259"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p15853191713259"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p15853191713259"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p2085341710254"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p2085341710254"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p2085341710254"></a>事务的虚拟ID，如果对象不是一个虚拟事务ID，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row1985391702516"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13853131716255"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13853131716255"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13853131716255"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385331710258"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385331710258"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385331710258"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p485416179251"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p485416179251"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p485416179251"></a>事务的ID，如果对象不是一个事务ID，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row285415171253"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p20854131752516"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p20854131752516"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p20854131752516"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p14854121722514"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p14854121722514"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p14854121722514"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16854131716254"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16854131716254"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16854131716254"></a>包含该对象的系统表的OID，如果对象不是普通的数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row15854817192516"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1085431715251"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1085431715251"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1085431715251"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1885541752510"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1885541752510"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1885541752510"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16855131792520"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16855131792520"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16855131792520"></a>对象在其系统表内的OID，如果对象不是普通数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row48551217152518"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p0855151722518"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p0855151722518"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p0855151722518"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16855131719258"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16855131719258"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p16855131719258"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p48550174257"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p48550174257"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p48550174257"></a>对于表的一个字段，这是字段编号；对于其他对象类型，这个字段是0；如果这个对象不是普通数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row3855171714259"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p385541742511"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p385541742511"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p385541742511"></a>virtualtransaction</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p285611772510"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p285611772510"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p285611772510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18561417102516"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18561417102516"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18561417102516"></a>持有此锁或者在等待此锁的事务的虚拟ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row188561817162517"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13856121772514"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13856121772514"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13856121772514"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p685671742512"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p685671742512"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p685671742512"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p085641713252"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p085641713252"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p085641713252"></a>持有或者等待这个锁的服务器线程的逻辑ID。如果锁是被一个预备事务持有的，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row18856617192518"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p118563170251"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p118563170251"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p118563170251"></a>sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385601714251"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385601714251"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1385601714251"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18857817132513"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18857817132513"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18857817132513"></a>持有或者等待这个锁的会话ID。如果锁是被一个预备事务持有的，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row9857617102513"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13857917152514"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13857917152514"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p13857917152514"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p585711714258"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p585711714258"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p585711714258"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p20857101717255"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p20857101717255"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p20857101717255"></a>这个线程持有的或者是期望的锁模式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row1085791702510"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p7857121752511"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p7857121752511"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p7857121752511"></a>granted</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p7857181718250"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p7857181718250"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p7857181718250"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_ul1685715177250"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_ul1685715177250"></a><ul id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_ul1685715177250"><li>如果锁是持有锁，则为TRUE。</li><li>如果锁是等待锁，则为FALSE。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_row78583170252"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18858181782517"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18858181782517"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18858181782517"></a>fastpath</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1485818178251"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1485818178251"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p1485818178251"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18858151713255"><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18858151713255"></a><a name="zh-cn_topic_0283137639_zh-cn_topic_0237122726_p18858151713255"></a>如果通过fast-path获得锁，则为TRUE；如果通过主要的锁表获得，则为FALSE。</p>
</td>
</tr>
<tr id="row9359184517344"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="p336074593414"><a name="p336074593414"></a><a name="p336074593414"></a>locktag</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="p1236074543419"><a name="p1236074543419"></a><a name="p1236074543419"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="p2360545123418"><a name="p2360545123418"></a><a name="p2360545123418"></a>会话等待锁信息，可通过locktag_decode()函数解析。</p>
</td>
</tr>
<tr id="row199922421358"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="p10993134216355"><a name="p10993134216355"></a><a name="p10993134216355"></a>global_sessionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="p899304203519"><a name="p899304203519"></a><a name="p899304203519"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="p13993104214354"><a name="p13993104214354"></a><a name="p13993104214354"></a>全局会话ID。</p>
</td>
</tr>
</tbody>
</table>

