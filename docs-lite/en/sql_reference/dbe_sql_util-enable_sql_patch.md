# DBE\_SQL\_UTIL.enable\_sql\_patch<a name="EN-US_TOPIC_0000001266593126"></a>

enable\_sql\_patch is an interface function used to enable an SQL patch and return whether the execution is successful.

Only the initial, sysadmin, opradmin, and monadmin users have the permission to invoke this interface.

**Table 1** DBE\_SQL\_UTIL.enable\_sql\_patch input parameters and return values

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
<tr id="row176924242062"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1069215249610"><a name="p1069215249610"></a><a name="p1069215249610"></a>result</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p12692172416620"><a name="p12692172416620"></a><a name="p12692172416620"></a>OUT bool</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p103734329511"><a name="p103734329511"></a><a name="p103734329511"></a>Determines whether the execution is successful.</p>
</td>
</tr>
</tbody>
</table>
