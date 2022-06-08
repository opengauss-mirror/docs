# MOT Isolation Levels<a name="EN-US_TOPIC_0289900771"></a>

Even though MOT is fully ACID-compliant \(as described in the section\), not all isolation levels are supported in openGauss 1.0. The following table describes all isolation levels, as well as what is and what is not supported by MOT.

**Table  1**  Isolation Levels

<a name="en-us_topic_0283137490_en-us_topic_0270171518_table38517424"></a>
<table><thead align="left"><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row29852746"><th class="cellrowborder" valign="top" width="24.240000000000002%" id="mcps1.2.3.1.1"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p2153374"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2153374"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2153374"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="75.76%" id="mcps1.2.3.1.2"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p40205569"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40205569"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40205569"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row35425694"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p50908955"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50908955"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50908955"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p29984672"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29984672"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29984672"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b1426598"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b1426598"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b1426598"></a>Not supported by MOT.</strong></p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row12839382"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p33357028"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33357028"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33357028"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p17564787"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17564787"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17564787"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b23865363"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b23865363"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b23865363"></a>Supported by MOT.</strong></p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p13461675"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p13461675"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p13461675"></a>The READ COMMITTED isolation level that guarantees that any data that is read was already <em id="en-us_topic_0283137490_en-us_topic_0270171518_i54046213"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i54046213"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i54046213"></a>committed</em> when it was read. It simply restricts the reader from seeing any intermediate, uncommitted or <em id="en-us_topic_0283137490_en-us_topic_0270171518_i16653875"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i16653875"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i16653875"></a>dirty </em>reads. Data is free to be changed after it has been read so that READ COMMITTED does not guarantee that if the transaction re-issues the read, that the s<em id="en-us_topic_0283137490_en-us_topic_0270171518_i15667148"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i15667148"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i15667148"></a>ame</em> data will be found.</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row6786611"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p12844628"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12844628"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12844628"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p33781949"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33781949"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p33781949"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b35602093"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b35602093"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b35602093"></a>Not supported by MOT.</strong></p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p51983383"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p51983383"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p51983383"></a>The SNAPSHOT isolation level makes the same guarantees as SERIALIZABLE, except that concurrent transactions can modify the data. Instead, it forces every reader to see its own version of the world (its own <em id="en-us_topic_0283137490_en-us_topic_0270171518_i65197270"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i65197270"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i65197270"></a>snapshot</em>). This makes it very easy to program, plus it is very scalable, because it does not block concurrent updates. However, in many implementations this isolation level requires higher server resources.</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row49904522"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p15734461"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p15734461"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p15734461"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p66531800"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p66531800"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p66531800"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b61915292"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b61915292"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b61915292"></a>Supported by MOT.</strong></p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p20366724"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p20366724"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p20366724"></a>REPEATABLE READ is a higher isolation level that (in addition to the guarantees of the READ COMMITTED isolation level) guarantees that any data that is read <em id="en-us_topic_0283137490_en-us_topic_0270171518_i49082792"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i49082792"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i49082792"></a>cannot change</em>. If a transaction reads the same data again, it will find the same previously read data in place, unchanged and available to be read.</p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p39091944"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p39091944"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p39091944"></a>Because of the optimistic model, concurrent transactions are not prevented from updating rows read by this transaction. Instead, at commit time this transaction validates that the REPEATABLE READ isolation level has not been violated. If it has, this transaction is rolled back and must be retried.</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row16283183"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p43869467"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p43869467"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p43869467"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p63765972"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63765972"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63765972"></a><strong id="en-us_topic_0283137490_en-us_topic_0270171518_b37022841"><a name="en-us_topic_0283137490_en-us_topic_0270171518_b37022841"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_b37022841"></a>Not supported by MOT</strong>.</p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p64770113"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64770113"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64770113"></a>Serializable isolation makes an even stronger guarantee. In addition to everything that the REPEATABLE READ isolation level guarantees, it also guarantees that no new data can be seen by a subsequent read.</p>
<p id="en-us_topic_0283137490_en-us_topic_0270171518_p46060111"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p46060111"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p46060111"></a>It is named <em id="en-us_topic_0283137490_en-us_topic_0270171518_i11887819"><a name="en-us_topic_0283137490_en-us_topic_0270171518_i11887819"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_i11887819"></a>SERIALIZABLE</em> because the isolation is so strict that it is almost a bit like having the transactions run in series rather than concurrently.</p>
</td>
</tr>
</tbody>
</table>

The following table shows the concurrency side effects enabled by the different isolation levels.

**Table  2**  Concurrency Side Effects Enabled by Isolation Levels

<a name="en-us_topic_0283137490_en-us_topic_0270171518_table47951145"></a>
<table><thead align="left"><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row12791742"><th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.1"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p29498151"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29498151"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p29498151"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="18.37%" id="mcps1.2.5.1.2"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p40539992"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40539992"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p40539992"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.3"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p62513914"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p62513914"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p62513914"></a>Non-repeatable Read</p>
</th>
<th class="cellrowborder" valign="top" width="16.33%" id="mcps1.2.5.1.4"><p id="en-us_topic_0283137490_en-us_topic_0270171518_p30462260"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p30462260"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p30462260"></a>Phantom</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283137490_en-us_topic_0270171518_row51524015"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p12695699"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12695699"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p12695699"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p21718662"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p21718662"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p21718662"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p14381235"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p14381235"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p14381235"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p24029376"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p24029376"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p24029376"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row14937794"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p2001795"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2001795"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2001795"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p27927672"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p27927672"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p27927672"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p47548937"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p47548937"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p47548937"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p26258720"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p26258720"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p26258720"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row35001888"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p16580664"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p16580664"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p16580664"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p856520"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p856520"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p856520"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p2269305"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2269305"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p2269305"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p49596018"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p49596018"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p49596018"></a>Yes</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row43710986"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p50928963"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50928963"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p50928963"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p31605337"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p31605337"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p31605337"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p9895475"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p9895475"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p9895475"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p63335993"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63335993"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p63335993"></a>No</p>
</td>
</tr>
<tr id="en-us_topic_0283137490_en-us_topic_0270171518_row33153033"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p1041149"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p1041149"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p1041149"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p17224274"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17224274"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p17224274"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p52988976"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p52988976"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p52988976"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="en-us_topic_0283137490_en-us_topic_0270171518_p64248638"><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64248638"></a><a name="en-us_topic_0283137490_en-us_topic_0270171518_p64248638"></a>No</p>
</td>
</tr>
</tbody>
</table>

In the near future release, openGauss MOT will also support both SNAPSHOT and SERIALIZABLE isolation levels.

