# Character Types<a name="EN-US_TOPIC_0289900587"></a>

[Table 1](#en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_table29186418)  lists the character data types supported by openGauss. For string operators and related built-in functions, see  [Character Processing Functions and Operators](character-processing-functions-and-operators.md).

**Table  1**  Character types

<a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_table29186418"></a>
<table><thead align="left"><tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row3929052"><th class="cellrowborder" valign="top" width="26%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p49817820"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p49817820"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p49817820"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="53%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p8711637"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p8711637"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p8711637"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="21%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p34553966"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p34553966"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p34553966"></a>Storage Space</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row47407823"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p14828449"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p14828449"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p14828449"></a>CHAR(n)</p>
<p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a43573b076a65437daa17aab83acb9fa3"></a>CHARACTER(n)</p>
<p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ae30552cd3e8f4ffabd99de4be254a248"></a>NCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p60253707"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p60253707"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p60253707"></a>Fixed-length character string, blank padded. <strong id="b15155104015118"><a name="b15155104015118"></a><a name="b15155104015118"></a>n</strong> indicates the string length. If it is not specified, the default precision <strong id="b91604401712"><a name="b91604401712"></a><a name="b91604401712"></a>1</strong> is used.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48712118"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48712118"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48712118"></a>The maximum size is 10 MB.</p>
</td>
</tr>
<tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row35755883"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p10545434"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p10545434"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p10545434"></a>VARCHAR(n)</p>
<p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a1df97d3ea8c543498935d676762f6f0b"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a1df97d3ea8c543498935d676762f6f0b"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a1df97d3ea8c543498935d676762f6f0b"></a>CHARACTER VARYING(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48873821"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48873821"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48873821"></a>Variable-length string. In PostgreSQL-compatible mode, <strong id="b2827201112818"><a name="b2827201112818"></a><a name="b2827201112818"></a>n</strong> indicates the string length. In other compatibility modes, <strong id="b685317246282"><a name="b685317246282"></a><a name="b685317246282"></a>n</strong> indicates the byte length.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p66465437"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p66465437"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p66465437"></a>The maximum size is 10 MB.</p>
</td>
</tr>
<tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row61318023"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p703948"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p703948"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p703948"></a>VARCHAR2(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p57019842"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p57019842"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p57019842"></a>Variable-length string. It is the alias of the VARCHAR(n) type. <strong id="b33316212213"><a name="b33316212213"></a><a name="b33316212213"></a>n</strong> indicates the string length.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p55204496"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p55204496"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p55204496"></a>The maximum size is 10 MB.</p>
</td>
</tr>
<tr id="row936115210819"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="p1349671213814"><a name="p1349671213814"></a><a name="p1349671213814"></a>NVARCHAR(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="p64967129818"><a name="p64967129818"></a><a name="p64967129818"></a>Variable-length string. It is the alias of the NVARCHAR2(n) type. <strong id="b4848290395325"><a name="b4848290395325"></a><a name="b4848290395325"></a>n</strong> indicates the string length.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="p04961126816"><a name="p04961126816"></a><a name="p04961126816"></a>The maximum size is 10 MB.</p>
</td>
</tr>
<tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row26286999"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48872202"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48872202"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p48872202"></a>NVARCHAR2(n)</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p66334269"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p66334269"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p66334269"></a>Variable-length string. <strong id="b928981418143755"><a name="b928981418143755"></a><a name="b928981418143755"></a>n</strong> indicates the string length.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p4366680"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p4366680"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p4366680"></a>The maximum size is 10 MB.</p>
</td>
</tr>
<tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_row61434756"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p51104240"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p51104240"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p51104240"></a>TEXT</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p32527216"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p32527216"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_en-us_topic_0058966269_p32527216"></a>Variable-length string.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_p179753542501"><a name="en-us_topic_0283136755_p179753542501"></a><a name="en-us_topic_0283136755_p179753542501"></a>The maximum size is 1 GB minus 1 byte. However, the size of the column description header and the size of the tuple (less than 1 GB minus 1 byte) where the column is located must also be considered. Therefore, the maximum size of the TEXT type may be less than 1 GB minus 1 byte.</p>
</td>
</tr>
<tr id="en-us_topic_0283136755_row3614101912518"><td class="cellrowborder" valign="top" width="26%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_p82741626115115"><a name="en-us_topic_0283136755_p82741626115115"></a><a name="en-us_topic_0283136755_p82741626115115"></a>CLOB</p>
</td>
<td class="cellrowborder" valign="top" width="53%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_p5275132610513"><a name="en-us_topic_0283136755_p5275132610513"></a><a name="en-us_topic_0283136755_p5275132610513"></a>A big text object. It is the alias of the TEXT type.</p>
</td>
<td class="cellrowborder" valign="top" width="21%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_p15491232135111"><a name="en-us_topic_0283136755_p15491232135111"></a><a name="en-us_topic_0283136755_p15491232135111"></a>The maximum size is 4 GB minus 1 byte. However, the size of the column description header and the size of the tuple (less than 4 GB minus 1 byte) where the column is located must also be considered. Therefore, the maximum size of the CLOB type may be less than 4 GB minus 1 byte.</p>
</td>
</tr>
</tbody>
</table>

>![](public_sys-resources/icon-note.gif) **NOTE:** 
>1.  In addition to the restriction on the size of each column, the total size of each tuple cannot exceed 1 GB minus 1 byte and is affected by the control header information of the column, the control header information of the tuple, and whether null fields exist in the tuple.
>2.  NCHAR is the alias of the bpchar type, and NCHAR\(n\) is the alias of the VARCHAR\(n\) type.
>3.  Only advanced packages related to dbe\_lob support CLOBs whose size is greater than 1 GB. System functions do not support CLOBs whose size is greater than 1 GB.

In openGauss, there are two other fixed-length character types, as shown in  [Table 2](#en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_tf74658686f5e4d979adf0ac04769ea16). The  **name**  type exists only for the storage of identifiers in the internal system catalogs and is not intended for use by general users. Its length is currently defined as 64 bytes \(63 usable characters plus terminator\). The type  **"char"**  only uses one byte of storage. It is internally used in the system catalogs as a simplistic enumeration type.

**Table  2**  Special character types

<a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_tf74658686f5e4d979adf0ac04769ea16"></a>
<table><thead align="left"><tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_re0c38be161454bb99fb56d330ee9b8c3"><th class="cellrowborder" valign="top" width="25.69%" id="mcps1.2.4.1.1"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a33f5ac05b51d4727ba724d2c48228870"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a33f5ac05b51d4727ba724d2c48228870"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a33f5ac05b51d4727ba724d2c48228870"></a>Name</p>
</th>
<th class="cellrowborder" valign="top" width="46.7%" id="mcps1.2.4.1.2"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a77dbc02b640f409c8237edc674ec1d52"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a77dbc02b640f409c8237edc674ec1d52"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a77dbc02b640f409c8237edc674ec1d52"></a>Description</p>
</th>
<th class="cellrowborder" valign="top" width="27.61%" id="mcps1.2.4.1.3"><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ac84a054135394f6d9ed96359a847e99c"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ac84a054135394f6d9ed96359a847e99c"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ac84a054135394f6d9ed96359a847e99c"></a>Storage Space</p>
</th>
</tr>
</thead>
<tbody><tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_r1afbf1d8c67a4c35837ae29bef5e4e82"><td class="cellrowborder" valign="top" width="25.69%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_af4bdf936e91b4ba4b115d008e4adc459"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_af4bdf936e91b4ba4b115d008e4adc459"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_af4bdf936e91b4ba4b115d008e4adc459"></a>name</p>
</td>
<td class="cellrowborder" valign="top" width="46.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_adb6b55f2cd0248ff8c4fa3052903abd5"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_adb6b55f2cd0248ff8c4fa3052903abd5"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_adb6b55f2cd0248ff8c4fa3052903abd5"></a>Internal type for object names</p>
</td>
<td class="cellrowborder" valign="top" width="27.61%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ac4e5f7b1a5604d53b242a9f23b417afd"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ac4e5f7b1a5604d53b242a9f23b417afd"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_ac4e5f7b1a5604d53b242a9f23b417afd"></a>64 bytes</p>
</td>
</tr>
<tr id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_r7c2fd5b1ff06491db48002b2674a0ad3"><td class="cellrowborder" valign="top" width="25.69%" headers="mcps1.2.4.1.1 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a439ae6477466482bba7b196ca1141a69"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a439ae6477466482bba7b196ca1141a69"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a439ae6477466482bba7b196ca1141a69"></a>"char"</p>
</td>
<td class="cellrowborder" valign="top" width="46.7%" headers="mcps1.2.4.1.2 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_adc569ac2c8e24b0aa2fe9aabceadbff8"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_adc569ac2c8e24b0aa2fe9aabceadbff8"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_adc569ac2c8e24b0aa2fe9aabceadbff8"></a>Single-byte internal type</p>
</td>
<td class="cellrowborder" valign="top" width="27.61%" headers="mcps1.2.4.1.3 "><p id="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a23ddef21979e4f87b21a34a7cad6bc2b"><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a23ddef21979e4f87b21a34a7cad6bc2b"></a><a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_a23ddef21979e4f87b21a34a7cad6bc2b"></a>1 byte</p>
</td>
</tr>
</tbody>
</table>

## Examples<a name="en-us_topic_0283136755_en-us_topic_0237121950_en-us_topic_0059777889_s448ecb1ff2224d11ababab3c04331d89"></a>

```
-- Create a table.
openGauss=# CREATE TABLE char_type_t1 
(
    CT_COL1 CHARACTER(4)
);

-- Insert data.
openGauss=# INSERT INTO char_type_t1 VALUES ('ok');

-- Query data in the table.
openGauss=# SELECT ct_col1, char_length(ct_col1) FROM char_type_t1;
 ct_col1 | char_length 
---------+-------------
 ok      |           4
(1 row)

-- Delete the table.
openGauss=# DROP TABLE char_type_t1;

-- Create a table.
openGauss=# CREATE TABLE char_type_t2  
(
    CT_COL1 VARCHAR(5)
);

-- Insert data.
openGauss=# INSERT INTO char_type_t2 VALUES ('ok');

openGauss=# INSERT INTO char_type_t2 VALUES ('good');

-- Specify the type length. An error is reported if an inserted string exceeds this length.
openGauss=# INSERT INTO char_type_t2 VALUES ('too long');
ERROR:  value too long for type character varying(5)
CONTEXT:  referenced column: ct_col1

-- Specify the type length. A string exceeding this length is truncated.
openGauss=# INSERT INTO char_type_t2 VALUES ('too long'::varchar(5));

-- Query data.
openGauss=# SELECT ct_col1, char_length(ct_col1) FROM char_type_t2;
 ct_col1 | char_length 
---------+-------------
 ok      |           2
 good    |           4
 too l   |           5
(3 rows)

-- Delete data.
openGauss=# DROP TABLE char_type_t2;
```

