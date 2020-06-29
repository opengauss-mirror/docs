# Comparison – Disk vs. MOT<a name="EN-US_TOPIC_0257867447"></a>

The following table briefly compares the various features of a openGauss Disk-based storage engine and a MOT storage engine.

**Table  1**  Comparison – Disk vs. MOT

<a name="en-us_topic_0257713329_table23881072"></a>
<table><thead align="left"><tr id="en-us_topic_0257713329_row40663976"><th class="cellrowborder" valign="top" width="36.733673367336735%" id="mcps1.2.4.1.1"><p id="en-us_topic_0257713329_p5447764"><a name="en-us_topic_0257713329_p5447764"></a><a name="en-us_topic_0257713329_p5447764"></a>Feature</p>
</th>
<th class="cellrowborder" valign="top" width="29.592959295929592%" id="mcps1.2.4.1.2"><p id="en-us_topic_0257713329_p38615736"><a name="en-us_topic_0257713329_p38615736"></a><a name="en-us_topic_0257713329_p38615736"></a>GaussDB Disk Store</p>
</th>
<th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.2.4.1.3"><p id="en-us_topic_0257713329_p40866941"><a name="en-us_topic_0257713329_p40866941"></a><a name="en-us_topic_0257713329_p40866941"></a>GaussDB MOT Store</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713329_row21887947"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p28093257"><a name="en-us_topic_0257713329_p28093257"></a><a name="en-us_topic_0257713329_p28093257"></a>Intel x86 + Kunpeng ARM</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p60961311"><a name="en-us_topic_0257713329_p60961311"></a><a name="en-us_topic_0257713329_p60961311"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p38919158"><a name="en-us_topic_0257713329_p38919158"></a><a name="en-us_topic_0257713329_p38919158"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row14728105"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p52125860"><a name="en-us_topic_0257713329_p52125860"></a><a name="en-us_topic_0257713329_p52125860"></a>SQL and Feature-set Coverage</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p61445107"><a name="en-us_topic_0257713329_p61445107"></a><a name="en-us_topic_0257713329_p61445107"></a>100%</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p10997759"><a name="en-us_topic_0257713329_p10997759"></a><a name="en-us_topic_0257713329_p10997759"></a>98%</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row31870967"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p31411496"><a name="en-us_topic_0257713329_p31411496"></a><a name="en-us_topic_0257713329_p31411496"></a>Scale-out</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p61303242"><a name="en-us_topic_0257713329_p61303242"></a><a name="en-us_topic_0257713329_p61303242"></a>Yes (GaussDB only)</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p66615556"><a name="en-us_topic_0257713329_p66615556"></a><a name="en-us_topic_0257713329_p66615556"></a>Yes (GaussDB only)</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row62669098"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p43032188"><a name="en-us_topic_0257713329_p43032188"></a><a name="en-us_topic_0257713329_p43032188"></a>Scale-up (Many-cores, NUMA)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p63055227"><a name="en-us_topic_0257713329_p63055227"></a><a name="en-us_topic_0257713329_p63055227"></a>Low efficiency</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p7199758"><a name="en-us_topic_0257713329_p7199758"></a><a name="en-us_topic_0257713329_p7199758"></a>High Efficiency</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row64797827"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p14132624"><a name="en-us_topic_0257713329_p14132624"></a><a name="en-us_topic_0257713329_p14132624"></a>Throughput</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p3891877"><a name="en-us_topic_0257713329_p3891877"></a><a name="en-us_topic_0257713329_p3891877"></a>High</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p46806635"><a name="en-us_topic_0257713329_p46806635"></a><a name="en-us_topic_0257713329_p46806635"></a>Extremely High</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row18606536"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p30734425"><a name="en-us_topic_0257713329_p30734425"></a><a name="en-us_topic_0257713329_p30734425"></a>Latency</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p6460528"><a name="en-us_topic_0257713329_p6460528"></a><a name="en-us_topic_0257713329_p6460528"></a>Low</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p53540722"><a name="en-us_topic_0257713329_p53540722"></a><a name="en-us_topic_0257713329_p53540722"></a>Extremely Low</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row12104456"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p40936856"><a name="en-us_topic_0257713329_p40936856"></a><a name="en-us_topic_0257713329_p40936856"></a>Distributed (Cluster Mode)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p27551049"><a name="en-us_topic_0257713329_p27551049"></a><a name="en-us_topic_0257713329_p27551049"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p17042498"><a name="en-us_topic_0257713329_p17042498"></a><a name="en-us_topic_0257713329_p17042498"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row19164762"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p8841875"><a name="en-us_topic_0257713329_p8841875"></a><a name="en-us_topic_0257713329_p8841875"></a>Isolation Levels</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><a name="en-us_topic_0257713329_ul45103273"></a><a name="en-us_topic_0257713329_ul45103273"></a><ul id="en-us_topic_0257713329_ul45103273"><li>RC+SI</li><li>RR</li><li>Serializable</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><a name="en-us_topic_0257713329_ul20798169"></a><a name="en-us_topic_0257713329_ul20798169"></a><ul id="en-us_topic_0257713329_ul20798169"><li>RC</li><li>RR</li><li>RC+SI (in V2 release)</li></ul>
</td>
</tr>
<tr id="en-us_topic_0257713329_row24469282"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p35854848"><a name="en-us_topic_0257713329_p35854848"></a><a name="en-us_topic_0257713329_p35854848"></a>Concurrency Control</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p18561550"><a name="en-us_topic_0257713329_p18561550"></a><a name="en-us_topic_0257713329_p18561550"></a>Pessimistic</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p27090548"><a name="en-us_topic_0257713329_p27090548"></a><a name="en-us_topic_0257713329_p27090548"></a>Optimistic</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row42488344"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p19003830"><a name="en-us_topic_0257713329_p19003830"></a><a name="en-us_topic_0257713329_p19003830"></a>Data Capacity (Data + Index)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p62915265"><a name="en-us_topic_0257713329_p62915265"></a><a name="en-us_topic_0257713329_p62915265"></a>Unlimited</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p62971680"><a name="en-us_topic_0257713329_p62971680"></a><a name="en-us_topic_0257713329_p62971680"></a>Limited to DRAM</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row29874211"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p3891996"><a name="en-us_topic_0257713329_p3891996"></a><a name="en-us_topic_0257713329_p3891996"></a>Native Compilation</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p46816221"><a name="en-us_topic_0257713329_p46816221"></a><a name="en-us_topic_0257713329_p46816221"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p34017551"><a name="en-us_topic_0257713329_p34017551"></a><a name="en-us_topic_0257713329_p34017551"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row37722505"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p35624103"><a name="en-us_topic_0257713329_p35624103"></a><a name="en-us_topic_0257713329_p35624103"></a>Replication, Recovery</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p66980105"><a name="en-us_topic_0257713329_p66980105"></a><a name="en-us_topic_0257713329_p66980105"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p56679448"><a name="en-us_topic_0257713329_p56679448"></a><a name="en-us_topic_0257713329_p56679448"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713329_row40352987"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0257713329_p47366552"><a name="en-us_topic_0257713329_p47366552"></a><a name="en-us_topic_0257713329_p47366552"></a>Replication Options</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0257713329_p11485493"><a name="en-us_topic_0257713329_p11485493"></a><a name="en-us_topic_0257713329_p11485493"></a>2 (sync, async)</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0257713329_p57909722"><a name="en-us_topic_0257713329_p57909722"></a><a name="en-us_topic_0257713329_p57909722"></a>3 (sync, async, group-commit)</p>
</td>
</tr>
</tbody>
</table>

**Legend**

-   RR = Repeatable Reads
-   RC = Read Committed
-   SI = Snapshot Isolation

