# \_PG\_FOREIGN\_TABLES<a name="EN-US_TOPIC_0310260670"></a>

**\_PG\_FOREIGN\_TABLES**  stores information about all foreign tables defined in the current database, whereas displays information about foreign tables accessible to the current user. Only the sysadmin user has the permission to view this view.

**Table  1**  \_PG\_FOREIGN\_TABLES columns

<a name="table1011513101687"></a>
<table><tbody><tr id="row201685101086"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p7168210483"><a name="p7168210483"></a><a name="p7168210483"></a>Name</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p1816817101585"><a name="p1816817101585"></a><a name="p1816817101585"></a>Type</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p111687101286"><a name="p111687101286"></a><a name="p111687101286"></a>Description</p>
</td>
</tr>
<tr id="row81692010682"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p19815161613504"><a name="p19815161613504"></a><a name="p19815161613504"></a>foreign_table_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p178131316185010"><a name="p178131316185010"></a><a name="p178131316185010"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p128106169502"><a name="p128106169502"></a><a name="p128106169502"></a>Name of the database where the foreign table is located (always the current database)</p>
</td>
</tr>
<tr id="row413211712177"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p1980831675010"><a name="p1980831675010"></a><a name="p1980831675010"></a>foreign_table_schema</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p68051916105011"><a name="p68051916105011"></a><a name="p68051916105011"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p28033166505"><a name="p28033166505"></a><a name="p28033166505"></a>Name of the schema that the foreign table is in</p>
</td>
</tr>
<tr id="row201063118176"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p28002164505"><a name="p28002164505"></a><a name="p28002164505"></a>foreign_table_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p9798171625012"><a name="p9798171625012"></a><a name="p9798171625012"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p37951416205010"><a name="p37951416205010"></a><a name="p37951416205010"></a>Name of the foreign table</p>
</td>
</tr>
<tr id="row3696121410172"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p1779351618507"><a name="p1779351618507"></a><a name="p1779351618507"></a>ftoptions</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p1779020168509"><a name="p1779020168509"></a><a name="p1779020168509"></a>text[]</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p9786151620509"><a name="p9786151620509"></a><a name="p9786151620509"></a>Foreign table options</p>
</td>
</tr>
<tr id="row743511814178"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p5784171617505"><a name="p5784171617505"></a><a name="p5784171617505"></a>foreign_server_catalog</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p8782516125011"><a name="p8782516125011"></a><a name="p8782516125011"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p17779111618501"><a name="p17779111618501"></a><a name="p17779111618501"></a>Name of the database where the foreign server is located (always the current database)</p>
</td>
</tr>
<tr id="row4857142761714"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p11776116115013"><a name="p11776116115013"></a><a name="p11776116115013"></a>foreign_server_name</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p377210162509"><a name="p377210162509"></a><a name="p377210162509"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p276910163506"><a name="p276910163506"></a><a name="p276910163506"></a>Name of the foreign server</p>
</td>
</tr>
<tr id="row9243153114172"><td class="cellrowborder" valign="top" width="29.732973297329735%"><p id="p1766816125017"><a name="p1766816125017"></a><a name="p1766816125017"></a>authorization_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="30.893089308930893%"><p id="p1176441655012"><a name="p1176441655012"></a><a name="p1176441655012"></a>information_schema.sql_identifier</p>
</td>
<td class="cellrowborder" valign="top" width="39.373937393739375%"><p id="p672220166501"><a name="p672220166501"></a><a name="p672220166501"></a>Role of the owner</p>
</td>
</tr>
</tbody>
</table>

