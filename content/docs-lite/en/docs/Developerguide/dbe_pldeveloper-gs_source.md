# DBE\_PLDEVELOPER.gs\_source<a name="EN-US_TOPIC_0000001214644937"></a>

Records PLPGSQL object \(stored procedure, function, package, and package body\) compilation information. For details, see the following column description.

When the  **plsql\_show\_all\_error**  parameter is enabled, information about PL/PGSQL object compilation success or failure is recorded in this table. When the  **plsql\_show\_all\_error**  parameter is disabled, only information about correct compilation is inserted into this table.

**Table  1**  DBE\_PLDEVELOPER.gs\_source columns

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b69659954013"><a name="b69659954013"></a><a name="b69659954013"></a>Name</strong></p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b171381011164012"><a name="b171381011164012"></a><a name="b171381011164012"></a>Type</strong></p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1593718112407"><a name="b1593718112407"></a><a name="b1593718112407"></a>Description</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p151851333151813"><a name="p151851333151813"></a><a name="p151851333151813"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p3182153331820"><a name="p3182153331820"></a><a name="p3182153331820"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p1712119664518"><a name="p1712119664518"></a><a name="p1712119664518"></a>Object ID.</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p1117973381818"><a name="p1117973381818"></a><a name="p1117973381818"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p71771233131813"><a name="p71771233131813"></a><a name="p71771233131813"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p14175538114514"><a name="p14175538114514"></a><a name="p14175538114514"></a>ID of the user who creates the object.</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p171743335182"><a name="p171743335182"></a><a name="p171743335182"></a>nspid</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p71723339188"><a name="p71723339188"></a><a name="p71723339188"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p58517208219"><a name="p58517208219"></a><a name="p58517208219"></a>Schema ID of an object.</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p9169173311813"><a name="p9169173311813"></a><a name="p9169173311813"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p1616633315187"><a name="p1616633315187"></a><a name="p1616633315187"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p6165533191819"><a name="p6165533191819"></a><a name="p6165533191819"></a>Object name.</p>
</td>
</tr>
<tr id="row0654102510108"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p616313320185"><a name="p616313320185"></a><a name="p616313320185"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p2161133361814"><a name="p2161133361814"></a><a name="p2161133361814"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p174611947474"><a name="p174611947474"></a><a name="p174611947474"></a>Object type (<strong id="b778014483407"><a name="b778014483407"></a><a name="b778014483407"></a>procedure</strong>/<strong id="b16860949174015"><a name="b16860949174015"></a><a name="b16860949174015"></a>function</strong>/<strong id="b282720506403"><a name="b282720506403"></a><a name="b282720506403"></a>package</strong>/<strong id="b12245105594016"><a name="b12245105594016"></a><a name="b12245105594016"></a>package body</strong>).</p>
</td>
</tr>
<tr id="row113297295101"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p161581133141813"><a name="p161581133141813"></a><a name="p161581133141813"></a>status</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p1658273473911"><a name="p1658273473911"></a><a name="p1658273473911"></a>boolean</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p11687168142613"><a name="p11687168142613"></a><a name="p11687168142613"></a>Determines whether the creation is successful.</p>
</td>
</tr>
<tr id="row1914143861019"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p13151163321817"><a name="p13151163321817"></a><a name="p13151163321817"></a>src</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p10972104693918"><a name="p10972104693918"></a><a name="p10972104693918"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p171483338181"><a name="p171483338181"></a><a name="p171483338181"></a>Original statement for creating an object.</p>
</td>
</tr>
</tbody>
</table>

