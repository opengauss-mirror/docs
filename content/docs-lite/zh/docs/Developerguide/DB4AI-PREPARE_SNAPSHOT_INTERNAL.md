# DB4AI.PREPARE\_SNAPSHOT\_INTERNAL<a name="ZH-CN_TOPIC_0000001195271243"></a>

PREPARE\_SNAPSHOT\_INTERNAL是db4ai.prepare\_snapshot函数的内置执行函数。函数存在信息校验，无法直接调用。

**表 1**  DB4AI.PREPARE\_SNAPSHOT\_INTERNAL入参和返回值列表

<a name="table4014110285"></a>
<table><thead align="left"><tr id="row8118112810"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p119116280"><a name="p119116280"></a><a name="p119116280"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p181191142819"><a name="p181191142819"></a><a name="p181191142819"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p219118289"><a name="p219118289"></a><a name="p219118289"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row61101202815"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1228913532819"><a name="p1228913532819"></a><a name="p1228913532819"></a>s_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p412152811"><a name="p412152811"></a><a name="p412152811"></a>IN  BIGINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1418162815"><a name="p1418162815"></a><a name="p1418162815"></a>快照ID</p>
</td>
</tr>
<tr id="row14110162812"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1870153982811"><a name="p1870153982811"></a><a name="p1870153982811"></a>p_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p41181122818"><a name="p41181122818"></a><a name="p41181122818"></a>IN  BIGINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1614120287"><a name="p1614120287"></a><a name="p1614120287"></a>父快照ID</p>
</td>
</tr>
<tr id="row1116152811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p151894217284"><a name="p151894217284"></a><a name="p151894217284"></a>m_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p18119112819"><a name="p18119112819"></a><a name="p18119112819"></a>IN  BIGINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p191101162813"><a name="p191101162813"></a><a name="p191101162813"></a>矩阵id</p>
</td>
</tr>
<tr id="row711212286"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1897404512283"><a name="p1897404512283"></a><a name="p1897404512283"></a>r_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1615114286"><a name="p1615114286"></a><a name="p1615114286"></a>IN  BIGINT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p512152813"><a name="p512152813"></a><a name="p512152813"></a>根快照ID</p>
</td>
</tr>
<tr id="row21515284"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p12539490286"><a name="p12539490286"></a><a name="p12539490286"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p17118118284"><a name="p17118118284"></a><a name="p17118118284"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16391650193317"><a name="p16391650193317"></a><a name="p16391650193317"></a>快照模式</p>
</td>
</tr>
<tr id="row6115142810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p13388145282813"><a name="p13388145282813"></a><a name="p13388145282813"></a>i_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1422793015302"><a name="p1422793015302"></a><a name="p1422793015302"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p9131162817"><a name="p9131162817"></a><a name="p9131162817"></a>快照名称</p>
</td>
</tr>
<tr id="row12312105652811"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19839121120290"><a name="p19839121120290"></a><a name="p19839121120290"></a>i_commands</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13419143311308"><a name="p13419143311308"></a><a name="p13419143311308"></a>IN  TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p16312556102818"><a name="p16312556102818"></a><a name="p16312556102818"></a>定义快照修改的DDL和DML命令</p>
</td>
</tr>
<tr id="row1590014712298"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10132111513294"><a name="p10132111513294"></a><a name="p10132111513294"></a>i_comment</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p59009732911"><a name="p59009732911"></a><a name="p59009732911"></a>IN  TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p149001176299"><a name="p149001176299"></a><a name="p149001176299"></a>快照描述</p>
</td>
</tr>
<tr id="row42706511299"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p129011892915"><a name="p129011892915"></a><a name="p129011892915"></a>i_owner</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1327110532910"><a name="p1327110532910"></a><a name="p1327110532910"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p112718522914"><a name="p112718522914"></a><a name="p112718522914"></a>快照所有者</p>
</td>
</tr>
<tr id="row1248314212912"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1179202162910"><a name="p1179202162910"></a><a name="p1179202162910"></a>i_idx</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p84849216294"><a name="p84849216294"></a><a name="p84849216294"></a>INOUT  INT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5599115016343"><a name="p5599115016343"></a><a name="p5599115016343"></a><span>exec_cmds的索引</span></p>
</td>
</tr>
<tr id="row115251559152816"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p196662414299"><a name="p196662414299"></a><a name="p196662414299"></a>i_exec_cmds</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p13525135917281"><a name="p13525135917281"></a><a name="p13525135917281"></a>INOUT  TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1552565942812"><a name="p1552565942812"></a><a name="p1552565942812"></a>用于执行的DDL和DML</p>
</td>
</tr>
<tr id="row7367152916298"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7936103619293"><a name="p7936103619293"></a><a name="p7936103619293"></a>i_mapping</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1336742962911"><a name="p1336742962911"></a><a name="p1336742962911"></a>IN  NAME[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p936742913296"><a name="p936742913296"></a><a name="p936742913296"></a>将用户列映射到备份列；如果不为NULL，则生成规则</p>
</td>
</tr>
</tbody>
</table>

