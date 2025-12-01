# PGXC\_SLICE<a name="EN-US_TOPIC_0000001152212582"></a>

**PGXC\_SLICE**  is a system catalog created for recording range distribution and list distribution details. Currently, range interval cannot be used to automatically scale out shards. It is reserved in the system catalog.

The  **PGXC\_SLICE**  system catalog has specific meanings only in distributed scenarios. openGauss can only query the table definition.

**Table  1**  PGXC\_SLICE columns

<a name="table20701163110296"></a>
<table><thead align="left"><tr id="row108031031122914"><th class="cellrowborder" valign="top" width="12.971297129712973%" id="mcps1.2.4.1.1"><p id="p1080343122914"><a name="p1080343122914"></a><a name="p1080343122914"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="20.152015201520154%" id="mcps1.2.4.1.2"><p id="p080393118294"><a name="p080393118294"></a><a name="p080393118294"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="66.87668766876688%" id="mcps1.2.4.1.3"><p id="p4803163132914"><a name="p4803163132914"></a><a name="p4803163132914"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row280314312298"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p9803163116298"><a name="p9803163116298"></a><a name="p9803163116298"></a>relname</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p128031631192916"><a name="p128031631192916"></a><a name="p128031631192916"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p1180320319291"><a name="p1180320319291"></a><a name="p1180320319291"></a>Table name or shard name, which is distinguished by <strong id="b61505221034422"><a name="b61505221034422"></a><a name="b61505221034422"></a>type</strong>.</p>
</td>
</tr>
<tr id="row480333119291"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p12803163132915"><a name="p12803163132915"></a><a name="p12803163132915"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p198033317294"><a name="p198033317294"></a><a name="p198033317294"></a>char</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p19804173192916"><a name="p19804173192916"></a><a name="p19804173192916"></a>When the value is <strong id="b143598808534422"><a name="b143598808534422"></a><a name="b143598808534422"></a>t</strong>, <strong id="b1017473320456"><a name="b1017473320456"></a><a name="b1017473320456"></a>relname</strong> indicates the table name. When the value is <strong id="b78570827934422"><a name="b78570827934422"></a><a name="b78570827934422"></a>s</strong>, <strong id="b10184237134517"><a name="b10184237134517"></a><a name="b10184237134517"></a>relname</strong> indicates the shard name.</p>
</td>
</tr>
<tr id="row8804431122915"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p188041431182915"><a name="p188041431182915"></a><a name="p188041431182915"></a>strategy</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p1480453110296"><a name="p1480453110296"></a><a name="p1480453110296"></a>char</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p180423118292"><a name="p180423118292"></a><a name="p180423118292"></a><strong id="b155607111034422"><a name="b155607111034422"></a><a name="b155607111034422"></a>r</strong>: range distribution table</p>
<p id="p20804123132913"><a name="p20804123132913"></a><a name="p20804123132913"></a><strong id="b177777372534422"><a name="b177777372534422"></a><a name="b177777372534422"></a>l</strong>: list distribution table</p>
<p id="p11804193118293"><a name="p11804193118293"></a><a name="p11804193118293"></a>This value will be extended for subsequent interval shards.</p>
</td>
</tr>
<tr id="row4804193152919"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p28041131132912"><a name="p28041131132912"></a><a name="p28041131132912"></a>relid</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p28041831202920"><a name="p28041831202920"></a><a name="p28041831202920"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p178042031192918"><a name="p178042031192918"></a><a name="p178042031192918"></a>OID of the distribution table to which the tuple belongs.</p>
</td>
</tr>
<tr id="row48041431192915"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p10804143152913"><a name="p10804143152913"></a><a name="p10804143152913"></a>referenceoid</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p118042031202919"><a name="p118042031202919"></a><a name="p118042031202919"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p3804331132913"><a name="p3804331132913"></a><a name="p3804331132913"></a>OID of the referenced distribution table, which is used for slice reference table creation syntax.</p>
</td>
</tr>
<tr id="row15804173111294"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p48041319295"><a name="p48041319295"></a><a name="p48041319295"></a>sindex</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p4804113122910"><a name="p4804113122910"></a><a name="p4804113122910"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p3804031132918"><a name="p3804031132918"></a><a name="p3804031132918"></a>Position of the current boundary in a shard when the table is a list distribution table.</p>
</td>
</tr>
<tr id="row10804031132915"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p17804183120293"><a name="p17804183120293"></a><a name="p17804183120293"></a>interval</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p1580493111295"><a name="p1580493111295"></a><a name="p1580493111295"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p48051831132915"><a name="p48051831132915"></a><a name="p48051831132915"></a>Reserved column</p>
</td>
</tr>
<tr id="row14805153116292"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p17805163119294"><a name="p17805163119294"></a><a name="p17805163119294"></a>transitboundary</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p19805631142917"><a name="p19805631142917"></a><a name="p19805631142917"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p18805631132918"><a name="p18805631132918"></a><a name="p18805631132918"></a>Reserved column</p>
</td>
</tr>
<tr id="row78051331152911"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p178056314296"><a name="p178056314296"></a><a name="p178056314296"></a>transitno</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p18051731192910"><a name="p18051731192910"></a><a name="p18051731192910"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p158052031102918"><a name="p158052031102918"></a><a name="p158052031102918"></a>Reserved column</p>
</td>
</tr>
<tr id="row1480543112914"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p7805331152919"><a name="p7805331152919"></a><a name="p7805331152919"></a>nodeoid</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p2805193117296"><a name="p2805193117296"></a><a name="p2805193117296"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p17805123114296"><a name="p17805123114296"></a><a name="p17805123114296"></a>When <strong id="b131246677334422"><a name="b131246677334422"></a><a name="b131246677334422"></a>relname</strong> is set to a shard name, <strong id="b145404919534422"><a name="b145404919534422"></a><a name="b145404919534422"></a>nodeoid</strong> indicates the OID of the DN where the shard data is stored.</p>
</td>
</tr>
<tr id="row1480510315296"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p180553122919"><a name="p180553122919"></a><a name="p180553122919"></a>boundaries</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p8805113110294"><a name="p8805113110294"></a><a name="p8805113110294"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p148051831132912"><a name="p148051831132912"></a><a name="p148051831132912"></a>When <strong id="b97814008534422"><a name="b97814008534422"></a><a name="b97814008534422"></a>relname</strong> is set to a shard name, this parameter indicates the boundary value of the shard.</p>
</td>
</tr>
<tr id="row1680517317296"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p5805113113291"><a name="p5805113113291"></a><a name="p5805113113291"></a>specified</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p480573162911"><a name="p480573162911"></a><a name="p480573162911"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p78062315299"><a name="p78062315299"></a><a name="p78062315299"></a>Whether the DN corresponding to the current segment is explicitly specified in the DDL.</p>
</td>
</tr>
<tr id="row180673114291"><td class="cellrowborder" valign="top" width="12.971297129712973%" headers="mcps1.2.4.1.1 "><p id="p980633122915"><a name="p980633122915"></a><a name="p980633122915"></a>sliceorder</p>
</td>
<td class="cellrowborder" valign="top" width="20.152015201520154%" headers="mcps1.2.4.1.2 "><p id="p1980612319298"><a name="p1980612319298"></a><a name="p1980612319298"></a>int</p>
</td>
<td class="cellrowborder" valign="top" width="66.87668766876688%" headers="mcps1.2.4.1.3 "><p id="p168061231152913"><a name="p168061231152913"></a><a name="p168061231152913"></a>User-defined shard sequence.</p>
</td>
</tr>
</tbody>
</table>

