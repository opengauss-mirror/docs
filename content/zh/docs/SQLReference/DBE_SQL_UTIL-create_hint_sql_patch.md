# DBE\_SQL\_UTIL.create\_hint\_sql\_patch<a name="ZH-CN_TOPIC_0000001266433182"></a>

create\_hint\_sql\_patch是用于创建调优SQL PATCH的接口函数，返回执行是否成功。

限制仅初始用户、sysadmin、opradmin、monadmin用户有权限调用。

**表 1**  DBE\_SQL\_UTIL.create\_hint\_sql\_patch入参和返回值列表

<a name="table1778511215713"></a>
<table><thead align="left"><tr id="row7786321677"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12786142116712"><a name="p12786142116712"></a><a name="p12786142116712"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p16786621675"><a name="p16786621675"></a><a name="p16786621675"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p127862021476"><a name="p127862021476"></a><a name="p127862021476"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row27861421573"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10208171716814"><a name="p10208171716814"></a><a name="p10208171716814"></a>patch_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p416614691515"><a name="p416614691515"></a><a name="p416614691515"></a>IN name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p167862218718"><a name="p167862218718"></a><a name="p167862218718"></a>PATCH名称。</p>
</td>
</tr>
<tr id="row37861921874"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3943120584"><a name="p3943120584"></a><a name="p3943120584"></a>unique_sql_id</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p899123001415"><a name="p899123001415"></a><a name="p899123001415"></a>IN bigint</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1778617211576"><a name="p1778617211576"></a><a name="p1778617211576"></a>查询全局唯一ID。</p>
</td>
</tr>
<tr id="row1778616214713"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p312814241188"><a name="p312814241188"></a><a name="p312814241188"></a>hint_string</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p87864218717"><a name="p87864218717"></a><a name="p87864218717"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p77864211276"><a name="p77864211276"></a><a name="p77864211276"></a>Hint文本。</p>
</td>
</tr>
<tr id="row1478616213717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7234162710819"><a name="p7234162710819"></a><a name="p7234162710819"></a>AboutopenGauss</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p878613211977"><a name="p878613211977"></a><a name="p878613211977"></a>IN text</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p157868219716"><a name="p157868219716"></a><a name="p157868219716"></a>PATCH的备注，默认值为NULL。</p>
</td>
</tr>
<tr id="row412412321287"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p175971639389"><a name="p175971639389"></a><a name="p175971639389"></a>enabled</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p51247321586"><a name="p51247321586"></a><a name="p51247321586"></a>IN bool</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19124232183"><a name="p19124232183"></a><a name="p19124232183"></a>PATCH是否生效，默认值为true。</p>
</td>
</tr>
</tbody>
</table>

