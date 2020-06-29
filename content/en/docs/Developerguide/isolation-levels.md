# Isolation Levels<a name="EN-US_TOPIC_0257867428"></a>

Even though MOT is fully ACID-compliant \(as described in the ++ section\), not all isolation levels are supported in this first release. PLEASE PROVIDE A NAME OR NUMBER OF THIS RELEASE GGG

The following table describes all isolation levels, as well as what is and what is not supported by MOT.

**Table  1**  Isolation Levels

<a name="en-us_topic_0257713295_table52951174"></a>
<table><thead align="left"><tr id="en-us_topic_0257713295_row36490171"><th class="cellrowborder" valign="top" width="24.240000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0257713295_p2913837"><a name="en-us_topic_0257713295_p2913837"></a><a name="en-us_topic_0257713295_p2913837"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="75.76%" id="mcps1.2.3.1.2"><p id="en-us_topic_0257713295_p34694260"><a name="en-us_topic_0257713295_p34694260"></a><a name="en-us_topic_0257713295_p34694260"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713295_row58771704"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713295_p62887584"><a name="en-us_topic_0257713295_p62887584"></a><a name="en-us_topic_0257713295_p62887584"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713295_p60729557"><a name="en-us_topic_0257713295_p60729557"></a><a name="en-us_topic_0257713295_p60729557"></a><strong id="en-us_topic_0257713295_b9695103"><a name="en-us_topic_0257713295_b9695103"></a><a name="en-us_topic_0257713295_b9695103"></a>Not supported by MOT.</strong></p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row20147070"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713295_p21299972"><a name="en-us_topic_0257713295_p21299972"></a><a name="en-us_topic_0257713295_p21299972"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713295_p47576142"><a name="en-us_topic_0257713295_p47576142"></a><a name="en-us_topic_0257713295_p47576142"></a><strong id="en-us_topic_0257713295_b25532096"><a name="en-us_topic_0257713295_b25532096"></a><a name="en-us_topic_0257713295_b25532096"></a>Supported by MOT.</strong></p>
<p id="en-us_topic_0257713295_p28462276"><a name="en-us_topic_0257713295_p28462276"></a><a name="en-us_topic_0257713295_p28462276"></a>Read committed is an isolation level that guarantees that any data read was <em id="en-us_topic_0257713295_i54833900"><a name="en-us_topic_0257713295_i54833900"></a><a name="en-us_topic_0257713295_i54833900"></a>committed</em> when it was read. It simply restricts the reader from seeing any intermediate, uncommitted, <em id="en-us_topic_0257713295_i23743056"><a name="en-us_topic_0257713295_i23743056"></a><a name="en-us_topic_0257713295_i23743056"></a>dirty </em>reads. It does not guarantee that if the transaction re-issues the read, that the s<em id="en-us_topic_0257713295_i12360912"><a name="en-us_topic_0257713295_i12360912"></a><a name="en-us_topic_0257713295_i12360912"></a>ame</em> data will be found. Data is free to change after it is read.</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row44139351"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713295_p18517699"><a name="en-us_topic_0257713295_p18517699"></a><a name="en-us_topic_0257713295_p18517699"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713295_p23538684"><a name="en-us_topic_0257713295_p23538684"></a><a name="en-us_topic_0257713295_p23538684"></a><strong id="en-us_topic_0257713295_b10521569"><a name="en-us_topic_0257713295_b10521569"></a><a name="en-us_topic_0257713295_b10521569"></a>Not supported by MOT tables.</strong></p>
<p id="en-us_topic_0257713295_p27585257"><a name="en-us_topic_0257713295_p27585257"></a><a name="en-us_topic_0257713295_p27585257"></a>The SNAPSHOT isolation level makes the same guarantees as SERIALIZABLE, except that concurrent transactions can modify the data. IS THIS CORRECT? GGG ///VVV: Correct. Instead, it forces every reader to see its own version of the world (its own <em id="en-us_topic_0257713295_i46940727"><a name="en-us_topic_0257713295_i46940727"></a><a name="en-us_topic_0257713295_i46940727"></a>snapshot</em>). This makes it very easy to program against, plus it is very scalable, as it does not block concurrent updates. However, in many implementations this requires higher server resources.</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row19813363"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713295_p61378561"><a name="en-us_topic_0257713295_p61378561"></a><a name="en-us_topic_0257713295_p61378561"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713295_p5607548"><a name="en-us_topic_0257713295_p5607548"></a><a name="en-us_topic_0257713295_p5607548"></a><strong id="en-us_topic_0257713295_b50467933"><a name="en-us_topic_0257713295_b50467933"></a><a name="en-us_topic_0257713295_b50467933"></a>Supported by MOT.</strong></p>
<p id="en-us_topic_0257713295_p51558219"><a name="en-us_topic_0257713295_p51558219"></a><a name="en-us_topic_0257713295_p51558219"></a>The REPEATABLE READ is a higher isolation level, that in addition to the guarantees of the read committed level, also guarantees that any data read <em id="en-us_topic_0257713295_i61370790"><a name="en-us_topic_0257713295_i61370790"></a><a name="en-us_topic_0257713295_i61370790"></a>cannot change</em>. If the transaction reads the same data again, it will find the previously read data in place, unchanged, and available to read.</p>
<p id="en-us_topic_0257713295_p15466199"><a name="en-us_topic_0257713295_p15466199"></a><a name="en-us_topic_0257713295_p15466199"></a>Because of the optimistic model, concurrent transactions are not prevented from updating rows read by this transaction. Instead, at commit time this transaction validates that REPEATABLE READ isolation has not been violated. If it has, this transaction is rolled back and must be retried.</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row4978063"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0257713295_p569920"><a name="en-us_topic_0257713295_p569920"></a><a name="en-us_topic_0257713295_p569920"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0257713295_p46163554"><a name="en-us_topic_0257713295_p46163554"></a><a name="en-us_topic_0257713295_p46163554"></a><strong id="en-us_topic_0257713295_b12818804"><a name="en-us_topic_0257713295_b12818804"></a><a name="en-us_topic_0257713295_b12818804"></a>Not supported by MOT</strong>.</p>
<p id="en-us_topic_0257713295_p48260380"><a name="en-us_topic_0257713295_p48260380"></a><a name="en-us_topic_0257713295_p48260380"></a>Serializable isolation makes an even stronger guarantee. In addition to everything-repeatable read guarantees, it also guarantees that no new data can be seen by a subsequent read.</p>
<p id="en-us_topic_0257713295_p31690242"><a name="en-us_topic_0257713295_p31690242"></a><a name="en-us_topic_0257713295_p31690242"></a>It is named <em id="en-us_topic_0257713295_i16776727"><a name="en-us_topic_0257713295_i16776727"></a><a name="en-us_topic_0257713295_i16776727"></a>SERIALIZABLE</em> because the isolation is so strict that it is almost a bit like having the transactions run in series rather than concurrently.</p>
</td>
</tr>
</tbody>
</table>

