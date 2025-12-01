# DB4AI.PREPARE\_SNAPSHOT

PREPARE\_SNAPSHOT是DB4AI特性中数据准备模型训练和解释快照进行协作。快照为所有应用更改的数据和文档提供了完整的序列。通过语法PREPARE SNAPSHOT调用。

**表 1**  DB4AI.PREPARE\_SNAPSHOT入参和返回值列表

<a name="table1288721532312"></a>
<table><thead align="left"><tr id="row7887815142316"><th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.1"><p id="p12786142116712"><a name="p12786142116712"></a><a name="p12786142116712"></a>参数</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.2"><p id="p16786621675"><a name="p16786621675"></a><a name="p16786621675"></a>类型</p>
</th>
<th class="cellrowborder" valign="top" width="33.33333333333333%" id="mcps1.2.4.1.3"><p id="p127862021476"><a name="p127862021476"></a><a name="p127862021476"></a>描述</p>
</th>
</tr>
</thead>
<tbody><tr id="row16887151552319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p109064117244"><a name="p109064117244"></a><a name="p109064117244"></a>i_schema</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p198871415132317"><a name="p198871415132317"></a><a name="p198871415132317"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1288711515239"><a name="p1288711515239"></a><a name="p1288711515239"></a>快照存储的模式名字，默认值是当前用户或者PUBLIC。</p>
</td>
</tr>
<tr id="row208871815132314"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1815415572415"><a name="p1815415572415"></a><a name="p1815415572415"></a>i_parent</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p11887171562320"><a name="p11887171562320"></a><a name="p11887171562320"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p888891552317"><a name="p888891552317"></a><a name="p888891552317"></a>父快照名称。</p>
</td>
</tr>
<tr id="row88881315192312"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1132910817248"><a name="p1132910817248"></a><a name="p1132910817248"></a>i_commands</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p1688831516238"><a name="p1688831516238"></a><a name="p1688831516238"></a>IN  TEXT[]</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1888141517235"><a name="p1888141517235"></a><a name="p1888141517235"></a>定义快照修改的DDL和DML命令。</p>
</td>
</tr>
<tr id="row2888121532319"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p1661061152414"><a name="p1661061152414"></a><a name="p1661061152414"></a>i_vers</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p588891522319"><a name="p588891522319"></a><a name="p588891522319"></a>IN  NAME</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p1188851502310"><a name="p1188851502310"></a><a name="p1188851502310"></a>版本后缀。</p>
</td>
</tr>
<tr id="row1888881520233"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p7203131511244"><a name="p7203131511244"></a><a name="p7203131511244"></a>i_comment</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6888161515238"><a name="p6888161515238"></a><a name="p6888161515238"></a>IN  TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p688814150238"><a name="p688814150238"></a><a name="p688814150238"></a>此数据策展单元的说明。</p>
</td>
</tr>
<tr id="row5888111522320"><td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.1 "><p id="p197659215247"><a name="p197659215247"></a><a name="p197659215247"></a>res</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.2 "><p id="p6888121513238"><a name="p6888121513238"></a><a name="p6888121513238"></a>OUT  db4ai.snapshot_name</p>
</td>
<td class="cellrowborder" valign="top" width="33.33333333333333%" headers="mcps1.2.4.1.3 "><p id="p4888615192311"><a name="p4888615192311"></a><a name="p4888615192311"></a>结果。</p>
</td>
</tr>
</tbody>
</table>
