# \_PG\_FOREIGN\_DATA\_WRAPPERS<a name="EN-US_TOPIC_0310260667"></a>

**\_PG\_FOREIGN\_DATA\_WRAPPERS**  displays information about a foreign-data wrapper. Only the sysadmin user has the permission to view this view.

**Table  1**  \_PG\_FOREIGN\_DATA\_WRAPPERS columns

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a>Name</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a>Type</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a>Description</p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p151851333151813"><a name="p151851333151813"></a><a name="p151851333151813"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p3182153331820"><a name="p3182153331820"></a><a name="p3182153331820"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p12181633181818"><a name="p12181633181818"></a><a name="p12181633181818"></a>OID of the foreign-data wrapper</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p1117973381818"><a name="p1117973381818"></a><a name="p1117973381818"></a>fdwowner</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p71771233131813"><a name="p71771233131813"></a><a name="p71771233131813"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p1617613371814"><a name="p1617613371814"></a><a name="p1617613371814"></a>OID of the owner of the foreign-data wrapper</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p171743335182"><a name="p171743335182"></a><a name="p171743335182"></a>fdwoptions</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p71723339188"><a name="p71723339188"></a><a name="p71723339188"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p58517208219"><a name="p58517208219"></a><a name="p58517208219"></a>Foreign-data wrapper specific option, expressed in a string in the format of <em id="i17133131815224"><a name="i17133131815224"></a><a name="i17133131815224"></a>keyword</em><strong id="b81681215226"><a name="b81681215226"></a><a name="b81681215226"></a>=</strong><em id="i718102452210"><a name="i718102452210"></a><a name="i718102452210"></a>value</em></p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p9169173311813"><a name="p9169173311813"></a><a name="p9169173311813"></a>foreign_data_wrapper_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1616633315187"><a name="p1616633315187"></a><a name="p1616633315187"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p6165533191819"><a name="p6165533191819"></a><a name="p6165533191819"></a>Name of the database where the foreign-data wrapper is located (always the current database)</p>
</td>
</tr>
<tr id="row0654102510108"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p616313320185"><a name="p616313320185"></a><a name="p616313320185"></a>foreign_data_wrapper_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p2161133361814"><a name="p2161133361814"></a><a name="p2161133361814"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p14160733141818"><a name="p14160733141818"></a><a name="p14160733141818"></a>Name of the foreign-data wrapper</p>
</td>
</tr>
<tr id="row113297295101"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p161581133141813"><a name="p161581133141813"></a><a name="p161581133141813"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1015614335183"><a name="p1015614335183"></a><a name="p1015614335183"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p11687168142613"><a name="p11687168142613"></a><a name="p11687168142613"></a>Role of the owner of the foreign-data wrapper</p>
</td>
</tr>
<tr id="row1914143861019"><td class="cellrowborder" valign="top" width="29.452945294529453%"><p id="p13151163321817"><a name="p13151163321817"></a><a name="p13151163321817"></a>foreign_data_wrapper_language</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p7150173321812"><a name="p7150173321812"></a><a name="p7150173321812"></a>information_schema.character_data</p>
</td>
<td class="cellrowborder" valign="top" width="39.13391339133913%"><p id="p171483338181"><a name="p171483338181"></a><a name="p171483338181"></a>Programming language of the foreign-data wrapper</p>
</td>
</tr>
</tbody>
</table>

