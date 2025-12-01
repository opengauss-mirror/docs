# DBE\_SQL\_UTIL.create\_hint\_sql\_patch<a name="EN-US_TOPIC_0000001266433182"></a>

create\_hint\_sql\_patch is an interface function used to create an SQL patch for optimization and return whether the execution is successful.

Only the initial, sysadmin, opradmin, and monadmin users have the permission to invoke this interface.

**Table 1** DBE\_SQL\_UTIL.create\_hint\_sql\_patch input parameters and return values

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
<tr id="row37861921874"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3943120584"><a name="p3943120584"></a><a name="p3943120584"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p899123001415"><a name="p899123001415"></a><a name="p899123001415"></a>IN bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1778617211576"><a name="p1778617211576"></a><a name="p1778617211576"></a>Queries the global unique ID.</p>
</td>
</tr>
<tr id="row1778616214713"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p312814241188"><a name="p312814241188"></a><a name="p312814241188"></a>hint_string</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p87864218717"><a name="p87864218717"></a><a name="p87864218717"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p77864211276"><a name="p77864211276"></a><a name="p77864211276"></a>Specifies the hint text.</p>
</td>
</tr>
<tr id="row1478616213717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7234162710819"><a name="p7234162710819"></a><a name="p7234162710819"></a>description</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p878613211977"><a name="p878613211977"></a><a name="p878613211977"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p157868219716"><a name="p157868219716"></a><a name="p157868219716"></a>Specifies the patch description. The default value is null.</p>
</td>
</tr>
<tr id="row412412321287"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p175971639389"><a name="p175971639389"></a><a name="p175971639389"></a>enabled</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p51247321586"><a name="p51247321586"></a><a name="p51247321586"></a>IN bool</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19124232183"><a name="p19124232183"></a><a name="p19124232183"></a>Determines whether the patch takes effect. The default value is <strong>true</strong>.</p>
</td>
</tr>
</tbody>
</table>
