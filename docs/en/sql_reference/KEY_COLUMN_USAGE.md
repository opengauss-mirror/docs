# KEY_COLUMN_USAGE <a name="ZH-CN_TOPIC_0310260671"></a>

<!-- md-trans-meta sourceCommit=unknown translatedAt=2026-07-31T09:22:35.885Z -->

Stores information related to foreign keys.

**Table 1** Fields added in KEY_COLUMN_USAGE compared to PGXC/PG

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>Name</strong></p></td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>Type</strong></p></td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>Description</strong></p></td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p916919107811"><a name="p916919107811"></a><a name="p916919107811"></a>referenced_table_schema</p></td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p216911100815"><a name="p216911100815"></a><a name="p216911100815"></a>varchar(64)</p></td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p382419359375"><a name="p382419359375"></a><a name="p382419359375"></a>Name of the schema to which the referenced table belongs.</p></td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p813487181720"><a name="p813487181720"></a><a name="p813487181720"></a>referenced_table_name</p></td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1013416713174"><a name="p1013416713174"></a><a name="p1013416713174"></a>varchar(64)</p></td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p173511513616"><a name="p173511513616"></a><a name="p173511513616"></a>Name of the referenced table</p></td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p813487181720"><a name="p813487181720"></a><a name="p813487181720"></a>referenced_column_name</p></td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1013416713174"><a name="p1013416713174"></a><a name="p1013416713174"></a>varchar(64)</p></td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p173511513616"><a name="p173511513616"></a><a name="p173511513616"></a>Name of the column in the referenced table.</p></td>
</tr>
</tbody>
</table>
