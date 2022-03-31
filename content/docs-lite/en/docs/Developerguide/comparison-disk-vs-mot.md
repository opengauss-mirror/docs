# Comparison: Disk vs. MOT<a name="EN-US_TOPIC_0289900141"></a>

The following table briefly compares the various features of the openGauss disk-based storage engine and the MOT storage engine.

Comparison: Disk-based vs. MOT

<a name="en-us_topic_0283137039_en-us_topic_0280525169_table26353123"></a>
<table><thead align="left"><tr id="en-us_topic_0283137039_en-us_topic_0280525169_row46471529"><th class="cellrowborder" valign="top" width="36.733673367336735%" id="mcps1.1.4.1.1"><p id="en-us_topic_0283137039_en-us_topic_0280525169_p6097528"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p6097528"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p6097528"></a>Feature</p>
</th>
<th class="cellrowborder" valign="top" width="29.592959295929592%" id="mcps1.1.4.1.2"><p id="en-us_topic_0283137039_en-us_topic_0280525169_p24137755"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p24137755"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p24137755"></a>openGauss Disk Storage</p>
</th>
<th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.1.4.1.3"><p id="en-us_topic_0283137039_en-us_topic_0280525169_p9001147"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p9001147"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p9001147"></a>openGauss MOT Engine</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137039_en-us_topic_0280525169_row58004287"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p726800"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p726800"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p726800"></a>Intel x86 + Kunpeng ARM</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p58870805"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p58870805"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p58870805"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p3805878"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p3805878"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p3805878"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row34252909"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p23022277"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p23022277"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p23022277"></a>SQL and Feature-set Coverage</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p52865133"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p52865133"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p52865133"></a>100%</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p54217357"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p54217357"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p54217357"></a>98%</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row18194170"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p64441666"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p64441666"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p64441666"></a>Scale-up (Many-cores, NUMA)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p52392471"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p52392471"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p52392471"></a>Low Efficiency</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p15931744"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p15931744"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p15931744"></a>High Efficiency</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row9167972"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p4408247"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p4408247"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p4408247"></a>Throughput</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p21523698"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p21523698"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p21523698"></a>High</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p65697982"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p65697982"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p65697982"></a>Extremely High</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row54410930"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p45209177"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p45209177"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p45209177"></a>Latency</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p38064741"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p38064741"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p38064741"></a>Low</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p63345214"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p63345214"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p63345214"></a>Extremely Low</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row42988862"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p59545773"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p59545773"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p59545773"></a>Isolation Levels</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><a name="en-us_topic_0283137039_en-us_topic_0280525169_ul58478297"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_ul58478297"></a><ul id="en-us_topic_0283137039_en-us_topic_0280525169_ul58478297"><li>RC+SI</li><li>RR</li><li>Serializable</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><a name="en-us_topic_0283137039_en-us_topic_0280525169_ul65471412"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_ul65471412"></a><ul id="en-us_topic_0283137039_en-us_topic_0280525169_ul65471412"><li>RC</li><li>RR</li><li>RC+SI (in V2 release)</li></ul>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row61206697"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p58795437"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p58795437"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p58795437"></a>Concurrency Control</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p64809920"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p64809920"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p64809920"></a>Pessimistic</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p15112205"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p15112205"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p15112205"></a>Optimistic</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row1792120"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p10944012"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p10944012"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p10944012"></a>Data Capacity (Data + Index)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p14049773"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p14049773"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p14049773"></a>Unlimited</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p64289794"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p64289794"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p64289794"></a>Limited to DRAM</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row41737235"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p25272914"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p25272914"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p25272914"></a>Native Compilation</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p33840186"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p33840186"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p33840186"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p56700530"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p56700530"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p56700530"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row40542723"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p62735159"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p62735159"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p62735159"></a>Replication, Recovery</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p48383119"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p48383119"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p48383119"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p26718580"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p26718580"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p26718580"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137039_en-us_topic_0280525169_row39140630"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.1.4.1.1 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p16274489"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p16274489"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p16274489"></a>Replication Options</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.1.4.1.2 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p43165212"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p43165212"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p43165212"></a>2 (sync, async)</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.1.4.1.3 "><p id="en-us_topic_0283137039_en-us_topic_0280525169_p6721255"><a name="en-us_topic_0283137039_en-us_topic_0280525169_p6721255"></a><a name="en-us_topic_0283137039_en-us_topic_0280525169_p6721255"></a>3 (sync, async, group-commit)</p>
</td>
</tr>
</tbody>
</table>

In the preceding information:

-   RR: Repeatable Reads
-   RC: Read Committed
-   SI: Snapshot Isolation

