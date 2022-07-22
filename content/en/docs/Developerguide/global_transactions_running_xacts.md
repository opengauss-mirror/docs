# GLOBAL\_TRANSACTIONS\_RUNNING\_XACTS<a name="EN-US_TOPIC_0000001199229431"></a>

**GLOBAL\_TRANSACTIONS\_RUNNING\_XACTS**  displays information about the running transactions on each node in the cluster.

**Table  1**  GLOBAL\_TRANSACTIONS\_RUNNING\_XACTS columns

<a name="table1459315314513"></a>
<table><thead align="left"><tr id="row186521853195112"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="p665211534513"><a name="p665211534513"></a><a name="p665211534513"></a><strong id="b7459622494214"><a name="b7459622494214"></a><a name="b7459622494214"></a>Name</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="p1165214538517"><a name="p1165214538517"></a><a name="p1165214538517"></a><strong id="b5724371614214"><a name="b5724371614214"></a><a name="b5724371614214"></a>Type</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="p146521353175120"><a name="p146521353175120"></a><a name="p146521353175120"></a><strong id="b9906231754214"><a name="b9906231754214"></a><a name="b9906231754214"></a>Description</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row166521453165118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p4653953175117"><a name="p4653953175117"></a><a name="p4653953175117"></a>handle</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1365319531511"><a name="p1365319531511"></a><a name="p1365319531511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p1665305305113"><a name="p1665305305113"></a><a name="p1665305305113"></a>Handle in the transaction manager corresponding to the transaction. The value is fixed to –1.</p>
</td>
</tr>
<tr id="row11653165310515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p9653153185116"><a name="p9653153185116"></a><a name="p9653153185116"></a>gxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1665345395119"><a name="p1665345395119"></a><a name="p1665345395119"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p106531353165115"><a name="p106531353165115"></a><a name="p106531353165115"></a>Transaction ID</p>
</td>
</tr>
<tr id="row6653253195118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p26533539517"><a name="p26533539517"></a><a name="p26533539517"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p8653185375119"><a name="p8653185375119"></a><a name="p8653185375119"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p116531653155116"><a name="p116531653155116"></a><a name="p116531653155116"></a>Transaction status (<strong id="b5038627164214"><a name="b5038627164214"></a><a name="b5038627164214"></a>3</strong>: prepared or <strong id="b18632901434214"><a name="b18632901434214"></a><a name="b18632901434214"></a>0</strong>: starting)</p>
</td>
</tr>
<tr id="row865385312515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1565315319519"><a name="p1565315319519"></a><a name="p1565315319519"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p106532537515"><a name="p106532537515"></a><a name="p106532537515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p965395315518"><a name="p965395315518"></a><a name="p965395315518"></a>Node name</p>
</td>
</tr>
<tr id="row14653145315110"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p36531953105117"><a name="p36531953105117"></a><a name="p36531953105117"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p865320538519"><a name="p865320538519"></a><a name="p865320538519"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p0653453165113"><a name="p0653453165113"></a><a name="p0653453165113"></a>Minimum transaction ID on the node</p>
</td>
</tr>
<tr id="row186536536511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1165314537514"><a name="p1165314537514"></a><a name="p1165314537514"></a>vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p665318534516"><a name="p665318534516"></a><a name="p665318534516"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p15653353185114"><a name="p15653353185114"></a><a name="p15653353185114"></a>Whether the current transaction is lazy vacuum</p>
</td>
</tr>
<tr id="row965375314515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p16653135317514"><a name="p16653135317514"></a><a name="p16653135317514"></a>timeline</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p206533537517"><a name="p206533537517"></a><a name="p206533537517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p206533539516"><a name="p206533539516"></a><a name="p206533539516"></a>Number of database restarts</p>
</td>
</tr>
<tr id="row465325314514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p12653853135112"><a name="p12653853135112"></a><a name="p12653853135112"></a>prepare_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p166531253195114"><a name="p166531253195114"></a><a name="p166531253195114"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p165419537515"><a name="p165419537515"></a><a name="p165419537515"></a>Transaction ID in the <strong id="b11151823724214"><a name="b11151823724214"></a><a name="b11151823724214"></a>prepared</strong> state. If the status is not <strong id="b8741736824214"><a name="b8741736824214"></a><a name="b8741736824214"></a>prepared</strong>, the value is <strong id="b6299335894214"><a name="b6299335894214"></a><a name="b6299335894214"></a>0</strong>.</p>
</td>
</tr>
<tr id="row12654115345115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p15654185375112"><a name="p15654185375112"></a><a name="p15654185375112"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p7654145365118"><a name="p7654145365118"></a><a name="p7654145365118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p4654185312518"><a name="p4654185312518"></a><a name="p4654185312518"></a>Thread ID corresponding to the transaction</p>
</td>
</tr>
<tr id="row0654553145111"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p11654135313517"><a name="p11654135313517"></a><a name="p11654135313517"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p17654053125119"><a name="p17654053125119"></a><a name="p17654053125119"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p965419538512"><a name="p965419538512"></a><a name="p965419538512"></a><span id="text1366214252513"><a name="text1366214252513"></a><a name="text1366214252513"></a>Transaction ID sent by other nodes to the current node. The value is fixed to 0.</p>
</td>
</tr>
</tbody>
</table>
