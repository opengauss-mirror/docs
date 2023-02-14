# DB4AI.CREATE\_SNAPSHOT

CREATE\_SNAPSHOT是DB4AI特性用于创建快照的接口函数。通过语法CREATE SNAPSHOT调用。

**表 1**  DB4AI.CREATE\_SNAPSHOT入参和返回值列表

<a name="table1778511215713"></a>
<table><thead align="left"><tr id="row7786321677"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12786142116712"><a name="p12786142116712"></a><a name="p12786142116712"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p16786621675"><a name="p16786621675"></a><a name="p16786621675"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p127862021476"><a name="p127862021476"></a><a name="p127862021476"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row27861421573"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p10208171716814"><a name="p10208171716814"></a><a name="p10208171716814"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p416614691515"><a name="p416614691515"></a><a name="p416614691515"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p167862218718"><a name="p167862218718"></a><a name="p167862218718"></a>快照存储的模式名字，默认值是当前用户或者PUBLIC。</p>
</td>
</tr>
<tr id="row37861921874"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p3943120584"><a name="p3943120584"></a><a name="p3943120584"></a>i_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p899123001415"><a name="p899123001415"></a><a name="p899123001415"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1778617211576"><a name="p1778617211576"></a><a name="p1778617211576"></a>快照名称。</p>
</td>
</tr>
<tr id="row1778616214713"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p312814241188"><a name="p312814241188"></a><a name="p312814241188"></a>i_commands</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p87864218717"><a name="p87864218717"></a><a name="p87864218717"></a>IN TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p77864211276"><a name="p77864211276"></a><a name="p77864211276"></a>定义数据获取的SQL命令。</p>
</td>
</tr>
<tr id="row1478616213717"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7234162710819"><a name="p7234162710819"></a><a name="p7234162710819"></a>i_vers</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p878613211977"><a name="p878613211977"></a><a name="p878613211977"></a>IN NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p157868219716"><a name="p157868219716"></a><a name="p157868219716"></a>版本后缀。</p>
</td>
</tr>
<tr id="row412412321287"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p175971639389"><a name="p175971639389"></a><a name="p175971639389"></a>i_comment</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p51247321586"><a name="p51247321586"></a><a name="p51247321586"></a>IN TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p19124232183"><a name="p19124232183"></a><a name="p19124232183"></a>快照描述。</p>
</td>
</tr>
<tr id="row7369173613813"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p152461156586"><a name="p152461156586"></a><a name="p152461156586"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1237012361289"><a name="p1237012361289"></a><a name="p1237012361289"></a>OUT db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p337083617816"><a name="p337083617816"></a><a name="p337083617816"></a>结果。</p>
</td>
</tr>
</tbody>
</table>
