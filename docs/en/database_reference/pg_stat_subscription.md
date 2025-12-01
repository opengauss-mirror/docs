# PG\_STAT\_SUBSCRIPTION<a name="EN-US_TOPIC_0000001197272474"></a>

**PG\_STAT\_SUBSCRIPTION** displays the detailed synchronization information about the subscription.

**Table 1** PG\_STAT\_SUBSCRIPTION columns

<a name="table10264162111589"></a>
<table><thead align="left"><tr id="row12647218581"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1726514213582"><a name="p1726514213582"></a><a name="p1726514213582"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p92657215582"><a name="p92657215582"></a><a name="p92657215582"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p12651221185819"><a name="p12651221185819"></a><a name="p12651221185819"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row72651521125817"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1826582115811"><a name="p1826582115811"></a><a name="p1826582115811"></a>subid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p82650214588"><a name="p82650214588"></a><a name="p82650214588"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p18265121155819"><a name="p18265121155819"></a><a name="p18265121155819"></a>OID of the subscription.</p>
</td>
</tr>
<tr id="row18265122112589"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10266192110581"><a name="p10266192110581"></a><a name="p10266192110581"></a>subname</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p112668213583"><a name="p112668213583"></a><a name="p112668213583"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p62668215588"><a name="p62668215588"></a><a name="p62668215588"></a>Name of the subscription.</p>
</td>
</tr>
<tr id="row226611211581"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p72665217583"><a name="p72665217583"></a><a name="p72665217583"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p926617214587"><a name="p926617214587"></a><a name="p926617214587"></a>thread_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p2266182125810"><a name="p2266182125810"></a><a name="p2266182125810"></a>ID of the background Apply thread.</p>
</td>
</tr>
<tr id="row12266721155810"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p926615219589"><a name="p926615219589"></a><a name="p926615219589"></a>received_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14266132112588"><a name="p14266132112588"></a><a name="p14266132112588"></a>LSN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p132679214589"><a name="p132679214589"></a><a name="p132679214589"></a>Latest LSN received from the publisher.</p>
</td>
</tr>
<tr id="row326792145812"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3267021105817"><a name="p3267021105817"></a><a name="p3267021105817"></a>last_msg_send_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p20267152155820"><a name="p20267152155820"></a><a name="p20267152155820"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p10267142116587"><a name="p10267142116587"></a><a name="p10267142116587"></a>Time when the last message is sent from the publisher.</p>
</td>
</tr>
<tr id="row1069513121608"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p26965129019"><a name="p26965129019"></a><a name="p26965129019"></a>last_msg_receipt_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p156966129020"><a name="p156966129020"></a><a name="p156966129020"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15696191218012"><a name="p15696191218012"></a><a name="p15696191218012"></a>Time when the last message is received by the subscriber.</p>
</td>
</tr>
<tr id="row101417157015"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p181413151013"><a name="p181413151013"></a><a name="p181413151013"></a>latest_end_lsn</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p191421015607"><a name="p191421015607"></a><a name="p191421015607"></a>LSN</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p191422153017"><a name="p191422153017"></a><a name="p191422153017"></a>LSN of the publisher when the last keepalive message is received.</p>
</td>
</tr>
<tr id="row26831317101"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p86836176019"><a name="p86836176019"></a><a name="p86836176019"></a>latest_end_time</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p10683151711018"><a name="p10683151711018"></a><a name="p10683151711018"></a>timestamp</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5683191712011"><a name="p5683191712011"></a><a name="p5683191712011"></a>Time when the last keepalive message is received.</p>
</td>
</tr>
</tbody>
</table>
