# \_PG\_USER\_MAPPINGS<a name="EN-US_TOPIC_0310260671"></a>

**\_PG\_USER\_MAPPINGS**  stores mappings from local users to remote users. Only the sysadmin user has the permission to view this view.

**Table  1**  \_PG\_USER\_MAPPINGS columns

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a>Name</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a>Type</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a>Description</p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p916919107811"><a name="p916919107811"></a><a name="p916919107811"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p216911100815"><a name="p216911100815"></a><a name="p216911100815"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p382419359375"><a name="p382419359375"></a><a name="p382419359375"></a>OID of the mapping from the local user to a remote user</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p813487181720"><a name="p813487181720"></a><a name="p813487181720"></a>umoptions</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p1013416713174"><a name="p1013416713174"></a><a name="p1013416713174"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p173511513616"><a name="p173511513616"></a><a name="p173511513616"></a>User mapping specific options, expressed in a string in the format of <em id="i62091915112418"><a name="i62091915112418"></a><a name="i62091915112418"></a>keyword</em><strong id="b52091715182411"><a name="b52091715182411"></a><a name="b52091715182411"></a>=</strong><em id="i18209201515244"><a name="i18209201515244"></a><a name="i18209201515244"></a>value</em></p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p3107611171717"><a name="p3107611171717"></a><a name="p3107611171717"></a>umuser</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p10107191141716"><a name="p10107191141716"></a><a name="p10107191141716"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p11993113111366"><a name="p11993113111366"></a><a name="p11993113111366"></a>OID of the local user being mapped (<strong id="b179325493915"><a name="b179325493915"></a><a name="b179325493915"></a>0</strong> if the user mapping is public)</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p1869616141174"><a name="p1869616141174"></a><a name="p1869616141174"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p10696814191711"><a name="p10696814191711"></a><a name="p10696814191711"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p11697114171718"><a name="p11697114171718"></a><a name="p11697114171718"></a>Role of the local user</p>
</td>
</tr>
<tr id="row743511814178"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p144361218151714"><a name="p144361218151714"></a><a name="p144361218151714"></a>foreign_server_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p843691813175"><a name="p843691813175"></a><a name="p843691813175"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p5436181816176"><a name="p5436181816176"></a><a name="p5436181816176"></a>Name of the database where the foreign server is defined in</p>
</td>
</tr>
<tr id="row4857142761714"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p1858132761713"><a name="p1858132761713"></a><a name="p1858132761713"></a>foreign_server_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p28589274178"><a name="p28589274178"></a><a name="p28589274178"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p1185842751712"><a name="p1185842751712"></a><a name="p1185842751712"></a>Name of the foreign server</p>
</td>
</tr>
<tr id="row9243153114172"><td class="cellrowborder" valign="top" width="30.383038303830386%"><p id="p4244431151710"><a name="p4244431151710"></a><a name="p4244431151710"></a>srvowner</p>
</td>
<td class="cellrowborder" valign="top" width="30.243024302430243%"><p id="p6245133131711"><a name="p6245133131711"></a><a name="p6245133131711"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p22451131191714"><a name="p22451131191714"></a><a name="p22451131191714"></a>Owner of the foreign server</p>
</td>
</tr>
</tbody>
</table>

