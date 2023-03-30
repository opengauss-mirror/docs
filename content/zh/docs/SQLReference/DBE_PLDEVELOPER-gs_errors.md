# DBE\_PLDEVELOPER.gs\_errors<a name="ZH-CN_TOPIC_0000001214726465"></a>

用于记录PLPGSQL对象（存储过程、函数、包、包体）编译过程中遇到的报错信息，具体内容见下列字段描述。

打开plsql\_show\_all\_error参数后，如果编译过程中存在报错，则会跳过报错继续编译并把报错信息记录在gs\_errors中，如果关闭plsql\_show\_all\_error参数则不会将相关信息插入此表中。

**表 1**  DBE\_PLDEVELOPER.gs\_errors字段

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>名称</strong></p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>类型</strong></p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>描述</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p151851333151813"><a name="p151851333151813"></a><a name="p151851333151813"></a>id</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p3182153331820"><a name="p3182153331820"></a><a name="p3182153331820"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p1712119664518"><a name="p1712119664518"></a><a name="p1712119664518"></a>对象的ID。</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p1117973381818"><a name="p1117973381818"></a><a name="p1117973381818"></a>owner</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p71771233131813"><a name="p71771233131813"></a><a name="p71771233131813"></a>bigint</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p14175538114514"><a name="p14175538114514"></a><a name="p14175538114514"></a>对象创建用户ID。</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p171743335182"><a name="p171743335182"></a><a name="p171743335182"></a>nspid</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p71723339188"><a name="p71723339188"></a><a name="p71723339188"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p58517208219"><a name="p58517208219"></a><a name="p58517208219"></a>对象的模式ID。</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p9169173311813"><a name="p9169173311813"></a><a name="p9169173311813"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p1616633315187"><a name="p1616633315187"></a><a name="p1616633315187"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p6165533191819"><a name="p6165533191819"></a><a name="p6165533191819"></a>对象名。</p>
</td>
</tr>
<tr id="row0654102510108"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p616313320185"><a name="p616313320185"></a><a name="p616313320185"></a>type</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p2161133361814"><a name="p2161133361814"></a><a name="p2161133361814"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p174611947474"><a name="p174611947474"></a><a name="p174611947474"></a>对象类型（procedure/function/package/package body）。</p>
</td>
</tr>
<tr id="row113297295101"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p161581133141813"><a name="p161581133141813"></a><a name="p161581133141813"></a>line</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p1658273473911"><a name="p1658273473911"></a><a name="p1658273473911"></a>integer</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p11687168142613"><a name="p11687168142613"></a><a name="p11687168142613"></a>行号。</p>
</td>
</tr>
<tr id="row1914143861019"><td class="cellrowborder" valign="top" width="17.67176717671767%"><p id="p13151163321817"><a name="p13151163321817"></a><a name="p13151163321817"></a>src</p>
</td>
<td class="cellrowborder" valign="top" width="22.562256225622562%"><p id="p10972104693918"><a name="p10972104693918"></a><a name="p10972104693918"></a>text</p>
</td>
<td class="cellrowborder" valign="top" width="59.765976597659765%"><p id="p171483338181"><a name="p171483338181"></a><a name="p171483338181"></a>对象创建的原始语句。</p>
</td>
</tr>
</tbody>
</table>

