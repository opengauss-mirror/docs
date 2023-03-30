# GLOBAL\_LOCKS<a name="ZH-CN_TOPIC_0245374831"></a>

GLOBAL\_LOCKS视图用于查看各节点各打开事务所持有的锁信息。

<a name="zh-cn_topic_0237122727_table13636812194016"></a>
<table><thead align="left"><tr id="zh-cn_topic_0237122727_row99071212164011"><th class="cellrowborder" valign="top" width="23.189999999999998%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0237122727_p49075122402"><a name="zh-cn_topic_0237122727_p49075122402"></a><a name="zh-cn_topic_0237122727_p49075122402"></a><strong id="zh-cn_topic_0237122727_b1890751216402"><a name="zh-cn_topic_0237122727_b1890751216402"></a><a name="zh-cn_topic_0237122727_b1890751216402"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.54%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0237122727_p390816129402"><a name="zh-cn_topic_0237122727_p390816129402"></a><a name="zh-cn_topic_0237122727_p390816129402"></a><strong id="zh-cn_topic_0237122727_b690881294013"><a name="zh-cn_topic_0237122727_b690881294013"></a><a name="zh-cn_topic_0237122727_b690881294013"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="60.27%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0237122727_p159081712164010"><a name="zh-cn_topic_0237122727_p159081712164010"></a><a name="zh-cn_topic_0237122727_p159081712164010"></a><strong id="zh-cn_topic_0237122727_b190881234014"><a name="zh-cn_topic_0237122727_b190881234014"></a><a name="zh-cn_topic_0237122727_b190881234014"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0237122727_row39081612124018"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p1090801210405"><a name="zh-cn_topic_0237122727_p1090801210405"></a><a name="zh-cn_topic_0237122727_p1090801210405"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p790831212405"><a name="zh-cn_topic_0237122727_p790831212405"></a><a name="zh-cn_topic_0237122727_p790831212405"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p9908912134010"><a name="zh-cn_topic_0237122727_p9908912134010"></a><a name="zh-cn_topic_0237122727_p9908912134010"></a>数据库进程名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row14909212144012"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p1590941264016"><a name="zh-cn_topic_0237122727_p1590941264016"></a><a name="zh-cn_topic_0237122727_p1590941264016"></a>locktype</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p1390941214409"><a name="zh-cn_topic_0237122727_p1390941214409"></a><a name="zh-cn_topic_0237122727_p1390941214409"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p2090981215405"><a name="zh-cn_topic_0237122727_p2090981215405"></a><a name="zh-cn_topic_0237122727_p2090981215405"></a>被锁定对象的类型：relation、extend、page、tuple、transactionid、virtualxid、object、userlock、advisory。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row18909112194018"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p16909112184011"><a name="zh-cn_topic_0237122727_p16909112184011"></a><a name="zh-cn_topic_0237122727_p16909112184011"></a>database</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p109094129404"><a name="zh-cn_topic_0237122727_p109094129404"></a><a name="zh-cn_topic_0237122727_p109094129404"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><div class="p" id="zh-cn_topic_0237122727_p09091012134019"><a name="zh-cn_topic_0237122727_p09091012134019"></a><a name="zh-cn_topic_0237122727_p09091012134019"></a>被锁定对象所在数据库的OID：<a name="zh-cn_topic_0237122727_ul690917127402"></a><a name="zh-cn_topic_0237122727_ul690917127402"></a><ul id="zh-cn_topic_0237122727_ul690917127402"><li>如果被锁定的对象是共享对象，则OID为0。</li><li>如果是一个事务ID，则为NULL。</li></ul>
</div>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row1591015124405"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p109103126409"><a name="zh-cn_topic_0237122727_p109103126409"></a><a name="zh-cn_topic_0237122727_p109103126409"></a>relation</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p29101812154012"><a name="zh-cn_topic_0237122727_p29101812154012"></a><a name="zh-cn_topic_0237122727_p29101812154012"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p9910121214401"><a name="zh-cn_topic_0237122727_p9910121214401"></a><a name="zh-cn_topic_0237122727_p9910121214401"></a>关系的OID，如果锁定的对象不是关系，也不是关系的一部分，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row49101512154012"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p69101112104011"><a name="zh-cn_topic_0237122727_p69101112104011"></a><a name="zh-cn_topic_0237122727_p69101112104011"></a>page</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p1910201210408"><a name="zh-cn_topic_0237122727_p1910201210408"></a><a name="zh-cn_topic_0237122727_p1910201210408"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p19101412124017"><a name="zh-cn_topic_0237122727_p19101412124017"></a><a name="zh-cn_topic_0237122727_p19101412124017"></a>关系内部的页面编号，如果对象不是关系页或者不是行页，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row691001294017"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p191011254018"><a name="zh-cn_topic_0237122727_p191011254018"></a><a name="zh-cn_topic_0237122727_p191011254018"></a>tuple</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p17911161212406"><a name="zh-cn_topic_0237122727_p17911161212406"></a><a name="zh-cn_topic_0237122727_p17911161212406"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p11911191212409"><a name="zh-cn_topic_0237122727_p11911191212409"></a><a name="zh-cn_topic_0237122727_p11911191212409"></a>页面里边的行编号，如果对象不是行，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row129111512154016"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p149111612194019"><a name="zh-cn_topic_0237122727_p149111612194019"></a><a name="zh-cn_topic_0237122727_p149111612194019"></a>virtualxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p16911191217408"><a name="zh-cn_topic_0237122727_p16911191217408"></a><a name="zh-cn_topic_0237122727_p16911191217408"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p7911111264011"><a name="zh-cn_topic_0237122727_p7911111264011"></a><a name="zh-cn_topic_0237122727_p7911111264011"></a>事务的虚拟ID，如果对象不是一个虚拟事务ID，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row1491112128409"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p0911181211402"><a name="zh-cn_topic_0237122727_p0911181211402"></a><a name="zh-cn_topic_0237122727_p0911181211402"></a>transactionid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p291151210405"><a name="zh-cn_topic_0237122727_p291151210405"></a><a name="zh-cn_topic_0237122727_p291151210405"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p189111812174020"><a name="zh-cn_topic_0237122727_p189111812174020"></a><a name="zh-cn_topic_0237122727_p189111812174020"></a>事务的ID，如果对象不是一个事务ID，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row139121212174017"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p7912141294011"><a name="zh-cn_topic_0237122727_p7912141294011"></a><a name="zh-cn_topic_0237122727_p7912141294011"></a>classid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p691261213407"><a name="zh-cn_topic_0237122727_p691261213407"></a><a name="zh-cn_topic_0237122727_p691261213407"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p1791241219409"><a name="zh-cn_topic_0237122727_p1791241219409"></a><a name="zh-cn_topic_0237122727_p1791241219409"></a>包含该对象的系统表的OID，如果对象不是普通的数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row1912012104011"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p1391201214401"><a name="zh-cn_topic_0237122727_p1391201214401"></a><a name="zh-cn_topic_0237122727_p1391201214401"></a>objid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p2912912154018"><a name="zh-cn_topic_0237122727_p2912912154018"></a><a name="zh-cn_topic_0237122727_p2912912154018"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p491211254012"><a name="zh-cn_topic_0237122727_p491211254012"></a><a name="zh-cn_topic_0237122727_p491211254012"></a>对象在其系统表内的OID，如果对象不是普通数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row391211254016"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p9912612194014"><a name="zh-cn_topic_0237122727_p9912612194014"></a><a name="zh-cn_topic_0237122727_p9912612194014"></a>objsubid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p891271274010"><a name="zh-cn_topic_0237122727_p891271274010"></a><a name="zh-cn_topic_0237122727_p891271274010"></a>smallint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p3913112134015"><a name="zh-cn_topic_0237122727_p3913112134015"></a><a name="zh-cn_topic_0237122727_p3913112134015"></a>对于表的一个字段，这是字段编号；对于其他对象类型，这个字段是零；如果这个对象不是普通数据库对象，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row291351216406"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p7913171215409"><a name="zh-cn_topic_0237122727_p7913171215409"></a><a name="zh-cn_topic_0237122727_p7913171215409"></a>virtualtransaction</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p691315125407"><a name="zh-cn_topic_0237122727_p691315125407"></a><a name="zh-cn_topic_0237122727_p691315125407"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p149131312154011"><a name="zh-cn_topic_0237122727_p149131312154011"></a><a name="zh-cn_topic_0237122727_p149131312154011"></a>持有此锁或者在等待此锁的事务的虚拟ID。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row491321284010"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p1091316123401"><a name="zh-cn_topic_0237122727_p1091316123401"></a><a name="zh-cn_topic_0237122727_p1091316123401"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p19913121234010"><a name="zh-cn_topic_0237122727_p19913121234010"></a><a name="zh-cn_topic_0237122727_p19913121234010"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p591361214014"><a name="zh-cn_topic_0237122727_p591361214014"></a><a name="zh-cn_topic_0237122727_p591361214014"></a>持有或者等待这个锁的服务器线程的逻辑ID。如果锁是被一个预备事务持有的，则为NULL。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row199133122400"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p19913012124015"><a name="zh-cn_topic_0237122727_p19913012124015"></a><a name="zh-cn_topic_0237122727_p19913012124015"></a>mode</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p991311124407"><a name="zh-cn_topic_0237122727_p991311124407"></a><a name="zh-cn_topic_0237122727_p991311124407"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p1491451254015"><a name="zh-cn_topic_0237122727_p1491451254015"></a><a name="zh-cn_topic_0237122727_p1491451254015"></a>这个线程持有的或者是期望的锁模式。</p>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row091417124407"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p15914181274011"><a name="zh-cn_topic_0237122727_p15914181274011"></a><a name="zh-cn_topic_0237122727_p15914181274011"></a>granted</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p1291461254019"><a name="zh-cn_topic_0237122727_p1291461254019"></a><a name="zh-cn_topic_0237122727_p1291461254019"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><a name="zh-cn_topic_0237122727_ul179143129405"></a><a name="zh-cn_topic_0237122727_ul179143129405"></a><ul id="zh-cn_topic_0237122727_ul179143129405"><li>如果锁是持有锁，则为TRUE。</li><li>如果锁是等待锁，则为FALSE。</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0237122727_row19914412184019"><td class="cellrowborder" valign="top" width="23.189999999999998%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0237122727_p149141112194013"><a name="zh-cn_topic_0237122727_p149141112194013"></a><a name="zh-cn_topic_0237122727_p149141112194013"></a>fastpath</p>
</td>
<td class="cellrowborder" valign="top" width="16.54%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0237122727_p1091461294011"><a name="zh-cn_topic_0237122727_p1091461294011"></a><a name="zh-cn_topic_0237122727_p1091461294011"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="60.27%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0237122727_p1291512121407"><a name="zh-cn_topic_0237122727_p1291512121407"></a><a name="zh-cn_topic_0237122727_p1291512121407"></a>如果通过fast-path获得锁，则为TRUE；如果通过主要的锁表获得，则为FALSE。</p>
</td>
</tr>
</tbody>
</table>

