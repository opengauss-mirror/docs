# Pessimistic Approach – Used in Disk-based Tables<a name="EN-US_TOPIC_0260488156"></a>

The following is an example of the Pessimistic approach \(which is not Mot\). Any Isolation Level may apply.

The following two sessions perform a transaction with an attempt to update a single table.

A WAIT LOCK action occurs and the client experience is that session \#2 is  _stuck_  until Session \#1 finished a COMMIT. Only afterwards, Session \#2 can progress.

However, in this approach, both sessions succeed and there is no abort \(unless SERIALIZABLE or REPEATABLE-READ isolation level is applied\) and then the entire transaction must be retried.

**Table  1**  Pessimistic Approach Code Example

<a name="table25392400"></a>
<table><thead align="left"><tr id="row65818149"><th class="cellrowborder" valign="top" width="5.1005100510051%" id="mcps1.2.4.1.1">&nbsp;&nbsp;</th>
<th class="cellrowborder" valign="top" width="32.653265326532654%" id="mcps1.2.4.1.2"><p id="p54447906"><a name="p54447906"></a><a name="p54447906"></a>Session 1</p>
</th>
<th class="cellrowborder" valign="top" width="62.24622462246224%" id="mcps1.2.4.1.3"><p id="p48204251"><a name="p48204251"></a><a name="p48204251"></a>Session 2</p>
</th>
</tr>
</thead>
<tbody><tr id="row12230257"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p51126731"><a name="p51126731"></a><a name="p51126731"></a>t0</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p47624529"><a name="p47624529"></a><a name="p47624529"></a>Begin</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p32381677"><a name="p32381677"></a><a name="p32381677"></a>Begin</p>
</td>
</tr>
<tr id="row22999637"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p51031338"><a name="p51031338"></a><a name="p51031338"></a>t1</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p39897736"><a name="p39897736"></a><a name="p39897736"></a>update test set y=200 where x=1;</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row27311558"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p64752608"><a name="p64752608"></a><a name="p64752608"></a>t2</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p10469886"><a name="p10469886"></a><a name="p10469886"></a>y=200</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p42754441"><a name="p42754441"></a><a name="p42754441"></a>Update test set y=300 where x=1; -- Wait on lock</p>
</td>
</tr>
<tr id="row49245650"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 "><p id="p29474731"><a name="p29474731"></a><a name="p29474731"></a>t4</p>
</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 "><p id="p38642980"><a name="p38642980"></a><a name="p38642980"></a>Commit</p>
</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 ">&nbsp;&nbsp;</td>
</tr>
<tr id="row52118416"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p22111569"><a name="p22111569"></a><a name="p22111569"></a>Unlock</p>
</td>
</tr>
<tr id="row64786400"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p13662013"><a name="p13662013"></a><a name="p13662013"></a>Commit</p>
<p id="p55849255"><a name="p55849255"></a><a name="p55849255"></a>(in READ-COMMITTED this will succeed, in SERIALIZABLE it will fail)</p>
</td>
</tr>
<tr id="row32881250"><td class="cellrowborder" valign="top" width="5.1005100510051%" headers="mcps1.2.4.1.1 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="32.653265326532654%" headers="mcps1.2.4.1.2 ">&nbsp;&nbsp;</td>
<td class="cellrowborder" valign="top" width="62.24622462246224%" headers="mcps1.2.4.1.3 "><p id="p34751253"><a name="p34751253"></a><a name="p34751253"></a>y = 300</p>
</td>
</tr>
</tbody>
</table>

