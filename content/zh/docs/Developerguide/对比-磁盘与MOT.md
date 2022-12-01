# 对比：磁盘与MOT<a name="ZH-CN_TOPIC_0280525169"></a>

下表简要对比了基于openGauss磁盘的存储引擎和MOT存储引擎的各种特性。

对比：基于磁盘与MOT

<a name="table26353123"></a>
<table><thead align="left"><tr id="row46471529"><th class="cellrowborder" valign="top" width="36.733673367336735%" id="mcps1.1.4.1.1"><p id="p6097528"><a name="p6097528"></a><a name="p6097528"></a>特性</p>
</th>
<th class="cellrowborder" valign="top" width="29.592959295929592%" id="mcps1.1.4.1.2"><p id="p24137755"><a name="p24137755"></a><a name="p24137755"></a>openGauss 磁盘存储</p>
</th>
<th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.3"><p id="p9001147"><a name="p9001147"></a><a name="p9001147"></a>openGauss MOT引擎</p>
</th>
</tr>
</thead>
<tbody><tr id="row58004287"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p726800"><a name="p726800"></a><a name="p726800"></a>英特尔x86+鲲鹏ARM</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p58870805"><a name="p58870805"></a><a name="p58870805"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p3805878"><a name="p3805878"></a><a name="p3805878"></a>是</p>
</td>
</tr>
<tr id="row34252909"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p23022277"><a name="p23022277"></a><a name="p23022277"></a>SQL和功能集覆盖率</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p52865133"><a name="p52865133"></a><a name="p52865133"></a>100%</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p54217357"><a name="p54217357"></a><a name="p54217357"></a>98%</p>
</td>
</tr>
<tr id="row18194170"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p64441666"><a name="p64441666"></a><a name="p64441666"></a>纵向扩容（多核，NUMA）</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p52392471"><a name="p52392471"></a><a name="p52392471"></a>低效</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p15931744"><a name="p15931744"></a><a name="p15931744"></a>高效</p>
</td>
</tr>
<tr id="row9167972"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p4408247"><a name="p4408247"></a><a name="p4408247"></a>吞吐量</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p21523698"><a name="p21523698"></a><a name="p21523698"></a>高</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p65697982"><a name="p65697982"></a><a name="p65697982"></a>极高</p>
</td>
</tr>
<tr id="row54410930"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p45209177"><a name="p45209177"></a><a name="p45209177"></a>时延</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p38064741"><a name="p38064741"></a><a name="p38064741"></a>低</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p63345214"><a name="p63345214"></a><a name="p63345214"></a>极低</p>
</td>
</tr>
<tr id="row33236019"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p7762985"><a name="p7762985"></a><a name="p7762985"></a>分布式</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p24822048"><a name="p24822048"></a><a name="p24822048"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p64428863"><a name="p64428863"></a><a name="p64428863"></a>是</p>
</td>
</tr>
<tr id="row42988862"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p59545773"><a name="p59545773"></a><a name="p59545773"></a>隔离级别</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><a name="ul58478297"></a><a name="ul58478297"></a><ul id="ul58478297"><li>RC+SI</li><li>RR</li><li>序列化</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><a name="ul65471412"></a><a name="ul65471412"></a><ul id="ul65471412"><li>RC</li><li>RR</li><li>RC+SI（V2版本）</li></ul>
</td>
</tr>
<tr id="row61206697"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p58795437"><a name="p58795437"></a><a name="p58795437"></a>并发控制策略</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p64809920"><a name="p64809920"></a><a name="p64809920"></a>悲观</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p15112205"><a name="p15112205"></a><a name="p15112205"></a>乐观</p>
</td>
</tr>
<tr id="row1792120"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p10944012"><a name="p10944012"></a><a name="p10944012"></a>数据容量（数据+索引）</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p14049773"><a name="p14049773"></a><a name="p14049773"></a>不受限制</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p64289794"><a name="p64289794"></a><a name="p64289794"></a>受限于DRAM</p>
</td>
</tr>
<tr id="row41737235"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p25272914"><a name="p25272914"></a><a name="p25272914"></a>本地编译</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p33840186"><a name="p33840186"></a><a name="p33840186"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p56700530"><a name="p56700530"></a><a name="p56700530"></a>是</p>
</td>
</tr>
<tr id="row40542723"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p62735159"><a name="p62735159"></a><a name="p62735159"></a>复制、恢复</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p48383119"><a name="p48383119"></a><a name="p48383119"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p26718580"><a name="p26718580"></a><a name="p26718580"></a>是</p>
</td>
</tr>
<tr id="row39140630"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="p16274489"><a name="p16274489"></a><a name="p16274489"></a>复制选项</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="p43165212"><a name="p43165212"></a><a name="p43165212"></a>2（同步，异步）</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="p6721255"><a name="p6721255"></a><a name="p6721255"></a>3（同步、异步、组提交）</p>
</td>
</tr>
</tbody>
</table>

**其中，**

-   RR=可重复读取
-   RC=读已提交
-   SI=快照隔离
