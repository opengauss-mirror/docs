# Cache IO Stats<a name="ZH-CN_TOPIC_0000001260075117"></a>

Cache IO Stats包含User table和User index两张表，列名称及描述如下所示。

## User table IO activity ordered by heap blks hit ratio<a name="section155172118496"></a>

**表 1**  User table IO activity ordered by heap blks hit ratio报表主要内容

<a name="table42308587231"></a>
<table><thead align="left"><tr id="row1023195813234"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p8231958162311"><a name="p8231958162311"></a><a name="p8231958162311"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p1923155815232"><a name="p1923155815232"></a><a name="p1923155815232"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row623125811239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p0729154345017"><a name="p0729154345017"></a><a name="p0729154345017"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p6729134395017"><a name="p6729134395017"></a><a name="p6729134395017"></a>Database名称。</p>
</td>
</tr>
<tr id="row123110587238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1972994395011"><a name="p1972994395011"></a><a name="p1972994395011"></a>Schema Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14729184318509"><a name="p14729184318509"></a><a name="p14729184318509"></a>Schema名称。</p>
</td>
</tr>
<tr id="row1323111589238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p272974365017"><a name="p272974365017"></a><a name="p272974365017"></a>Table Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1672912436509"><a name="p1672912436509"></a><a name="p1672912436509"></a>Table名称。</p>
</td>
</tr>
<tr id="row20231155818239"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p137293438509"><a name="p137293438509"></a><a name="p137293438509"></a>%Heap Blks Hit Ratio</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p14729143195018"><a name="p14729143195018"></a><a name="p14729143195018"></a>此表的Buffer Pool命中率。</p>
</td>
</tr>
<tr id="row1523145815238"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p072924313503"><a name="p072924313503"></a><a name="p072924313503"></a>Heap Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1872964355012"><a name="p1872964355012"></a><a name="p1872964355012"></a>该表中读取的磁盘块数。</p>
</td>
</tr>
<tr id="row4231125862312"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p47291443155013"><a name="p47291443155013"></a><a name="p47291443155013"></a>Heap Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p372934310503"><a name="p372934310503"></a><a name="p372934310503"></a>此表缓存命中数。</p>
</td>
</tr>
<tr id="row19231558172318"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p972919430507"><a name="p972919430507"></a><a name="p972919430507"></a>Idx Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1729144335013"><a name="p1729144335013"></a><a name="p1729144335013"></a>表中所有索引读取的磁盘块数。</p>
</td>
</tr>
<tr id="row1425411209253"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1072917436505"><a name="p1072917436505"></a><a name="p1072917436505"></a>Idx Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p10730114325012"><a name="p10730114325012"></a><a name="p10730114325012"></a>表中所有索引命中缓存数。</p>
</td>
</tr>
<tr id="row1483523102517"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p16730174315505"><a name="p16730174315505"></a><a name="p16730174315505"></a>Toast Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p11730124315503"><a name="p11730124315503"></a><a name="p11730124315503"></a>此表的TOAST表读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="row1395913276256"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p14730144305011"><a name="p14730144305011"></a><a name="p14730144305011"></a>Toast Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p173004335019"><a name="p173004335019"></a><a name="p173004335019"></a>此表的TOAST表命中缓冲区数（如果存在）。</p>
</td>
</tr>
<tr id="row1119733002519"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p97302043145010"><a name="p97302043145010"></a><a name="p97302043145010"></a>Tidx Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p97304433507"><a name="p97304433507"></a><a name="p97304433507"></a>此表的TOAST表索引读取的磁盘块数（如果存在）。</p>
</td>
</tr>
<tr id="row3539163272511"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p9730134310507"><a name="p9730134310507"></a><a name="p9730134310507"></a>Tidx Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p147301437508"><a name="p147301437508"></a><a name="p147301437508"></a>此表的TOAST表索引命中缓冲区数（如果存在）。</p>
</td>
</tr>
</tbody>
</table>

## User index IO activity ordered by idx blks hit ratio<a name="section20506101317514"></a>

**表 2**  User index IO activity ordered by idx blks hit ratio报表主要内容

<a name="table75061413135113"></a>
<table><thead align="left"><tr id="row1050691316517"><th class="cellrowborder" valign="top" width="17.169999999999998%" id="mcps1.2.3.1.1"><p id="p750614135517"><a name="p750614135517"></a><a name="p750614135517"></a>列名称</p>
</th>
<th class="cellrowborder" valign="top" width="82.83%" id="mcps1.2.3.1.2"><p id="p125061313185110"><a name="p125061313185110"></a><a name="p125061313185110"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row175068132513"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p191865520510"><a name="p191865520510"></a><a name="p191865520510"></a>DB Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1591865514513"><a name="p1591865514513"></a><a name="p1591865514513"></a>Database名称。</p>
</td>
</tr>
<tr id="row95061613115111"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p13918155505116"><a name="p13918155505116"></a><a name="p13918155505116"></a>Schema Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p99186552510"><a name="p99186552510"></a><a name="p99186552510"></a>Schema名称。</p>
</td>
</tr>
<tr id="row450661335113"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1691815558519"><a name="p1691815558519"></a><a name="p1691815558519"></a>Table Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1791885555113"><a name="p1791885555113"></a><a name="p1791885555113"></a>Table名称。</p>
</td>
</tr>
<tr id="row750619135517"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p091855517519"><a name="p091855517519"></a><a name="p091855517519"></a>Index Name</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p1691819558511"><a name="p1691819558511"></a><a name="p1691819558511"></a>Index名称。</p>
</td>
</tr>
<tr id="row85068134519"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p69183556517"><a name="p69183556517"></a><a name="p69183556517"></a>%Idx Blks Hit Ratio</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p7918155511517"><a name="p7918155511517"></a><a name="p7918155511517"></a>Index的命中率。</p>
</td>
</tr>
<tr id="row3506313195112"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p1191835512512"><a name="p1191835512512"></a><a name="p1191835512512"></a>Idx Blks Read</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p491825514519"><a name="p491825514519"></a><a name="p491825514519"></a>所有索引读取的磁盘块数。</p>
</td>
</tr>
<tr id="row155076135514"><td class="cellrowborder" valign="top" width="17.169999999999998%" headers="mcps1.2.3.1.1 "><p id="p391820554517"><a name="p391820554517"></a><a name="p391820554517"></a>Idx Blks Hit</p>
</td>
<td class="cellrowborder" valign="top" width="82.83%" headers="mcps1.2.3.1.2 "><p id="p19918195585113"><a name="p19918195585113"></a><a name="p19918195585113"></a>所有索引命中缓存数。</p>
</td>
</tr>
</tbody>
</table>

