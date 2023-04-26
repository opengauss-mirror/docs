# Comparison – Disk vs. MOT<a name="EN-US_TOPIC_0270171542"></a>

The following table briefly compares the various features of the openGauss disk-based storage engine and the MOT storage engine.

**Table  1**  Comparison – Disk-based vs. MOT

<a name="table55405230"></a>
<table><thead align="left"><tr id="row63732268"><th class="cellrowborder" valign="top" width="36.733673367336735%" id="mcps1.2.4.1.1"><p id="p62040064"><a name="p62040064"></a><a name="p62040064"></a>Feature</p>
</th>
<th class="cellrowborder" valign="top" width="29.592959295929592%" id="mcps1.2.4.1.2"><p id="p59189281"><a name="p59189281"></a><a name="p59189281"></a>openGauss</p>
<p id="p62941481"><a name="p62941481"></a><a name="p62941481"></a>Disk Store</p>
</th>
<th class="cellrowborder" valign="top" width="33.673367336733676%" id="mcps1.2.4.1.3"><p id="p65095207"><a name="p65095207"></a><a name="p65095207"></a>openGauss</p>
<p id="p48985959"><a name="p48985959"></a><a name="p48985959"></a>MOT Engine</p>
</th>
</tr>
</thead>
<tbody><tr id="row8439774"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p12533056"><a name="p12533056"></a><a name="p12533056"></a>Intel x86 + Kunpeng ARM</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p8544631"><a name="p8544631"></a><a name="p8544631"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p21026539"><a name="p21026539"></a><a name="p21026539"></a>Yes</p>
</td>
</tr>
<tr id="row55021127"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p27526304"><a name="p27526304"></a><a name="p27526304"></a>SQL and Feature-set Coverage</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p15038186"><a name="p15038186"></a><a name="p15038186"></a>100%</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p10133581"><a name="p10133581"></a><a name="p10133581"></a>98%</p>
</td>
</tr>
<tr id="row24093367"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p5405681"><a name="p5405681"></a><a name="p5405681"></a>Scale-up (Many-cores, NUMA)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p35206999"><a name="p35206999"></a><a name="p35206999"></a>Low Efficiency</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p33194707"><a name="p33194707"></a><a name="p33194707"></a>High Efficiency</p>
</td>
</tr>
<tr id="row30316907"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p39750432"><a name="p39750432"></a><a name="p39750432"></a>Throughput</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p65668446"><a name="p65668446"></a><a name="p65668446"></a>High</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p17543884"><a name="p17543884"></a><a name="p17543884"></a>Extremely High</p>
</td>
</tr>
<tr id="row23677228"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p38807334"><a name="p38807334"></a><a name="p38807334"></a>Latency</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p56386340"><a name="p56386340"></a><a name="p56386340"></a>Low</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p3890831"><a name="p3890831"></a><a name="p3890831"></a>Extremely Low</p>
</td>
</tr>
<tr id="row35017480"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p17843649"><a name="p17843649"></a><a name="p17843649"></a>Distributed (Cluster Mode)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p36049434"><a name="p36049434"></a><a name="p36049434"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p34323003"><a name="p34323003"></a><a name="p34323003"></a>Yes</p>
</td>
</tr>
<tr id="row40471574"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p56972087"><a name="p56972087"></a><a name="p56972087"></a>Isolation Levels</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><a name="ul51336373"></a><a name="ul51336373"></a><ul id="ul51336373"><li>READ COMMITTED</li><li>REPEATABLE READ</li></ul>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><a name="ul54139417"></a><a name="ul54139417"></a><ul id="ul54139417"><li>READ COMMITTED</li><li>REPEATABLE READ</li></ul>
</td>
</tr>
<tr id="row1504051"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p54719288"><a name="p54719288"></a><a name="p54719288"></a>Concurrency Control</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p3077358"><a name="p3077358"></a><a name="p3077358"></a>Pessimistic + MVCC</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p47939452"><a name="p47939452"></a><a name="p47939452"></a>Optimistic + MVCC</p>
</td>
</tr>
<tr id="row28801892"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p51251947"><a name="p51251947"></a><a name="p51251947"></a>Data Capacity (Data + Index)</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p57767005"><a name="p57767005"></a><a name="p57767005"></a>Unlimited</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p48615844"><a name="p48615844"></a><a name="p48615844"></a>Limited to DRAM</p>
</td>
</tr>
<tr id="row34889419"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p7470700"><a name="p7470700"></a><a name="p7470700"></a>Native Compilation</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p1146965"><a name="p1146965"></a><a name="p1146965"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p25795375"><a name="p25795375"></a><a name="p25795375"></a>Yes<ul><li>Query (by PREPARE command)</li><li>Stored Procedures (by PREPARE command)</li></ul></p>
</td>
</tr>
<tr id="row30831790"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p14347060"><a name="p14347060"></a><a name="p14347060"></a>Replication, Recovery</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p21261182"><a name="p21261182"></a><a name="p21261182"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p44434164"><a name="p44434164"></a><a name="p44434164"></a>Yes</p>
</td>
</tr>
<tr id="row64363164"><td class="cellrowborder" valign="top" width="36.733673367336735%" headers="mcps1.2.4.1.1 "><p id="p46033792"><a name="p46033792"></a><a name="p46033792"></a>Replication Options</p>
</td>
<td class="cellrowborder" valign="top" width="29.592959295929592%" headers="mcps1.2.4.1.2 "><p id="p37749701"><a name="p37749701"></a><a name="p37749701"></a>2 (sync, async)</p>
</td>
<td class="cellrowborder" valign="top" width="33.673367336733676%" headers="mcps1.2.4.1.3 "><p id="p37826963"><a name="p37826963"></a><a name="p37826963"></a>3 (sync, async, group-commit)</p>
</td>
</tr>
</tbody>
</table>


