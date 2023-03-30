# 对比：磁盘与MOT<a name="ZH-CN_TOPIC_0289900141"></a>

下表简要对比了基于openGauss磁盘的存储引擎和MOT存储引擎的各种特性。

对比：基于磁盘与MOT

<a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_table26353123"></a>
<table><thead align="left"><tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row46471529"><th class="cellrowborder" valign="top" width="36.733673367336735%" id="mcps1.1.4.1.1"><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p6097528"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p6097528"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p6097528"></a>特性</p>
</th>
<th class="cellrowborder" valign="top" width="29.592959295929592%" id="mcps1.1.4.1.2"><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p24137755"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p24137755"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p24137755"></a>openGauss 磁盘存储</p>
</th>
<th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.3"><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p9001147"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p9001147"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p9001147"></a>openGauss MOT引擎</p>
</th>
</tr>
</thead>
<tbody><tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row58004287"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p726800"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p726800"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p726800"></a>英特尔x86+鲲鹏ARM</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p58870805"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p58870805"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p58870805"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p3805878"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p3805878"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p3805878"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row34252909"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p23022277"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p23022277"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p23022277"></a>SQL和功能集覆盖率</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p52865133"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p52865133"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p52865133"></a>100%</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p54217357"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p54217357"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p54217357"></a>98%</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row18194170"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64441666"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64441666"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64441666"></a>纵向扩容（多核，NUMA）</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p52392471"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p52392471"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p52392471"></a>低效</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p15931744"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p15931744"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p15931744"></a>高效</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row9167972"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p4408247"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p4408247"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p4408247"></a>吞吐量</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p21523698"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p21523698"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p21523698"></a>高</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p65697982"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p65697982"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p65697982"></a>极高</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row54410930"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p45209177"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p45209177"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p45209177"></a>时延</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p38064741"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p38064741"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p38064741"></a>低</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p63345214"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p63345214"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p63345214"></a>极低</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row42988862"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p59545773"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p59545773"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p59545773"></a>隔离级别</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_ul58478297"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_ul58478297"></a><ul id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_ul58478297"><li>RC+SI</li><li>RR</li><li>序列化</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_ul65471412"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_ul65471412"></a><ul id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_ul65471412"><li>RC</li><li>RR</li><li>RC+SI（V2版本）</li></ul>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row61206697"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p58795437"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p58795437"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p58795437"></a>并发控制策略</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64809920"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64809920"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64809920"></a>悲观</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p15112205"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p15112205"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p15112205"></a>乐观</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row1792120"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p10944012"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p10944012"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p10944012"></a>数据容量（数据+索引）</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p14049773"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p14049773"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p14049773"></a>不受限制</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64289794"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64289794"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p64289794"></a>受限于DRAM</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row41737235"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p25272914"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p25272914"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p25272914"></a>本地编译</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p33840186"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p33840186"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p33840186"></a>否</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p56700530"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p56700530"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p56700530"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row40542723"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p62735159"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p62735159"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p62735159"></a>复制、恢复</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p48383119"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p48383119"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p48383119"></a>是</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p26718580"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p26718580"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p26718580"></a>是</p>
</td>
</tr>
<tr id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_row39140630"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p16274489"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p16274489"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p16274489"></a>复制选项</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p43165212"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p43165212"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p43165212"></a>2（同步，异步）</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p6721255"><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p6721255"></a><a name="zh-cn_topic_0283137039_zh-cn_topic_0280525169_p6721255"></a>3（同步、异步、组提交）</p>
</td>
</tr>
</tbody>
</table>

**其中，**

-   RR=可重复读取
-   RC=读已提交
-   SI=快照隔离

