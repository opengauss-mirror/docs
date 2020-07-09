# Comparison – Disk vs. MOT<a name="EN-US_TOPIC_0260488179"></a>

The following table briefly compares the various features of a openGauss Disk-based storage engine and a MOT storage engine.

**Table  1**  Comparison – Disk vs. MOT

<a name="table20566739"></a>
<table><thead align="left"><tr id="row18174528"><th class="cellrowborder" valign="top" width="36.733673367336735%" id="mcps1.2.4.1.1"><p id="p62850692"><a name="p62850692"></a><a name="p62850692"></a>Feature</p>
</th>
<th class="cellrowborder" valign="top" width="29.592959295929592%" id="mcps1.2.4.1.2"><p id="p57741292"><a name="p57741292"></a><a name="p57741292"></a>openGauss Disk Store</p>
</th>
<th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.2.4.1.3"><p id="p46533089"><a name="p46533089"></a><a name="p46533089"></a>openGauss MOT Engine</p>
</th>
</tr>
</thead>
<tbody><tr id="row11083850"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p25376656"><a name="p25376656"></a><a name="p25376656"></a>Intel x86 + Kunpeng ARM</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p42243226"><a name="p42243226"></a><a name="p42243226"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p66258128"><a name="p66258128"></a><a name="p66258128"></a>Yes</p>
</td>
</tr>
<tr id="row59452248"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p50902780"><a name="p50902780"></a><a name="p50902780"></a>SQL and Feature-set Coverage</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p29484545"><a name="p29484545"></a><a name="p29484545"></a>100%</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p39437967"><a name="p39437967"></a><a name="p39437967"></a>98%</p>
</td>
</tr>
<tr id="row19397384"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p27684277"><a name="p27684277"></a><a name="p27684277"></a>Scale-up (Many-cores, NUMA)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p27833983"><a name="p27833983"></a><a name="p27833983"></a>Low efficiency</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p39960141"><a name="p39960141"></a><a name="p39960141"></a>High Efficiency</p>
</td>
</tr>
<tr id="row24096953"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p5696201"><a name="p5696201"></a><a name="p5696201"></a>Throughput</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p58739154"><a name="p58739154"></a><a name="p58739154"></a>High</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p60251003"><a name="p60251003"></a><a name="p60251003"></a>Extremely High</p>
</td>
</tr>
<tr id="row5388115"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p33784143"><a name="p33784143"></a><a name="p33784143"></a>Latency</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p52161088"><a name="p52161088"></a><a name="p52161088"></a>Low</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p64298638"><a name="p64298638"></a><a name="p64298638"></a>Extremely Low</p>
</td>
</tr>
<tr id="row41816835"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p31720487"><a name="p31720487"></a><a name="p31720487"></a>Distributed (Cluster Mode)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p19222618"><a name="p19222618"></a><a name="p19222618"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p13528263"><a name="p13528263"></a><a name="p13528263"></a>Yes</p>
</td>
</tr>
<tr id="row54645506"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p64209846"><a name="p64209846"></a><a name="p64209846"></a>Isolation Levels</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><a name="ul33615031"></a><a name="ul33615031"></a><ul id="ul33615031"><li>RC+SI</li><li>RR</li><li>Serializable</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><a name="ul55098796"></a><a name="ul55098796"></a><ul id="ul55098796"><li>RC</li><li>RR</li><li>RC+SI (in V2 release)</li></ul>
</td>
</tr>
<tr id="row54864908"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p14872540"><a name="p14872540"></a><a name="p14872540"></a>Concurrency Control</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p63825101"><a name="p63825101"></a><a name="p63825101"></a>Pessimistic</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p2450694"><a name="p2450694"></a><a name="p2450694"></a>Optimistic</p>
</td>
</tr>
<tr id="row22056254"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p41726135"><a name="p41726135"></a><a name="p41726135"></a>Data Capacity (Data + Index)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p24373773"><a name="p24373773"></a><a name="p24373773"></a>Unlimited</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p28118567"><a name="p28118567"></a><a name="p28118567"></a>Limited to DRAM</p>
</td>
</tr>
<tr id="row51740513"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p30232029"><a name="p30232029"></a><a name="p30232029"></a>Native Compilation</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p32875281"><a name="p32875281"></a><a name="p32875281"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p45652134"><a name="p45652134"></a><a name="p45652134"></a>Yes</p>
</td>
</tr>
<tr id="row8216028"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p61518565"><a name="p61518565"></a><a name="p61518565"></a>Replication, Recovery</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p16947874"><a name="p16947874"></a><a name="p16947874"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p30600572"><a name="p30600572"></a><a name="p30600572"></a>Yes</p>
</td>
</tr>
<tr id="row6969695"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p27674414"><a name="p27674414"></a><a name="p27674414"></a>Replication Options</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p27035086"><a name="p27035086"></a><a name="p27035086"></a>2 (sync, async)</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p42358375"><a name="p42358375"></a><a name="p42358375"></a>3 (sync, async, group-commit)</p>
</td>
</tr>
</tbody>
</table>

**Legend**

-   RR = Repeatable Reads
-   RC = Read Committed
-   SI = Snapshot Isolation

