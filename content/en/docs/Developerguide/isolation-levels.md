# Isolation Levels<a name="EN-US_TOPIC_0260488149"></a>

Even though MOT is fully ACID-compliant \(as described in the section\), not all isolation levels are supported in this first release.

The following table describes all isolation levels, as well as what is and what is not supported by MOT.

**Table  1**  Isolation Levels

<a name="table12837530"></a>
<table><thead align="left"><tr id="row48599122"><th class="cellrowborder" valign="top" width="24.240000000000002%" id="mcps1.2.3.1.1"><p id="p44214777"><a name="p44214777"></a><a name="p44214777"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="75.76%" id="mcps1.2.3.1.2"><p id="p24627205"><a name="p24627205"></a><a name="p24627205"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row48646622"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p48062315"><a name="p48062315"></a><a name="p48062315"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p733461"><a name="p733461"></a><a name="p733461"></a><strong id="b6601152"><a name="b6601152"></a><a name="b6601152"></a>Not supported by MOT.</strong></p>
</td>
</tr>
<tr id="row59410371"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p47510750"><a name="p47510750"></a><a name="p47510750"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p23165517"><a name="p23165517"></a><a name="p23165517"></a><strong id="b7163064"><a name="b7163064"></a><a name="b7163064"></a>Supported by MOT.</strong></p>
<p id="p64467577"><a name="p64467577"></a><a name="p64467577"></a><strong id="b43337281"><a name="b43337281"></a><a name="b43337281"></a>The </strong>READ COMMITTED isolation level that guarantees that any data that is read was already <em id="i54491209"><a name="i54491209"></a><a name="i54491209"></a>committed</em> when it was read. It simply restricts the reader from seeing any intermediate, uncommitted or <em id="i20658834"><a name="i20658834"></a><a name="i20658834"></a>dirty </em>reads. Data is free to be changed after it has been read so that READ COMMITTED does not guarantee that if the transaction re-issues the read, that the s<em id="i51711781"><a name="i51711781"></a><a name="i51711781"></a>ame</em> data will be found.</p>
</td>
</tr>
<tr id="row62752852"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p49816238"><a name="p49816238"></a><a name="p49816238"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p8583497"><a name="p8583497"></a><a name="p8583497"></a><strong id="b10142614"><a name="b10142614"></a><a name="b10142614"></a>Not supported by MOT.</strong></p>
<p id="p24174669"><a name="p24174669"></a><a name="p24174669"></a>The SNAPSHOT isolation level makes the same guarantees as SERIALIZABLE, except that concurrent transactions can modify the data. Instead, it forces every reader to see its own version of the world (its own <em id="i16245429"><a name="i16245429"></a><a name="i16245429"></a>snapshot</em>). This makes it very easy to program, plus it is very scalable, because it does not block concurrent updates. However, in many implementations this isolation level requires higher server resources.</p>
</td>
</tr>
<tr id="row11991136"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p31757997"><a name="p31757997"></a><a name="p31757997"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p22260954"><a name="p22260954"></a><a name="p22260954"></a><strong id="b66130860"><a name="b66130860"></a><a name="b66130860"></a>Supported by MOT.</strong></p>
<p id="p58306831"><a name="p58306831"></a><a name="p58306831"></a>REPEATABLE READ is a higher isolation level that (in addition to the guarantees of the READ COMMITTED isolation level) guarantees that any data that is read <em id="i54999437"><a name="i54999437"></a><a name="i54999437"></a>cannot change</em>. If a transaction reads the same data again, it will find the same previously read data in place, unchanged and available to be read.</p>
<p id="p25232885"><a name="p25232885"></a><a name="p25232885"></a>Because of the optimistic model, concurrent transactions are not prevented from updating rows read by this transaction. Instead, at commit time this transaction validates that the REPEATABLE READ isolation level has not been violated. If it has, this transaction is rolled back and must be retried.</p>
</td>
</tr>
<tr id="row25769378"><td class="cellrowborder" valign="top" width="24.240000000000002%" headers="mcps1.2.3.1.1 "><p id="p6944851"><a name="p6944851"></a><a name="p6944851"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="75.76%" headers="mcps1.2.3.1.2 "><p id="p25662090"><a name="p25662090"></a><a name="p25662090"></a><strong id="b29632218"><a name="b29632218"></a><a name="b29632218"></a>Not supported by MOT</strong>.</p>
<p id="p65363372"><a name="p65363372"></a><a name="p65363372"></a>Serializable isolation makes an even stronger guarantee. In addition to everything that the REPEATABLE READ isolation level guarantees, it also guarantees that no new data can be seen by a subsequent read.</p>
<p id="p51399442"><a name="p51399442"></a><a name="p51399442"></a>It is named <em id="i59941795"><a name="i59941795"></a><a name="i59941795"></a>SERIALIZABLE</em> because the isolation is so strict that it is almost a bit like having the transactions run in series rather than concurrently.</p>
</td>
</tr>
</tbody>
</table>

