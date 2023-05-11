# \_PG\_FOREIGN\_SERVERS

显示外部服务器的信息。该视图只有sysadmin权限可以查看。

**表 1**  \_PG\_FOREIGN\_SERVERS字段

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>名称</strong></p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>类型</strong></p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>描述</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p82821423598"><a name="p82821423598"></a><a name="p82821423598"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p1728072315915"><a name="p1728072315915"></a><a name="p1728072315915"></a>oid</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p1827616231597"><a name="p1827616231597"></a><a name="p1827616231597"></a>外部服务器的oid。</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p1627420231791"><a name="p1627420231791"></a><a name="p1627420231791"></a>srvoptions</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p11271423697"><a name="p11271423697"></a><a name="p11271423697"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p179051293134"><a name="p179051293134"></a><a name="p179051293134"></a>外部服务器指定选项，使用“keyword=value”格式的字符串。</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p15267223193"><a name="p15267223193"></a><a name="p15267223193"></a>foreign_server_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p15263123596"><a name="p15263123596"></a><a name="p15263123596"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p726052311918"><a name="p726052311918"></a><a name="p726052311918"></a>外部服务器所在database名称（永远为当前数据库）。</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p17258923196"><a name="p17258923196"></a><a name="p17258923196"></a>foreign_server_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p425532314919"><a name="p425532314919"></a><a name="p425532314919"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p62521623792"><a name="p62521623792"></a><a name="p62521623792"></a>外部服务器名称。</p>
</td>
</tr>
<tr id="row0654102510108"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p46551925201016"><a name="p46551925201016"></a><a name="p46551925201016"></a>foreign_data_wrapper_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p565632581018"><a name="p565632581018"></a><a name="p565632581018"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p9656202511106"><a name="p9656202511106"></a><a name="p9656202511106"></a>外部数据封装器所在database名称（永远为当前数据库）。</p>
</td>
</tr>
<tr id="row113297295101"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p632982991014"><a name="p632982991014"></a><a name="p632982991014"></a>foreign_data_wrapper_name</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p2329192918105"><a name="p2329192918105"></a><a name="p2329192918105"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p63299296102"><a name="p63299296102"></a><a name="p63299296102"></a>外部数据封装器名称。</p>
</td>
</tr>
<tr id="row1914143861019"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p891510384108"><a name="p891510384108"></a><a name="p891510384108"></a>foreign_server_type</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p12915143816106"><a name="p12915143816106"></a><a name="p12915143816106"></a>information_schema.character_data</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p6915438101014"><a name="p6915438101014"></a><a name="p6915438101014"></a>外部服务器的类型。</p>
</td>
</tr>
<tr id="row15418842111016"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p341854210100"><a name="p341854210100"></a><a name="p341854210100"></a>foreign_server_version</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p4418194241014"><a name="p4418194241014"></a><a name="p4418194241014"></a>information_schema.character_data</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p1241944220105"><a name="p1241944220105"></a><a name="p1241944220105"></a>外部服务器的版本。</p>
</td>
</tr>
<tr id="row061224515100"><td class="cellrowborder" valign="top" width="30.483048304830483%"><p id="p1261354510101"><a name="p1261354510101"></a><a name="p1261354510101"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="31.41314131413141%"><p id="p661313459100"><a name="p661313459100"></a><a name="p661313459100"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="38.10381038103811%"><p id="p061344511102"><a name="p061344511102"></a><a name="p061344511102"></a>外部服务器的所有者的角色名称。</p>
</td>
</tr>
</tbody>
</table>

