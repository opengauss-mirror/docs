# MOT Isolation Levels<a name="EN-US_TOPIC_0270171518"></a>

Even though MOT is fully ACID-compliant \(as described in the section\), not all isolation levels are supported in openGauss 1.0. The following table describes all isolation levels, as well as what is and what is not supported by MOT.

**Table  1**  Isolation Levels

<a name="table38517424"></a>
<table><thead align="left"><tr id="row29852746"><th class="cellrowborder" valign="top" width="24.240000000000002%" id="mcps1.2.3.1.1"><p id="p2153374"><a name="p2153374"></a><a name="p2153374"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="75.76%" id="mcps1.2.3.1.2"><p id="p40205569"><a name="p40205569"></a><a name="p40205569"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row35425694"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p50908955"><a name="p50908955"></a><a name="p50908955"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p29984672"><a name="p29984672"></a><a name="p29984672"></a><strong id="b1426598"><a name="b1426598"></a><a name="b1426598"></a>Not supported by MOT.</strong></p>
</td>
</tr>
<tr id="row12839382"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p33357028"><a name="p33357028"></a><a name="p33357028"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p17564787"><a name="p17564787"></a><a name="p17564787"></a><strong id="b23865363"><a name="b23865363"></a><a name="b23865363"></a>Supported by MOT.</strong></p>
<p id="p13461675"><a name="p13461675"></a><a name="p13461675"></a>The READ COMMITTED isolation level that guarantees that any data that is read was already committed when it was read. It simply restricts the reader from seeing any intermediate, uncommitted or dirty reads. Data is free to be changed after it has been read so that READ COMMITTED does not guarantee that if the transaction re-issues the read, that the same data will be found.</p>
</td>
</tr>
<tr id="row6786611"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p12844628"><a name="p12844628"></a><a name="p12844628"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p33781949"><a name="p33781949"></a><a name="p33781949"></a><strong id="b35602093"><a name="b35602093"></a><a name="b35602093"></a>Supported by MOT.</strong></p>
<p id="p51983383"><a name="p51983383"></a><a name="p51983383"></a>The SNAPSHOT isolation level makes the same guarantees as SERIALIZABLE, except that concurrent transactions can modify the data. Instead, it forces every reader to see its own version of the world (its own snapshot). This makes it very easy to program, plus it is very scalable, because it does not block concurrent updates. </p>
</td>
</tr>
<tr id="row49904522"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p15734461"><a name="p15734461"></a><a name="p15734461"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p66531800"><a name="p66531800"></a><a name="p66531800"></a><strong id="b61915292"><a name="b61915292"></a><a name="b61915292"></a>Supported by MOT.</strong></p>
<p id="p20366724"><a name="p20366724"></a><a name="p20366724"></a>REPEATABLE READ is a higher isolation level that (in addition to the guarantees of the READ COMMITTED isolation level) guarantees that any data that is read cannot change. If a transaction reads the same data again, it will find the same previously read data in place, unchanged and available to be read.</p>
<p id="p39091944"><a name="p39091944"></a><a name="p39091944"></a>Because of the optimistic model, concurrent transactions are not prevented from updating rows read by this transaction. Instead, at commit time this transaction validates that the REPEATABLE READ isolation level has not been violated. If it has, this transaction is rolled back and must be retried.</p>
</td>
</tr>
<tr id="row16283183"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p43869467"><a name="p43869467"></a><a name="p43869467"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p63765972"><a name="p63765972"></a><a name="p63765972"></a><strong id="b37022841"><a name="b37022841"></a><a name="b37022841"></a>Not supported by MOT</strong>.</p>
<p id="p64770113"><a name="p64770113"></a><a name="p64770113"></a>Serializable isolation makes an even stronger guarantee. In addition to everything that the REPEATABLE READ isolation level guarantees, it also guarantees that no new data can be seen by a subsequent read.</p>
<p id="p46060111"><a name="p46060111"></a><a name="p46060111"></a>It is named SERIALIZABLE because the isolation is so strict that it is almost a bit like having the transactions run in series rather than concurrently.</p>
</td>
</tr>
</tbody>
</table>


The following table shows the concurrency side effects enabled by the different isolation levels.

**Table  2**  Concurrency Side Effects Enabled by Isolation Levels

<a name="table47951145"></a>
<table><thead align="left"><tr id="row12791742"><th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.1"><p id="p29498151"><a name="p29498151"></a><a name="p29498151"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="18.37%" id="mcps1.2.5.1.2"><p id="p40539992"><a name="p40539992"></a><a name="p40539992"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.3"><p id="p62513914"><a name="p62513914"></a><a name="p62513914"></a>Non-repeatable Read</p>
</th>
<th class="cellrowborder" valign="top" width="16.33%" id="mcps1.2.5.1.4"><p id="p30462260"><a name="p30462260"></a><a name="p30462260"></a>Phantom</p>
</th>
</tr>
</thead>
<tbody><tr id="row51524015"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p12695699"><a name="p12695699"></a><a name="p12695699"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p21718662"><a name="p21718662"></a><a name="p21718662"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p14381235"><a name="p14381235"></a><a name="p14381235"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p24029376"><a name="p24029376"></a><a name="p24029376"></a>Yes</p>
</td>
</tr>
<tr id="row14937794"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p2001795"><a name="p2001795"></a><a name="p2001795"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p27927672"><a name="p27927672"></a><a name="p27927672"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p47548937"><a name="p47548937"></a><a name="p47548937"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p26258720"><a name="p26258720"></a><a name="p26258720"></a>Yes</p>
</td>
</tr>
<tr id="row35001888"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p16580664"><a name="p16580664"></a><a name="p16580664"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p856520"><a name="p856520"></a><a name="p856520"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p2269305"><a name="p2269305"></a><a name="p2269305"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p49596018"><a name="p49596018"></a><a name="p49596018"></a>Yes</p>
</td>
</tr>
<tr id="row43710986"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p50928963"><a name="p50928963"></a><a name="p50928963"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p31605337"><a name="p31605337"></a><a name="p31605337"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p9895475"><a name="p9895475"></a><a name="p9895475"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p63335993"><a name="p63335993"></a><a name="p63335993"></a>No</p>
</td>
</tr>
<tr id="row33153033"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p1041149"><a name="p1041149"></a><a name="p1041149"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p17224274"><a name="p17224274"></a><a name="p17224274"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p52988976"><a name="p52988976"></a><a name="p52988976"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p64248638"><a name="p64248638"></a><a name="p64248638"></a>No</p>
</td>
</tr>
</tbody>
</table>


