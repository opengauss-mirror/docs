# GLOBAL\_TRANSACTIONS\_RUNNING\_XACTS<a name="ZH-CN_TOPIC_0000001199229431"></a>

显示集群中各个节点运行事务的信息。

**表 1**  GLOBAL\_TRANSACTIONS\_RUNNING\_XACTS字段

<a name="table1459315314513"></a>
<table><thead align="left"><tr id="row186521853195112"><th class="cellrowborder" valign="top" width="17.27%" id="mcps1.2.4.1.1"><p id="p665211534513"><a name="p665211534513"></a><a name="p665211534513"></a><strong id="b10652105365120"><a name="b10652105365120"></a><a name="b10652105365120"></a>名称</strong></p>
</th>
<th class="cellrowborder" valign="top" width="16.8%" id="mcps1.2.4.1.2"><p id="p1165214538517"><a name="p1165214538517"></a><a name="p1165214538517"></a><strong id="b16521053135112"><a name="b16521053135112"></a><a name="b16521053135112"></a>类型</strong></p>
</th>
<th class="cellrowborder" valign="top" width="65.93%" id="mcps1.2.4.1.3"><p id="p146521353175120"><a name="p146521353175120"></a><a name="p146521353175120"></a><strong id="b136522539512"><a name="b136522539512"></a><a name="b136522539512"></a>描述</strong></p>
</th>
</tr>
</thead>
<tbody><tr id="row166521453165118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p4653953175117"><a name="p4653953175117"></a><a name="p4653953175117"></a>handle</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1365319531511"><a name="p1365319531511"></a><a name="p1365319531511"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p1665305305113"><a name="p1665305305113"></a><a name="p1665305305113"></a>事务对应的事务管理器中的槽位句柄，该值恒为-1。</p>
</td>
</tr>
<tr id="row11653165310515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p9653153185116"><a name="p9653153185116"></a><a name="p9653153185116"></a>gxid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p1665345395119"><a name="p1665345395119"></a><a name="p1665345395119"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p106531353165115"><a name="p106531353165115"></a><a name="p106531353165115"></a>事务id号。</p>
</td>
</tr>
<tr id="row6653253195118"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p26533539517"><a name="p26533539517"></a><a name="p26533539517"></a>state</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p8653185375119"><a name="p8653185375119"></a><a name="p8653185375119"></a>tinyint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p116531653155116"><a name="p116531653155116"></a><a name="p116531653155116"></a>事务状态（3：prepared或者0：starting）。</p>
</td>
</tr>
<tr id="row865385312515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1565315319519"><a name="p1565315319519"></a><a name="p1565315319519"></a>node</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p106532537515"><a name="p106532537515"></a><a name="p106532537515"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p965395315518"><a name="p965395315518"></a><a name="p965395315518"></a>节点名称。</p>
</td>
</tr>
<tr id="row14653145315110"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p36531953105117"><a name="p36531953105117"></a><a name="p36531953105117"></a>xmin</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p865320538519"><a name="p865320538519"></a><a name="p865320538519"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p0653453165113"><a name="p0653453165113"></a><a name="p0653453165113"></a>节点上当前数据涉及的最小事务号xmin。</p>
</td>
</tr>
<tr id="row186536536511"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p1165314537514"><a name="p1165314537514"></a><a name="p1165314537514"></a>vacuum</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p665318534516"><a name="p665318534516"></a><a name="p665318534516"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p15653353185114"><a name="p15653353185114"></a><a name="p15653353185114"></a>标志当前事务是否是lazy vacuum事务。</p>
</td>
</tr>
<tr id="row965375314515"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p16653135317514"><a name="p16653135317514"></a><a name="p16653135317514"></a>timeline</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p206533537517"><a name="p206533537517"></a><a name="p206533537517"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p206533539516"><a name="p206533539516"></a><a name="p206533539516"></a>标志数据库重启次数。</p>
</td>
</tr>
<tr id="row465325314514"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p12653853135112"><a name="p12653853135112"></a><a name="p12653853135112"></a>prepare_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p166531253195114"><a name="p166531253195114"></a><a name="p166531253195114"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p165419537515"><a name="p165419537515"></a><a name="p165419537515"></a>处于prepared状态的事务的id号，若不在prepared状态，值为0。</p>
</td>
</tr>
<tr id="row12654115345115"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p15654185375112"><a name="p15654185375112"></a><a name="p15654185375112"></a>pid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p7654145365118"><a name="p7654145365118"></a><a name="p7654145365118"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p4654185312518"><a name="p4654185312518"></a><a name="p4654185312518"></a>事务对应的线程id。</p>
</td>
</tr>
<tr id="row0654553145111"><td class="cellrowborder" valign="top" width="17.27%" headers="mcps1.2.4.1.1 "><p id="p11654135313517"><a name="p11654135313517"></a><a name="p11654135313517"></a>next_xid</p>
</td>
<td class="cellrowborder" valign="top" width="16.8%" headers="mcps1.2.4.1.2 "><p id="p17654053125119"><a name="p17654053125119"></a><a name="p17654053125119"></a>xid</p>
</td>
<td class="cellrowborder" valign="top" width="65.93%" headers="mcps1.2.4.1.3 "><p id="p965419538512"><a name="p965419538512"></a><a name="p965419538512"></a><span id="text1366214252513"><a name="text1366214252513"></a><a name="text1366214252513"></a>其余节点发送给当前节点的事务id，该值恒为0。</p>
</td>
</tr>
</tbody>
</table>
