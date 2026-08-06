# \_PG\_USER\_MAPPINGS

存储从本地用户到远程的映射。该视图只有sysadmin权限可以查看。

**表 1**  \_PG\_USER\_MAPPINGS字段

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>名称</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>类型</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>描述</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p916919107811"><a name="p916919107811"></a><a name="p916919107811"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p216911100815"><a name="p216911100815"></a><a name="p216911100815"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p382419359375"><a name="p382419359375"></a><a name="p382419359375"></a>从本地用户到远程的映射的oid。</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p813487181720"><a name="p813487181720"></a><a name="p813487181720"></a>umoptions</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1013416713174"><a name="p1013416713174"></a><a name="p1013416713174"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p173511513616"><a name="p173511513616"></a><a name="p173511513616"></a>用户映射指定选项，使用“keyword=value”格式的字符串。</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p3107611171717"><a name="p3107611171717"></a><a name="p3107611171717"></a>umuser</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p10107191141716"><a name="p10107191141716"></a><a name="p10107191141716"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p11993113111366"><a name="p11993113111366"></a><a name="p11993113111366"></a>被映射的本地用户的OID，如果用户映射是公共的则为0。</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p1869616141174"><a name="p1869616141174"></a><a name="p1869616141174"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p10696814191711"><a name="p10696814191711"></a><a name="p10696814191711"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p11697114171718"><a name="p11697114171718"></a><a name="p11697114171718"></a>本地用户角色名称。</p>
</td>
</tr>
<tr id="row743511814178"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p144361218151714"><a name="p144361218151714"></a><a name="p144361218151714"></a>foreign_server_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p843691813175"><a name="p843691813175"></a><a name="p843691813175"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p5436181816176"><a name="p5436181816176"></a><a name="p5436181816176"></a>外部服务器定义所在的database名称。</p>
</td>
</tr>
<tr id="row4857142761714"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p1858132761713"><a name="p1858132761713"></a><a name="p1858132761713"></a>foreign_server_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p28589274178"><a name="p28589274178"></a><a name="p28589274178"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p1185842751712"><a name="p1185842751712"></a><a name="p1185842751712"></a>外部服务器名称。</p>
</td>
</tr>
<tr id="row9243153114172"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p4244431151710"><a name="p4244431151710"></a><a name="p4244431151710"></a>srvowner</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p6245133131711"><a name="p6245133131711"></a><a name="p6245133131711"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p22451131191714"><a name="p22451131191714"></a><a name="p22451131191714"></a>外部服务器所有者。</p>
</td>
</tr>
</tbody>
</table>
