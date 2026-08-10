# \_PG\_FOREIGN\_TABLES<a name="ZH-CN_TOPIC_0310260670"></a>

存储所有的定义在本数据库的外部表信息。只显示当前用户有权访问的外部表信息。该视图只有sysadmin权限可以查看。

**表 1**  \_PG\_FOREIGN\_TABLES字段

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a><strong id="b1316817109817"><a name="b1316817109817"></a><a name="b1316817109817"></a>名称</strong></p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a><strong id="b1016820101589"><a name="b1016820101589"></a><a name="b1016820101589"></a>类型</strong></p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a><strong id="b1716911015819"><a name="b1716911015819"></a><a name="b1716911015819"></a>描述</strong></p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p19815161613504"><a name="p19815161613504"></a><a name="p19815161613504"></a>foreign_table_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p178131316185010"><a name="p178131316185010"></a><a name="p178131316185010"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p128106169502"><a name="p128106169502"></a><a name="p128106169502"></a>外部表所在的数据库名称（永远是当前数据库）。</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p1980831675010"><a name="p1980831675010"></a><a name="p1980831675010"></a>foreign_table_schema</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p68051916105011"><a name="p68051916105011"></a><a name="p68051916105011"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p28033166505"><a name="p28033166505"></a><a name="p28033166505"></a>外部表的schema名称。</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p28002164505"><a name="p28002164505"></a><a name="p28002164505"></a>foreign_table_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p9798171625012"><a name="p9798171625012"></a><a name="p9798171625012"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p37951416205010"><a name="p37951416205010"></a><a name="p37951416205010"></a>外部表的名称。</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p1779351618507"><a name="p1779351618507"></a><a name="p1779351618507"></a>ftoptions</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p1779020168509"><a name="p1779020168509"></a><a name="p1779020168509"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p9786151620509"><a name="p9786151620509"></a><a name="p9786151620509"></a>外部表的可选项。</p>
</td>
</tr>
<tr id="row743511814178"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p5784171617505"><a name="p5784171617505"></a><a name="p5784171617505"></a>foreign_server_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p8782516125011"><a name="p8782516125011"></a><a name="p8782516125011"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p17779111618501"><a name="p17779111618501"></a><a name="p17779111618501"></a>外部服务器所在的数据库名称（永远是当前数据库）。</p>
</td>
</tr>
<tr id="row4857142761714"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p11776116115013"><a name="p11776116115013"></a><a name="p11776116115013"></a>foreign_server_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p377210162509"><a name="p377210162509"></a><a name="p377210162509"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p276910163506"><a name="p276910163506"></a><a name="p276910163506"></a>外部服务器的名称。</p>
</td>
</tr>
<tr id="row9243153114172"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p1766816125017"><a name="p1766816125017"></a><a name="p1766816125017"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p1176441655012"><a name="p1176441655012"></a><a name="p1176441655012"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p672220166501"><a name="p672220166501"></a><a name="p672220166501"></a>所有者的角色名称。</p>
</td>
</tr>
</tbody>
</table>
