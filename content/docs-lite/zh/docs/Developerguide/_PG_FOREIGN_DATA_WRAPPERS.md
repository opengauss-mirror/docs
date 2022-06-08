# \_PG\_FOREIGN\_DATA\_WRAPPERS<a name="ZH-CN_TOPIC_0310260667"></a>

显示外部数据封装器的信息。该视图只有sysadmin权限可以查看。

**表 1**  \_PG\_FOREIGN\_DATA\_WRAPPERS字段

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>名称</strong></p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>类型</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>描述</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p151851333151813"><a name="p151851333151813"></a><a name="p151851333151813"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p3182153331820"><a name="p3182153331820"></a><a name="p3182153331820"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p12181633181818"><a name="p12181633181818"></a><a name="p12181633181818"></a>外部数据封装器的oid。</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p1117973381818"><a name="p1117973381818"></a><a name="p1117973381818"></a>fdwowner</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p71771233131813"><a name="p71771233131813"></a><a name="p71771233131813"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p1617613371814"><a name="p1617613371814"></a><a name="p1617613371814"></a>外部数据封装器的所有者的oid。</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p171743335182"><a name="p171743335182"></a><a name="p171743335182"></a>fdwoptions</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p71723339188"><a name="p71723339188"></a><a name="p71723339188"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p58517208219"><a name="p58517208219"></a><a name="p58517208219"></a>外部数据封装器指定选项，使用“keyword=value”格式的字符串。</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p9169173311813"><a name="p9169173311813"></a><a name="p9169173311813"></a>foreign_data_wrapper_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1616633315187"><a name="p1616633315187"></a><a name="p1616633315187"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p6165533191819"><a name="p6165533191819"></a><a name="p6165533191819"></a>外部封装器所在的数据库名称（永远为当前数据库）。</p>
</td>
</tr>
<tr id="row0654102510108"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p616313320185"><a name="p616313320185"></a><a name="p616313320185"></a>foreign_data_wrapper_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p2161133361814"><a name="p2161133361814"></a><a name="p2161133361814"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p14160733141818"><a name="p14160733141818"></a><a name="p14160733141818"></a>外部数据封装器名称。</p>
</td>
</tr>
<tr id="row113297295101"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p161581133141813"><a name="p161581133141813"></a><a name="p161581133141813"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1015614335183"><a name="p1015614335183"></a><a name="p1015614335183"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p11687168142613"><a name="p11687168142613"></a><a name="p11687168142613"></a>外部数据封装器所有者的角色名称。</p>
</td>
</tr>
<tr id="row1914143861019"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p13151163321817"><a name="p13151163321817"></a><a name="p13151163321817"></a>foreign_data_wrapper_language</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p7150173321812"><a name="p7150173321812"></a><a name="p7150173321812"></a>information_schema.character_data</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p171483338181"><a name="p171483338181"></a><a name="p171483338181"></a>外部数据封装器的实现语言。</p>
</td>
</tr>
</tbody>
</table>