# Appendices



## Glossary

**Table 2**  Glossary

<table><thead align="left"><tr id="row35886203"><th class="cellrowborder" valign="top" width="23.23%" id="mcps1.1.3.1.1"><p id="p21101319"><a name="p21101319"></a><a name="p21101319"></a>Acronym</p>
</th>
<th class="cellrowborder" valign="top" width="76.77000000000001%" id="mcps1.1.3.1.2"><p id="p31485239"><a name="p31485239"></a><a name="p31485239"></a>Definition/Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row167539"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p13570724"><a name="p13570724"></a><a name="p13570724"></a>2PL</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p25486898"><a name="p25486898"></a><a name="p25486898"></a>2-Phase Locking</p>
</td>
</tr>
<tr id="row28055495"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p57902635"><a name="p57902635"></a><a name="p57902635"></a>ACID</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p59601822"><a name="p59601822"></a><a name="p59601822"></a>Atomicity, Consistency, Isolation, Durability</p>
</td>
</tr>
<tr id="row66654358"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p30293926"><a name="p30293926"></a><a name="p30293926"></a>AP</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p37888922"><a name="p37888922"></a><a name="p37888922"></a>Analytical Processing</p>
</td>
</tr>
<tr id="row5455981"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p39281331"><a name="p39281331"></a><a name="p39281331"></a>ARM</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p27671249"><a name="p27671249"></a><a name="p27671249"></a>Advanced RISC Machine, a hardware architecture alternative to x86</p>
</td>
</tr>
<tr id="row47714657"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p39682040"><a name="p39682040"></a><a name="p39682040"></a>CC</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p60128634"><a name="p60128634"></a><a name="p60128634"></a>Concurrency Control</p>
</td>
</tr>
<tr id="row4286800"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p11686496"><a name="p11686496"></a><a name="p11686496"></a>CPU</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p7082129"><a name="p7082129"></a><a name="p7082129"></a>Central Processing Unit</p>
</td>
</tr>
<tr id="row63739165"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p62598754"><a name="p62598754"></a><a name="p62598754"></a>DB</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p37334299"><a name="p37334299"></a><a name="p37334299"></a>Database</p>
</td>
</tr>
<tr id="row464375"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p37614394"><a name="p37614394"></a><a name="p37614394"></a>DBA</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p26867045"><a name="p26867045"></a><a name="p26867045"></a>Database Administrator</p>
</td>
</tr>
<tr id="row40476817"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p57396781"><a name="p57396781"></a><a name="p57396781"></a>DBMS</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p18627652"><a name="p18627652"></a><a name="p18627652"></a>Database Management System</p>
</td>
</tr>
<tr id="row33431146"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p23568328"><a name="p23568328"></a><a name="p23568328"></a>DDL</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p29986390"><a name="p29986390"></a><a name="p29986390"></a>Data Definition Language. Database Schema management language</p>
</td>
</tr>
<tr id="row1442054"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p49697568"><a name="p49697568"></a><a name="p49697568"></a>DML</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p66080062"><a name="p66080062"></a><a name="p66080062"></a>Data Modification Language</p>
</td>
</tr>
<tr id="row57849650"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p55310098"><a name="p55310098"></a><a name="p55310098"></a>ETL</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p50932971"><a name="p50932971"></a><a name="p50932971"></a>Extract, Transform, Load or Encounter Time Locking</p>
</td>
</tr>
<tr id="row55743556"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p18934148"><a name="p18934148"></a><a name="p18934148"></a>FDW</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p57270992"><a name="p57270992"></a><a name="p57270992"></a>Foreign Data Wrapper</p>
</td>
</tr>
<tr id="row45676887"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p8840353"><a name="p8840353"></a><a name="p8840353"></a>GC</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p44980012"><a name="p44980012"></a><a name="p44980012"></a>Garbage Collector</p>
</td>
</tr>
<tr id="row2166929"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p41303584"><a name="p41303584"></a><a name="p41303584"></a>HA</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p57256003"><a name="p57256003"></a><a name="p57256003"></a>High Availability</p>
</td>
</tr>
<tr id="row45541984"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p65022077"><a name="p65022077"></a><a name="p65022077"></a>HTAP</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p32296866"><a name="p32296866"></a><a name="p32296866"></a>Hybrid Transactional-Analytical Processing</p>
</td>
</tr>
<tr id="row22236344"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p56313405"><a name="p56313405"></a><a name="p56313405"></a>IoT</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p65091934"><a name="p65091934"></a><a name="p65091934"></a>Internet of Things</p>
</td>
</tr>
<tr id="row48956501"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p6053677"><a name="p6053677"></a><a name="p6053677"></a>IM</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p20585813"><a name="p20585813"></a><a name="p20585813"></a>In-Memory</p>
</td>
</tr>
<tr id="row51054590"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p41781154"><a name="p41781154"></a><a name="p41781154"></a>IMDB</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p28830314"><a name="p28830314"></a><a name="p28830314"></a>In-Memory Database</p>
</td>
</tr>
<tr id="row58146239"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p12224953"><a name="p12224953"></a><a name="p12224953"></a>IR</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p50697164"><a name="p50697164"></a><a name="p50697164"></a>Intermediate Representation of a source code, used in compilation and optimization</p>
</td>
</tr>
<tr id="row53621294"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p48357528"><a name="p48357528"></a><a name="p48357528"></a>JIT</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p24645678"><a name="p24645678"></a><a name="p24645678"></a>Just In Time</p>
</td>
</tr>
<tr id="row20484518"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p48633258"><a name="p48633258"></a><a name="p48633258"></a>JSON</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p46979855"><a name="p46979855"></a><a name="p46979855"></a>JavaScript Object Notation</p>
</td>
</tr>
<tr id="row20165517"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p22794214"><a name="p22794214"></a><a name="p22794214"></a>KV</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p34392051"><a name="p34392051"></a><a name="p34392051"></a>Key Value</p>
</td>
</tr>
<tr id="row41093009"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p40199432"><a name="p40199432"></a><a name="p40199432"></a>LLVM</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p34928551"><a name="p34928551"></a><a name="p34928551"></a>Low-Level Virtual Machine, refers to a compilation code or queries to IR</p>
</td>
</tr>
<tr id="row45921510"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p28654805"><a name="p28654805"></a><a name="p28654805"></a>M2M</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p39337857"><a name="p39337857"></a><a name="p39337857"></a>Machine-to-Machine</p>
</td>
</tr>
<tr id="row18496393"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p21812826"><a name="p21812826"></a><a name="p21812826"></a>ML</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p22008476"><a name="p22008476"></a><a name="p22008476"></a>Machine Learning</p>
</td>
</tr>
<tr id="row63858558"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p5160748"><a name="p5160748"></a><a name="p5160748"></a>MM</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p15367454"><a name="p15367454"></a><a name="p15367454"></a>Main Memory</p>
</td>
</tr>
<tr id="row4089365"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p62803112"><a name="p62803112"></a><a name="p62803112"></a>MO</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p53887349"><a name="p53887349"></a><a name="p53887349"></a>Memory Optimized</p>
</td>
</tr>
<tr id="row15224096"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p25192244"><a name="p25192244"></a><a name="p25192244"></a>MOT</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p27305877"><a name="p27305877"></a><a name="p27305877"></a>Memory Optimized Tables storage engine (SE), pronounced as /em/ /oh/ /tee/</p>
</td>
</tr>
<tr id="row44426301"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p41760635"><a name="p41760635"></a><a name="p41760635"></a>MVCC</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p27168314"><a name="p27168314"></a><a name="p27168314"></a>Multi-Version Concurrency Control</p>
</td>
</tr>
<tr id="row43188242"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p8586676"><a name="p8586676"></a><a name="p8586676"></a>NUMA</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p24432171"><a name="p24432171"></a><a name="p24432171"></a>Non-Uniform Memory Access</p>
</td>
</tr>
<tr id="row18562954"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p27204315"><a name="p27204315"></a><a name="p27204315"></a>OCC</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p56065908"><a name="p56065908"></a><a name="p56065908"></a>Optimistic Concurrency Control</p>
</td>
</tr>
<tr id="row34831132"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p2749429"><a name="p2749429"></a><a name="p2749429"></a>OLTP</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p21377195"><a name="p21377195"></a><a name="p21377195"></a>Online Transaction Processing</p>
</td>
</tr>
<tr id="row58177028"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p14718799"><a name="p14718799"></a><a name="p14718799"></a>PG</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p51372075"><a name="p51372075"></a><a name="p51372075"></a>PostgreSQL</p>
</td>
</tr>
<tr id="row59695495"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p3496894"><a name="p3496894"></a><a name="p3496894"></a>RAW</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p14813018"><a name="p14813018"></a><a name="p14813018"></a>Reads-After-Writes</p>
</td>
</tr>
<tr id="row66208306"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p61272544"><a name="p61272544"></a><a name="p61272544"></a>RC</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p64128998"><a name="p64128998"></a><a name="p64128998"></a>Return Code</p>
</td>
</tr>
<tr id="row40290074"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p42270552"><a name="p42270552"></a><a name="p42270552"></a>RTO</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p1362691"><a name="p1362691"></a><a name="p1362691"></a>Recovery Time Objective</p>
</td>
</tr>
<tr id="row12264220"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p53877781"><a name="p53877781"></a><a name="p53877781"></a>SE</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p2024110"><a name="p2024110"></a><a name="p2024110"></a>Storage Engine</p>
</td>
</tr>
<tr id="row18216990"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p66290058"><a name="p66290058"></a><a name="p66290058"></a>SQL</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p785643"><a name="p785643"></a><a name="p785643"></a>Structured Query Language</p>
</td>
</tr>
<tr id="row7070795"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p35863542"><a name="p35863542"></a><a name="p35863542"></a>TCO</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p19265802"><a name="p19265802"></a><a name="p19265802"></a>Total Cost of Ownership</p>
</td>
</tr>
<tr id="row39174490"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p19017117"><a name="p19017117"></a><a name="p19017117"></a>TP</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p63991517"><a name="p63991517"></a><a name="p63991517"></a>Transactional Processing</p>
</td>
</tr>
<tr id="row39052743"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p9155596"><a name="p9155596"></a><a name="p9155596"></a>TPC-C</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p3405826"><a name="p3405826"></a><a name="p3405826"></a>An On-Line Transaction Processing Benchmark</p>
</td>
</tr>
<tr id="row30652439"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p66928472"><a name="p66928472"></a><a name="p66928472"></a>Tpm-C</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p52497183"><a name="p52497183"></a><a name="p52497183"></a>Transactions-per-minute-C. A performance metric for TPC-C benchmark that counts new-order transactions.</p>
</td>
</tr>
<tr id="row2712599"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p18393951"><a name="p18393951"></a><a name="p18393951"></a>TVM</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p13515039"><a name="p13515039"></a><a name="p13515039"></a>Tiny Virtual Machine</p>
</td>
</tr>
<tr id="row54526492"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p54569732"><a name="p54569732"></a><a name="p54569732"></a>TSO</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p58072185"><a name="p58072185"></a><a name="p58072185"></a>Time Sharing Option</p>
</td>
</tr>
<tr id="row52887619"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p56038774"><a name="p56038774"></a><a name="p56038774"></a>UDT</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p42846825"><a name="p42846825"></a><a name="p42846825"></a>User-Defined Type</p>
</td>
</tr>
<tr id="row50077106"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p29713768"><a name="p29713768"></a><a name="p29713768"></a>WAL</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p58005044"><a name="p58005044"></a><a name="p58005044"></a>Write Ahead Log</p>
</td>
</tr>
<tr id="row52283348"><td class="cellrowborder" valign="top" width="23.23%" headers="mcps1.1.3.1.1 "><p id="p7092825"><a name="p7092825"></a><a name="p7092825"></a>XLOG</p>
</td>
<td class="cellrowborder" valign="top" width="76.77000000000001%" headers="mcps1.1.3.1.2 "><p id="p37647975"><a name="p37647975"></a><a name="p37647975"></a>A PostgreSQL implementation of transaction logging (WAL - described above)</p>
</td>
</tr>
</tbody>
</table>

