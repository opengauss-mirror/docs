# PGXC\_SLICE<a name="ZH-CN_TOPIC_0000001152212582"></a>

PGXC\_SLICE表是针对range范围分布和list分布创建的系统表，用来记录分布具体信息，当前不支持range interval自动扩展分片，不过在系统表中预留。

PGXC\_SLICE系统表仅在分布式场景下有具体含义，openGauss只能查询表定义。

**表 1**  PGXC\_SLICE字段

<a name="table20701163110296"></a>
<table><thead align="left"><tr id="row108031031122914"><th class="cellrowborder" valign="top" width="12.971297129712973%" id="mcps1.2.4.1.1"><p id="p1080343122914"><a name="p1080343122914"></a><a name="p1080343122914"></a>名称</p>
</th>
<th class="cellrowborder" valign="top" width="20.152015201520154%" id="mcps1.2.4.1.2"><p id="p080393118294"><a name="p080393118294"></a><a name="p080393118294"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="66.87668766876688%" id="mcps1.2.4.1.3"><p id="p4803163132914"><a name="p4803163132914"></a><a name="p4803163132914"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row280314312298"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p9803163116298"><a name="p9803163116298"></a><a name="p9803163116298"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p128031631192916"><a name="p128031631192916"></a><a name="p128031631192916"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p1180320319291"><a name="p1180320319291"></a><a name="p1180320319291"></a>表名或者分片名，通过type区分。</p>
</td>
</tr>
<tr id="row480333119291"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p12803163132915"><a name="p12803163132915"></a><a name="p12803163132915"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p198033317294"><a name="p198033317294"></a><a name="p198033317294"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p19804173192916"><a name="p19804173192916"></a><a name="p19804173192916"></a>当为’t’时relname是表名，当为’s’时relname是分片的名字。</p>
</td>
</tr>
<tr id="row8804431122915"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p188041431182915"><a name="p188041431182915"></a><a name="p188041431182915"></a>strategy</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p1480453110296"><a name="p1480453110296"></a><a name="p1480453110296"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p180423118292"><a name="p180423118292"></a><a name="p180423118292"></a>‘r’：为range分布表。</p>
<p id="p20804123132913"><a name="p20804123132913"></a><a name="p20804123132913"></a>‘l’：为list分布表。</p>
<p id="p11804193118293"><a name="p11804193118293"></a><a name="p11804193118293"></a>后续interval分片会扩展该值。</p>
</td>
</tr>
<tr id="row4804193152919"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p28041131132912"><a name="p28041131132912"></a><a name="p28041131132912"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p28041831202920"><a name="p28041831202920"></a><a name="p28041831202920"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p178042031192918"><a name="p178042031192918"></a><a name="p178042031192918"></a>该tuple隶属的分布表oid。</p>
</td>
</tr>
<tr id="row48041431192915"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p10804143152913"><a name="p10804143152913"></a><a name="p10804143152913"></a>referenceoid</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p118042031202919"><a name="p118042031202919"></a><a name="p118042031202919"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p3804331132913"><a name="p3804331132913"></a><a name="p3804331132913"></a>所参考分布表的oid,用于slice reference建表语法。</p>
</td>
</tr>
<tr id="row15804173111294"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p48041319295"><a name="p48041319295"></a><a name="p48041319295"></a>sindex</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p4804113122910"><a name="p4804113122910"></a><a name="p4804113122910"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p3804031132918"><a name="p3804031132918"></a><a name="p3804031132918"></a>当为list分布表时，表示当前boundary在某个分片内的位置。</p>
</td>
</tr>
<tr id="row10804031132915"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p17804183120293"><a name="p17804183120293"></a><a name="p17804183120293"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p1580493111295"><a name="p1580493111295"></a><a name="p1580493111295"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p48051831132915"><a name="p48051831132915"></a><a name="p48051831132915"></a>预留字段。</p>
</td>
</tr>
<tr id="row14805153116292"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p17805163119294"><a name="p17805163119294"></a><a name="p17805163119294"></a>transitboundary</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p19805631142917"><a name="p19805631142917"></a><a name="p19805631142917"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p18805631132918"><a name="p18805631132918"></a><a name="p18805631132918"></a>预留字段。</p>
</td>
</tr>
<tr id="row78051331152911"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p178056314296"><a name="p178056314296"></a><a name="p178056314296"></a>transitno</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p18051731192910"><a name="p18051731192910"></a><a name="p18051731192910"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p158052031102918"><a name="p158052031102918"></a><a name="p158052031102918"></a>预留字段。</p>
</td>
</tr>
<tr id="row1480543112914"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p7805331152919"><a name="p7805331152919"></a><a name="p7805331152919"></a>nodeoid</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p2805193117296"><a name="p2805193117296"></a><a name="p2805193117296"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p17805123114296"><a name="p17805123114296"></a><a name="p17805123114296"></a>当relname为分片名时，表示该分片的数据存放在哪个DN上，nodeoid表示这个DN的oid。</p>
</td>
</tr>
<tr id="row1480510315296"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p180553122919"><a name="p180553122919"></a><a name="p180553122919"></a>boundaries</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p8805113110294"><a name="p8805113110294"></a><a name="p8805113110294"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p148051831132912"><a name="p148051831132912"></a><a name="p148051831132912"></a>当relname为分片名时，对应该分片的边界值。</p>
</td>
</tr>
<tr id="row1680517317296"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p5805113113291"><a name="p5805113113291"></a><a name="p5805113113291"></a>specified</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p480573162911"><a name="p480573162911"></a><a name="p480573162911"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p78062315299"><a name="p78062315299"></a><a name="p78062315299"></a>当前分片对应的DN是否是用户在DDL中显示指定的。</p>
</td>
</tr>
<tr id="row180673114291"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p980633122915"><a name="p980633122915"></a><a name="p980633122915"></a>sliceorder</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p1980612319298"><a name="p1980612319298"></a><a name="p1980612319298"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p168061231152913"><a name="p168061231152913"></a><a name="p168061231152913"></a>用户定义分片的顺序。</p>
</td>
</tr>
</tbody>
</table>