The following table shows the concurrency side effects enabled by the different isolation levels.

**Table  2**  Concurrency Side Effects Enabled by Isolation Levels

<a name="en-us_topic_0257713295_table57172870"></a>
<table><thead align="left"><tr id="en-us_topic_0257713295_row29789046"><th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.1"><p id="en-us_topic_0257713295_p64102506"><a name="en-us_topic_0257713295_p64102506"></a><a name="en-us_topic_0257713295_p64102506"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="18.37%" id="mcps1.2.5.1.2"><p id="en-us_topic_0257713295_p24920491"><a name="en-us_topic_0257713295_p24920491"></a><a name="en-us_topic_0257713295_p24920491"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.3"><p id="en-us_topic_0257713295_p5293856"><a name="en-us_topic_0257713295_p5293856"></a><a name="en-us_topic_0257713295_p5293856"></a>Non-repeatable Read</p>
</th>
<th class="cellrowborder" valign="top" width="16.33%" id="mcps1.2.5.1.4"><p id="en-us_topic_0257713295_p26149169"><a name="en-us_topic_0257713295_p26149169"></a><a name="en-us_topic_0257713295_p26149169"></a>Phantom</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0257713295_row37707976"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713295_p34447178"><a name="en-us_topic_0257713295_p34447178"></a><a name="en-us_topic_0257713295_p34447178"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713295_p38758049"><a name="en-us_topic_0257713295_p38758049"></a><a name="en-us_topic_0257713295_p38758049"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713295_p52394293"><a name="en-us_topic_0257713295_p52394293"></a><a name="en-us_topic_0257713295_p52394293"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713295_p16079341"><a name="en-us_topic_0257713295_p16079341"></a><a name="en-us_topic_0257713295_p16079341"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row10496346"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713295_p44897732"><a name="en-us_topic_0257713295_p44897732"></a><a name="en-us_topic_0257713295_p44897732"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713295_p12837703"><a name="en-us_topic_0257713295_p12837703"></a><a name="en-us_topic_0257713295_p12837703"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713295_p33221002"><a name="en-us_topic_0257713295_p33221002"></a><a name="en-us_topic_0257713295_p33221002"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713295_p6546613"><a name="en-us_topic_0257713295_p6546613"></a><a name="en-us_topic_0257713295_p6546613"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row58919521"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713295_p7751933"><a name="en-us_topic_0257713295_p7751933"></a><a name="en-us_topic_0257713295_p7751933"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713295_p23926804"><a name="en-us_topic_0257713295_p23926804"></a><a name="en-us_topic_0257713295_p23926804"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713295_p59022992"><a name="en-us_topic_0257713295_p59022992"></a><a name="en-us_topic_0257713295_p59022992"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713295_p16133081"><a name="en-us_topic_0257713295_p16133081"></a><a name="en-us_topic_0257713295_p16133081"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row10980006"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713295_p16965260"><a name="en-us_topic_0257713295_p16965260"></a><a name="en-us_topic_0257713295_p16965260"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713295_p32008819"><a name="en-us_topic_0257713295_p32008819"></a><a name="en-us_topic_0257713295_p32008819"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713295_p42577538"><a name="en-us_topic_0257713295_p42577538"></a><a name="en-us_topic_0257713295_p42577538"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713295_p26228578"><a name="en-us_topic_0257713295_p26228578"></a><a name="en-us_topic_0257713295_p26228578"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0257713295_row34730616"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0257713295_p61716500"><a name="en-us_topic_0257713295_p61716500"></a><a name="en-us_topic_0257713295_p61716500"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0257713295_p32980564"><a name="en-us_topic_0257713295_p32980564"></a><a name="en-us_topic_0257713295_p32980564"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0257713295_p54180000"><a name="en-us_topic_0257713295_p54180000"></a><a name="en-us_topic_0257713295_p54180000"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0257713295_p26503905"><a name="en-us_topic_0257713295_p26503905"></a><a name="en-us_topic_0257713295_p26503905"></a>No</p>
</td>
</tr>
</tbody>
</table>

In the near future, release openGauss MOT will also support both SNAPSHOT and SERIALIZABLE isolation levels.

