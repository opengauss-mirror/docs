# PG\_PUBLICATION<a name="ZH-CN_TOPIC_0000001197110736"></a>

系统表pg\_publication包含当前数据库中创建的所有publication。

**表 1**  PG\_PUBLICATION字段

<a name="table8390885257"></a>
<table><thead align="left"><tr id="row17390188162516"><th class="cellrowborder" valign="top" width="14.591459145914593%" id="mcps1.2.4.1.1"><p id="p18390188112511"><a name="p18390188112511"></a><a name="p18390188112511"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="19.74197419741974%" id="mcps1.2.4.1.2"><p id="p7391168132520"><a name="p7391168132520"></a><a name="p7391168132520"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="65.66656665666567%" id="mcps1.2.4.1.3"><p id="p739219852516"><a name="p739219852516"></a><a name="p739219852516"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row1739210802511"><td class="cellrowborder" valign="top" width="14.591459145914593%" headers="mcps1.2.4.1.1 "><p id="p23921685255"><a name="p23921685255"></a><a name="p23921685255"></a>pubname</p>
</td>
<td class="cellrowborder" valign="top" width="19.74197419741974%" headers="mcps1.2.4.1.2 "><p id="p2039378142510"><a name="p2039378142510"></a><a name="p2039378142510"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="65.66656665666567%" headers="mcps1.2.4.1.3 "><p id="p439317811259"><a name="p439317811259"></a><a name="p439317811259"></a>publication的名称。</p>
</td>
</tr>
<tr id="row139313892510"><td class="cellrowborder" valign="top" width="14.591459145914593%" headers="mcps1.2.4.1.1 "><p id="p5393138112518"><a name="p5393138112518"></a><a name="p5393138112518"></a>pubowner</p>
</td>
<td class="cellrowborder" valign="top" width="19.74197419741974%" headers="mcps1.2.4.1.2 "><p id="p143932088256"><a name="p143932088256"></a><a name="p143932088256"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="65.66656665666567%" headers="mcps1.2.4.1.3 "><p id="p6393687251"><a name="p6393687251"></a><a name="p6393687251"></a>publication的拥有者。</p>
</td>
</tr>
<tr id="row133931487257"><td class="cellrowborder" valign="top" width="14.591459145914593%" headers="mcps1.2.4.1.1 "><p id="p1139311862519"><a name="p1139311862519"></a><a name="p1139311862519"></a>puballtables</p>
</td>
<td class="cellrowborder" valign="top" width="19.74197419741974%" headers="mcps1.2.4.1.2 "><p id="p12393582257"><a name="p12393582257"></a><a name="p12393582257"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.66656665666567%" headers="mcps1.2.4.1.3 "><p id="p739315892515"><a name="p739315892515"></a><a name="p739315892515"></a>如果为真，这个publication自动包括数据库中的所有表，包括未来将会创建的任何表。</p>
</td>
</tr>
<tr id="row108501716192615"><td class="cellrowborder" valign="top" width="14.591459145914593%" headers="mcps1.2.4.1.1 "><p id="p1385131610262"><a name="p1385131610262"></a><a name="p1385131610262"></a>pubinsert</p>
</td>
<td class="cellrowborder" valign="top" width="19.74197419741974%" headers="mcps1.2.4.1.2 "><p id="p108511116162616"><a name="p108511116162616"></a><a name="p108511116162616"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.66656665666567%" headers="mcps1.2.4.1.3 "><p id="p685201611265"><a name="p685201611265"></a><a name="p685201611265"></a>如果为真，为publication中的表复制INSERT操作。</p>
</td>
</tr>
<tr id="row47792198262"><td class="cellrowborder" valign="top" width="14.591459145914593%" headers="mcps1.2.4.1.1 "><p id="p578011914261"><a name="p578011914261"></a><a name="p578011914261"></a>pubupdate</p>
</td>
<td class="cellrowborder" valign="top" width="19.74197419741974%" headers="mcps1.2.4.1.2 "><p id="p1780181916261"><a name="p1780181916261"></a><a name="p1780181916261"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.66656665666567%" headers="mcps1.2.4.1.3 "><p id="p27801719102611"><a name="p27801719102611"></a><a name="p27801719102611"></a>如果为真，为publication中的表复制UPDATE操作。</p>
</td>
</tr>
<tr id="row1331192214267"><td class="cellrowborder" valign="top" width="14.591459145914593%" headers="mcps1.2.4.1.1 "><p id="p12332122252613"><a name="p12332122252613"></a><a name="p12332122252613"></a>pubdelete</p>
</td>
<td class="cellrowborder" valign="top" width="19.74197419741974%" headers="mcps1.2.4.1.2 "><p id="p11332722192612"><a name="p11332722192612"></a><a name="p11332722192612"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="65.66656665666567%" headers="mcps1.2.4.1.3 "><p id="p1133282216262"><a name="p1133282216262"></a><a name="p1133282216262"></a>如果为真，为publication中的表复制DELETE操作。</p>
</td>
</tr>
</tbody>
</table>
