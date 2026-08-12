# DBE\_SQL\_UTIL.show\_sql\_patch<a name="EN-US_TOPIC_0000001314153109"></a>

show\_sql\_patch is an interface function used to display the SQL PATCH corresponding to the specified patch\_name and return the execution result.

Only the initial, sysadmin, opradmin, and monadmin users have the permission to invoke this interface.

**Table 1** DBE\_SQL\_UTIL.show\_sql\_patch input parameters and return values

<a name="table1778511215713"></a>
<table><thead align="left"><tr id="row7786321677"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12786142116712"><a name="p12786142116712"></a><a name="p12786142116712"></a>Parameter</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p16786621675"><a name="p16786621675"></a><a name="p16786621675"></a>Type</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p127862021476"><a name="p127862021476"></a><a name="p127862021476"></a>Description</p>
</th>
</tr>
</thead>
<tbody><tr id="row27861421573"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10208171716814"><a name="p10208171716814"></a><a name="p10208171716814"></a>patch_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p416614691515"><a name="p416614691515"></a><a name="p416614691515"></a>IN name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p167862218718"><a name="p167862218718"></a><a name="p167862218718"></a>Specifies the patch name.</p>
</td>
</tr>
<tr id="row164087556413"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p240919558415"><a name="p240919558415"></a><a name="p240919558415"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p54098551445"><a name="p54098551445"></a><a name="p54098551445"></a>OUT bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p5409855648"><a name="p5409855648"></a><a name="p5409855648"></a>Queries the global unique ID.</p>
</td>
</tr>
<tr id="row9870725519"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p18702219519"><a name="p18702219519"></a><a name="p18702219519"></a>enabled</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p14870521356"><a name="p14870521356"></a><a name="p14870521356"></a>OUT bool</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p78701621751"><a name="p78701621751"></a><a name="p78701621751"></a>Determines whether the patch takes effect.</p>
</td>
</tr>
<tr id="row113819616518"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1838176453"><a name="p1838176453"></a><a name="p1838176453"></a>abort</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p5381860510"><a name="p5381860510"></a><a name="p5381860510"></a>OUT bool</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4385613516"><a name="p4385613516"></a><a name="p4385613516"></a>Determines whether the value is <strong>AbortHint</strong>.</p>
</td>
</tr>
<tr id="row16873185816417"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1487317582047"><a name="p1487317582047"></a><a name="p1487317582047"></a>hint_str</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p087314581148"><a name="p087314581148"></a><a name="p087314581148"></a>OUT text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p20873155816411"><a name="p20873155816411"></a><a name="p20873155816411"></a>Specifies the hint text.</p>
</td>
</tr>
</tbody>
</table>
