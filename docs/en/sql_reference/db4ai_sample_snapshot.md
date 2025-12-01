# DB4AI.SAMPLE\_SNAPSHOT<a name="EN-US_TOPIC_0000001195271245"></a>

**SAMPLE\_SNAPSHOT**  samples basic data to generate snapshots for the DB4AI feature. You can invoke  **SAMPLE SNAPSHOT**  to implement this function.

**Table  1**  DB4AI.SAMPLE\_SNAPSHOT input parameters and return values

<a name="table11959123474111"></a>
<table><thead align="left"><tr id="row1395933474119"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p1295923412415"><a name="p1295923412415"></a><a name="p1295923412415"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p295943404119"><a name="p295943404119"></a><a name="p295943404119"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p6959434174114"><a name="p6959434174114"></a><a name="p6959434174114"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row1495903413411"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p19824757174116"><a name="p19824757174116"></a><a name="p19824757174116"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p0208172733914"><a name="p0208172733914"></a><a name="p0208172733914"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p42081327183911"><a name="p42081327183911"></a><a name="p42081327183911"></a>Name of the schema storing snapshots</p>
</td>
</tr>
<tr id="row1695903417417"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p6584140144215"><a name="p6584140144215"></a><a name="p6584140144215"></a>i_parent</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p2354203517428"><a name="p2354203517428"></a><a name="p2354203517428"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1614120287"><a name="p1614120287"></a><a name="p1614120287"></a>Parent snapshot name</p>
</td>
</tr>
<tr id="row89599348412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7885310423"><a name="p7885310423"></a><a name="p7885310423"></a>i_sample_infixes</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p124011936154216"><a name="p124011936154216"></a><a name="p124011936154216"></a>IN NAME[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p15960734134115"><a name="p15960734134115"></a><a name="p15960734134115"></a>Sample snapshot name infix</p>
</td>
</tr>
<tr id="row4960123410412"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p49301353426"><a name="p49301353426"></a><a name="p49301353426"></a>i_sample_ratios</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p71346486429"><a name="p71346486429"></a><a name="p71346486429"></a>IN NUMBER[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p49602344411"><a name="p49602344411"></a><a name="p49602344411"></a>Size of each sample, which is used as the sample set ratio</p>
</td>
</tr>
<tr id="row8960134114115"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p14407142115420"><a name="p14407142115420"></a><a name="p14407142115420"></a>i_stratify</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p987075615421"><a name="p987075615421"></a><a name="p987075615421"></a>IN NAME[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p49600344416"><a name="p49600344416"></a><a name="p49600344416"></a>Layering strategy</p>
</td>
</tr>
<tr id="row1996016342410"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p957632494215"><a name="p957632494215"></a><a name="p957632494215"></a>i_sample_comments</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12396344315"><a name="p12396344315"></a><a name="p12396344315"></a>IN TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p199601234154119"><a name="p199601234154119"></a><a name="p199601234154119"></a>Sample snapshot description</p>
</td>
</tr>
<tr id="row209608347413"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p149608342411"><a name="p149608342411"></a><a name="p149608342411"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p16208142715391"><a name="p16208142715391"></a><a name="p16208142715391"></a>OUT  db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p11960183474111"><a name="p11960183474111"></a><a name="p11960183474111"></a>Result</p>
</td>
</tr>
</tbody>
</table>