The following table shows the concurrency side effects enabled by the different isolation levels.

**Table  2**  Concurrency Side Effects Enabled by Isolation Levels

<a name="table5413303"></a>
<table><thead align="left"><tr id="row14016950"><th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.1"><p id="p61631193"><a name="p61631193"></a><a name="p61631193"></a>Isolation Level</p>
</th>
<th class="cellrowborder" valign="top" width="18.37%" id="mcps1.2.5.1.2"><p id="p26070716"><a name="p26070716"></a><a name="p26070716"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="32.65%" id="mcps1.2.5.1.3"><p id="p31353223"><a name="p31353223"></a><a name="p31353223"></a>Non-repeatable Read</p>
</th>
<th class="cellrowborder" valign="top" width="16.33%" id="mcps1.2.5.1.4"><p id="p56583139"><a name="p56583139"></a><a name="p56583139"></a>Phantom</p>
</th>
</tr>
</thead>
<tbody><tr id="row19831543"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p62851180"><a name="p62851180"></a><a name="p62851180"></a>READ UNCOMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p57780842"><a name="p57780842"></a><a name="p57780842"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p49736600"><a name="p49736600"></a><a name="p49736600"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p2132766"><a name="p2132766"></a><a name="p2132766"></a>Yes</p>
</td>
</tr>
<tr id="row19194898"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p11282896"><a name="p11282896"></a><a name="p11282896"></a>READ COMMITTED</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p41499387"><a name="p41499387"></a><a name="p41499387"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p6007162"><a name="p6007162"></a><a name="p6007162"></a>Yes</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p16818102"><a name="p16818102"></a><a name="p16818102"></a>Yes</p>
</td>
</tr>
<tr id="row17145190"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p46583111"><a name="p46583111"></a><a name="p46583111"></a>REPEATABLE READ</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p15135641"><a name="p15135641"></a><a name="p15135641"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p18027395"><a name="p18027395"></a><a name="p18027395"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p50932910"><a name="p50932910"></a><a name="p50932910"></a>Yes</p>
</td>
</tr>
<tr id="row55743011"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p18890066"><a name="p18890066"></a><a name="p18890066"></a>SNAPSHOT</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p53700373"><a name="p53700373"></a><a name="p53700373"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p54762965"><a name="p54762965"></a><a name="p54762965"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p6615161"><a name="p6615161"></a><a name="p6615161"></a>No</p>
</td>
</tr>
<tr id="row59536452"><td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.1 "><p id="p57723322"><a name="p57723322"></a><a name="p57723322"></a>SERIALIZABLE</p>
</td>
<td class="cellrowborder" valign="top" width="18.37%" headers="mcps1.2.5.1.2 "><p id="p45077512"><a name="p45077512"></a><a name="p45077512"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="32.65%" headers="mcps1.2.5.1.3 "><p id="p27399895"><a name="p27399895"></a><a name="p27399895"></a>No</p>
</td>
<td class="cellrowborder" valign="top" width="16.33%" headers="mcps1.2.5.1.4 "><p id="p4799055"><a name="p4799055"></a><a name="p4799055"></a>No</p>
</td>
</tr>
</tbody>
</table>

In the near future release, openGauss MOT will also support both SNAPSHOT and SERIALIZABLE isolation levels.

