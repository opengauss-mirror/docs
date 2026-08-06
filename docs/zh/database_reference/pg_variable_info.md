# PG\_VARIABLE\_INFO

PG\_VARIABLE\_INFO视图用于查询openGauss中当前节点的xid、oid的状态。

**表 1**  PG\_VARIABLE\_INFO字段

<a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_table39812054344"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row111912613412"><th class="cellrowborder" valign="top" width="21.27%" id="mcps1.2.4.1.1"><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p387693342814"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p387693342814"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p387693342814"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="23.71%" id="mcps1.2.4.1.2"><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1112010633412"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1112010633412"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1112010633412"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="55.02%" id="mcps1.2.4.1.3"><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p9120176173416"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p9120176173416"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p9120176173416"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row412036103413"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p118771633182810"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p118771633182810"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p118771633182810"></a>node_name</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p512066173411"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p512066173411"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p512066173411"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p131207615346"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p131207615346"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p131207615346"></a>节点名称。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row1512018615349"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p15877133322818"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p15877133322818"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p15877133322818"></a>next_oid</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p12120116183416"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p12120116183416"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p12120116183416"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p171208611343"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p171208611343"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p171208611343"></a>该节点下一次生成的oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row6120106113415"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p687713311283"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p687713311283"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p687713311283"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p212111612340"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p212111612340"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p212111612340"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p31211616345"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p31211616345"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p31211616345"></a>该节点下一次生成的事务号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row151217613419"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1087793313283"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1087793313283"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1087793313283"></a>oldest_xid</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p2012176173415"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p2012176173415"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p2012176173415"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p61211163342"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p61211163342"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p61211163342"></a>该节点最老的事务号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row81211623410"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p4878163332817"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p4878163332817"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p4878163332817"></a>xid_vac_limit</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p2012116620348"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p2012116620348"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p2012116620348"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p31221623413"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p31221623413"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p31221623413"></a>强制autovacuum的临界点。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row13122967345"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p3878533112815"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p3878533112815"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p3878533112815"></a>oldest_xid_db</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p412220620346"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p412220620346"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p412220620346"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p0122469343"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p0122469343"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p0122469343"></a>该节点datafrozenxid最小的数据库oid。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row1012220617344"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1087893313288"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1087893313288"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1087893313288"></a>last_extend_csn_logpage</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1112236113412"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1112236113412"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1112236113412"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1122146133416"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1122146133416"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1122146133416"></a>最后一次扩展csnlog的页面号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row312276193410"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p78781833142818"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p78781833142818"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p78781833142818"></a>start_extend_csn_logpage</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p131235663416"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p131235663416"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p131235663416"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p171236611343"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p171236611343"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p171236611343"></a>csnlog扩展的起始页面号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row15123156103415"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p587816336284"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p587816336284"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p587816336284"></a>next_commit_seqno</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p14123176153413"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p14123176153413"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p14123176153413"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p121230611348"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p121230611348"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p121230611348"></a>该节点下次生成的csn号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row9123161340"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p38791033182818"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p38791033182818"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p38791033182818"></a>latest_completed_xid</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p8123566343"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p8123566343"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p8123566343"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p16124106143415"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p16124106143415"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p16124106143415"></a>该节点提交或者回滚后节点上的最新事务号。</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_row7124126173414"><td class="cellrowborder" valign="top" width="21.27%" headers="mcps1.2.4.1.1 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p687913333288"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p687913333288"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p687913333288"></a>startup_max_xid</p>
</td>
<td class="cellrowborder" valign="top" width="23.71%" headers="mcps1.2.4.1.2 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1912426153418"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1912426153418"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p1912426153418"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="55.02%" headers="mcps1.2.4.1.3 "><p id="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p101247683413"><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p101247683413"></a><a name="zh-cn_topic_0283137710_zh-cn_topic_0237122541_p101247683413"></a>该节点关机前的最后一个事务号。</p>
</td>
</tr>
</tbody>
</table>
